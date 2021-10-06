<template>
	<div class="container">
		<div class="sidebar">
			<div class="sidebar-content">
				<h1>Create account</h1>
				<p>
					Create your account in a few steps and start enjoying uninterrupted
					reading experience.
				</p>
			</div>
		</div>

		<div class="main-section">
			<div class="heading">
				<h1>Choose Topics</h1>
				<p>Some topics you like to see in the news feed</p>
			</div>
			<div class="interest-topics">
				<div class="each-item">
					<input
						type="checkbox"
						v-model="choosedTopics"
						value="international"
						class="interests"
					/>
					<div class="each-item-content">
						<i class="uil uil-camera"></i>
						<p>
							International
						</p>
					</div>
				</div>

				<div class="each-item">
					<input
						type="checkbox"
						v-model="choosedTopics"
						value="business"
						class="interests"
					/>
					<div class="each-item-content">
						<i class="uil uil-suitcase"></i>
						<p>
							Business
						</p>
					</div>
				</div>
				<div class="each-item">
					<input
						type="checkbox"
						v-model="choosedTopics"
						value="entertainment"
						class="interests"
					/>
					<div class="each-item-content">
						<i class="uil uil-play"></i>
						<p>
							Entertainment
						</p>
					</div>
				</div>
				<div class="each-item">
					<input
						type="checkbox"
						v-model="choosedTopics"
						value="sports"
						class="interests"
					/>
					<div class="each-item-content">
						<i class="uil uil-volleyball"></i>
						<p>
							Sports
						</p>
					</div>
				</div>
				<div class="each-item">
					<input
						type="checkbox"
						v-model="choosedTopics"
						value="health"
						class="interests"
					/>
					<div class="each-item-content">
						<i class="uil uil-dumbbell"></i>
						<p>Health</p>
					</div>
				</div>
			</div>
			<footer>
				<button>⟵ Previous Step</button>
				<button @click="sendRequest">Next Step ⟶</button>
			</footer>
		</div>
		<div class="bx" v-if="showModal">
			<div class="box">
				<i class="uil uil-check-circle"></i>
				<h2>All Done</h2>
				<p>Start with the latest news</p>
				<button @click="pushToHome">Continue</button>
			</div>
		</div>
	</div>

	<!-- Modal section -->
</template>

<script setup>
// import { isSignedUp } from '@/composables/isAuthed.js';
import { ref, computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import axios from 'axios';

// isSignedUp();

const store = useStore();
const router = useRouter();

const userId = computed(() => store.state.userDetails);

//Input bindings
const choosedTopics = ref([]);

const pushToHome = () => {
	// router.push(`/${userId.value.id}`);
	router.push(`/home`);
};

const showModal = ref(false);

const sendRequest = async () => {
	console.log(choosedTopics.value.length);
	if (choosedTopics.value.length > 0) {
		const res = await axios.put('http://localhost:5000/auth/interest', {
			interest: choosedTopics.value,
			id: userId.value.id,
		});
		showModal.value = true;
	} else {
		return;
	}
};
</script>

<style lang="scss" scoped>
.bx {
	position: fixed;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background: rgba(0, 0, 0, 0.3);
	.box {
		position: absolute;
		width: 300px;
		height: 300px;
		background: var(--white);
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		gap: 1.5rem;
		border-radius: 1rem;
		i {
			transform: scale(4);
			color: var(--lime-green);
		}
		h2 {
			font-weight: 600;
		}
		p {
			color: var(--grey-text);
		}
		button {
			outline: none;
			border: none;
			background: var(--blue-gradient-mobile);
			color: var(--white);
			padding: 0.5rem 1rem;
			border-radius: 0.5rem;
			transform: scale(1.2);
			cursor: pointer;
		}
	}
}

.container {
	display: grid;
	grid-template-columns: 30% auto;
	background: var(--light-gray-bg);
	height: 100vh;
	padding: 1rem;
	gap: 2rem;
}

.sidebar {
	background: var(--very-lght-blue);
	height: 100%;
	justify-content: center;
	border-radius: 1rem 0 0 1rem;
	padding: 3rem;
	display: flex;
	align-items: center;
	background: url(../assets/topic.png);
	background-position: right bottom;
	&-content {
		margin-top: -8rem;
		display: flex;
		flex-direction: column;
		h1 {
			margin-bottom: 1rem;
			font-weight: 600;
		}
		p {
			width: 90%;
			color: var(--grey-text);
			line-height: 200%;
		}
	}
}

.main-section {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 3rem 1rem;

	.heading {
		h1 {
			font-weight: 500;
		}
		p {
			color: var(--grey-text);
			font-size: 1.1rem;
		}
	}
}

.interest-topics {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 2rem;
	width: 80%;
	.each-item {
		width: 20rem;
		height: 8rem;
		position: relative;
		input {
			width: 100%;
			height: 100%;
			position: absolute;
			opacity: 0;
			&:checked ~ .each-item-content {
				border: 2px solid var(--light-blue);
				color: var(--light-blue);
				font-weight: 600;
				&::after {
					opacity: 1;
				}
			}
		}
		&-content {
			color: var(--grey-text);
			width: 100%;
			height: 100%;
			background: var(--white);
			border-radius: 1rem;
			display: flex;
			justify-content: center;
			gap: 1rem;
			align-items: center;
			box-shadow: 12.5px 12.5px 10px rgba(0, 0, 0, 0.02),
				100px 100px 80px rgba(0, 0, 0, 0.04);
			p {
				font-size: 1.1rem;
			}

			&::after {
				content: '✓';
				position: absolute;
				width: 40px;
				height: 40px;
				border-radius: 50%;
				background: var(--light-blue);
				right: -20px;
				top: -20px;
				display: flex;
				justify-content: center;
				align-items: center;
				color: var(--white);
				opacity: 0;
				pointer-events: none;
			}
		}
	}
}

footer {
	width: 80%;
	display: flex;
	justify-content: space-between;
	button {
		outline: none;
		border: none;
		background: none;
		font-size: 1.1rem;
		color: var(--grey-text);
		transition: all 0.3s ease-in-out;
		&:hover {
			transform: scale(1.1);
			color: #000;
			font-weight: 600;
			letter-spacing: 1px;
		}
	}
}
</style>
