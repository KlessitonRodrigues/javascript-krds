<script>
  import { page } from "$app/stores";
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/contacts", label: "Contacts" },
    { href: "/faq", label: "FAQ" },
  ];
</script>

<nav>
  <div
    class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300"
  >
    {#each navLinks as { href, label }}
      {#if $page.url.pathname === href}
        <a
          {href}
          class="text-gray-800 transition-colors duration-300 transform dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6"
          >{label}</a
        >
      {:else}
        <a
          {href}
          class="border-b-2 border-transparent hover:text-gray-800 transition-colors duration-300 transform dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
          >{label}</a
        >
      {/if}
    {/each}
  </div>
</nav>
