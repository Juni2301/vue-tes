<template>
  <v-container>
   <div>
    <v-card class="pa-md-2 mx-lg-auto" outlined>
       <v-card-title class="titleUpCard">Basic info</v-card-title>
        <v-card-text class="subtitleCard">Some info may be visible to other people using Google services.
          <v-button class="buttonMore">Learn More</v-button>
        </v-card-text>
        <v-layout>
          <v-container row>
            <v-flex xs4>
              <v-card-text>Photo</v-card-text>
            </v-flex>
            <v-flex xs7>
              <v-card-text>A photo helps personalize your account</v-card-text>
            </v-flex>
            <v-flex xs1>
                <v-card-actions>
               <v-spacer></v-spacer>
               <v-avatar>
                  <img
                    alt="Avatar"
                    src="../assets/foto.png"
                  />
                </v-avatar>
               </v-card-actions>
            </v-flex>
          </v-container>
        </v-layout>
        <v-divider></v-divider>
        <div v-for="item, index in identitas" :key="item.label"> 
          <v-layout > 
            <v-container row >
            <v-flex xs4>
              <v-card-text>{{item.label}}</v-card-text>
            </v-flex>
            <v-flex xs7>
              <v-card-text>{{item.valueLabel}}</v-card-text>
            </v-flex>
            <v-flex xs1>
             <v-card-actions>
               <v-spacer></v-spacer>
               <v-icon large @click="next">mdi-chevron-right</v-icon>
               </v-card-actions>
            </v-flex>
          </v-container>
        </v-layout>
        <v-divider></v-divider>
        </div>
    </v-card>
  </div>
  <div class="box2">
     <v-card class="pa-md-2 mx-lg-auto" outlined>
      <v-card-title class="titleUpCard">Contact info</v-card-title>
      <div v-for="item, index in identitasBox2" :key="item.label">
       <v-layout > 
            <v-container row >
            <v-flex xs4>
              <v-card-text>{{item.label}}</v-card-text>
            </v-flex>
            <v-flex xs7>
              <v-card-text>{{item.valueLabel}}</v-card-text>
            </v-flex>
            <v-flex xs1>
              <v-card-actions>
               <v-spacer></v-spacer>
               <v-icon large @click="next">mdi-chevron-right</v-icon>
               </v-card-actions>
            </v-flex>
          </v-container>
        </v-layout>
        <v-divider v-if="item.divider == true"></v-divider>
      </div>
    </v-card>  
  </div>
  <div>
    <v-container>
      <v-layout row wrap>
      <v-flex xs5>
        <v-card class="pa-md-2 mx-lg-auto" outlined max-height="100%">
            <v-card-title class="titleUpCard">Your Profiles</v-card-title>
            <v-card-text class="subtitleCard">See how your different profiles appear in Google Services</v-card-text>
      <v-divider class="divider2"></v-divider>
      <v-card-text><v-button class="buttonBox">See profiles</v-button></v-card-text>
      </v-card>
      </v-flex>
      <v-spacer></v-spacer>
       <v-flex xs6><v-card class="pa-md-2 mx-lg-auto" outlined>
        <v-layout row>
      <v-flex xs6>
        <v-card-title class="titleUpCard">Your Profiles</v-card-title>
        <v-card-text class="subtitleCard">Decide what personal information you make visible to other when you use your main Google Account across Google services</v-card-text>
      </v-flex>
      <v-flex xs6>
       <v-img
          alt="Vuetify Logo2"
          class="picture2"
          contain
          src="../assets/search.png"
          transition="scale-transition"
        />
      </v-flex>
      
      </v-layout>
      <v-divider class="divider3"></v-divider>
        <v-card-text><v-button class="buttonBox">Go to About me</v-button></v-card-text>
       </v-card></v-flex>
    </v-layout>
    </v-container>
  </div>
  <div class="box3">
    <v-card class="pa-md-2 mx-lg-auto" outlined max-height="100%">
      
    </v-card>
  </div>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',

    data() {
      return{
        identitas:[
          {
            label:"Name",
            valueLabel:"Junika Tobing",
            divider: true, 
          },
          {
            label:"Birthday",
            valueLabel:"June 23,2001",
            divider: true, 
          },
          {
            label:"Gender",
            valueLabel:"Female",
            divider: false
          }
        ],
        identitasBox2:[
          {
            label:"Email",
            valueLabel:"junikatobing23@gmail.com",
            divider: true, 
            inset: true
          },
           {
            label:"Phone",
            valueLabel:"08126455708",
            divider: true, 
            inset: true
          }
        ]
      }

    }
    }
</script>
<style>
.titleUpCard{
  font-weight: 400;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 1.375rem;
}
.subtitleCard{
  margin-top: -10px;
  font-size: 15px;
}
.card{
  padding:50px;
}
.buttonMore{
  color: blue;
}
.box2{
  margin: 30px 0px;
}
.divider2{
  margin-top: 100px;
}
.divider3{
  margin-top: 60px;
}
.buttonBox{
  color: blue;
  font-weight: 500;
  font-size: 15px;
}
.picture2{
  margin-top: 20px;
  height: 120px;
}
#cardBox{
  max-height: 200px;
}
.box3{
  margin: 30px 0px;
}
</style>