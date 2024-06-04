<script setup>
import { Nav } from "../../../data/Navbar";
</script>

<template>
  <div class="justify-center hidden lg:flex bg-UTAMA fixed top-0 z-[999] w-full py-4">
    <div class="container flex flex-row justify-between w-full items-center">
      <div class="font-bold text-2xl text-white w-full cursor-pointer">
        <a href="/">SEMIOTIKA</a>
      </div>
      <div class="flex flex-row justify-between w-full">
        <div v-for="(item, index) in Nav" :key="index">
          <div class="font-medium text-white cursor-pointer hover:text-YELLOW01">
            <a :href="item.path"> {{ item.name }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
