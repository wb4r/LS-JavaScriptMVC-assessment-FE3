// Main App - APPLICATION

// --> js/app.js

var App = new Marionette.Application();


App.on("before:start", function() {
  var Layout = Marionette.LayoutView.extend({
    el: "#app-container",
    regions: {
      // leftPanel: "#left-panel-region",
      // rightPanel: "#right-panel-region"
      nav: "#nav-region",
      body: "#body-region"
    }
  })

  App.regions = new Layout();
  App.Controller.init();
})

App.on("start", function() {
  App.Controller.loadLocalStorage();
  // App.Body.Controller.init();
  App.Body.Controller.displayLists();

})
