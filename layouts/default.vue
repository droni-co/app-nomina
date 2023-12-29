<template>
  <div>
    <header class="bg-slate-200 py-2 shadow-lg">
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
              <NuxtLink to="/companies" class="text-md block rounded bg-slate-100 p-1 px-3 transition hover:bg-sky-900 hover:text-white">
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
    <footer>
      <div class="bg-slate-200 py-3 shadow-lg">
        <div class="container mx-auto">
          <div class="flex justify-between">
            <div class="text-sm text-slate-500">
              <p>
                Construido con trabajo duro y mucho café por el equipo de
                <a href="https://droni.co" target="_blank" class="text-sky-800">
                  Droni.co.
                </a><br>
                ©2023 Colombia
              </p>
            </div>
            <div class="text-sm text-slate-500">
              <p>Desarrollado por <a href="https://www.linkedin.com/in/gustavo-barragan-480933194/" target="_blank" class="text-sky-800">Gustavo Barragán</a></p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script setup lang="ts">
const { signOut } = useAuth()

const closeSession = () => {
  signOut()
}
</script>