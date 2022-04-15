<script setup lang="ts">
import { ref } from 'vue';

import api from '@/libs/api';
import { Tes } from '@/types/sub_system/business/screen';

defineProps<{ msg: string }>();

const count = ref(0);

let obj: Array<Tes> = [];

const fetchGet = async () => {
  const res = api.get<Array<Tes>>('tes').then((v) => v.data);
  return res;
};

const fetchPost = async (param: Tes) => {
  console.log(`param:${param}`);
  const res = api.post('posts', param).then((v) => v.data);
  return res;
};

const res = fetchGet();
res.then((v) => {
  console.log(v.map((v) => v.tesName));

  obj = v;
  obj[0].tesId = 3;
  console.log(obj[0]);
  fetchPost(obj[0]);
});
</script>

<template>
  <h1>{{ msg }}</h1>
  <p>{{ obj }}</p>
  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>See <code>README.md</code> for more information.</p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank"> Vite Docs </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p>

  <button type="button" @click="count++">count is: {{ count }}</button>

  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
