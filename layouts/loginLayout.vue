<template>
  <v-app dir="rtl" class="back">
    <div class="text-center m-auto">
      <slot></slot>
    </div>
  </v-app>
</template>

<script setup></script>

<style lang="scss" scoped>
.back {
  background-image: url("/images/background.png") !important;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  height: 100vh;
}
</style>
