<template>

  <div class="fullscreen login-bg-main scroll">
    <div class="q-pa-sm row justify-center q-mt-lg" >
        <div class="col" style=" max-width: 1221px;">
         <q-img  src="/img/logo.png"style=" width:568px; margin-top:6%;" ></q-img>
      <div class=" login-box-bg q-mt-lg" style=" width:1220px; height:524px;">
          <q-form style="">
            <q-space/>
            <div class="q-gutter-md" style="width:313px; float:right; margin-right:159px; margin-top:188px;">
              
               <q-input outlined label="用户名" dense  class=" full-width">  
                  <template v-slot:prepend>
                    <q-icon name="person" color="primary"></q-icon>
                    </template> 
               </q-input>
               <q-input outlined label="密  码" dense  class=" full-width">  
                  <template v-slot:prepend>
                    <q-icon name="vpn_key" color="primary"></q-icon>
                    </template> 
               </q-input>
               <div class="row">
                 <div class="col text-left">  
               <q-checkbox v-model="check"  label="记住账号"/>
               </div>
               <div class="col text-right">  
                 <q-btn flat label="忘记密码"/>
               </div>
               </div>
               <q-btn color="primary"  label="登  录" class=" full-width" size="18px" to="/main"/>
            </div>
          </q-form>
      </div>
      </div>
    </div>  
</div>
</template>


<script>
export default{
  data(){
    return{
     check:false,
    }
  },

}
</script>