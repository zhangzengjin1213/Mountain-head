<template>
  <div class="last">
    <div class="introduce">
      <p class="character">参赛人物*</p>
      <input class="appellation" type="text" v-model="name" placeholder="姓名">
      <p class="present">人物介绍*</p>
      <textarea rows="20" cols="20" class="full" v-model="introduction" placeholder="介绍100字以内"/>>
      <p class="tel">联系方式</p>
      <input class="iphone" type="text" v-model="phone" placeholder="你的电话">
    </div>
    <div class="fooder" @click="_submit">
      <!--<img class="submit" src="../assets/山头-16.png" alt="">-->
    </div>
  </div>
</template>
<script>
import { submit } from '@/api/index'
export default {
  data() {
    return {
      name: '',
      introduction: '',// 介绍
      phone: ''
    }
  },
  methods: {
    _submit() {
      const { name, introduction, phone } = this;
      if (!name || !introduction) {
        alert('请填写必填项！')
      } else {
        // this.$router.push({
        //   name: 'check',
        //   params: {
        //     name, introduction, phone
        //   }
        // })
        submit({
          school: name,
          username: name,
          department: introduction,
          phone
        }).then(res => {
          console.log(res);
          if (res) {
            switch (res.errCode) {
              case '0':
                this.$Message.info({
                  content: '恭喜你发起成功！',
                  duration: 2
                });
                setTimeout(() => {
                  window.location.href=`share.html?schoolnum=${res.data.schoolnum}`;
                }, 2000);
                break;
              default:
                this.$Message.info({
                  content: '发起失败，请稍后重试!',
                  duration: 2
                });
                break;
            }
          } else {
            this.$Message.info({
              content: '发起失败，请检查您的网络设置!',
              duration: 2
            });
          }
        })
      }
    }
  },
  computed: {},
  components: {}
}
</script>
<style>
.last {
  width: 100%;
  height: 100%;
  background: url("../assets/背景.png") no-repeat;
  background-size: 100% 100%;
}
.introduce {
  width: 90%;
  margin: 0 auto;
  padding-top: 45%;
}
.character,
.present,
.tel {
  font-size: 80px;
  margin-bottom: 60px;
  color: white;
}
.appellation,
.iphone {
  width: 100%;
  height: 180px;
  border-radius: 20px;
  padding-left: 50px;
  margin-bottom: 50px;
}
.full {
  width: 100%;
  height: 500px;
  border-radius: 20px;
  padding-left: 50px;
  margin-bottom: 50px;
}
.fooder {
  margin: 0 auto;
  width: 55%;
  height: 30%;
  background: url("../assets/山头-16.png") no-repeat;
  background-size: 100% 100%;
}
</style>
