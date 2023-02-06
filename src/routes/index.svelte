<script>
  import AuthorCard from '$lib/AuthorCard.svelte'
  import PostsGrid from '$lib/PostsGrid.svelte'

  export let posts
  export let authors

  import { SoundCloud } from 'sveltekit-embed'



</script>

<svelte:head>
  <title>tm</title>
</svelte:head>
<div>
<h1>Recent</h1>

<PostsGrid {posts} />

<h2 style="margin-top: 4rem">{authors.length > 1 ? 's' : ''}</h2>

{#each authors as author}
  <AuthorCard {author} />
{/each}


</div>