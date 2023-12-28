<template>
  <div class="contianer mx-auto">
    <h1>Login page</h1>
    <UiButton @click="signIn('google')">Sign in</UiButton>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  auth: {
    unauthenticatedOnly: true,
    navigateAuthenticatedTo: '/',
  },
  layout: 'blank',
})
const { signIn } = useAuth()
</script>