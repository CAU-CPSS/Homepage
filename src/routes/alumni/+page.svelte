<script>
  import Navbar from "$lib/Navbar.svelte";
  import Footer from "$lib/Footer.svelte";

  // TODO: JSON으로 만들어서 svelete for문 써도 될듯
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
        <div class="card col-sm-5 wow fadeIn animated" data-wow-delay="0.4s">
          <img
            class="card-photo"
            src="/src/assets/images/card/puang.png"
            alt="Professor"
          />
          <div class="card-body">
            <span class="card-name">송용택</span><br />
            <span class="card-position">Master(2019)</span>

            <p class="card-degree">Convergence Security, CAU</p>
            <div class="card-description">SK Infosec</div>
          </div>
        </div>
        <div class="card col-sm-5 wow fadeIn animated" data-wow-delay="0.55s">
          <img
            class="card-photo"
            src="/src/assets/images/card/puang.png"
            alt="Professor"
          />
          <div class="card-body">
            <span class="card-name">최동준</span><br />
            <span class="card-position">Master(2020)</span>

            <p class="card-degree">Convergence Security, CAU</p>
            <div class="card-description">Air Force Officer</div>
          </div>
        </div>
        <div class="card col-sm-5 wow fadeIn animated" data-wow-delay="0.69s">
          <img
            class="card-photo"
            src="/src/assets/images/card/puang.png"
            alt="Professor"
          />
          <div class="card-body">
            <span class="card-name">서예령</span><br />
            <span class="card-position">Master(2021)</span>

            <p class="card-degree">Convergence Security, CAU</p>
            <div class="card-description">
              Security Manager in Yungjin Pharm. Co., Ltd.
            </div>
          </div>
        </div>
        <div class="card col-sm-5 wow fadeIn animated" data-wow-delay="0.78s">
          <img
            class="card-photo"
            src="/src/assets/images/card/puang.png"
            alt="Professor"
          />
          <div class="card-body">
            <span class="card-name">이선우</span><br />
            <span class="card-position">Master(2022)</span>

            <p class="card-degree">Convergence Security, CAU</p>
            <div class="card-description">BLANK</div>
          </div>
        </div>
        <div class="card col-sm-5 wow fadeIn animated" data-wow-delay="0.85s">
          <img
            class="card-photo"
            src="/src/assets/images/card/puang.png"
            alt="Professor"
          />
          <div class="card-body">
            <span class="card-name">이승욱</span><br />
            <span class="card-position">Master(2022)</span>

            <p class="card-degree">Convergence Security, CAU</p>
            <div class="card-description">RaonSecure</div>
          </div>
        </div>
        <div class="card col-sm-5 wow fadeIn animated" data-wow-delay="0.92s">
          <img
            class="card-photo"
            src="/src/assets/images/card/puang.png"
            alt="Professor"
          />
          <div class="card-body">
            <span class="card-name">김지후</span><br />
            <span class="card-position">Master(2023)</span>

            <p class="card-degree">Convergence Security, CAU</p>
            <div class="card-description">NONE</div>
          </div>
        </div>
        <div class="card col-sm-5 wow fadeIn animated">
          <img
            class="card-photo"
            src="/src/assets/images/card/puang.png"
            alt="Professor"
          />
          <div class="card-body">
            <span class="card-name">임지혜</span><br />
            <span class="card-position">Master(2023)</span>

            <p class="card-degree">Convergence Security, CAU</p>
            <div class="card-description">Posco</div>
          </div>
        </div>
        <div class="card col-sm-5 wow fadeIn animated">
          <img
            class="card-photo"
            src="/src/assets/images/card/puang.png"
            alt="Professor"
          />
          <div class="card-body">
            <span class="card-name">김영준</span><br />
            <span class="card-position">Master(2023)</span>

            <p class="card-degree">Convergence Security, CAU</p>
            <div class="card-description">
              Korea Local Information Research & Development Institute
            </div>
          </div>
        </div>
        <div class="card col-sm-5 wow fadeIn animated">
          <img
            class="card-photo"
            src="/src/assets/images/card/puang.png"
            alt="Professor"
          />
          <div class="card-body">
            <span class="card-name">강한바다</span><br />
            <span class="card-position">Master(2023)</span>

            <p class="card-degree">Convergence Security, CAU</p>
            <div class="card-description">
              Korea Local Information Research & Development Institute
            </div>
          </div>
        </div>
      </div>

      <h1 class="titles">Undergraduate Alumni</h1>
      <div class="row justify-content-center">
        <div class="card col-sm-5 wow fadeIn animated" data-wow-delay="0.15s">
          <img
            class="card-photo"
            src="/src/assets/images/card/puang.png"
            alt="Professor"
          />
          <div class="card-body">
            <span class="card-name">최병준</span><br />
            <span class="card-position">Bachelor(2020)</span>

            <p class="card-degree">???, CAU</p>
            <div class="card-description">KAIST GSIS</div>
          </div>
        </div>
        <div class="card col-sm-5 wow fadeIn animated" data-wow-delay="0.15s">
          <img
            class="card-photo"
            src="/src/assets/images/card/puang.png"
            alt="Professor"
          />
          <div class="card-body">
            <span class="card-name">현석훈</span><br />
            <span class="card-position">Bachelor(2022)</span>

            <p class="card-degree">???, CAU</p>
            <div class="card-description">KAIST GSIS</div>
          </div>
        </div>
        <div class="card col-sm-5 wow fadeIn animated" data-wow-delay="0.15s">
          <img
            class="card-photo"
            src="/src/assets/images/card/puang.png"
            alt="Professor"
          />
          <div class="card-body">
            <span class="card-name">장영욱</span><br />
            <span class="card-position">Bachelor(2022)</span>

            <p class="card-degree">Industrial Security, CAU</p>
            <div class="card-description">EMPTY</div>
          </div>
        </div>
        <div class="card col-sm-5 wow fadeIn animated" data-wow-delay="0.15s">
          <img
            class="card-photo"
            src="/src/assets/images/card/puang.png"
            alt="Professor"
          />
          <div class="card-body">
            <span class="card-name">이승현</span><br />
            <span class="card-position">Bachelor(2022)</span>

            <p class="card-degree">Industrial Security, CAU</p>
            <div class="card-description">EMPTY</div>
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
