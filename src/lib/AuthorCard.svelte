<script>
  import SanityImage from './SanityImage.svelte'

  export let author
</script>




  <a href="{author.slug.current}">
    <span>
   <SanityImage image={author.image} maxWidth={400} />
    </span>

  </a>

<style>
  a {
    display: inline-flex;
    align-items: center;
    gap: 0.5em;
    vertical-align: middle;
  }
  span :global(img) {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    object-fit: cover;
    margin: 0;
  }
</style>
