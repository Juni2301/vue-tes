<template>
<v-app>
  <v-container grid-list-md text-md-center fluid >
    <v-layout coloumn>
      <v-flex>
        <h3 class="titleUp">Personal Info</h3>
         <div class="subtitle">Info about you and your preferences across Google services</div>
      </v-flex>
    </v-layout>
  </v-container>
  <v-container class="content">
    <v-layout row>
      <v-flex xs6>
        <h3 class="titleUp">Your profile info in Google services</h3>
        <div class="subtitle">Personal info and options to manage it. You can make some of this info, like your contact details, visible to others so they can reach you easily. You can also see a summary of your profiles.</div>
      </v-flex>
      <v-flex xs5>
       <v-img
          alt="Vuetify Logo"
          class="picture"
          contain
          src="./assets/picture1.png"
          transition="scale-transition"
        />
      </v-flex>
    </v-layout>
  </v-container>
    <HelloWorld/>
    <BottomBox/>
</v-app>
</template>
<script>
import HelloWorld from '@/components/HelloWorld.vue'
import BottomBox from '@/components/BoxBottom.vue'
export default {
  name: 'App',
  components: {
    HelloWorld,
    BottomBox,
},
  data: () => ({
    //
  }),
};
</script>
<style lang="scss">
.titleUp{
  font-weight: 400;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 1.75rem;
}
.subtitle{
  font-weight: 400;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 15px;
  opacity: 0.8;
}
.content{
  margin-top: 80px;
}
.picture{
  margin-top: 0px;
  height: 150px;
}
</style>
