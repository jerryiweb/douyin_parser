<template>
  <div class="body-container">
    <div class="van-doc-card">
      <h3 id="subTitle" tabindex="-1">{{ subTitle }}</h3>
      <van-form>
        <van-cell-group inset>
          <van-field
            v-model="shareText"
            name="shareText"
            label="分享地址"
            placeholder="请输入抖音分享文本"
            :rules="[{ required: true }]"
          />
        </van-cell-group>
        <div style="margin: 16px;">
          <van-button
            round
            block
            type="primary"
            native-type="submit"
            @click="go"
          >
            解析无水印
          </van-button>
        </div>
        <div style="margin: 16px;">
          <van-button
            round
            block
            type="warning"
            native-type="submit"
            @click="reset"
          >
            重置输入框
          </van-button>
        </div>
      </van-form>
    </div>
    <Foot :type="type" :videoUrl="videoUrl" :images="images"></Foot>
  </div>
</template>

<script>
import Foot from '@/components/home/Foot.vue'
import { parser } from '@/api/douyin_parser.js'

export default {
  name: 'Body',
  data() {
    return {
      shareText: '',
      errMsgs: [
        {
          id: 0,
          errMsg: '输入错误，不符合规范'
        }
      ],
      errID: 0,
      type: '',
      images: [],
      videoUrl: ''
    }
  },
  props: {
    subTitle: {
      type: String,
      default: ''
    }
  },
  computed: {
    shareLink() {
      let pattern = /http[s]:\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?/
      if (pattern.test(this.shareText) == true) {
        return pattern.exec(this.shareText)[0]
      } else {
        this.errID = 0
      }
    }
  },
  methods: {
    async go() {
      const { data: res } = await parser(this.shareLink)
      if (res.type == 'video') {
        this.type = 'video'
        this.videoUrl = res.url
      } else if (res.type == 'images') {
        this.type = 'images'
        this.images = res.data
      } else {
        return
      }
    },
    reset() {
      this.shareText = ''
      this.type = ''
      this.videoUrl = ''
    }
  },
  components: {
    Foot
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
  #subTitle {
    text-align: center;
    font-size: 20px;
  }
}
</style>
