<template>
  <div class="index-container">
    <Head :title="title" :description="description"></Head>
    <Body :subTitle="subTitle"></Body>
  </div>
</template>

<script>
import Head from '@/components/home/Head.vue'
import Body from '@/components/home/Body.vue'
export default {
  name: 'Home',
  data() {
    return {
      title: '抖音短视频&图集解析',
      description: '在线解析下载抖音水印视频&图集',
      subTitle: '抖音分享链接'
    }
  },
  components: {
    Head,
    Body
  }
}
</script>

<style lang="less" scoped></style>
