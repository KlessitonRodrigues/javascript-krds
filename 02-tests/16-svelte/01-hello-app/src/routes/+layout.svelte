<script>
  import "../app.pcss";
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import Page from "$lib/components/Page.svelte";
</script>

<Header />
<Page>
  <slot />
</Page>
<Footer />
