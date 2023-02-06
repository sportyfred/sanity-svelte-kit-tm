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
<h2 style="line-height: 0.7; margin: 0rem 0;">Senaste</h2>
<h2 style="line-height: 0.7; font-weight: normal; margin: 0rem 0;">
Latest
</h2>

<PostsGrid {posts} />

<h3 style="margin-top: 4rem">{authors.length > 1 ? 's' : ''}</h3>

{#each authors as author}
  <AuthorCard {author} />
{/each}


</div>