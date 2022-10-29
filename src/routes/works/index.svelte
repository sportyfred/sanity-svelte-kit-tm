<script>
  import AuthorCard from '$lib/AuthorCard.svelte'
  import PostsGrid from '$lib/WorksGrid.svelte'

  export let posts
 
</script>

<svelte:head>
  <title>tm</title>
</svelte:head>
<div>
<h1>Works</h1>


<PostsGrid {posts} />



</div>