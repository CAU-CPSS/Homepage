<script>
  import { onMount } from "svelte";

  onMount(() => {
    // @ts-ignore
    if (typeof window !== "undefined" && window.WOW) {
      // @ts-ignore
      new window.WOW().init();
    }
  });
</script>

<slot />
