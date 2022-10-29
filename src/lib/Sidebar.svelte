<script context="module">
  import {page} from '$app/stores'

</script>
<script>

let pathname;

$: pathname = $page.url.pathname;

 

</script>

<nav>
    <ul>
      <li class={pathname === '/' ? 'active' : ''}><a href="/">home</a></li>
       <li class={pathname === '/works' ? 'active' : ''}><a href="/works">works</a></li> 
       
       <li class={pathname === '/tm' ? 'active' : ''}><a href="/tm">about</a></li>
      

    </ul>
  </nav>

  <style>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
 
  a {
    
    display: block;
      text-align: center;

 text-decoration: none;

  }

  a:hover { 
  
 
    
  }
li{ display:inline-block; padding: 1rem;}

li.active a {
    
     text-decoration: underline;
  text-decoration-color: green;
    text-decoration-style: wavy;
  }

  nav {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 1em;
  }
  @media screen and (min-width: 400px) {
    nav {
      flex-direction: column;
      align-items: center;
      
    }
  }

  

  </style>
