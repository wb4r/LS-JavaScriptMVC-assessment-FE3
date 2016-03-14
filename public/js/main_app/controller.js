// Main App - Controller

// --> js/main_app/controller.js

App.Controller = {
  init: function() {
    App.Controller.BigList = new App.Entities.Lists();
  },
  loadLocalStorage: function() {
    App.Controller.BigList.fetch();
    var listOfListsView = new App.LeftPanel.Views.Lists({
      collection: App.Controller.BigList
    })
    App.LeftPanel.regions.pendingList.show(listOfListsView)
  }
  // newListBtn: function() {
  //   var btn = new App.Entities.NewListBtn();
  //   var btnView = new App.Views.NewListBtn();
  //   App.regions.newListBtn.show(btnView);
  // }
}
