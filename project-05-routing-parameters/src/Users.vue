<template>
  <div>

  	<h3>This is Users page</h3>

  	<p>The team id is : {{ $route.params.teamId }}</p>

  </div>
</template>


<script>
	
	export default {
		// watches the $route, and it fires whenever route is changed
		// parameters are to and from
		watch: {
			'$route' (to, from) {
				alert('From ' + from.params.teamId);
				alert('To ' + to.params.teamId);
			}
		},
		created() { // lifecycle hooks (created fires only once)
			alert('Life hooks created with teamId : ' + this.$route.params.teamId);
		}
	}

</script>
