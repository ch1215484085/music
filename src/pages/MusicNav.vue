<template>
  <div class="mod_top_subnav">
    <ul>
        <router-link class="top_subnav__link" :to="{name:'MusicList', params:{musicType:'2'}}" tag="li">
          <li class="top_subnav__item">
              <span>热歌榜</span>
          </li>
        </router-link>
        <router-link class="top_subnav__link" :to="{name:'MusicList', params:{musicType:'1'}}" tag="li">
          <li class="top_subnav__item">
              <span>新歌榜</span>
          </li>
        </router-link>
        <router-link class="top_subnav__link" :to="{name:'MusicList', params:{musicType:'22'}}" tag="li">
          <li class="top_subnav__item">
              <span>king榜</span>
          </li>
        </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'MusicNav',
  data () {
    return {}
  }
}
</script>
<style scoped>
li{float: left;}
.mod_top_subnav {
    height: 51px;
    line-height: 50px;
    border-top: 1px solid #f2f2f2;
    margin-right: -50px;
    display: inline-block;
}
</style>
