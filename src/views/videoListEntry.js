var VideoListEntryView = Backbone.View.extend({

  initialize: function() {
    // console.log(this.$el);
  },
  render: function() {
    this.$el.html(this.template(
      this.model.attributes
    )).find('.video-list-entry-title').on('click', function () {
      this.model.select();
    }.bind(this));
    
    return this.$el;
  },

  template: templateURL('src/templates/videoListEntry.html')
});
