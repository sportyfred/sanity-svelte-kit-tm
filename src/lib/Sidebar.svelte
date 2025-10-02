<script>
  import { page } from '$app/stores'

  let pathname
  $: pathname = $page.url.pathname
</script>

<nav>
  <ul>
    <li class={pathname === '/works' ? 'active' : ''}>
      <a href="/works"><h2>works</h2></a>
    </li>

    <li class={pathname === '/about/tm' ? 'active' : ''}>
      <a href="/about/tm"><h2>bio/cv</h2></a>
    </li>

    <li class={pathname === '/about/sound' ? 'active' : ''}>
      <a href="/about/sound"><h2>sound</h2></a>
    </li>

    <li class={pathname === '/about/contact' ? 'active' : ''}>
      <a href="/about/contact"><h2>contact</h2></a>
    </li>
  </ul>
</nav>

<style>
  ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;       /* allow wrapping */
  justify-content: center;
  gap: 0.5rem;           /* control spacing between items */
}

li {
  padding: 0.25rem 0.5rem; /* smaller padding for mobile */
}

/* Mobile: stack vertically */
nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
}

@media screen and (min-width: 600px) {
  /* On wider screens, show nav items in a row */
  nav {
    flex-direction: row;
  }

  ul {
    flex-wrap: nowrap;   /* keep them in one line */
    gap: 1rem;           /* more breathing room on desktop */
  }

  li {
    padding: 0.5rem 1rem; /* a bit bigger on desktop */
  }
}

  a {
    text-decoration: none;
  }

  h2 {
  text-decoration: none;
  background-repeat: repeat-x;
  background-size: 16px 18px; 
  background-position: 2px 19px;
  animation: move 15s linear infinite;
  animation-play-state: paused; /* default = paused */
  background-color: transparent;
}

/* Normal hover effect (fast underline motion) */
h2:hover {
  animation-play-state: running;
  animation-duration: 15s;
  text-decoration-style: solid;
}

/* Active link: wavy + slower animation */
li.active h2 {
  animation-play-state: running;
  animation-duration: 40s; /* very subtle */
  text-decoration-line: underline;
  text-decoration-style: wavy;
  text-decoration-color: currentColor; /* matches text color */
}

@keyframes move {
  from { background-position: 2px 19px; }
  to   { background-position: 500px 19px; }
}

  

 

  li.active a {
    color: var(--text-color);
    font-weight: bold; /* or whatever active style you want */
  }

  @media (prefers-color-scheme: dark) {
    li.active a {
      color: var(--text-color-d);
    }
  }
</style>