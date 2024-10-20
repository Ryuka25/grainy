<script lang="ts" setup>
import Toaster from "./components/ui/toast/Toaster.vue";
import { APP_DESCRIPTION } from "./lib/consts";

useSeoMeta({
  title: "Grainy",
  ogTitle: "Master task management with Grainy - the modular to-do app",
  twitterTitle: "Master task management with Grainy - the modular to-do app",
  description: APP_DESCRIPTION,
  ogDescription: APP_DESCRIPTION,
  twitterDescription: APP_DESCRIPTION,
  ogImage: "https://grainy.vercel.app/images/grainy-preview.jpg",
  twitterImage: "https://grainy.vercel.app/images/grainy-preview.jpg",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <NuxtLayout>
    <NuxtRouteAnnouncer />
    <NuxtPage />
  </NuxtLayout>
  <Toaster />
</template>
