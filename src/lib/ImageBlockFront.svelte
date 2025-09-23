<script>
  import SanityImage from './SanityImage.svelte'

  export let portableText
  $: ({value} = portableText)
</script>

{#if value.asset}
{#if value.link}
<a href={value.link}>
  <figure>


    <SanityImage image={value} />
    {#if value.caption}
      <figcaption>{value.caption}</figcaption>
    {/if}
  </figure>
</a>
{/if}
{/if}
