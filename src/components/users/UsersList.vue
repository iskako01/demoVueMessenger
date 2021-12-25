<template>
  <div class="v-user-list">
    <user v-for="chat in chats" :key="chat.id" :userData="chat" />
  </div>
</template>

<script>
import User from "./User.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: { User },
  computed: {
    ...mapGetters(["chats"]),
  },
  methods: {
    ...mapActions(["fetchChats", "setUserToHeader"]),
  },
  mounted() {
    this.fetchChats();
    this.setUserToHeader();
  },
};
</script>

<style></style>
