<template>
  <div class="home">
   <!--BRANDING-->
   <section class="bannerHeroFixed" style="">
    <div class="container" style="height: 100%">
      <div class="row d-flex" style="height: 100%">
        <div
          style=" 
            width: 50%;
            height: 100%;
          "
        >
          <div
            style="
            display: inline-block;
              width: 100%;
              height: 70%;
            "
          >
            <h1
              style="
                text-align: left;
                font-weight: 700;
                font-size: 4.5em;
                margin-top: 1em;
                color: #0f0f0f;
              "
            >
              Học để thay đổi,<br />
              học để thành công
            </h1>
            <p
              style="
                text-align: left;
                font-weight: 400;
                font-size: 1.2em;
                color: #0f0f0f;
              "
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              sunt commodi illum, illo fuga repellendus dicta doloribus sint
              asperiores, perferendis qui dolores tempore earum excepturi!
            </p>
          </div>
          <div
            class="d-flex"
            style="
              justify-content: space-between;
              width: 100%;
              height: 30%;
            "
          >
            <button class="button-join" @click="showModal = true">
              Tham gia ngay!
            </button>
            <!-- Sử dụng component modal login -->
            <LoginModal
              style="z-index: 9999"
              v-if="showModal"
              @closeModal="showModal = false"
            />
            <button class="button-join btn-more">
              Tìm hiểu thêm về các khóa học
            </button>
          </div>
        </div>
        <div class="d-flex justify-content-center"
          style=" width: 50%; height: 100%"
        >
        <div style=" display: flex; justify-content: center; align-items: center;">
          <div class="left-img-student">
            <div class="border-img-student">
              <img src="../assets/left-logo-student-rmbg.png" alt="">
            </div>
          </div>
        </div>        
      </div>
      </div>
    </div>
  </section>
  
  <div class="container d-flex flex-wrap" style="border: solid 1px green">
    <!--Left-side-->
    <div>
      <div style="width: 300px; height: 600px; border: solid 1px red"></div>
    </div>

    <!--Main content-->
    <div>
      <div style="width: 300px; height: 600px; border: solid 1px red"></div>
    </div>
  </div>
  </div>
</template>

<script>
import LoginModal from "@/components/ShowModalLogin.vue";

export default {
  name: 'HomeView',
  components: {
    LoginModal,
  },
  data() {
    return {
      showModal: false,
      // Các data khác nếu cần thiết
    };
  },
}
</script>

<style>

.bannerHeroFixed {
  border: solid 1px blue;
  height: 550px;
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
.left-img-student{
  width: 500px;
  height: 420px;
}
.border-img-student{
  background: linear-gradient(213deg, rgb(115, 218, 255), rgb(60, 160, 226), rgb(0, 3, 204));
  border-radius: 20% 80% 56% 44% / 78% 64% 36% 22% ;
  overflow: hidden;
}
</style>
