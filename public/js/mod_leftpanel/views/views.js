// Left Panel Module - LEFT PANEL Views

// --> js/mod_leftpanel/views/views.js

App.module("LeftPanel.Views", function(Views, App, Backbone, Marionette, $, _) {

  Views.List = Marionette.ItemView.extend({
    tagName: "li",
    template: "#left-panel-list",

    events: {
      "click    .left-panel-list-title":    "changeTitle"
    },

    changeTitle: function() {
      this.trigger("title:changeTitle", this.model)
    }
  });

  Views.Lists = Marionette.CompositeView.extend({
    template: "#left-panel-lists",
    childView: Views.List,
    tagName: "ul"
  });

  Views.NewListBtn = Marionette.ItemView.extend({
    template: "#left-panel-newlistbtn",

    triggers: {
      "click .new-list-btn"   :   "createList"
    }
  })
})
