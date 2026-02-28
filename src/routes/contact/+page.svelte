<script>
    import Navbar from "$lib/Navbar.svelte";
    import Footer from "$lib/Footer.svelte";
</script>
  
<div id="page-wrap">
  <div id="cpss-other-wrapper">
    <Navbar />
    <div class="container cpss-about-inner">
      <h1 class="animated fadeIn wow" data-wow-delay="0.4s">Contact</h1>
      <h2 class="animated fadeIn wow" data-wow-delay="0.45s">CAU CPSS Lab</h2>
    </div>
  </div>

  <div id="cpss-contact" class="cpss-contact-outer">
    <h2 class="titles">Recruit</h2>
    <p>NOTE: Last update at Jan. 31st, 2026.<br/>
      <b>석·박사과정 및 학부연구생 지원 문의는 <a href="mailto:jaewoo.cau@gmail.com">jaewoo.cau@gmail.com</a> 또는
        <a href="mailto:jaewoolee@cau.ac.kr">jaewoolee@cau.ac.kr</a>로 부탁드립니다.</b><p>

    <h3>대학원생 모집 (석사·박사과정)</h3>
    <p><b>중앙대학교 사이버물리시스템 보안 연구실에서 연구자로 성장할 대학원생을 모집합니다.</b></p>

    <ul>
      <li>학과: 일반대학원 융합보안학과</li>
      <li>유형: Full-Time (전일제)</li>
      <li>학위: 보안공학석사/보안경영석사(석사과정), 보안공학박사/보안경영박사(박사과정)</li>
      <li>혜택: 연구 장학금, 연구 장비 지원, 해외 학술대회 발표 지원</li>
      <li>모집현황: <b>모집 중</b></li>
    </ul>
    <p>※중앙대학교 일반대학원 융합보안학과는 학과 간 협동과정으로 운영되어,
      <b><a href="https://graduate.cau.ac.kr/2018/ent03.php" target="_blank">학·석사연계과정</a>으로 지원할 수 없습니다.</b><br />
      대학원 지원 관련 내용은 중앙대학교 대학원 홈페이지를 참고하시기 바랍니다.
    </p>

    <h3>학부연구생 모집</h3>
    <p><b>중앙대학교 사이버물리시스템 보안 연구실에서 연구활동을 경험할 학부생을 모집합니다.</b></p>
    <ul>
      <li>소속 캠퍼스 및 주전공 <u>제한 없음</u></li>
      <li>혜택: 경력증명서 발급 가능 (<a href="/certificate.hwp" download="경력증명서-양식_OOO.hwp">해당 파일 다운로드</a> 및 작성 후 메일 문의)</li>
      <li>모집현황: <b>2026-1학기 모집 예정</b></li>
      <li>추가 안내: 홈페이지 개발 및 리눅스 서버 관리자 모집 (문의: <a href="mailto:nsun527@cau.ac.kr">나선우 학부연구생</a>)</li>
    </ul>
  </div>
  <Footer />
</div>

<style>
  @import "$lib/shared.css";
  .cpss-contact-outer {
    width: 100%;
    height: auto;
    padding: 70px;
  }

  h3 {
    text-align: center;
    margin: 80px auto 0px auto;
  }

  #cpss-contact > p {
    width: 1000px;
    margin: 50px auto 20px auto;
    list-style: none; /* Remove default bullet points */
    padding: 0;
  }
  #cpss-contact > ul {
    width: 1000px;
    margin: 30px auto 0px auto;
    list-style: none; /* Remove default bullet points */
    padding: 0;
  }

  #cpss-contact ul li {
    position: relative;
    padding-left: 20px;
    margin-bottom: 10px; /* Add spacing between items */
  }

  #cpss-contact ul li::before {
    content: "•"; /* Custom bullet symbol */
    color: #2a9d8f; /* Color for bullet point */
    font-size: 1.2em; /* Larger bullet */
    position: absolute;
    left: 0;
    top: 0;
  }

  @media screen and (max-width: 1024px) {
    #cpss-contact {
      padding: 0px 10px;
      margin-bottom: 50px;
    }
    #cpss-contact > p {
      width: 90%;
      text-wrap: wrap;
      margin: 30px 15px 0px 15px;
    }
    #cpss-contact > ul {
      width: 90%;
      text-wrap: wrap;
      margin: 30px 15px 0px 15px;
    }  #cpss-contact ul li {
      padding-left: 10px;
    }
    h2 {
      margin-top: 50px;
      font-size: 35px;
    }
  }
</style>  
