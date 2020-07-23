<template>
  <div style="width:450px; float:left">
    <ul>
      <li v-for="(item, index) in musicData.song_list" :key="index">
        <div>
            <img :src="item.pic_big" :alt="item.title" />
            <div class="info">
              <div class="name">{{item.title}}</div>
              <div class="author">{{item.author}}</div>
            </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Newmusic',
  data () {
    return {
      musicData: {
        song_list: [],
        billboard: {}
      }
    }
  },
  props: {
    musicType: {
      type: String,
      default: '1'
    }
  },
  created () {
    const musicListurl =
    this.HOST +
    '/v1/restserver/ting?method=baidu.ting.billboard.billList&type=' + this.musicType + '&size=10&offset=0'
    this.$axios
      .get(musicListurl)
      .then(response => {
        this.musicData = response.data
      })
      .catch(error => {
        console.log(error)
      })
  },
  mounted () {
    console.log('Current Swiper instance object', this.mySwiper)
    // this.mySwiper.slideTo(3, 1000, false)
  }
}
</script>
