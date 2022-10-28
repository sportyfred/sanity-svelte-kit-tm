<script context="module">
  import {page} from '$app/stores'

</script>
<script>

let pathname

$: pathname = $page.url.pathname;

 

</script>
{JSON.stringify(pathname)}
<nav>
    <ul>
      <li><a data-selected={pathname === '/'} href="/">home</a></li>
          <li><a data-selected={pathname === '/authors/tove-moeller'} href="/authors/tove-moeller">about</a></li>
    </ul>
  </nav>

  <style>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  a[data-selected='true'] {
    font-weight: 600;
     text-decoration: underline;
  text-decoration-color: darkgreen;
    text-decoration-style: wavy;
  }
  a {
    
    display: block;
      text-align: center;

 

  }

  a:hover { 
  text-decoration: underline;
 
    
  }
li{ display:inline-block; padding: 1rem;}

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
