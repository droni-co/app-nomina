<template>
  <div class="container mx-auto">
    <h1>Hello World</h1>
    <pre>
      hola
      {{ users}}
    </pre>
    <NuxtLink to="/login">
      <UiAction class="inline-block">
        Login
      </UiAction>
    </NuxtLink>
    <UiButton @click="closeSession">Cerrar sesión</UiButton>
  </div>
</template>
<script setup lang="ts">
const { status, data, signIn, signOut } = useAuth()
status.value // Session status: `unauthenticated`, `loading`, `authenticated`
data.value // Session data, e.g., expiration, user.email, ...

const closeSession = () => {
  signOut()
}
const { data:users } = await useFetch(`/api/users/index`)
</script>