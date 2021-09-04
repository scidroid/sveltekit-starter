<script lang="ts" context="module">
	import { store as authStore } from '$lib/auth';

	export async function load({ fetch }) {
		const res = await fetch('/api/auth/user');
		const { user } = await res.json();
		authStore.set({
			loading: false,
			user
		});
		return {
			status: 200,
			context: {
				user
			}
		};
	}
</script>

<script lang="ts">
	import "../app.postcss";
    import Header from '$lib/Header/index.svelte';
</script>

<Header>

<main>
	<slot>
</slot></main>
</Header>
<slot></slot>