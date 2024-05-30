<script setup>
import ItkImage from "../assets/itk.svg";
</script>

<template>
  <div class="w-full mt-20">
    <div class="container">
      <div class="flex flex-row">
        <div class="w-[40%]">
          <div class="max-w-fit flex flex-col items-center">
            <div class="font-bold text-8xl text-UTAMA">About</div>
            <div
              class="text-center font-medium text-4xl text-UTAMA border-b-4 border-YELLOW01"
            >
              SEMIOTIKA
            </div>
          </div>
          <div>
            "Seminar Nasional Teknologi Informasi dan Matematika atau disingkat SEMIOTIKA
            adalah ajang pelatihan seputar data science dan seminar nasional teknologi
            informasi dan matematika yang bertemakan “Peran Matematika dan Teknologi
            Informasi dalam Mengoptimalkan Pengelolaan Bisnis di ERA 5.0”
          </div>
        </div>
        <div class="w-[60%] flex flex-col">
          <div class="text-end">Who's managing?</div>
          <div class="text-end font-bold text-3xl">
            Jurusan Matematika dan Teknologi Institut Teknologi Kalimantan
          </div>
          <div>
            <img :src="ItkImage" />
          </div>
        </div>
      </div>
      <div>bawah</div>
    </div>
  </div>
</template>
