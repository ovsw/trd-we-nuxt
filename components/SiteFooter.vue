<template>
  <footer class="footer text-md md:ml-12">
    <div class="lg:flex border">
      <!-- COL1 -->
      <div class="footerColumn space-y-10 ">
        <NuxtLink to="/"
          ><img src="~/assets/images/logos/tridia-logo-white.png"
        /></NuxtLink>
        <p>
          Tridia oferă instruire practică în 3DSMax pentru tineri din domenii
          creative prin cursuri susținute de experți, cu o abordare eficientă,
          într-un mediu prietenos.
        </p>
        <p v-if="false">Hai să păstrăm legatura ;)</p>
        <div v-if="false" class="with-sidebar-right-l overflowing">
          <form
            id="email-form"
            name="email-form"
            data-name="Email Form"
            class="newsletter-form"
            _lpchecked="1"
          >
            <input
              type="email"
              aria-label="adresa e-mail pentru abonare newsletter"
              class="m-0 px-4 py-2 border-0"
              maxlength="256"
              name="email-2"
              data-name="Email 2"
              placeholder="E-MAIL"
              id="email-2"
              required=""
            />
            <button
              type="submit"
              value="Send"
              data-wait="Please wait..."
              class="px-4 py-2 bg-b-orange text-dark border-0"
            >
              Trimite
            </button>
          </form>
          <p class="text-base color-muted mt-3">
            Promitem ca nu spamăm și nu dăm datele tale nimănui!
          </p>
        </div>

        <div>
          <p>
            Site și Branding de
            <a href="https://studiorovst.com" target="_blank" rel="noopener">
              Studio ROVST
            </a>
          </p>
        </div>
      </div>

      <!-- COL 2 -->
      <div class="footerColumn md:border-l">
        <p class="footerHeader">Scurtături</p>
        <LCluster style="--spacing: 3rem;">
          <ul class="space-y-2">
            <li><NuxtLink to="/blog/">Noutăți</NuxtLink></li>
            <li><NuxtLink to="/cursuri/">Cursuri</NuxtLink></li>
            <!-- <li>
              <NuxtLink
                to="/cursuri/curs-3d-studio-max-arhitectura-and-design-interior/"
                >Curs 3D Arhitectură &amp; Design Interior</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/cursuri/curs-3d-studio-max-game-design/"
                >Curs 3D Game Design</NuxtLink
              >
            </li> -->
            <li><NuxtLink to="/echipa-tridia/">Echipă</NuxtLink></li>
            <li><NuxtLink to="/despre-noi/">Despre Noi</NuxtLink></li>
          </ul>

          <ul class=" space-y-2 mt-2">
            <li><NuxtLink to="/contact/">Contact</NuxtLink></li>
            <li>
              <NuxtLink to="/termeni-si-conditii/"
                >Termeni și Condiții</NuxtLink
              >
            </li>
            <li>
              <NuxtLink to="/politica-cookies/">Politică cookies</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/politica-de-confidentialitate-si-gdpr/"
                >GDPR</NuxtLink
              >
            </li>
          </ul>
        </LCluster>

        <div>
          <p class="text-muted text-sm mt-12">
            Copyright ©Tridia 2020-2021. <br />Toate drepturile rezervate.
          </p>
        </div>
      </div>

      <!-- COL 3 -->
      <div class="footerColumn md:border-l">
        <p class="footerHeader">Contact</p>

        <div>
          <p>Adresă</p>
          <p>
            s.c. ASL Mus-Mus s.r.l. <br />
            Str.Surorile Martir Caceu, Nr.9 <br />
            Timișoara, Timiș 300585
          </p>
        </div>

        <div>
          <p>Telefon</p>
          <p><a href="tel:0743437074">0743 437 074</a></p>
        </div>

        <div>
          <p>E-mail</p>
          <p><a href="mailto:info@tridia.ro">info@tridia.ro</a></p>
        </div>

        <div>
          <p class="label label--small mt-12 mb-6">Sociale</p>
          <!-- <LCluster> -->
          <div class="flex space-x-4">
            <span>
              <a
                href="https://www.facebook.com/tridia.cursuri3dsMax/"
                target="_blank"
                rel="noopener"
                class="socialLink"
              >
                <svg-icon
                  name="facebook-f-brands"
                  title="logo Facebook"
                  height="2em"
                  width="2em"
                />
              </a>
            </span>

            <span>
              <a
                href="https://www.instagram.com/tridia.tm/"
                target="_blank"
                rel="noopener"
                class="socialLink"
              >
                <svg-icon
                  name="instagram-brands"
                  title="logo Instagram"
                  height="2em"
                  width="2em"
                />
              </a>
            </span>

            <span>
              <a
                href="https://www.linkedin.com/company/tridia/"
                target="_blank"
                rel="noopener"
                class="socialLink"
              >
                <svg-icon
                  name="linkedin-in-brands"
                  title="logo LinkedIn"
                  height="2em"
                  width="2em"
                />
              </a>
            </span>
          </div>
          <!-- </LCluster> -->
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
