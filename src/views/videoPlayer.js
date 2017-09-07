var VideoPlayerView = Backbone.View.extend({


  render: function() {
    this.$el.html('<div class="loading">Please wait...</div>');
    return this.$el.html();
  },

  template: templateURL('src/templates/videoPlayer.html')

});
