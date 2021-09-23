<template>
	<div class="signup">
		<div class="signup-container">
			<slot></slot>
		</div>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped>
@mixin fcenter($direction: row, $a: center, $j: center) {
	display: flex;
	flex-direction: $direction;
	justify-content: $j;
	align-items: $a;
}
.signup {
	width: 100vw;
	height: 100vh;
	@include fcenter();
	&-container {
		width: 98%;
		height: 95%;
		background: var(--white);
		border-radius: 1rem;
		padding: 1rem;
		box-shadow: 3.4px 3.4px 2.7px rgba(0, 0, 0, 0.003),
			8.7px 8.7px 6.9px rgba(0, 0, 0, 0.004),
			17.7px 17.7px 14.2px rgba(0, 0, 0, 0.006),
			36.5px 36.5px 29.2px rgba(0, 0, 0, 0.007),
			100px 100px 80px rgba(0, 0, 0, 0.1);
		display: grid;
		grid-template-columns: 25% auto;
		gap: 2rem;
	}
}
@media only screen and (max-width: 768px) {
	.signup {
		&-container {
			width: 100vw;
			height: 100vh;
			border-radius: 0;
			grid-template-columns: unset;
			grid-auto-rows: 20% auto;
		}
	}
}
</style>
