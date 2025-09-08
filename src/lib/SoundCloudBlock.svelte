<script>
  import { SoundCloud } from 'sveltekit-embed'



  export let portableText
  $: url = portableText.value.soundcloudurl
 
</script>



<SoundCloud
  height="120"
  soundcloudLink="{url}&show_artwork=false&color=61b183"
disable_observer=true
/>

