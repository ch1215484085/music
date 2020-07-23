<template>
    <div class="swiper-container"  v-swiper:mySwiper="swiperOptions">
        <div class = "swiper-wrapper">
            <div class="swiper-slide">
                <img src="../assets/banner/s1.png" />
            </div>
            <div class="swiper-slide">
                <img src="../assets/banner/s2.png" />
            </div>
            <div class="swiper-slide">
                <img src="../assets/banner/s3.png" />
            </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
</template>
<script>
export default {
  name: 'slider',
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true,
        autoplay: true
      }
    }
  }
}
</script>
<style scoped>
img{
  height: 200px;
}
</style>
