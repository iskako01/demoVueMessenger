<template>
  <div class="v-user" @click="toUserChat">
    <div class="v-user__avatar"></div>
    <div class="v-user__name">
      <p class="info__name">{{ userData.name }}</p>
      <p class="info__last-message">
        {{ userData.chat[userData.chat.length - 1].text }}
      </p>
    </div>
    <div class="v-user__time">
      {{ userData.chat[userData.chat.length - 1].time }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userData: {
      type: Object,
    },
  },
  components: {},
  data() {
    return {
      userDataMessages: this.userData,
    };
  },
  methods: {
    toUserChat() {
      this.$router.push({
        name: "chat",
		query: { id: this.userData.id }
      });
    },
  },
};
</script>

<style></style>
