<!-- SignUp.vue -->
<template>
   <div class="d-flex" style="width: 100%; height: 500px; border: 1px solid red;">
    <div class="right-side" style="border: 1px solid green;"></div>
    
    <div class="left-side d-flex justify-content-center align-items-center" style="border: 1px solid blue">
        <div class="form-box">
            <form class="form" @submit.prevent="handleSubmit">
              <span class="title">Đăng kí</span>
              <span class="subtitle">Đăng kí hội viện với email của bạn!</span>
              <div class="form-container">
                <input v-model="fullName" type="text" class="input" placeholder="Họ và tên">
                <input v-model="email" type="email" class="input" placeholder="Email">
                <input v-model="password" type="password" class="input" placeholder="Mật khẩu">
              </div>
              <button type="submit">Đăng kí</button>
            </form>
            <div class="form-section">
              <p>Đã có tài khoản? <router-link to="/login">Đăng nhập</router-link> </p>
            </div>
          </div>
    </div>

   </div> 
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'SignUp',
    data() {
      return {
        fullName: '',
        email: '',
        password: '',
      };
    },
    methods: {
      async handleSubmit() {
        const userData = {
          fullName: this.fullName,
          email: this.email,
          khoaHoc: [],
          passWord: this.password,
        };
  
        try {
          const response = await axios.post('https://6574e9bab2fbb8f6509cc787.mockapi.io/users', userData);
          console.log('Dữ liệu đã được gửi:', response.data);
          // Xử lý các bước sau khi gửi dữ liệu thành công
        } catch (error) {
          console.error('Lỗi khi gửi dữ liệu:', error);
          // Xử lý lỗi nếu có
        }
      },
    },
  };
  </script>
  
  <style>

  .right-side{
    width: 70%;
    height: 100%; 
  }

  .left-side{
    width: 30%;
    height: 100%;
  }

  .form-box {
    
    max-width: 320px;
    background: #f1f7fe;
    overflow: hidden;
    border-radius: 16px;
    color: #010101;
    height: 405px;
  }
  
  .form {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 32px 24px 24px;
    gap: 16px;
    text-align: center;
  }
  
  /*Form text*/
  .title {
    font-weight: bold;
    font-size: 1.6rem;
  }
  
  .subtitle {
    font-size: 1rem;
    color: #666;
  }
  
  /*Inputs box*/
  .form-container {
    overflow: hidden;
    border-radius: 8px;
    background-color: #fff;
    margin: 1rem 0 .5rem;
    width: 100%;
  }
  
  .input {
    background: none;
    border: 0;
    outline: 0;
    height: 40px;
    width: 100%;
    border-bottom: 1px solid #eee;
    font-size: .9rem;
    padding: 8px 15px;
  }
  
  .form-section {
    padding: 16px;
    font-size: .85rem;
    background-color: #e0ecfb;
    box-shadow: rgb(0 0 0 / 8%) 0 -1px;
  }
  
  .form-section a {
    font-weight: bold;
    color: #0066ff;
    transition: color .3s ease;
  }
  
  .form-section a:hover {
    color: #005ce6;
    text-decoration: underline;
  }
  
  /*Button*/
  .form button {
    background-color: #0066ff;
    color: #fff;
    border: 0;
    border-radius: 24px;
    padding: 10px 16px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color .3s ease;
  }
  
  .form button:hover {
    background-color: #005ce6;
  }
</style>