<template>
	<AuthLayout>
		<AuthSidebar
			:heading="pageDeatils.heading"
			:subheading="pageDeatils.subheading"
			:linkText="pageDeatils.linkText"
			:linkTo="pageDeatils.linkTo"
			:linkToText="pageDeatils.linkToText"
		/>
		<AuthRightContainer>
			<div class="main-area">
				<h1>Welcome Back 👋</h1>
				<div class="email-area">
					<label>Email</label>
					<input type="email" v-model="emailValue" ref="emailBox" />
				</div>
				<div class="password-area">
					<label>Password</label>
					<div class="password-area-wrapper">
						<input type="password" ref="passwordType" v-model="passwordValue" />
						<button @click="togglePasswordVisibilty">
							<svg
								v-if="!showPassword"
								width="872"
								height="652"
								viewBox="0 0 872 652"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M319.975 326C319.975 355.704 331.774 384.192 352.779 405.196C373.783 426.2 402.27 438 431.975 438C461.679 438 490.166 426.2 511.171 405.196C532.175 384.192 543.975 355.704 543.975 326C543.975 296.296 532.175 267.808 511.171 246.804C490.166 225.8 461.679 214 431.975 214C402.27 214 373.783 225.8 352.779 246.804C331.774 267.808 319.975 296.296 319.975 326V326ZM866.175 300.2C771.375 100.5 628.075 0 435.975 0C243.775 0 100.575 100.5 5.77453 300.3C1.97207 308.352 0 317.146 0 326.05C0 334.954 1.97207 343.748 5.77453 351.8C100.575 551.5 243.875 652 435.975 652C628.175 652 771.375 551.5 866.175 351.7C873.875 335.5 873.875 316.7 866.175 300.2V300.2ZM431.975 502C334.775 502 255.975 423.2 255.975 326C255.975 228.8 334.775 150 431.975 150C529.175 150 607.975 228.8 607.975 326C607.975 423.2 529.175 502 431.975 502Z"
									fill="black"
								/>
							</svg>
							<svg
								v-else
								width="872"
								height="772"
								viewBox="0 0 872 772"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M432 504C461.704 504 490.192 492.2 511.196 471.196C532.2 450.192 544 421.704 544 392C544 388.72 543.85 385.47 543.57 382.26L422.26 503.57C425.47 503.85 428.71 504 432 504ZM802.72 45.5601L760 2.8801C758.5 1.38095 756.466 0.538818 754.345 0.538818C752.224 0.538818 750.19 1.38095 748.69 2.8801L639.37 112.23C579.063 81.4101 511.273 66.0001 436 66.0001C243.8 66.0001 100.4 166.1 5.79998 366.3C1.99752 374.352 0.0254517 383.146 0.0254517 392.05C0.0254517 400.955 1.99752 409.748 5.79998 417.8C43.6 497.42 89.1166 561.237 142.35 609.25L36.56 715C35.0608 716.5 34.2187 718.534 34.2187 720.655C34.2187 722.776 35.0608 724.81 36.56 726.31L79.25 769C80.7501 770.499 82.7842 771.341 84.905 771.341C87.0258 771.341 89.0598 770.499 90.56 769L802.72 56.8801C803.464 56.1371 804.054 55.2548 804.456 54.2836C804.859 53.3124 805.066 52.2714 805.066 51.2201C805.066 50.1688 804.859 49.1278 804.456 48.1566C804.054 47.1854 803.464 46.3031 802.72 45.5601ZM256 392C255.997 361.601 263.868 331.719 278.847 305.266C293.825 278.812 315.4 256.69 341.469 241.053C367.539 225.416 397.214 216.798 427.604 216.039C457.994 215.28 488.062 222.405 514.88 236.72L466.26 285.34C446.652 279.062 425.693 278.306 405.684 283.155C385.675 288.004 367.387 298.271 352.829 312.829C338.271 327.388 328.004 345.675 323.155 365.684C318.305 385.694 319.062 406.652 325.34 426.26L276.72 474.88C263.076 449.388 255.957 420.914 256 392V392Z"
									fill="black"
								/>
								<path
									d="M866.2 366.2C831 292.067 789.103 231.617 740.51 184.85L596.37 329C608.52 360.762 611.213 395.362 604.124 428.621C597.035 461.88 580.466 492.374 556.42 516.42C532.374 540.466 501.88 557.035 468.621 564.124C435.362 571.214 400.761 568.52 369 556.37L246.74 678.63C303.46 704.877 366.547 718 436 718C628.2 718 771.6 617.9 866.2 417.7C870.003 409.649 871.976 400.855 871.976 391.95C871.976 383.046 870.003 374.252 866.2 366.2V366.2Z"
									fill="black"
								/>
							</svg>
						</button>
					</div>
				</div>
				<button class="login-in-btn" @click="sendDetails">Log In</button>
				<p>Forgot Password?<a href="#">Click here</a></p>
			</div>
		</AuthRightContainer>
	</AuthLayout>
</template>

<script setup>
import AuthLayout from '../layouts/AuthLayout.vue';
import AuthSidebar from '../components/AuthSidebar.vue';
import AuthRightContainer from '../components/AuthRightContainer.vue';
import { ref } from 'vue';
import { sendDataPost } from '../composables/fromAxios';
import gsap from 'gsap';
import { setSession } from '../composables/checkSession';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
//data
const showPassword = ref(false);
const passwordType = ref('');
const emailValue = ref('');
const passwordValue = ref('');
const emailBox = ref('');
const store = useStore();
const router = useRouter();
//methods
const togglePasswordVisibilty = () => {
	if (!showPassword.value) {
		showPassword.value = true;
		passwordType.value.type = 'text';
	} else {
		showPassword.value = false;
		passwordType.value.type = 'password';
	}
};

const sendDetails = async () => {
	if (emailValue.value !== '' && passwordValue.value !== '') {
		const emailCheck = emailValidator();
		if (emailCheck) {
			const details = {
				email: emailValue.value,
				password: passwordValue.value,
			};
			const data = await sendDataPost(
				'http://localhost:5000/auth/login',
				details
			);
			if (!data.error) {
				console.log('here');
				setSession(data);
				store.commit('setUserDetails', data);
				router.push(`/home`);
			} else {
				console.log(data);
			}
		} else {
			triggerGsap(emailBox.value);
		}
	} else {
		if (emailValue.value === '') {
			triggerGsap(emailBox.value);
		}
		if (passwordValue.value === '') {
			triggerGsap(passwordType.value);
		}
	}
};

const triggerGsap = (el) => {
	gsap.set(el, {
		borderBottom: '2px solid var(--warning)',
		x: 10,
		y: 10,
	});
	gsap.to(el, {
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

const pageDeatils = {
	heading: 'Login',
	subheading:
		'Welcome back! Please Login to grab news specially brewing up for you',
	linkText: "Dont't Have An Account?",
	linkTo: '/signup',
	linkToText: 'Sign Up',
};
</script>

<style lang="scss" scoped>
.main-area {
	display: flex;
	flex-direction: column;
	gap: 2rem;
	h1 {
		font-weight: 600;
	}
	label {
		display: block;
		color: var(--grey-text);
		font-size: 1.1rem;
	}
	input {
		width: 50%;
		height: 2rem;
		outline: none;
		border: none;
		border-bottom: 2px solid var(--grey-text);
		font-size: 1.1rem;
		font-weight: 400;
	}
	.password-area {
		&-wrapper {
			display: flex;
			align-items: center;
			button {
				svg {
					height: 20px;
					width: 20px;
				}
				outline: none;
				border: none;
				background: transparent;
				cursor: pointer;
			}
		}
		margin-bottom: 2rem;
	}
	.login-in-btn {
		outline: none;
		border: none;
		width: 10rem;
		padding: 0.5rem;
		background: var(--blue-gradient-mobile);
		color: #fff;
		border-radius: 0.2rem;
		margin-bottom: 1rem;
		font-weight: 600;
		cursor: pointer;
	}
}
</style>
