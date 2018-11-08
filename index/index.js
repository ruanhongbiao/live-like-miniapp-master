Page({
  data: {
    count: 0
  },
  clickHandler: function() {
    this.setData({
      count: this.data.count + 1
    });
  }
});
