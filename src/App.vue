<template>
  <div id="app">
    <AppButtons
      title="All"
      icon="../../assets/icons/all.svg"
    >
      <img src="./assets/icons/all.svg">
    </AppButtons>
    <AppSearch/>
    <AppList/>
    <!-- <router-view/> -->
  </div>
</template>
<script>
import AppButtons from './components/shared/AppButton';
import AppSearch from './components/shared/AppSearch';
import AppList from './components/shared/AppList';

export default {
  name: 'App',
  components: {
    AppButtons,
    AppSearch,
    AppList,
  },
}
</script>