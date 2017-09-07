var VideoPlayerView = Backbone.View.extend({


  render: function() {
    if (this.model) {
      this.$el.html(this.template(this.model.attributes));
    } else {
      this.$el.html('<div class="loading">Please wait...</div>');
    }
    return this.$el;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
