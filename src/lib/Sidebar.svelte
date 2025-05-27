<script context="module">
  import {page} from '$app/stores'

</script>
<script>

let pathname;

$: pathname = $page.url.pathname;

 

</script>

<nav>
    <ul>
      <li class={pathname === '/works' ? 'active' : ''}><a href="/works"><h2>work</h2></a></li>
      
       <li class={pathname === '/about/tm' ? 'active' : ''}><a href="/about/tm"><h2>bio/cv</h2></a></li>


      
       <li class={pathname === '/about/compositions' ? 'active' : ''}><a href="/about/compositions"><h2>compositions</h2></a></li>


      
       <li class={pathname === '/about/contact' ? 'active' : ''}><a href="/about/contact"><h2>contact</h2></a></li>


    </ul>
  </nav>

  <style>
  ul {
    list-style: none;
    margin: 0;
    padding: 0rem;
  }

  a { text-decoration: none;}
 
  h2 {
    text-decoration: none;
  background-repeat: repeat;
  background-position-x: 0%;
  background-position-y: 0%;
  background-size: auto auto;
  background-repeat: repeat-x;
  background-size: 16px 18px; 
  background-position: 2px 19px;
  animation: move 15s linear infinite;
  -webkit-animation: move 15s linear infinite;
  animation-play-state: paused;

  background-color: transparent;
  -webkit-text-decoration-skip: objects;

}

h2:hover {
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


  nav {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 0em;
  }
  @media screen and (min-width: 400px) {
    nav {
      flex-direction: column;
      align-items: center;
      
    }
  }

  @media (prefers-color-scheme: dark) { 
 li.active a {
 color: --text-color-d;}
  }

  </style>
