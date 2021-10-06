<template>
	<AuthLayout>
		<AuthSidebar />
		<AuthRightContainer>
			<div class="text-area">
				<div class="name-area">
					<div class="part1 text">Your name is</div>
					<div class="button-section">
						<input
							type="text"
							class="text-input input"
							ref="inputname"
							v-model="nameValue"
							required
						/>
						<button
							type="button"
							class="arrow"
							@click="makeVisible(nameValue, inputname)"
						>
							⟶
						</button>
					</div>
				</div>
				<br />
				<div class="email-area" v-if="isEmailVisible">
					<div class="part2 text">
						and you would like to signup with email address
					</div>
					<div class="button-section">
						<input
							type="email"
							v-model="emailValue"
							autocomplete="true"
							ref="inputemail"
							class="email-input input"
							required
						/>
						<button
							class="arrow"
							@click="makeVisible(emailValue, inputemail, emailValidator)"
						>
							⟶
						</button>
					</div>
				</div>
				<br />
				<br v-if="isSmallHeight" />
				<br />
				<div class="password-area" v-if="isPasswordVisible">
					<span class=" text part3">
						Every modern generation comes with modern passwords. Make
					</span>
					<span class=" text part4">
						sure your password is atleast 6 letter long with numbers and symbols
					</span>
					<div class="button-section delay-4">
						<input
							type="password"
							v-model="passwordValue"
							ref="inputPassword"
							autocomplete="true"
							class="password-input input"
							required
						/>
						<button
							class="arrow"
							@click="
								makeVisible(passwordValue, inputPassword, passWordValidator)
							"
						>
							⟶
						</button>
					</div>
				</div>
				<br />
				<br v-if="isSmallHeight" />
				<br v-if="isSmallHeight" />
				<div class="success-area" v-if="isSuccessedVisible">
					<span class=" text part5">
						Great! You are all set 🎉
					</span>
					<button class="signupbtn" @click="sendDetails">Create Account</button>
				</div>
			</div>
		</AuthRightContainer>
	</AuthLayout>
</template>

<script setup>
import AuthLayout from '../layouts/AuthLayout.vue';
import AuthSidebar from '../components/AuthSidebar.vue';
import AuthRightContainer from '../components/AuthRightContainer.vue';
import { useStore } from 'vuex';
import { computed } from 'vue';
import { useRouter } from 'vue-router';

import { ref } from 'vue';
import gsap from 'gsap';
import { sendDataPost } from '../composables/fromAxios.js';
//data
const isEmailVisible = ref(false);
const isPasswordVisible = ref(false);
const isSuccessedVisible = ref(false);

const isSmallHeight = ref(false);
//input values
const nameValue = ref('');
const emailValue = ref('');
const passwordValue = ref('');
//html refs
const inputname = ref('');
const inputemail = ref('');
const inputPassword = ref('');

//store and route
const store = useStore();
const router = useRouter();
// const userDetails = computed(() => store.state.userDetails);

//session storage
(() => {
	let user = sessionStorage.getItem('userDetails');
	if (user) {
		user = JSON.parse(user);
		store.commit('setUserDetails', user);
		// router.push(`/${user.id}`);
		router.push(`/home`);
	}
})();

//methods

const makeVisible = (toCheck, el, extraFunction = null) => {
	if (toCheck === '' || toCheck === null) {
		gsapInputInvalid(el);
		return;
	} else {
		const checking = extraFunction !== null ? extraFunction() : true;
		if (checking) {
			gsap.to(el, {
				borderBottom: '1px solid var(--grey-text)',
				duration: 0.5,
			});

			// if (!isEmailVisible.value) {
			// 	isEmailVisible.value = true;
			// } else {
			// 	isPasswordVisible.value = true;
			// }
			if (!isEmailVisible.value) {
				isEmailVisible.value = true;
			} else if (isEmailVisible.value && !isPasswordVisible.value) {
				isPasswordVisible.value = true;
			} else {
				isSuccessedVisible.value = true;
			}
		} else {
			gsapInputInvalid(el);
		}
	}
};
const gsapInputInvalid = (el) => {
	gsap.set(el, {
		x: 10,
		y: 10,
	});
	gsap.to(el, {
		borderBottom: '2px solid var(--warning)',
		x: 0,
		y: 0,
		duration: 1,
		ease: 'elastic.out(1, 0.3)',
	});
};

const emailValidator = () => {
	const re = /\S+@\S+\.\S+/;
	return re.test(emailValue.value);
};
const passWordValidator = () => {
	const re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
	return re.test(passwordValue.value);
};
const sendDetails = async () => {
	const details = {
		name: nameValue.value.toLowerCase(),
		email: emailValue.value.toLowerCase(),
		password: passwordValue.value,
	};
	const data = await sendDataPost('http://localhost:5000/auth/signup', details);
	if (!data.error) {
		store.commit('setUserDetails', data);
		sessionStorage.setItem('userDetails', JSON.stringify(data));
		router.push('/topic');
	} else {
		console.log(data.error);
	}
};

const checkSmallheight = () => {
	if (window.innerHeight < 600) {
		isSmallHeight.value = false;
	} else {
		isSmallHeight.value = true;
	}
};
checkSmallheight();
</script>

<style lang="scss" scoped>
@mixin animationChar($char) {
	animation: reveal 1s ease-in-out forwards;
	animation-timing-function: steps($char, end);
	animation-delay: 0.2s;
}
.arrow {
	outline: none;
	border: none;
	background: transparent;
	font-size: 1.5em;
	border-bottom: 1px solid var(--grey-text);
	vertical-align: text-bottom;
	transition: 0.3s;
	margin-right: 0.5rem;
	&:hover {
		color: var(--light-blue);
	}
}

.input {
	outline: none;
	border: none;
	margin-left: 0.5rem;
	width: max-content;
	min-width: 3rem;
	font-weight: 600;
	font-size: 1.6rem;
	color: var(--black-text);
	border-bottom: 1px solid var(--grey-text);
	vertical-align: text-bottom;
}

.text {
	color: var(--grey-text);
	font-size: clamp(1rem, 5vw, 1.5rem);
	position: relative;
	display: inline-block;
	&::after {
		content: '';
		position: absolute;
		height: 100%;
		width: 100%;
		right: 0;
		background: var(--white);
	}
}
.part1 {
	&::after {
		@include animationChar(12);
	}
}
.part2 {
	&::after {
		@include animationChar(47);
	}
}
.part3 {
	&::after {
		@include animationChar(56);
		animation-duration: 2s;
	}
}
.part4 {
	&::after {
		@include animationChar(58);
		animation-delay: 2s;
		animation-duration: 2s;
	}
}
.part5 {
	&::after {
		@include animationChar(25);
	}
}
.button-section {
	display: inline-block;
	position: relative;
	&::after {
		content: '';
		position: absolute;
		width: 100%;
		right: 0;
		top: 0;
		height: 100%;
		background: var(--white);
		animation: reveal 1s ease-in-out forwards;
		animation-delay: 1s;
	}
}
.delay-4 {
	&::after {
		animation-delay: 4s !important;
	}
}

.email-area {
	display: inline-block;
}
.signupbtn {
	margin-top: 1rem;
	display: block;
	outline: none;
	border: none;
	background: var(--blue-gradient-mobile);
	color: #fff;
	font-weight: 600;
	padding: 0.8rem 1rem;
	border-radius: 0.5rem;
	transition: 0.2s ease-in-out;
	opacity: 0;
	&:hover {
		letter-spacing: 1px;
	}
	animation: toVisible 1s linear forwards;
	animation-delay: 1s;
}
@keyframes reveal {
	100% {
		width: 0;
	}
}
@keyframes toVisible {
	100% {
		opacity: 1;
	}
}
</style>
