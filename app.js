new Vue({
  el: '#vue-app',
  data: {
      name: 'Vitalik',
      job: 'webDev',
      website: 'http://www.thenetninja.co.uk',
      websiteTag: '<a href="http://www.thenetninja.co.uk">The Ninja Website</a>'
  },
  methods: {
    greet:function(time){
      return 'Good ' + time + ' ' + this.name;
    }
  }
});
