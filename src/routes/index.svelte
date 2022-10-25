<script>
  import AuthorCard from '$lib/AuthorCard.svelte'
  import PostsGrid from '$lib/PostsGrid.svelte'

  export let posts
  export let authors
</script>

<svelte:head>
  <title>Works</title>
</svelte:head>
<div class="card">
<h1>Recent works</h1>

<PostsGrid {posts} />

<h2 style="margin-top: 4rem">{authors.length > 1 ? 's' : ''}</h2>

{#each authors as author}
  <AuthorCard {author} />
{/each}

</div>