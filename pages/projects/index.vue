<template>
  <main class="grid grid-cols-2 gap-4 mx-12">
    <section class="bg-gray-500 text-gray-50 shadow p-4">
      <h1 class="font-bold">Projects</h1>
      <div v-for="(project, index) in githubProjects" :key="index">
        <h2 class="text-xl">{{ project.name }}</h2>
        <p class="text-sm">{{ project.created_at }}</p>
        <p class="text-sm">
          <a :href="project.html_url" target="_blank">GitHub Link</a>
        </p>
      </div>
    </section>
    <aside><h2>Aside goes here</h2></aside>
  </main>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["githubProjects"]),
  },
  // moved to pluins for faster load time
  // mounted() {
  //   this.$store.dispatch("getGithubProjects");
  // },
};
</script>

<style lang="scss" scoped>
</style>