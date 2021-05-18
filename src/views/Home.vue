<template>
  <div class="home">
    <div class="home__content-image">
      <img 
        src="../assets/images/pikachu.svg" 
        alt="circulo"
        class="home__image"
      >
    </div>
    <h1 class="home__title">Welcome to Pokédex</h1>
    <p class="home__text">
      The digital encyclopedia created by Professor 
      Oak is an invaluable tool to Trainers 
      in the Pokémon world.
    </p>
    <div class="home__content-btn">
      <AppButton 
        title="Get started"
        @click-btn="goToHome"
      />
    </div>
  </div>
</template>

<script>
import AppButton from '../components/shared/AppButton'

function goToHome() {
  this.$router.push({
		name: 'List'
	});
}

export default {
  components: { AppButton },
  name: 'Home',
  methods: {
    goToHome,
  },
}
</script>
<style lang="scss" scoped>
.home {
  padding: 83px 32px;

  &__content-image {
    background-image: url('../assets/images/circle.svg');
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 206px;
    margin: 0 auto 60px auto;
    position: relative;
    width: 206px;
  }

  &__title {
    color: $medium-grey;
    line-height: 31px;
    font-size: $large;
    font-weight: 700;
    margin-bottom: 30px;
    text-align: center;
  }

  &__text {
    color: $primary;
    line-height: 150%;
    margin-bottom: 50px;
    text-align: center;
  }

  &__image {
    bottom: -11px;
    position: absolute;
    right: -70px;
  }

  &__content-btn {
    text-align: center;
  }
}
</style>
