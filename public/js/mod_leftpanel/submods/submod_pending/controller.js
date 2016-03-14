// Left Panel Module > Pending Module - PENDING Controller

// --> js/mod_leftpanel/submods/submod_pending/controller.js

App.module("LeftPanel.PendingLists", function(PendingLists, App, Backbone, Marionette, $, _) {
  // counter = App.Controller.BigList.length;


  PendingLists.Controller = {
    newList: function() {
      var id = this.getId();

      var todos = new App.Entities.Todos();
      var newList = new App.Entities.List({todos: todos});
      newList.set({"id": id, "title": "title-" + id});
      App.Controller.BigList.create(newList);
      

      var listOfListsView = new App.LeftPanel.Views.Lists({
        collection: App.Controller.BigList
      })

      listOfListsView.on("changeTitle", function(childView, model) {
        console.log(childView);
        console.log(model);
      })

      // DELETE FROM HERE LATER
      // newList.save()

      App.LeftPanel.regions.pendingList.show(listOfListsView)
    },
    getId: function() {
      var id;

      if (App.Controller.BigList) {
        id = App.Controller.BigList.length + 1;
      } else {
        id = 1;
      }
      return id;
    }
  }
})


// var todos = new App.Entities.Todos()
// var newList = new App.Entities.List({todos: todos})
// newList.set({"id": 1, "title": "title-1"})
//
// var todos = new App.Entities.Todos()
// var newList2 = new App.Entities.List({todos: todos})
// newList2.set({"id": 2, "title": "title-2"})
