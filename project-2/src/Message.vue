<template>
	<div>
		<h1>{{ title }}</h1>

		<!-- Here the msg is binded to 'title' which is coming from data below -->
		<!-- On messageChanged, the input value / the event occured changes the title and outputs the same -->
		<app-input :msg="title" @messageChanged="title = $event"></app-input>

	</div>
</template>


<script>
	import Input from './Input.vue';

	export default {
		data() {
			return {
				title: 'This is the message from Message.vue'
			}
		},

		components: {
			'app-input' : Input
		}
	}

</script>