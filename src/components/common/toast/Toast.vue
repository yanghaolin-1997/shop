<template>
  <div class="toast">
    <div>{{}}</div>
  </div>
</template>

<script>
export default {
  name:"Toast",
  props:{
    message:{
      type:String,
      default:''
    }
  }
}
</script>

<style>

</style>