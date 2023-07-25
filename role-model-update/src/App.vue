<template>
  <div >
    <b-row>
        <b-col sm="4" class="addingModel">
          <AddRoleModel @fromAddRoleModel="updateCard($event)"/>
        </b-col>
        <transition-group sm="12" class="role-model" name="role-model" tag="b-col">
          <ModelCard 
            v-for="(item,index) in card" 
            :key="index" 
            :index="index" 
            :modelName="item[0]" 
            :modelJob="item[1]" 
            :modelNationality="item[2]"
            :modelBirthDay="item[3]" 
            :modelAbout="item[4]" 
            :modelPic="item[5]" 
            :tags="item[6]" 
            @updateEmitIndex="activeIndex($event)" 
            @deleteModelOpen="deleteModelOpen($event)"
            />
          <UpdateModelCard 
            :modelName="card[activeNumber][0]" 
            :modelJob="card[activeNumber][1]" 
            :modelNationality="card[activeNumber][2]"                           
            :modelBirthDay="card[activeNumber][3]" 
            :modelAbout="card[activeNumber][4]" 
            :modelPic="card[activeNumber][5]" 
            :tags="card[activeNumber][6]" 
            v-if="showModel"                           
            @closeModel="updateOkey($event)" 
            @hideUpdateModel="hideUpdateModel()"
            :key="randomKey"
            />
          <DeleteModelCard 
            v-if="showModelDelete" 
            :index="activeNumber" 
            @deleteModel="deleteModel()"
            @deleteModelHide="deleteModelHide()"
            :key="randomKey"
            />
        
        </transition-group>
      </b-row>
  </div>
</template>


<script>
import globalComponents from "./components/globalComponents";


export default {
 components:{
   ...globalComponents
 },
  data(){
   return{
     card:[],
     showModel:false,
     showModelDelete:false,
     activeNumber: -1,
     randomKey: Math.random()
   }
  },
  methods:{
    updateCard(e){
      this.card.push(e);
      console.log(this.card);
    },
    activeIndex(e){
      this.showModel = true;
      this.activeNumber = e;
      console.log(e)
    },
    updateOkey(e){
      this.card.splice(this.activeNumber,1,e);
      this.showModel = false;
      this.activeNumber = -1;
    },
    deleteModelOpen(e){
      this.showModelDelete= true;
      this.activeNumber = e;
    },
    deleteModel(){
      this.card.splice(this.activeNumber,1);
      this.showModelDelete = false;
      this.activeNumber = -1;
    },
    deleteModelHide(){
      this.showModelDelete = false;
    },
    hideUpdateModel(){
      this.showModel = false
    }
  }

}
</script>

<style>  
  .addingModel{
    margin-left: 30px;
  }
 .role-model{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 40px;
    backface-visibility: hidden;
    transform-origin: 10% 50%;
    z-index: 1;
 } 

 .role-model-move{ transition: all 600ms ease-out}
 .role-model-enter-active{
   transition: all 300ms ease-out;
 }

 .role-model-leave-active{
   transition: all 200ms ease-out;
   position: absolute;
   z-index: 1;
 }

 .role-model-enter,
 .role-model-leave-to{
   opacity: 0;
 }
</style>
