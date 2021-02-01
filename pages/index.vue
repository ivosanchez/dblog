<template>
	<main class="
    home view__content slide--inner">

    <div class="background">
      <svg></svg>
      <h3 class="background__banner home__banner toggle-content">
        à lire
      </h3>
    </div>

		<h1
      class="home__title"
		  v-html="content.index.title">
    </h1>






		<div
        class="home__desc"
        v-html="content.index.content">
		</div>

			<div class="frame">
				<img :src="src" alt="flowers" />
			</div>

<div>

  </div>
  </main>
</template>

<script>
import conf from '../conf'

export default {
	head() {
		return {
      title: this.content.title
    }
	},
	async asyncData({ $content }) {
		const content = await $content(conf.CONTENT).fetch()
		return { content }
	},
	// ------
	data() {
		return {
			src: this.$cloudinary.image.url(
				'https://res.cloudinary.com/eyelites-es/image/upload/v1593453456/sample.jpg',
				{
					gravity: 'auto:subject',
					width: '300',
					height: 300,
					crop: 'fill',
					radius: 'max'
				}
			)
		}
	}

}
</script>



<style scoped>

</style>

