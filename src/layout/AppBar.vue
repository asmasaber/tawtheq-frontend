<template>
  <div>
    <v-app-bar
        id="default-app-bar"
        :clipped-left="$vuetify.rtl"
        :clipped-right="!$vuetify.rtl"
        absolute
        app
        class="v-bar--underline"
        color="white"
        flat
        height="74"
        elevation="4"
    >
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="$emit('drawer:update', !drawer)"
      />


      <default-drawer-toggle class="hidden-sm-and-down"/>

      <v-avatar size="36">
        <img
            src="/images/avatar-user.svg"
            alt="وليد شلاش"
        >
      </v-avatar>

      <span class="mx-2 text-sm font-weight-bold">وليد الرشود</span>
    </v-app-bar>
  </div>
</template>

<script>
  export default {
    name: 'AppBar',
    props: {
      drawer: {
        default: true,
      }
    }
  }
</script>


<style lang="scss">


</style>
