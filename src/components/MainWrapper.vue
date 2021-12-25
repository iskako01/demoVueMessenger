<template>
  <div class="v-main-wrapper">
    <layout-header />
    <router-view />
    <layout-bottom />
  </div>
</template>

<script>
import LayoutHeader from "./layouts/LayoutHeader.vue";
import LayoutBottom from "./layouts/LayoutBottom.vue";
export default {
  components: {
    LayoutHeader,
    LayoutBottom,
  },
};
</script>

<style></style>
