<template>
  <div class="v-contact-list">
    <contact-user
      v-for="contact in dataContacts"
      :key="contact.id"
      :contactData="contact"
      @to-contact-info="toContactInfo(contact)"
    />
  </div>
</template>

<script>
import ContactUser from "./ContactUser.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components: { ContactUser },
  computed: {
    ...mapGetters(["dataContacts"]),
  },
  methods: {
    ...mapActions(["fetchContacts", "setUserToHeader"]),

    toContactInfo(contact) {
      this.$router.push({
        name: "contact",
        query: { id: contact.id },
      });
      this.setUserToHeader(contact.name);
    },
  },
  mounted() {
    this.fetchContacts();
  },
};
</script>

<style></style>
