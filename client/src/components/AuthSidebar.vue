<template>
	<div class="auth-sidebar">
		<div class="text-area">
			<h1 class="text-area-header" data-test="heading">{{ props.heading }}</h1>
			<p class="text-area-subheader">
				{{ props.subheading }}
			</p>
		</div>
		<div class="link-area">
			<p class="link-area-text">{{ props.linkText }}</p>
			<router-link class="link-area-link" :to="props.linkTo">Login</router-link>
		</div>
	</div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
	heading: {
		type: String,
		default: 'Sign Up',
	},
	subheading: {
		type: String,
		default:
			'Get started in a few clicks and enjoy latest news from all around the world',
	},
	linkText: {
		type: String,
		default: 'Have an account?',
	},
	linkTo: {
		type: String,
		default: '/login',
	},
});
</script>

<style lang="scss" scoped>
@mixin fcenter($direction: row, $a: center, $j: center, $g: 0rem) {
	display: flex;
	flex-direction: $direction;
	justify-content: $j;
	align-items: $a;
	gap: $g;
}
.auth-sidebar {
	color: var(--white);
	width: 100%;
	height: 100%;
	background: var(--blue-gradient);
	border-radius: 1rem;
	box-shadow: 0px -7.4px 2.7px rgba(0, 0, 0, 0.012),
		0px -8.7px 6.9px rgba(0, 0, 0, 0.018),
		0px -0.2px 14.2px rgba(0, 0, 0, 0.022),
		0px 26.6px 29.2px rgba(0, 0, 0, 0.028), 0px 108px 80px rgba(0, 0, 0, 0.04);
	padding: 2rem;
	@include fcenter(column, flex-start, space-between, 5rem);
	.text-area {
		height: 100%;
		@include fcenter(column, flex-start, $g: 1rem);
		&-header {
			font-size: clamp(1rem, 5vw, 2rem);
		}
		&-subheader {
			font-size: clamp(0.8rem, 3vw, 1rem);
			color: var(--blue-text);
		}
	}
	.link-area {
		background: var(--light-blue);
		width: 100%;
		padding: 1rem;
		text-align: center;
		border-radius: 1rem;
		&-text {
			font-size: clamp(0.8rem, 3vw, 1rem);
			color: var(--blue-text);
		}
		&-link {
			text-decoration: none;
			color: var(--white);
			font-weight: 600;
			transition: letter-spacing 0.3s ease-in-out;
			&:hover {
				letter-spacing: 1px;
			}
		}
	}
}
@media only screen and (max-width: 768px) {
	.auth-sidebar {
		background: var(--blue-gradient-mobile);
		padding: 1rem;
		flex-direction: row;
		align-items: center;
		gap: 0.5rem;
		.text-area {
			gap: 0.2rem;
			&-subheader {
				line-height: 100%;
			}
		}
		.link-area {
			padding: 0.5rem;
			border-radius: 1rem;
			&-text {
				line-height: 100%;
			}
		}
	}
}
</style>
