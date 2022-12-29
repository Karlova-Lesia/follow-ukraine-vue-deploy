<template>
  <main class="main-content">
    <h1 class="content-title">{{ title }}</h1>
    <div class="description">
      <p>{{ description }}</p>
    </div>
    <div :class="['image-wrapper', className]"></div>
  </main>
</template>

<script setup lang="ts">
interface AttractionsItemProps {
  description: string;
  title: string;
  className: string;
}

const { description, title, className } = defineProps<AttractionsItemProps>();
</script>
