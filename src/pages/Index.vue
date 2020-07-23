<template>
  <div id="index" class="container">
    <Search />
    <SwiperSlide />
    <MusicNav />
    <router-view/>
    <Singer/>
  </div>
</template>

<script>
import MusicNav from './MusicNav'
import Singer from './Singer'
import SwiperSlide from '../components/SwiperSlide'
import Search from '../components/Search'
export default {
  name: 'Index',
  data () {
    return {
    }
  },
  components: {
    MusicNav,
    Singer,
    SwiperSlide,
    Search
  }
}
</script>

<style scoped>
/* em {
    display: inline-block;
    height: 20px;
    padding: 0 13px;
    margin: 7px 17px 0;
    border-radius: 20px;
    line-height: 21px;
} */
</style>
