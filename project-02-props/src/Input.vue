<template>
	<div>
		<p>{{ msg }}</p>
		
		<!-- Now the value of input is coming from props 'msg' -->
		<!-- On user input, changeMessage function is called, which gets the value of input and emits out on messageChanged method -->
		<input type="text" :value="msg" @input="changeMessage">

		<p>{{ message }}</p>

	</div>
</template>


<script>
	
export default {
	props: ['msg'], // new props (properties) is created

	data(){
		return {
			message: ''
		}
	},

	methods: {
		changeMessage(event){
			this.message = event.target.value;
			this.$emit('messageChanged', this.message);
		}
	}
}

</script>