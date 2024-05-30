<script setup>
import HomeImage from "../assets/home.svg";
</script>

<template>
  <div class="w-full flex bg-gradient-to-b from-[#0038C7] to-[#002687] relative">
    <!-- <div class="container flex justify-center">Home</div> -->

    <div class="flex flex-row-reverse">
      <div></div>
      <div class="w-[60%]">
        <img :src="HomeImage" alt="Home" width="10000" />
      </div>
    </div>
    <div class="absolute w-full h-full backdrop-blur-[0.6px] justify-center items-center">
      <div class="container flex flex-col justify-center w-full h-full">
        <div class="text-white flex flex-col">
          <div class="font-extrabold text-9xl">SEMIOTIKA</div>
          <div class="max-w-fit border-b-2 font-extrabold text-8xl">2024</div>
          <div class="font-normal text-2xl mt-6 w-[60%]">
            Peran Matematika dan Teknologi Informasi dalam Mengoptimalkan Pengelolaan
            Bisnis di ERA 5.0
          </div>
          <button
            class="text-left border-[2px] max-w-fit px-8 py-[10px] font-medium border-YELLOW01 rounded-lg mt-6"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
