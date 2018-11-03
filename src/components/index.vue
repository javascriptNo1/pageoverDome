<template>
 <div class="contentbox">
   <div class="toptitle">安装位置</div>
   <div class="content">
     <div class="address">安装到：荃湾</div>
     <ul>
       <router-link tag="li" to="/commodity">
         <img src="../assets/images/index.png"/>
         <p><span>荃湾</span><span>263家餐厅</span></p>
       </router-link>
       <router-link tag="li" to="/commodity">
         <img src="../assets/images/index.png"/>
         <p><span>荃湾</span><span>263家餐厅</span></p>
       </router-link>
         <router-link tag="li" to="/commodity">
         <img src="../assets/images/index.png"/>
         <p><span>荃湾</span><span>263家餐厅</span></p>
       </router-link>
       <router-link tag="li" to="/commodity">
         <img src="../assets/images/index.png"/>
         <p><span>荃湾</span><span>263家餐厅</span></p>
       </router-link>
     </ul>
   </div>
 </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import "../assets/less/base";
  .contentbox{
    text-align: center;
    .toptitle{
      background-color: @maincolor;
      height: 52px;
      font-size: 16px;
      line-height: 52px;
      color: #fff;
      box-shadow: 0px 2px 5px 2px #e8e8e8;
    }
    .content{
      /*width: 312px;*/
      width: 96%;
      margin: 0 auto;
      .address{
        height: 40px;
        line-height: 40px;
        font-size: 12px;
      }
      ul{
        li{
          height: 145px;
          position: relative;
          margin-top: 4px;
          img{
            width: 100%;
            height: 100%;
          }
          >p{
            position: absolute;
            margin: auto;
            height: 38px;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 80%;
            background-color: rgba(0,0,0,0.8);
            border-radius: 20px;
            color: #fff;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
        }
      }
    }
  }
</style>
