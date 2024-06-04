<script setup>
import Hamburger from "../../../assets/hamburger.svg";
</script>

<template>
  <div class="justify-center flex bg-UTAMA fixed top-0 z-[999] w-full py-2 lg:hidden">
    <div class="container flex flex-row justify-between w-full items-center">
      <div class="font-bold text-lg text-white w-full cursor-pointer">
        <a href="/">SEMIOTIKA</a>
      </div>
      <div>
        <img :src="Hamburger" />
      </div>
    </div>
  </div>
</template>
