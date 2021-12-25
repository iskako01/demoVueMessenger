<template>
  <div class="v-user-chat">
    <chat-message
      v-for="message in currentChatUser"
      :key="message.id"
      :message="message"
    />
    <div class="input__field">
      <input
        type="text"
        class="v-user-chat__textfield"
        v-model="textValue"
        @keypress.enter="sendMessage"
      />
      <i class="material-icons" @click="sendMessage">send</i>
    </div>
  </div>
</template>

<script>
import ChatMessage from "./ChatMessage.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components: { ChatMessage },
  data() {
    return {
      textValue: "",
      chatsUser: {},
    };
  },
  computed: {
    ...mapGetters(["chats"]),
    currentChatUser() {
      this.chats.forEach((element) => {
        if (element.id === +this.$route.query.id) {
          this.chatsUser = element.chat;
        }
      });
      return this.chatsUser;
    },
  },
  mounted() {},
  methods: {
    ...mapActions(["setMessageToChat"]),
    sendMessage() {
      let user = {};
      Object.values(this.chats).filter((u) => {
        if (u.id === +this.$route.query.id) {
          return (user = u);
        }
      });
      let chat = {
        id: new Date().valueOf(),
        time: new Date().toLocaleTimeString("en-US", {
          hour12: false,
          hour: "numeric",
          minute: "numeric",
        }),
        text: this.textValue,
        type: "own",
      };
      user.chat.push(chat);

      this.setMessageToChat({
        userId: +this.$route.query.id - 1,
        chat: user,
      }).then((this.textValue = ""));
    },
  },
};
</script>
