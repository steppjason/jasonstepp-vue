<template>
	<Header />
	<div class="wrapper">
		<main>
			<router-view v-slot="{ Component }">
				<transition name="route" mode="out-in">
					<component :is="Component"></component>
				</transition>
			</router-view>
		</main>
	</div>
	<Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
	name: "App",
	components: {
		Header,
		Footer,
	},
};
</script>
