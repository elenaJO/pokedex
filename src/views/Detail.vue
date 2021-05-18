<template>
  <div class="detail">
		<div class="detail__modal">
			<div class="detail__content-image">
				<button class="detail__btn">
					<img src="../assets/icons/check.svg" alt="cerrar">
				</button>
			</div>
			<div class="detail__content-information">
				<div>
					<p class="detail__text">
						<span class="detail__text--bold">Name:</span>Squirtle
					</p>
					<p class="detail__text">
						<span class="detail__text--bold">Name:</span>Squirtle
					</p>
					<p class="detail__text">
						<span class="detail__text--bold">Name:</span>Squirtle
					</p>
					<p class="detail__text">
						<span class="detail__text--bold">Name:</span>Squirtle
					</p>
				</div>
			</div>
			<div class="detail__content-buttons">
				<AppButton title="Share to my friends"/>
				<BtnStart/>
			</div>
		</div>
	</div>
</template>
<script>
import AppButton from '../components/shared/AppButton.vue';
import BtnStart from '../components/shared/BtnStart.vue';

export default {
  components: { AppButton, BtnStart },
	name: 'detail',
};
</script>
<style lang="scss" scoped>
.detail {
	@include flex-center();
	background-color: rgba(0, 0, 0, 0.6);
	bottom: 0;
	left: 0;
	position: absolute;
	right: 0;
	top: 0;

	&__modal {
		@include border-radius(5px);
		background-color: $white;
		height: 90%;
		max-height: 506px;
		max-width: 570px;
		width: 90%;
	}

	&__content-image {
		background-image: url('../assets/images/image.svg');
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		height: 220px;
		position: relative;
	}

	&__content-information {
		padding: 10px 30px;
	}

	&__text {
		border-bottom: 1px solid $border-gray;
		color: $primary;
		line-height: 150%;
		padding: 10px 0;

		&--bold {
			font-weight: 700;
		}
	}

	&__content-buttons {
		@include flex-between();
		margin-top: 20px;
		padding: 0 30px;
	}

	&__btn {
		background: none;
    border: none;
		cursor: pointer;
		position: absolute;
		right: 20px;
		top: 20px;
	}
}
</style>