<template>
  <section class="partners relative z-0 overflow-hidden">
    <div class="spotlight-gradient"></div>

    <div class=" md:flex flex-wrap items-start">
      <!-- left -->
      <div class="space-y-10 p-20 flex-1 border border-r-0">
        <h2 class="heading2">
          <span>Parteneri</span> <br />
          de incredere:
        </h2>
        <LCluster wrapper="ul" style="--spacing: 3rem;">
          <li>
            <a href="https://faber.ro/" target="_blank" rel="noopener">
              <span class="sr-only">Faber</span>
              <img
                src="~/assets/images/logos/faber-logo-white.png"
                alt="Logo Faber"
                rel="nooperner noreferrer"
                target="_blank"
                height="40"
                class="h-10 opacity-50"
              />
            </a>
          </li>
          <li>
            <a href="https://f-o-r.ro/" target="_blank" rel="noopener">
              <span class="sr-only">F.O.R.</span>
              <img
                src="~/assets/images/logos/for-logo-white.png"
                alt="Logo F.O.R."
                rel="nooperner noreferrer"
                target="_blank"
                height="40"
                class="h-10 opacity-50"
              />
            </a>
          </li>
        </LCluster>
      </div>

      <!-- right -->
      <div class="p-20 space-y-10 border  flex-1">
        <h2 class="heading2 max-w-lg ">
          Credem în <span>importanța educației de calitate</span><br />
          în Design 3D
        </h2>
        <p class="measure-30">
          Vrem sa creăm profesioniști, nu doar oameni care imită ce fac
          profesioniștii.
        </p>
        <div class="cluster-l">
          <div>
            <ButtonC url="/despre-noi/">Misiunea Noastră</ButtonC>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
