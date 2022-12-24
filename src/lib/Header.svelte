

<script>

  export let blogTitle = 'tm'




  import SanityImage from '$lib/SanityImage.svelte'
  export let author
</script>

<header>
  {#if author.image}
  <SanityImage image={author.image} />
{/if}
</header>

<style>header{
    text-align: center;

  text-decoration: none;
  text-decoration-color: darkgreen;
}
#wavy{
  text-decoration-style: wavy;
}
#double{
  text-decoration-style: double;
}
</style>
