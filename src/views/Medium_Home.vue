<template>
    <div>
        <b-container class="main_container">
            <b-row class="newrow">
                  <!-- <img
                  alt="Vue logo"
                  src="../assets/medium.png" class="mediumimg"
                  style="height:65px;width:150px;border:none"
                 
                />   -->
               <span class="mtext">Medium</span> 
               <!-- <div class="iconsrhs">
                   <i class="fas fa-search"></i>
               </div> -->

                
                

            </b-row>
            <b-row class="firstarea">
            <b-col class="cols"><img
                  alt="Vue logo"
                  src="../assets/refimg1.png" 
                  style="height:222px;width:374px;"

                 
                /><br>The first thing that you will encounter is the difference in initializing your app. In Vue 2 you have to use Vue constructor with a render function and the $mount method like this
</b-col>

            <b-col class="cols"><div class="imgincol"><img
                  alt="Vue logo"
                  src="../assets/refimg1.png" 
                  style="height:100px;width:100px;"

                 
                /></div>
               
                </b-col>
            <b-col class="cols">1st column</b-col>
            </b-row>
            <b-row class="trendarea">
             <b-col class="cols"><img
                  alt="Vue logo"
                  src="../assets/refimg1.png" 
                  style="height:222px;width:374px;"

                 
                /><br>The first thing that you will encounter is the difference in initializing your app. In Vue 2 you have to use Vue constructor with a render function and the $mount method like this
</b-col>
            <b-col class="cols">1st column</b-col>
            <b-col class="cols">1st column</b-col>
            </b-row>
            <b-row class="lastarea">
             <b-col class="cols"><img
                  alt="Vue logo"
                  src="../assets/refimg1.png" 
                  style="height:222px;width:374px;"

                 
                /><br>The first thing that you will encounter is the difference in initializing your app. In Vue 2 you have to use Vue constructor with a render function and the $mount method like this
</b-col>
            <b-col class="cols">1st column</b-col>
            </b-row>
        </b-container>
        
    </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

.main_container{
   
    padding-top:0px;
    margin:0 64px;
    margin-top:24px; 
    margin-bottom:24px;


}
/* .mediumimg{
    border:0px;
} */
.newrow{
    margin-top:24px; 
    margin-bottom:24px;
    /* padding-top:10px;       padding-left:10px; */
    display:flex;
    height:65px;
    border:1px solid;
    font-weight: bold;
  /* font-family: 'Roboto', sans-serif; */
  /* font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; */
  

    
}
.mtext{
padding-top:10px;
padding-right:16px;
/* border-right:1px solid; */
font-size:27px;
height:27px;
}
.iconsrhs{
     display: flex;
  float: right;
  margin-right: 15px;

}
.cols{
    border:1px solid;
    padding-left:16px;
    padding-right:16px;
    padding-top:10px;
    padding-bottom:10px;
}
.trend{
    padding-top:40px;
}
.firstarea{
    padding-bottom: 40px;
}
.lastarea{
    padding-top:56px;
}
.imgincol{
    display:flex;
    float:right;
    padding-top:10px;
    padding-bottom:20px;
}
</style>
