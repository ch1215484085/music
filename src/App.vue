<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

b, body, button, dd, dfn, div, dl, dt, em, fieldset, footer, form, h1, h2, h3, h4, h5, h6, header, hr, i, input, legend, li, nav, ol, p, pre, section, strong, td, textarea, th, ul, var {
    margin: 0;
    padding: 0;
    font-style: normal;
    font-weight: 400;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

body {
    font-size: 14px;
    font-family: PingFangSC-Regular,poppin,Tahoma,Arial,sans-serif;
    color: #333;
    letter-spacing: 1px;
    line-height: 22px;
}
body, html {
    -webkit-font-smoothing: antialiased;
}
html {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
}

html {
    color: -internal-root-color;
}

::selection {
    background: none;
}

.mod-singerlists{
  float: left;
  width: 380px;
  padding: 10px;
}

.router-link-exact-active {
    background: none!important;
    text-decoration: none;
    color: #ff00ff;
    border-right: none;
    border-bottom-color: #ff00ff;
}

:hover {
    color: #ff00ff;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.top_subnav__item {
    float: left;
    font-size: 15px;
    color: #c1c1c1;
    margin-right: 47px;
}

.top_subnav__link--current {
    color: #ff00ff;
}
.nav-list {
    display: inline-block;
    padding: 8px 2.5%;
    font-size: 16px;
}
.t {
    -ms-transition: all 0.2s;
    -o-transition: all 0.2s;
    -moz-transition: all 0.2s;
    transition: all 0.2s;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  text-decoration: none;
  -webkit-tap-highlight-color: transparent;
}
.active {
  color: red;
}
</style>
