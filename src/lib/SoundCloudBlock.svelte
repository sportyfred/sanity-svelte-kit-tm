<script>
  import { SoundCloud } from 'sveltekit-embed'



  export let portableText
  $: url = portableText.value.soundcloudurl
 
</script>




<SoundCloud
  height="165"
  soundcloudLink="{url}"
/>
