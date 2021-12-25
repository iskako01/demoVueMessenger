<template>
  <div class="v-header">
    <div class="v-header__back" @click="back" v-if="!isCoreRoot">
      <i class="material-icons">keyboard_arrow_left</i>
      <span>Back</span>
    </div>
    <div class="v-header__user-info" v-if="!isCoreRoot">
      <span>{{ currentUserChat }}</span>
    </div>
    <div class="right-side"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["currentUserChat"]),
    isCoreRoot() {
      return this.$route.path === "/";
    },
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
};
</script>

<style></style>
