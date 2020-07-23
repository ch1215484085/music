import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import SingerInfo from '@/pages/Singer/SingerInfo'
import MusicList from '@/components/MusicList'
import Newmusic from '@/components/Newmusic'
import RankingList from '@/components/RankingList'
import MusicPlay from '@/pages/MusicPlay'
import Recommend from '@/pages/recommend/Recommend'
import SearchView from '@/pages/search/SearchView'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      redirect: '/music_list/2',
      children: [
        {
          path: '/music_list/:musicType',
          name: 'MusicList',
          component: MusicList
        },
        {
          path: '/new_music',
          name: 'Newmusic',
          component: Newmusic
        },
        {
          path: '/ranking_list',
          name: 'RankingList',
          component: RankingList
        }
      ]
    },
    {
      path: '/singer/:singerId',
      name: 'SingerInfo',
      component: SingerInfo
    },
    {
      path: '/music_play/:songId',
      name: 'MusicPlay',
      component: MusicPlay
    },
    {
      path: '/recommend/:musicType',
      name: 'recommend',
      component: Recommend
    },
    {
      path: '/search/:searchInfo',
      name: 'searchView',
      component: SearchView
    }
  ]
})
