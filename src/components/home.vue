<template>
    <div class="Base-map">
      <div class="top">
        <input class="smallSize" type="text" placeholder="输入山头" >
        <button>搜索</button>
      </div>
      <div class="centent">
        <ul class="clearfix">
          <li class="list fl" v-for="item in list" @click="goPoll">
          <p class="fragColor name">{{item.name}}</p>
            <img src="../assets/山头-23.png" alt="">
            <div class="graphic whiteBGC">
              <p class="place">第{{item.Ranking}}名</p>
              <p class="num">{{item.ticket}}票</p>
              <div class="vote">
                <img src="../assets/山头-22.png" alt="">
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="initiate" @click="goList">
        <!--<img  src="../assets/山头-14.png" alt="">-->
      </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
              list:[
                {
                  name:'哈哈哈哈',
                  Ranking:'1',
                  ticket:'1111'
                },
                {
                name:'嘻嘻嘻',
                  Ranking:'2',
                  ticket:'315'
                },
                {
                  name:'张家湾',
                  Ranking:'3',
                  ticket:'8888'
                }
              ]
            }
        },
        methods: {
          goList(){
            this.$router.push({
              name: 'list',
            })
          },
          goPoll(){
            this.$router.push({
              name: 'poll',
            })
          }
        },
        computed: {},
        components: {}
    }
</script>
<style>
  .Base-map{
  width: 100%;
  height: 100%;
 background: url("../assets/背景.png") no-repeat;
  background-size: 100% 100%;
}
  .top{
    width: 90%;
    margin: 0 auto;
    padding-top: 42%;
  }
  .top input{
    width: 68%;
    height: 180px;
    padding-left: 60px;
    border: none;
    border-bottom-left-radius:20px;
    border-top-left-radius: 20px;
    opacity: 0.6;
  }
  .top button{
    width: 30%;
    height: 180px;
    margin-left: -18px;
    background: white;
    border: none;
    border-bottom-right-radius:20px;
    border-top-right-radius: 20px;
  }
  .centent{
    width: 90%;
    margin: 0 auto;
    margin-top: 150px;
  }
  ul{
    width: 100%;
  }
  li{
    width: 48%;
    height: 520px;
    border-top-left-radius:20px;
    border-top-right-radius: 20px;
    background-color: black;
    position: relative;
    margin-bottom: 280px;
  }
  li:nth-child(odd){
    margin-right: 35px;
  }
  li img{
    position: absolute;
    left: 0;
    bottom: 0;
    width: 70%;
    height: 250px;
  }
  li .name{
    margin-top: 150px;
    text-align: center;
    font-size: 80px;
  }
  .graphic{
    width: 100%;
    height: 220px;
    position: absolute;
    top: 515px;
    border-bottom-right-radius:20px;
    border-bottom-left-radius: 20px;
  }
  .place, .num{
    padding-left: 50px;
    padding-top: 60px;
    color: black;
    font-size: 80px;
  }
  .vote {
   width: 200px;
    height: 100%;
    position: absolute;
    right: 50px;
    bottom: 10px;
  }
 .vote img{
    width: 100%;
    height: 200px;
  }
  .initiate{
    margin: 0 auto;
    width: 100%;
    height: 20%;
    background: url("../assets/山头-14.png") no-repeat;
    background-size: 100% 100%;
  }
</style>
