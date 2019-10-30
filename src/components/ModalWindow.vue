 <template >
  <v-dialog v-model="dialog" max-width="500px">

          <template v-slot:activator="{ on }">
            <v-btn class="ma-2" tile outlined color="#D05E1A" v-on="on">Добавить</v-btn>
          </template>

          <v-card>
            <v-card-title>
              <span class="headline color">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field color="#E8A278" v-model="editedItem.name" label="Наименование"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="12" md="12">
                    <v-text-field color="#E8A278"  v-model="editedItem.address" label="Адрес"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field  color="#E8A278" v-model="editedItem.psrn" :rules="[rules.digit, rules.length13]" label="ОГРН"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                    <v-text-field color="#E8A278"  v-model="editedItem.itn" :rules="[rules.required, rules.digit, rules.length10]" label="ИНН*" autofocus></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="6">
                     <DateField v-on:childToParent="onSaveClick"/>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="#055843" dark text @click="close">Отмена</v-btn>
              <v-btn color="#055843" text @click="save">Сохранить</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>

    </template>

<script>
import DateField from './DateField';
export default {
    components: {
        DateField,
    },    
    data: () => ({
      dialog: false,    
      formTitle: "Новая компания",
      editedItem: {
        name: '',
        address: '',
        prsn: '',
        itn: '',
        date: '',
      },
      defaultItem: {
        name: '',
        address: '',
        prsn: '',
        itn: '',
        date: '',
      }, 
      rules:{
        required: v => !!v || 'Обязательное поле', 
        length10: v=> v.length ==10 || 'Введите 10 цифр',
        length13: v=> v.length ==13 || 'Введите 13 цифр',
        digit: v => {
            const pattern = /\d+/
            return pattern.test(v) || 'Введите цифры'
        },
      },   
    }),
    watch: {
      dialog (val) {
        val || this.close()
      },
    },
    methods: {
      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
        }, 300)
      },
      save (event) { 
        const pattern = /\d+/
        let tmpItn = this.editedItem.itn
        if(tmpItn.length == 10 && pattern.test(tmpItn)){
          this.$emit('childToParent', this.editedItem) 
          this.close()          
        }            
      },
      onSaveClick (value) {
        this.editedItem.date = value
      },
      
    },
}
</script>
<style scoped>
.color{
  color:#D05E1A
}
</style>