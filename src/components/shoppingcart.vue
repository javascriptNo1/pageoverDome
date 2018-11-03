<template>
  <div class="contentbox">
    <div class="toptitle">
      <span class="return"> <router-link tag="span" to="/shop">&lt;</router-link></span>
      我的购物车-大师兄
    </div>
    <div class="messagebox">后台给到提示语言 分时段拿不同语音</div>
    <div class="lsitbox">
      <ul>
        <li>
          <p>水煮鱼</p>
          <p>
            <span>x4</span>
            <span>HK$66.44</span>
          </p>
        </li>
        <li>
          <p>水煮鱼</p>
          <p>
            <span>x4</span>
            <span>HK$66.44</span>
          </p>
        </li>
        <li>
          <p>水煮鱼</p>
          <p>
            <span>x4</span>
            <span>HK$66.44</span>
          </p>
        </li>
      </ul>
    </div>
    <div class="costbox">
      <ul>
        <li>
          <span>小计</span>
          <span>HD$343.8</span>
        </li>
        <li>
          <span>送餐费</span>
          <span>HD$343.8</span>
        </li>
        <li class="gray">
          <span>超时时段</span>
          <span>HD$343.8</span>
        </li>
        <li class="gray">
          <span>远距离送餐</span>
          <span>HD$343.8</span>
        </li>
      </ul>
    </div>
    <div class="totalbox">
      <span>总计</span>
      <span class="num">HD$343.8</span>
    </div>
    <div class="remarksbox">
      <textarea placeholder="备注："></textarea>
    </div>
    <div class="modebox">
      <ul>
        <li>
          <span class="garden">✔</span>
          <span>预约</span>
        </li>
        <li>
          <span class="garden">✔</span>
          <span>自取</span>
        </li>
        <li class="active">
          <span class="garden">✔</span>
          <span>外卖</span>
        </li>
        <li>
          <span class="garden">✔</span>
          <span>堂吃</span>
        </li>
      </ul>
    </div>
    <div class="usermeassagebox">
      <ul>
        <li>
          <span>简称</span>
          <span>刘超</span>
        </li>
        <li>
          <span>不上楼</span>
          <el-switch
            v-model="value2"
            active-color="#a6a6a6"
            inactive-color="#ff4949">
          </el-switch>
        </li>
        <li>
          <span>不快送</span>
          <el-switch
            v-model="value1"
            active-color="#a6a6a6"
            inactive-color="#ff4949">
          </el-switch>
        </li>
      </ul>
    </div>
    <div class="usermeassagebox usermeassagebox2">
      <ul>
        <li>
          <span>聯繫電話</span>
          <span>18898781335<span class="red">&gt;</span></span>
        </li>
        <li>
          <span>選擇日期</span>
          <span>04月15日13:05:20<span class="red">&gt;</span></span>
        </li>
        <li>
          <span>付款方式</span>
          <span>現金支付<span class="red">&gt;</span></span>
        </li>
      </ul>
    </div>
    <div class="footerbox">
      请注意食物由（大师兄）售出
    </div>
    <div class="hrbox"></div>
    <router-link to="/shoppingcart">
      <div class="butbox">
        确定订购
      </div>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: "shop",
    data() {
      return {
        value1: true,
        value2: true
      }
    }
  }
</script>

<style scoped lang="less">
  @import "../assets/less/base";

  .contentbox{
    background-color: #f2f2f2;
    width: 100%;
    .toptitle{
      background-color: @maincolor;
      height: 52px;
      font-size: 16px;
      line-height: 52px;
      color: #fff;
      box-shadow: 0px 2px 5px 2px #e8e8e8;
      text-align: center;
      position: relative;
      .return{
        font-size: 40px;
        position: absolute;
        left: 0.2rem;
      }
    }
    .messagebox{
      padding: 0.4rem 0.2rem;
      background: #fffbf1;
      border: 1px solid #dedbdb;
    }
    .lsitbox{
      ul{
        background: #fff;
        li{
          padding: 0.2rem;
          display: flex;
          justify-content: space-between;
          border-bottom: 1px solid #e8e8e8;
          p{
            display: flex;
            justify-content: space-between;
            width: 40%;
          }
        }
      }
    }
    .costbox{
      padding: 0.2rem;
      background-color: #fff;
      ul{
        li{
          display: flex;
          justify-content: space-between;
          font-size: 16px;
          margin-top: 0.2rem;
        }
        .red{
          color: red;
        }
        .gray{
          color: #a6a6a6;
        }
      }
    }
    .totalbox{
      margin: 2px 0;
      padding: 0.2rem;
      background-color: #fff;
      display: flex;
      justify-content: space-between;
      font-size: 16px;
      .num{
        color: @maincolor;
        font-size: 18px;
      }
    }
    .remarksbox{
      textarea{
        height: 50px;
        width: 100%;
        resize: none;
        font-size: 16px;
        /*padding-left: 0.2rem;*/
        text-indent: 0.2rem;
      }
    }
    .modebox{
      padding: 0.2rem;
      background-color: #f2f2f2;
      font-size: 16px;
      border-bottom: 1px solid #979797;
      border-top: 1px solid #979797;
      ul{
        display: flex;
        justify-content: space-between;
        li{
          .garden{
            display: inline-block;
            border-radius: 50%;
            border: 1px solid #979797;
            width: 20px;
            height: 20px;
            text-align: center;
            line-height: 20px;
            background: #fff;
            color: #fff;
          }
        }
        .active{
          .garden{
            background: @maincolor;
          }
        }
      }
    }
    .usermeassagebox{
      ul{
        padding-top: 0.2rem;
        background-color: #fff;
        li{
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid #e8e8e8;
          padding: 0.2rem;
          span{
            display: flex;
            justify-content: space-between;
            align-items: center;
            span{
              font-size: 26px;
              margin-left: 0.1rem;
            }
          }
        }
      }
    }
    .usermeassagebox2{
      background: #fff;
      padding-top: 0.5rem;
    }
    .footerbox{
      padding: 0.3rem 0.2rem;
      background-color: #f7f7f7;
      font-size: 18px;
      color: #a6a6a6;
    }
    .hrbox{
      background: #fff;
      height: 0.4rem;
    }
    .butbox{
      background: @maincolor;
      color: #fff;
      padding: 0.3rem 0.2rem;
      font-size: 18px;
      text-align: center;
      span{
        width: 100%;
        height: 100%;
        display: block;
      }
    }
  }
</style>
