<template>
  <v-app>
    <v-container fluid>
      <iote-bargraph :value="20" :min-value="0" :max-value="50" />
      <iote-icon-indicator></iote-icon-indicator>
    </v-container>
  </v-app>
</template>

<script>

import IoteBargraph from "@/components/iote-bargraph";
import IoteIconIndicator from "@/components/iote-icon-indicator";

export default {
  name: 'App',

  components: {
    IoteBargraph,
    IoteIconIndicator,
  },

  data: () => ({
    indicatorcustom: {
      color: 'blue',
      icon: 'mdi-dna'
    }
  }),
};
</script>
