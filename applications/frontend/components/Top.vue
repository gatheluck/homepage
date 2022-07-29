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
                I am currently working at
                <a href="https://exawizards.com/en/" target="_blank"
                  >ExaWizards Inc. </a
                >as a ML/MLOps Engineer and developing the MLOps Platform to
                accelerate the process from PoC to service to scale ML business.
                With my experience as both a researcher and an engineer, I am
                passionate about quickly turning research-stage technologies
                into services and implementing them in society in a way that
                delivers value to many people.
              </p>
              <p>
                I am also a headquarter member of
                <a href="http://xpaperchallenge.org/cv/" target="_blank"
                  >cvpaper.challenge</a
                >, and leads
                <a href="http://xpaperchallenge.org/cv/xccv" target="_blank"
                  >XCCV research group </a
                >collaborating with PRMU/CVIM mentorship programs. My research
                interests are primarily in robust machine learning for
                developing reliable and real-world ready ML systems.
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
