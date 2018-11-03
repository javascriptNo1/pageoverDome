<template>
  <div class="contentbox">
    <div class="alter">
      <p>这里是功夫点心</p>
      <p>请点餐提前30分钟，避开忙时，11点到1点忙时会延迟30分钟</p>
      <p>请点餐提前30分钟，避开忙时，11点到1点忙时会延迟30分钟</p>
    </div>
    <ul class="commodity">
      <router-link tag="li" to="/shop">
        <img src="../assets/images/Bitmap Copy 11@3xCPTP.png"/>
        <p>烧鸡</p>
        <p>HD$ 43.00</p>
      </router-link>
      <router-link tag="li" to="/shop">
        <img src="../assets/images/Bitmap Copy 11@3xCPTP.png"/>
        <p>烧鸡</p>
        <p>HD$ 43.00</p>
      </router-link>
    </ul>
  </div>
</template>

<script>
  import Table from '../assembly/Table/Table'
  import Input from '../assembly/Input/Input'

  export default {
    name: "Bommodity",
    data(){
      return{
        searchvalue:'',
        state:false
      }
    },
    components:{
      Table,
      Input
    },
    mounted(){

    },
    methods:{
      showsearchbox(){
        if (this.state){
          this.state = false
        }
        else {
          this.state = true
        }
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../assets/less/base";
  .contentbox{
    .toptitle{
      background-color: @maincolor;
      height: 52px;
      line-height: 52px;
      color: #fff;
      padding: 0 0.2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      >span{
        font-size: 40px;
      }
      >div{
        width: 80%;
        transition: all 1s;
        margin-left: -100px;
      }
      >i{
        font-size: 30px;
      }
      /*.el-input{*/
      /*font-size: 24px;*/
      /*}*/
      /*.el-input__prefix{*/
      /*color: #fff;*/
      /*}*/
      /*.el-input--prefix .el-input__inner{*/
      /*display: none;*/
      /*}*/

    }
    ul.tab{
      color: @tabfontcolor;
      display: flex;
      justify-content: space-around;
      font-size: 16px;
      box-shadow: 0px 2px 5px 2px #e8e8e8;
      li{
        height: 35px;
        line-height: 35px;
      }
      li.active{
        border-bottom: 2px solid #000;
        color: #000;
      }
    }
    .alter{
      height: 50px;
      color: #666;
      background-color: @baccolor;
      font-size: 12px;
      padding: 0.2rem 0.2rem;
      margin-top: 0.1rem;
      box-shadow: 0px 2px 5px 2px #e8e8e8;
      p{
        margin-top: 0.1rem;
      }
    }
    ul.commodity{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      width: 96%;
      margin: 0.2rem auto;
      li{
        width: 42%;
        /*height: 90px;*/
        margin-top: 8px;
        padding: 0.2rem;
        box-shadow: 0px 2px 5px 2px #e8e8e8;
        img{
          width: 100%;
        }
        p{
          margin-top: 0.1rem;
          font-size: 16px;
        }
      }
    }
  }
</style>
