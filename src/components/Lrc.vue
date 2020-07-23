<template>
  <div class="lrc">
     <p >{{lrcData.title}}</p>{{currentTime}}
     <p :key="index" class="lrc-p" :class="{'active': key < currentTime && key > currentTime - (keyArr[index+1]- keyArr[index])}" v-for="(item, key, index) in lrcData.lrcContent"> {{item}}</p>
  </div>
</template>
<script>
export default {
  name: 'Lrc',
  data () {
    return {
      lrcData: {
        title: '',
        lrcContent: {

        }
      },
      keyArr: []
    }
  },
  props: {
    currentTime: {
      type: Number,
      default: 0
    },
    durationTime: {
      type: Number,
      default: 0
    },
    songId: {
      type: String,
      default: '0'
    }
  },
  created () {
    const lrcUrl = this.HOST + '/v1/restserver/ting?method=baidu.ting.song.lry&songid=' + this.songId
    this.$axios.get(lrcUrl).then(res => {
      this.lrcData = res.data
      this.getLrcData(this.lrcData.lrcContent)
      this.keyArr = Object.keys(this.lrcData.lrcContent)
      console.log(this.keyArr[0])
    }).catch(error => {
      console.log(error)
    })
  },
  methods: {
    getLrcData (lrcContent) {
      let lrcArr = lrcContent.split('\n')
      let lrc = ''
      let lrcobj = {}
      let timeReg = /\[\d*:\d*((\.|:)\d*)*\]/g
      for (let i = 0; i < lrcArr.length; i++) {
        lrc = decodeURIComponent(lrcArr[i])
        let timeRegExpArr = lrc.match(timeReg)
        if (!timeRegExpArr) continue
        let clause = lrc.replace(timeReg, '')
        for (let j = 0, h = timeRegExpArr.length; j < h; j++) {
          let t = timeRegExpArr[j]
          let min = Number(String(t.match(/\[\d*/i)[0].slice(1)))
          let sec = Number(String(t.match(/:\d*/i)[0].slice(1)))
          let time = min * 60 + sec
          lrcobj[time] = clause
        }
      }
      this.lrcData.lrcContent = lrcobj
    }
  }
}
</script>
<style scoped>
    .lrc{
        width: 80%;
        height: 150px;
        overflow: scroll;
        min-height: 30px;
    }
    .lrc-p{
        line-height: 30px;
    }
    .active{
        color: #0f0;
    }
</style>
