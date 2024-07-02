import { defineComponent } from "vue";
import NavBar from "@/components/NavBar.vue";
import FooterView from "@/components/FooterView.vue";

// import ScrollAnimation from "@/directives/scrollanimation";
import Modal from "@/Modal/Modal1.vue";

export default defineComponent({
  name: "HomeView",

  data() {
    return {
      revele: false
    }
  },



  // anothers
  setup() {
    const phrase = "I'm Lionot RAZAFIMANDIMBY";
    const mots = phrase.split(" ");
    let motActuel = "";
    let intervalId = null; // Ajoutez cette ligne

    const afficherMotParMot = () => {
      // Utilisation de la syntaxe des méthodes dans setup()
      let i = 0;
      intervalId = setInterval(() => {
        // Utilisation de setInterval au lieu de setinterval
        if (i < mots.length) {
          motActuel += mots[i] + " ";
          i++;
        } else {
          clearInterval(intervalId); // La fonction est écrite en camelCase
        }
      }, 1000);
    };

    afficherMotParMot(); // Appel de la fonction directement dans le setup pour lancer l'affichage

    return {
      slider2: 50,
      items: [
        { img: "img1.jpg" },
        { img: "img1.jpg" },
        { img: "img1.jpg" },
        { img: "img1.jpg" },
        { img: "img1.jpg" },
        { img: "img1.jpg" },
      ],
      motActuel,
      mots,
      intervalId,
     
    };
  },

  // data() {
  //  return {
  //    move: 'translate(0, 0)'
  //  }
  // },

  methods: {
    afficherMotParMot() {
      let i = 0;
      this.intervalId = setInterval(() => {
        if (i < this.mots.length) {
          this.motActuel += this.mots[i] + " ";
          i++;
        } else {
          clearInterval(this.intervalId);
        }
      }, 1000); // Augmentez le délai à 1000 ms
    },
    toggleModale: function() {
      this.revele = !this.revele
    }
  },
  mounted() {
    this.afficherMotParMot();
  },
  //   moveImage() {
  //    // Changez ces valeurs pour contrôler la direction et la distance du déplacement
  //    const x = Math.random() * 200 - 100; // Déplace vers la gauche ou vers la droite
  //    const y = Math.random() * 200 - 100; // Déplace vers le haut ou vers le bas

  //    this.move = `translate(${x}px, ${y}px)`;
  //  },

  components: {
    NavBar,
    FooterView,
    // ScrollAnimation,
    Modal,
  },
});