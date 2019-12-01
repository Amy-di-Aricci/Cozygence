<template>
  <v-app>
    <v-container fluid style="width: 200px">
      <Bargraph v-bind:value="20" />
    </v-container>
  </v-app>
</template>

<script>

import Bargraph from "@/components/Bargraph";

export default {
  name: 'App',

  components: {
    Bargraph,
  },

  data: () => ({
    //
  }),
};
</script>
