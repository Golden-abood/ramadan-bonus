<template>
  <div>
    <div>
      <img
        src="/images/ramadan-mosque-logo-vector-white.png"
        class="max-w-[50%]"
      />
    </div>
    <form class="mt-[50px]">
      <BaseInput
        class="my-4"
        placeholder="الاسم"
        :icon="false"
        v-model="user.name"
      />
      <BaseInput
        placeholder="كلمة المرور"
        :icon="false"
        v-model="user.password"
      />
    </form>
    <v-btn
      color="primary"
      size="lg"
      class="w-[140px] text-center py-2 mt-9 btn font-weight-bold text-lg"
      @click="handleClick(user.name, user.password)"
    >
      تسجيل
    </v-btn>
    <!-- 
      @click="user.name === 'abood' && $router.push('/')"
     -->
    <v-snackbar
      v-model="snackbar"
      :close-delay="1500"
      location="bottom right"
      snackbar-color="primary"
    >
      تم تسجيل الدخول بنجاح
    </v-snackbar>
  </div>
</template>

<script setup lang="ts">
import { useAdminStore } from "#imports";
import { storeToRefs } from "#imports";
definePageMeta({
  layout: "login-layout",
});

const adminStore = useAdminStore();
const { admins, activeAdmin } = storeToRefs(adminStore);
const snackbar = ref(false);
const user = reactive({
  name: "",
  password: "",
});
const teachers = ref([]);

const names = admins.value.map((el) => {
  teachers.value.push(el.name);
});

const result = ref(false);
const comparsion = () => {
  for (let i = 0; i < teachers.value.length; i++) {
    const element = teachers.value[i];
    if (user.name === element) {
      result.value = true;
    }
  }
  return result;
};

const token = useCookie("token");

const router = useRouter();
const handleClick = (name: string, password: string) => {
  comparsion();
  if (result.value && password === "123") {
    setTimeout(() => {
      router.push("/");
    }, 2000);
    activeAdmin.value = user.name;
    token.value = "token";
    snackbar.value = true;
  }
};
</script>

<style scoped>
.btn {
  border-radius: 80px;
  box-shadow: 0px 11px 6px #00000033;
}
</style>
