<template>
  <Carousel autoplay v-model="value2" loop :dots="dots">
    <CarouselItem class="photo" v-for="item in Img">
       <img :src="item.photo" alt="">
       <Button class="jump" shape="circle" @click="goHome">跳过</Button>
    </CarouselItem>
  </Carousel>
</template>
<script>
  export default {
    data () {
      return {
        value2: 0,
        dots:'none',
        Img:[
          {
            photo:require('../assets/背景.png')
          },
          {
            photo:require('../assets/loging_1.jpg')
          }
        ]
      }
    },
    methods:{
      goHome(){
        this.$router.push({
          name: 'home',
        })
      }
    }
  }
</script>

<style>
  .ivu-carousel{
    height: 100% !important;
  }
  .ivu-carousel-list{
    height: 100% !important;
  }
  .ivu-carousel-track{
    height: 100% !important;
  }
  .photo, .ivu-carousel-item{
    width: 100%;
    height: 100% !important;
    position: relative;
  }
  img{
    width: 100%;
    height: 100%;
  }
  .jump{
    position: absolute;
    right:30px;
    top: 30px;
  }
</style>
