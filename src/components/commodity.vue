<template>
    <div class="contentbox">
      <div class="toptitle">
        <router-link tag="span" to="/">&lt;</router-link>
        <i  v-show="!state" @click="showsearchbox" class="el-icon-search"></i>
        <div v-show="state">
          <el-input placeholder="请输入内容" v-model="searchvalue" class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
            <el-button @click="showsearchbox" slot="append" icon="el-icon-close"></el-button>
          </el-input>
        </div>
      </div>
      <ul class="tab">
        <router-link  class="active" tag="li" to="/commodity">
          煲仔饭
        </router-link>
        <router-link tag="li" to="/commodity/bommodity">
          功夫点心
        </router-link>
        <router-link tag="li" to="/shop">
          蒸点
        </router-link>
        <router-link  tag="li" to="/shop">
          特色小食
        </router-link>
        <router-link  tag="li" to="/shop">
          卜卜脆
        </router-link>
      </ul>

      <transition :name="direction"> <!--动态获得transition 的name值-->
        <router-view style="position: absolute;left: 0;top: 2rem"/>
      </transition>

    </div>
</template>

<script>
    export default {
        name: "commodity",
        data(){
          return{
            searchvalue:'',
            state:false
          }
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
        },
      computed: {
        direction () {
          const viewDir = this.$store.state.viewDirection
          let tranName = ''
          if (viewDir === 'left') {
            tranName = 'right'
          } else if (viewDir === 'right') {
            tranName = 'left'
          } else {
            tranName = 'fade'
          }
          return tranName
        },
      },
    }
</script>

<style scoped lang="less">
  @import "../assets/less/base";
  .contentbox{
    /*position: relative;*/
    width: 100%;
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
      li.router-link-exact-active{
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
  }
  .v-enter{opacity: 1;}
  .v-enter-to{opacity: 1;}
  .v-enter-active{transition: 1s;} /*定义过渡时间*/
  .v-leave{opacity: 1;}
  .v-leave-to{opacity: 1;}
  .v-leave-active{transition: 1s;}

  .left-enter{transform: translateX(100%)}/*100%代表在屏幕外*/
  .left-enter-to{transform: translateX(0)}
  .left-enter-active{transition:0.5s}
  .left-leave{transform: translateX(0)}
  .left-leave-to{transform: translateX(-100%)}
  .left-leave-active{transition:0.5s}

  .right-enter{transform: translateX(-100%)}/*-100%代表在屏幕外,屏幕的左边*/
  .right-enter-to{transform: translateX(0)}
  .right-leave{transform: translateX(0)}
  .right-leave-to{transform: translateX(100%)}/*屏幕的右边*/
  .right-enter-active{transition:0.5s}
  .right-leave-active{transition:0.5s}
</style>
