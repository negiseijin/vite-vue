<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0);

const emit = defineEmits<{
  (e: 'change', num: number): void;
  (e: 'update', msg: string): void;
}>();
</script>

<template>
  <div>
    <p>Child</p>
    <button type="button" @click="count++">count is: {{ count }}</button>
    <button @click="(e) => emit('change', count)">change</button>
    <button @click="(e) => emit('update', 'aaaaaaaaaaaaaaaaaaa')">update</button>
  </div>
</template>
