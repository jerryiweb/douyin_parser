var express = require('express');
var router = express.Router();
var axios = require('axios');

router.post('/douyin', async function (req, res, next) {
  const errMsgs = [{
    id: 0,
    msg: '输入错误，未检测到正确的 URL'
  },{
    id: 1,
    msg: '未捕获到 item_ids 值，请联系管理员'
  },{
    id: 2,
    msg: '抖音接口错误，获取数据失败'
  }];
  const params = req.body.params;
  const api = "https://www.iesdouyin.com/web/api/v2/aweme/iteminfo/?item_ids=";
  const pattern_item_ids = /\/(\d{19})\/\?/;
  const pattern_url = /http[s]:\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?/;
  var item_ids = 0;
  var images_num = 0;
  var image = {
    id: 0,
    url: ''
  }
  var videoInfo = {
    type: 'video',
    url: ''
  }
  var images = {
    type: 'images',
    data: []
  }
  var videoWMLink = '';
  var videoLink = '';
  if (pattern_url.test(params.url) == false) {
    res.send(errMsgs[0]);
    return;
  } else {
    const { request: resFirst } = await axios.get(params.url);
    try {
      item_ids = pattern_item_ids.exec(resFirst.path)[1];
    } catch (e) {
      errMsgs[1].error_msg = e;
      res.send(errMsgs[1]);
      return;
    }
    const apiUrl = api + item_ids;
    const { data: resSecond } = await axios.get(apiUrl);

    // 在这里需要判断 图集 or 视频 了

    if (resSecond.status_code == 0) {
      if (resSecond.item_list[0].images) {
        images_num = resSecond.item_list[0].images.length;
        for (var i = 0;i<images_num;i++) {
          image = {
            id: i,
            url: resSecond.item_list[0].images[i].url_list[0]
          }
          images.data[i] = image;
        }
        res.send(images);
      } else if (resSecond.item_list[0].video) {
        videoWMLink = resSecond.item_list[0].video.play_addr.url_list[0];
        videoLink = videoWMLink.slice(0,38) + videoWMLink.slice(40);
        videoInfo.url = videoLink;
        res.send(videoInfo);
      }
    } else {
      res.send(errMsgs[2]);
      return;
    }
  }
})

module.exports = router;