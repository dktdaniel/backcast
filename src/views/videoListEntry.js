var VideoListEntryView = Backbone.View.extend({

  initialize: function() {
    console.log(this.$el);
  },
  render: function() {
    this.$el.html(this.template(
      this.model.attributes
      // title: this.model.get('snippet').title, 
      // description: this.model.get('snippet').description,
      // url: this.model.get('snippet').thumbnails.default.url
    ));
    return this.$el.html();
  },
  events: {
    'click div': 'handleClick',
    'mouseenter div': 'handleClick',

  },
  handleClick: function() {
    console.log('HEYYYYYYY!');
    this.model.select();
  },

  template: templateURL('src/templates/videoListEntry.html')

});
