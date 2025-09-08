<script>
  import { SoundCloud } from 'sveltekit-embed'



  export let portableText
  $: url = portableText.value.soundcloudurl
 
</script>

<iframe width="100%" height="20" scrolling="no" frameborder="no" src="https://w.soundcloud.com/player/?url={url}&color=ff5500&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false"></iframe>
<!-- 

<SoundCloud
  height="165"
  soundcloudLink="{url}&show_artwork=false"
/>
-->
