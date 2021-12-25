<template>
  <div class="v-contact-user" @click="toContactInfo(contactData)">
    <div class="user__avatar"></div>
    <div class="user__name">
      <span>{{ contactData.name }}</span>
    </div>
    <div class="user__status" :class="className"></div>
  </div>
</template>

<script>
export default {
  props: {
    contactData: {
      type: Object,
      required: false,
    },
  },
  emits: {
    "to-contact-info": null,
  },
  computed: {
    className() {
      return {
        online: this.contactData.status === "online",
        offline: this.contactData.status === "offline",
      };
    },
  },
  methods: {
    toContactInfo(contact) {
      this.$emit("to-contact-info", contact);
    },
  },
};
</script>

<style></style>
