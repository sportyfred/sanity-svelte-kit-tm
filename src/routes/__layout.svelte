<script context="module">
  // Updated for SvelteKit v1+
  export async function load({ fetch }) {
    const settings = await fetch('/settings').then(res => res.json());
    return { props: { settings }};
  }
</script>

<script>
  import Header from '$lib/Header.svelte';
  import Footer from '$lib/Footer.svelte';
  import Sidebar from '$lib/Sidebar.svelte';

  export let settings;
  const set = settings.settings;

  // CSS variables for inline styling
  const cssVars = {
    '--font-family': set.fontfamily,
    '--desktop-font-size': set.dfs,
    '--mobile-font-size': set.mfs,
    '--text-color': set.colorpickertext,
    '--link-color': set.colorpickerlink,
    '--link-color-alt': set.colorpickerlinkalt,
    '--primary-color': set.colorpickerbg,
    '--secondary-color': set.colorpickersecondarycolor,
    '--tertiary-color': 'whitesmoke',

    '--text-color-d': set.colorpickertextd,
    '--link-color-d': set.colorpickerlinkd,
    '--link-color-alt-d': set.colorpickerlinkaltd,
    '--primary-color-d': set.colorpickerbgd,
    '--secondary-color-d': set.colorpickersecondarycolord
  };
</script>

<!-- Wrapper div replaces <body> -->
<div class="layout" style={cssVars}>
  <Header />
  <Sidebar />
  <main style="padding: 1em;"><slot /></main>
  {#if set.footertext}
    <Footer footertextv={set.footertext} />
  {/if}
</div>

<style>
  /* Reset */
  :global(html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video) {
      margin: 0;
      padding: 0;
      border: 0;
      font-size: 100%;
      font: inherit;
      vertical-align: baseline;
  }

  * { box-sizing: border-box; }

  /* Typography */
  :global(.layout) {
    max-width: 75ch;
    margin: 0 auto;
    padding: 0 0.5rem;
    font-family: var(--font-family);
    color: var(--text-color);
    background-color: var(--primary-color);
  }

  footertext { color: var(--secondary-color); }

  :global(body, input) {
    font: var(--desktop-font-size) -apple-system, BlinkMacSystemFont, Montserrat, Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  :global(h1,h2,h3,h4,h5,h6,p,blockquote,dl,img,figure) {
    margin: 2rem 0;
  }

  :global(h1,h2,h3,h4,h5,h6) { font-weight: bold; line-height: 1.2; }
  :global(h1) { font-size: 200%; }
  :global(h2) { font-size: 150%; }
  :global(h3) { font-size: 120%; }
  :global(h4,h5,h6) { font-size: 100%; }
  :global(h5,h6) { text-transform: uppercase; }

  :global(header h1) { border-bottom: 1px solid; }

  :global(a,a:visited) { color: var(--link-color); }
  :global(a:hover,a:focus) { color: var(--link-color-alt); }

  :global(strong, time, b) { font-weight: bold; }
  :global(em, dfn, i) { font-style: italic; }
  :global(sub) { font-size: 60%; vertical-align: bottom; }
  :global(small) { font-size: 80%; }

  :global(blockquote, q) {
    background: var(--secondary-color);
    border-left: 10px solid var(--primary-color);
    display: block;
    font-family: "Georgia", serif;
    padding: 1rem;
  }

  :global(blockquote p:first-child) { margin-top: 0; }
  :global(blockquote p:last-child) { margin-bottom: 0; }
  :global(cite) {
    font-family: "Georgia", serif;
    font-style: italic;
    font-weight: bold;
    margin-top: 1rem;
  }

  :global(kbd,code,samp,pre,var) { font: var(--mobile-font-size) monospace; }
  :global(code, pre) {
    background: var(--tertiary-color);
    border: 1px solid;
    overflow: auto;
    padding: 0.25rem 0.5rem;
  }

  :global(hr) {
    color: black;
    content: '∿∿∿∿∿∿∿∿';
    letter-spacing: -9.6px;
    font-size: 60px;
    height: 1px;
    margin: 4rem 0;
  }

  :global(img) { display: block; height: auto; max-width: 100%; }

  :global(figure) { width: 100%; }
  :global(figure img) { margin: 0 auto; }
  :global(figure figcaption) { font-size: 80%; margin-top: 0.5rem; text-align: center; }

  :global(ul, ol) { margin: 2rem 0; padding-left: 2rem; }
  :global(ul li, ol li) { margin-bottom: 1rem; }
  :global(li > ul, li > ol) { margin: 0.25rem 0 0.5rem; padding-left: 2rem; }

  :global(dl dd) { padding-left: 2rem; }

  :global(table) {
    border-collapse: collapse;
    table-layout: fixed;
    text-align: left;
    width: 100%;
  }

  :global(table caption) { margin: 2rem 0; }
  :global(table tr) { border-bottom: 1px solid var(--primary-color); }
  :global(table tbody tr:nth-child(even)) { background: var(--tertiary-color); }
  :global(table th) { font-weight: bold; }
  :global(table td) { padding: 0.5rem; }

  :global(input) {
    appearance: none;
    border: 1px solid var(--text-color);
    display: block;
    margin: 0.5rem 0;
    padding: 0.8rem;
  }

  :global(input:focus, input:active) {
    background-color: var(--secondary-color);
    border-color: var(--link-color);
  }

  /* Mobile */
  @media screen and (max-width: 75ch) {
    :global(body, input) {
      font: var(--mobile-font-size) -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto, Helvetica,Arial,sans-serif;
    }
    :global(table) { table-layout: auto; }
  }

  /* Dark mode */
  @media (prefers-color-scheme: dark) {
    :global(.layout) {
      background-color: var(--primary-color-d);
      color: var(--text-color-d);
    }

    footertext { color: var(--secondary-color-d); }

    :global(input:focus, input:active) {
      background-color: var(--text-color-d);
      color: var(--secondary-color-d);
    }

    :global(table tbody tr:nth-child(even)) { background: var(--secondary-color-d); }
    :global(a,a:visited) { color: var(--link-color-d); }
    :global(a:hover,a:focus) { color: var(--link-color-alt-d); }
  }
</style>