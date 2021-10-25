<template>
  <v-container class="tab">
    <v-data-table
    :headers="colunaAlmoco"
    :items="registro"
    hide-default-footer />
   <!-- <v-alert v-if="!items" type="success" danse>{{aviso}}</v-alert> -->

  </v-container>
</template>

<script>
export default {
  name: 'HorarioAlmoco',


  data:() =>({
    colunaAlmoco: [
      {
        text: 'HORARIO DE ALMOÇO',
        value: 'plantao',
        width: 120,
      },
      {
        test: 'MTZ- INTERVALO 11:30 A 13:30',
        value: 'normal',
        width: 120
      }
    ],
    registro: [
      {
        plantao: 'MTZ- INTERVALO 13:30 A 15:30',
        normal: 'MTZ- INTERVALO 11:30 A 13:30'
      }
    ]
  

   
  }),
  computed: {
    avisoCerto() {
      setTimeout(() =>{
        this.aviso = 'Deu certo'

      })
    }
  }
}
</script>

<style scoped>
.tab{
  display: flex;

  
}

</style>