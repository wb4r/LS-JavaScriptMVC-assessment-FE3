// Left Panel Module - LEFT PANEL Entities

// --> js/mod_leftpanel/entities/entities.js

App.module("LeftPanel.Entities", function(Entities, App, Backbone, Marionette, $, _) {

  Entities.List = Backbone.Model.extend({
    defaults: {
      title: "",
      id: "",
      completed: false
    }
  });

  Entities.Lists = Backbone.Collection.extend({
    model: Entities.List
  });

  Entities.NewListBtn = Backbone.Model.extend({
    
  })
})
