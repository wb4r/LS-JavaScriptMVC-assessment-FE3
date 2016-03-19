// Right Panel Module - RIGHT PANEL Controller

// --> js/mod_rightpanel/controller/controller.js

App.module("RightPanel", function(RightPanel, App, Backbone, Marionette, $, _) {

  RightPanel.Controller = {
    init: function(model) {
      var self = this;
      this.bodyView;

      // header view
      var headerView = new App.RightPanel.Views.Header(model);
      App.RightPanel.regions.header.show(headerView)

      headerView.on("switchTitleView", function(childView, model) {
        headerView.render()
        App.LeftPanel.Controller.renderLeft()
      });

      // model get from BigList
      var model = BigList.get({id: model.model.attributes.id})

      // body view
      this.renderBodyView(model)

      // add card
      headerView.on("addCard", function(childView, model) {
        var id = self.getId(model);

        var newcard = new App.Entities.Card()
        newcard.set({title: "newcard-" + id, id: id})
        model.cards.create(newcard)
        model.save()

        self.renderBodyView(model)
      })
      model.save()
    },
    renderBodyView: function(model) {
      if (this.bodyView) {this.bodyView.remove()}
      this.bodyView = new App.RightPanel.Views.Cards({
        collection: model.cards
      })
      App.RightPanel.regions.body.show(this.bodyView)
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
