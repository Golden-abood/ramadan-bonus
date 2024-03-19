<template>
  <v-btn color="primary">
    Parent activator

    <v-menu activator="parent">
      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index" :value="index">
          <v-list-item-title @click="">{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-btn>
</template>

<script lang="ts" setup>
const items = [
  { title: "lick Me" },
  { title: "Click Me" },
  { title: "Click Me" },
  { title: "Click Me 2" },
];
</script>

<style lang="scss" scoped></style>
