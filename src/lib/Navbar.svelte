<script>
  import { onMount } from "svelte";
  import { writable } from "svelte/store";

  const activeNav = writable("");
  // TODO: dropdown open을 하나의 writable로 관리할지..

  onMount(() => {
    const currentPath = window.location.pathname;
    let nav_link = "";

    switch (currentPath) {
      case "/":
        nav_link = "nav-about";
        break;
      case "/professor":
      case "/members":
      case "/alumni":
        nav_link = "nav-members";
        break;
      case "/publications.html":
        nav_link = "nav-publications";
        break;
      default:
        break;
    }

    if (nav_link) {
      activeNav.set(nav_link);
    }
  });

  /**
   *
   * @param {any} event
   */
  function handleResearchClick(event) {
    event.preventDefault();
    // is index page
    if (window.location.pathname === "/") {
      document
        .getElementById("cpss-research")
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "index.html#cpss-research";
    }
  }
</script>

<nav class="container navbar navbar-expand-lg main-navbar-nav navbar-light">
  <a class="navbar-brand" href="/">CPSS Lab</a>
  <button
    class="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto mr-auto">
      {#each ["nav-about", "nav-research", "nav-members", "nav-publications"] as item}
        <li
          class="nav-item {item === $activeNav ? 'active' : ''} {item ===
          'nav-members'
            ? 'dropdown'
            : ''}"
        >
          <a
            id={item}
            class="nav-link"
            href={item === "nav-about" || item === "nav-research"
              ? "/"
              : `/${item.split("-")[1]}`}
            on:click={item === "nav-research" ? handleResearchClick : null}
          >
            {item.replace("nav-", "").charAt(0).toUpperCase() + item.slice(5)}
          </a>
          {#if item === "nav-members"}
            <ul class="dropdown-menu">
              <!-- <li><a id="nav-professor" href="/professor.html" hx-boost="true" class="dropdown-item">Professor</a></li> -->
              <li>
                <a id="nav-members" href="/members.html" class="dropdown-item"
                  >Members</a
                >
              </li>
              <li>
                <a id="nav-alumni" href="/alumni.html" class="dropdown-item"
                  >Alumni</a
                >
              </li>
            </ul>
          {/if}
        </li>
      {/each}
    </ul>
  </div>
</nav>

<style>
  /* Bootstrap */
  @import "/src/css_old/bootstrap.css";

  /* Owl Carousel */
  @import "/src/css_old/owl.carousel.css";
  @import "/src/css_old/owl.theme.default.min.css";

  /* Animate.css */
  @import "/src/css_old/animate.css";

  /* Custom CSS */
  @import "/src/css_old/style.css";

  .main-navbar-nav .navbar-brand {
    font-size: 38px;
    letter-spacing: 3px;
    position: relative;
    font-weight: 500;
  }

  .main-navbar-nav {
    color: #fff;
  }
  .main-navbar-nav li {
    opacity: 0.7;
  }
  .main-navbar-nav .nav-link {
    margin: 0 35px;
    font-size: 14.5px;
    font-weight: 500;
    display: block;
    padding: 0.5rem;
    text-decoration: none;
  }

  .active {
    opacity: 1 !important;
  }

  .navbar-light .navbar-toggler {
    color: #fff;
    border-color: #c7c7c7;
  }

  .main-navbar-nav .navbar-nav .nav-item a:hover {
    color: #234197 !important;
    -webkit-transition: all 0.33s ease;
    -moz-transition: all 0.33s ease;
    -o-transition: all 0.33s ease;
    -ms-transition: all 0.33s ease;
    transition: all 0.33s ease;
  }
</style>
