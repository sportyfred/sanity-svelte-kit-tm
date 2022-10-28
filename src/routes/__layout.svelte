
<script>
  import Header from '$lib/Header.svelte'
  import Footer from '$lib/Footer.svelte'
   import Sidebar from '$lib/Sidebar.svelte'
  


</script>



 

 <Header blogTitle={'tm'} />
<Sidebar />
  <main style="padding: 1em"><slot /></main>


<Footer />





<style>/* this template uses VanillaCSS: https://vanillacss.com/ */
  /* you can use the values below to create your own theme colors  */

  /* Default Variables */

 
  :root {
   
    --desktop-font-size: 1.4rem/1.8 !important;
    --mobile-font-size: 1rem/1.4 !important;
    --text-color: darkgreen !important;
    --link-color: #025939 !important;
    --link-color-alt: #03A63C !important;
    --primary-color: #03A63C !important;
    --secondary-color: teal !important;
    --tertiary-color: whitesmoke !important;
  }
  /* Linked Header Colors */
  :global(h1 a, h1 a:visited, h2 a, h2 a:visited, h3 a, h3 a:visited) {
    color: var(--text-color);
  }
  :global(h1 a:hover, h1 a:focus, h2 a:hover, h2 a:focus, h3 a:hover, h3 a:focus) {
    color: var(--link-color-alt);
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
    :global(body) {
      background: #fffff0;

    }

  }



 

</style>
