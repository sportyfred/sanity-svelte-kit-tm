<script>
  import {PortableText} from '@portabletext/svelte'
  import Code from '$lib/Code.svelte'
  import Link from '$lib/Link.svelte'
  import ImageBlock from '$lib/ImageBlock.svelte'
  import AuthorBlock from '$lib/AuthorBlock.svelte'
  import AuthorCard from '$lib/AuthorCard.svelte'
  import SanityImage from '$lib/SanityImage.svelte'
  import YoutubeBlock from '$lib/YoutubeBlock.svelte' 


  export let post

</script>
<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<h1>{post.title}</h1>
<p>
  {new Date(post.publishedAt).toLocaleDateString('swe', {
    month: 'long',
    
    year: 'numeric'
  })}
</p>
<!--
{#each post.authors || [] as author}
  <AuthorCard {author} />
{/each}-->

<hr />

{#if post.image}
  <SanityImage image={post.image} />
{/if}




<PortableText
  value={post.body}
  components={{
    types: {
      youtube: YoutubeBlock,
      code: Code,
      image: ImageBlock,
      authorReference: AuthorBlock
    },
    marks: {
      link: Link
    }
  }}
/>
