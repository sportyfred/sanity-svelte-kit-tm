<script>

  import PostsGrid from '$lib/WorksGrid.svelte'

  export let posts
 
</script>

<svelte:head>
  <title>tm</title>
</svelte:head>
<div>
<h2>Work</h2>


<PostsGrid {posts} />



</div>