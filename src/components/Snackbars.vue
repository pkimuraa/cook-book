<template>
  <div>
    <v-snackbar v-model="success" :timeout="timeout" class="snackbar-success">
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn color="#FFF" text v-bind="attrs" @click="success = false"> x </v-btn>
      </template>
    </v-snackbar>

    <v-snackbar v-model="warning" :timeout="timeout" class="snackbar-warning">
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn color="#FFF" text v-bind="attrs" @click="warning = false"> x </v-btn>
      </template>
    </v-snackbar>

    <v-snackbar v-model="error" :timeout="timeout" class="snackbar-error">
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn color="#FFF" text v-bind="attrs" @click="error = false"> x </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import EventBus from '../eventBus';

export default {
  name: 'Snackbars',
  data() {
    return {
      success: false,
      warning: false,
      error: false,
      text: '',
      timeout: 6000,
    };
  },
  mounted: function () {
    EventBus.$on('success', (text) => {
      this.success = true;
      this.text = text;
    });
    EventBus.$on('warning', (text) => {
      this.warning = true;
      this.text = text;
    });
    EventBus.$on('error', (text) => {
      this.error = true;
      this.text = text;
    });
  },
};
</script>

<style lang="scss">
.snackbar-success div {
  background: #4caf50 !important;
  color: white;
}
.snackbar-warning div {
  background: #fb8c00 !important;
  color: white;
}
.snackbar-error div {
  background: #ff5252 !important;
  color: white;
}
</style>
