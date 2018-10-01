<template>
  <div id="app">

    <h1>Let's go somewhere</h1>

    <hr/>

    <!-- router-link with path to , changes the page without refreshing browser -->
    <router-link to="/">Home</router-link>

    <!-- manually adding teamId as 10, which actually redirects to users page only -->
    <router-link to="/users/10">Users 10</router-link>
    <router-link to="/users/20">Users 20</router-link>


    <hr/>

    <router-view></router-view>

  </div>
</template>
