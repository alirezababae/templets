
/*
Vue.component('datapiker', {
  data: function () {
    return {
      picker: new Date().toISOString().substr(0, 10),
      landscape: false,
      reactive: false,
      fullWidth: false,
      showCurrent: true,
      month: false,
      multiple: false,
      readonly: false,
      disabled: false,
      enableEvents: false
    };
  },
  template: `
  <v-date-picker
  v-model="picker"
  :landscape="landscape"
  :reactive="reactive"
  :full-width="fullWidth"
  :show-current="showCurrent"
  :type="month ? 'month' : 'date'"
  :multiple="multiple"
  :readonly="readonly"
  :disabled="disabled"
  :events="enableEvents ? functionEvents : null"
></v-date-picker>
  `,

  computed: {
    functionEvents() {
      return this.month ? this.monthFunctionEvents : this.dateFunctionEvents;
    } },


  methods: {
    dateFunctionEvents(date) {
      const [,, day] = date.split('-');
      if ([12, 17, 28].includes(parseInt(day, 10))) return true;
      if ([1, 19, 22].includes(parseInt(day, 10))) return ['red', '#00f'];
      return false;
    },
    monthFunctionEvents(date) {
      const month = parseInt(date.split('-')[1], 10);
      if ([1, 3, 7].includes(month)) return true;
      if ([2, 5, 12].includes(month)) return ['error', 'purple', 'rgba(0, 128, 0, 0.5)'];
      return false;
    } }


});


var CELSIUS = 0, FAHRENHEIT = 1;

var app = new Vue({


    /* weather app*/
    /*
  el: '#weatherApp',
  vuetify: new Vuetify(),
  data: {

    latitude: 0.0,
    longitude: 0.0,
    city: 'Hello from MELBOURNE',
    curTemp: null,
    displayMode: CELSIUS,
    dataObj: null,
    weatherMain: 'Fine',
    weatherDesc: 'Clear day',
    errorMsg: '',
    metest:'',


    /* دیتای اخبار */
/*
alertt:[
{masseg:'لباس های گرم خود را بپوشید سرما در کمین',tite:'admni'},
{masseg:'به دلیل کسالت جهار شنبه نمی ایم',tite:'ticher'},
{masseg:'ksfdsfgdshfghdsgfgf',tite:'alireza'},

],
programer:[
  {masseg:'انجام تکالیف صفحه ۹۹',tite:'ریاضی'},
  {masseg:'ksfdsfgdshfghdsgfgf',tite:'فیزیک'},
  {masseg:'ksfdsfgdshfghdsgfgf',tite:'فیزیک'},
  {masseg:'ksfdsfgdshfghdsgfgf',tite:'فیزیک'},
  {masseg:'ksfdsfgdshfghdsgfgf',tite:'فیزیک'},

  {masseg:'ksfdsfgdshfghdsgfgf',tite:'نقشه کشی'},

  ],

  },
  computed: {
    classWI: function() {
      if (this.dataObj != null){
        var weatherID = this.dataObj.weather[0].id;
        if (weatherID >= 200 && weatherID <= 232) {
          return 'wi-thunderstorm';
        }
         else if (weatherID >= 300 && weatherID <= 321) {
          return 'wi-sprinkle';
        } else if (weatherID >= 500 && weatherID <= 531) {
          return 'wi-rain';
        } else if (weatherID >= 600 && weatherID <= 622) {
          return 'wi-snow';
        } else if (weatherID >= 701 && weatherID <= 781) {
          return 'wi-train';
        } else if(weatherID == 800) {
          this.metest += 'hi were';
          return 'wi-day-cloudy';
        }
        else if (weatherID >= 801 && weatherID <= 804) {
          return 'wi-cloud';
        } else if (weatherID >= 900 && weatherID <= 962) {
          return 'wi-small-craft-advisory';
        }
      }
      return '';
    },
    curTempDisplay: function() {
      if (this.curTemp != null) {
        if (this.displayMode == CELSIUS) {
          return (this.curTemp - 273.15).toFixed(1);
        } else {
          return (this.curTemp * 9/5 - 459.67).toFixed(1);
        }
      } else {
        return null;
      }
    },
  },
  ready: function() {
    this.getLocation();
    console.log('App ready!');
  },
  methods: {
    getTemp: function(option) {
      this.displayMode = option;
    },
    getLocation: function() {
      if (!navigator.geolocation) {
        this.errorMsg = "Geolocation is not supported by your browser";
        this.city = this.errorMsg;
        console.warn(this.errorMsg);
        return;
      }
      console.log('Getting current position..');
      var options = {timeout:60000};
      navigator.geolocation.getCurrentPosition(this.success, this.error, options);
    },
    success: function(position) {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      this.latitude = parseFloat(this.latitude).toFixed(2);
      this.longitude = parseFloat(this.longitude).toFixed(2);

      this.getWeather();
    },
    error: function(err) {
      this.errorMsg = "Unable to retrieve your location";
      this.city = this.errorMsg;

      console.warn(`ERROR(${err.code}): ${err.message}`);
      console.warn(this.errorMsg);
    },
    getWeather: function() {
      var reqURL = 'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=' + this.latitude + '&lon=' + this.longitude + '&APPID=69d3cf86b46f19cf3e049339355533aa';

      this.$http.get(reqURL).then(function(response) {
        this.dataObj = response.data;
        this.curTemp = this.dataObj.main.temp;
        this.city = this.dataObj.name;
        this.weatherMain = this.dataObj.weather[0].main;
        this.weatherDesc = this.dataObj.weather[0].description;
      }, function(response) {
        console.log(response);
      });
    }
  }
  /* weather app done*/
//});
var CELSIUS = 0, FAHRENHEIT = 1;

Vue.component('weather',{

data:function(){
return{

  latitude: 0.0,
  longitude: 0.0,
  city: 'Hello from MELBOURNE',
  curTemp: null,
  displayMode: CELSIUS,
  dataObj: null,
  weatherMain: 'Fine',
  weatherDesc: 'Clear day',
  errorMsg: '',
  metest:'',


}

},

computed: {
  classWI: function() {
    if (this.dataObj != null){
      var weatherID = this.dataObj.weather[0].id;
      if (weatherID >= 200 && weatherID <= 232) {
        return 'wi-thunderstorm';
      }
       else if (weatherID >= 300 && weatherID <= 321) {
        return 'wi-sprinkle';
      } else if (weatherID >= 500 && weatherID <= 531) {
        return 'wi-rain';
      } else if (weatherID >= 600 && weatherID <= 622) {
        return 'wi-snow';
      } else if (weatherID >= 701 && weatherID <= 781) {
        return 'wi-train';
      } else if(weatherID == 800) {
        this.metest += 'hi were';
        return 'wi-day-cloudy';
      } 
      else if (weatherID >= 801 && weatherID <= 804) {
        return 'wi-cloud';
      } else if (weatherID >= 900 && weatherID <= 962) {
        return 'wi-small-craft-advisory';
      }
    }
    return '';
  },
  curTempDisplay: function() {
    if (this.curTemp != null) {
      if (this.displayMode == CELSIUS) {
        return (this.curTemp - 273.15).toFixed(1);
      } else {
        return (this.curTemp * 9/5 - 459.67).toFixed(1);
      }
    } else {
      return null;
    }      
  },
},
ready: function() {
  this.getLocation();
  console.log('App ready!');
},
methods: {
  getTemp: function(option) {
    this.displayMode = option;
  },
  getLocation: function() {
    if (!navigator.geolocation) {
      this.errorMsg = "Geolocation is not supported by your browser";
      this.city = this.errorMsg;
      console.warn(this.errorMsg);
      return;
    }
    console.log('Getting current position..');
    var options = {timeout:60000};
    navigator.geolocation.getCurrentPosition(this.success, this.error, options);
  },
  success: function(position) {
    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;
    this.latitude = parseFloat(this.latitude).toFixed(2);
    this.longitude = parseFloat(this.longitude).toFixed(2);

    this.getWeather();
  },
  error: function(err) {
    this.errorMsg = "Unable to retrieve your location";
    this.city = this.errorMsg;
    
    console.warn(`ERROR(${err.code}): ${err.message}`);
    console.warn(this.errorMsg);
  },
  getWeather: function() {
    var reqURL = 'https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=' + this.latitude + '&lon=' + this.longitude + '&APPID=69d3cf86b46f19cf3e049339355533aa';

    this.$http.get(reqURL).then(function(response) {
      this.dataObj = response.data;
      this.curTemp = this.dataObj.main.temp;
      this.city = this.dataObj.name;
      this.weatherMain = this.dataObj.weather[0].main;
      this.weatherDesc = this.dataObj.weather[0].description;
    }, function(response) {
      console.log(response);
    });
  }
}


});



Vue.component('button-counter', {
  data: function () {
    return {
      activities: [{
        content: 'Custom icon',
        timestamp: '2018-04-12 20:46',
        size: 'large',
        type: 'primary',
        icon: 'el-icon-more'
      }, {
        content: 'Custom color',
        timestamp: '2018-04-03 20:46',
        color: '#0bbd87'
      }, {
        content: 'Custom size',
        timestamp: '2018-04-03 20:46',
        size: 'large'
      }, {
        content: 'Default node',
        timestamp: '2018-04-03 20:46'
      }]




    }
  },
  template: `
  
<el-timeline>
  <el-timeline-item
    v-for="(activity, index) in activities"
    :key="index"
    :icon="activity.icon"
    :type="activity.type"
    :color="activity.color"
    :size="activity.size"
    :timestamp="activity.timestamp">
    <el-card>
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar> <span>admin</span> <hr>
      <h4>
لورم ایپسوم چیست؟
</h4>
<p>
لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
</p>
    </el-card>
  </el-timeline-item>
</el-timeline>


  `
})



new Vue({
  el: '#app',
        vuetify: new Vuetify(),
  data: function() {
    return { visible: false,

      picker: new Date().toISOString().substr(0, 10),

      tableData: [
        
            {
               date: '2016-05-03',
               name: 'Tom',
               address: 'No. 189, Grove St, Los Angeles'
             }, 
          
            
            ],


            activities: [{
              content: 'Custom icon',
              timestamp: '2018-04-12 20:46',
              size: 'large',
              type: 'primary',
              icon: 'el-icon-more'
            }, {
              content: 'Custom color',
              timestamp: '2018-04-03 20:46',
              color: '#0bbd87'
            }, {
              content: 'Custom size',
              timestamp: '2018-04-03 20:46',
              size: 'large'
            }, {
              content: 'Default node',
              timestamp: '2018-04-03 20:46'
            }]


}





  }
})
