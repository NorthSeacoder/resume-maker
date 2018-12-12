<template>
  <img :src="imgsrc" />
</template>
<script>
export default {
  name: 'ReportImg',
  props: {
    src: {
      type: String,
      default() {
        return '';
      }
    }
  },
  data() {
    return {};
  },
  computed: {
    // 计算属性的 getter
    imgsrc() {
      let imgsrc = this.pre(); //this.src;
      const str1 = /http:\/\/(img(\d+)n|img|imgdn|img2|video2n|flvn).soufunimg.com\//;
      const str2 = /http:\/\/(img(\d+)|imgs|imgd|img2s|video2s|cdnsfb|flvs).soufunimg.com\//;
      if (str1.test(imgsrc)) {
        const rpStr = imgsrc.match(str1);
        imgsrc = imgsrc.replace(
          str1,
          `https://cdnn.soufunimg.com/${rpStr[1]}/`
        );
      } else if (str2.test(imgsrc)) {
        const rpStr = imgsrc.match(str2);
        imgsrc = imgsrc.replace(
          str2,
          `https://cdns.soufunimg.com/${rpStr[1]}/`
        );
      }
      //src=src
      return imgsrc;
    }
  },
  mounted() {},
  methods: {
    pre() {
      let imgsrc = this.src;
      const regArr = [
        /(img-(\d+)|img|imgu|imgnew|imgn(\d+)).(fang|soufun|soufunimg|jiatx).com/,
        /(imgs(\d*)|imgsu|imgsnew).(fang|soufun|soufunimg|jiatx).com/,
        /(img1|imghome(\d+)|img(\d+)u(\d*)|img(\d+)-(\d+)).(fang|soufun|soufunimg|jiatx).com/,
        /(img1n|img(\d+)n-(\d+)|imgworld).(fang|soufun|soufunimg|jiatx).com/,
        /(imgd(\d*)|imgdu).(fang|soufun|soufunimg|jiatx).com/,
        /(imgdn(\d*)|imgdnu).(fang|soufun|soufunimg|jiatx).com/,
        /img2.(fang|soufun|soufunimg|jiatx).com/,
        /img2s.(fang|soufun|soufunimg|jiatx).com/,
        /(flv|flvs).(fang|soufun|soufunimg|jiatx).com/,
        /flvn.(fang|soufun|soufunimg|jiatx).com/,
        /video2n.(fang|soufunimg|soufun).com/,
        /video2s.(fang|soufunimg|soufun).com/
      ];
      const rpArr = [
        'img.soufunimg.com',
        'imgs.soufunimg.com',
        'img1.soufunimg.com',
        'img1n.soufunimg.com',
        'imgd.soufunimg.com',
        'imgdn.soufunimg.com',
        'img2.soufunimg.com',
        'img2s.soufunimg.com',
        'flvs.soufunimg.com',
        'flvn.soufunimg.com',
        'video2n.soufunimg.com',
        'video2s.soufunimg.com'
      ];
      for (let i = 0; i < regArr.length; i += 1) {
        const ele = regArr[i];
        if (ele.test(imgsrc)) {
          imgsrc = imgsrc.replace(ele, rpArr[i]);
          break;
        }
      }
      return imgsrc;
    }
  }
};
</script>
<style>
</style>