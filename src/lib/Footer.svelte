


<script>
export let footr
import {PortableText} from '@portabletext/svelte'

  import Code from './Code.svelte'
  import Link from './Link.svelte'
  import ImageBlock from './ImageBlockFront.svelte'
  import AuthorBlock from './AuthorBlock.svelte'
    import SanityImage from './SanityImage.svelte'
  import YoutubeBlock from './YoutubeBlock.svelte' 
  import SoundCloudBlock from './SoundCloudBlock.svelte'
    import VimeoBlock from './VimeoBlock.svelte'

</script>

<footer>
{#if footr.text}
<p class="footertext">{footr.text}</p>
{/if}



{#if footr.image}
  <SanityImage image={footr.image} />
{/if}
{#if footr.body}
<PortableText
  value={footr.body}
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


</footer>

<style>
  footer {
    
    text-align: left;
    margin-top: 10vh;
    margin-bottom: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1em;
  }
  svg {
    width: 20px;
  }
</style>
