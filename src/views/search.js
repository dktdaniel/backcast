var SearchView = Backbone.View.extend({


  render: function() {
    this.$el.html(this.template());
    return this.$el.html();
  },
  events: {
    'click': 'aFunc'
  },
  aFunc: function() {
    console.log('SEARCH BAR ENTERED!');
  },

  template: templateURL('src/templates/search.html')

});
