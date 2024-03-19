import { defineStore, storeToRefs } from "pinia";
import { useUsersStore } from "./user";
export const useAdminStore = defineStore("admin", () => {
  const userStore = useUsersStore();
  const team = [...userStore.users];
  const activeAdmin = ref("");
  const admins = ref([
    {
      id: 1,
      name: "ra_admin",
      password: "123",
      team: team,
    },
    {
      id: 2,
      name: "ab_admin",
      password: "123",
      team: team,
    },
    {
      id: 3,
      name: "ba_admin",
      password: "123",
      team: team.slice(25, 29),
    },
    {
      id: 4,
      name: "ob_admin",
      password: "123",
      team: team.slice(13, 20),
    },
    {
      id: 5,
      name: "ah_admin",
      password: "123",
      team: team.slice(0, 3),
    },
    {
      id: 6,
      name: "qu_admin",
      password: "123",
      team: team.slice(6, 11),
    },
    {
      id: 7,
      name: "om_admin",
      password: "123",
      team: team.slice(30, 31),
    },
    {
      id: 8,
      name: "bi_admin",
      password: "123",
      team: team.slice(10, 13),
    },
    {
      id: 8,
      name: "ha_admin",
      password: "123",
      team: team.slice(3, 6),
    },
  ]);

  return {
    admins,
    activeAdmin,
  };
});
