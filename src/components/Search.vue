<template>
    <div class="mod_search" id="g_search">
        <div class="mod_search_input">
            <input type="text" class="search_input__input" aria-label="请输入搜索内容" v-model="srch">
        </div>
        <label>{{srch}}</label>
        <router-link :to="{name:'searchView', params:{searchInfo: srch}}" tag="button">
            <button class="search_input__btn">
                <img src="../assets/font/search.svg" class="iconfont icon right"/>
            </button>
        </router-link>
    </div>
</template>
<script>
export default {
  name: 'search',
  data () {
    return {
      srch: ''
    }
  }
}
</script>
<style scoped>
.search_input__input {
    width: 300px;
    height: 30px;
}
.right {
    font-size: 30px;
    margin-right: 10px;
}
.icon {
    width: 25px;
    height: 25px;
}
.iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
}
.mod_search .mod_search_input, .mod_search .search_input__input {
    width: 300px;
    height: 40px;
}
.mod_search .mod_search_input {
    border: 0 none;
    padding: 0 70px 0 15px;
    line-height: 50px;
    left: 50%;
    top: 2px;
    margin-top: 0;
    margin-left: -160px;
    background: #fff;
}
.mod_search_input {
    border: 1px solid #c9c9c9;
    padding: 0 33px 0 11px;
    line-height: 36px;
    height: 36px;
    margin-top: 26px;
    position: relative;
    border-radius: 3px;
    background-color: #fff;
    -webkit-transition: width .6s ease-out;
    transition: width .6s ease-out;
}
.mod_search {
    position: relative;
    height: 80px;
    background-position: 50%;
    background-size: cover;
}
.search_input__btn {
    position: absolute;
    top: 13px;
    right: 35px;
    border: 0 none;
    width: 38px;
    height: 35px;
    overflow: visible;
    background: 0 0;
}
</style>
