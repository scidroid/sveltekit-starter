<script lang="ts">
	import * as auth from '$lib/auth';
	import { goto } from '$app/navigation';

	let email = '';
	let submitting = false;

	async function login() {
		try {
			submitting = true;
			await auth.login(email);
			goto('/app');
		} catch (err) {
			submitting = false;
			console.log(err);
		}
	}
</script>

<svelte:head>
	<title>Login</title>
</svelte:head>

<div class="content">
	<form on:submit|preventDefault={login}>
		<label for="email">Email</label>
		<input id="email" bind:value={email} />
		<div class="btn-container">
			<button type="submit">Login</button>
		</div>
	</form>
</div>
