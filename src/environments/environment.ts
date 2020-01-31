// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  openWeatherMapConfig : {
     url: 'http://api.openweathermap.org',
     apikey: '194333f5b09188fbda8c4a3bbfea30b2'
  }

  //http://api.openweathermap.org/data/2.5/group?id=524901,703448,2643743&units=metric&APPID=194333f5b09188fbda8c4a3bbfea30b2

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
