var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function(data) {
    this.videos = new Videos(data);
    this.videoPlayer = new VideoPlayerView();
    // data.forEach(videoData => this.videos.add(new Video(videoData)));
    this.videos.on('select', function (model) {
      console.log(model);
      this.videoPlayer.remove();
      this.videoPlayer = new VideoPlayerView({model: model});
      this.render();
      // console.log(model.get('id'));
    }, this);

    this.search = new SearchView();
    this.videoList = new VideoListView({collection: this.videos});
    this.$el.html(this.template());
    this.render();
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
    this.$el.find('.search').children().detach();
    this.$el.find('.search').append(this.search.render());

    this.$el.find('.player').children().detach();
    this.$el.find('.player').append(this.videoPlayer.render());

    this.$el.find('.list').children().detach();
    this.$el.find('.list').append(this.videoList.render());
    

    // this.$el.html(this.template({
    //   search: this.search.render().html(),
    //   videoPlayer: this.videoPlayer.render().html(),
    //   videoList: this.videoList.render().html()
    // }));
    
    return this;
  },

  template: templateURL('src/templates/app.html')

});
