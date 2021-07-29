<template>
  <div>
    <p>Dynaic page works... {{ page }}</p>
    <h2>{{ user.name }}</h2>
    <pre>{{ $data }}</pre>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: this.user.name,
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.user.username,
        },
      ],
    };
  },

  async asyncData({ params }) {
    const user = await fetch(
      `https://jsonplaceholder.typicode.com/users/${params.slug}`
    ).then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error(res.status);
    });
    return { user };
  },
  data() {
    return {
      page: this.$route.params,
    };
  },
};
</script>

<style  scoped>
</style>