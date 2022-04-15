<script setup lang="ts">
import ChildComponent from './ChildComponent.vue';

let count = 0;
let isNum = false;

const addCount = (num: number) => {
  console.log(`num ${num}`);
  console.log(`count ${count}`);
  if (count === 10) {
    isNum = true;
  }
  return (count += num);
};

// const fetchGet = async () => {
//   const res = await api.get<Array<screen.Tes>>('tes');
//   return res.data;
// };

// const obj = fetchGet();
// const item = (await obj).map((v) => v);
// console.log(item);

const update = (msg: string) => console.log(`update ${msg}`);
</script>

<template>
  <div>
    <h2>Parent</h2>
    <button :disabled="!isNum">isNum</button>
    <ChildComponent @change="addCount" @update="update" />
  </div>
</template>
