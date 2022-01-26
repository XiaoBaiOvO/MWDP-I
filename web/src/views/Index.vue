<template>
  <!-- 框架页 -->
  <div id="index" class="index-page">
    <el-container>
      <div class="header-part">
        <Headerpage/>
      </div>
    </el-container>
<!--    PC端-->
    <el-container v-if="fullWidth >= 700">
<!--      <img class="body-background" src="../assets/background.png" alt="" :style="{height: fullHeight}">-->
      <div class="body-part">
        <el-main :style="{height: fullHeight}">
<!--          <h3>当前屏幕尺寸： {{ fullWidth }} x {{ fullHeight }}</h3>-->
          <div class="breadcrumb-part">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item class="breadcrumb-head" :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item class="breadcrumb-back">页面</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <div class="main-part">
            <router-view class="router-view"/>
          </div>
        </el-main>
      </div>
    </el-container>
<!--    PE端-->
    <el-container v-if="fullWidth < 700">
<!--      <img class="body-background" src="../assets/background.png" alt="" :style="{height: fullHeightPE}">-->
      <div class="body-part">
        <div style="height: 60px"></div>
        <el-main :style="{height: fullHeightPE}">
<!--          <h3>当前屏幕尺寸： {{ fullWidth }} x {{ fullHeight }}</h3>-->
          <div class="breadcrumb-part">
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item class="breadcrumb-head" :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item class="breadcrumb-back">页面</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <div class="main-part">
            <router-view class="router-view"/>
          </div>
        </el-main>
      </div>
    </el-container>
    <el-container>
      <div class="footer-part">
        <Footerpage/>
      </div>
    </el-container>
  </div>
</template>

<script>
import Footerpage from "@/components/footer";
import Headerpage from "@/components/header";

export default {
  name: 'Index',
  components: {
    Footerpage,
    Headerpage
  },
  data() {
    return {
      fullHeight: document.documentElement.clientHeight - 90.3 + 'px',
      fullHeightPE: document.documentElement.clientHeight - 150.3 + 'px',
      fullWidth: document.documentElement.clientWidth,
      activeIndex: '1',
      isCollapse: true,
    };
  },
  computed: {
    crumbList() {
      return this.$route.matched.slice(1);
    }
  },
  mounted() {
    this.getBodyHeight();
  },
  methods: {
    getBodyHeight() {
      const that = this;
      window.onresize = () => {
        return (() => {
          window.fullHeight = document.documentElement.clientHeight;
          that.fullHeight = window.fullHeight - 90.3 + 'px';
          that.fullHeightPE = window.fullHeight - 150.3 + 'px';
        })();
      };
    },
  },
  watch: {
    fullHeight(newVal) {
      if (!this.timer) {
        this.fullHeight = newVal;
        this.timer = true;
        let that = this;
        setTimeout(function () {
          that.timer = false;
        }, 1000);
      }
    },
  },
};
</script>
<style scoped>

.index-page {
  width: 100%;
}

.header-part {
  /*position: fixed;*/
  height: 60px;
  width: 100%;

}

.breadcrumb-part {
  width: 80%;
  margin-left: 8%;
}

.body-part {
  width: 100%;
}

.main-part {
  margin-top: 20px;
  width: 90%;
  /*max-width:1700px;*/
  margin-left: 5%;
  margin-right: 5%;
  font-size: 14px;
}

.router-view {
  opacity: 0.9;
}

.footer-part {
  width: 100%;
}

.breadcrumb-head  /deep/  .el-breadcrumb__inner
{
  color: #ffa47f !important;
  font-size: 16px !important;
}

.breadcrumb-back  /deep/  .el-breadcrumb__inner
{
  color: #ffffff !important;
}

.router-view {
  opacity: 85%;
}

.body-background {
  position: fixed;
  z-index:-999;
  min-height:1399px;
  min-width: 2560px;
}

</style>
