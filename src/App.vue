<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img class="shrink mr-2" contain src="@/assets/image/logo.svg" transition="scale-transition" width="40" />
      </div>

      <v-spacer></v-spacer>
      <v-avatar color="secondary" size="36"> PK </v-avatar>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data() {
    return {
      items: [{ title: 'Favorites' }],
    };
  },
};
</script>
