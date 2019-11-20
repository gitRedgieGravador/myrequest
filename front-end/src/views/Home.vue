<template>
  <div>
    <center>
      <h1>home</h1>
    </center>
    
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
    //HelloWorld
  },
  mounted(){
    this.$router.push({name: 'login'})
  }
}
</script>