<template>
<header>
  <div class="teste">
  <!-- <h1>Hello Vuetify</h1> -->
  <!-- <v-app-bar app color="black" dark flat class="px-12"> -->
  <!-- <v-app-bar app color="rgba(29, 27, 28, 0.86)" dark flat class="px-12"> -->
  <v-app-bar
    app
    color="black"
    dark
    flat
    class="px-12"
    @scroll="checkScrollPosition"
  >
    <v-btn>
      <v-icon color="red" left class="mr-2">fas fa-signature</v-icon>R.LIONOT
    </v-btn>
    <v-spacer></v-spacer>
    <v-btn text @click="scroll('home')" class="text-red">Home</v-btn>
    <v-btn text @click="scroll('about')">About</v-btn>
    <v-btn text @click="scroll('portfolio')">PortFolio</v-btn>
    <v-btn text @click="scroll('services')">Services</v-btn>
    <v-btn text @click="scroll('page')">Page</v-btn>
    <v-btn text @click="scroll('biog')">Biog</v-btn>
    <v-btn text @click="scroll('contact')">Contact</v-btn>
  </v-app-bar>
  <!-- <v-col cols="2"> -->
  <!-- <div class="places"> -->
  <!-- <v-icon>fas fa-angle-double-up</v-icon> -->
  <!-- <v-btn text @click="scroll('home')" icon="fas fa-angle-double-up" color="black"> -->
  <!-- </v-btn> -->
  <!-- </div> -->
  <!-- </v-col> -->

  <!-- <v-col
    cols="2"
    v-if="
      ['portfolio', 'services', 'page', 'biog', 'contact'].includes(
        currentSection
      )
    "
  >
    <div class="places">
      <v-btn
        text
        @click="scroll('home')"
        icon="fas fa-angle-double-up"
        color="black"
      >
      </v-btn>
    </div>
  </v-col> -->

  <v-col cols="2" v-if="showButton">
    <div class="places">
      <v-btn
        text
        @click="scroll('home')"
        icon="fas fa-angle-double-up"
        color="black"
      >
      </v-btn>
    </div>
  </v-col>
</div>
</header>
</template>

<script>
// export default {
//   name: "NavBar",

//   components: {},
//   methods: {
//     scroll(refName) {
//       const element = document.getElementById(refName);
//       element.scrollIntoView({ behavior: "smooth" });
//     },
//   },
// };


window.addEventListener("scroll", function (){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });

export default {
  name: "NavBar",
  //    data() {
  //        return {
  //            currentSection: null
  //        };
  //    },
  //    methods: {
  //        scroll(refName) {
  //            this.currentSection = refName;
  //            const element = document.getElementById(refName);
  //            element.scrollIntoView({behavior: "smooth"});
  //        }
  //    },

  data() {
    return {
      currentSection: null,
      showButton: false,
    };
  },

  methods: {
    checkScrollPosition() {
      const element = document.getElementById(this.currentSection);
      const rect = element.getBoundingClientRect();
      // Si le haut de l'élément est visible à l'écran
      if (rect.top >= 0) {
        // Afficher le bouton
        this.showButton = true;
        console.log("coucou");
      } else {
        // Cacher le bouton
        this.showButton = false;
        console.log("coucou");
      }
    },
    scroll(refName) {
      this.currentSection = refName;
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
.places {
  position: absolute;
  z-index: 9999;
  /* bottom: 0; */
  top: 80%;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
}
.teste {
  /* display: none; */
  /* position: fixed; */
  /* z-index: -10000; */

  position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: 0.6s;
    padding: 40px 100px;
    z-index: 10000;
}

header.sticky
{
    padding: 5px 100px;
    background: #fff;
    /* display: none; */
}

</style>
