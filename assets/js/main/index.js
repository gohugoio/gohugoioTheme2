import * as params from "@params";
import { newNavStore, newDocTreeController, initColorScheme, bridgeTurboAndAlpine } from "./nav/index";
import Alpine from "jslibs/alpinejs/v3/alpinejs/dist/module.esm.js";
import intersect from "jslibs/alpinejs/v3/intersect/dist/module.esm.js";
import persist from "jslibs/alpinejs/v3/persist/dist/module.esm.js";
import focus from "jslibs/alpinejs/v3/focus/dist/module.esm.js";

// Client state.
(function () {
  // Now we know that the browser has JS enabled.
  document.documentElement.classList.remove("no-js");
})();

// Turbolinks init.
(function () {
  document.addEventListener("turbo:render", function (e) {
    // This is also called right after the body start. This is added to prevent flicker on navigation.
    initColorScheme();
  });

  // TODO1 form actions?
})();

// Set up and start Alpine.
(function () {
  // Register AlpineJS plugins.
  {
    Alpine.plugin(focus);
    Alpine.plugin(intersect);
    Alpine.plugin(persist);
  }

  // Register AlpineJS controllers.
  {
    // Register AlpineJS data controllers.
    let searchConfig = {
      index: "hugodocs",
      app_id: "BH4D9OD16A",
      api_key: "167e7998590aebda7f9fedcf86bc4a55",
    };

    Alpine.data("docTreeController", () => newDocTreeController());
    Alpine.data("searchController", () => newSearchController(searchConfig));
  }

  // Set up AlpineJS stores.
  {
    Alpine.store("nav", newNavStore(Alpine));
  }

  // TODO1 remove me
  window.Alpine = Alpine;

  // Start Alpine.
  Alpine.start();

  // Start the Turbo-Alpine bridge.
  bridgeTurboAndAlpine(Alpine);

  let containerScrollTops = {};

  // To preserve scroll position in scrolling elements on navigation add data-turbo-preserve-scroll-container="somename" to the scrolling container.
  addEventListener("turbo:click", () => {
    document.querySelectorAll("[data-turbo-preserve-scroll-container]").forEach((ele) => {
      containerScrollTops[ele.dataset.turboPreserveScrollContainer] = ele.scrollTop;
    });
  });

  addEventListener("turbo:load", () => {
    document.querySelectorAll("[data-turbo-preserve-scroll-container]").forEach((ele) => {
      const containerScrollTop = containerScrollTops[ele.dataset.turboPreserveScrollContainer];
      if (containerScrollTop) ele.scrollTo(0, containerScrollTop);
    });

    containerScrollTops = {};
  });
})();

// TODO(bep) move out into its own file, also pull params out into config.
function newSearchController(cfg) {
  const groupByLvl0 = (array) => {
    if (!array) return [];
    return array.reduce((result, currentValue) => {
      (result[currentValue.hierarchy.lvl0] = result[currentValue.hierarchy.lvl0] || []).push(currentValue);
      return result;
    }, {});
  };

  const designMode = false;

  return {
    query: designMode ? "shortcodes" : "",
    open: designMode,
    result: {},
    toggleOpen: function () {
      this.open = !this.open;
      this.checkOpen();
    },
    checkOpen: function () {
      if (!this.open) {
        return;
      }
      this.search();
      this.$nextTick(() => {
        this.$refs.input.focus();
      });
    },

    init: function () {
      this.checkOpen();
      return this.$nextTick(() => {
        this.$watch("query", () => {
          this.search();
        });
      });
    },
    search: function () {
      if (!this.query) {
        this.result = {};
        return;
      }
      var queries = {
        requests: [
          {
            indexName: cfg.index,
            params: `query=${encodeURIComponent(this.query)}`,
            attributesToHighlight: ["hierarchy", "content"],
            attributesToRetrieve: ["hierarchy", "url", "content"],
          },
        ],
      };

      const host = `https://${cfg.app_id}-dsn.algolia.net`;
      const url = `${host}/1/indexes/*/queries`;

      fetch(url, {
        method: "POST",
        headers: {
          "X-Algolia-Application-Id": cfg.app_id,
          "X-Algolia-API-Key": cfg.api_key,
        },
        body: JSON.stringify(queries),
      })
        .then((response) => response.json())
        .then((data) => {
          this.result = groupByLvl0(data.results[0].hits);
          //console.log(this.result);
        });
    },
  };
}
