

<script>

 export let headr

  import SanityImageHeader from './SanityImageHeader.svelte'


</script>



<header>
 
{#if headr}
 

<a href="/"> <SanityImageHeader image={headr} />
</a>
 
  {/if}
</header>

<style>header{
  
    text-align: center;
padding: 0rem;
  text-decoration: none;
  
}
#wavy{
  text-decoration-style: wavy;
}
#double{
  text-decoration-style: double;
}

img {
  height: 25vh;
margin: 0px;
  padding: 0rem;
  height: 25vh;
  margin-left: auto;
  margin-right: auto;

justify-content: center;
}
 @media screen and (min-width: 400px) {

img {
  padding: 0rem;
  height: 30vh;
  margin-left: auto;
  margin-right: auto;

justify-content: center;
}

   
  }

</style>
