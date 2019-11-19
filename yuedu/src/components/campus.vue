<template>
  <div class="campus">
    <div class="login">
      <div class="close" @click="hide">X</div>
      <div class="login_left">
        <div class="name">
          用户名：
          <input type="text" placeholder="请输入您的用户名" />
          <br />
        </div>
        <div class="psd">
          密码：
          <input type="password" />
        </div>
        <div>
          <input type="checkbox" />下次自动登录
        </div>
        <div>登录</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    hide() {
      this.$emit("hide", "hide");
    }
  }
};
</script>

<style>
.login {
  width: 5.5rem;
  height: 7rem;
  background-color: white;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.close {
  width: 0.5rem;
  height: 0.5rem;
  background-color: rgba(0, 0, 0, 0.7);
  position: absolute;
  font-size: 0.35rem;
  text-align: center;
  line-height: 0.5rem;
  border-radius: 0.3rem;
  color: white;
  top: -0.2rem;
  right: -0.2rem;
}
.login_left {
  width: 5rem;
  height: 6rem;
  background-color: red;
  font-size: 0.2rem;
}
.campus {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>