<template>
  <div>
    <Nuxt />
    <p>navbar goes here</p>
  </div>
</template>

<script>
export default {
  props: ["test"],
  layout: "test", // you can set a custom layout for the error page
};
</script>