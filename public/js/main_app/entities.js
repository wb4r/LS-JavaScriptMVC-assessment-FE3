// Main App - Entities

// --> js/main_app/entities.js

App.module("Entities", function(Entities, App, Backbone, Marionette, $, _) {

  // Each Task Model
  Entities.Todo = Backbone.Model.extend({
    defaults: {
      title: "",
      id: "",
      completed: false,
      description: ""
    }
  })

  // This is a Collection of todos
  Entities.Todos = Backbone.Collection.extend({
    model: Entities.Todo,
    url: ""
  })




  Entities.List = Backbone.Model.extend({
    initialize: function() {
      // var id = App.Controller.BigList.length + 1;
      // this.set({"title": "List-" + id});
      // this.set({"id": id});
    },
    defaults: {
      completed: false,
      // id: id,
      // title: "List-nr-" + id
    },
    todos: new Entities.Todos()
  })

  Entities.Lists = Backbone.Collection.extend({
    model: Entities.List,
    url: "",
    localStorage: new Backbone.LocalStorage('todos-backbone-marionette')
  })

  Entities.NewListBtn = Backbone.Model.extend({

  })
})
