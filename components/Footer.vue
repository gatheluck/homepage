<template>
  <footer class="footer bg-secondary">
    <!-- mx-auto: horizontally centering fixed-width block level content -->
    <div class="b-container pt-5">
      <section>
        <b-img
          rounded="circle"
          height="80"
          src="../static/image/robust_feature_cropped.png"
          class="mx-auto d-block"
        />
        <div class="mt-4 pb-2">
          <p class="copyright text-light text-center">
            Copyright &copy; {{ year }} Yoshihiro Fukuhara
          </p>
        </div>
      </section>
    </div>
  </footer>
</template>

<script>
export default {
  data: () => {
    return {
      year: '', // store year (substitute afterward)
    }
  },
  created() {
    // get year
    const d = new Date()
    this.year = d.getFullYear()
  },
}
</script>
