<template>
  <div class="login_container">
    <div class="login_box">
      <div class="login_bd" :class="{ 'info-container': userInfo.password }">
        <div class="login_header">
          <h1>登录页</h1><br>
        </div>
        <el-form ref="form" :model="userInfo" :rules="userRules">
        <el-form-item prop="username">
          <el-input v-model="userInfo.username" prefix-icon="el-icon-user-solid" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="userInfo.password"
                    show-password prefix-icon="el-icon-lock" placeholder="请输入密码" @keydown.enter="enter"></el-input>
        </el-form-item>
        <transition name="fade">
            <el-form-item v-if="userInfo.password">
              <el-button icon="el-icon-s-promotion" circle type="primary" @click="login"></el-button>
            </el-form-item>
        </transition>
      </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data(){
    return{
      userInfo:{
        username:'',
        password:''
      },
      userRules:{
        username:[
          {required:true,message:'请输入用户名',trigger:'blur'},
          {min:5,max:10,message: '长度应在5~10个字符',trigger: 'blur'}
        ],
        password:[
          {required:true,message:'请输入密码',trigger:'blur'},
          {min:6,max:10,message: '长度应在6~10个字符',trigger: 'blur'}
        ]
      }
    }
  },
  methods:{
    login(){
      this.$refs.form.validate(valid=>{
        if(!valid) return;
        this.$axios.post('login',this.userInfo).then(
            response=>{
              if(response.data.meta.status==200){
                this.$message.success('登陆成功');
                console.log(response.data.data.token);
                window.sessionStorage.setItem('token',response.data.data.token)
                this.$router.push('/home')
              }else {
                this.$message.error('登陆失败！'+response.data.meta.msg);
                console.log(response.data.mete);
              }
            },
            error=>{
              console.log(error.message);
            }
        )
      })
    },
    enter(){
      console.log('enter has triggered')
    }
  }
}
</script>

<style scoped>
  .login_container{
    width: 100%;
    height: 100%;
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
    height: 100vh;
  }
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }

    50% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0% 50%;
    }
  }
  .login_box{
    width: 450px;
    height: 300px;
    border: 1px solid black;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: #fff;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .login_header{
    text-align: center;
  }
  .login_bd{
    padding: 0 30px;
    text-align: center;
  }
  .info-container {
    margin-top: -30px;  /* 上移30像素 */
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
submarine
