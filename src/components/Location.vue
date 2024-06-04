<script setup>
// import { defineComponent } from "vue";
// import { GoogleMap } from "vue3-google-map";

// export defineComponent({
//     comments: {GoogleMap},
//     setup(){
//         const center = { lat: -1.1509151, lng: 116.8709862};
//     }
//     return {center}
// })

import { GoogleMap, Marker } from "vue3-google-map";

const center = { lat: -1.1509151, lng: 116.8709862 };
</script>

<template>
  <div class="py-10">
    <div class="w-full text-center font-bold lg:text-7xl text-4xl text-UTAMA">
      Location
    </div>
    <GoogleMap
      api-key="AIzaSyAUjSHfHzLnlIFVadH0b_QvUkviZ90lBnE"
      class="mt-10"
      style="width: 100%; height: 500px"
      :center="center"
      :zoom="15"
    >
      <Marker :options="{ position: center }" />
    </GoogleMap>
  </div>
</template>
