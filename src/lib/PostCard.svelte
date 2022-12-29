<script>
  import SanityImage from './SanityImage.svelte'

  export let post
</script>

<article> <div class="categories">{#each post.categories as category}

 <p class="category">
 {category.title}
 </p>
   {/each}</div>
  <h2>
    <a rel="prefetch" href="/blog/{post.slug.current}">{post.title}</a>
  </h2> 
  {#if post.image}
    <div class="image">
      <SanityImage image={post.image} />
    </div>
  {/if}




</article>
 
<style>
  article {
    display: flex;
    /* Show images first */
    flex-direction: column-reverse;
    /* Align cards */
    align-self: start;
  }

  h2 {
    margin: 1rem 0 0;
  }

  h2 a {
    text-decoration: none;
  }

  .image {
    padding-bottom: 62.5%;
    position: relative;
    overflow: hidden;
  }

  .image :global(img) {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin: 0;
  }  
  .categories {

   
  align-items: flex-end;
   padding: .5em 0.5em;
  }
  .category { float: right;
    color: #000;
    background-color: #BB99F0;
    padding: .5em .5em;
    border: 2px solid black;
    border-radius: .25em;
    box-shadow: -.25em .25em 0 #000;
    font-size: 16px;
   
  }

</style>
