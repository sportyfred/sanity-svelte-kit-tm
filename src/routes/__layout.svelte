
 <script context="module">
   export async function load({ fetch }) {
      const settings = await fetch('/settings').then(res => res.json());
      return {
        props: {
          settings
        }
      }
    }
</script>
 

<script>
  import Header from '$lib/Header.svelte'
  import Footer from '$lib/Footer.svelte'
   import Sidebar from '$lib/Sidebar.svelte'


export let settings
let set = settings.settings




export let bgcolor = set.colorpickerbg;
export let textcolor = set.colorpickertext;
export let linkcolor = set.colorpickerlink;
export let linkcoloralt = set.colorpickerlinkalt;
export let secondarycolor = set.colorpickersecondarycolor;

export let dbgcolor = set.colorpickerbgd;
export let dtextcolor = set.colorpickertextd;
export let dlinkcolor = set.colorpickerlinkd;
export let dlinkcoloralt = set.colorpickerlinkaltd;
export let dsecondarycolor = set.colorpickersecondarycolord;

export let fontfamily = set.fontfamily;
export let dfs = set.dfs;
export let mfs = set.mfs;


</script>


<body style="--font-family: {fontfamily} !important;
--desktop-font-size:{dfs} !important;
    --mobile-font-size: {mfs} !important;
    --text-color: {textcolor} !important;
    --link-color: {linkcolor} !important;
    --link-color-alt: {linkcoloralt} !important;
    --primary-color: {bgcolor} !important;
    --secondary-color: {secondarycolor} !important;
    --tertiary-color: whitesmoke !important;


    --text-color-d: {dtextcolor} !important;
    --link-color-d: {dlinkcolor} !important;
    --link-color-alt-d: {dlinkcoloralt} !important;
    --primary-color-d: {dbgcolor} !important;
    --secondary-color-d: {dsecondarycolor} !important;
       
      

        ">
        
<style>d/* Reset */
html, body, div, span, applet, object, iframe,
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
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}

* {
    box-sizing: border-box;
}

/* Variables */
:root {
 
   
--font-family: {fontfamily} !important;
--desktop-font-size:{dfs} !important;
    --mobile-font-size: {mfs} !important;
    --text-color: {textcolor} !important;
    --link-color: {linkcolor} !important;
    --link-color-alt: {linkcoloralt} !important;
    --primary-color: {bgcolor} !important;
    --secondary-color: {secondarycolor} !important;
    --tertiary-color: whitesmoke !important;


    --text-color-d: {dtextcolor} !important;
    --link-color-d: {dlinkcolor} !important;
    --link-color-alt-d: {dlinkcoloralt} !important;
    --primary-color-d: {dbgcolor} !important;
    --secondary-color-d: {dsecondarycolor} !important;


}

/* Typography */
body {
    color: var(--text-color);
    background-color: var(--primary-color);
     background: var(--primary-color);
    margin: 0 auto;
    max-width: 75ch;
    padding: 0 0.5rem;
    font-family: Montserrat;
}
footertext {color: var(--secondary-color);
  }
body, input {
    font: var(--desktop-font-size) -apple-system,BlinkMacSystemFont,Montserrat,Roboto, Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji", "Segoe UI Symbol";
}

h1,h2,h3,h4,h5,h6,p,blockquote,dl,img,figure {
    margin: 2rem 0;
}

h1,h2,h3,h4,h5,h6 { font-weight: bold; line-height: 1.2; }
h1 { font-size: 200%; }
h2 { font-size: 150%; }
h3 { font-size: 120%; }
h4,h5,h6 { font-size: 100%; }
h5, h6 { text-transform: uppercase; }

header h1 { border-bottom: 1px solid; }

a,a:visited { color: var(--link-color); }
a:hover,a:focus { color: var(--link-color-alt); }

strong, time, b { font-weight: bold; }
em, dfn, i { font-style: italic; }
sub { font-size: 60%; vertical-align: bottom; }
small { font-size: 80%; }

blockquote, q {
    background: var(--secondary-color);
    border-left: 10px solid var(--primary-color);
    display: block;
    font-family: "Georgia", serif;
    padding: 1rem;
}
blockquote p:first-child { margin-top: 0; }
blockquote p:last-child { margin-bottom: 0; }
cite {
    font-family: "Georgia", serif;
    font-style: italic;
    font-weight: bold;
    margin-top: 1rem;
}

kbd,code,samp,pre,var { font: var(--mobile-font-size) monospace; }
code, pre {
    background: var(--tertiary-color);
    border: 1px solid;
    overflow: auto;
    padding: 0.25rem 0.5rem;
}
code pre , pre code { border: 0; padding: 0; }

/* Elements */


hr{
color: black;
   content: '∿∿∿∿∿∿∿∿';
    /* Ratio -> font-size/letter-spacing = 6.25 */
    letter-spacing: -9.6px;
    font-size: 60px;

    height: 1px;
    margin: 4rem 0;
}


img {
    display: block;
    height: auto; 
    max-width: 100%; 
}

figure {

  /*  border: 1px solid var(--primary-color);
    display: inline-block; */

   
    width: 100%; 
}
figure img { margin: 0 auto; }
figure figcaption { font-size: 80%; margin-top: 0.5rem; text-align: center; }

ul, ol { margin: 2rem 0; padding: 0 0 0 2rem; }
ul li, ol li { margin-bottom: 1rem; }
li > ul, li > ol { margin: 0.25rem 0 0.5rem; padding: 0 0 0 2rem; }
li > ul li, li > ol li { margin-bottom: 0.5rem; }

dl dd { padding-left: 2rem; }


table {
   
    border-collapse: collapse;
    table-layout: fixed;
    text-align: left;
    width: 100%;
}
table caption { margin: 2rem 0; }
table tr { border-bottom: 1px solid var(--primary-color); }
table thead { position: sticky; top: 0; }
table tbody tr:nth-child(even) { background: var(--tertiary-color); }
table th {  font-weight: bold; }
table td { padding: 0.5rem; }

input { 
    appearance: none; 
    border: 1px solid var(--text-color);
    display: block;
    margin: 0.5rem 0;
    padding: 0.8rem; 
}
input:focus, input:active { background-color: var(--secondary-color); border-color: var(--link-color); }

sup { font-size: 80%; vertical-align: top; }

/* Mobile Styling */
@media screen and (max-width: 75ch) {
    body, input {
        font: var(--mobile-font-size) -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto, Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji", "Segoe UI Symbol";
    }
    table { table-layout: auto; }
}

/* Dark mode support */
@media (prefers-color-scheme: dark) {
    body {
        background: var(--primary-color-d);
      
    color: var(--text-color-d);
    background-color: var(--primary-color-d);


    }
    footertext {color: var(--secondary-color-d);
  }
    input:focus, input:active {
        background-color: var(--text-color-d);
        color: var(--secondary-color-d);
    }
    table,
    table tr,
    table th:not(:last-of-type),
    table td:not(:last-of-type) {
        border-color: var(--text-color-d);
    }
    table thead th,
    table tfoot th {
        
    }
    table tbody tr:nth-child(even) { background: var(--secondary-color-d); }

       a,a:visited { color: var(--link-color-d); }
a:hover,a:focus { color: var(--link-color-alt-d); }
  
    
}







 

</style>

 <Header />






<Sidebar />
  <main style="padding: 1em;"><slot /></main>


<Footer />
  

</body>
