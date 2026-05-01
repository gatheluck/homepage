<template>
  <div class="misc">
    <h2>Miscellaneous</h2>
    <hr />

    <div v-for="(data, key) in miscellaneous" :key="key">
      <h3>{{ key }}</h3>
      <b-card
        v-for="misc in data"
        :key="misc.title"
        no-body
        align="left"
        class="border-0"
      >
        <b-row no-gutters>
          <!-- left side -->
          <b-col
            v-if="misc.date"
            xl="auto"
            lg="auto"
            md="auto"
            sm="auto"
            cols="auto"
            class="mb-1"
          >
            <div class="misc-date">
              <b-card-text class="pl-3">{{ misc.date }}</b-card-text>
            </div>
          </b-col>
          <!-- right side -->
          <!-- if there is image -->
          <b-col v-if="misc.date" xl="10" lg="9" md="8" class="mt-n3 mb-n2">
            <div class="misc-text">
              <b-card-body>
                <!-- title -->
                <b-card-title title-tag="h4">
                  <span v-html="misc.title"></span>
                </b-card-title>
                <!-- author -->
                <b-card-sub-title sub-title-tag="h5">
                  <span v-html="misc.author"></span>
                </b-card-sub-title>

                <!-- texts -->
                <b-card-text
                  v-for="text in misc.texts"
                  :key="text"
                  class="mb-0"
                >
                  <span v-html="text"></span>
                </b-card-text>
              </b-card-body>
            </div>
          </b-col>
          <!-- else there is no image-->
          <b-col v-else class="mt-n3 mb-n2">
            <div class="misc-text">
              <b-card-body>
                <!-- title -->
                <b-card-title title-tag="h4">
                  <span v-html="misc.title"></span>
                </b-card-title>
                <!-- author -->
                <b-card-sub-title sub-title-tag="h5">
                  <span v-html="misc.author"></span>
                </b-card-sub-title>

                <!-- texts -->
                <b-card-text
                  v-for="text in misc.texts"
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
      <div class="mb-3"></div>
    </div>
    <!-- end of pub -->
  </div>
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
.misc h4 {
  font-size: 16px;
}

.misc h5 {
  font-size: 15px;
}

.misc-date p {
  font-size: 16px;
}

.misc-text p {
  font-size: 14px;
  color: #6c757d;
}
</style>
