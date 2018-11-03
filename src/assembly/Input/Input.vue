<template>
    <div>
      <input :type="types" :placeholder="tips">
    </div>
</template>

<script>
    export default {
        name: "Input",
        props:{
          types:{
            type:String,
            default:'text'
          },
          tips:{
            type:String,
            default:'默认提示'
          }
        }
    }
</script>

<style scoped lang="less">
  div{
    input{
      border: 1px solid #000;
    }
  }
</style>
