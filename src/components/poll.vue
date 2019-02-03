<template>
  <div class="back-photo clearfix">
    <img class="mount" src="../assets/山头-23.png" alt>
    <p class="first fr whiteColor">第{{infoData.rank||'***'}}名</p>
    <div class="info whiteBGC">
      <span class="surname priceSmallSize">{{infoData.school||'***'}}</span>
      <span class="amount goodNormalSize">{{infoData.total||'***'}}票</span>
      <div class="aspect">
        <span
          class="text"
        >********简介说明********</span>
      </div>
    </div>
    <div class="cast">
      <img class="election" @click="vote" src="../assets/山头-15.png" alt>
    </div>
  </div>
</template>
<script>
import { getvotePage } from '@/api/index'
export default {
  data() {
    return {
      schoolnum: null,
      infoData: {}
    }
  },
  mounted() {
    const { schoolnum } = this.$route.params;
    this.schoolnum = schoolnum;
    this._getvotePage()
  },
  methods: {
    _getvotePage() {
      if (this.schoolnum) {
        getvotePage({
          schoolnum: this.schoolnum
        }).then(res => {
          this.infoData = res.data;
        })
      } else {
        alert('获取失败，请检查网络连接！')
      }
    },
    vote(){
      alert('投票')
    }
  },
}
</script>
<style scoped>
.back-photo {
  width: 100%;
  height: 100%;
  background: url("../assets/背景.png") no-repeat;
  background-size: 100% 100%;
}
.mount {
  width: 70%;
  height: 400px;
  z-index: 9999;
  margin: 40% 0 0 8%;
}
.first {
  display: inline-block;
  margin: 53% 120px 0 0;
  font-size: 80px;
}
.info {
  /* width: 90%;
    margin: 0 auto; */
  margin-top: -30px;
  padding-bottom: 100px;
  border-radius: 20px;
  border: 1px solid red;
}
.surname,
.amount {
  display: inline-block;
  padding: 60px 0;
  color: black;
  font-size: 120px;
}
.surname {
  padding-left: 300px;
  padding-right: 350px;
}
.aspect {
  width: 90%;
  margin: 0 auto;
}
.text {
  color: black;
  font-size: 24px;
}
.cast {
  width: 100%;
  text-align: center;
  margin-top: 100px;
}
.election {
  width: 800px;
  height: 800px;
}
</style>
