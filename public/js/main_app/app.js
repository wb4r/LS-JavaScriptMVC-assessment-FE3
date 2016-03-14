// Main App - APPLICATION

// --> js/app.js

var App = new Marionette.Application();


App.on("before:start", function() {
  var Layout = Marionette.LayoutView.extend({
    el: "#app-container",
    regions: {
      leftPanel: "#left-panel-region",
      rightPanel: "#right-panel-region"
    }
  })

  App.regions = new Layout();
  App.Controller.init();
})

App.on("start", function() {
  // App.Controller.init();
  App.LeftPanel.start();
  App.Controller.loadLocalStorage();
  // App.regions.LeftPanel.show();

  // App.Intro.Controller.showIntroAlbums();
  // App.Cart.Controller.startCart();
  // App.Cart.Total.Controller.init();
  // App.Custom.Controller.init();
})
