<script>
  import Navbar from "$lib/Navbar.svelte";
  import Footer from "$lib/Footer.svelte";

  // TODO: JSON으로 만들어서 svelete for문 써도 될듯
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
  <div class="cpss-member-outer">
    <div class="container">
      <h1 class="titles">Professor</h1>
      <div class="card col-sm-5 wow fadeIn animated" data-wow-delay="0.15s">
        <img
          class="card-photo"
          src="/src/assets/images/card/professor.jpg"
          alt="Professor"
        />
        <div class="card-body">
          <span class="card-name">Jaewoo Lee <a href="https://sites.google.com/view/jaewoo/home" title="Visit the personal page" target="_blank">🔗</a></span><br />
          <span class="card-position">Professor</span>
          <!-- TODO: Professor | Assistant Professor -->
          <p class="card-degree">Industrial Security, Chung-Ang Univ.</p>
          <div class="card-description">
            <b>Ph.D. in Computer and Information Science</b>, Univ. of Pennsylvania
            <br /><br />
            <b>Interests:</b> OS Security | Network Security | Blockchain
            Security<br />
            | Big-Data Security | Mobility Security | Cyber-Physical Safety & Security
          </div>
        </div>
      </div>

      <h1 class="titles">Students</h1>
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

            <p class="card-degree">Convergence Security, CAU</p>
            <div class="card-description">
              <b>Interests:</b>
              <ul>
                <li>Federated Learning</li>
                <li>Security & Privacy for ML</li>
                <li>Cyber-Physical System</li>
                <li>Real-time System</li>
              </ul>
            </div>
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

            <p class="card-degree">Convergence Security, CAU</p>
            <div class="card-description">
              <b>Interests:</b>
              <ul>
                <li>Cyber Security</li>
                <li>Data Analysis</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h1 class="titles">Undergraduates</h1>
      <div class="row justify-content-center">
        <div class="card col-sm-5 wow fadeIn animated" data-wow-delay="0.15s">
          <img
            class="card-photo"
            src="/src/assets/images/card/ur_shp.png"
            alt="Professor"
          />
          <div class="card-body">
            <span class="card-name">Sangho Park</span><br />
            <span class="card-position">Undergraduate researcher</span>

            <p class="card-degree">Business Administration, CAU</p>
            <div class="card-description">
              <b>Interests:</b>
              <ul>
                <li><i>TO BE ADDED</i></li>
              </ul>
            </div>
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

            <p class="card-degree">Computer Science & Engineering, CAU</p>
            <div class="card-description">
              <b>Interests:</b>
              <ul>
                <li>Programming Languages</li>
                <li>Internet of Things</li>
              </ul>
            </div>
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
    margin-top: 50px;
    margin-bottom: 100px;

    display: flex;
    flex-direction: row;
  }

  .card {
    max-width: 80%;
    display: flex;
    flex-direction: row;
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
