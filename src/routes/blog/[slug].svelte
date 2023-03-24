<script>
  import {PortableText} from '@portabletext/svelte'
  import Code from '$lib/Code.svelte'
  import Link from '$lib/Link.svelte'
  import ImageBlock from '$lib/ImageBlock.svelte'
  import AuthorBlock from '$lib/AuthorBlock.svelte'
  import AuthorCard from '$lib/AuthorCard.svelte'
  import SanityImage from '$lib/SanityImage.svelte'
  import YoutubeBlock from '$lib/YoutubeBlock.svelte' 
  import SoundCloudBlock from '$lib/SoundCloudBlock.svelte'
    import VimeoBlock from '$lib/VimeoBlock.svelte'

  export let post

</script>
<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<h1>{post.title}</h1>
<p>
  {new Date(post.publishedAt).toLocaleDateString('swe', {
  
    
    year: 'numeric'
  })}
</p>



<hr />

{#if post.image}
  <SanityImage image={post.image} />
{/if}




<PortableText
  value={post.body}
  components={{
    types: {
      youtube: YoutubeBlock,
      soundcloud: SoundCloudBlock,
      vimeo: VimeoBlock,
      code: Code,
      image: ImageBlock,
      authorReference: AuthorBlock
    },
    marks: {
      link: Link
    }
  }}
/>
