// Body Panel Module - BODY PANEL Views

// --> js/body-region/views.js

App.module("Body.Views", function(Views, App, Backbone, Marionette, $, _) {

  Views.NewList = Marionette.ItemView.extend({
    tagName: "input",
    className: "newListclass form-control",
    template: "#newListInput-template",

    events: {
      // "click":   "newList",
      "blur":       "newList",
      "keypress":   "checkKey"
    },

    newList: function(e) {
      var title = e.target.value;

      if (title) {
        this.trigger("addNewList", title)
      }
      e.target.value = ""
    },
    checkKey: function(e) {
      if (e.charCode === 13) { this.newList(e) }
    }
  });

  Views.NewCard = Marionette.ItemView.extend({
    tagName: "button",
    className: "btn btn-small btn-primary btn-add-card",
    template: "#newCardBtn-template",

    events: {
      "click":   "addCard"
    },
    triggers: {
      // "click":   "addCard"
    },
    addCard: function(e) {
      e.preventDefault();
      this.trigger("addNewCard", this)
    },
  })

  Views.Card = Marionette.ItemView.extend({
    tagName: "li",
    template: "#card-template",

    events: {
      "click    .card-title":   "changeCardName"
    },

    changeCardName: function(e) {
      e.preventDefault()
      var $inputBox = $(e.target).siblings();
      var self = this;

      this.toggleClasses(e);

      $inputBox.focus()
      $inputBox.val(this.model.attributes.title);

      $inputBox.on("keypress", function(e) {
        if(e.which == 13 && $inputBox.val()) {
          self.model.set({"title": $inputBox.val().trim()})
          self.model.save()
          self.trigger("modifyCard", self, self.model, $inputBox.val())
        }
      })
    },
    toggleClasses: function(e) {
      $(e.target).toggleClass("hidden");
      $(e.target).siblings().toggleClass("hidden");
    }
  });

  Views.Cards = Marionette.CollectionView.extend({
    // template: "#ul-for-cards-list-" + id,
    childView: Views.Card,
    tagName: "ul",
  });

  Views.List = Marionette.CompositeView.extend({
    tagName: "li",
    className: "grid-sizer",
    childView: Views.Cards,
    template: "#list-template",

    events: {
      "click    .listTitle":    "modifyList"
    },

    modifyList: function(e) {
      // console.log(e);
      // console.log(this);
      e.preventDefault()
      var $inputBox = $(e.target).siblings();
      var self = this;

      this.toggleClasses(e);

      $inputBox.focus()
      $inputBox.val(this.model.attributes.title);

      $inputBox.on("keypress", function(e) {
        if(e.which == 13 && $inputBox.val()) {
          self.model.set({"title": $inputBox.val().trim()})
          self.model.save()
        }
      })
    },
    toggleClasses: function(e) {
      $(e.target).toggleClass("hidden");
      $(e.target).siblings().toggleClass("hidden");
    },
    onShow: function() {
      // console.log(this.collection);
      this.trigger("bubbleUpEachListModel", this, this.model)
    }
  });

  Views.Lists = Marionette.CollectionView.extend({
    template: "#lists-template",
    childView: Views.List,
    className: "grid",
    tagName: "ul",

    events: {
      "click    .deleteList-btn":   "deleteList"
    },

    deleteList: function(e) {
      this.trigger("deleteList", this, e.target.id)
      // debugger;
    },
  });
})
