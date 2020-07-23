<template>
  <router-link :to="{name: 'SingerInfo', params: {singerId: singerId}}" tag="div">
    <div style="float:left" class="card">
      <div class="cars-silder">
        <div class="poster">
          <img :src="singerInfo.avatar_big" :alt="singerInfo.name">
        </div>
      </div>
      <div class="info">
        <div class="name">{{singerInfo.name}}</div>
      </div>
    </div>
  </router-link>
</template>
<script>
export default {
  name: 'SingerList',
  data () {
    return {
      singerInfo: {}
      // singerListData: [2517, 1557, 1094, 1052, 1067, 211426]
    }
  },
  props: {
    singerId: {
      type: String,
      default: '0'
    }
  },
  created () {
    const singerurl =
    this.HOST + '/v1/restserver/ting?method=baidu.ting.artist.getInfo&tinguid=' + this.singerId
    this.$axios
      .get(singerurl)
      .then(response => {
        this.singerInfo = response.data
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>
<style scoped>
img{
  width: 100px;
  height: 100px;
}
.card{
  margin: 5px;
  padding: 5px;
}
</style>
