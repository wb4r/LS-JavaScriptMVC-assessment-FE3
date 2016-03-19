// Right Panel Module - RIGHT PANEL Controller

// --> js/mod_rightpanel/controller/controller.js

App.module("RightPanel", function(RightPanel, App, Backbone, Marionette, $, _) {

  RightPanel.Controller = {
    init: function(model) {

      var headerView = new App.RightPanel.Views.Header(model);
      App.RightPanel.regions.header.show(headerView)

      headerView.on("switchTitleView", function(childView, model) {
        headerView.render()
        App.LeftPanel.Controller.renderLeft()
      })

    }
  }
})
