<template>
    <v-edit-dialog
            :return-value.sync="address"                     
          >
            <div>{{ address }}</div> 

            <template v-slot:input>
              <v-text-field
                v-model="address"                
                label="Изменить"
                single-line
                counter
                autofocus
                color="#E8A278"
              >
              </v-text-field>
            </template>

       </v-edit-dialog>
</template>
<script>
export default {
    props:{
        address:{
            type: String,
            default: '',
        } 
    },
}
</script>