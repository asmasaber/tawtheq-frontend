<template>
  <v-navigation-drawer
      id="default-drawer"
      v-model="drawer"
      :mini-variant.sync="mini"
      :right="$vuetify.rtl"
      :width="$vuetify.breakpoint.lgAndUp?300:260"
      app
      class="navigation-drawer bg"
      mini-variant-width="80"
  >
    <div class="logo-cont" >
      <a class="logo-m text-center" href="/">
        <img id="changeimage" alt="Tawthiq" class="logobig" src="/images/Main_Logo.svg">
      </a>
    </div>

  </v-navigation-drawer>
</template>

<script>
  export default {
    name: 'Drawer',
    props: {
      drawer: {
        default: false,
      }
    }
  }
</script>

<style lang="scss">


.navigation-drawer {
  .v-navigation-drawer__content {
    display: flex;
    flex-flow: column nowrap;
    justify-content: start;
    height: 100%;
  }

  .logo-cont {
    border-bottom: #ddd solid 1px;
    text-align: center;
    height: 74px;

  }

  .logobig {
    margin-top: 8px;
    transform: translate(0) scale(1);
    transition: transform .2s;
  }

  &.v-navigation-drawer--mini-variant {
    .v-list--nav {
      padding-left: 4px;
      padding-right: 4px;
    }

    .logobig {
      transform: translate(-18%) scale(1.1);
    }

  }

  .nav-list {

    .no-group {
      &.v-list-item--active {
        color: white;
        background-image: linear-gradient(to right, #187960, #148668, #0f9370, #09a077, #04ae7e) !important;
      }
    }

    .v-list-group {
      & > .v-list-item {
        padding-top: 4px;
        padding-bottom: 4px;
      }

      &.selected > .v-list-item {
        background-color: #eeeeee;
      }

      &.v-list-group--active {
        background-color: #eeeeee;

        .v-list-item--active {
          color: white;
          background-image: linear-gradient(to right, #187960, #148668, #0f9370, #09a077, #04ae7e) !important;
        }

        .v-list-group__items {
          .v-list-item--active {
            color: #BF9500;
            background-image: none !important;;
            background: /*rgba(198, 148, 0, 0.55)*/
                #eeeeee;
          }
        }

      }
    }

    padding-top: 26px;
    overflow-y: auto;
    overflow-x: hidden;

    &::-webkit-scrollbar {
      width: 4px;

    }

    &::-webkit-scrollbar-track {
      background: #e6e6e6;
      border-left: 1px solid #dadada;

    }

    &::-webkit-scrollbar-thumb {
      background: #b0b0b0;
      border: solid 1px #e6e6e6;
      border-radius: 7px;

    }

    &::-webkit-scrollbar-thumb:hover {
      background: black;

    }

  }

  &.bg {
    background: rgb(255, 255, 255) url(/images/tawthiqe-bg.svg) no-repeat center bottom;
    background-size: 80%;
  }

  .v-navigation-drawer__content {

  }
}
</style>
