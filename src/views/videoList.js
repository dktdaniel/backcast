var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.entries = [];
    this.collection.forEach((videos) => {
      this.entries.push(new VideoListEntryView({model: videos}));
    });
    
    this.collection.on('sync', this.render, this);
  },
  
  render: function() {
    this.$el.children().detach();
    console.log(this.$el);
    console.log(this.entries);
 
    var renderedList = this.entries.map((video) => {
      return video.render();
    //   `<div class="media-left">
    //     <img class="media-object" src="${video.thumbnail}" />
    //   </div>
    //   <div class="media-body">
    //     <div class="video-list-entry-title">${video.title}</div>
    //     <div class="video-list-entry-detail">${video.description}</div>
    //   </div>`;
    }).join('');
    
    this.$el.html('<div class="video-list">' + 
    renderedList + '</div>');

    return this.$el.html();
  },

  template: templateURL('src/templates/videoList.html')

});
