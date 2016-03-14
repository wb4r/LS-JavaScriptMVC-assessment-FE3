// Left Panel Module - LEFT PANEL Controller

// --> js/mod_leftpanel/controller/controller.js

App.module("LeftPanel", function(LeftPanel, App, Backbone, Marionette, $, _) {

  LeftPanel.Controller = {
    init: function() {
      // New List Button
      var btn = new App.LeftPanel.Entities.NewListBtn();
      var btnView = new App.LeftPanel.Views.NewListBtn();
      App.LeftPanel.regions.newListBtn.show(btnView);

      btnView.on("createList", function(childView, model) {
        App.LeftPanel.PendingLists.Controller.newList();
      });

      // btnView.on("changeTitle", function(childView, model) {
      //   console.log(childView);
      //   console.log(model);
      // })
    }
  }
})
