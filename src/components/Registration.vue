<script setup>
import { Registration } from "../data/Registration";
</script>

<template>
  <div class="w-full justify-center flex mt-20 mb-10">
    <div class="container flex flex-col">
      <h1 class="text-center text-7xl font-bold text-UTAMA">Registration</h1>
      <div class="flex flex-col mt-12 w-[35%]">
        <p class="text-UTAMA font-semibold">
          To take part in this event you must fill out the registration participant or
          submission presenter below.
        </p>
        <div class="flex flex-row gap-4 text-white mt-4 w-full">
          <button
            class="py-2 px-6 bg-YELLOW01 rounded-lg flex flex-col w-full justify-center items-center"
          >
            <span>Register As A</span>
            <span>Participants</span>
          </button>
          <button
            class="py-2 px-6 bg-UTAMA rounded-lg flex flex-col w-full justify-center items-center"
          >
            <span>Submission</span>
            <span>for Presenter</span>
          </button>
        </div>
      </div>
      <div class="grid grid-cols-4 w-full gap-14 mt-14">
        <div v-for="(item, index) in Registration" :key="index">
          <div
            class="flex flex-col border-YELLOW01 py-10 h-full border-dashed border-2 px-10 items-center drop-shadow-md bg-[#FEFEFE]"
          >
            <div>
              <div class="text-lg font-semibold text-UTAMA">{{ item.title }}</div>
              <div class="text-xs text-end w-full text-UTAMA">{{ item.sesion }}</div>
            </div>
            <div v-for="(items, index) in item.type" :key="index" class="w-full mt-2">
              <div class="flex flex-col w-full">
                <label class="text-start w-full text-UTAMA text-sm">{{
                  items.label
                }}</label>
                <div
                  class="py-1 text-white font-semibold text-center rounded-md bg-YELLOW01"
                >
                  {{ items.name }}
                </div>
              </div>
            </div>
            <div class="w-full h-full mt-4">
              <div
                v-for="(items, index) in item.benefit"
                :key="index"
                class="w-full text-center mt-1"
              >
                <div class="text-UTAMA font-semibold">{{ items.name }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
