<script setup>
import { ref, watch, onMounted } from 'vue'
import BasicBoolean from '@/components/form/basic-boolean.vue'

const props = defineProps({
  modelValue: {
    type: Object,
    required: true
  },
})

const emit = defineEmits(['update:modelValue'])

const refAnswer = ref('No')

watch(refAnswer, () => validateAndEmit())

onMounted(() => validateAndEmit())

function validateAndEmit() {
  if (refAnswer.value === 'Yes') {
    emit('update:modelValue', { commandPart: '-6', error: null })
  } else {
    emit('update:modelValue', { commandPart: '', error: null })
  }
}
</script>

<template>
  <BasicBoolean v-model="refAnswer" title="Prefer IPv6" :options="['Yes', 'No']" help="Prefer IPv6 addresses." />
</template>
