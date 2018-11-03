<template>
  <div id="app" style="position: relative">
    <transition :name="direction"> <!--动态获得transition 的name值-->
      <router-view style="position: absolute;left: 0;top: 0"/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App',
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

<style>
#app {
  font-family: 'PingFangSC-Regular', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
