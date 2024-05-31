<script setup>
import { Topic, Bidang } from "../data/Topic";
import Topic5 from "../assets/Topic/topic5.svg";
</script>

<template>
  <div class="w-full flex justify-center mt-20 mb-10">
    <div class="container flex flex-row gap-16">
      <div class="w-[70%] grid grid-cols-2 gap-8 mt-14">
        <div v-for="(item, index) in Topic" :key="index">
          <div
            class="flex flex-col h-full justify-center border-[1px] bg-[#FEFEFE] items-center py-16 px-10 rounded-lg shadow-md"
          >
            <img :src="item.icon" class="w-24" />
            <div class="text-center w-[60%] mt-6 text-YELLOW01">
              {{ item.description }}
            </div>
          </div>
        </div>
      </div>
      <div class="w-[30%] flex flex-col items-end">
        <div class="flex flex-col text-UTAMA">
          <h1 class="text-8xl font-bold border-b-4 pb-6 border-YELLOW01">Topics</h1>
          <p class="text-end mt-4 text-base font-semibold">
            Here's some topics of SEMIOTIKA
          </p>
        </div>
        <div
          class="flex h-full mt-10 flex-col border-2 py-8 px-10 w-full justify-center items-center rounded-lg"
        >
          <img :src="Topic5" class="w-24 mb-6" />
          <div
            class="flex flex-col text-YELLOW01"
            v-for="(item, index) in Bidang"
            :key="index"
          >
            {{ item.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
