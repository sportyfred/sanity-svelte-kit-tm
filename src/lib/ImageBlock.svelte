<script>
  import SanityImage from './SanityImage.svelte'

  export let portableText
  $: ({value} = portableText)
</script>

{#if value.asset}
{#if value.link}
<a href={value.link}>
{/if}
  <figure>


    <SanityImage image={value} />
    {#if value.caption}
      <figcaption>{value.caption}</figcaption>
    {/if}
  </figure>
{#if value.link}
</a>
{/if}
{/if}

