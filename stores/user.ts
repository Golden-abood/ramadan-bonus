import { defineStore } from "pinia";

export const useUsersStore = defineStore("user", () => {
  const users = [
    {
      id: 1,
      name: "مستخدم-1", // bashar
      bonus: 0,
      todos: [
        {
          day: 6,
          dayToDo: [
            {
              title: "تلاوة",
              value: 0,
              to_do_bonus: 0,
            },
            {
              title: "السنن",
              value: 0,
              to_do_bonus: 0,
            },
            {
              title: "التهجد",
              value: 0,
              to_do_bonus: 0,
            },
            {
              title: "الضحى",
              value: 0,
              to_do_bonus: 0,
            },
            {
              title: "الوتر",
              value: 0,
              to_do_bonus: 0,
            },
            {
              title: "التراويح",
              value: 0,
              to_do_bonus: 0,
            },
            {
              title: "الذكر",
              value: 0,
              to_do_bonus: 0,
            },
            {
              title: "الدراسة",
              value: 0,
              to_do_bonus: 0,
            },
          ],
        },
        {
          day: 7,
          dayToDo: [
            {
              title: "تلاوة",
              value: 0,
              to_do_bonus: 0,
            },
            {
              title: "السنن",
              value: 0,
              to_do_bonus: 0,
            },
            {
              title: "التهجد",
              value: 0,
              to_do_bonus: 0,
            },
            {
              title: "الضحى",
              value: 0,
              to_do_bonus: 0,
            },
            {
              title: "الوتر",
              value: 0,
              to_do_bonus: 0,
            },
            {
              title: "التراويح",
              value: 0,
              to_do_bonus: 0,
            },
            {
              title: "الذكر",
              value: 0,
              to_do_bonus: 0,
            },
            {
              title: "الدراسة",
              value: 0,
              to_do_bonus: 0,
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "مستخدم-2", // ghassan
      bonus: 0,
      todos: [
        {
          day: 6,
          dayToDo: [
            {
              title: "تلاوة",
              value: 0,
            },
            {
              title: "السنن",
              value: 0,
            },
            {
              title: "التهجد",
              value: 0,
            },
            {
              title: "الضحى",
              value: 0,
            },
            {
              title: "الوتر",
              value: 0,
            },
            {
              title: "التراويح",
              value: 0,
            },
            {
              title: "الذكر",
              value: 0,
            },
            {
              title: "الدراسة",
              value: 0,
            },
          ],
        },
        {
          day: 6,
          dayToDo: [
            {
              title: "تلاوة",
              value: 0,
            },
            {
              title: "السنن",
              value: 0,
            },
            {
              title: "التهجد",
              value: 0,
            },
            {
              title: "الضحى",
              value: 0,
            },
            {
              title: "الوتر",
              value: 0,
            },
            {
              title: "التراويح",
              value: 0,
            },
            {
              title: "الذكر",
              value: 0,
            },
            {
              title: "الدراسة",
              value: 0,
            },
          ],
        },
      ],
    },
    {
      id: 3,
      name: "مستخدم-3", // jawad
      bonus: 0,
      todos: [
        {
          day: 6,
          dayToDo: [
            {
              title: "تلاوة",
              value: 0,
            },
            {
              title: "السنن",
              value: 0,
            },
            {
              title: "التهجد",
              value: 0,
            },
            {
              title: "الضحى",
              value: 0,
            },
            {
              title: "الوتر",
              value: 0,
            },
            {
              title: "التراويح",
              value: 0,
            },
            {
              title: "الذكر",
              value: 0,
            },
            {
              title: "الدراسة",
              value: 0,
            },
          ],
        },
        {
          day: 6,
          dayToDo: [
            {
              title: "تلاوة",
              value: 0,
            },
            {
              title: "السنن",
              value: 0,
            },
            {
              title: "التهجد",
              value: 0,
            },
            {
              title: "الضحى",
              value: 0,
            },
            {
              title: "الوتر",
              value: 0,
            },
            {
              title: "التراويح",
              value: 0,
            },
            {
              title: "الذكر",
              value: 0,
            },
            {
              title: "الدراسة",
              value: 0,
            },
          ],
        },
      ],
    },
    {
      id: 4,
      name: "مستخدم-4", // joud
      bonus: 0,
      todos: [
        {
          day: 6,
          dayToDo: [
            {
              title: "تلاوة",
              value: 0,
            },
            {
              title: "السنن",
              value: 0,
            },
            {
              title: "التهجد",
              value: 0,
            },
            {
              title: "الضحى",
              value: 0,
            },
            {
              title: "الوتر",
              value: 0,
            },
            {
              title: "التراويح",
              value: 0,
            },
            {
              title: "الذكر",
              value: 0,
            },
            {
              title: "الدراسة",
              value: 0,
            },
          ],
        },
        {
          day: 6,
          dayToDo: [
            {
              title: "تلاوة",
              value: 0,
            },
            {
              title: "السنن",
              value: 0,
            },
            {
              title: "التهجد",
              value: 0,
            },
            {
              title: "الضحى",
              value: 0,
            },
            {
              title: "الوتر",
              value: 0,
            },
            {
              title: "التراويح",
              value: 0,
            },
            {
              title: "الذكر",
              value: 0,
            },
            {
              title: "الدراسة",
              value: 0,
            },
          ],
        },
      ],
    },
    {
      id: 5,
      name: "مستخدم-5", // shadi
      bonus: 0,
      todos: [
        {
          day: 6,
          dayToDo: [
            {
              title: "تلاوة",
              value: 0,
            },
            {
              title: "السنن",
              value: 0,
            },
            {
              title: "التهجد",
              value: 0,
            },
            {
              title: "الضحى",
              value: 0,
            },
            {
              title: "الوتر",
              value: 0,
            },
            {
              title: "التراويح",
              value: 0,
            },
            {
              title: "الذكر",
              value: 0,
            },
            {
              title: "الدراسة",
              value: 0,
            },
          ],
        },
        {
          day: 6,
          dayToDo: [
            {
              title: "تلاوة",
              value: 0,
            },
            {
              title: "السنن",
              value: 0,
            },
            {
              title: "التهجد",
              value: 0,
            },
            {
              title: "الضحى",
              value: 0,
            },
            {
              title: "الوتر",
              value: 0,
            },
            {
              title: "التراويح",
              value: 0,
            },
            {
              title: "الذكر",
              value: 0,
            },
            {
              title: "الدراسة",
              value: 0,
            },
          ],
        },
      ],
    },
    {
      id: 6,
      name: "مستخدم-6", // moh-ali
      bonus: 0,
      todos: [
        {
          day: 6,
          dayToDo: [
            {
              title: "تلاوة",
              value: 0,
            },
            {
              title: "السنن",
              value: 0,
            },
            {
              title: "التهجد",
              value: 0,
            },
            {
              title: "الضحى",
              value: 0,
            },
            {
              title: "الوتر",
              value: 0,
            },
            {
              title: "التراويح",
              value: 0,
            },
            {
              title: "الذكر",
              value: 0,
            },
            {
              title: "الدراسة",
              value: 0,
            },
          ],
        },
        {
          day: 6,
          dayToDo: [
            {
              title: "تلاوة",
              value: 0,
            },
            {
              title: "السنن",
              value: 0,
            },
            {
              title: "التهجد",
              value: 0,
            },
            {
              title: "الضحى",
              value: 0,
            },
            {
              title: "الوتر",
              value: 0,
            },
            {
              title: "التراويح",
              value: 0,
            },
            {
              title: "الذكر",
              value: 0,
            },
            {
              title: "الدراسة",
              value: 0,
            },
          ],
        },
      ],
    },
    {
      id: 7,
      name: "مستخدم-7", // basha
      bonus: 0,
      todos: [
        {
          day: 6,
          dayToDo: [
            {
              title: "تلاوة",
              value: 0,
            },
            {
              title: "السنن",
              value: 0,
            },
            {
              title: "التهجد",
              value: 0,
            },
            {
              title: "الضحى",
              value: 0,
            },
            {
              title: "الوتر",
              value: 0,
            },
            {
              title: "التراويح",
              value: 0,
            },
            {
              title: "الذكر",
              value: 0,
            },
            {
              title: "الدراسة",
              value: 0,
            },
          ],
        },
        {
          day: 6,
          dayToDo: [
            {
              title: "تلاوة",
              value: 0,
            },
            {
              title: "السنن",
              value: 0,
            },
            {
              title: "التهجد",
              value: 0,
            },
            {
              title: "الضحى",
              value: 0,
            },
            {
              title: "الوتر",
              value: 0,
            },
            {
              title: "التراويح",
              value: 0,
            },
            {
              title: "الذكر",
              value: 0,
            },
            {
              title: "الدراسة",
              value: 0,
            },
          ],
        },
      ],
    },
    {
      id: 8,
      name: "مستخدم-8", // bashier
      bonus: 0,
      todos: [
        {
          day: 6,
          dayToDo: [
            {
              title: "تلاوة",
              value: 0,
            },
            {
              title: "السنن",
              value: 0,
            },
            {
              title: "التهجد",
              value: 0,
            },
            {
              title: "الضحى",
              value: 0,
            },
            {
              title: "الوتر",
              value: 0,
            },
            {
              title: "التراويح",
              value: 0,
            },
            {
              title: "الذكر",
              value: 0,
            },
            {
              title: "الدراسة",
              value: 0,
            },
          ],
        },
        {
          day: 6,
          dayToDo: [
            {
              title: "تلاوة",
              value: 0,
            },
            {
              title: "السنن",
              value: 0,
            },
            {
              title: "التهجد",
              value: 0,
            },
            {
              title: "الضحى",
              value: 0,
            },
            {
              title: "الوتر",
              value: 0,
            },
            {
              title: "التراويح",
              value: 0,
            },
            {
              title: "الذكر",
              value: 0,
            },
            {
              title: "الدراسة",
              value: 0,
            },
          ],
        },
      ],
    },
    {
      id: 9,
      name: "مستخدم-9", // saleh
      bonus: 0,
      todos: [
        {
          day: 6,
          dayToDo: [
            {
              title: "تلاوة",
              value: 0,
            },
            {
              title: "السنن",
              value: 0,
            },
            {
              title: "التهجد",
              value: 0,
            },
            {
              title: "الضحى",
              value: 0,
            },
            {
              title: "الوتر",
              value: 0,
            },
            {
              title: "التراويح",
              value: 0,
            },
            {
              title: "الذكر",
              value: 0,
            },
            {
              title: "الدراسة",
              value: 0,
            },
          ],
        },
        {
          day: 6,
          dayToDo: [
            {
              title: "تلاوة",
              value: 0,
            },
            {
              title: "السنن",
              value: 0,
            },
            {
              title: "التهجد",
              value: 0,
            },
            {
              title: "الضحى",
              value: 0,
            },
            {
              title: "الوتر",
              value: 0,
            },
            {
              title: "التراويح",
              value: 0,
            },
            {
              title: "الذكر",
              value: 0,
            },
            {
              title: "الدراسة",
              value: 0,
            },
          ],
        },
      ],
    },
    {
      id: 10,
      name: "مستخدم-10", // emad
      bonus: 0,
      todos: [
        {
          day: 6,
          dayToDo: [
            {
              title: "تلاوة",
              value: 0,
            },
            {
              title: "السنن",
              value: 0,
            },
            {
              title: "التهجد",
              value: 0,
            },
            {
              title: "الضحى",
              value: 0,
            },
            {
              title: "الوتر",
              value: 0,
            },
            {
              title: "التراويح",
              value: 0,
            },
            {
              title: "الذكر",
              value: 0,
            },
            {
              title: "الدراسة",
              value: 0,
            },
          ],
        },
        {
          day: 6,
          dayToDo: [
            {
              title: "تلاوة",
              value: 0,
            },
            {
              title: "السنن",
              value: 0,
            },
            {
              title: "التهجد",
              value: 0,
            },
            {
              title: "الضحى",
              value: 0,
            },
            {
              title: "الوتر",
              value: 0,
            },
            {
              title: "التراويح",
              value: 0,
            },
            {
              title: "الذكر",
              value: 0,
            },
            {
              title: "الدراسة",
              value: 0,
            },
          ],
        },
      ],
    },
    {
      id: 11,
      name: "مستخدم-11", // alaa
      bonus: 0,
      todos: [
        {
          day: 6,
          dayToDo: [
            {
              title: "تلاوة",
              value: 0,
            },
            {
              title: "السنن",
              value: 0,
            },
            {
              title: "التهجد",
              value: 0,
            },
            {
              title: "الضحى",
              value: 0,
            },
            {
              title: "الوتر",
              value: 0,
            },
            {
              title: "التراويح",
              value: 0,
            },
            {
              title: "الذكر",
              value: 0,
            },
            {
              title: "الدراسة",
              value: 0,
            },
          ],
        },
        {
          day: 6,
          dayToDo: [
            {
              title: "تلاوة",
              value: 0,
            },
            {
              title: "السنن",
              value: 0,
            },
            {
              title: "التهجد",
              value: 0,
            },
            {
              title: "الضحى",
              value: 0,
            },
            {
              title: "الوتر",
              value: 0,
            },
            {
              title: "التراويح",
              value: 0,
            },
            {
              title: "الذكر",
              value: 0,
            },
            {
              title: "الدراسة",
              value: 0,
            },
          ],
        },
      ],
    },
    {
      id: 12,
      name: "مستخدم-12", // hamza
      bonus: 0,
      todos: [
        {
          day: 6,
          dayToDo: [
            {
              title: "تلاوة",
              value: 0,
            },
            {
              title: "السنن",
              value: 0,
            },
            {
              title: "التهجد",
              value: 0,
            },
            {
              title: "الضحى",
              value: 0,
            },
            {
              title: "الوتر",
              value: 0,
            },
            {
              title: "التراويح",
              value: 0,
            },
            {
              title: "الذكر",
              value: 0,
            },
            {
              title: "الدراسة",
              value: 0,
            },
          ],
        },
        {
          day: 6,
          dayToDo: [
            {
              title: "تلاوة",
              value: 0,
            },
            {
              title: "السنن",
              value: 0,
            },
            {
              title: "التهجد",
              value: 0,
            },
            {
              title: "الضحى",
              value: 0,
            },
            {
              title: "الوتر",
              value: 0,
            },
            {
              title: "التراويح",
              value: 0,
            },
            {
              title: "الذكر",
              value: 0,
            },
            {
              title: "الدراسة",
              value: 0,
            },
          ],
        },
      ],
    },
    {
      id: 13,
      name: "مستخدم-13", // zain-t
      bonus: 0,
      todos: [
        {
          day: 6,
          dayToDo: [
            {
              title: "تلاوة",
              value: 0,
            },
            {
              title: "السنن",
              value: 0,
            },
            {
              title: "التهجد",
              value: 0,
            },
            {
              title: "الضحى",
              value: 0,
            },
            {
              title: "الوتر",
              value: 0,
            },
            {
              title: "التراويح",
              value: 0,
            },
            {
              title: "الذكر",
              value: 0,
            },
            {
              title: "الدراسة",
              value: 0,
            },
          ],
        },
        {
          day: 6,
          dayToDo: [
            {
              title: "تلاوة",
              value: 0,
            },
            {
              title: "السنن",
              value: 0,
            },
            {
              title: "التهجد",
              value: 0,
            },
            {
              title: "الضحى",
              value: 0,
            },
            {
              title: "الوتر",
              value: 0,
            },
            {
              title: "التراويح",
              value: 0,
            },
            {
              title: "الذكر",
              value: 0,
            },
            {
              title: "الدراسة",
              value: 0,
            },
          ],
        },
      ],
    },
    {
      id: 14,
      name: "مستخدم-14", // snno
      bonus: 0,
      todos: [
        {
          day: 6,
          dayToDo: [
            {
              title: "تلاوة",
              value: 0,
            },
            {
              title: "السنن",
              value: 0,
            },
            {
              title: "التهجد",
              value: 0,
            },
            {
              title: "الضحى",
              value: 0,
            },
            {
              title: "الوتر",
              value: 0,
            },
            {
              title: "التراويح",
              value: 0,
            },
            {
              title: "الذكر",
              value: 0,
            },
            {
              title: "الدراسة",
              value: 0,
            },
          ],
        },
        {
          day: 6,
          dayToDo: [
            {
              title: "تلاوة",
              value: 0,
            },
            {
              title: "السنن",
              value: 0,
            },
            {
              title: "التهجد",
              value: 0,
            },
            {
              title: "الضحى",
              value: 0,
            },
            {
              title: "الوتر",
              value: 0,
            },
            {
              title: "التراويح",
              value: 0,
            },
            {
              title: "الذكر",
              value: 0,
            },
            {
              title: "الدراسة",
              value: 0,
            },
          ],
        },
      ],
    },
    {
      id: 15,
      name: "مستخدم-15", // hamwi
      bonus: 0,
      todos: [
        {
          day: 6,
          dayToDo: [
            {
              title: "تلاوة",
              value: 0,
            },
            {
              title: "السنن",
              value: 0,
            },
            {
              title: "التهجد",
              value: 0,
            },
            {
              title: "الضحى",
              value: 0,
            },
            {
              title: "الوتر",
              value: 0,
            },
            {
              title: "التراويح",
              value: 0,
            },
            {
              title: "الذكر",
              value: 0,
            },
            {
              title: "الدراسة",
              value: 0,
            },
          ],
        },
        {
          day: 6,
          dayToDo: [
            {
              title: "تلاوة",
              value: 0,
            },
            {
              title: "السنن",
              value: 0,
            },
            {
              title: "التهجد",
              value: 0,
            },
            {
              title: "الضحى",
              value: 0,
            },
            {
              title: "الوتر",
              value: 0,
            },
            {
              title: "التراويح",
              value: 0,
            },
            {
              title: "الذكر",
              value: 0,
            },
            {
              title: "الدراسة",
              value: 0,
            },
          ],
        },
      ],
    },
    {
      id: 16,
      name: "مستخدم-16", // abdalrahaman
      bonus: 0,
      todos: [
        {
          day: 6,
          dayToDo: [
            {
              title: "تلاوة",
              value: 0,
            },
            {
              title: "السنن",
              value: 0,
            },
            {
              title: "التهجد",
              value: 0,
            },
            {
              title: "الضحى",
              value: 0,
            },
            {
              title: "الوتر",
              value: 0,
            },
            {
              title: "التراويح",
              value: 0,
            },
            {
              title: "الذكر",
              value: 0,
            },
            {
              title: "الدراسة",
              value: 0,
            },
          ],
        },
        {
          day: 6,
          dayToDo: [
            {
              title: "تلاوة",
              value: 0,
            },
            {
              title: "السنن",
              value: 0,
            },
            {
              title: "التهجد",
              value: 0,
            },
            {
              title: "الضحى",
              value: 0,
            },
            {
              title: "الوتر",
              value: 0,
            },
            {
              title: "التراويح",
              value: 0,
            },
            {
              title: "الذكر",
              value: 0,
            },
            {
              title: "الدراسة",
              value: 0,
            },
          ],
        },
      ],
    },
    {
      id: 17,
      name: "مستخدم-17", // hashem
      bonus: 0,
      todos: [
        {
          day: 6,
          dayToDo: [
            {
              title: "تلاوة",
              value: 0,
            },
            {
              title: "السنن",
              value: 0,
            },
            {
              title: "التهجد",
              value: 0,
            },
            {
              title: "الضحى",
              value: 0,
            },
            {
              title: "الوتر",
              value: 0,
            },
            {
              title: "التراويح",
              value: 0,
            },
            {
              title: "الذكر",
              value: 0,
            },
            {
              title: "الدراسة",
              value: 0,
            },
          ],
        },
        {
          day: 6,
          dayToDo: [
            {
              title: "تلاوة",
              value: 0,
            },
            {
              title: "السنن",
              value: 0,
            },
            {
              title: "التهجد",
              value: 0,
            },
            {
              title: "الضحى",
              value: 0,
            },
            {
              title: "الوتر",
              value: 0,
            },
            {
              title: "التراويح",
              value: 0,
            },
            {
              title: "الذكر",
              value: 0,
            },
            {
              title: "الدراسة",
              value: 0,
            },
          ],
        },
      ],
    },
    {
      id: 18,
      name: "مستخدم-18", // hamza
      bonus: 0,
      todos: [
        {
          day: 6,
          dayToDo: [
            {
              title: "تلاوة",
              value: 0,
            },
            {
              title: "السنن",
              value: 0,
            },
            {
              title: "التهجد",
              value: 0,
            },
            {
              title: "الضحى",
              value: 0,
            },
            {
              title: "الوتر",
              value: 0,
            },
            {
              title: "التراويح",
              value: 0,
            },
            {
              title: "الذكر",
              value: 0,
            },
            {
              title: "الدراسة",
              value: 0,
            },
          ],
        },
        {
          day: 6,
          dayToDo: [
            {
              title: "تلاوة",
              value: 0,
            },
            {
              title: "السنن",
              value: 0,
            },
            {
              title: "التهجد",
              value: 0,
            },
            {
              title: "الضحى",
              value: 0,
            },
            {
              title: "الوتر",
              value: 0,
            },
            {
              title: "التراويح",
              value: 0,
            },
            {
              title: "الذكر",
              value: 0,
            },
            {
              title: "الدراسة",
              value: 0,
            },
          ],
        },
      ],
    },
    {
      id: 19,
      name: "مستخدم-19", // anas ali
      bonus: 0,
      todos: [
        {
          day: 6,
          dayToDo: [
            {
              title: "تلاوة",
              value: 0,
            },
            {
              title: "السنن",
              value: 0,
            },
            {
              title: "التهجد",
              value: 0,
            },
            {
              title: "الضحى",
              value: 0,
            },
            {
              title: "الوتر",
              value: 0,
            },
            {
              title: "التراويح",
              value: 0,
            },
            {
              title: "الذكر",
              value: 0,
            },
            {
              title: "الدراسة",
              value: 0,
            },
          ],
        },
        {
          day: 6,
          dayToDo: [
            {
              title: "تلاوة",
              value: 0,
            },
            {
              title: "السنن",
              value: 0,
            },
            {
              title: "التهجد",
              value: 0,
            },
            {
              title: "الضحى",
              value: 0,
            },
            {
              title: "الوتر",
              value: 0,
            },
            {
              title: "التراويح",
              value: 0,
            },
            {
              title: "الذكر",
              value: 0,
            },
            {
              title: "الدراسة",
              value: 0,
            },
          ],
        },
      ],
    },
    {
      id: 20,
      name: "مستخدم-20", // omar
      bonus: 0,
      todos: [
        {
          day: 6,
          dayToDo: [
            {
              title: "تلاوة",
              value: 0,
            },
            {
              title: "السنن",
              value: 0,
            },
            {
              title: "التهجد",
              value: 0,
            },
            {
              title: "الضحى",
              value: 0,
            },
            {
              title: "الوتر",
              value: 0,
            },
            {
              title: "التراويح",
              value: 0,
            },
            {
              title: "الذكر",
              value: 0,
            },
            {
              title: "الدراسة",
              value: 0,
            },
          ],
        },
        {
          day: 6,
          dayToDo: [
            {
              title: "تلاوة",
              value: 0,
            },
            {
              title: "السنن",
              value: 0,
            },
            {
              title: "التهجد",
              value: 0,
            },
            {
              title: "الضحى",
              value: 0,
            },
            {
              title: "الوتر",
              value: 0,
            },
            {
              title: "التراويح",
              value: 0,
            },
            {
              title: "الذكر",
              value: 0,
            },
            {
              title: "الدراسة",
              value: 0,
            },
          ],
        },
      ],
    },
    {
      id: 21,
      name: "مستخدم-21", // obada
      bonus: 0,
      todos: [
        {
          day: 6,
          dayToDo: [
            {
              title: "تلاوة",
              value: 0,
            },
            {
              title: "السنن",
              value: 0,
            },
            {
              title: "التهجد",
              value: 0,
            },
            {
              title: "الضحى",
              value: 0,
            },
            {
              title: "الوتر",
              value: 0,
            },
            {
              title: "التراويح",
              value: 0,
            },
            {
              title: "الذكر",
              value: 0,
            },
            {
              title: "الدراسة",
              value: 0,
            },
          ],
        },
        {
          day: 6,
          dayToDo: [
            {
              title: "تلاوة",
              value: 0,
            },
            {
              title: "السنن",
              value: 0,
            },
            {
              title: "التهجد",
              value: 0,
            },
            {
              title: "الضحى",
              value: 0,
            },
            {
              title: "الوتر",
              value: 0,
            },
            {
              title: "التراويح",
              value: 0,
            },
            {
              title: "الذكر",
              value: 0,
            },
            {
              title: "الدراسة",
              value: 0,
            },
          ],
        },
      ],
    },
    {
      id: 22,
      name: "مستخدم-22", // hozani
      bonus: 0,
      todos: [
        {
          day: 6,
          dayToDo: [
            {
              title: "تلاوة",
              value: 0,
            },
            {
              title: "السنن",
              value: 0,
            },
            {
              title: "التهجد",
              value: 0,
            },
            {
              title: "الضحى",
              value: 0,
            },
            {
              title: "الوتر",
              value: 0,
            },
            {
              title: "التراويح",
              value: 0,
            },
            {
              title: "الذكر",
              value: 0,
            },
            {
              title: "الدراسة",
              value: 0,
            },
          ],
        },
        {
          day: 6,
          dayToDo: [
            {
              title: "تلاوة",
              value: 0,
            },
            {
              title: "السنن",
              value: 0,
            },
            {
              title: "التهجد",
              value: 0,
            },
            {
              title: "الضحى",
              value: 0,
            },
            {
              title: "الوتر",
              value: 0,
            },
            {
              title: "التراويح",
              value: 0,
            },
            {
              title: "الذكر",
              value: 0,
            },
            {
              title: "الدراسة",
              value: 0,
            },
          ],
        },
      ],
    },
    {
      id: 23,
      name: "مستخدم-23", // anis
      bonus: 0,
      todos: [
        {
          day: 6,
          dayToDo: [
            {
              title: "تلاوة",
              value: 0,
            },
            {
              title: "السنن",
              value: 0,
            },
            {
              title: "التهجد",
              value: 0,
            },
            {
              title: "الضحى",
              value: 0,
            },
            {
              title: "الوتر",
              value: 0,
            },
            {
              title: "التراويح",
              value: 0,
            },
            {
              title: "الذكر",
              value: 0,
            },
            {
              title: "الدراسة",
              value: 0,
            },
          ],
        },
        {
          day: 6,
          dayToDo: [
            {
              title: "تلاوة",
              value: 0,
            },
            {
              title: "السنن",
              value: 0,
            },
            {
              title: "التهجد",
              value: 0,
            },
            {
              title: "الضحى",
              value: 0,
            },
            {
              title: "الوتر",
              value: 0,
            },
            {
              title: "التراويح",
              value: 0,
            },
            {
              title: "الذكر",
              value: 0,
            },
            {
              title: "الدراسة",
              value: 0,
            },
          ],
        },
      ],
    },
    {
      id: 24,
      name: "مستخدم-24", // wael
      bonus: 0,
      todos: [
        {
          day: 6,
          dayToDo: [
            {
              title: "تلاوة",
              value: 0,
            },
            {
              title: "السنن",
              value: 0,
            },
            {
              title: "التهجد",
              value: 0,
            },
            {
              title: "الضحى",
              value: 0,
            },
            {
              title: "الوتر",
              value: 0,
            },
            {
              title: "التراويح",
              value: 0,
            },
            {
              title: "الذكر",
              value: 0,
            },
            {
              title: "الدراسة",
              value: 0,
            },
          ],
        },
        {
          day: 6,
          dayToDo: [
            {
              title: "تلاوة",
              value: 0,
            },
            {
              title: "السنن",
              value: 0,
            },
            {
              title: "التهجد",
              value: 0,
            },
            {
              title: "الضحى",
              value: 0,
            },
            {
              title: "الوتر",
              value: 0,
            },
            {
              title: "التراويح",
              value: 0,
            },
            {
              title: "الذكر",
              value: 0,
            },
            {
              title: "الدراسة",
              value: 0,
            },
          ],
        },
      ],
    },
    {
      id: 25,
      name: "مستخدم-25", // yehia
      bonus: 0,
      todos: [
        {
          day: 6,
          dayToDo: [
            {
              title: "تلاوة",
              value: 0,
            },
            {
              title: "السنن",
              value: 0,
            },
            {
              title: "التهجد",
              value: 0,
            },
            {
              title: "الضحى",
              value: 0,
            },
            {
              title: "الوتر",
              value: 0,
            },
            {
              title: "التراويح",
              value: 0,
            },
            {
              title: "الذكر",
              value: 0,
            },
            {
              title: "الدراسة",
              value: 0,
            },
          ],
        },
        {
          day: 6,
          dayToDo: [
            {
              title: "تلاوة",
              value: 0,
            },
            {
              title: "السنن",
              value: 0,
            },
            {
              title: "التهجد",
              value: 0,
            },
            {
              title: "الضحى",
              value: 0,
            },
            {
              title: "الوتر",
              value: 0,
            },
            {
              title: "التراويح",
              value: 0,
            },
            {
              title: "الذكر",
              value: 0,
            },
            {
              title: "الدراسة",
              value: 0,
            },
          ],
        },
      ],
    },
    {
      id: 26,
      name: "مستخدم-26", // dakak
      bonus: 0,
      todos: [
        {
          day: 6,
          dayToDo: [
            {
              title: "تلاوة",
              value: 0,
            },
            {
              title: "السنن",
              value: 0,
            },
            {
              title: "التهجد",
              value: 0,
            },
            {
              title: "الضحى",
              value: 0,
            },
            {
              title: "الوتر",
              value: 0,
            },
            {
              title: "التراويح",
              value: 0,
            },
            {
              title: "الذكر",
              value: 0,
            },
            {
              title: "الدراسة",
              value: 0,
            },
          ],
        },
        {
          day: 6,
          dayToDo: [
            {
              title: "تلاوة",
              value: 0,
            },
            {
              title: "السنن",
              value: 0,
            },
            {
              title: "التهجد",
              value: 0,
            },
            {
              title: "الضحى",
              value: 0,
            },
            {
              title: "الوتر",
              value: 0,
            },
            {
              title: "التراويح",
              value: 0,
            },
            {
              title: "الذكر",
              value: 0,
            },
            {
              title: "الدراسة",
              value: 0,
            },
          ],
        },
      ],
    },
    {
      id: 27,
      name: "مستخدم-27", // ghazi
      bonus: 0,
      todos: [
        {
          day: 6,
          dayToDo: [
            {
              title: "تلاوة",
              value: 0,
            },
            {
              title: "السنن",
              value: 0,
            },
            {
              title: "التهجد",
              value: 0,
            },
            {
              title: "الضحى",
              value: 0,
            },
            {
              title: "الوتر",
              value: 0,
            },
            {
              title: "التراويح",
              value: 0,
            },
            {
              title: "الذكر",
              value: 0,
            },
            {
              title: "الدراسة",
              value: 0,
            },
          ],
        },
        {
          day: 6,
          dayToDo: [
            {
              title: "تلاوة",
              value: 0,
            },
            {
              title: "السنن",
              value: 0,
            },
            {
              title: "التهجد",
              value: 0,
            },
            {
              title: "الضحى",
              value: 0,
            },
            {
              title: "الوتر",
              value: 0,
            },
            {
              title: "التراويح",
              value: 0,
            },
            {
              title: "الذكر",
              value: 0,
            },
            {
              title: "الدراسة",
              value: 0,
            },
          ],
        },
      ],
    },
    {
      id: 28,
      name: "مستخدم-28", // afif
      bonus: 0,
      todos: [
        {
          day: 6,
          dayToDo: [
            {
              title: "تلاوة",
              value: 0,
            },
            {
              title: "السنن",
              value: 0,
            },
            {
              title: "التهجد",
              value: 0,
            },
            {
              title: "الضحى",
              value: 0,
            },
            {
              title: "الوتر",
              value: 0,
            },
            {
              title: "التراويح",
              value: 0,
            },
            {
              title: "الذكر",
              value: 0,
            },
            {
              title: "الدراسة",
              value: 0,
            },
          ],
        },
        {
          day: 6,
          dayToDo: [
            {
              title: "تلاوة",
              value: 0,
            },
            {
              title: "السنن",
              value: 0,
            },
            {
              title: "التهجد",
              value: 0,
            },
            {
              title: "الضحى",
              value: 0,
            },
            {
              title: "الوتر",
              value: 0,
            },
            {
              title: "التراويح",
              value: 0,
            },
            {
              title: "الذكر",
              value: 0,
            },
            {
              title: "الدراسة",
              value: 0,
            },
          ],
        },
      ],
    },
    {
      id: 29,
      name: "مستخدم-29", // zaid-m
      bonus: 0,
      todos: [
        {
          day: 6,
          dayToDo: [
            {
              title: "تلاوة",
              value: 0,
            },
            {
              title: "السنن",
              value: 0,
            },
            {
              title: "التهجد",
              value: 0,
            },
            {
              title: "الضحى",
              value: 0,
            },
            {
              title: "الوتر",
              value: 0,
            },
            {
              title: "التراويح",
              value: 0,
            },
            {
              title: "الذكر",
              value: 0,
            },
            {
              title: "الدراسة",
              value: 0,
            },
          ],
        },
        {
          day: 6,
          dayToDo: [
            {
              title: "تلاوة",
              value: 0,
            },
            {
              title: "السنن",
              value: 0,
            },
            {
              title: "التهجد",
              value: 0,
            },
            {
              title: "الضحى",
              value: 0,
            },
            {
              title: "الوتر",
              value: 0,
            },
            {
              title: "التراويح",
              value: 0,
            },
            {
              title: "الذكر",
              value: 0,
            },
            {
              title: "الدراسة",
              value: 0,
            },
          ],
        },
      ],
    },
    {
      id: 30,
      name: "مستخدم-30",
      bonus: 0,
      todos: [
        {
          day: 6,
          dayToDo: [
            {
              title: "تلاوة",
              value: 0,
            },
            {
              title: "السنن",
              value: 0,
            },
            {
              title: "التهجد",
              value: 0,
            },
            {
              title: "الضحى",
              value: 0,
            },
            {
              title: "الوتر",
              value: 0,
            },
            {
              title: "التراويح",
              value: 0,
            },
            {
              title: "الذكر",
              value: 0,
            },
            {
              title: "الدراسة",
              value: 0,
            },
          ],
        },
        {
          day: 6,
          dayToDo: [
            {
              title: "تلاوة",
              value: 0,
            },
            {
              title: "السنن",
              value: 0,
            },
            {
              title: "التهجد",
              value: 0,
            },
            {
              title: "الضحى",
              value: 0,
            },
            {
              title: "الوتر",
              value: 0,
            },
            {
              title: "التراويح",
              value: 0,
            },
            {
              title: "الذكر",
              value: 0,
            },
            {
              title: "الدراسة",
              value: 0,
            },
          ],
        },
      ],
    },
  ];

  const calculateBonus = (userId: number) => {
    const user = users.find((u) => u.id === userId);
    if (!user) return;

    let totalBonus = 0;
    user.todos.forEach((day) => {
      day.dayToDo.forEach((todo) => {
        totalBonus += todo.to_do_bonus * todo.value;
      });
    });

    user.bonus = totalBonus;
  };

  return {
    users,
    calculateBonus,
  };
});
