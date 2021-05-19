<template>
  <div class="detail">
		<div class="detail__modal">
			<Loading v-if="loading" :modal="true"/>
			<div v-else>
				<div class="detail__content-image">
					<button class="detail__btn" @click="goToBack">
						<img src="../assets/icons/check.svg" alt="cerrar">
					</button>
					<img 
						:src="detail.image" 
						:alt="detail.name"
						width="106px"
						class="detail__image"
					>
				</div>
				<div class="detail__content-information">
					<div>
						<p class="detail__text">
							<span class="detail__text--bold">Name:</span> {{ detail ? detail.name : ''}}
						</p>
						<p class="detail__text">
							<span class="detail__text--bold">Weight:</span> {{ detail ? detail.weight : ''}}
						</p>
						<p class="detail__text">
							<span class="detail__text--bold">Height:</span> {{ detail ? detail.height : ''}}
						</p>
						<p class="detail__text">
							<span class="detail__text--bold">Types:</span> {{ detail ? detail.typesString : ''}}
						</p>
					</div>
				</div>
				<div class="detail__content-buttons">
					<AppButton 
						title="Share to my friends"
						@click-btn="shareFriend"
					/>
					<BtnStart :active="detail.favorite"/>
					<input id="share" type="text" hidden>
					<span class="detail__text-copied" v-if="showTextCopied">Copied!</span>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import AppButton from '../components/shared/AppButton.vue';
import BtnStart from '../components/shared/BtnStart.vue';
import { mapGetters } from 'vuex';
import Loading from '../components/loading/Loading.vue';

function created() {
	const detail = {
		name: this.name,
		favorite: this.$route.query.favorite,
	}
	this.$store.dispatch('getDetailPok', detail);
}

function goToBack() {
	this.$router.go(-1);
	this.$store.dispatch('resetDetail');
}

function shareFriend() {
	const cb = document.getElementById('share');
	cb.value = `name: ${this.detail.name}, stats: ${this.detail.statsString}`;
	cb.style.display = 'block';
	cb.select();
	document.execCommand('copy');
	cb.style.display = 'none';
	this.showTextCopied = true,
	setInterval(() => {
		this.showTextCopied = false;
	}, 1000);
}

function data() {
	return {
		showTextCopied: false,
	};
}

export default {
  components: { AppButton, BtnStart, Loading },
	name: 'detail',
	created,
	computed: {
		...mapGetters([
			'detail',
			'loading',
		]),
	},
	data,
	props: {
		name: String,
	},
	methods: {
		goToBack,
		shareFriend,
	},
};
</script>
<style lang="scss" scoped>
.detail {
	@include flex-center();
	background-color: rgba(0, 0, 0, 0.6);
	bottom: 0;
	left: 0;
	position: fixed;
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
		position: relative;
	}

	&__btn {
		background: none;
    border: none;
		cursor: pointer;
		position: absolute;
		right: 20px;
		top: 20px;
	}

	&__image {
		bottom: 0;
		position: absolute;
		right: calc(50% - 53px);
	}

	&__text-copied {
		color: $primary;
		font-size: 13px;
		position: absolute;
		top: -26px;
	}
}
</style>