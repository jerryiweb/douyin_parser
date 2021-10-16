<template>
  <div class="foot-container">
    <div class="van-doc-card" v-if="type == 'video'">
      <video
        controls="controls"
        autoplay="autoplay"
        name="media"
        :src="videoUrl"
        style="width: 100%; margin-top: 14px"
      ></video>
      <div style="margin: 16px">
        <van-button
          round
          block
          type="primary"
          native-type="submit"
          @click="downloadVideo"
        >
          下载
        </van-button>
      </div>
    </div>
    <div class="van-doc-card" v-if="type == 'images'">
      <van-swipe :autoplay="3000" lazy-render ref="mySwiper">
        <van-swipe-item v-for="item in images" :key="item.id">
          <img :src="item.url" width="100%" height="500px" />
        </van-swipe-item>
      </van-swipe>
      <div style="margin: 16px;">
        <van-button
          round
          block
          type="primary"
          native-type="submit"
          @click="downloadImage"
        >
          下载正在展示的图片
        </van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Foot',
  data() {
    return {}
  },
  props: {
    type: {
      type: String,
      default: ''
    },
    videoUrl: {
      type: String,
      default: ''
    },
    images: {
      type: Array,
      default: function() {
        return []
      }
    }
  },
  methods: {
    downloadVideo() {
      let down = document.createElement('a')
      down.href = this.videoUrl
      down.download = 'video' + new Date().getTime() + '.mp4'
      down.click()
    },
    downloadImage() {
      let down = document.createElement('a')
      down.href = this.images[this.$refs.mySwiper.active].url
      down.download = 'image' + new Date().getTime() + '.webp'
      down.click()
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
}
.van-swipe {
  border-radius: 30px;
}
</style>
