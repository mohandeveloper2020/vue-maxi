<template>
	<div>
		
		<!-- v-model for two-way data binding -->
		<input type="text" v-model="title">

		<!-- string interpolation -->
		<p>{{ title }}</p>

	</div>
</template>


<script>
	
export default {
	data(){
		return {
			title: ''
		}
	}
}

</script>