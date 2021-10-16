<template>
  <div class="head-container">
    <div class="van-doc-card">
      <h2 id="title" tabindex="-1">{{ title }}</h2>
      <p class="description">{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Head',
  props: {
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="less" scoped>
.van-doc-card {
  margin: 24px 16px 0 16px;
  padding: 8px 24px 24px 24px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 8px 12px #ebedf0;
  #title {
    text-align: center;
    font-size: 26px;
  }
  .description {
    text-align: center;
  }
}
</style>
