<script>
  import Navbar from "$lib/Navbar.svelte";
  import Footer from "$lib/Footer.svelte";
  import { writable } from "svelte/store";
  import Layout from "../+layout.svelte";

  const graduates = [
    {
      name: "송용택",
      position: "Master(2019)",
      degree: "Convergence Security, CAU",
      description: "SK Infosec",
    },
    {
      name: "최동준",
      position: "Master(2020)",
      degree: "Convergence Security, CAU",
      description: "Air Force Officer",
    },
    {
      name: "서예령",
      position: "Master(2021)",
      degree: "Convergence Security, CAU",
      description: "Security Manager in Yungjin Pharm. Co., Ltd.",
    },
    {
      name: "이선우",
      position: "Master(2022)",
      degree: "Convergence Security, CAU",
      description: "BLANK",
    },
    {
      name: "이승욱",
      position: "Master(2022)",
      degree: "Convergence Security, CAU",
      description: "RaonSecure",
    },
    {
      name: "김지후",
      position: "Master(2023)",
      degree: "Convergence Security, CAU",
      description: "NONE",
    },
    {
      name: "임지혜",
      position: "Master(2023)",
      degree: "Convergence Security, CAU",
      description: "Posco",
    },
    {
      name: "김영준",
      position: "Master(2023)",
      degree: "Convergence Security, CAU",
      description: "Korea Local Information Research & Development Institute",
    },
    {
      name: "강한바다",
      position: "Master(2023)",
      degree: "Convergence Security, CAU",
      description: "Korea Local Information Research & Development Institute",
    },
  ];

  const undergraduates = [
    {
      name: "최병준",
      position: "Bachelor(2020)",
      degree: "???, CAU",
      description: "KAIST GSIS",
    },
    {
      name: "현석훈",
      position: "Bachelor(2022)",
      degree: "???, CAU",
      description: "KAIST GSIS",
    },
    {
      name: "장영욱",
      position: "Bachelor(2022)",
      degree: "Industrial Security, CAU",
      description: "EMPTY",
    },
    {
      name: "이승현",
      position: "Bachelor(2022)",
      degree: "Industrial Security, CAU",
      description: "EMPTY",
    },
  ]
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
            <img
              class="card-photo"
              src="/images/card/puang.png"
              alt="Professor"
            />
            <div class="card-body">
              <span class="card-name">{graduate.name}</span><br />
              <span class="card-position">{graduate.position}</span>

              <p class="card-degree">{graduate.degree}</p>
              <div class="card-description">{graduate.description}</div>
            </div>
          </div>
        {/each}
      </div>

      <h1 class="titles">Undergraduate Alumni</h1>
      <div class="row justify-content-center">

        {#each undergraduates as undergraduate, i}
          <div class="card col-sm-5 wow fadeIn animated" data-wow-delay={`${0.15 + i*0.07}s`}>
            <img
              class="card-photo"
              src="/images/card/puang.png"
              alt="Professor"
            />
            <div class="card-body">
              <span class="card-name">{undergraduate.name}</span><br />
              <span class="card-position">{undergraduate.position}</span>

              <p class="card-degree">{undergraduate.degree}</p>
              <div class="card-description">{undergraduate.description}</div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>

  <Footer />
</div>

<style>
  /* Bootstrap */
  @import "/src/css_old/bootstrap.css";

  /* Animate.css */
  @import "/src/css_old/animate.css";

  /* Custom CSS */
  @import "/src/css_old/style.css";

  @import "$lib/shared.css";

  .card {
    max-width: 80%;
    margin: 0 auto;
    margin-top: 50px;

    max-width: 80%;
    display: flex;
    flex-direction: row;
  }

  .graduate-cards {
    margin-bottom: 100px;
  }

  .card-photo {
    max-width: 150px;
    width: 150px;
    height: auto;

    /* TODO: refine width/height */
    margin: 20px auto;
    padding: 10px 0px 10px 0px;
  }

  .card-name {
    font-size: 25px;
    font-weight: 600;
    margin-right: 10px;
  }

  .card-position {
    font-size: 18px;
    font-weight: 500;
  }

  .card-description ul {
    padding-left: 20px;
  }

  /**/

  .cpss-member-outer {
    width: 100%;
    height: auto;
    padding: 70px;
  }
</style>
