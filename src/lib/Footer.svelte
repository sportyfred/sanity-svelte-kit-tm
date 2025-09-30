<script context="module">
   export async function load({ fetch }) {
      const footer = await fetch('/footer').then(res => res.json());
      return {
        props: {
          footer
        }
      }
    }
</script>
 

<footer>
{#if footer.text}
<p class="footertext">{footer.text}</p>
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
