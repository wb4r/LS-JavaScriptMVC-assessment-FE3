// Left Panel Module - LEFT PANEL Controller

// --> js/mod_leftpanel/controller/controller.js

App.module("LeftPanel", function(LeftPanel, App, Backbone, Marionette, $, _) {

  LeftPanel.Controller = {
    init: function() {
      var self = this;
      // New List Button
      var btn = new App.LeftPanel.Entities.NewListBtn();
      var btnView = new App.LeftPanel.Views.NewListBtn();
      App.LeftPanel.regions.newListBtn.show(btnView);

      btnView.on("createList", function(childView, model) {
        App.Controller.newList();
      });

      this.selectPendingAndRender()
      this.selectCompletedAndRender()
    },
    
    selectPendingAndRender: function() {
      // New Pending List of Lists
      var listOfPendingLists = new App.LeftPanel.Entities.Lists(
        App.Controller.BigList.where({completed: false})
      )

      var listOfPendingListsView = new App.LeftPanel.Views.PendLists({
        collection: listOfPendingLists
      })

      listOfPendingListsView.on("childview:changeTitle", function(childView, model) {
        console.log(childView);
        console.log(model);
      })

      App.LeftPanel.regions.pendingList.show(listOfPendingListsView);
    },
    selectCompletedAndRender: function() {
      // New Completed List of Lists
      var listOfCompletedLists = new App.LeftPanel.Entities.Lists(
        App.Controller.BigList.where({completed: true})
      )

      var listOfCompletedListsView = new App.LeftPanel.Views.CompLists({
        collection: listOfCompletedLists
      })

      listOfCompletedListsView.on("childview:changeTitle", function(childView, model) {
        console.log(childView);
        console.log(model);
      })

      App.LeftPanel.regions.completedList.show(listOfCompletedListsView);
    }
  }
})
