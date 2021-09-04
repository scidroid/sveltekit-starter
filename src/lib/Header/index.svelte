<script lang="ts">
	import { page } from '$app/stores';
	import { store as authStore, logout } from '../auth';

	$: auth = $authStore;

	function handleLogout() {
		logout();
	}
</script>

<header>
	<div>
		<nav class="bg-white dark:bg-gray-800  shadow ">
			<div class="max-w-7xl mx-auto px-8">
				<div class="flex items-center justify-between h-16">
					<div class="w-full justify-between flex items-center">
						<a class="flex-shrink-0" href="/">
							<img
								class="h-8 w-8"
								src="https://cdn.discordapp.com/attachments/878471396370559026/881298756211978299/Diseno_sin_titulo_1.png"
								alt="Workflow"
							/>
						</a>
						<div class="md:block">
							<div class="ml-10 flex items-baseline space-x-4">
								<a
									class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
									href="/app"
								>
									Home
								</a>
								<a
									class="text-gray-300  hover:text-gray-800 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium"
									href="/join"
								>
									join
								</a>
								{#if !auth && !auth.user}
									<a
										href="/auth"
										class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
										>Login</a
									>
								{:else}
									<a
										href="javascript:void(0)"
										on:click|preventDefault={handleLogout}
										class="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
										>Logout</a
									>
								{/if}
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	</div>
</header>
