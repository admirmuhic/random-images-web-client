<template>
  <div>
    <FailedAlert
      v-if="showFailedAlert"
      v-bind:errorMessage="errorMessage"
    ></FailedAlert>
    <div class="text-center">
      <div class="spinner-grow text-primary" role="status" v-if="loading">
        <span class="visually-hidden">Loading...</span>
      </div>
      <div v-if="about">
        <h1 class="mt-5 text-black fw-light">{{ about.heading }}</h1>
        <p class="lead text-black-50">
          {{ about.information }}
        </p>
        <p class="lead text-black-20">
          {{ about.date }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import AboutService from "../services/about.service";
import FailedAlert from "../components/alerts/FailedAlert.vue";

export default {
  name: "AboutPage",
  components: {
    FailedAlert,
  },
  data() {
    return {
      loading: false,
      about: null,
      showFailedAlert: false,
      errorMessage: "",
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.loading = true;

      AboutService.getAbout()
        .then((response) => {
          this.loading = false;
          this.about = response.data;
        })
        .catch((err) => {
          this.showFailedAlert = true;
          this.errorMessage = err;
        });
    },
  },
};
</script>

<style></style>
