<template>
  <div class="home h-screen">
    <div>
      <h1>
        Bartech Customs <br />
        <span>Kick-start your web journey</span> <br />
        <span>Freelance Web &amp; Web App Development | Digital Marketing</span>
      </h1>
      <p>
        Specialized in the design and development of custom websites. No
        pre-made templates. Only modern technologies <br />
        Delivers better performance <br />
        Higher Security <br />
        Less expensive<br />
        Scalability
      </p>
    </div>
    <div></div>
    <!-- <h1>Home page</h1>
    <NuxtLink to="/about">About Page</NuxtLink>
    <p v-if="$fetchState.pending">Loading....</p>
    <ul>
      <li v-for="user in users" :key="user.id">
        <NuxtLink :to="`/services/${user.id}`"> {{ user.name }} </NuxtLink>
      </li>
    </ul>
  --></div>
</template>

<script>
export default {
  // async fetch() {
  //   this.users = await fetch("https://jsonplaceholder.typicode.com/users").then(
  //     (res) => res.json()
  //   );
  // },
  data() {
    return {
      // users: null,
    };
  },
};
</script>

<style>
/* .home {
  background: url("~assets/background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center right;
} */
</style>
