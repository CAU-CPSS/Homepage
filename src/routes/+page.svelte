<script context="module">
  import projs from "$lib/projects.json";

  export const projects = projs;
</script>
<script>
  import Navbar from "$lib/Navbar.svelte";
  import Footer from "$lib/Footer.svelte";
</script>

<svelte:head>
  <title>CPSS Lab @ CAU</title>
</svelte:head>

<div id="page-wrap">
  <!-- ============================== About ============================== -->
  <div id="cpss-about-wrapper">
    <Navbar />
    <!-- 메인 페이지 -->

    <div class="container cpss-about-inner">
      <h1 class="animated fadeIn wow" data-wow-delay="0.4s">CAU CPSS Lab</h1>
      <h2 class="animated fadeIn wow" data-wow-delay="0.45s">
        Cyber-Physical System<br />
        Security Lab at CAU
      </h2>
      <h3 class="animated fadeIn wow" data-wow-delay="0.6s">
        중앙대학교 사이버물리시스템 보안 연구실
      </h3>
      <ul class="animated fadeIn wow" data-wow-delay="0.65s">
        <li>AI와 디바이스의 융합을 시스템 관점에서 접근하여 효율적인 응용 방안을 연구합니다.</li>
        <li>학문적인 연구를 넘어 실제 산업에 적용할 수 있는 시스템을 구현합니다.</li>
      </ul>
      <p class="animated fadeIn wow" data-wow-delay="0.67s">

        주요 연구분야: OS, On-device, Embedded, Real-time system, Security
      </p>
      <p class="animated fadeIn" id="recruit">
        ╔═════════ ∘◦ ☆ ◦∘ ══════════╗<br />
        🎉 석·박사 절⭐찬 모집중 🎊<br />
        ╚═════════ ∘◦ ❉ ◦∘ ══════════╝
      </p>
    </div>
  </div>

  <!-- ============================= Research ============================= -->

  <div class="curved-bg-div wow animated fadeIn" data-wow-delay="0.15s"></div>
  <div id="cpss-research" class="cpss-research-outer">
    <div class="container">
      <h1 id="research" class="titles">Research</h1>
      <div class="row cpss-research-grid-columns">
        <div
          class="col-sm-6 in-order-1 wow animated fadeInLeft"
          data-wow-delay="0.22s"
        >
          <div class="col-sm-image-container">
            <img
              class="img-float-left img-research"
              src="/images/research/squircle-1.png"
              alt="cyber-physical systems"
            />
          </div>
        </div>

        <div
          class="col-sm-6 in-order-2 sm-6-content wow animated fadeInRight"
          data-wow-delay="0.22s"
        >
          <h1>Cyber-Physical Systems</h1>
          <p>
            My research is focused on foundations of Cyber-Physical Systems
            (CPS). CPS are next-generation computer systems which sense and
            actuate physical environment. Their examples are autonomous driving
            vehicles, unmanned aerial vehicles, and intelligent surgery robots.
            CPS can potentially revolutionize entire our life. <br />
            One important aspect of CPS is real-time systems because CPS interact
            physical entities which are sensitive to time. Real-time systems are
            systems whose correctness depends on their temporal aspects as well as
            their functional aspects. In Real Time scheduling, its performance is
            evaluated by timeliness on timing constraints (deadlines). On the other
            hand, speed/average case performance/throughput, which is used for performance
            metric in traditional system research, are less significant. Its key
            property is predictability on timing constraints.
          </p>
        </div>

        <div
          class="col-sm-6 in-order-3 sm-6-content wow animated fadeInLeft"
          data-wow-delay="0.22s"
        >
          <h1>Machine Learning Security and Autonomous Driving</h1>
          <!-- TODO: 이거 내용이 딴판입니다 -->
          <p>
            Federated learning is a learning method that collects only learned
            models on a server to ensure data privacy. FL proceeds with data
            directly from distributed clients. As clients in FL often have
            limited communication bandwidth, communication between servers and
            clients should be optimized to improve performance. FL clients have
            to communicate in unstable network environments. However, as
            existing FL aggregation algorithms transmit and receive a large
            amount of weights, accuracy is significantly reduced in unstable
            network environments. <!--In this study, we propose the algorithm using particle swarm
						optimization algorithm instead of FedAvg, which updates the global model by
						collecting weights of learned models that were mainly used in federated learning.
						The algorithm is named as federated particle swarm optimization (FedPSO), and we
						increase its robustness in unstable network environments by transmitting score
						values rather than large weights. Thus, we propose a FedPSO, a global model update
						algorithm with improved network communication performance, by changing the form of
						the data that clients transmit to servers. -->
          </p>
        </div>

        <div
          class="col-sm-6 in-order-4 wow animated fadeInRight"
          data-wow-delay="0.22s"
        >
          <div class="col-sm-image-container">
            <img
              class="img-float-right img-research"
              src="/images/research/squircle-2.png"
              alt="autonomous car"
            />
          </div>
        </div>

        <div
          class="col-sm-6 in-order-5 wow animated fadeInLeft"
          data-wow-delay="0.22s"
        >
          <div class="col-sm-image-container">
            <img
              class="img-float-left img-research"
              src="/images/research/squircle-3.png"
              alt="embedded"
            />
          </div>
        </div>
        <div
          class="col-sm-6 in-order-6 sm-6-content wow animated fadeInRight"
          data-wow-delay="0.22s"
        >
          <h1>Mixed Criticality Embedded Systems</h1>
          <p>
            Many safety-critical real-time systems such as avionics and
            automotive consist of multiple functionalities with different
            criticality. For example, an Unmanned Aerial Vehicle (UAV) consists
            of flight-related (high-critical) functionalities and
            mission-related (low-critical) functionalities. An increasing trend
            is to integrate multiple components with different criticality into
            a single shared platform, called Mixed-Criticality (MC) systems, in
            order to reduce manufacturing cost.
          </p>
        </div>
      </div>
      <!-- row -->
    </div>
  </div>

  <div id="cpss-accomplishment" class="cpss-accomplishment-outer">
    <h2 class="titles">Research Projects</h2>

    <ul id="researches">
      {#each projects as project}
        <li>
          {project.name}, {project.description} {project.period}
        </li>
      {/each}
    </ul>

    <!--h2>Domestic Patents</h2>
		<ul>
			<li>신인식, 좌훈승, 이재우,  "다중 중요도 시스템 위한 작업별 중요도 모드 전환 방법", 10-2031853-0000, 등록일:2019-10-07</li>
			<li>박청운, 신인식, 이길호, 한욱현, 좌훈승, 이재우, "빠르고 정확한 실행시간 예측을 위한 하이브리드 명령어 집합 시뮬레이션 기술", 10-2007991-0000 (2019.등록)</li>
			<li>백형부, 이용재, 윤현수, 이재우, "사이버 물리 시스템을 위한 보안 제약 사항을 포함하는 실시간 스케줄링 장치 및 방법", 10-1733339-0000 (2017.등록)</li>
		</ul-->
  </div>

  <Footer />
</div>

<!-- main page wrapper -->

<style>
  /* TODO: Main Background */
  #cpss-about-wrapper {
    position: relative;
    height: 700px; /* TODO: 800 */
    width: 100%;
    background-color: black;
    background-image: url("/images/cpss-main.jpeg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover; /* 또는 contain */
  }

  .cpss-about-inner > ul {
    color: #fff;
    width: 800px;
    font-weight: 200;
    font-size: 17px;
    margin-top: 25px;
    list-style: none;
  } .cpss-about-inner > ul li {
    position: relative;
    padding-left: 20px;
    margin-bottom: 5px; /* Add spacing between items */
  } .cpss-about-inner > ul li::before {
    content: "✧";
    position: absolute;
    left: 0;
    top: 0;
  } @media screen and (max-width: 1024px) { 
    .cpss-about-inner > ul {
      width: 90%;
      text-wrap: balance;
    } 
  }

  #recruit {
    text-align: center;
    color: #fff;
    width: 45%;
    font-weight: 400;
    font-size: 15px;
    margin-top: 30px;
    margin-bottom: 30px;
    line-height: 2em;
  } #recruit:hover {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    
    background: linear-gradient(to right, #ff3a6b, #29a9ff , #48ff00, #df3eff, #8173ff);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: rainbow_animation 1.5s ease-in infinite;
    background-size: 400% 100%;
  } @keyframes rainbow_animation {
    0%,100% { background-position: 0 0; }
    50% { background-position: 100% 0; }
  } @media screen and (max-width: 1024px) {
    #recruit {
      width: 100%;
    } #recruit:hover {
      font-size: 15px;
    }
  }

  #cpss-accomplishment > ul {
    width: 1000px;
    margin: 60px auto 300px auto;
    list-style: none; /* Remove default bullet points */
    padding: 0;
  } #cpss-accomplishment ul li {
    position: relative;
    padding-left: 20px;
    margin-bottom: 10px; /* Add spacing between items */
  } #cpss-accomplishment ul li::before {
    content: "•"; /* Custom bullet symbol */
    color: #2A9D8F; /* Color for bullet point */
    font-size: 1.2em; /* Larger bullet */
    position: absolute;
    left: 0;
    top: 0;
  } @media screen and (max-width: 1024px) {
    #cpss-accomplishment > ul {
      width: 90%;
      text-wrap: wrap;
      margin: 60px 10px 300px 10px;
    } #cpss-accomplishment ul li {
      padding-left: 10px;
    }
  }

</style>
