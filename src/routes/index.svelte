<script>

  import PostsGrid from '$lib/PostsGrid.svelte'
import {PortableText} from '@portabletext/svelte'

  import Code from '$lib/Code.svelte'
  import Link from '$lib/Link.svelte'
  import ImageBlock from '$lib/ImageBlockFront.svelte'
  import AuthorBlock from '$lib/AuthorBlock.svelte'
    import SanityImage from '$lib/SanityImage.svelte'
  import YoutubeBlock from '$lib/YoutubeBlock.svelte' 
  import SoundCloudBlock from '$lib/SoundCloudBlock.svelte'
    import VimeoBlock from '$lib/VimeoBlock.svelte'
  

  export let posts
  export let authors
export let frontpage
let page = frontpage[0]



</script>



{#if page.image}
  <SanityImage image={page.image} />
{/if}
{#if page.body}
<PortableText
  value={page.body}
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
{/if}






