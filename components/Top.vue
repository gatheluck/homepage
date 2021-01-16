<template>
  <div class="top mt-5">
    <b-card no-body class="border-0">
      <b-row no-gutters>
        <b-col class="col-2">
          <b-card-img
            src="~/static/image/icon.png"
            alt="Image"
            class="rounded-circle"
          ></b-card-img>
        </b-col>
        <b-col class="mt-n3">
          <b-card-body
            title="Yoshihiro Fukuhara"
            title-tag="h1"
            sub-title="aka gatheluck"
            sub-title-tag="h2"
          >
            <b-card-text>
              <p>
                I am currently a third-year PhD student at Waseda University,
                where I am advised by Professor
                <a
                  href="https://scholar.google.co.jp/citations?user=4B-C50EAAAAJ&hl=en"
                  target="_blank"
                  >Shigeo Morishima</a
                >. I am also a member of
                <a href="http://www.leading-sn.waseda.ac.jp/"
                  >Waseda Innovation Leading Laboratory (WILL)</a
                >
                and
                <a href="http://xpaperchallenge.org/cv/">cvpaper.challenge</a>.
                My research interests are primarily in Robust Machine Learning
                to develop ML tools that are robust, reliable and ready for
                real-world deployment.
              </p>
              <p>
                I prefer to study new things and always try to keep changing.
                Nothing is permanent.
              </p>
            </b-card-text>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<style>
.top h1 {
  font-size: 30px;
}

.pub h3 {
  font-size: 20px;
}

.pub h4 {
  font-size: 16px;
}

.pub h6 {
  font-size: 14px;
}

.pub p {
  font-size: 14px;
}
</style>
