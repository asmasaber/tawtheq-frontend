<template>
  <v-app>
    <app-bar :drawer="drawer"/>
    <drawer :drawer="drawer"/>
    <v-main>
      <v-container>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Drawer from './layout/Drawer.vue';
import AppBar from './layout/AppBar.vue';
export default {
  name: 'App',
  components: {
    AppBar,
    Drawer,
  },
  data: () => ({
    drawer: true,
  }),
};
</script>
