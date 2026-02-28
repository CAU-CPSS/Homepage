<script context="module">
  import members from "$lib/members.json";

  export const students = members.students;
  export const undergraduates = members.undergraduates;
  export const admins = members.admins;
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
          <div
            class="card col-sm-5 wow fadeIn animated"
            data-wow-delay={`${0.4 + i * 0.07}s`}
          >
            <img
              class="card-photo"
              src="/images/card/{student.photo ?? 'puang.png'}"
              alt="Picture of {student.name}"
            />
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
          <div
            class="card col-sm-5 wow fadeIn animated"
            data-wow-delay={`${0.15 + i * 0.07}s`}
          >
            <img
              class="card-photo"
              src="/images/card/{undergraduate.photo ?? 'puang.png'}"
              alt="Picture of {undergraduate.name}"
            />
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

      <h1 class="titles">Homepage & Server Admin</h1>
      <div class="row justify-content-center">
        {#each admins as admin, i}
          <div
            class="card col-sm-5 wow fadeIn animated"
            data-wow-delay={`${0.15 + i * 0.07}s`}
          >
            <img
              class="card-photo"
              src="/images/card/{admin.photo ?? 'puang.png'}"
              alt="Picture of {admin.name}"
            />
            <div class="card-body">
              <span class="card-name">{admin.name}</span><br />
              <span class="card-degree">{admin.degree}</span>

              <p class="card-major">{admin.major}</p>
              <div class="card-interests">
                <b>Interests:</b>
                <ul>
                  {#each admin.interests as interest}
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
  @import "$lib/shared.css";

  .titles {
    margin: 50px 0;
  }

  .container .card {
    margin: 0 auto;
    display: flex;
    flex-direction: row;
  }

  .row {
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
  }

  .card {
    max-width: 80%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
  }

  .card-photo {
    /* 증명사진(반명함판) 3:4 비율 */
    width: 160px;
    height: 213px;

    margin: 20px 0px 20px 0px;
    align-self: center;
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

  @media screen and (max-width: 1024px) {
    h1 {
      font-size: 30px;
    }
    .card {
      max-width: 90%;
      display: flex;
      flex-direction: column !important;
      align-items: flex-start;
      padding: 10px 10px 0px 10px;
    }
    .card-body {
      padding: 20px 20px 5px 20px;
    }
    .card-photo {
      width: 120px;
      height: 160px;

      margin: 12px 0px 0px 0px;
      align-self: center;
    }
    .card-name {
      font-size: 23px;
      font-weight: 600;
    }
    .card-degree {
      font-size: 16px;
      font-weight: 500;
    }
    .card-interests ul {
      padding-left: 16px;
    }

    .cpss-member-outer {
      width: 100%;
      height: auto;
      padding: 0px !important;
      margin: 50px 0px;
      align-items: center;
      align-self: center;
    }
  }
  /**/

  .cpss-member-outer {
    width: 100%;
    height: auto;
    padding: 70px;
    align-self: center;
  }
</style>
