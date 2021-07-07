
<template>
   <!-- <form @submit.prevent="handleSubmit">
       <h3>Login</h3>

       <div class="form-group">
         <label>Email</label>
         <input type="email" class="form-control" placeholder="Email" v-model="email">
       </div>

       <div class="form-group">
         <label>Password</label>
         <input type="password" class="form-control" placeholder="Password" v-model="password">
       </div>

       <button class="btn btn-primary btn-block">
           Login
       </button>
   </form> -->

   <div class="login" @submit.prevent="handleSubmit">
        <div class="wrapper">
            <h2>WELCOME</h2>
            <div><input type="email" placeholder="Email" v-model="email"></div>
            <div><input type="password" placeholder="Password" v-model="password"></div>
            <button type="submit" class="btn btn-primary submit">Login</button>
            <div class="social">
                <div><a href="#facebook">Facebook</a></div>
                <div><a href="#google">Google</a></div>
            </div>
        </div>
        
    </div>
</template>

<script>
import axios from 'axios'
    export default {
      name: 'Login',
      data() {
        return {
          email: '',
          password: '',
        }
      },
      methods: {
          async handleSubmit() {
              const response = await axios.post('login', {
                  email : this.email,
                  password : this.password
              });

              console.log(response);

            localStorage.setItem('token', response.data.token);
            this.$store.dispatch('user', response.user);
            this.$router.push('/');
          }
      }
    }
</script>

<style>
html {
  height: 100%;
}
body {
    background-color: #DBDBDB;
    height: 100%;
}
.login {
    display: flex;
    justify-content: center;
}
.submit {
    background-color: #1AA1F0;
    width: 180px;
}
#app {
    width:100%;
    display: grid;
    place-items: center;
    height: 100%;
}
.wrapper { 
    width: 400px;
    border: 1px solid gray;
    padding: 100px;
    background-color: #F2F2F2;

}
</style>
