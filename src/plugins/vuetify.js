import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  rtl: true,
  theme: {
    themes: {
      light: {
        primary: '#187860',
        secondary: '#555555',
        accent: '#bf9500',
        error: '#E57373',
        info: '#7DA7D9',
        success: '#81C784',
        warning: '#FAA450'
      },
    },
  },
  breakpoint: { mobileBreakpoint: 960 },
  icons: {
    values: { expand: 'mdi-menu-down' }
  },
    
});
