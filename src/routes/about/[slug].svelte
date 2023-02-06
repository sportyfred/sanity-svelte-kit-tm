<script>
  import {PortableText} from '@portabletext/svelte'
  import Code from '$lib/Code.svelte'
  import Link from '$lib/Link.svelte'
  import ImageBlock from '$lib/ImageBlock.svelte'
  import AuthorBlock from '$lib/AuthorBlock.svelte'
  import PostsGrid from '$lib/PostsGrid.svelte'
  import SanityImage from '$lib/SanityImage.svelte'

  export let author
</script>

{#if author.image}
  <SanityImage image={author.image} />
{/if}

{#if author?.bio}
  <PortableText
    value={author.bio}
    components={{
      types: {
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

<h2>Recent by {author.name}</h2>

<PostsGrid posts={author.posts} />
