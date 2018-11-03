import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/css/reset.css'
import './assets/css/border.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Vuex from 'vuex'

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    viewDirection: ''
  },
  mutations: {
  }
})

router.beforeEach((to, from, next) => {
  const list = [
    'index',
    '/',
    'bommodity',
    'shop',
    'shoppingcart'
  ]    // 将需要切换效果的路由名称组成一个数组
  const toName = to.name    // 即将进入的路由名字
  const fromName = from.name    // 即将离开的路由名字
  const toIndex = list.indexOf(toName)    // 进入下标
  const fromIndex = list.indexOf(fromName)   // 离开下标
  let direction = ''
  if (toIndex > -1 && fromIndex > -1) {   // 如果下标都存在
    if (toIndex < fromIndex) {          // 如果进入的下标小于离开的下标，那么是左滑
      direction = 'left'
    } else {
      direction = 'right'         // 如果进入的下标大于离开的下标，那么是右滑
    }
  }

  store.state.viewDirection = direction  //这里使用vuex进行赋值
  return next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store:store,
  render: h => h(App)
})
