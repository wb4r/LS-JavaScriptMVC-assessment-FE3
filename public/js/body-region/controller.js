// Body Panel Module - BODY PANEL Controller

// --> js/body-region/controller.js

App.module("Body", function(Body, App, Backbone, Marionette, $, _) {

  Body.Controller = {

    displayLists: function() {
      var self = this;
      var cardsView;

      var bodyViewOfLists = new App.Body.Views.Lists({
        collection: BigList
      })

      var newListInputView = new App.Body.Views.NewList()

      newListInputView.on("addNewList", function(title) {
        var id = self.getIdList();

        var newList = new App.Entities.List();
        newList.set({"id": id, "title": title});
        BigList.create(newList);

      })

      bodyViewOfLists.on("childview:bubbleUpEachListModel", function(childView, model) {
        var cardsView = new App.Body.Views.Cards({
          template: "#ul-for-cards-list-" + childView.model.id,
          collection: childView.model.cards
        })

        cardsView.on("childview:modifyCard", function(childView, model, title) {
          var card = childView.model;
          var list = BigList.get({id: card.attributes.parentId})
          card.save()
          list.save()
          this.render();
        })

        var newCardBtnView = new App.Body.Views.NewCard({
          id: childView.model.id
        })

        newCardBtnView.on("addNewCard", function(childView){
          var list = BigList.get({id: childView.id})
          var id = self.getIdCard(list);

          var newcard = new App.Entities.Card()
          newcard.set({
            title: "newcard-" + id,
            id: id,
            parentId: list.attributes.id
          })

          list.cards.create(newcard)
          list.save()
          bodyViewOfLists.render()

        })

        $(cardsView.options.template).append(cardsView.$el)
        self.renderCustom(cardsView)
        $(cardsView.options.template).append(newCardBtnView.$el)
        self.renderCustom(newCardBtnView)
      })

      bodyViewOfLists.on("deleteList", function(childView, id) {
        var list = BigList.get({id: id})
        _.each(list.cards.models, function(card) {
          card.destroy()
        })
        list.cards.reset();
        list.destroy();
      })

      App.Body.regions.lists.show(bodyViewOfLists)
      App.Body.regions.newList.show(newListInputView)
    },
    getIdList: function() {
      var id;

      if (BigList) {
        id = BigList.length + 1;
      } else {
        id = 1;
      }
      return id;
    },

    getIdCard: function(model) {
      var id;

      if (model.cards) {
        id = model.cards.length + 1;
      } else {
        id = 1;
      }
      return id;
    },

    renderCustom(view) {
      view.render()
    },

    init: function() {
      var self = this;
      // New List PENDING !!!
      // var btn = new App.Body.Entities.NewListBtn();
      // var btnView = new App.Body.Views.NewListBtn();
      // App.Body.regions.newListBtn.show(btnView);

      btnView.on("createList", function(childView, model) {
        App.Controller.newList();
      });

      this.renderLeft();
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

      App.Body.regions.pendingList.show(listOfPendingListsView);
    },


    selectCompletedAndRender: function() {
      var self = this;
      var listOfCompletedLists = this.filterList(true)
      var listOfCompletedListsView = this.newView(listOfCompletedLists)

      listOfCompletedListsView.on("childview:changeTitle", function(childView, model) {
        // self.switchCompleted(childView, false)
      })

      App.Body.regions.completedList.show(listOfCompletedListsView);
    },

    renderLeft: function() {
      this.selectPendingAndRender()
      this.selectCompletedAndRender()
    },
    newView: function(collection) {
      return new App.Body.Views.Lists({
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
      var listOfLists = new App.Body.Entities.Lists(
        // App.Controller.BigList.where({completed: isCompleted})
        BigList.where({completed: isCompleted})
      )
      return listOfLists
    }
  }
})
