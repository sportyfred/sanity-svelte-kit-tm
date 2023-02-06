<script context="module">
  import {page} from '$app/stores'

</script>
<script>

let pathname;

$: pathname = $page.url.pathname;

 

</script>

<nav>
    <ul>
      <li class={pathname === '/' ? 'active' : ''}><a href="/"><h2>works</h2></a></li>
      
       <li class={pathname === '/about/tm' ? 'active' : ''}><a href="/about/tm"><h2>about</h2></a></li>


    </ul>
  </nav>

  <style>
  ul {
    list-style: none;
    margin: 0;
    padding: 0rem;
  }
 
  a {
    
 

 background: url("https://ewebdesign.com/wp-content/themes/ewebdesign/assets/img/wave.svg");
  background-repeat: repeat;
  background-position-x: 0%;
  background-position-y: 0%;
  background-size: auto auto;
  background-repeat: repeat-x;
  background-size: 16px 8px; 
  background-position: 2px 19px;
  animation: move 15s linear infinite;
  -webkit-animation: move 15s linear infinite;
  animation-play-state: paused;
  text-decoration: none;
  background-color: transparent;
  -webkit-text-decoration-skip: objects;

}

a:hover {
  animation-play-state: running;
}


@-webkit-keyframes move {
from {
    background-position: 2px 19px;
  }
  to {
    background-position: 500px 19px;
  }
}

@keyframe move {
from {
    background-position: 2px 19px;
  }
  to {
    background-position: 500px 19px;
  }
}

li{ display:inline-block; padding: 1rem; }

li.active a {
    
     background-color: darkgreen;
            color: white;
  }

  nav {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 0em;
  }
  @media screen and (min-width: 400px) {
    nav {
      flex-direction: column;
      align-items: center;
      
    }
  }

  

  </style>
