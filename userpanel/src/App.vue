<template>
  <v-app>
    <Bargraph/>
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
