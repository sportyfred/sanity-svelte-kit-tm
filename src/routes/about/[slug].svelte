<script>
  import {PortableText} from '@portabletext/svelte'

  import Code from '$lib/Code.svelte'
  import Link from '$lib/Link.svelte'
import ImageBlock from '$lib/ImageBlock.svelte'
 import SoundCloudBlock from '$lib/SoundCloudBlock.svelte'
 
   import AuthorBlock from '$lib/AuthorBlock.svelte'
  import PostsGrid from '$lib/PostsGrid.svelte'
  import SanityImage from '$lib/SanityImage.svelte'
 import Table from '$lib/Table.svelte'
  export let author

    
</script>

{#if author.bio}
<h3>{author.name}</h3>
{/if}

{#if author.bio}
  <PortableText
    value={author.bio}
    components={{
      types: {
        code: Code,
        image: ImageBlock,
        authorReference: AuthorBlock,
        soundcloud: SoundCloudBlock
      },
      marks: {
        link: Link
      }
    }}
  />
{/if}

{#if author.utstallningar}
<Table 
value={author}
/>
{/if}

