<template>
  <v-container>
    <!-- <v-sheet   
      tile
      height="54"
      class="d-flex" >
        <v-btn
        icon
        class="ma-2"
      >
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-select
      v-model="dataDia"
      :items="dia"
      dense
      outlined
      hide-details
      class="ma-2"
      label="Dia da semana" >

      </v-select>
      <v-select
      v-model="id"
      :items="semana"
      dense
      outlined
      hide-details
      class="ma-2" 
      label="Semana"
      @change="test()">

      </v-select>
      </v-sheet> -->

  
   <v-data-table 
   hide-default-footer
   :headers="diaSemana"
   :items="dataDia"
   sort-by="calories"
   class="elevation-1">

  <template v-slot:top>
    <v-toolbar
      flat
    >
    <v-toolbar-title>
      Escala Plantonista 
    </v-toolbar-title>
    <v-divider 
    class="mx-4"
    inset
    vertical></v-divider>
    <v-spacer></v-spacer>
    <v-dialog 
    v-model="dialog"
    max-width="500px"
    >
      <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              New Item
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                    
                  >
                    <v-text-field
                      
                      label="id"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                     v-model="editedItem.domingo"
                      label="Domingo"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                     v-model="editedItem.segunda"
                      label="Segunda"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                     v-model="editedItem.terca"
                      label="Teça"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.quarta"
                      label="Quarta"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.quinta"
                      label="Quinta"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.sexta"
                      label="Sexta"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.sabado"
                      label="Sabado"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
            <v-card-actions>

            <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>

          </v-card>
    </v-dialog>

    <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Deseja exluir este item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
    </v-toolbar>
  </template>
   <template v-slot:item.action="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editarItem(item)"
      >
        mdi-pencil
      </v-icon>
      
      <v-icon
        small
        
        @click="deleteItem()"
      >
        mdi-delete
      </v-icon>
    </template>

  </v-data-table>


   <HorarioAlmoco />

  </v-container>
</template>

<script>
import HorarioAlmoco from './HorarioAlmoco.vue'
  export default {
    name: 'HelloWorld',
    components: {
      HorarioAlmoco
    },
    
    data() {
      return{
        dialog: false,
        dialogDelete: false,
        diaSemana: [],
        dataDia: [],
        editedIndex: -1,
        editedItem: {
          id: null,
          domingo: '',
          segunda: '',
          terca: '',
          quarta: '',
          quinta: '',
          sexta: '',
          sabado: ''
        
        },
       
        defaultItem: {
          id: null,
          Domingo: '',
          Segunda: '',
          Terca: '',
          Quarta: '',
          Quinta: '',
          Sexta: '',
          Sabado: ''
        }
        
      }
    },
      computed:{
      formTitle(){
        return this.editedIndex === -1 ? "New Item": "Edit Item"
      }
    },
    methods:{
      async getRegistro() {
        
        const req = await fetch('http://localhost:3000/DiasSemana')
        const data = await req.json()

        this.diaSemana = data.dataConsulta

        
        this.deleteItemConfirm

        this.data()

        /* await this.test() */
        
      },
      async data(){
        const req = await fetch('http://localhost:3000/escala')
        const data = await req.json()

       this.dataDia = data 
      console.log(this.dataDia)
      
      },

      initialize(){
        this.dataDia
      },
      editarItem(item){
        /* const req = await fetch(`http://localhost:3000/escala/${id}`)
        const data = await req.json()  */

        

       /*  if(this.editedIndex === -1){
          this.dataDia.push(item)
        }else{
           item =>{
            for(semana in this.dataDia){
              this.dataDia[semana] = item
            }
          }
        }
 */
         this.editedIndex = this.dataDia.indexOf(item) 
         this.editedItem = Object.assign({},item) 
        this.dialog = true
        
      },
      
     async deleteItem(id){
        this.dialogDelete = true

        const req = await fetch(`http://localhost:3000/escala/${id}`)
         /* this.editedIndex = this.dataDia.indexOf(item) */
        /* this.editadItem = Object.assign({}, item) */
        
      },
       deleteItemConfirm() {
        this.dataDia.splice(this.editedIndex, 1)
        this.closeDelete
      }, *
      close() {
        this.dialog = false
        this.$nextTick(() => {
          this.dataDia = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },
      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.dataDia = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

    async save () {

        if (this.editedIndex > -1) {
          Object.assign(this.dataDia[this.editedIndex], this.editedItem)
        } else {
          const dataJson = JSON.stringify(this.editedItem)
          const req = await fetch('http://localhost:3000/escala', {
            method: "POST",
            headers: {"Content-type": "application/json"},
            body:dataJson
          })

          
          /* this.dataDia.push(this.editedItem) */

        }
        this.close()
      },
      /* async test(){
        this.load = true

        setTimeout( async () =>{
        const req = await fetch('http://localhost:3000/DiasSemana')
        const data = await req.json()

        this.dataDia = data.registroData.filter(e => e.id == this.id)
        this.load = false
        },1000)
      } */
      
    },
  
    mounted(){
     this.getRegistro()
     
    }
  }
</script>

<style scoped>

</style>
