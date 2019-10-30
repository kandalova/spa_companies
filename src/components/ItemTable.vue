<template >
<div>  
  <v-data-table  
    :headers="headers"
    :items="companies"
    class="elevation-1"
    >

  <template v-slot:item.address="props">
      <EditDialog  :address.sync="props.item.address"/>
  </template>

    <template v-slot:top>
      <v-toolbar flat color="white"> 
        <v-spacer></v-spacer>
       <ModalWindow v-on:childToParent="onSaveClick"/>
      </v-toolbar>
    </template>

    <template v-slot:item.action="{ item }">
      <v-icon small @click="deleteItem(item)">delete</v-icon> 
    </template>
    
    <template v-slot:item.itn="{item}">      
        {{item.itn}}  
        <v-icon small @click="getItem(item)">get_app</v-icon> 
    </template>  
  </v-data-table>

  <v-snackbar v-model="snack" :timeout="2000" :color="snackColor">
      {{ snackTitle }}
      <v-btn text @click="snack = false">х</v-btn>
    </v-snackbar>
</div>
</template>

<script>
import { columns, rows } from '../data'
import ModalWindow from './ModalWindow';
import EditDialog from './EditDialog';
import axios from 'axios'

  export default {  
    components: {
    ModalWindow,
    EditDialog,
  },    
    data: () => ({      
      headers: columns,
      companies: rows,
      snack: false, 
      snackTitle: "ИНН не найден",
      endPoint: "https://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party",
      axisHeaders:{
        headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": "Token 6658b3595b8a765dc36fdb27f47086d581b0b528",
        }
      },
    }),
    methods: {
      deleteItem (item) {
        const index = this.companies.indexOf(item)
        confirm('Вы действительно хотите удалить компанию?') && this.companies.splice(index, 1)
      },
      onSaveClick(company){
          this.companies.push(company);
      },
      getItem(item){        
        axios.post(this.endPoint, {"query": item.itn}, this.axisHeaders)
        .then((res)=>{
          let info = res.data.suggestions[0];
          console.log("DATA RECEIVED: ", info);
          item.name = info.value;
          item.address=info.data.address.value;
          item.psrn = info.data.ogrn;
          item.itn = info.data.inn;
          let date = info.data.state.registration_date;
          item.date = (new Date(date).toISOString().substr(0, 10));
        })
        .catch((err)=>{          
          console.log("AXIOS ERROR: ", err);
          this.snack = true
        })
      }      
    },
  }
</script>

<style scoped>
</style>
