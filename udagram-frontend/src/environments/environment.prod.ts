// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  appName: 'Udagram',
  // apiHost: 'http://localhost:8080/api/v0'
  apiHost: 'http://ab2eb3c3678624a4d8f0b27aa78bf390-1363024719.us-east-1.elb.amazonaws.com:8080/api/v0'

};

//public frontend:a15c21267e8b04c22b28d575a1931cf5-797875402.us-east-1.elb.amazonaws.com
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
