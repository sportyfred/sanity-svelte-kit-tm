<script>
  import { SoundCloud } from 'sveltekit-embed'



  export let portableText
  $: url = portableText.value.soundcloudurl
 
</script>



<SoundCloud
  height="120"
  soundcloudLink="{url}"
/>

