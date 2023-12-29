<template>
  <div class="flex rounded-lg">
    <img src="~/assets/img/login.jpeg" alt="Droni.co | Nomina Login" class="w-1/2 rounded-l-lg" />
    <div class="w-1/2 bg-slate-200 rounded-r-lg">
      <div class="px-3 py-5">
        <UiLogo class="mx-auto mb-5" />
        <hr class="bg-slate-300 h-1 shadow">
        <div class="py-5 lg:p-5">
          <p class="text-slate-800 text-xl">
            Bienvenido a <strong>Nomina by Droni.co</strong>, la solución avanzada que revoluciona la gestión de nóminas para empresas de todos los tamaños. Con nuestra plataforma intuitiva y personalizable, simplificamos el proceso de cálculo de pagos para empleados, ofreciéndote una experiencia rápida, precisa y adaptada a las necesidades específicas de tu empresa.
          </p>
        </div>
        <div class="text-center">
          <UiButton @click="signIn('google')">
            <i class="mdi mdi-google mr-2"></i>
            Ingresa usando tu cuenta de Google
          </UiButton>
        </div>
      </div>      
    </div>
    
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