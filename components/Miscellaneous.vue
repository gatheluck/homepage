<template>
  <div class="misc">
    <h2>Miscellaneous</h2>
    <hr />

    <div class="award">
      <h3>Award</h3>
      <div class="mb-3"></div>
      <b-card
        v-for="award in miscellaneous.award"
        :key="award.title"
        no-body
        align="left"
        class="border-0"
      >
        <b-row no-gutters>
          <!-- left side -->
          <b-col xl="1" lg="1" md="2">
            <div class="award-date">
              <b-card-text class="pl-3">{{ award.date }}</b-card-text>
            </div>
          </b-col>
          <!-- right side -->
          <b-col xl="11" lg="11" md="10" class="mt-n3 mb-n2">
            <div class="award-text">
              <b-card-body>
                <!-- title -->
                <b-card-title title-tag="h4">
                  <span v-html="award.title"></span>
                </b-card-title>

                <!-- texts -->
                <div class="mt-n2"></div>
                <b-card-text
                  v-for="text in award.texts"
                  :key="text"
                  class="mb-0"
                >
                  <span v-html="text"></span>
                </b-card-text>
              </b-card-body>
            </div>
          </b-col>
        </b-row>
      </b-card>
    </div>
    <!-- end of awards -->

    <div class="talk">
      <h3>Talk</h3>
      <div class="mb-3"></div>
      <b-card
        v-for="talk in miscellaneous.talk"
        :key="talk.title"
        no-body
        align="left"
        class="border-0"
      >
        <b-row no-gutters>
          <!-- left side -->
          <b-col xl="1" lg="1" md="2">
            <div class="talk-date">
              <b-card-text class="pl-3">{{ talk.date }}</b-card-text>
            </div>
          </b-col>
          <!-- right side -->
          <b-col xl="11" lg="11" md="10" class="mt-n3 mb-n2">
            <div class="talk-text">
              <b-card-body>
                <!-- title -->
                <b-card-title title-tag="h4">
                  <span v-html="talk.title"></span>
                </b-card-title>

                <!-- texts -->
                <div class="mt-n2"></div>
                <b-card-text
                  v-for="text in talk.texts"
                  :key="text"
                  class="mb-0"
                >
                  <span v-html="text"></span>
                </b-card-text>
              </b-card-body>
            </div>
          </b-col>
        </b-row>
      </b-card>
    </div>
    <!-- end of talks -->

    <div class="funding">
      <h3>Funding</h3>
      <div class="mb-3"></div>
      <b-card
        v-for="funding in miscellaneous.funding"
        :key="funding.title"
        no-body
        align="left"
        class="border-0"
      >
        <b-row no-gutters>
          <!-- left side -->
          <b-col xl="2" lg="2" md="3">
            <div class="funding-date">
              <b-card-text class="pl-3">{{ funding.date }}</b-card-text>
            </div>
          </b-col>
          <!-- right side -->
          <b-col xl="10" lg="10" md="9" class="mt-n3 mb-n2">
            <div class="funding-text">
              <b-card-body>
                <!-- title -->
                <b-card-title title-tag="h4">
                  <span v-html="funding.title"></span>
                </b-card-title>

                <!-- texts -->
                <div class="mt-n2"></div>
                <b-card-text
                  v-for="text in funding.texts"
                  :key="text"
                  class="mb-0"
                >
                  <span v-html="text"></span>
                </b-card-text>
              </b-card-body>
            </div>
          </b-col>
        </b-row>
      </b-card>
    </div>
    <!-- end of Funding -->

    <div class="patent">
      <h3>Patent</h3>
      <b-card
        v-for="patent in miscellaneous.patent"
        :key="patent.title"
        no-body
        align="left"
        class="border-0"
      >
        <b-card-body class="mt-n2 mb-n1">
          <!-- title -->
          <b-card-title title-tag="h4">
            <span v-html="patent.title"></span>
          </b-card-title>

          <!-- texts -->
          <div class="mt-n1"></div>
          <b-card-text v-for="text in patent.texts" :key="text" class="mb-0">
            <span v-html="text"></span>
          </b-card-text>
        </b-card-body>
      </b-card>
    </div>
    <!-- end of Patent -->

    <div class="certification">
      <h3>Certification</h3>
      <b-card
        v-for="cert in miscellaneous.certification"
        :key="cert.title"
        no-body
        align="left"
        class="border-0"
      >
        <b-card-body class="mt-n2 mb-n1">
          <!-- title -->
          <b-card-title title-tag="h4">
            <span v-html="cert.title"></span>
          </b-card-title>

          <!-- texts -->
          <div class="mt-n1"></div>
          <b-card-text v-for="text in cert.texts" :key="text" class="mb-0">
            <span v-html="text"></span>
          </b-card-text>
        </b-card-body>
      </b-card>
    </div>
    <!-- end of Certifications -->
  </div>
  <!-- end of Miscellaneous -->
</template>

<script>
export default {
  data() {
    const miscellaneous = require('~/assets/miscellaneous.json')
    return {
      miscellaneous,
    }
  },
}
</script>

<style>
.award h4 {
  font-size: 16px;
}

.award-date p {
  font-size: 16px;
}

.award-text p {
  font-size: 14px;
  color: #6c757d;
  margin-bottom: 0;
  margin-top: 0;
}

.talk h4 {
  font-size: 16px;
}

.talk-date p {
  font-size: 16px;
}

.talk-text p {
  font-size: 14px;
  color: #6c757d;
  margin-bottom: 0;
  margin-top: 0;
}

.funding h4 {
  font-size: 16px;
}

.funding-date p {
  font-size: 16px;
}

.funding-text p {
  font-size: 14px;
  color: #6c757d;
  margin-bottom: 0;
  margin-top: 0;
}

.patent h4 {
  font-size: 16px;
}

.patent p {
  font-size: 14px;
  color: #6c757d;
  margin-bottom: 0;
  margin-top: 0;
}

.certification h4 {
  font-size: 16px;
}

.certification p {
  font-size: 14px;
  color: #6c757d;
  margin-bottom: 0;
  margin-top: 0;
}
</style>
