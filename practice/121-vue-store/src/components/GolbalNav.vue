<template>
  <div class="nav">
    <div class="container">
      <el-row>
        <el-col :span="12">
          <a class="anchor" href="#">item</a>
          <a class="anchor" href="#">item</a>
          <a class="anchor" href="#">item</a>
        </el-col>
        <el-col class="text-right" :span="12">
          <a class="anchor" href="#">item</a>
          <a class="anchor" href="#">item</a>
          <a class="anchor" href="#">item</a>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GolbalNav',
  components: {
  }
}
</script>

<style scoped>
  .nav {
    background: rgba(0, 0, 0, .1);
    margin-bottom: 1em;
  }
</style>