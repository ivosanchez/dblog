<template>
	<nav>
		<ul>
			<li>
				<nuxt-link to="/">{{ content.index.title }}</nuxt-link>
      </li>
			<li>
				<nuxt-link to="/nested">nested</nuxt-link>
      </li>

			<li v-for="page in content.pages"  :key="page.title">

				<nuxt-link :to="page.path">{{ page.title }}</nuxt-link>

			</li>
		</ul>
	</nav>
</template>

<script>
import conf from "../conf"

export default {
	data() {
		return {
			content: null
		}
	},
	async fetch() {
		this.content = await this.$content(conf.CONTENT).fetch()
	}
}
</script>

<style scoped>
nav ul {
	display: flex;
	justify-content: space-around;
	outline: 1px dashed rgb(76, 93, 99);
	background: rgba(33, 35, 36, 0.87);
	list-style: none;
	text-transform: uppercase;
	padding: 0.3rem;
	font-family: 'Optician Sans', 'Ubuntu', sans-serif;
	outline: 1px solid rgb(50, 56, 61);
	border-radius: 5px;
	flex-wrap: wrap;
}

ul li {
	font-size: 1.2rem;
	text-transform: uppercase;
	text-decoration: none;
	/* padding: 0.5rem;
    margin: 0.5rem; */
}
</style>
