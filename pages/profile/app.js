new Vue({
    el:'#app',
    data() {
        return {
          value1: true,
          value2: false,

          options: [{
            value: 'HTML',
            label: 'HTML'
          }, {
            value: 'CSS',
            label: 'CSS'
          }, {
            value: 'JavaScript',
            label: 'JavaScript'
          }],
          value: []
        }
      }


});