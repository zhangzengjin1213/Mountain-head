<template>
    <div class="back-photo clearfix">
       <img class="mount" src="../assets/山头-23.png" alt="">
       <p class="first fr whiteColor">第一名</p>
      <div class="info whiteBGC">
        <span class="surname priceSmallSize">哈哈哈</span>
        <span class="amount goodNormalSize">81512票</span>
       <div class="aspect">
         <span class="text">指茶树的叶子和芽。别名茶、槚（jiǎ），茗，荈（chuǎn）。泛指可用于泡茶的常绿灌木茶树的叶子，以及用这些叶子泡制的饮料，后来引申为所有用植物花、叶、种子、根泡制的草本茶，如“菊花茶”等；用各种药材泡制的“凉茶”等，在中国文学中亦称雷芽。有些国家亦有以水果及香草等其它植物叶而泡出的茶，如“水果茶”</span>
       </div>
      </div>
      <div class="cast">
        <img class="election" src="../assets/山头-15.png" alt="">
      </div>
     </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
        methods: {},
        computed: {},
        components: {}
    }
</script>
<style scoped>
.back-photo{
  width: 100%;
  height: 100%;
  background: url("../assets/背景.png") no-repeat;
  background-size: 100% 100%;
}
.mount{
    width: 70%;
    height: 400px;
    z-index: 9999;
    margin: 40% 0 0 8%;
  }
  .first{
    display: inline-block;
    margin: 53% 120px 0 0;
    font-size: 80px;
  }
  .info{
    width: 90%;
    margin: 0 auto;
    margin-top: -30px;
    padding-bottom: 100px;
    border-radius: 20px;
  }
  .surname,.amount{
    display: inline-block;
    padding: 60px 0;
    color: black;
    font-size: 120px;
  }
  .surname{
    padding-left: 300px;
    padding-right: 350px;
  }
  .aspect{
    width: 90%;
    margin: 0 auto;
  }
  .text{
    color: black;
    font-size: 24px;
  }
  .cast{
    width: 100%;
    text-align: center;
    margin-top: 100px;
  }
  .election{
    width: 800px;
    height: 800px;
  }

</style>
