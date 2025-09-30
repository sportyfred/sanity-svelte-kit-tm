<script context="module">
   export async function load({ fetch }) {
      const footer = await fetch('/footer').then(res => res.json());
      return {
        props: {
          footer
        }
      }
    }
export let footer
let ftext = footer.footer
</script>
 

<footer>
{#if ftext.text}
<p class="footertext">{ftext.text}</p>
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
