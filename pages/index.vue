<script setup lang="ts">
import { useToast } from "~/components/ui/toast";
import { APP_DESCRIPTION } from "~/lib/consts";

const { toast } = useToast();

const onGetStartedClick = () => {
  toast({
    title: "🎉 Welcome aboard!",
    description:
      "Just a few more moment, our team is already working on this fabulous tools!",
  });
};
</script>

<template>
  <main class="flex flex-1 flex-col items-center justify-around lg:flex-row">
    <div class="text-center lg:block lg:text-left">
      <h1 class="text-5xl font-bold lg:text-7xl">
        <span class="underline font-['Arima'] text-6xl lg:text-8xl">
          Grainy
        </span>
        way to manage your tasks
      </h1>
      <p class="my-8">{{ APP_DESCRIPTION }}</p>
      <div class="flex justify-center lg:justify-start">
        <Button class="my-4 text-right" @click="onGetStartedClick">
          <Icon name="lucide:rocket" class="mr-4 h-4 w-4" />
          Get started
        </Button>
        <Button class="my-4 ml-2 text-right" variant="outline" as-child>
          <NuxtLink to="https://github.com/Ryuka25/grainy" target="_blank">
            <Icon name="simple-icons:github" class="mr-4 h-4 w-4" />
            Star on github
          </NuxtLink>
        </Button>
      </div>
    </div>
    <div class="flex w-full justify-center">
      <img src="/checklist.svg" />
    </div>
  </main>
</template>
