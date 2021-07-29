<template>
  <div>
    <p>navbar goes here</p>
    <Nuxt />
  </div>
</template>

<script>
export default {
  props: ["default"],
  layout: "default", // you can set a custom layout for the error page
};
</script>