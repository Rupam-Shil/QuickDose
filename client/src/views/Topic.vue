<template lang="">
	<div class="container">
		<div class="sidebar">
			<div class="side-text">
				<h1>Create account</h1>
				<p>
					Create your account in a few steps and start enjoying uninterrupted
					reading experience.
				</p>
				<img src="logo.svg" />
			</div>
		</div>
		<div class="main-section">
			<div class="cont">
				<div class="heading">
					<h1>Choose Topics</h1>
					<p>Some topics you like to see in the news feed</p>
				</div>

				<label class="items"></label>
				<input type="checkbox" class="interests" />
				<span class="sp">International</span>

				<label class="items"></label>
				<input type="checkbox" class="interests" />
				<span class="sp">Business</span>

				<label class="items"></label>
				<input type="checkbox" class="interests" />
				<span class="sp">Entertainment</span>

				<label class="items"></label>
				<input type="checkbox" class="interests" />
				<span class="sp">Sports</span>

				<label class="items"></label>
				<input type="checkbox" class="interests" />
				<span class="sp">Health</span>
			</div>
			<a href="">Previous Page</a>
		</div>
	</div>

	<!-- Modal section -->
	<div class="bg-modal">
		<div class="modal-content">
			<form action="#">
				<div class="user-details">
					<div class="input-box">
						<input type="text" placeholder="First Name" required />
					</div>
					<div class="input-box">
						<input type="text" placeholder="Last Name" required />
					</div>
					<div class="input-box">
						<input type="text" placeholder="Email id" required />
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script setup>
import { isSignedUp } from '@/composables/isAuthed.js';
isSignedUp();
</script>

<style lang="scss" scoped>
.container {
	display: grid;
	grid-template-columns: 40% 60%;
	background: #fbfbfd;
}

.sidebar {
	display: grid;
	background: #e2e6f2;
	height: 100vh;
	padding: 25px;
	align-items: center;
	justify-content: center;
	margin: 10px;
	border-radius: 20px;
}

.side-text {
	padding: 30px;
}

.cont {
	display: grid;
	gap: 10px;
}
.main-section {
	display: grid;
	place-items: center;
	padding: 30px;
	text-align: center;

	.items {
		padding: 5px;
	}
}

.interests {
	display: none;
}

.sp {
	padding: 7px 14px;
	border: 1px solid black;
	border-radius: 30px;
	cursor: pointer;
}

span:hover {
	background-color: #e2e6f2;
}

.bg-modal {
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	background-color: rgba(0, 0, 0, 0.7);
	display: flex;
	justify-content: center;
	align-items: center;
}

.modal-content {
	width: 500px;
	height: 300px;
	background-color: white;
	border-radius: 4px;
}
</style>
