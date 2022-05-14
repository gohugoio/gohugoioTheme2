export function newSearchController(cfg) {
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
