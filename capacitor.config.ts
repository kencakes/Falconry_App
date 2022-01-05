import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.vansaet.kendra.falconry',
  appName: 'falconry',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    FirebaseAuthentication: {
      skipNativeAuth: false,
      providers: ['phone', 'google.com', 'facebook.com', 'github.com', 'twitter.com'],
    },
    // eslint-disable-next-line @typescript-eslint/naming-convention
    LocalNotifications: {
      smallIcon: 'ic_stat_icon_config_sample',
      iconColor: '#488AFF',
      sound: 'beep.wav',
    },
  }
};

export default config;
