<template>
  <div class="recommend">
    <div class="panel">
      <vue-data-loading :loading="loading" :completed="completed" :listens="['pull-up']" @pull-up="pullUp">
        <ul class="list">
            <router-link tag="li" :to="{name: 'MusicPlay', params:{songId: item.song_id}}" class="song li-wrapper" v-for="(item, index) in musicData" :key="index">
                <div class="poster img-wrapper-box pr">
                    <img :src="item.pic_big" :alt="item.title" />
                </div>
                <div class="info">
                    <div class="name">{{item.title}}</div>
                    <div class="author">{{item.author}}</div>
                </div>
            </router-link>
        </ul>
      </vue-data-loading>
    </div>
  </div>
</template>
<script>
import VueDataLoading from 'vue-data-loading'
export default {
  name: 'recommend',
  components: {
    VueDataLoading
  },
  data () {
    return {
      musicData: [],
      loading: false,
      completed: false,
      page: 1,
      offsetNumber: 0
    }
  },
  methods: {
    fetchData () {
      this.loading = true
      const musicListurl =
      this.HOST +
      '/v1/restserver/ting?method=baidu.ting.billboard.billList&type=' + this.$route.params.musicType + '&size=20&offset=' + this.offsetNumber
      this.$axios
        .get(musicListurl)
        .then(response => {
          this.musicData = this.musicData.concat(response.data.song_list)
          this.loading = false
          this.offsetNumber += 20
        })
        .catch(error => {
          console.log(error)
        })
    },
    pullUp () {
      debugger
      this.fetchData()
      this.page++
    }
  },
  props: {
    musicType: {
      type: Number,
      default: 0
    }
  },
  created () {
    this.fetchData()
  }
}
</script>
<style scoped>
  .recommend{
      background-color: #fff;
      margin-top: 10px;
      padding: 10px,17px;
      padding-top: 0;
      max-width: 500px;
      margin: 0 auto;
      text-align: center;
  }
  .list{
      word-wrap: break-word;
      -webkit-hyphens: auto;
      hyphens:auto;
      word-break: break-all;
      display: inline-block;
      overflow: auto;
      min-height: 300px;
      max-height: 400px;
  }
  .panel{
      border-top: 1px solid #eee;
      position: relative;
      top:-1px;
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
    height: 400px;
  }
  img{
    width: 50px;
    height: 50px;
  }
</style>
