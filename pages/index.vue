<template>
	<main>
		<h1 v-html="content.index.title"></h1>
		<div v-html="content.index.content"></div>
		<div>
			<img :src="src" alt="flowers" />
		</div>
	</main>
</template>

<script>
import conf from '../conf'

export default {
	head() {
		return { title: this.content.title }
	},
	async asyncData({ $content }) {
		const content = await $content(conf.CONTENT).fetch()
		return { content }
	},
  // ------
	data() {
		return {
			src: this.$cloudinary.image.url('https://res.cloudinary.com/eyelites-es/image/upload/v1593453456/sample.jpg', {
				gravity: 'auto:subject',
				width: '200',
				height: 200,
				crop: 'fill',
				radius: 'max'
			})
		}
	}
  // -----------
}
</script>



<style scoped>
* {
	outline: 0.2px dashed rgba(52, 82, 83, 0.7);
}

img,
absolute,
Post,
VP {
	max-height: 7rem;
	widows: auto;
}

main {
	margin: auto;
	max-width: 49%;
	padding: 2rem;
	display: flex;
	flex-wrap: wrap;
	color: rgb(153, 162, 0.3);
}

.hr {
	width: 100px;
	border-width: 3px;
	margin: 20px auto;
	text-align: center;
}

hr::before {
	content: '***';
	color: rgba(68, 75, 78, 0.3);
}
.flex {
	outline: 1px solid rgb(12, 12, 12.8);
	display: flex;
	flex-wrap: wrap;
	flex-flow: row;
	flex-direction: row;
}
</style>

