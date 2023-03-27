


 <script context="module">
   export async function load({ fetch }) {
      const settings = await fetch('/settings').then(res => res.json());
      return {
        props: {
          settings
        }
      }
    }
</script>
 

<script>
  import Header from '$lib/Header.svelte'
  import Footer from '$lib/Footer.svelte'
   import Sidebar from '$lib/Sidebar.svelte'


export let settings
let set = settings.settings




let bgcolor = set.colorpickerbg;
let textcolor = set.colorpickertext;
let linkcolor = set.colorpickerlink;
let linkcoloralt = set.colorpickerlinkalt;
let secondarycolor = set.colorpickersecondarycolor;

  let styles = 'color: blue; background-color: #f2f2f2; background: #f2f2f2;';

</script>



<div style="--desktop-font-size: 1.2rem/1.25 !important;
    --mobile-font-size: 1rem/1.3 !important;
    --text-color: {textcolor} !important;
    --link-color: {linkcolor} !important;
    --link-color-alt: {linkcoloralt} !important;
    --primary-color: {bgcolor} !important;
    --secondary-color: {secondarycolor} !important;
    --tertiary-color: whitesmoke !important;">
 

 <Header />

 




<Sidebar />
  <main style="padding: 1em;"><slot /></main>


<Footer />
</div>





<style>/* this template uses VanillaCSS: https://vanillacss.com/ */
  /* you can use the values below to create your own theme colors  */

  /* Default Variables */





 
  :root {

  
    

   
    --desktop-font-size: 1.2rem/1.25 !important;
    --mobile-font-size: 1rem/1.3 !important;
    --text-color: {textcolor} !important;
    --link-color: {linkcolor} !important;
    --link-color-alt: {linkcoloralt} !important;
    --primary-color: {bgcolor} !important;
    --secondary-color: {secondarycolor} !important;
    --tertiary-color: whitesmoke !important;

  }
 
  
   :global(body) {
      background-color: var(--primary-color);
       background: var(--primary-color);

    }
  /* Linked Header Colors */
 :global(p) {
    color: var(--text-color);
  }


  :global(h1 a, h1 a:visited, h2 a, h2 a:visited, h3 a, h3 a:visited, li) {
    color: var(--link-color);
  }
  :global(h1 a:hover, h1 a:focus, h2 a:hover, h2 a:focus, h3 a:hover, h3 a:focus) {
    color: var(--link-color-alt);
  }
   
  
   :global(th) {
    background: var(--secondary-color);
  }

  /* Dark Mode Variables */
  @media (prefers-color-scheme: dark) {
    :root {
      --text-color: #fff;
      --link-color: #03A63C;
      --link-color-alt: #04D939;
      --primary-color: darkblue;
      --secondary-color: black;
      --tertiary-color: #121923;
    }
   

  }



 

</style>
