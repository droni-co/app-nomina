<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    class="bg-gray-50
      border
      border-gray-300
      text-gray-900
      text-sm
      rounded
      focus:ring-blue-500
      focus:border-blue-500
      block
      w-full
      p-3
      dark:bg-gray-700
      dark:border-gray-600
      dark:placeholder-gray-400
      dark:text-white
      dark:focus:ring-blue-500
      dark:focus:border-blue-500"
    :placeholder="placeholder"
    :class="{'border-red-500': error.length > 0}"
    :required="required"
    :pattern="pattern">
</template>
<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  },
  required: {
    type: Boolean,
    default: false
  },
  error: {
    type: String,
    default: ''
  },
  pattern: {
    type: String,
    default: '.*'
  }
})
</script>