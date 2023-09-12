<template>
  <el-container class="home-container">
    <el-header>
      <div>
        <img src="../assets/logo.png" style="">
        <span>电商后台管理系统</span>
      </div>
      <div>
        <el-button>退出登录</el-button>
      </div>
    </el-header>
    <el-container>
      <el-aside width="200px">Aside</el-aside>
      <el-container>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: "home"
}
</script>

<style scoped>
  .el-header {
    background-color: aliceblue;
    color: #292c2c;
    display: flex;
    justify-content: space-between;
  }
  .el-header img{
    height: 50px;
    border-radius: 10px;
  }
  .el-header div{
    display: flex;
    align-items: center;
  }
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  .home-container{
    height: 100%;
  }
</style>
