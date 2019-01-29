<template>
  <div class="last">
  <div class="introduce">
    <p class="character">参赛人物*</p>
    <input class="appellation" type="text" placeholder="姓名">
    <p class="present">人物介绍*</p>
    <textarea rows="20" cols="20" class="full">
介绍100字以内
</textarea>
    <p class="tel">联系方式</p>
    <input class="iphone" type="text" placeholder="你的电话">
  </div>
    <div class="fooder">
      <!--<img class="submit" src="../assets/山头-16.png" alt="">-->
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
<style>
.last{
  width: 100%;
  height: 100%;
  background: url("../assets/背景.png") no-repeat;
  background-size: 100% 100%;
}
  .introduce{
    width: 90%;
    margin: 0 auto;
    padding-top: 45%;
  }
  .character, .present, .tel{
    font-size: 80px;
    margin-bottom: 60px;
    color: white;
  }
  .appellation, .iphone{
    width: 100%;
    height: 180px;
    border-radius: 20px;
    padding-left: 50px;
    margin-bottom: 50px;
  }
  .full{
    width: 100%;
    height: 500px;
    border-radius: 20px;
    padding-left: 50px;
    margin-bottom: 50px;
  }
  .fooder{
    margin: 0 auto;
    width: 55%;
    height: 30%;
    background: url("../assets/山头-16.png") no-repeat;
    background-size: 100% 100%;
  }
</style>
