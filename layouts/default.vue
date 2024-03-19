<template>
  <v-app dir="rtl" class="back min-h-screen overflow-hidden">
    <nav class="relative">
      <div class="menu-body relative">
        <div class="absolute">
          <v-btn
            flat
            @click="drawer = !drawer"
            class="fixed top-[-90px] right-1 transparent"
          >
            <v-icon size="large" color="dark">mdi-menu</v-icon>
          </v-btn>
        </div>
        <div class="nav-and-footer-bg">
          <span
            v-if="route === '/'"
            class="text-dark font-bold text-h3 absolute top-[60px] left-[40%] z-[100000]"
          ></span>
          <div class="overlay"></div>
        </div>

        <div class="menu-bg1"></div>

        <div class="menu-bg2"></div>
        <div class="logo flex justify-center items-center bg-white">
          <img
            src="/images/ramadan-logo.jpg"
            alt=""
            class="max-w-[100%] rounded-full"
          />
        </div>
      </div>
    </nav>
    <v-navigation-drawer
      v-model="drawer"
      class="bg-primary navi w-[400px]"
      theme="dark"
      permanent
    >
      <v-btn @click="drawer = !drawer" color="transparent">
        <v-icon icon="mdi-hello" color="white">mdi-close</v-icon>
      </v-btn>
      <v-list nav class="mt-[150px]">
        <v-list-item
          prepend-icon="mdi-view-dashboard"
          title="الصفحة الرئيسية"
          to="/"
        ></v-list-item>

        <v-list-group>
          <template v-slot:activator="{ props }">
            <v-list-item
              v-bind="props"
              prepend-icon="mdi-account-box"
              title="الدورات"
            ></v-list-item>
          </template>
          <v-list-item to="/" title="حمود"></v-list-item>
          <v-list-item to="/" title="براعم كبار"></v-list-item>
          <v-list-item to="/" title="براعم ضغار"></v-list-item>
        </v-list-group>
      </v-list>

      <template v-slot:append>
        <div class="p-4 mx-5">
          <v-btn color="transparent" @click="$router.push('/login')">
            <span class="flex gap-x-6 items-center">
              <span> تسجيل الخروج </span>
              <v-icon class="rotate-180">mdi-logout</v-icon>
            </span>
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <slot />
  </v-app>
</template>

<script setup>
const drawer = ref(false);
</script>

<style lang="scss" scoped>
.navi {
  position: fixed !important;
  z-index: 10000 !important;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
}
.back {
  background-image: url("images/background.png") !important;
  background-size: cover;
  background-position: center;
}
.v-toolbar-title__placeholder {
  overflow: visible !important;
}
nav {
  position: relative;
}
nav .menu-body {
  position: relative;
  z-index: 2000;
  top: 0;
  left: 0px;
  color: white;
  text-align: end;
  padding: 100px 0px 50px 0px;
  overflow: hidden;
}
nav .menu-body .menu-bg1,
nav .menu-body .menu-bg2 {
  position: absolute;
  z-index: -1;
  top: -40%;
  right: -50%;
}

nav .menu-body .menu-bg1 {
  height: 120%;
  width: 150%;
  background-color: white;
  border-radius: 50% 100% 260% 270%;
}

nav .menu-body .menu-bg2 {
  height: 128%;
  width: 150%;
  background-color: #9792e9;
  z-index: -100;
  border-radius: 250% 0% 90% 270%;
  box-shadow: 1px 1px 30px 0px #9792e9;
}
.logo {
  position: absolute;
  top: 20%;
  left: 5%;
  border: 4px solid #707070;
  width: 100px;
  height: 100px;
  border-radius: 50px;
}
</style>
