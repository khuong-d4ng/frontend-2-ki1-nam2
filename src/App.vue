<template>
  <div>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-fluid">
        <router-link to="/">
          <img
            src="../src/assets/logo2-nobg2.png"
            height="35"
            alt=""
            loading="lazy"
          />
        </router-link>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Tìm kiếm..." aria-label="Search">
          <button class="btn btn-outline-primary" type="submit">Tìm</button>
        </form>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">Trang chủ</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Khóa học</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Về chúng tôi</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Liên hệ</a>
            </li>
            <li class="nav-item">
              <router-link to="/signup" id="sigup-text" class="nav-link"
              >Đăng kí di</router-link
            >
           
            </li>
            <li class="nav-item">
              <router-link to="/login" id="sigin-text" class="nav-link"
              >Đăng nhập</router-link
            >
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <h1>HELP I CANT DEPLOY MY WEBSITE LOL</h1>
    
  </div>

  <router-view />
</template>

<script>

export default {
  name: "App",
  
  methods: {},
};
</script>

<style>
.bannerHeroFixed {
  border: solid 1px blue;
  height: 550px;
}

#app {
  font-family: "Reem Kufi Fun", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#sigup-text {
  font-size: 1.1em;
}
#sigup-text:hover {
  background: linear-gradient(173deg, rgb(7, 205, 255), rgb(0, 255, 102));
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  color: transparent;
}
#sigin-text {
  font-size: 1.1em;
}
#sigin-text:hover {
  background: linear-gradient(173deg, rgb(3, 159, 3), rgb(0, 255, 102));
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  color: transparent;
}

/* CSS cho hiệu ứng underline */
a.nav-item-a-fixed {
  position: relative;
  text-decoration: none;
  color: #000; /* Màu chữ */
}

a.nav-item-a-fixed::before,
a.nav-item-a-fixed::after {
  content: "";
  position: absolute;
  width: 0;
  height: 1px; /* Chiều cao của underline */
  bottom: -2px; /* Khoảng cách từ chân chữ */
  background-color: #0155c3; /* Màu underline */
  transition: width 0.3s ease-in-out;
}

a.nav-item-a-fixed::before {
  left: 50%;
  transform: translateX(-50%);
}

a.nav-item-a-fixed::after {
  right: 50%;
  transform: translateX(50%);
}

a.nav-item-a-fixed:hover::before,
a.nav-item-a-fixed:hover::after {
  width: 70%;
}

.button-join {
  margin-top: 30px;
  align-items: center;
  appearance: none;
  background-color: #0068f1;
  border-radius: 8px;
  border: #0068f1 solid 2px;
  color: #ffffff;
  cursor: pointer;
  display: inline-flex;
  height: 3em;
  justify-content: center;
  line-height: 1;
  list-style: none;
  overflow: hidden;
  padding-left: 24px;
  padding-right: 24px;
  position: relative;
  text-align: center;
  text-decoration: none;
  transition: box-shadow 0.15s, transform 0.15s;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  white-space: nowrap;
  will-change: box-shadow, transform;
  font-size: 1.5em;
}

.button-join:hover {
  box-shadow: rgba(0, 104, 241, 0.3) 0 4px 8px;
  transform: translateY(-2px);
}

.button-join:active {
  box-shadow: #000078 0 3px 7px inset;
  transform: translateY(2px);
}
.btn-more {
  color: #0068f1;
  background-color: #ffffff;
}
.btn-more:hover {
  background-color: #0068f110;
}
</style>
