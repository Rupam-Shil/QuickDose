<template>
	<router-view />
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800,900&display=swap');
*,
*::before,
*::after {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
:root {
	--bg-color: #e1e1e1;
	--white: #ffffff;
	--blue-text: #dde7f8;
	--blue-gradient: linear-gradient(
		200deg,
		hsl(216, 71%, 65%) 50%,
		hsl(217, 67%, 54%) 90%
	);
	--blue-gradient-mobile: linear-gradient(
		90deg,
		hsl(216, 71%, 65%) 10%,
		hsl(217, 67%, 54%) 90%
	);
	--light-blue: #5890eb;
}
body {
	font-family: 'Poppins', sans-serif;
	background: var(--bg-color);
}
</style>
