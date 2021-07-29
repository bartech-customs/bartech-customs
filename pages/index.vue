<template>
  <div>
    <h1>Home page</h1>
    <NuxtLink to="/about">About Page</NuxtLink>
    <p v-if="$fetchState.pending">Loading....</p>
    <ul>
      <li v-for="user in users" :key="user.id">
        <NuxtLink :to="`/services/${user.id}`"> {{ user.name }} </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async fetch() {
    this.users = await fetch("https://jsonplaceholder.typicode.com/users").then(
      (res) => res.json()
    );
  },
  data() {
    return {
      users: null,
    };
  },
};
</script>
<style>
h1 {
  color: teal;
}
</style>
