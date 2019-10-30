<template>
  <v-app>
    <v-app-bar app class="appbar">
      <v-toolbar-title class="headline text-uppercase">
        <span>SPA </span>
        <span class="font-weight-light">Список компаний</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>      
        <span class="mr-2">Кандалова Лейла</span>      
    </v-app-bar>
    <v-content>
      <ItemTable/>
    </v-content>
     <template>
      <v-footer padless >
        <v-col class="text-center" cols="12">
          {{ new Date().getFullYear() }} — <strong>{{footerTitle}} </strong>
        </v-col>
      </v-footer>
    </template>
  </v-app>
</template>

<script>
import ItemTable from './components/ItemTable';

export default {
  name: 'App',
  components: {
    ItemTable,
  },
  data: () => ({      
      footerTitle: "Кандалова Л.А."
    }),
};
</script>
<style scoped>
.appbar{
  background-color: 	#6DBBA3
}
</style>
