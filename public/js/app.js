// Main App - APPLICATION

// --> js/app.js

var App = new Marionette.Application();


App.on("before:start", function() {
  var Layout = Marionette.LayoutView.extend({
    el: "#app-container",
    regions: {
      main: "#main-region",
      cart: "#cart-region",
      total: "#total-region",
      custom: "#custom-region"
    }
  })

  App.regions = new Layout();
})

App.on("start", function() {
  App.Intro.Controller.showIntroAlbums();
  App.Cart.Controller.startCart();
  App.Cart.Total.Controller.init();
  App.Custom.Controller.init();
})
