<template>
  <div dir="rtl">
    <div class="relative">
      <input
        type="text"
        :class="icon ? 'w-[350px] mr-8 lg:mr-8' : 'w-[80%]'"
        class="h-[20px] bg-white p-7 rounded-8 outline-0 text-dark font-bold"
        :placeholder="placeholder"
        :value="modelValue"
        @input="emit('update:modelValue', $event.target.value)"
      />
      <v-btn
        v-if="icon"
        size="small"
        class="bg-primary text-white !rounded-full absolute py-6 top-0 left-[57px]"
      >
        <v-icon color="white" size="large" class="mt-[-9px]"
          >mdi-magnify
        </v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  placeholder: {
    required: true,
    type: String,
  },
  icon: {
    required: true,
    default: true,
    type: Boolean,
  },
  modelValue: {
    type: String,
  },
});
const emit = defineEmits(["update:modelValue"]);
</script>

<style scoped>
::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #707070;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  color: #707070;
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: #707070;
}
input {
  box-shadow: 0px 11px 6px #00000033;
}

.v-icon {
  color: white !important;
  font-size: 20px !important;
}
@media (max-width: 400px) {
  input {
    width: 300px;
  }
}
</style>
