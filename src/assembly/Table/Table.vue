<template>
    <div>
      <span></span>
      <p>{{title}}</p>
      <span></span>
    </div>
</template>

<script>
    export default {
        name: "Table",
        data(){
          return{
            propse: '默认标题',
          }
        },
        mounted(){
        },
        props:{
          title:{
            type:String,
            default:'默认标题'
          },
          tag:{
            type:String,
            default:'div'
          }
        }
    }
</script>

<style scoped lang="less">
  div{
    display: flex;
    justify-content: center;
    align-items: center;
    span{
      display: inline-block;
      width: 30%;
      height: 2px;
      background: #000;
    }
    p{
      margin: 0 0.2rem;
    }
  }
</style>
