<template>
  <div class="container mx-auto py-3">
    <h1 class="text-lg">Companies</h1>
    <div class="grid grid-cols-6 gap-4">
      <div class="col-span-4">
        {{ companies }}
      </div>
      <div class="col-span-2">
        <UiCard class="py-3 px-2">
          <h1>Create Company</h1>
        </UiCard>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const companies = ref<Company[]>([])

const getCompanies = async () => {
  const { data } = await useFetch<Company[]>('/api/companies')
  companies.value = data.value ?? []
}

await getCompanies()
</script>