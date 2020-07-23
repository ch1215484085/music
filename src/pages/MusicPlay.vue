<template>
  <div class="play">
      <div class="header">
          <div class="title">
              <router-link to="/">
                  <img src="../assets/font/shouye.svg" class="iconfont icon left"/>
              </router-link>
              <div class="music_info">
                  <p>{{musicinfo.songinfo.title}}</p>
                  <p>{{musicinfo.songinfo.author}}</p>
              </div>
              <img src="../assets/font/search.svg" class="iconfont icon right"/>
          </div>
      </div>
      <div class="song_info">
          <div class="song_info_img">
              <img :src="musicinfo.songinfo.pic_big"/>
              <div class="song_lrc">
                  <Lrc :currentTime = "currentTime" :durationTime ="durationTime" :songId = "$route.params.songId"/>
              </div>
          </div>
        <div class="iconbox">
            <img src="../assets/font/like.svg" class="iconfont icon left"/>
            <i class="box"></i>
            <img src="../assets/font/download.svg" class="iconfont icon right"/>
        </div>
      </div>
      <div class="song">
        <audio ref="player" :src="musicinfo.bitrate.file_link" controls>
        </audio>
      </div>
  </div>
</template>
<script>
import Lrc from '../components/Lrc'
export default {
  name: 'MusicPlay',
  data () {
    return {
      musicinfo: {
        songinfo: {

        },
        bitrate: {
          file_link: ''
        }
      },
      currentTime: null,
      durationTime: null
    }
  },
  components: {
    Lrc
  },
  created () {
    const playUrl = this.HOST + '/v1/restserver/ting?method=baidu.ting.song.play&songid=' + this.$route.params.songId
    this.$axios.get(playUrl).then(res => {
      this.musicinfo = res.data
    }).catch(error => {
      console.log(error)
    })
  },
  methods: {
    addEventListeners: function () {
      const self = this
      self.$refs.player.addEventListener('timeupdate', self._currentTime)
      self.$refs.player.addEventListener('canplay', self._durationTime)
    },
    removeEventListeners: function () {
      const self = this
      self.$refs.player.removeEventListener('timeupdate', self._currentTime)
      self.$refs.player.removeEventListener('canplay', self._durationTime)
    },
    _currentTime () {
      const self = this
      this.currentTime = self.$refs.player.currentTime // 当前播放时间
    },
    _durationTime () {
      const self = this
      this.durationTime = self.$refs.player.duration // 总体播放时间
    }
  },
  mounted () {
    this.addEventListeners()
  },
  beforeDestroy () {
    this.removeEventListeners()
  }
}
</script>
<style scoped>
.play {
    width: 400px;
    height: 500px;
    background-color: rgba(50, 50, 50, 31);
}
.header {
    padding: 15px;
}
.music_info {
    flex: 1;
    font-size: 20px;
}
.title {
    display: flex;
    text-align: center;
}
.left {
    font-size: 30px;
    margin-left: 10px;
}
.right {
    font-size: 30px;
    margin-right: 10px;
}
.song_info {
    padding: 15px;
}
.song_info_img {
    text-align: center;
}
.song_info_img img {
    width: 50%;
    border-radius: 5px;
    box-shadow: 0,0,10px,0 rgba(50, 50, 50, 31);
}
.icon {
    width: 25px;
    height: 25px;
}
.song_lrc {
    margin-top: 10px;
    min-height: 50px;
}
.iconbox {
    display: flex;
    margin-top: 30px;
}
.iconbox .box {
    flex: 1;
}
.song {
    width: 100%;
    text-align: center;
}
.song audio {
    width: 80%;
}
.iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    }
</style>
