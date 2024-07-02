<template>
  <div class="bloc-modale" v-if="revele">
    <div v-on:click="toggleModale" class="overlay">
      <v-card class="modale">
        <!-- <div class="modale card"> -->
        <!-- <div class="btn-modale btn btn-danger" v-on:click="toggleModale">x</div> -->
        <v-btn v-on:click="toggleModale" color="red" class="btn-modale" variant="outlined">x</v-btn>
        <h2>Hello Vuetify</h2>
        <!-- </div> -->
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MasakyModal1',
  props: ['revele', 'toggleModale'],
};
</script>

<style scoped>
.bloc-modale {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.overlay {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modale {
    background: #f1f1f1f1;
    color: #333;
    padding: 100px;
    position: fixed;
    /* bottom: 10%; */
}

.btn-modale {
    position: absolute;
    top: 10px;
    right: 10px;
}
</style>
