<template>
  <v-app>
    <v-app-bar
      app
      color="rebeccapurple"
      dark
    >
      <div class="d-flex align-center">
        <v-img
        
        />
         <!-- <img src="img/logo-vertical.png" alt="logo"> -->
        <v-img
          
        />
      </div>

    </v-app-bar>

    <v-main>
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',

  components: {
    HelloWorld,
  },

  data: () => ({
    
  }),
};
</script>
