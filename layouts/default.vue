<template>
  <div class="page-bg-gradient">
    <SiteNav />

    <main class="md:ml-12 pt-24 overflow-x-hidden">
      <Nuxt />
    </main>

    <SiteFooter />
  </div>
</template>

<script>
export default {
  jsonld() {
    return [
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "s.c. ASL Mus-Mus s.r.l.",
        alternateName: "Tridia",
        url: "https://tridia.ro",
        logo: "https://tridia.ro/tridia-logo-mark.png",
        sameAs: [
          "https://www.facebook.com/tridia.cursuri3dsMax/",
          "https://www.instagram.com/tridia.tm/",
          "https://www.linkedin.com/company/tridia/"
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Tridia",
        image: "https://tridia.ro/tridia-logo-mark.png",
        "@id": "https://tridia.ro",
        url: "https://tridia.ro",
        telephone: "0743 437 074",
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Str.Surorile Martir Caceu, Nr.9",
          addressLocality: "Timișoara",
          postalCode: "300585",
          addressCountry: "RO"
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 45.7425814,
          longitude: 21.2409214
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "17:00"
        },
        sameAs: [
          "https://www.facebook.com/tridia.cursuri3dsMax/",
          "https://www.instagram.com/tridia.tm/",
          "https://www.linkedin.com/company/tridia/"
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        name: "Tridia",
        url: "https://tridia.ro",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Str.Surorile Martir Caceu, Nr.9",
          addressLocality: "Timișoara",
          postalCode: "Timiș",
          addressRegion: "",
          addressCountry: "Romania"
        }
      }
    ];
  }
};
</script>

<style></style>
