// Left Panel Module - LEFT PANEL Views

// --> js/mod_leftpanel/views/views.js

App.module("LeftPanel.Views", function(Views, App, Backbone, Marionette, $, _) {

  Views.List = Marionette.ItemView.extend({
    tagName: "li",
    template: "#left-panel-list",

    triggers: {
      "click    .left-panel-list-title":    "changeTitle"
    },

    changeTitle: function() {
      this.trigger("changeTitle", this, this.model)
    }
  });

  Views.Lists = Marionette.CollectionView.extend({
    template: "#left-panel-lists",
    childView: Views.List,
    tagName: "ul",
  });


  Views.CompLists = Marionette.CompositeView.extend({
    template: "#left-panel-cmp-lists",
    childView: Views.List,
    tagName: "ul"
  });

  Views.PendLists = Marionette.CompositeView.extend({
    template: "#left-panel-pnd-lists",
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
