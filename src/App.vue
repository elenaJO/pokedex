<template>
  <div id="app">
    <AppButtons
      title="All"
      icon="../../assets/icons/all.svg"
    >
      <img src="./assets/icons/all.svg">
    </AppButtons>
    <AppSearch/>
    <!-- <router-view/> -->
  </div>
</template>
<script>
import AppButtons from './components/shared/AppButton';
import AppSearch from './components/shared/AppSearch';

export default {
  name: 'App',
  components: {
    AppButtons,
    AppSearch,
  },
}
</script>