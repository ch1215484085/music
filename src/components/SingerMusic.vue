<template>
  <div style="width:450px; float:left" class="musiclist">
    <div class="panel hotsongs on">
        <ul class="list">
            <router-link class="song" tag="li" :to="{name: 'MusicPlay', params:{songId: item.song_id}}" v-for="(item, index) in musicData.songlist" :key="index">
                <div class="poster">
                    <img :src="item.pic_big" :alt="item.title" />
                </div>
                <div class="info">
                    <div class="name">{{item.title}}</div>
                    <div class="author">{{item.author}}</div>
                </div>
            </router-link>
        </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SingerMusic',
  data () {
    return {
      musicData: {
        songlist: []
      }
    }
  },
  created () {
    const singerMusicUrl = this.HOST + '/v1/restserver/ting?method=baidu.ting.artist.getSongList&tinguid=' + this.$route.params.singerId + '&limits=6&use_cluster=1&order=2'
    this.$axios.get(singerMusicUrl).then(res => {
      this.musicData = res.data
    }).catch(error => {
      console.log(error)
    })
  }
}
</script>
