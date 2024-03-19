<template>
  <div class="mx-auto bg-light overflow-hidden rounded-3">
    <div class="bg-white overflow-hidden p-4 rounded-3 flex justify-between">
      <span class="text-dark font-bold text-base md:text-xl">
        {{ ` برنامج يوم ${title} رمضان` }}</span
      >

      <v-btn @click="onItemClicked" color="primary"
        ><v-icon color="white">{{ expandIcon }}</v-icon>
      </v-btn>
    </div>
    <div v-if="isOpen" class="p-6 text-center text-dark font-bold text-base">
      <div v-for="(item, index) in user" class="pt-5 flex justify-around">
        <span>👈</span>
        <p class="text-dark">{{ item.title }}</p>
        <span>{{ item.value }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useUsersStore } from "#imports";
import { storeToRefs } from "#imports";
const userStore = useUsersStore();

defineProps(["title", "user"]);
const isOpen = ref(false);
const onItemClicked = () => {
  isOpen.value = !isOpen.value;
};

const expandIcon = computed(() =>
  isOpen.value ? "mdi-chevron-up" : "mdi-chevron-down"
);
</script>

<style scoped></style>
