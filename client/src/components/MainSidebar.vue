<template>
	<div class="mainsidebar">
		<div class="user-details">
			<div class="user-image"></div>
			<div class="current-date">Feb 02, 2020</div>
			<div class="current-time">08:43am</div>
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
					width="553"
					height="563"
					viewBox="0 0 553 563"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M2 103.5V446L285.5 560.5M2 103.5L285.5 209M2 103.5L285.5 3L550.5 103.5M285.5 560.5L550.5 446V103.5M285.5 560.5V209M550.5 103.5L285.5 209"
						stroke="white"
						stroke-width="4"
					/>
					<path
						d="M110.694 106.244L290.806 40.7563"
						stroke="white"
						stroke-width="4"
					/>
					<path
						d="M147 123.839L327.113 58.3513"
						stroke="white"
						stroke-width="4"
					/>
					<path
						d="M201 137.839L381.113 72.3513"
						stroke="white"
						stroke-width="4"
					/>
					<path
						d="M237 150.839L417.113 85.3513"
						stroke="white"
						stroke-width="4"
					/>
					<path
						d="M267 167.839L447.113 102.351"
						stroke="white"
						stroke-width="4"
					/>
				</svg>
			</div>
		</div>
	</div>
</template>

<script setup></script>

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
		}
	}
	.upgrade-box {
		width: 80%;
		background: var(--blue-gradient);
		border-radius: 1rem;
		color: var(--white);
		display: flex;
		padding: 1rem;
		justify-content: space-between;
		&-left {
			p {
				font-weight: 600;
			}
			span {
				font-size: 0.9rem;
				color: var(--very-lght-blue);
				margin-bottom: 1rem;
			}
			button {
				display: block;
				outline: none;
				border: none;
				background: #0062ff;
				color: var(--white);
				padding: 0.3rem 1.2rem;
				border-radius: 5px;
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
