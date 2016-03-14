// Left Panel Module - LEFT PANEL App

// --> js/mod_leftpanel/app.js

App.module("LeftPanel", function(LeftPanel, App, Backbone, Marionette, $, _) {


})

App.LeftPanel.on("before:start", function() {
  var Layout = Marionette.LayoutView.extend({
    el: "#left-panel-region",
    regions: {
      newListBtn: "#new-list-btn-region",
      pendingList: "#pending-list-region",
      completedList: "#completed-list-region"
    }
  })

  App.LeftPanel.regions = new Layout();
})

App.LeftPanel.on("start", function() {
  App.LeftPanel.Controller.init();
  // App.LeftPanel.PendingLists.Controller.start();
})
