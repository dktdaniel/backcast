var Videos = Backbone.Collection.extend({

  model: Video,
  url: 'https://www.googleapis.com/youtube/v3/search',
  parse: function(response) {
    return response.items;
  },
  fetchData: function(searchTerm) {
    this.fetch({
      data:
      {
        part: 'snippet',
        maxResults: 5,
        q: searchTerm,
        key: YOUTUBE_API_KEY,
        videoEmbeddable: 'true',
        type: 'video'
      },
      success: function(collection, response, options) {
      }.bind(this),
      error: function() {},
      complete: function() {},
      parse: true
    });
  }
});
