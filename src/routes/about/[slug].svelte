<script>
  import {PortableText} from '@portabletext/svelte'

  import Code from '$lib/Code.svelte'
  import Link from '$lib/Link.svelte'
  import ImageBlock from '$lib/ImageBlock.svelte'
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
        authorReference: AuthorBlock
      },
      marks: {
        link: Link
      }
    }}
  />
{/if}

{#if author.utstallningar}
<Table 
value={author.utstallningar}
/>
{/if}
 <style>

 @media 
only screen and (max-width: 760px),
(min-device-width: 768px) and (max-device-width: 1024px)  {

  /* Force table to not be like tables anymore */
  table, thead, tbody, th, td, tr { 
    display: block; 
  }
  
  /* Hide table headers (but not display: none;, for accessibility) */
  thead tr { 
    position: absolute;
    top: -9999px;
    left: -9999px;
  }
  
  tr { border: 1px solid #ccc; }
  
  td{ 
    /* Behave  like a "row" */
    border: none;
   
    position: relative;
        padding-left: 30%; 
    
  }
  

 
.year {
   padding-left: 2%; 
 font-size: 80%;
  position: absolute;
}

 }

 th {
 text-align:left;
 padding: 20px;}
 </style>

