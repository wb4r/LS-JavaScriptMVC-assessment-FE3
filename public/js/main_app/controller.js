// Main App - Controller

// --> js/main_app/controller.js
var self = this;

App.Controller = {
  init: function() {
    App.Controller.BigList = new App.Entities.Lists();

    // providing access to BigList globally
    var fullAccesBigList = (function(global) {
      global.BigList = App.Controller.BigList
    })(self)
  },
  loadLocalStorage: function() {
    // App.Controller.BigList.fetch();
    BigList.fetch();

    // var listOfListsView = new App.LeftPanel.Views.Lists({
    //   collection: App.Controller.BigList
    // })
    // // FIX HERE
    // App.LeftPanel.regions.pendingList.show(listOfListsView)
    //
  },
  initiateBigList: function() {
    // var listOfListsView = new App.LeftPanel.Views.Lists({
    //   collection: App.Controller.BigList
    // })
    //
    // // listOfListsView.on("change", function(childView, model) {
    // //   console.log(childView);
    // //   console.log(model);
    // // })
    //
    // App.LeftPanel.regions.pendingList.show(listOfListsView)
  },
  newList: function() {
    var id = this.getId();

    var todos = new App.Entities.Todos();
    var newList = new App.Entities.List({todos: todos});
    newList.set({"id": id, "title": "Title-" + id});
    BigList.create(newList);
    App.LeftPanel.Controller.selectPendingAndRender()
  },
  getId: function() {
    var id;

    if (BigList) {
      id = BigList.length + 1;
    } else {
      id = 1;
    }
    return id;
  }
}
