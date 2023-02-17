<script>
  import { Vimeo } from 'sveltekit-embed'



  export let portableText
  $: url = portableText.value.vimeourl



 
</script>




<Vimeo vimeoId={url} />

