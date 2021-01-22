<template>
  <div class="pub">
    <h2>Publications</h2>
    <hr />

    <div v-for="(data, key) in publications" :key="key">
      <h3>{{ key }}</h3>
      <b-card
        v-for="pub in data"
        :key="pub.title"
        no-body
        align="left"
        class="border-0"
      >
        <b-row no-gutters>
          <!-- left side -->
          <b-col
            v-if="pub.image"
            xl="1"
            lg="auto"
            md="auto"
            sm="auto"
            cols="auto"
            class="mb-1"
          >
            <b-card-img
              :src="require('~/static/image/' + pub.image)"
              alt="Image"
              style="max-width: 120px"
            ></b-card-img>
          </b-col>
          <!-- right side -->
          <!-- if there is image -->
          <b-col
            v-if="pub.image"
            xl="11"
            lg="10"
            md="9"
            sm="8"
            cols="8"
            class="mt-n3 mb-n2"
          >
            <b-card-body>
              <!-- title -->
              <b-card-title title-tag="h4">
                <span v-html="pub.title"></span>
              </b-card-title>
              <!-- author -->
              <b-card-sub-title sub-title-tag="h5">
                <span v-html="pub.author"></span>
              </b-card-sub-title>

              <!-- texts -->
              <b-card-text v-for="text in pub.texts" :key="text" class="mb-0">
                <span v-html="text"></span>
              </b-card-text>
            </b-card-body>
          </b-col>
          <!-- else there is no image-->
          <b-col v-else class="mt-n3 mb-n2">
            <b-card-body>
              <!-- title -->
              <b-card-title title-tag="h4">
                <span v-html="pub.title"></span>
              </b-card-title>
              <!-- author -->
              <b-card-sub-title sub-title-tag="h5">
                <span v-html="pub.author"></span>
              </b-card-sub-title>

              <!-- texts -->
              <b-card-text v-for="text in pub.texts" :key="text" class="mb-0">
                <span v-html="text"></span>
              </b-card-text>
            </b-card-body>
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
    const publications = require('~/assets/publications.json')
    // console.log(typeof publications)
    // const pubs = {}
    // for (const pubtype in publications) {
    //   const publists = []
    //   for (const idx in publications[pubtype]) {
    //     publists.push({
    //       title: publications[pubtype][idx].title,
    //       author: publications[pubtype][idx].author,
    //       image: publications[pubtype][idx].image,
    //       texts: publications[pubtype][idx].texts,
    //     })
    //   }
    //   pubs[pubtype] = publists
    // }

    return {
      publications,
      // pubs,
    }
  },
  // computed: {
  //   pubs() {
  //     return Object.keys(this.publications).forEach((pubtype) => ({
  //       pubtype: this.publications[pubtype].forEach((pub) => ({
  //         title: pub.title,
  //         author: pub.author,
  //         image: require(pub.image),
  //         texts: pub.texts,
  //       })),
  //     }))
  //   },
  // },
}
</script>

<style>
.pub h4 {
  font-size: 16px;
}

.pub h5 {
  font-size: 15px;
}

.pub p {
  font-size: 14px;
}
</style>
