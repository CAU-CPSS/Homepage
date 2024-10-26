<script>
  import Navbar from "$lib/Navbar.svelte";
  import Footer from "$lib/Footer.svelte";
</script>

<div id="page-wrap">
  <div id="cpss-other-wrapper">
    <Navbar />
    <div class="container cpss-about-inner">
      <h1 class="animated fadeIn wow" data-wow-delay="0.4s">Members</h1>
      <h2 class="animated fadeIn wow" data-wow-delay="0.45s">CAU CPSS Lab</h2>
    </div>
  </div>

  <!-- CARDs -->
  <div id="fh5co-reviews" class="cpss-member-outer">
    <div class="container fh5co-reviews-inner">
      <div class="card col-sm-5 wow fadeIn animated" data-wow-delay="0.15s">
        <img
          class="card-photo"
          src="/src/assets/images/card/professor.jpg"
          alt="Professor"
        />
        <div class="card-body">
          <span class="card-name">Jaewoo Lee</span><br />
          <span class="card-position">Professor</span>

          <p class="card-degree">University of Pennsylvania, 공학박사</p>
          <p class="testimonial-desc">
            중앙대학교 산업보안학과 조교수(2018-), 대학원 융합보안학과,
            특수대학원 보안대학원 (모빌리티 보안 트랙)
            <br />
            운영체제 보안, 네트워크 보안, 첨단 보안 분야 연구 (블럭체인 보안, 빅데이터
            보안, 모빌리티 보안, 사이버-물리 시스템 안전 및 보안)
            <br />
            공학박사 (University of Pennsylvania 2017, Ph.D in Computer and Information
            Science) 공학석사(서울대학교 2008, 컴퓨터공학) 공학사(서울대학교 2006,
            컴퓨터공학)
          </p>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="card col-sm-5 wow fadeIn animated" data-wow-delay="0.15s">
          <img
            class="card-photo"
            src="/src/assets/images/card/phd_shp.jpg"
            alt="Professor"
          />
          <div class="card-body">
            <span class="card-name">Sunghwan Park</span><br />
            <span class="card-position">Ph.D. candidate</span>

            <p class="card-degree">Convergence Security, Chung-Ang Univ.</p>
            <p class="testimonial-desc">
              P2P data propagation algorithm, Distributed System, Federated
              Learning
            </p>
          </div>
        </div>
        <div class="card col-sm-5 wow fadeIn animated" data-wow-delay="0.15s">
          <img
            class="card-photo"
            src="/src/assets/images/card/phd_ysc.jpg"
            alt="Professor"
          />
          <div class="card-body">
            <span class="card-name">Yeseul Chang</span><br />
            <span class="card-position">Ph.D. candidate</span>

            <p class="card-degree">Convergence Security, Chung-Ang Univ.</p>
            <p class="testimonial-desc">
              SW products planning, Sales marketing
            </p>
          </div>
        </div>

        <div class="card col-sm-5 wow fadeIn animated" data-wow-delay="0.15s">
          <img
            class="card-photo"
            src="/src/assets/images/card/ur_shp.jpg"
            alt="Professor"
          />
          <div class="card-body">
            <span class="card-name">Sangho Park</span><br />
            <span class="card-position">Undergraduate researcher</span>

            <p class="card-degree">School of Economics</p>
            <p class="testimonial-desc">Artificial Intelligence</p>
          </div>
        </div>
        <div class="card col-sm-5 wow fadeIn animated" data-wow-delay="0.15s">
          <img
            class="card-photo"
            src="/src/assets/images/card/ur-swn.jpg"
            alt="Professor"
          />
          <div class="card-body">
            <span class="card-name">Sunwoo Na</span><br />
            <span class="card-position">Undergraudate researcher</span>

            <p class="card-degree">School of Computer Science & Engineering</p>
            <p class="testimonial-desc">
              Programming Languages, Internet of Things
            </p>
          </div>
        </div>
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

  .container .card {
    max-width: 80%;
    margin: 0 auto;
    margin-bottom: 50px;

    display: flex;
    flex-direction: row;
  }

  .card {
    max-width: 80%;
    display: flex;
    flex-direction: row;
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

  .card-photo {
    max-width: 150px;
    height: auto;
    margin: 20px auto;
  }
</style>
