// Right Panel Module - RIGHT PANEL App

// --> js/mod_rightpanel/app.js

App.module("RightPanel", function(RightPanel, App, Backbone, Marionette, $, _) {


})

App.RightPanel.on("before:start", function() {
  var Layout = Marionette.LayoutView.extend({
    el: "#right-panel-region",
    regions: {
      header: "#right-header-region",
      body: "#right-body-region",
    }
  })

  App.RightPanel.regions = new Layout();
})

App.RightPanel.on("start", function() {

})
App.RightPanel.on("after:start", function() {

})
