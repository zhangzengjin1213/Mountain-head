<template>
  <div class="back-photo clearfix">
    <img class="mount" src="../assets/山头-23.png" alt>
    <p>家啊还进口后端数据阿富汗接电话房交会上搭建</p>
    <div class="info whiteBGC">
      <span class="surname priceSmallSize">{{name}}</span>
      <div class="aspect">
        <span class="text">{{introduction}}</span>
      </div>
    </div>
    <div class="cast" v-if="isSelect">
      <img class="election" @click="_vote" src="../assets/山头-15.png" alt>
    </div>

    <div class="modalTip" v-else>
      <img class="modalTip-img" src="../assets/tanrs.png" alt>
    </div>
  </div>
</template>
<script>
import { submit } from '@/api/index'
export default {
  data() {
    return {
      isSelect: true,
      name: '',
      introduction: '',
      phone: ''
    }
  },
  mounted() {
    const { name, introduction, phone } = this.$route.params;
    this.name = name;
    this.introduction = introduction;
    this.phone = phone;
  },
  methods: {},
  computed: {},
  components: {}
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
  /* margin: 53% 120px 0 0;
  font-size: 80px; */
}
.info {
  margin-top: -30px;
  padding-bottom: 100px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
.modalTip {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
}
.modalTip-img {
  width: 100%;
  height: 100%;
}
.election {
  width: 800px;
  height: 800px;
}
</style>

