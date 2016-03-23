// Body Panel Module - BODY PANEL App

// --> js/body-region/app.js

App.module("Body", function(Body, App, Backbone, Marionette, $, _) {})


App.Body.on("before:start", function() {
  var Layout = Marionette.LayoutView.extend({
    el: "#body-region",
    regions: {
      lists: "#lists-region",
      newList: "#new-list-region"
    }
  })

  App.Body.regions = new Layout();
})
