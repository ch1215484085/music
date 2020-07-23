<template>
  <div class="searchView">
    <div class="panel hotsongs on swiper-container-hot-songlist">
        <ul class="list">
            <router-link tag="li" :to="{name: 'MusicPlay', params:{songId: item.songid}}" class="song li-wrapper" v-for="(item, index) in musicData.song" :key="index">
                <div class="info">
                    <span class="name">{{item.songname}}</span>
                    <span class="author">{{item.artistname}}</span>
                </div>
            </router-link>
        </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'searchView',
  data () {
    return {
      musicData: {
        song: []
      }
    }
  },
  created () {
    const searchListurl =
    this.HOST +
    '/v1/restserver/ting?method=baidu.ting.search.catalogSug&query=' + this.$route.params.searchInfo
    this.$axios
      .get(searchListurl)
      .then(response => {
        this.musicData = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>
<style scoped>
  .searchView{
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
      display: inline-block;
  }
  .panel{
      border-top: 1px solid #eee;
      position: relative;
      top:-1px;
      /* display: none; */
  }
  .panel .list li{
      height: 30px;
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
    height: 502px;
  }
</style>
