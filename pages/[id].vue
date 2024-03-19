<template>
  <v-container class="mt-8 mb-16 px-4">
    <v-card class="py-4 rounded-lg items-center gap-x-5 px-5">
      <div class="text-dark mb-5 flex justify-between">
        <div>
          <h4 class="font-bold text-base md:text-xl mb-1">{{ user.name }}</h4>
          <p class="text-subtitle-2 md:text-base mt-3">
            محصلة النقاط التراكمية : {{ user.bonus }}
          </p>
        </div>
        <div>
          <v-btn color="primary" @click="dialog = true"
            ><v-icon>mdi-plus </v-icon></v-btn
          >
        </div>
      </div>
      <div v-for="todo in user.todos" class="flex justify-around">
        <span>👈</span>
        <p>{{ todo.title }}</p>
        <span>{{ todo.value }}</span>
      </div>
    </v-card>
    <Lookup
      class="mt-5"
      v-for="item in activeUser"
      :key="item.activeDayName"
      :title="item.activeDayName"
      :user="item.toDosDay"
    />

    <v-dialog v-model="dialog">
      <v-card class="w-[100%]" prepend-icon="mdi-plus" title="إضافة برنامج">
        <v-container class="mt-5">
          <v-form class="grid grid-cols-2 text-center">
            <div class="mb-2" v-for="(item, index) in to_dos">
              <v-label class="ml-5">{{ item.title }}</v-label>
              <input
                v-model="item.value"
                type="text"
                @input="addTo_do(index, item.title, item.value)"
                class="bg-[#eaf0f0] text-center w-[50%] outline-none border-1 border-dark border-solid rounded-5 p-2"
              />
              {{ console.log(item.value) }}
            </div>
          </v-form>
        </v-container>
        <template v-slot:actions>
          <div class="mx-auto">
            <v-btn
              text="إضافة"
              class="!text-end bg-primary"
              @click="dialog = false"
            ></v-btn>
          </div>
        </template>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup lang="ts">
import { useUsersStore } from "#imports";
import { storeToRefs } from "pinia";
const userStore = useUsersStore();
const route = useRoute();
const user = userStore.users[route.params.id - 1];

const activeUser = user.todos.map((el) => {
  const activeDayName = el.day;
  const toDosDay = el.dayToDo.map((el) => {
    return el;
  });

  return { activeDayName, toDosDay };
});
const dialog = ref(false);

const read_bonus = (num: number) => {
  console.log(num);
};
const to_dos = reactive([
  {
    title: "تلاوة",
    value: ref(),
  },
  {
    title: "السنن",
    value: ref(),
  },
  {
    title: "التهجد",
    value: ref(),
  },
  {
    title: "الضحى",
    value: ref(),
  },
  {
    title: "الوتر",
    value: ref(),
  },
  {
    title: "التراويح",
    value: ref(),
  },
  {
    title: "الذكر",
    value: ref(),
  },
  {
    title: "الدراسة",
    value: ref(),
  },
]);
const values = ref([]);
const to_do_value = ref({});
const addTo_do = (index: number, type: string, value: number) => {
  values.value.push({ type: type, value: value });

  // Update the value in the store
  // user.todos[index].value = value;
};

console.log(values.value);
</script>

<style scoped></style>
