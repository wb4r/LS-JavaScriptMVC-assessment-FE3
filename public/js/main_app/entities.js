// Main App - Entities

// --> js/main_app/entities.js

App.module("Entities", function(Entities, App, Backbone, Marionette, $, _) {

  // Each Task Model
  Entities.Card = Backbone.Model.extend({
    defaults: {
      title: "",
      id: "",
      completed: false,
      description: ""
    }
  })

  // This is a Collection of cards
  Entities.Cards = Backbone.Collection.extend({
    model: Entities.Card,
    url: "",
    localStorage: new Backbone.LocalStorage('cards-backbone-marionette'),
  })

  Entities.List = Backbone.Model.extend({
    defaults: {
      completed: false,
    },
    initialize: function() {
        // because initialize is called after parse
        _.defaults(this, {
            cards: new Entities.Cards
        });
    },
    parse: function(response) {
        if (_.has(response, "cards")) {
            this.cards = new Entities.Cards(response.cards, {
                parse: true
            });
            delete response.cards;
        }
        return response;
    },
    toJSON: function() {
        var json = _.clone(this.attributes);
        json.cards = this.cards.toJSON();
        return json;
    }
  })

  // Entities.List = Backbone.Model.extend({
  //   initialize: function() {
  //     // this.save()
  //     // this.cards = new Entities.Cards()
  //     this.set({cards: new Entities.Cards()})
  //   },
  //   defaults: {
  //     completed: false,
  //   },
  //   // cards: new Entities.Cards()
  // })

  Entities.Lists = Backbone.Collection.extend({
    model: Entities.List,
    url: "",
    localStorage: new Backbone.LocalStorage('lists-backbone-marionette')
  })

  Entities.NewListBtn = Backbone.Model.extend({

  })
})
