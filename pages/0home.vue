<template>
	<main class="home" :data-toggle="toggle">
		<div class="background">
		  <background-vector
				:alpha="0.25"
				:scale="backgroundScale"
				:viewbox="{ offsetX, offsetY }"
				class="home__vector"
			/>
			<h3 class="background__banner home__banner toggle-content">
				{{ content.banner }}
			</h3>
		</div>

		<section class="home__content home__desc toggle-content">
			<h1 class="home__title">{{content.index.title}}</h1>
			<h2 class="home__subtitle" v-html="content.index.subtitle"></h2>

			<div class="rte">
				<component
					v-for="item in content.text"
					:is="item.component"
					:item="item"
				/>
			</div>

			<div class="home__logos">
				<safe-link
					v-for="{ url, image } in content.logos"
					:url="url"
					class="home__link"
				>
					<img class="home__link--logo" :src="image.url" :alt="image.alt" />
				</safe-link>
			</div>

			<button-link type="fill" :to="content.path" class="home__cta">{{
				content.label
			}}</button-link>
		</section>

		<h3 v-if="$media.mobile" class="home__banner--mobile toggle-content">
			{{ content.banner }}
		</h3>
		<post-grid
			v-if="ready"
			:posts="posts"
			:forceColumns="!$media.mobile"
			:link="{ to: '/blogue', label: content.bloglabel }"
			class="home__content grid--home toggle-content"
		/>
		<div v-else class="home__content toggle-content"></div>

		<button-link
			v-if="$media.phone"
			to="/blogue"
			type="border"
			class="grid__link toggle-content"
			>{{ content.bloglabel }}</button-link
		>

		<transition name="up">
			<router-view class="home__panel" />
		</transition>

		<header-nav />
		<footer-nav :sidebars="sidebars" class="toggle-content" />
		<button v-if="!$media.mobile" class="home__back" @click="navBack">
			retour <icon :id="'return'" />
		</button>
	</main>
</template>

<script>
// import { PostGrid } from '@/components/postgrid'
// import metaData from '@/components/mixins/meta-data'

// import Api from 'src/api'

export default {
	// name: 'home-view',
	// components: { PostGrid },
	// mixins: [metaData],

	beforeMount() {
		// if (this.toggleContent) this.toggle = true

		// Api.dispatch
		// 	.fetchPostCollection(this.content.featured.map(({ post }) => post))
		// 	.then(({ posts }) => {
		// 		this.posts = posts
		// 		this.ready = true
		// 	})
	},

	data() {
		// return {
		// 	moves: 1,
		// 	posts: [],
		// 	ready: false,
		// 	toggle: false,
		// 	sidebars: {
		// 		right: { to: '/ecosysteme', modifier: 'primary' }
		// 	}
		// }
	},

	computed: {
		// toggleContent() {
		// 	return this.$route.name !== 'home'
		// },
		// content() {
		// 	return this.$store.state.content.home
		// },
		// offsetX() {
		// 	return this.$media.mobile ? null : -650
		// },
		// offsetY() {
		// 	return this.$media.mobile ? 200 : null
		// },
		// backgroundScale() {
		// 	return this.$media.mobile ? 2 : null
		// }
	},

	watch: {
		// $route(to, from) {
		// 	if (to.name !== 'home' && from.name !== 'home') {
		// 		this.moves++
		// 	} else {
		// 		this.moves = 1
		// 	}
		// },
		// toggleContent(to) {
		// 	if (to) {
		// 		this.toggle = true
		// 		document.body.scrollTop = 0
		// 	} else {
		// 		setTimeout(() => {
		// 			this.toggle = false
		// 			document.body.scrollTop = 0
		// 		}, 400)
		// 	}
		// }
	},

	methods: {
		// navBack() {
		// 	if (this.$store.state.moves) {
		// 		this.$router.go(-this.moves)
		// 	} else {
		// 		this.$router.push('/')
		// 	}
		// }
	}
}
</script>

<style lang="css">

</style>
