<script lang="ts" setup>
import PageLayout from './layouts/index.vue'
</script>

<template>
  <page-layout name="default">
    <router-view></router-view>
  </page-layout>
</template>

<style>
#app {
  @apply relative h-screen;
}
</style>