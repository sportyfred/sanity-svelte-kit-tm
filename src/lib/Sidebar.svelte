<script>import { page } from '$app/stores'

  let pathname
  $: pathname = $page.url.pathname
</script>

<nav>
  <ul class="flex flex-row flex-nowrap overflow-x-auto">
    <li class="w-1/4 flex-shrink-0 text-center" class:active={pathname === '/works'}>
      <a href="/works"><h2>works</h2></a>
    </li>

    <li class="w-1/4 flex-shrink-0 text-center" class:active={pathname === '/about/tm'}>
      <a href="/about/tm"><h2>bio/cv</h2></a>
    </li>

    <li class="w-1/4 flex-shrink-0 text-center" class:active={pathname === '/about/sound'}>
      <a href="/about/sound"><h2>sound</h2></a>
    </li>

    <li class="w-1/4 flex-shrink-0 text-center" class:active={pathname === '/about/contact'}>
      <a href="/about/contact"><h2>contact</h2></a>
    </li>
  </ul>
</nav>

<style>
  /* reset & base styles */
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
flex-wrap:wrap;
    display: flex;
     /* mobile: stacked */
    align-items: center;
    gap: 0.25rem;             /* tight vertical spacing */
  }

  li {
    padding: 0; /* no extra padding, gap handles spacing */
  }

  a {
    text-decoration: none;
    display: inline-block;
    padding: 0.5rem 0.75rem; /* touch-friendly tap area */
  }

  h2 {
    margin: 0;
    text-decoration: none;
    background-repeat: repeat-x;
    background-size: 16px 18px;
    background-position: 2px 19px;
    animation: move 15s linear infinite;
    animation-play-state: paused; /* default = paused */
    background-color: transparent;
  }

  /* Hover effect: fast solid underline animation */
  h2:hover {
    animation-play-state: running;
    animation-duration: 15s;
    text-decoration-style: solid;
  }

  /* Active link: always animating, wavy, slower */
  li.active h2 {
    animation-play-state: running;
    animation-duration: 40s; /* subtle */
    text-decoration-line: underline;
    text-decoration-style: wavy;
    text-decoration-color: currentColor;
  }

  /* underline animation keyframes */
  @keyframes move {
    from { background-position: 2px 19px; }
    to   { background-position: 500px 19px; }
  }

  /* Desktop breakpoint: row layout */
  @media screen and (min-width: 600px) {
    ul {
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: center;
      gap: 1rem; /* more breathing room */
    }
  }

  /* Active link styling */
  li.active a {
    color: currentColor;
    font-weight: bold;
  }

  @media (prefers-color-scheme: dark) {
    li.active a {
      color: currentColor;
    }
  }
</style>