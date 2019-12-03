<template>
  <v-app>
    <v-container fluid>
      <Bargraph :value="20" :min-value="0" :max-value="50" />
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
