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
 <script>
 export let footer
let ftext = footer.footer</script>

<footer>

<p class="footertext">test</p>

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
