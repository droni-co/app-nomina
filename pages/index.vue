<template>
  <div class="container mx-auto">
    <h1>Hello World</h1>
    {{ status }}
    <hr>
    {{ data }}
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
</script>