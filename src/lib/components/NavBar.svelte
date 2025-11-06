<script lang="ts">
  let isMenuOpen = $state(false);

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  function closeMenu() {
    isMenuOpen = false;
  }
</script>

<nav class="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-16">
      <!-- Logo/Brand -->
      <div class="flex-shrink-0">
        <a href="/" class="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
            MySvelteSite
        </a>
      </div>

      <!-- Desktop Navigation -->
      <div class="hidden md:block">
        <div class="ml-10 flex items-baseline space-x-8">
          <a
            href="/"
            class="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Home
          </a>
          <a
            href="/blog"
            class="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Blog
          </a>
        </div>
      </div>

      <!-- Mobile menu button -->
      <div class="md:hidden">
        <button
          onclick={toggleMenu}
          class="bg-gray-200 inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-colors"
          aria-expanded={isMenuOpen}
          aria-label="Main menu"
        >
          <svg
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {#if isMenuOpen}
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            {:else}
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            {/if}
          </svg>
        </button>
      </div>
    </div>
  </div>

  <!-- Mobile Navigation Menu -->
  {#if isMenuOpen}
    <div class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200 shadow-lg">
        <a
          href="/"
          onclick={closeMenu}
          class="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors"
        >
          Home
        </a>
        <a
          href="/blog"
          onclick={closeMenu}
          class="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors"
        >
          Blog
        </a>
      </div>
    </div>
  {/if}
</nav>
