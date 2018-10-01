<template>
	<div>
		<h1>This is the message from Message.vue</h1>

		<!-- component app-input is created below in the script -->
		<app-input></app-input>

	</div>
</template>


<script>
	// All the content from Input.vue file will be fetched by name mentioned as Input
	import Input from './Input.vue';

	export default {
		components: {
			'app-input' : Input // creating component app-input and assigning from variable name 'Input'
		}
	}

</script>