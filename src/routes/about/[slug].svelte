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

<table style="table-layout: auto;">
  <th colspan="4">Educations</th>

 {#each author.studier.rows as row}
 <tr>
     
    <td>{row.cells[0]}</td>
<td colspan="2">{row.cells[1]}</td>
<td>{row.cells[2]}</td>
  </tr>
  {/each}


  <th colspan="4">Exhibitions</th>

 {#each author.utstallningar.rows as row}

 

 <tr>
     {#if row.cells[1]!==''}
    <td>{row.cells[0]}</td>

   {#if row.cells[4]!==''}
      <td><a target="_blank" href="{row.cells[4]}">{row.cells[1]}</a></td>
      
      {:else}
        <td>{row.cells[1]}</td>


{/if}
  <td>{row.cells[2]}</td>
   <td>{row.cells[3]}</td>


{/if}
  
  </tr>
  {/each}
 
  <th colspan="4">Publications</th>

 {#each author.publikationer.rows as row}
 

 <tr>
     {#if row.cells[1]!==''}
    <td>{row.cells[0]}</td>

   {#if row.cells[2]!==''}
      <td colspan="3"><a target="_blank" href="{row.cells[2]}">{row.cells[1]}</a></td>
      
      {:else}
        <td colspan="3">{row.cells[1]}</td>


{/if}
  
  
  
        

{/if}
  
  </tr>
  {/each}
 
  <th colspan="4">Grants</th>

 {#each author.stipendier.rows as row}
 
 <tr>
     {#if row.cells[1]!==''}
    <td>{row.cells[0]}</td>

   {#if row.cells[2]!==''}
      <td colspan="3"><a target="_blank" href="{row.cells[2]}">{row.cells[1]}</a></td>
      
      {:else}
        <td colspan="3">{row.cells[1]}</td>


{/if}
  
  
  
        

{/if}
  
  </tr>
  {/each}
 </table>

 <style>
 th {
 color: white;

 padding-top: 20px;}

 </style>

