<template>
	<div class="signup-main">
		<div class="logo">
			<img src="@/assets/logo.svg" alt="" />
		</div>
		<div class="main-container">
			<slot></slot>
		</div>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped>
.signup-main {
	padding: 1rem 0;
	.logo {
		margin-bottom: 5%;
		img {
			width: 60px;
			height: auto;
		}
	}
	.main-container {
		width: 100%;
		height: 60%;
	}
}
@media only screen and (max-width: 768px) {
	.signup-main {
		.logo {
			img {
				width: 40px;
			}
		}
		.main-container {
			width: 100%;
		}
	}
}
</style>
