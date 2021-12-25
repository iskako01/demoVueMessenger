import { createStore } from "vuex";
import axios from "axios";

const plagins = [];
export default createStore({
  plagins,

  state() {
    return {
      contacts: [],
      currentUserChat: {},
      chats: [],
    };
  },
  getters: {
    dataContacts(state) {
      return state.contacts;
    },
    currentUserChat(state) {
      return state.currentUserChat;
    },
    chats(state) {
      return state.chats;
    },
  },
  mutations: {
    setContactsToStore(state, contacts) {
      state.contacts = contacts;
    },
    setUserToHead(state, user) {
      if (user) {
        state.currentUserChat = user;
      } else {
        state.currentUserChat = "";
      }
    },
    setChatsToStore(state, chat) {
      state.chats = chat;
    },
  },
  actions: {
    async fetchContacts({ commit }) {
      const { data } = await axios.get(
        "https://vue-chat-messenger-default-rtdb.firebaseio.com/contacts.json"
      );
      commit("setContactsToStore", data.contacts);
    },
    async fetchChats({ commit }) {
      const { data } = await axios.get(
        "https://vue-chat-messenger-default-rtdb.firebaseio.com/contacts.json"
      );
      commit("setChatsToStore", data.chats);
    },
    async setMessageToChat({ commit }, { userId, chat }) {
      const { data } = await axios.put(
        `https://vue-chat-messenger-default-rtdb.firebaseio.com/contacts/chats/${userId}.json`,
        chat
      );
      return data;
    },

    setUserToHeader({ commit }, user) {
      commit("setUserToHead", user);
    },
  },
});
