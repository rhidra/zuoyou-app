# Zuoyou mobile app

Built with Ionic 4, Angular 8.

## Run dev

`ionic serve --live-reload`

## Run dev an Android device

`ionic cordova run android --live-reload`

## Compile APK

For Android, use debug to install without signing the APK.
```
ionic cordova build android --prod --debug
```

Use `--release`, then sign to put in an app marketplace.
