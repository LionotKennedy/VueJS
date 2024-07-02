<template>
  <v-app id="home">
    <v-container fluid>
      <!-- <HelloWorld /> -->
      <div class="head">
        <v-row>
          <v-col cols="5">
            <div class="mt-16 place">
              <h1 class="text-grey text-whites">Hello !!,</h1>
              <h1
                class="text-white textWeb"
                text-whites
                :style="{ transform: moveText }"
              >
                I'm Lionot RAZAFIMANDIMBY
              </h1>
              <!-- <h1 class="text-white text-whites">{{ aaA }}</h1> -->
              <span class="text-grey">Web Designer & Developer</span><br />
              <v-btn
                title
                dark
                class="text-red mt-8"
                variant="outlined"
                v-on:click="toggleModale"
                >Call me</v-btn
              >
            </div>
          </v-col>
          <!-- anothers -->
          <v-col cols="2">
            <div class="places">
              <!-- <v-icon>fas fa-angle-double-up</v-icon> -->
              <!-- <v-btn icon="fas fa-angle-double-up" color="black">
              </v-btn> -->
            </div>
          </v-col>
          <!-- anothers -->
          <!-- <v-col cols="5">
            <div class="mt-16 place2">
              <v-img src="img1.jpg" contain max-height="300"></v-img>
            </div>
          </v-col> -->

          <v-col cols="5">
            <div class="mt-16 place2 v-imgs">
              <v-img
                :style="{ transform: move }"
                src="img4.png"
                contain
                max-height="300"
              ></v-img>
            </div>
          </v-col>
        </v-row>
      </div>

      <!-- partie about -->

      <!-- devided 1 -->
      <v-col cols="12" class="mt-16" id="about">
        <div>
          <v-row>
            <v-col cols="12" sm="6" class="">
              <div class="egg testeImg">
                <v-img src="img2.png" max-height="300"></v-img>
              </div>
            </v-col>

            <!-- <v-col cols="12" sm="6">
              <div class="egg">
                <transition
                  name="rotate"
                  mode="in-out"
                  class="rotate-enter-active rotate-leave-active"
                >
                  <v-img src="img1.jpg" max-height="300"></v-img>
                </transition>
              </div>
            </v-col> -->

            <!-- devided 2-->
            <v-col cols="12" sm="6">
              <h5 class="mt-16">About me</h5>
              <div class="larg">
                <v-slider v-model="slider2" color="red">
                  <!-- label="track-color" -->
                </v-slider>
              </div>
              <h4 class="mt-n4">I Am a Creative Web Design</h4>
              <h4>And Developer</h4>
              <p class="text-grey">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Consequuntur voluptates ea ullam debitis, tempora esse a minus
                corrupti saepe beatae!
              </p>
              <br />
              <p class="text-grey">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
                adipisci quos odit consectetur quae! Nostrum maxime deserunt
                corporis similique autem quos distinctio placeat quia velit!
              </p>
              <br />
              <p class="text-grey">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                a placeat fugit fuga eum, nesciunt numquam cumque repudiandae.
                Porro ad magnam aliquid, iste hic natus? Minima amet esse
                corrupti laboriosam!
              </p>
              <v-btn tile dark color="red" class="mt-4">
                Download resume
              </v-btn>
            </v-col>
          </v-row>
        </div>
      </v-col>
      <div class="text-center mt-4">
        <h2>What we Do</h2>
        <div class="large">
          <v-slider v-model="slider2" color="red"></v-slider>
        </div>
      </div>
      <v-col cols="12" class="padd" id="portfolio">
        <div class="first" id="project">
          <v-row>
            <v-col cols="12">
              <div class="child">
                <v-btn
                  icon="fas fa-laptop"
                  color="red"
                  class="text-white"
                ></v-btn>
                <h3 class="ml-3 mt-4">Web Design</h3>
                <p class="text-grey ml-3 mt-4 text-caption">
                  Lorem ipsum dolor sit amet consectetur<br />
                  adipisicing elit. Omnis, et.<br />Lorem ipsum dolor sit amet.
                </p>
              </div>
              <!-- deuxieme -->
              <div class="child">
                <v-btn
                  icon="fas fa-mobile-alt"
                  color="red"
                  class="text-white"
                ></v-btn>
                <h3 class="ml-3 mt-4">App Design</h3>
                <p class="text-grey ml-3 mt-4 text-caption">
                  Lorem ipsum dolor sit amet consectetur<br />
                  adipisicing elit. Omnis, et.<br />Lorem ipsum dolor sit amet.
                </p>
              </div>
              <!-- troisieme -->
              <div class="child">
                <v-btn
                  icon="fas fa-camera"
                  color="red"
                  class="text-white"
                ></v-btn>
                <h3 class="ml-3 mt-4">Photography</h3>
                <p class="text-grey ml-3 mt-4 text-caption">
                  Lorem ipsum dolor sit amet consectetur<br />
                  adipisicing elit. Omnis, et.<br />Lorem ipsum dolor sit amet.
                </p>
              </div>
            </v-col>
          </v-row>
          <v-divider></v-divider>
        </div>
      </v-col>
      <!-- anothers -->
      <v-col cols="12" sm="12" id="services">
        <div class="d-flex justify-center mb-6">
          <v-btn color="red" class="mr-2">All</v-btn>
          <v-btn class="mr-2" variant="tonal">Web Design</v-btn>
          <v-btn class="mr-2" variant="tonal">From Design</v-btn>
          <v-btn class="mr-2" variant="tonal">Photography</v-btn>
          <v-btn variant="tonal">Illustration</v-btn>
        </div>
      </v-col>
      <!-- anothers -->
      <v-col cols="12" class="imgHover">
        <v-row class="fill-height" align="center" justify="center">
          <template v-for="(item, index) in items" v-bind:key="index">
            <v-col cols="12" md="4">
              <v-hover v-slot="{ isHovering, props }">
                <v-card
                  v-bind:elevation="isHovering ? 12 : 2"
                  v-bind:class="{ 'on-hover': isHovering }"
                  v-bind="props"
                >
                  <v-img v-bind:src="item.img" height="225px" cover></v-img>
                </v-card>
              </v-hover>
            </v-col>
          </template>
        </v-row>
      </v-col>
      <!-- anothers -->
      <v-col cols="12" sm="12">
        <div class="d-flex justify-center mb-6">
          <v-btn color="red" class="mt-4">Load More</v-btn>
        </div>
      </v-col>
      <!-- anothers -->
      <v-col cols="12" id="page">
        <div class="pre">
          <v-row>
            <v-col cols="12" sm="4">
              <v-card class="mw-auto" max-width="344" height="">
                <v-img src="img1.jpg" height="200px" cover=""></v-img>
                <v-card-title>We provide you the best</v-card-title>
                <v-card-subtitle>
                  By AAE IdeaPro | 21 December 2023
                </v-card-subtitle>
                <v-card-text>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Doloribus nisi quasi porro dolor illum sunt.
                </v-card-text>
              </v-card>
            </v-col>
            <!-- anothers -->
            <v-col cols="12" sm="4">
              <v-card class="mw-auto" max-width="344" height="">
                <v-img src="img1.jpg" height="200px" cover=""></v-img>
                <v-card-title>We provide you the best</v-card-title>
                <v-card-subtitle>
                  By AAE IdeaPro | 22 December 2023
                </v-card-subtitle>
                <v-card-text>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Doloribus nisi quasi porro dolor illum sunt.
                </v-card-text>
              </v-card>
            </v-col>
            <!-- anothers -->
            <v-col cols="12" sm="4">
              <v-card class="mw-auto" max-width="344" height="">
                <v-img src="img1.jpg" height="200px" cover=""></v-img>
                <v-card-title>We provide you the best</v-card-title>
                <v-card-subtitle>
                  By AAE IdeaPro | 23 December 2023
                </v-card-subtitle>
                <v-card-text>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Doloribus nisi quasi porro dolor illum sunt.
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </div>
      </v-col>
      <v-col cols="12" id="biog">
        <div class="hire">
          <v-row>
            <v-col cols="12" sm="8">
              <h1 class="mt-9">Hire me for your awesome project</h1>
              <p class="text-grey">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
                et ullam aperiam repellendus officia maiores aliquam quia
                obcaecati natus eum.
              </p>
            </v-col>
            <!-- anothers -->
            <v-col cols="12" sm="4">
              <v-btn color="red" class="mt-15">Hire me</v-btn>
            </v-col>
          </v-row>
        </div>
      </v-col>
      <!-- anothers -->
      <v-col cols="12" sm="12" class="px-16" id="contact">
        <v-row>
          <v-col cols="12" sm="4">
            <div class="child">
              <h1>Contact info.</h1>
              <v-btn
                icon="fas fa-map-marker-alt"
                class="mt-10"
                variant="outlined"
              ></v-btn
              ><br />
              <span>Your Street SYO, Your Area Dream</span><br />
              <v-btn
                icon="fas fa-phone-alt"
                class="mt-10"
                variant="outlined"
              ></v-btn
              ><br />
              <span>034 69 029 63</span><br />
              <span>034 69 029 63</span><br />
              <v-btn
                icon="fas fa-envelope"
                class="mt-10"
                variant="outlined"
              ></v-btn
              ><br />
              <span>razafimandimbylionotkennedy@gmail.com</span><br />
              <span>razafimandimbylionotkennedy2@gmail.com</span><br />
            </div>
          </v-col>
          <!-- anothers -->
          <v-col cols="12" sm="8">
            <h1 class="mt-8">Send your message</h1>
            <v-divider color="black"></v-divider>
            <span class="text-caption">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              autem officiis soluta dolorum vitae doloribus adipisci dignissimos
              asperiores quae porro eaque debitis est reprehenderit ducimus
              inventore repudiandae, nisi impedit earum. Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Illo, porro. Lorem ipsum, dolor
              sit amet consectetur adipisicing elit. Sint, reprehenderit. Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam
              sapiente ducimus minus maiores similique perferendis, illum nihil
              fuga facere facilis. Error ab adipisci, repudiandae magnam non
              sequi quibusdam explicabo nulla?
            </span>
            <!-- anothers -->
            <v-row class="mt-10">
              <v-col cols="12" sm="6">
                <v-text-field
                  label="Name"
                  persistent-hint
                  variant="outlined"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  label="Phone No"
                  persistent-hint
                  variant="outlined"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-textarea
              label="Message"
              persistent-hint
              variant="outlined"
            ></v-textarea>
            <v-btn color="red" class="mt-2">Submit Now</v-btn>
          </v-col>
        </v-row>
      </v-col>
      <FooterView />
      <NavBar />
      <Modal v-bind:revele="revele" v-bind:toggleModale="toggleModale"></Modal>
    </v-container>
  </v-app>
</template>

<!-- <script>
import { defineComponent } from "vue";

// import HelloWorld from '@/components/HelloWorld.vue'
import NavBar from "@/components/NavBar.vue";
import FooterView from "@/components/FooterView.vue";

export default defineComponent({
  name: "HomeView",
  setup() {
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
    };
  },
  components: {
    // HelloWorld,
    NavBar,
    FooterView,
  },
});
</script> -->

<script src="../script/HomeJS.js"></script>

<style src="../style/style1.css" scoped></style>

