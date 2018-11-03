<template>
    <div class="contentbox">
      <div class="toptitle">
        <span class="return">
          <router-link tag="span" to="/commodity">&lt;</router-link>
        </span>
        安装位置
      </div>
      <div class="topimgbox">
        <img src="../assets/images/TP@x1Bitmap Copy 24.png" alt="">
      </div>
      <div class="numberbox">
          <div class="title">大提昂鱼卡上档</div>
          <div class="clearfloat number">
            <p class="lf">
              <span class="reduce">-</span>
              <span class="num">4</span>
              <span class="add">+</span>
            </p>
            <p class="rg">HKD24.00</p>
          </div>
      </div>
      <div class="computedbox">
        长:<el-input size="mini" type="number" v-model="input1"></el-input>
        宽:<el-input size="mini" type="number" v-model="input2"></el-input>
        结果: <p></p>
      </div>
      <div class="meassagebox">
        商品详情：Type something Type something Type something Type something Type something
      </div>
      <div class="garnishbox">
        <h1>配件</h1>
        <ul class="clearfloat">
          <li>
            <img src="../assets/images/Bitmap Copy 13@3xTU2.png"/>
            <p>烧鸡</p>
            <p>HD$ 43.00</p>
            <p>长:<el-input type="number" size="mini"></el-input></p>
            <p>宽:<el-input type="number" size="mini"></el-input></p>
            <p>结果: <span></span></p>
          </li>
          <li>
            <img src="../assets/images/Bitmap Copy 13@3xTU2.png"/>
            <p>烧鸡</p>
            <p>HD$ 43.00</p>
            <p>长:<el-input type="number" size="mini"></el-input></p>
            <p>宽:<el-input type="number" size="mini"></el-input></p>
            <p>结果: <span></span></p>
          </li>
          <li>
            <img src="../assets/images/Bitmap Copy 13@3xTU2.png"/>
            <p>烧鸡</p>
            <p>HD$ 43.00</p>
            <p>长:<el-input type="number" size="mini"></el-input></p>
            <p>宽:<el-input type="number" size="mini"></el-input></p>
            <p>结果: <span></span></p>
          </li>
          <li>
            <img src="../assets/images/Bitmap Copy 13@3xTU2.png"/>
            <p>烧鸡</p>
            <p>HD$ 43.00</p>
            <p>长:<el-input type="number" size="mini"></el-input></p>
            <p>宽:<el-input type="number" size="mini"></el-input></p>
            <p>结果: <span></span></p>
          </li>
          <li>
            <img src="../assets/images/Bitmap Copy 13@3xTU2.png"/>
            <p>烧鸡</p>
            <p>HD$ 43.00</p>
            <p>长:<el-input type="number" size="mini"></el-input></p>
            <p>宽:<el-input type="number" size="mini"></el-input></p>
            <p>结果: <span></span></p>
          </li>
          <li>
            <img src="../assets/images/Bitmap Copy 13@3xTU2.png"/>
            <p>烧鸡</p>
            <p>HD$ 43.00</p>
            <p>长:<el-input type="number" size="mini"></el-input></p>
            <p>宽:<el-input type="number" size="mini"></el-input></p>
            <p>结果: <span></span></p>
          </li>
        </ul>
      </div>
      <div class="totalbox">
        <span>总计</span>
        <span>HD$343.8</span>
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
            <span>簡稱</span>
            <span>刘超<span class="red">&gt;</span></span>
          </li>
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
          <li>
            <textarea placeholder="備註："></textarea>
          </li>
        </ul>
      </div>
      <div class="footerbox">
        请注意食物由（大师兄）售出
      </div>
      <div class="hrbox"></div>
      <router-link  class="butbox" to="/shoppingcart" tag="div">现在订购</router-link>
    </div>
</template>

<script>
    export default {
        name: "shop",
        data(){
          return{
            input1:'',
            input2:'',
            input3:'',
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
    .topimgbox{
      img{
        width: 100%;
      }
    }
    .numberbox{
      background-color: #fff;
      font-size: 16px;
      padding: 0.2rem;
      .title{
        margin-bottom: 0.2rem;
      }
      .number{
        .lf{
          .reduce,.add{
            display: inline-block;
            border-radius: 50%;
            border: 1px solid #000;
            width: 20px;
            height: 20px;
            text-align: center;
            line-height: 20px;
          }
          .num{
            margin: 0 0.2rem;
          }
        }
        .rg{
          color: #666;
        }
      }
    }
    .computedbox{
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: #fff;
      margin-top: 0.2rem;
      padding: 0.2rem;
      .el-input{
        width: 20%;
      }
      p{
        width: 20%;
        height: 28px;
      }
    }
    .meassagebox{
      margin-top: 0.2rem;
      background-color: #fff;
      padding: 0.2rem;
    }
    .garnishbox{
      background-color: #fff;
      margin-top: 0.2rem;
      padding: 0 0.1rem;
      h1{
        font-size: 16px;
        padding: 0.2rem;
      }
      ul{
        width: 100%;
        overflow-x: scroll;
        overflow-y: hidden;
        white-space: nowrap;
        li{
          width:30%;
          display: inline-block;
          margin: 0 0.1rem;
          img{
            width: 100%;
          }
          p{
            display: flex;
            justify-content: space-between;
            margin-bottom: 0.2rem;
            align-items: center;
            div{
              width: 60%;
              margin-left: 0.2rem;
            }
            span{
              width: 60%;
              height: 28px;
              display: inline-block;
            }
          }
        }
      }
    }
    .costbox{
      padding: 0.2rem;
      margin-top: 0.2rem;
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
      margin-top: 0.2rem;
      padding: 0.5rem 0.2rem 0.2rem;
      background-color: #fff;
      display: flex;
      justify-content: space-between;
      font-size: 16px;
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
          textarea{
            height: 80px;
            width: 100%;
            resize: none;
          }
        }
      }
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
    }
  }
</style>
