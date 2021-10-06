<template>
	<div class="mainsidebar">
		<div class="user-details">
			<div class="user-image"></div>
			<div class="current-date">{{ currentDate }}</div>
			<div class="current-time">{{ currentTime }}</div>
		</div>
		<div class="page-links">
			<router-link to="/home"
				><div class="icon-box"><i class="uil uil-estate"></i></div>
				Home</router-link
			><router-link to="/international"
				><div class="icon-box"><i class="uil uil-circle"></i></div>
				International</router-link
			><router-link to="/business"
				><div class="icon-box"><i class="uil uil-bag"></i></div>
				Business</router-link
			><router-link to="/entertainment"
				><div class="icon-box"><i class="uil uil-play"></i></div>
				Entertainment</router-link
			><router-link to="/sports"
				><div class="icon-box"><i class="uil uil-basketball"></i></div>
				Sports</router-link
			><router-link to="/health"
				><div class="icon-box"><i class="uil uil-heart-medical"></i></div>
				Health</router-link
			>
		</div>
		<div class="upgrade-box">
			<div class="upgrade-box-left">
				<p>News in a box</p>
				<span>Coming soon</span>
				<button>Upgrade</button>
			</div>
			<div class="upgrade-box-right">
				<svg
					width="569"
					height="580"
					viewBox="0 0 569 580"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M10 111.5V454L293.5 568.5M10 111.5L293.5 217M10 111.5L293.5 11L558.5 111.5M293.5 568.5L558.5 454V111.5M293.5 568.5V217M558.5 111.5L293.5 217"
						stroke="white"
						stroke-width="20"
					/>
					<path
						d="M118.694 114.244L298.806 48.7563"
						stroke="white"
						stroke-width="20"
					/>
					<path
						d="M155 131.839L335.113 66.3513"
						stroke="white"
						stroke-width="20"
					/>
					<path
						d="M209 145.839L389.113 80.3513"
						stroke="white"
						stroke-width="20"
					/>
					<path
						d="M245 158.839L425.113 93.3513"
						stroke="white"
						stroke-width="20"
					/>
					<path
						d="M275 175.839L455.113 110.351"
						stroke="white"
						stroke-width="20"
					/>
				</svg>
			</div>
		</div>
	</div>
</template>

<script setup>
import { format } from 'date-fns';
import { ref } from 'vue';
const currentDate = ref('');
const currentTime = ref('');
//methods
const getDate = () => {
	const date = new Date();
	currentDate.value = `${format(date, 'MMMM do, yyyy')}`;
};
const getTime = () => {
	setInterval(() => {
		const date = new Date();
		currentTime.value = `${format(date, 'hh:mm a')}`;
	}, 1000);
};
getDate();
getTime();
</script>

<style lang="scss" scoped>
.mainsidebar {
	width: 100%;
	height: 100%;
	padding: 2rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	.user-details {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 0.2rem;
		.user-image {
			width: 50px;
			height: 50px;
			border-radius: 50%;
			background-color: #333;
		}
		.current-date {
			font-weight: 600;
		}
		.current-time {
			font-size: 0.9rem;
			color: var(--grey-text);
		}
	}
	.page-links {
		display: flex;
		flex-direction: column;
		gap: 2.5rem;
		a {
			display: flex;
			gap: 1rem;
			text-decoration: none;
			align-items: center;
			color: var(--grey-text);
			.icon-box {
				display: flex;
				justify-content: center;
				align-items: center;
				width: 35px;
				height: 35px;
				border-radius: 0.2rem;
				background: var(--very-lght-blue);
			}
			&.router-link-exact-active {
				color: #000;
				font-weight: 600;
				position: relative;
				&::after {
					content: '';
					position: absolute;
					right: 10%;
					top: 50%;
					width: 10px;
					height: 10px;
					border-radius: 50%;
					background: var(--dark-blue);
					transform: translateY(-50%);
				}
				.icon-box {
					background: var(--dark-blue);
					color: var(--white);
				}
			}
			&:hover {
				color: #000;
				font-weight: 600;
				.icon-box {
					background: var(--dark-blue);
					color: var(--white);
				}
			}
		}
	}
	.upgrade-box {
		width: 100%;
		background: var(--blue-gradient);
		border-radius: 1rem;
		color: var(--white);
		display: flex;
		padding: 1rem;
		height: 6rem;
		justify-content: space-between;
		&-left {
			p {
				font-weight: 600;
				line-height: 80%;
			}
			span {
				display: block;
				font-size: 0.8rem;
				color: var(--very-lght-blue);
				margin-bottom: 0.7rem;
			}
			button {
				display: block;
				outline: none;
				border: none;
				background: #0062ff;
				color: var(--white);
				padding: 0.3rem 1.2rem;
				border-radius: 5px;
				font-weight: 600;
			}
		}
		&-right {
			svg {
				width: 40px;
				height: auto;
			}
		}
	}
}
</style>
