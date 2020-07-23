<template>
  <div class="musiclist">
    <div class="panel hotsongs on swiper-container-hot-songlist">
        <ul class="list">
            <router-link tag="li" :to="{name: 'MusicPlay', params:{songId: item.song_id}}" class="song li-wrapper" v-for="(item, index) in musicData.song_list" :key="index">
                <div class="poster img-wrapper-box pr">
                    <img :src="item.pic_big" :alt="item.title" class="img-show"/>
                </div>
                <div class="info">
                    <div class="name">{{item.title}}</div>
                    <div class="author">{{item.author}}</div>
                </div>
            </router-link>
        </ul>
        <router-link :to="{name:'recommend', params:{musicType: musicType}}" tag="div" class="more-song">
            查看该榜单&gt;
        </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MusicList',
  data () {
    return {
      musicData: {
        song_list: [],
        billboard: {}
      },
      musicType: '2'
    }
  },
  methods: {
    initData () {
      if (this.$route.params.musicType !== undefined) {
        this.musicType = this.$route.params.musicType
      }
      const musicListurl =
      this.HOST +
      '/v1/restserver/ting?method=baidu.ting.billboard.billList&type=' + this.musicType + '&size=5&offset=0'
      this.$axios
        .get(musicListurl)
        .then(response => {
          this.musicData = response.data
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  // props: {
  //   musicType: {
  //     type: String,
  //     default: '2'
  //   }
  // },
  created () {
    this.initData()
  },
  beforeRouteUpdate (to, from, next) {
    this.initData()
    next()
  }
}
</script>
<style scoped>
  .musiclist{
      /* height: 500px;
      width: 500px; */
      background-color: #fff;
      margin-top: 10px;
      padding: 10px,17px;
      padding-top: 0;
  }
  .list{
      word-wrap: break-word;
      -webkit-hyphens: auto;
      hyphens:auto;
      word-break: break-all;
  }
  .panel{
      border-top: 1px solid #eee;
      position: relative;
      top:-1px;
      /* display: none; */
  }
  .panel .list li{
      height: 55px;
      border-bottom: -1px solid #eee;
      padding-left: 0;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
  }
  .li-wrapper .img-wrapper-box {
    border: 1px solid #eee;
  }

  .pr {
      position: relative;
  }
  .li-wrapper {
    display: block;
    /* float: left; */
    display: inline-block\0;
    text-align: center;
  }
  .swiper-container-hot-songlist {
    overflow: hidden;
    margin-right: -30px;
    height: 320px;
  }
  img{
    width: 50px;
    height: 50px;
  }
</style>
