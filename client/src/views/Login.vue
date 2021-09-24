<template>
	<AuthLayout>
		<AuthSidebar
			:heading="pageDeatils.heading"
			:subheading="pageDeatils.subheading"
			:linkText="pageDeatils.linkText"
			:linkTo="pageDeatils.linkTo"
			:linkToText="pageDeatils.linkToText"
		/>
		<div class="login-main"></div>
	</AuthLayout>
</template>

<script setup>
import AuthLayout from '../layouts/AuthLayout.vue';
import AuthSidebar from '../components/AuthSidebar.vue';

const pageDeatils = {
	heading: 'Login',
	subheading:
		'Welcome back! Please Login to grab news specially brewing up for you',
	linkText: "Dont't Have An Account?",
	linkTo: '/signup',
	linkToText: 'Sign Up',
};
</script>

<style lang="scss" scoped></style>
