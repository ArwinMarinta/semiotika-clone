<script setup>
import Instagram from "../../assets/instagram.svg";
import Email from "../../assets/email.svg";
</script>

<template>
  <div class="w-full flex justify-center bg-UTAMA">
    <div class="container flex flex-row w-full gap-10 py-10 justify-between">
      <div class="flex flex-col">
        <p class="text-xl text-YELLOW01 font-semibold">Secretariat</p>
        <h3 class="text-2xl font-semibold text-white">
          Jurusan Matematika dan Teknologi Informasi
        </h3>
        <div class="flex flex-col text-white mt-4">
          <div class="flex flex-row items-center h-full gap-3">
            <img :src="Instagram" />
            <div>semiotika_xxxx</div>
          </div>
          <div class="flex flex-row items-center h-full gap-3">
            <img :src="Email" />
            <div>semiotika@xxxxx</div>
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <div class="text-xl text-YELLOW01 font-semibold">Contact Person</div>
        <div class="flex flex-col mt-6 text-white">
          <p>Khairunnisa Rahmah : +62xxxxxxx</p>
          <p>Luh Made Wisnu S : +62xxxxxxxx</p>
          <p>Rizky Amelia : +62xxxxxxx</p>
        </div>
      </div>
      <div class="flex flex-col">
        <div class="text-xl text-YELLOW01 font-semibold">Contact Person</div>
        <div class="bg-white px-28 py-10 w-full rounded-lg mt-4">.</div>
      </div>
    </div>
  </div>
</template>
