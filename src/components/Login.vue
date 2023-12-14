<template>
  <div
    class="d-flex"
    style="width: 100%; height: 500px; border: 1px solid red"
  >
    <div class="right-side" style="border: 1px solid green"></div>

    <div
      class="left-side d-flex justify-content-center align-items-center"
      style="border: 1px solid blue"
    >
    <div class="form-box-login">
      <form class="form" @submit.prevent="handleLogin">
        <span class="title">Login</span>
        <span class="subtitle">Enter your credentials.</span>
        <div class="form-container">
          <input v-model="user" type="text" class="input" placeholder="Email">
          <input v-model="password" type="password" class="input" placeholder="Password">
        </div>
        <button type="submit">Login</button>
      </form>
      <div class="form-section-login">
        <p>Đã có tài khoản? <router-link to="/login">Đăng nhập</router-link> </p>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      user: "",
      password: "",
    };
  },
  methods: {
    async handleLogin() {
      try {
        const response = await axios.get(
          "https://6574e9bab2fbb8f6509cc787.mockapi.io/users"
        );
        const users = response.data;

        if (this.user === "admin" && this.password === "admin") {
          this.$router.push("/admin");
        } else {
          const currentUser = users.find(
            (u) => u.email === this.user && u.passWord === this.password
          );
          if (currentUser) {
            this.$router.push("/user");
          } else {
            console.log("Thông tin đăng nhập không chính xác");
          }
        }
      } catch (error) {
        console.error("Lỗi khi kiểm tra thông tin đăng nhập:", error);
      }
    },
  },
};
</script>


  <style>
.right-side {
  width: 70%;
  height: 100%;
}

.left-side {
  width: 30%;
  height: 100%;
}

.form-box-login {
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
  margin: 1rem 0 0.5rem;
  width: 100%;
}

.input {
  background: none;
  border: 0;
  outline: 0;
  height: 40px;
  width: 100%;
  border-bottom: 1px solid #eee;
  font-size: 0.9rem;
  padding: 8px 15px;
}

.form-section-login {
  margin-top: 40px;
  padding: 16px;
  font-size: 0.85rem;
  background-color: #e0ecfb;
  box-shadow: rgb(0 0 0 / 8%) 0 -1px;
}

.form-section-login a {
  font-weight: bold;
  color: #0066ff;
  transition: color 0.3s ease;
}

.form-section-login a:hover {
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
  transition: background-color 0.3s ease;
}

.form button:hover {
  background-color: #005ce6;
}
</style>