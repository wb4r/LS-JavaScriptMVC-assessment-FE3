// Right Panel Module - RIGHT PANEL Controller

// --> js/mod_rightpanel/controller/controller.js

App.module("RightPanel", function(RightPanel, App, Backbone, Marionette, $, _) {

  RightPanel.Controller = {
    init: function(model) {
      var self = this;

      // var list0 = BigList.models[0]
      // var newcard01 = new App.Entities.Card()
      // newcard01.set({title: "newcard 1", id: 1})
      // var newcard02 = new App.Entities.Card()
      // newcard02.set({title: "newcard 2", id: 2})
      // var newcard03 = new App.Entities.Card()
      // newcard01.set({title: "newcard 3", id: 3})
      // list0.cards.create(newcard01)
      // list0.cards.create(newcard02)
      // list0.cards.create(newcard03)
      //
      //
      // var list1 = BigList.models[1]
      // var newcard04 = new App.Entities.Card()
      // newcard04.set({title: "newcard 4", id: 4})
      // var newcard05 = new App.Entities.Card()
      // newcard05.set({title: "newcard 5", id: 5})
      // var newcard06 = new App.Entities.Card()
      // newcard06.set({title: "newcard 6", id: 6})
      // list1.cards.create(newcard04)
      // list1.cards.create(newcard05)
      // list1.cards.create(newcard06)
      //
      // list1.save()

      var headerView = new App.RightPanel.Views.Header(model);
      App.RightPanel.regions.header.show(headerView)

      headerView.on("switchTitleView", function(childView, model) {
        headerView.render()
        App.LeftPanel.Controller.renderLeft()
      });

      var model = BigList.get({id: model.model.attributes.id})

      headerView.on("addCard", function(childView, model) {
        var id = self.getId(model);

        console.log(id);
        var newcard = new App.Entities.Card()
        newcard.set({title: "newcard-" + id, id: id})
        model.cards.create(newcard)
        model.save()

        // var newcard = new App.Entities.Card()
        // newcard.set({title: "newcard 4", id: 4}
        // list1.cards.create(newcard04)
        // list1.save()

      })
      model.save()
    },

    addNewCard: function(model_id) {
      var model = BigList.get({id: model_id})
      var id = this.getId(model);

      model.fetch()

      var newcard = new App.Entities.Card()
      newcard.set({title: "newcard-" + id, id: id})
      model.cards.create(newcard)
    },

    getSetCollection: function(model) {
      if (model.cards) {
        model.cards.fetch();
      } else {
        model.cards = new App.Entities.Cards()
      }
    },
    getId: function(model) {
      var id;

      if (model.cards) {
        id = model.cards.length + 1;
      } else {
        id = 1;
      }
      return id;
    }
  }
})
