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

      this.renderLeft();
      // this.selectPendingAndRender()
      // this.selectCompletedAndRender()
    },

    // CHANGE THIS NAME
    selectPendingAndRender: function() {
      var self = this;
      var listOfPendingLists = this.filterList(false)
      var listOfPendingListsView = this.newView(listOfPendingLists)

      listOfPendingListsView.on("childview:changeTitle", function(childView, model) {
        // self.switchCompleted(childView, true)
        App.RightPanel.Controller.init(model)
      })

      App.LeftPanel.regions.pendingList.show(listOfPendingListsView);
    },


    selectCompletedAndRender: function() {
      var self = this;
      var listOfCompletedLists = this.filterList(true)
      var listOfCompletedListsView = this.newView(listOfCompletedLists)

      listOfCompletedListsView.on("childview:changeTitle", function(childView, model) {
        // self.switchCompleted(childView, false)
      })

      App.LeftPanel.regions.completedList.show(listOfCompletedListsView);
    },

    renderLeft: function() {
      this.selectPendingAndRender()
      this.selectCompletedAndRender()
    },
    newView: function(collection) {
      return new App.LeftPanel.Views.Lists({
        collection: collection
      })
    },

    switchCompleted: function(childView, isCompleted) {
      childView.model.set({"completed": isCompleted})
      childView.model.save()
      // this.selectPendingAndRender()
      // this.selectCompletedAndRender()
      this.renderLeft();
    },

    filterList: function(isCompleted) {
      var listOfLists = new App.LeftPanel.Entities.Lists(
        // App.Controller.BigList.where({completed: isCompleted})
        BigList.where({completed: isCompleted})
      )
      return listOfLists
    }
  }
})
