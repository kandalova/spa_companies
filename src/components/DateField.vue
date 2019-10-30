<template>
    <v-dialog
        ref="dialog"
        v-model="modal"
        width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="date"
            label="Дата регистрации"
            prepend-icon="event"
            readonly
            v-on="on"
            color="#E8A278" 
          ></v-text-field>
        </template>
        <v-date-picker v-model="date" locale="ru" scrollable header-color="#11886A" color="#D05E1A">
          <v-spacer></v-spacer>
          <v-btn text color="#D05E1A"  @click="modal = false">Отмена</v-btn>
          <v-btn text color="#D05E1A"  @click="emitToParent">Сохранить</v-btn>
        </v-date-picker>
      </v-dialog>
</template>

<script>
export default {
  
  data: () => ({
      date: '',
      modal: false,
    }),
    methods: {
    emitToParent (event) {
      this.$emit('childToParent', this.date)
      this.modal=false
    }
  }
}
</script>