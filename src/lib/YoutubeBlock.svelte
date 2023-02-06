<script>
import getYouTubeID from 'get-youtube-id'
 import YouTube from 'svelte-youtube'

  export let portableText
  $: value = portableText.value
    $: id = getYouTubeID(value.yurl);
 
</script>





<YouTube videoId="{id}" />
