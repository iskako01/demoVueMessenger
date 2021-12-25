<template>
  <div class="v-contact-user-info">
    <div class="info__avatar"></div>
    <div class="info__content">
      <div class="info__name">
        <span>{{ contactData.phone }}</span>
      </div>
      <div class="info__tools">
        <button class="start-call">Call</button>
        <button class="start-chat">Start chat</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      contactData: {},
    };
  },
  computed: {
    ...mapGetters(["dataContacts"]),
  },
  methods: {
    currentContactPhone() {
      this.dataContacts.find((contact) => {
        if (contact.id == this.$route.query.id) {
          this.contactData = contact;
        }
      });
    },
  },
  mounted() {
    this.currentContactPhone();
  },
};
</script>

<style></style>
