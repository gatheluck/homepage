<template>
  <div class="misc">
    <h2>Miscellaneous</h2>
    <hr />

    <div class="awards">
      <h3>Award</h3>
      <!-- YANS -->
      <b-card
        title="2018.08: Incentive Award, Symposium on Young Research Association for NLP Studies (YANS), 2018."
        title-tag="h6"
        class="border-0 bg-transparent mt-n3"
      >
        <b-card-text class="mt-n2 mb-n3"> </b-card-text>
      </b-card>

      <!-- Mars -->
      <b-card
        title="2017.12: JAXA Special Award, HP Mars Home Planet - Education League JP-."
        title-tag="h6"
        class="border-0 bg-transparent mt-n4"
      >
        <b-card-text class="mt-n2 mb-n3"> </b-card-text>
      </b-card>

      <!-- VIP -->
      <b-card
        title="2015.09: Performance Award, Visual Infromation Processing Camp (VIP), 2015."
        title-tag="h6"
        class="border-0 bg-transparent mt-n4"
      >
        <b-card-text class="mt-n2 mb-n3"> </b-card-text>
      </b-card>
    </div>
    <!-- end of awards -->

    <div class="talks">
      <h3>Talk</h3>
      <!-- SSII 2020 -->
      <b-card
        title="2020.06: Adversarial Examples 研究動向"
        title-tag="h6"
        class="border-0 bg-transparent mt-n3"
      >
        <b-card-text class="mt-n2 mb-n2">
          Invited Talk, Symposium of Sensing via Image Infomation (SSII), 2020.
          <br />
          <a
            href="https://confit.atlas.jp/guide/event/ssii2020/static/invited_interactive#IS2"
            target="_blank"
          >
            [SSII 2020]
          </a>
        </b-card-text>
      </b-card>

      <!-- CVPR 2019 -->
      <b-card
        title="2019.09: Adversarial Examples 分野の動向 -History and Trends of Dark Arts-"
        title-tag="h6"
        class="border-0 bg-transparent mt-n4"
      >
        <b-card-text class="mt-n2 mb-n2">
          cvpaper.challenge CVPR 2019 網羅的サーベイ報告会 @日立製作所
          中央研究所.
          <br />
          <a
            href="https://www.slideshare.net/cvpaperchallenge/adversarial-examples-173590674"
            target="_blank"
          >
            [Slide]
          </a>
          <a
            href="https://www.slideshare.net/cvpaperchallenge/adversarial-examples-229232499"
            target="_blank"
          >
            [Slide(+Meta Survey)]
          </a>
        </b-card-text>
      </b-card>
    </div>
    <!-- end of talks -->

    <div class="funding">
      <h3>Funding</h3>
      <!-- Leading -->
      <b-card
        title="2016.04 - 2020.03: Graduate Program for Embodiment Informatics Scholarship."
        title-tag="h6"
        class="border-0 bg-transparent mt-n3"
      >
        <b-card-text class="mt-n2 mb-n3"> </b-card-text>
      </b-card>

      <!-- CSST 2016 -->
      <b-card
        title="2016.07 - 2016.09: University of California, Los Angeles, Cross-disciplinary Scholars in Science and Technology (CSST) Scholarship Program 2016."
        title-tag="h6"
        class="border-0 bg-transparent mt-n4"
      >
        <b-card-text class="mt-n2 mb-n3"> </b-card-text>
      </b-card>

      <!-- CSST 2018 -->
      <b-card
        title="2012.04 - 2013.03: Waseda University, Okuma Memorial Special Scholarship."
        title-tag="h6"
        class="border-0 bg-transparent mt-n4"
      >
        <b-card-text class="mt-n2 mb-n3"> </b-card-text>
      </b-card>
    </div>
    <!-- end of Funding -->

    <div class="patent">
      <h3>Patent</h3>
      <!-- Leading -->
      <b-card
        title="画像処理装置及び画像処理方法"
        title-tag="h6"
        class="border-0 bg-transparent mt-n3"
      >
        <b-card-text class="mt-n2 mb-n2">
          特開 2018-195038 (P2018-195038A)
          <br />
          <a href="https://ipforce.jp/patent-jp-A-2018-195038" target="_blank">
            [IP Force]
          </a>
        </b-card-text>
      </b-card>
    </div>
    <!-- end of Patent -->

    <div class="certifications">
      <h3>Certification</h3>
      <!-- Leading -->
      <b-card
        title="CG-ARTS CG Engineer Examination - Expert"
        title-tag="h6"
        class="border-0 bg-transparent mt-n3"
      >
      </b-card>
    </div>
    <!-- end of Certifications -->
  </div>
</template>

<style>
h2 {
  font-size: 24px;
}

.awards h3 {
  font-size: 20px;
}

.awards h6 {
  font-size: 16px;
}

.awards p {
  font-size: 14px;
  margin-left: 4.5rem;
}

.funding h3 {
  font-size: 20px;
}

.funding h6 {
  font-size: 16px;
}

.funding p {
  font-size: 14px;
  margin-left: 4.3rem;
}

.talks h3 {
  font-size: 20px;
}

.talks h6 {
  font-size: 16px;
}

.talks p {
  color: #6c757d;
  font-size: 14px;
  margin-left: 4.3rem;
}

.patent h3 {
  font-size: 20px;
}

.patent h6 {
  font-size: 16px;
}

.patent p {
  color: #6c757d;
  font-size: 14px;
}

.certifications h3 {
  font-size: 20px;
}

.certifications h6 {
  font-size: 16px;
}

.certifications p {
  font-size: 14px;
}
</style>
