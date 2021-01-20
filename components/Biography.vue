<template>
  <div class="bio">
    <h2>About Me</h2>
    <hr />

    <h3>Biography</h3>
    <div class="mb-3"></div>
    <b-card
      v-for="bio in aboutme.biography"
      :key="bio.title"
      no-body
      align="left"
      class="border-0"
    >
      <b-row no-gutters>
        <!-- left side -->
        <b-col xl="2" lg="3" md="4">
          <div class="bio-date">
            <b-card-text class="pl-3">{{ bio.date }}:</b-card-text>
          </div>
        </b-col>
        <!-- right side -->
        <b-col xl="10" lg="9" md="8" class="mt-n3 mb-n2">
          <div class="bio-text">
            <b-card-body>
              <!-- title -->
              <b-card-title title-tag="h4">
                <span v-html="bio.title"></span>
              </b-card-title>

              <!-- texts -->
              <div class="mt-n2"></div>
              <b-card-text v-for="text in bio.texts" :key="text" class="mb-0">
                <span v-html="text"></span>
              </b-card-text>
            </b-card-body>
          </div>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    const aboutme = require('~/assets/aboutme.json')
    return {
      aboutme,
    }
  },
}
</script>

<style>
.bio h4 {
  font-size: 16px;
}

.bio-date p {
  font-size: 16px;
}

.bio-text p {
  font-size: 14px;
  color: #6c757d;
  margin-bottom: 0;
  margin-top: 0;
}
</style>
