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
  <SanityImage image={author.image}  maxWidth={100} />
{/if}

{#if author.bio}
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

<h4>CV</h4>
{#if author.studier}
<table style="table-layout: auto;">
  <caption>Educations</caption>

 {#each author.studier.rows as row}
 <tr>
     {#each row.cells as cell}
    <td>{cell}</td>
  {/each}
  </tr>
  {/each}
 </table>
{/if}

{#if author.utstallningar}
<table style="table-layout: auto;">
  <caption>Exhibitions</caption>

 {#each author.utstallningar.rows as row}
 <tr>
     {#each row.cells as cell}
    <td>{cell}</td>
  {/each}
  </tr>
  {/each}
 </table>
{/if}

{#if author.publikationer}
<table style="table-layout: auto;">
  <caption>Publications</caption>

 {#each author.publikationer.rows as row}
 <tr>
     {#each row.cells as cell}
    <td>{cell}</td>
  {/each}
  </tr>
  {/each}
 </table>
{/if}

{#if author.stipendier}
<table style="table-layout: auto;">
  <caption>Grants</caption>

 {#each author.stipendier.rows as row}
 <tr>
     {#each row.cells as cell}
    <td>{cell}</td>
  {/each}
  </tr>
  {/each}
 </table>
{/if}
