<template>
  <div class="container mx-auto py-10">
    <div class="flex" v-for="data in datas" :key="data.id">
      <div
        class="border m-2 rounded-lg bg-white mx-auto max-w-sm rounded-lg overflow-hidden p-3 flex items-center justify-center w-1/3"
      >
        <p class="text-xl leading-tight primary-color">{{ data.word }}</p>
      </div>

      <div></div>
      <div
        class="border m-2 rounded-lg bg-white mx-auto max-w-sm rounded-lg overflow-hidden p-3 w-1/3"
      >
        <p class="leading-tight secondary-color">
          {{ data.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datas: [
        {
          id: 1,
          word: "CAR",
          description:
            "a road vehicle with an engine, four wheels, and seats for a small number of people",
        },
        {
          id: 2,
          word: "FLOWER",
          description:
            "the part of a plant that is often brightly coloured and has a pleasant smell,",
        },
        {
          id: 3,
          word: "PENCIL",
          description:
            "a long, thin object, usually made of wood, for writing or drawing, with a sharp black or coloured point at one end,",
        },
        {
          id: 4,
          word: "WALLET",
          description:
            "a small folding case for carrying paper money, credit cards and other flat objects, that can be carried in a pocket and is used especially by men:",
        },
      ],
    };
  },
};
</script>

<style>
</style>