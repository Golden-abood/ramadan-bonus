export default defineNuxtRouteMiddleware((to, from) => {
  const accessToken = useCookie("token");

  // check if user is not logged in => redirect to login page
  if (!accessToken.value && to.path !== "/login") {
    return navigateTo("/login");
  }
});
