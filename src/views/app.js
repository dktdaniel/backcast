var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function(data) {
    this.videos = new Videos(data);
    this.search = new SearchView();
    this.videoList = new VideoListView({collection: this.videos});
    this.videoPlayer = new VideoPlayerView();
    this.render();
    // console.log(this.$el);
  },
  
  // getMeta: function() {
  //   return this.videos.map((model) => {
  //     var videosOutput = {};
  //     videosOutput.title = model.get('snippet').title;
  //     videosOutput.description = model.get('snippet').description;
  //     videosOutput.thumbnail = model.get('snippet').thumbnails.default.url;
  //     return videosOutput;
  //   });

  // },
  
  render: function() {
    this.$el.html(this.template({
      search: this.search.render(),
      videoPlayer: this.videoPlayer.render(),
      videoList: this.videoList.render()
    }));
    
    return this;
  },

  template: templateURL('src/templates/app.html')

});
