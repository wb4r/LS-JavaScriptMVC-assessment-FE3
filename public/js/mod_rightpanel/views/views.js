// Right Panel Module - RIGHT PANEL Views

// --> js/mod_rightpanel/views/views.js

App.module("RightPanel.Views", function(Views, App, Backbone, Marionette, $, _) {

  Views.Header = Marionette.ItemView.extend({
    tagName: "div",
    // className: ".row",
    template: "#right-panel-header",

    // triggers: {
    //   "click    #header-icon-change-title":   "changeTitle"
    // },

    events: {
      "click    #header-icon-change-title":     "focusAndToggle",
      "click    #right-panel-input-save":       "checkTitleAndSave",
      "click    #newCard-anchor":               "newCard"
    },

    newCard: function(e) {
      e.preventDefault();
      this.trigger("addCard", this, this.model)
    },

    focusAndToggle: function(e) {
      e.preventDefault()
      var $inputBox = $("#right-panel-input-title")

      this.toggleClasses();
      $inputBox.focus();
      $inputBox.val(this.model.attributes.title);
    },
    toggleClasses: function() {
      $("#h3-header").toggleClass("hidden");
      $("#right-panel-input-title").toggleClass("hidden");
      $("#right-panel-input-save").toggleClass("hidden");
    },
    checkTitleAndSave: function(e) {
      e.preventDefault()
      var $inputBox = $("#right-panel-input-title")

      if(e.which == 13) {
        this.validateTitle();
      }

      this.validateTitle();
      this.toggleClasses();
      this.trigger("switchTitleView", this, this.model)
    },
    validateTitle: function() {
      var $inputBox = $("#right-panel-input-title")
      var self = this;

      if ($inputBox.val().trim()) {
        self.model.set({"title": $inputBox.val().trim()})
        self.model.save()
      }
    }
  });

  Views.Card = Marionette.ItemView.extend({
    tagName: "li",
    template: "#",
  });

  Views.Cards = Marionette.CollectionView.extend({
    template: "#",
    childView: Views.Card,
    tagName: "ul",
  });


  // Views.CompLists = Marionette.CompositeView.extend({
  //   template: "#left-panel-cmp-lists",
  //   childView: Views.List,
  //   tagName: "ul"
  // });
  //
  // Views.PendLists = Marionette.CompositeView.extend({
  //   template: "#left-panel-pnd-lists",
  //   childView: Views.List,
  //   tagName: "ul"
  // });
})
