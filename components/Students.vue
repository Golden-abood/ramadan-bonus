<template>
  <div class="bg-white rounded-[30px] p-3 mx-5 mb-10">
    <v-card class="overflow-hidden">
      <v-col class="max-h-[400px] overflow-y-scroll">
        <v-row
          v-for="item in user"
          class="p-3 cursor-pointer flex items-center"
          @click="$router.push(`/${item.id}`)"
        >
          <v-img
            src="/images/avatar-01.png"
            class="ml-6 rounded-full avatar border-3 border-dark border-solid"
          ></v-img>
          <div class="text-dark">
            <h4 class="font-bold">{{ item.name }}</h4>
            <p class="text-center text-subtitle-2">
              {{ item.bonus }}
            </p>
          </div>
          <v-divider
            class="mt-3 block lg:hidden"
            color="dark"
            thickness="2"
            inset
            xl:length="240"
          >
          </v-divider>
        </v-row>
      </v-col>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { useAdminStore } from "#imports";
import { storeToRefs } from "#imports";
const adminStore = useAdminStore();
const { admins, activeAdmin } = storeToRefs(adminStore);

const users = admins.value;

const activeAd = users.filter((el) => {
  return el.name === activeAdmin.value;
});
const user = ref([]);
activeAd.forEach((el) => {
  user.value = el.team;
});
</script>

<style scoped>
.avatar {
  max-width: 80px;
}
</style>
