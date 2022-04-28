export function newDocTreeController() {
  var debug = 1 ? console.log.bind(console, "[doctree]") : function () {};

  return {
    treeState: {
      // The href of the current page.
      currentNode: "",
    },
    init: async function () {
      // Holds all the documentation sections.
      let docTree = await (await fetch("/doctree.json")).json();
      const setTreeState = (node) => {
        this.treeState[node.href] = {
          open: false,
        };
        if (!node.children) return;
        node.children.forEach((element) => {
          // Recurse down the tree.
          setTreeState(element);
        });
      };

      setTreeState(docTree);
      this.setCurrentActive();
    },

    setCurrentActive: function () {
      let ref = location.pathname;
      this.treeState.currentNode = ref;
      for (let key in this.treeState) {
        this.treeState[key].open = ref == key || ref.startsWith(key);
      }
    },

    isCurrent: function (ref) {
      return this.treeState.currentNode == ref;
    },

    onBeforeRender: function () {
      debug("onBeforeRender");
      this.setCurrentActive();
    },

    toggleNode: function (ref) {
      let node = this.treeState[ref];
      if (!node) {
        return;
      }
      let wasOpen = node.open;
      node.open = !node.open;
      if (!wasOpen) {
        Turbo.visit(ref);
      }
    },

    isOpen: function (ref) {
      let node = this.treeState[ref];
      if (!node) return false;
      return node.open;
    },
  };
}
