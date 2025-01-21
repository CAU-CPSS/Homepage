<script context="module">
  import members from "$lib/members.json";

  export const students = members.students;
  export const undergraduates = members.undergraduates;
</script>

<script>
  import Navbar from "$lib/Navbar.svelte";
  import Footer from "$lib/Footer.svelte";
</script>

<div id="page-wrap">
  <div id="cpss-other-wrapper">
    <Navbar />
    <div class="container cpss-about-inner">
      <h1 class="animated fadeIn wow" data-wow-delay="0.28s">Members</h1>
      <h2 class="animated fadeIn wow" data-wow-delay="0.35s">CAU CPSS Lab</h2>
    </div>
  </div>

  <!-- CARDs -->
  <div class="cpss-member-outer">
    <div class="container">
      <h1 class="titles">Professor</h1>
      <div class="card col-sm-5 wow fadeIn animated" data-wow-delay="0.35s">
        <img
          class="card-photo"
          src="/images/card/professor.jpg"
          alt="Professor"
        />
        <div class="card-body">
          <span class="card-name"
            >Jaewoo Lee
            <a
              href="https://sites.google.com/view/jaewoo/home"
              title="Personal page"
              target="_blank">🔗</a
            >
            <a
              href="https://scholar.google.co.kr/citations?user=lShsfKEAAAAJ"
              title="Google Scholar"
              target="_blank">🎓</a
            >
          </span><br />
          <span class="card-degree">Professor</span>
          <!-- TODO: Professor | Assistant Professor -->
          <p class="card-major">Industrial Security, Chung-Ang Univ.</p>
          <div class="card-interests">
            <b>Ph.D. in Computer and Information Science</b>, Univ. of
            Pennsylvania
            <br /><br />
            <b>Interests:</b> OS Security | Network Security | Blockchain
            Security<br />
            | Big-Data Security | Mobility Security | Cyber-Physical Safety & Security
          </div>
        </div>
      </div>

      <h1 class="titles">Students</h1>
      <div class="row justify-content-center">

        {#each students as student, i}
          <div class="card col-sm-5 wow fadeIn animated" data-wow-delay={`${0.4 + i * 0.07}s`}>
            <img class="card-photo" src="/images/card/{student.photo}" alt="Picture of {student.name}"/>
            <div class="card-body">
              <span class="card-name">{student.name}</span><br />
              <span class="card-degree">{student.degree}</span>

              <p class="card-major">{student.major}</p>
              <div class="card-interests">
                <b>Interests:</b>
                <ul>
                  {#each student.interests as interest}
                    <li>{interest}</li>
                  {/each}
                </ul>
              </div>
            </div>
          </div>
        {/each}

      </div>

      <h1 class="titles">Undergraduates</h1>
      <div class="row justify-content-center">

        {#each undergraduates as undergraduate, i}
          <div class="card col-sm-5 wow fadeIn animated" data-wow-delay={`${0.15 + i * 0.07}s`}>
            <img class="card-photo" src="/images/card/{undergraduate.photo}" alt="Picture of {undergraduate.name}"/>
            <div class="card-body">
              <span class="card-name">{undergraduate.name}</span><br />
              <span class="card-degree">{undergraduate.degree}</span>

              <p class="card-major">{undergraduate.major}</p>
              <div class="card-interests">
                <b>Interests:</b>
                <ul>
                  {#each undergraduate.interests as interest}
                    <li>{interest}</li>
                  {/each}
                </ul>
              </div>
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

  .titles {
    margin-top: 80px;
  }

  .container .card {
    max-width: 80%;
    margin: 0 auto;
    margin-top: 50px;
    margin-bottom: 0px;

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

  .card-degree {
    font-size: 18px;
    font-weight: 500;
  }

  .card-interests ul {
    padding-left: 20px;
  }

  /**/

  .cpss-member-outer {
    width: 100%;
    height: auto;
    padding: 70px;
  }
</style>
