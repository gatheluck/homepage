<template>
  <b-navbar toggleable="md" type="dark" sticky="true" variant="secondary">
    <b-container>
      <b-navbar-brand href="#">
        <b-img
          rounded="circle"
          height="25"
          src="~/static/image/robust_feature_cropped.png"
          class="mr-1"
        />
        Yoshihiro Fukuhara
      </b-navbar-brand>

      <ul class="navbar-nav flex-row ml-md-auto">
        <li class="nav-item">
          <a
            class="unstyled nav-link"
            href="https://github.com/gatheluck"
            target="_blank"
          >
            <font-awesome-icon
              class="mr-2"
              :icon="['fab', 'github']"
              size="lg"
            />
          </a>
        </li>

        <li class="nav-item">
          <a
            class="unstyled nav-link"
            href="https://twitter.com/gatheluck"
            target="_blank"
          >
            <font-awesome-icon
              class="mr-2"
              :icon="['fab', 'twitter']"
              size="lg"
            />
          </a>
        </li>

        <li class="nav-item">
          <a
            class="unstyled nav-link"
            href="https://www.linkedin.com/in/yoshihiro-fukuhara-01b329136/"
            target="_blank"
          >
            <font-awesome-icon
              class="mr-2"
              :icon="['fab', 'linkedin-in']"
              size="lg"
            />
          </a>
        </li>
      </ul>
    </b-container>
  </b-navbar>
</template>

<style>
a.unstyled {
  color: inherit;
}
ul {
  list-style-type: none;
}
</style>
