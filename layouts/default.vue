<template>
  <div>
    <header class="bg-slate-200 py-2">
      <nav class="flex container mx-auto">
        <UiLogo />
        <div class="flex-grow">
          <ul class="flex justify-end pt-2">
            <li class="px-2">
              <NuxtLink to="/" class="text-md block rounded bg-slate-100 p-1 px-3 transition hover:bg-sky-900 hover:text-white">
                Tablero
              </NuxtLink>
            </li>
            <li class="px-2">
              <NuxtLink to="/" class="text-md block rounded bg-slate-100 p-1 px-3 transition hover:bg-sky-900 hover:text-white">
                Empresas
              </NuxtLink>
            </li>
            <li class="px-2">
              <NuxtLink to="/" class="text-md block rounded bg-slate-100 p-1 px-3 transition hover:bg-sky-900 hover:text-white">
                Trabajadores
              </NuxtLink>
            </li>
            <li class="px-2">
              <NuxtLink to="/" class="text-md block rounded bg-slate-100 p-1 px-3 transition hover:bg-sky-900 hover:text-white">
                Nominas
              </NuxtLink>
            </li>
            <li class="px-2">
              <button class="text-md block rounded bg-slate-100 p-1 px-3 transition hover:bg-sky-900 hover:text-white" @click="closeSession">
                <i class="mdi mdi-logout"></i>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
    <slot />
  </div>
</template>
<script setup lang="ts">
const { signOut } = useAuth()

const closeSession = () => {
  signOut()
}
</script>