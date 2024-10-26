<script>
  import Navbar from "$lib/Navbar.svelte";
  import Footer from "$lib/Footer.svelte";

  const projects = [
    {
      name: "42dot", description: "커넥티드카 및 차량 디지털트윈을 위한 효율적인 데이터 동기화 모델 및 차량 민감정보 동기화 방안 연구 (2024-2025)",
    },
    {
      name: "한국연구재단", description: "(참여과제) 현장연계 미래선도인재양성 지원사업 '탄소중립 ESG 미래선도 실전문제연구단' (2022-2026)",
    },
    {
      name: "한국연구재단(NRF)", description: "(참여과제) 두뇌한국21 4단계 (Brain Korea Four, BK4) '사이버 물리 공간 청정화 연구사업단' (2020-2027)",
    },
    {
      name: "정보통신기획평가원(IITP)", description: "(참여과제) 대학 ICT연구센터(ITRC) '디지털 트윈 기반 스마트 에너지 시티 융합 기술 개발 및 인력양성' (2020-2027)",
    },
    {
      name: "에너지기술평가원", description: "(참여과제) '전기소비자 특성을 반영한 주택용 전력사용 빅데이터 분석/관리체계 구축' (2019-2022)",
    },
    {
      name: "한국산업기술보호협회", description: "(참여과제) '4차 산업혁명 기반 산업기술보호 R&D 전문인력 양성' (2019-2023)",
    },
    {
      name: "한국연구재단(NRF)", description: "(개인과제) '안정성과 보안성을 고려한 자율주행 플랫폼 연구' (2018-2021)",
    },
    {
      name: "정보통신기획평가원(IITP)", description: "(참여과제) 대학 ICT연구센터(ITRC) '블럭체인서비스센터' (2018-2024)",
    }
  ]

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
      <!-- https://seb.kr/w/사이버_물리_시스템 : 띄어쓰기 참고 -->
      <h2 class="animated fadeIn wow" data-wow-delay="0.45s">
        Cyber-Physical System<br />
        Security Lab at CAU
      </h2>
      <h3 class="animated fadeIn wow" data-wow-delay="0.6s">
        중앙대학교 사이버물리시스템 보안 연구실
      </h3>
      <p class="animated fadeIn wow" data-wow-delay="0.67s">
        AI와 디바이스의 융합을 시스템 관점에서 접근하여 효율적인 응용 방안을
        연구합니다.<br />
        학문적인 연구를 넘어 실제 산업에 적용할 수 있는 시스템을 구현합니다.<br
        />
        주요 연구분야: OS, On-device, Embedded, Real-time system, Security
      </p>
      <h4 class="animated fadeIn">
        ╔═════════ ∘◦ ☆ ◦∘ ══════════╗<br />
        🎉 석·박사 절⭐찬 모집중 🎊<br />
        ╚═════════ ∘◦ ❉ ◦∘ ══════════╝
      </h4>
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
              src="/src/assets/images/research/squircle-1.png"
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
              src="/src/assets/images/research/squircle-2.png"
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
              src="/src/assets/images/research/squircle-3.png"
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

    <ul>
      {#each projects as project}
        <li>
          {project.name}, {project.description}
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
  /* Bootstrap */
  @import "/src/css_old/bootstrap.css";

  /* Animate.css */
  @import "/src/css_old/animate.css";

  /* Custom CSS */
  @import "/src/css_old/style.css";

  /* TODO: Main Background */
  #cpss-about-wrapper {
    position: relative;
    height: 700px; /* TODO: 800 */
    width: 100%;
    background-color: black;
    background-image: url("/src/assets/images/cpss-main.jpeg");
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover; /* 또는 contain */
  }
</style>
