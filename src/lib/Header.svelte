

<script>

 export let headr

  import SanityImage from './SanityImage.svelte'


</script>



<header>
 
{#if headr}
 
<div class="img">
<a href="/"> <SanityImage image={headr} />
</a>
 
  </div> {/if}
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

.img {
margin: 0px;
  padding: 0rem;
  height: 25vh;
  margin-left: auto;
  margin-right: auto;

justify-content: center;
}
 @media screen and (min-width: 400px) {

.img {
  padding: 0rem;
  height: 30vh;
  margin-left: auto;
  margin-right: auto;

justify-content: center;
}

   
  }

</style>
