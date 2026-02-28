<script context="module">
  import alumni from "$lib/alumni.json";

  export const graduates = alumni.graduates;
  export const undergraduates = alumni.undergraduates;
</script>
<script>
  import Navbar from "$lib/Navbar.svelte";
  import Footer from "$lib/Footer.svelte";
  import { writable } from "svelte/store";
  import Layout from "../+layout.svelte";
</script>

<div id="page-wrap">
  <div id="cpss-other-wrapper">
    <Navbar />
    <div class="container cpss-about-inner">
      <h1 class="animated fadeIn wow" data-wow-delay="0.25s">Alumni</h1>
      <h2 class="animated fadeIn wow" data-wow-delay="0.35s">CAU CPSS Lab</h2>
    </div>
  </div>

  <!-- CARDs -->
  <div class="cpss-member-outer">
    <div class="container">
      <h1 class="titles">Graduate Alumni</h1>
      <div class="row justify-content-center graduate-cards">

        {#each graduates as graduate, i} <!-- 숫자 조정 ... 애니메이션이 답답함 -->
          <div class="card col-sm-5 wow fadeIn animated" data-wow-delay={`${0.4 + i*0.07}s`}>
            <div class="card-body">
              <span class="card-name">{graduate.name}</span><br />
              <span class="card-degree">{graduate.degree} ({graduate.year})</span>

              <p class="card-major">{graduate.major}, {graduate.school}</p>
              <div class="card-status">{graduate.status ?? "BLANK"}</div>
            </div>
          </div>
        {/each}
      </div>

      <h1 class="titles">Undergraduate Alumni</h1>
      <div class="row justify-content-center">

        {#each undergraduates as undergraduate, i}
          <div class="card col-sm-5 wow fadeIn animated" data-wow-delay={`${0.15 + i*0.07}s`}>
            <div class="card-body">
              <span class="card-name">{undergraduate.name}</span><br />
              <span class="card-degree">{undergraduate.degree} ({undergraduate.year})</span>

              <p class="card-major">{undergraduate.major}, {undergraduate.school}</p>
              <div class="card-status">{undergraduate.status ?? "BLANK"}</div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>

  <Footer />
</div>

<style>
  @import "$lib/shared.css";

  .titles {
    margin-top: 50px;
  }

  .card {
    max-width: 80%;
    margin: 0 auto;
    margin-top: 50px;
    display: flex;
    flex-direction: row;
  }

  .graduate-cards {
    margin-bottom: 100px;
  }

  .card-name {
    font-size: 25px;
    font-weight: 600;
    margin-right: 10px;
  }

  .card-degree {
    font-size: 18px;
    font-weight: 500;
  }

  /**/

  .cpss-member-outer {
    width: 100%;
    height: auto;
    padding: 70px;
  }

  @media screen and (max-width: 1024px) {
    h1 {
      font-size: 30px;
    }

    .cpss-member-outer {
      width: 100%;
      height: auto;
      padding: 0px !important;
      margin: 0px !important;
      align-items: center;
      align-self: center;
    }

    .card {
        max-width: 90%;
    } .card-body {
      padding: 10px 20px 10px 20px;
      margin: 5px 5px 5px 5px;
    } .card-name {
      font-size: 22px;
    } .card-degree {
      font-size: 16px;
    }
  }
</style>
