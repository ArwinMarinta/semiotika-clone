<script setup>
import { Topic, Bidang } from "../data/Topic";
import Topic5 from "../assets/Topic/topic5.svg";
</script>

<template>
  <div class="w-full flex justify-center mt-20 mb-10">
    <div class="container flex lg:flex-row flex-col-reverse gap-16">
      <div class="lg:w-[70%] grid grid-cols-2 lg:gap-8 gap-4 lg:mt-14">
        <div v-for="(item, index) in Topic" :key="index">
          <div
            class="flex flex-col h-full lg:justify-center border-[1px] bg-[#FEFEFE] items-center lg:py-16 py-8 lg:px-10 px-4 rounded-lg shadow-md"
          >
            <img :src="item.icon" class="w-24" />
            <div class="text-center w-[60%] mt-6 text-YELLOW01">
              {{ item.description }}
            </div>
          </div>
        </div>
      </div>
      <div class="lg:w-[30%] w-full flex flex-col items-end">
        <div class="flex flex-col text-UTAMA">
          <h1
            class="lg:text-8xl text-5xl max-w-fit font-bold border-b-4 pb-6 border-YELLOW01"
          >
            Topics
          </h1>
          <p class="lg:text-end text-center mt-4 text-base font-semibold">
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
