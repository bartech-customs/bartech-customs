<template>
  <div class="bg-gray-50 h-screen overflow-x-hidden">
    <AppNav />
    <Nuxt />
  </div>
</template>

<script>
export default {
  props: ["default"],
  layout: "default", // you can set a custom layout for the error page
};
</script>
<style>
body {
  font-family: "Quicksand", "Montserrat", sans-serif;
}
</style>