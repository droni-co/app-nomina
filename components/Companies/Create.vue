<template>
  <UiInput
    v-model="newCompany.name"
    class="mb-2"
    placeholder="Nombre"
    required
    pattern=".{3,10}"
  />
  <UiInput
    v-model="newCompany.nit"
    class="mb-2"
    placeholder="Nit"
    required
    pattern=".{3,15}"
  />
  <UiInput
    v-model="newCompany.email"
    class="mb-2"
    placeholder="Email"
    required
    pattern=".{5,80}"
  />
  <UiInput
    v-model="newCompany.address"
    class="mb-2"
    placeholder="Dirección"
    required
    pattern=".{5,100}"
  />
  <UiInput
    v-model="newCompany.phone"
    class="mb-2"
    placeholder="Teléfono"
    required
    pattern=".{5,15}"
  />
  <UiInput
    v-model="newCompany.website"
    class="mb-2"
    placeholder="Website"
    required
    pattern=".{5,80}"
  />
  <UiButton @click="createCompany">
    <i class="mdi mdi-plus"></i>
    Crear Empresa
  </UiButton>
</template>
<script setup lang="ts">
const newCompany:Company = ref({
  name: '',
  nit: '',
  email: '',
  address: '',
  phone: '',
  website: ''
})

const createCompany = async () => {
  await useFetch<Company>('/api/companies', {
    method: 'POST',
    body: JSON.stringify(newCompany.value)
  }).then((res) => {
    
    console.log(res)
    router.push(`/companies/${res.id}`)
  })
  
}
</script>