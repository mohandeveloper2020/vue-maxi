<template>
  <div id="app">

    <h1>Let's go somewhere</h1>

    <hr/>

    <!-- router-link with path to , changes the page without refreshing browser -->
    <router-link to="/">Home</router-link>
    <router-link to="/users">Users</router-link>

    <hr/>

    <!-- 'router-view' is default component created from vue for showing the content of routed page -->
    <router-view></router-view>

    <!-- routing to home page by method goHome -->
    <button @click="goHome">Go to Home</button>

  </div>
</template>


<script>
	
	export default {
		methods: {
			goHome() {
				this.$router.push('/'); // pushes to the homepage ('/') with $router
			}
		}
	}

</script>
