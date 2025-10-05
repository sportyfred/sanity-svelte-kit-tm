<script>
  import { page } from '$app/stores';

  let pathname;
  $: pathname = $page.url.pathname;

  const menuItems = [
    { name: 'works', href: '/works' },
    { name: 'bio/cv', href: '/about/tm' },
    { name: 'sound', href: '/about/sound' },
    { name: 'contact', href: '/about/contact' }
  ];
</script>

<nav>
  <ul class="flex w-full gap-x-1 sm:gap-x-4">
    {#each menuItems as item}
      <li class="flex-1 text-center" class:active={pathname === item.href}>
        <a href={item.href} class="px-1 py-1 sm:px-2 sm:py-2">
          <h2>{item.name}</h2>
        </a>
      </li>
    {/each}
  </ul>
</nav>

<style>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li a {
    display: block;
    text-decoration: none;
  }

  h2 {
    margin: 0;
    background-repeat: repeat-x;
    background-size: 16px 18px;
    background-position: 2px 19px;
    animation: move 15s linear infinite;
    animation-play-state: paused;
    background-color: transparent;
  }

  h2:hover {
    animation-play-state: running;
    animation-duration: 15s;
    text-decoration-style: solid;
  }

  li.active h2 {
    animation-play-state: running;
    animation-duration: 40s;
    text-decoration-line: underline;
    text-decoration-style: wavy;
    text-decoration-color: currentColor;
  }

  @keyframes move {
    from { background-position: 2px 19px; }
    to   { background-position: 500px 19px; }
  }

  li.active a {
    font-weight: bold;
    color: currentColor;
  }
</style>