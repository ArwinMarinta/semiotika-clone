<script setup>
import ItkImage from "../assets/itk.svg";
import { conferense } from "../data/Conference";
</script>

<template>
  <div class="w-full lg:mt-20 mt-10 flex justify-center" id="About">
    <div class="container flex flex-col">
      <div class="flex lg:flex-row flex-col lg:gap-28 gap-10">
        <div class="lg:w-[40%]">
          <div class="max-w-fit flex flex-col items-center">
            <div class="font-bold lg:text-8xl text-5xl text-UTAMA">About</div>
            <div
              class="text-center font-bold lg:text-4xl text-xl text-UTAMA border-b-4 border-YELLOW01 pb-2"
            >
              SEMIOTIKA
            </div>
          </div>
          <div class="lg:mt-16 mt-10 text-justify text-UTAMA">
            "Seminar Nasional Teknologi Informasi dan Matematika atau disingkat SEMIOTIKA
            adalah ajang pelatihan seputar data science dan seminar nasional teknologi
            informasi dan matematika yang bertemakan “Peran Matematika dan Teknologi
            Informasi dalam Mengoptimalkan Pengelolaan Bisnis di ERA 5.0”
          </div>
        </div>
        <div class="lg:w-[60%] flex flex-col lg:mt-16 justify-end items-end">
          <div class="text-end text-UTAMA">Who's managing?</div>
          <div class="text-end font-bold lg:text-3xl text-xl text-UTAMA w-[70%] mt-6">
            Jurusan Matematika dan Teknologi Institut Teknologi Kalimantan
          </div>
          <div class="mt-10">
            <img :src="ItkImage" />
          </div>
        </div>
      </div>
      <div class="flex flex-col justify-center items-center mt-16 w-full">
        <div class="font-bold lg:text-6xl text-4xl text-UTAMA border-b-4 border-YELLOW01">
          The Conference
        </div>
        <div class="grid lg:grid-cols-3 grid-cols-1 gap-2 justify-between w-full">
          <div v-for="(item, index) in conferense" :key="index">
            <div class="flex flex-col justify-center items-center py-6 mt-3">
              <div class="flex flex-row items-center gap-4">
                <img :src="item.icon" />
                <div class="font-semibold text-[20px] text-UTAMA">{{ item.title }}</div>
              </div>
              <div
                class="font-bold lg:text-2xl text-xl text-center text-UTAMA w-[70%] lg:mt-8 mt-4"
              >
                {{ item.description }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
