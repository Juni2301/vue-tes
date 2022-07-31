<template>
<v-container>
<div>
    <v-container class="content">
    <v-layout row>
      <v-flex xs6>
        <h3 class="titleUp">Other info and preferences for Google services</h3>
        <div class="subtitle">Ways to verify it’s you and settings for the web</div>
      </v-flex>
      <v-flex xs5>
       <v-img
          class="picturebox2"
          src="../assets/box2.png"
        />
      </v-flex>
    </v-layout>
    <v-layout row>
        <v-flex xs5>
            <v-card class="pa-md-2 mx-lg-auto" outlined min-height=400px>
            <v-card-title class="titleUpCard">Password</v-card-title>
            <v-card-text class="subtitleCard">A secure helps protect your Google Account</v-card-text>
            <v-card-text>
                <v-layout row>
                <v-flex xs5>
                <v-list-item two-line>
                <v-list-item-content>
                <v-list-item-title>Password</v-list-item-title>
                <v-list-item-subtitle>Last Change Oct 27,2021</v-list-item-subtitle>
                </v-list-item-content>
                </v-list-item>
                </v-flex>
                <v-flex>
                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-icon large @click="next">mdi-chevron-right</v-icon>
                    </v-card-actions>
                </v-flex>
            </v-layout>
            </v-card-text>  
      </v-card>
        </v-flex>
         <v-spacer></v-spacer>
        <v-flex xs6>
            <v-card class="pa-md-2 mx-lg-auto" outlined min-height=400px>
            <v-card-title class="titleUpCard">General preferences for the web</v-card-title>
            <v-card-text class="subtitleCard">Manage settings for Google services on the web</v-card-text>
            <v-container>
                <v-layout row>
                    <v-flex md1>
                         <v-list-item-icon>
                             <v-card-actions><v-spacer></v-spacer><font-awesome-icon icon="globe" /></v-card-actions>
                            </v-list-item-icon>
                    </v-flex>
                    <v-flex xs6>
                        <v-list-item three-line>
                            <v-list-item-content>
                            <v-list-item-title>Language</v-list-item-title>
                            <v-list-item-subtitle>English(United States)</v-list-item-subtitle>
                             <v-list-item-subtitle>Indonesia(Indonesia)</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-flex>
                    <v-flex>
                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-icon large @click="next">mdi-chevron-right</v-icon>
                    </v-card-actions>
                    </v-flex>
                </v-layout>
                <v-divider class="dividerEnd"></v-divider>
                 <v-layout row>
                    <v-flex md1>
                         <v-list-item-icon>
                             <v-card-actions><v-spacer></v-spacer><font-awesome-icon icon="keyboard" /></v-card-actions>
                            </v-list-item-icon>
                    </v-flex>
                    <v-flex xs6>
                        <v-list-item two-line>
                            <v-list-item-content>
                            <v-list-item-title>Input Tools</v-list-item-title>
                            <v-list-item-subtitle>Type more easily in your language</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-flex>
                    <v-flex>
                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-icon large @click="next">mdi-chevron-right</v-icon>
                    </v-card-actions>
                    </v-flex>
                </v-layout>
                <v-divider class="dividerEnd"></v-divider>
                <v-layout row>
                    <v-flex md1>
                         <v-list-item-icon>
                             <v-card-actions><v-spacer></v-spacer><font-awesome-icon icon="keyboard" /></v-card-actions>
                            </v-list-item-icon>
                    </v-flex>
                    <v-flex xs6>
                        <v-list-item two-line>
                            <v-list-item-content>
                            <v-list-item-title>Accessbility</v-list-item-title>
                            <v-list-item-subtitle>High-Contrast colors OFF</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-flex>
                    <v-flex>
                    <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-icon large @click="next">mdi-chevron-right</v-icon>
                    </v-card-actions>
                    </v-flex>
                </v-layout>
                <v-divider class="dividerEnd"></v-divider>
            </v-container>
      </v-card>
        </v-flex>
    </v-layout>

  </v-container>
</div>
 <div class="box3">
    <v-card class="pa-md-2 mx-lg-auto" outlined max-height="100%">
      <v-card-title class="titleUpCard">Looking for something else ?</v-card-title>
      <v-card-text  v-for="item, index in labelForm" :key="item.icon">
         <v-layout row>
            <v-flex xs1>
                <v-list-item-icon>
                <v-card-actions><v-spacer></v-spacer><font-awesome-icon v-bind:icon="item.iconValue"/></v-card-actions>
                </v-list-item-icon>
            </v-flex>
            <v-flex xs6>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title>{{item.textValue}}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-flex>
            <v-flex>
                <v-card-actions>
                <v-spacer></v-spacer>
                <v-icon large @click="next">mdi-chevron-right</v-icon>
                </v-card-actions>
                </v-flex>
      </v-layout>  
      <v-divider></v-divider>
      </v-card-text>
    </v-card>
  </div>
</v-container>

</template>
<script>
 export default {
    name: 'BoxBottom',
    data() {
      return{
        labelForm:[
          {
            iconValue:"search",
            textValue:"Search Google Account",
          },
          {
            iconValue:"question",
            textValue:"See help options",
          },
          {
            iconValue:"keyboard",
            textValue:"Send Feedback",

          }
        ],
      }
    }
 }
</script>
<style>
.picturebox2{
    width: "100%";
    margin-top: -40px;
}
.dividerEnd{
    margin-top: 10px;
    margin-bottom: 20px;
}
</style>