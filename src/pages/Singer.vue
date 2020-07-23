<template>
    <div class="mod-singerlists">
        <div class="hd">热门歌单</div>
        <div class="container">
            <div class="warpper">
                <SingerList  :key="index" v-for="(item, index) in singerListData" :singerId="item"/>
            </div>
        </div>
    </div>
</template>

<script>
import SingerList from '../components/SingerList'
export default {
  name: 'singer',
  data () {
    return {singerListData: ['2517', '1557', '1094', '1052', '211426']
    }
  },
  components: {
    SingerList
  }
}
</script>
