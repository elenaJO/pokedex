<template>
  <div id="app">
    <AppButtons
      title="All"
      icon="../../assets/icons/all.svg"
    >
      <img src="./assets/icons/all.svg">
    </AppButtons>
    <!-- <router-view/> -->
  </div>
</template>
<script>
import AppButtons from './components/shared/AppButton';

export default {
  name: 'App',
  components: {
    AppButtons,
  },
}
</script>