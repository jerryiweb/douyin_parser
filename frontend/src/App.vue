<template>
  <div class="app-container">
    <keep-alive>
      <router-view />
    </keep-alive>
    <van-tabbar route>
      <van-tabbar-item replace to="/home" icon="home-o">Home</van-tabbar-item>
      <van-tabbar-item replace to="/my" icon="user-o">My</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {}
  },
  methods: {}
}
</script>

<style lang="less" scoped></style>
