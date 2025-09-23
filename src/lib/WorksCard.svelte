<script>
  import SanityImage from './SanityImage.svelte'
  export let post
</script>

<a
  rel="prefetch"
  href="/blog/{post.slug.current}"
  class="block rounded-lg overflow-hidden transition md:transform md:hover:-translate-y-1 md:hover:shadow-lg md:hover:bg-gray-50"
>
  <article class="flex flex-col-reverse">
    {#if post.image}
      <div class="relative pb-[62.5%]">
        <SanityImage image={post.image} class="absolute inset-0 w-full h-full object-cover" />
      </div>
    {/if}

    {#if post.subtitle}
      <h4 class="text-base font-normal leading-none m-0">{post.subtitle}</h4>
    {/if}

    <h4 class="text-lg font-semibold leading-none m-0">{post.title}</h4>
  </article>
</a>
 
<style>
  article {
    display: flex;
    /* Show images first */
    flex-direction: column;
    /* Align cards */
    align-self: start;
    
  }

  h2 {
    margin: 1rem 0 0;
  }

  h2,h3,h4 a {
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