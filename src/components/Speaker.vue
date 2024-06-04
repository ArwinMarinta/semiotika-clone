<script setup>
import Background from "../assets/background_speaker.svg";
import Speaker1 from "../assets/speaker/speaker1.svg";
import Speaker2 from "../assets/speaker/speaker2.svg";
import Speaker3 from "../assets/speaker/speaker3.svg";
</script>

<template>
  <div class="relative w-full flex justify-center" id="Speakers">
    <img :src="Background" class="w-full relative" />
    <div class="grid grid-cols-3 absolute bottom-0 w-full items-end">
      <img :src="Speaker1" class="w-full h-auto" />
      <img :src="Speaker2" class="w-full h-auto" />
      <img :src="Speaker3" class="w-full h-auto" />
    </div>
    <h1 class="absolute mt-16 font-bold text-7xl text-white">Speaker</h1>
  </div>
</template>
