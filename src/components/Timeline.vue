<script setup></script>

<template>
  <div class="w-full flex justify-center mt-20 mb-10">
    <div class="container flex flex-col">
      <h1 class="text-7xl font-bold text-UTAMA border-b-4 max-w-fit pb-3 border-YELLOW01">
        TimeLine
      </h1>
      <div class="mt-20 flex flex-col-reverse">
        <div class="relative w-full">
          <div class="py-1">
            <div
              class="border-t-8 border-UTAMA flex font-bold text-lg text-UTAMA text-center gap-10 pt-8"
            >
              <div
                class="py-10 w-full shadow-lg border-[0.6px] border-gray-100 rounded-lg ml-6"
              >
                Submission
              </div>
              <div
                class="py-10 w-full shadow-lg border-[0.6px] border-gray-100 rounded-lg"
              >
                Accepted
              </div>
              <div
                class="py-10 w-full shadow-lg border-[0.6px] border-gray-100 rounded-lg"
              >
                Early Bird
              </div>
              <div
                class="py-10 w-full shadow-lg border-[0.6px] border-gray-100 rounded-lg"
              >
                Normal Bird
              </div>
            </div>
          </div>
          <!-- Titik pertama -->
          <div class="absolute top-[5%] -translate-y-1/2 right-[21%]">
            <div class="p-[10px] bg-YELLOW01 rounded-full max-w-fit"></div>
          </div>
          <!-- Titik kedua -->
          <div class="absolute top-[5%] -translate-y-1/2 right-[47%]">
            <div class="p-[10px] bg-YELLOW01 rounded-full max-w-fit"></div>
          </div>
          <!-- Titik ketiga -->
          <div class="absolute top-[5%] -translate-y-1/2 right-[72%]">
            <div class="p-[10px] bg-YELLOW01 rounded-full max-w-fit"></div>
          </div>
          <!-- Titik keempat -->
          <div class="absolute top-[5%] -translate-y-1/2 right-[97%]">
            <div class="p-[10px] bg-YELLOW01 rounded-full max-w-fit"></div>
          </div>
        </div>
        <div class="flex flex-row w-full mb-4">
          <div class="py-1 w-full">
            <div
              class="border-UTAMA w-full flex font-semibold text-base text-UTAMA text-center justify-between gap-10"
            >
              <div class="w-full ml-6">
                <div
                  class="px-4 py-2 shadow-lg max-w-fit border-[0.6px] border-YELLOW01 rounded-lg"
                >
                  June 7 - August 9
                </div>
              </div>
              <div class="w-full">
                <div
                  class="px-4 py-2 shadow-lg max-w-fit border-[0.6px] border-YELLOW01 rounded-lg"
                >
                  August 30
                </div>
              </div>
              <div class="w-full">
                <div
                  class="px-4 py-2 shadow-lg max-w-fit border-[0.6px] border-YELLOW01 rounded-lg"
                >
                  September 6
                </div>
              </div>
              <div class="w-full">
                <div
                  class="px-4 py-2 shadow-lg max-w-fit border-[0.6px] border-YELLOW01 rounded-lg"
                >
                  September 13
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
