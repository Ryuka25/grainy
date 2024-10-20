<script lang="ts" setup>
import { APP_DESCRIPTION } from "./lib/consts";

useHead({
  title: "Grainy",
  meta: [{ name: "description", content: APP_DESCRIPTION }],
});
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>
