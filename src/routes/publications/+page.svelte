<script context="module">
  import pubs from "$lib/publications.json";

  export const international = pubs.international;
  export const conferences = pubs.conferences;
  export const others = pubs.others;
</script>
<script>
  import Navbar from "$lib/Navbar.svelte";
  import Footer from "$lib/Footer.svelte";

  const titles = [
    "International Journals",
    "Peer-Reviewed International Conferences",
    "Other Publications"
  ];
  const publications = [
    international,
    conferences,
    others
  ];
</script>

<div id="page-wrap">
  <div id="cpss-other-wrapper">
    <Navbar />
    <div class="container cpss-about-inner">
      <h1 class="animated fadeIn wow" data-wow-delay="0.4s">Publications</h1>
      <h2 class="animated fadeIn wow" data-wow-delay="0.45s">CAU CPSS Lab</h2>
    </div>
  </div>

  <div id="cpss-publications" class="cpss-publications-outer">
    {#each titles as title, i}
      <h2 class="titles">{title}</h2>
      <ul>
        {#each publications[i] as p}
          <li>
            {#if i < 2}
              {p.code}
            {/if}
            {p.people.split("Jaewoo Lee")[0]}
            <b>Jaewoo Lee</b>{p.people.split("Jaewoo Lee")[1]},
            "{p.title}," {p.details}
          </li>
        {/each}
      </ul>
    {/each}

  </div>

  <Footer />
</div>

<style>
@import "$lib/shared.css";
  .cpss-publications-outer {
    width: 100%;
    height: auto;
    padding: 70px;
  }

  #cpss-publications > ul {
    width: 1000px;
    margin: 60px auto 150px auto;
    list-style: none; /* Remove default bullet points */
    padding: 0;
  }

  #cpss-publications ul li {
    position: relative;
    padding-left: 20px;
    margin-bottom: 10px; /* Add spacing between items */
  }

  #cpss-publications ul li::before {
    content: "•"; /* Custom bullet symbol */
    color: #2a9d8f; /* Color for bullet point */
    font-size: 1.2em; /* Larger bullet */
    position: absolute;
    left: 0;
    top: 0;
  }
</style>
