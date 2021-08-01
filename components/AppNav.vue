<template>
  <nav
    class="
      flex flex-row
      w-full
      justify-between
      items-center
      h-20
      bg-gray-50
      shadow
      mb-4
    "
  >
    <div class="logo">
      <NuxtLink exact to="/" class="logo-link text-3xl ml-7"
        >Bartech Customs</NuxtLink
      >
    </div>
    <div class="menu">
      <ul class="flex flex-row">
        <li><NuxtLink exact to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/projects">Projects</NuxtLink></li>
        <li><NuxtLink to="/portfolio">Portfolio</NuxtLink></li>
        <li><NuxtLink to="/services">Services</NuxtLink></li>
        <li><NuxtLink to="/about">About</NuxtLink></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.menu ul li {
  margin-right: 1.4rem;
  padding: 0.3rem 1rem;
  &:hover {
    opacity: 0.7;
  }
}
.nuxt-link-exact-active,
.nuxt-link-active {
  border-bottom: 1px solid black;
}

.logo-link.nuxt-link-exact-active,
.logo-link.nuxt-link-active {
  border: none !important;
}

.logo {
  font-family: "Damion", cursive;
}
</style>