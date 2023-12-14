<template>
    <div class="overlay">
        <div class="transparent-overlay"></div>
        <div class="modal-signup">
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
    name: 'Login',
    data() {
      return {
        user: '',
        password: ''
      };
    },
    methods: {
      async handleLogin() {
        try {
          const response = await axios.get('https://6574e9bab2fbb8f6509cc787.mockapi.io/users');
          const users = response.data;
  
          if (this.user === 'admin' && this.password === 'admin') {
            this.$router.push('/admin');
          } else {
            const currentUser = users.find(
              u => u.email === this.user && u.passWord === this.password
            );
            if (currentUser) {
              this.$router.push('/user');
            } else {
              console.log('Thông tin đăng nhập không chính xác');
            }
          }
        } catch (error) {
          console.error('Lỗi khi kiểm tra thông tin đăng nhập:', error);
        }
      }
    }
  };
  </script>
  
  <style>

  .modal-signup{
    position: fixed; /* Đảm bảo div giữa màn hình khi cuộn trang */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%); /* Di chuyển div điều chỉnh vị trí đến giữa */
    z-index: 9999 !important;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  
  .transparent-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Màu đen với độ trong suốt 0.5 */
    z-index: 1; /* Đảm bảo nằm phía dưới lớp overlay đỏ */
  }

  .form-box {
    z-index: 9999;
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
  