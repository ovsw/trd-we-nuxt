<template>
  <div class="page-bg-gradient">
    <PageHeader
      v-if="error.statusCode === 404"
      title="eroare 404"
      longTitle="Nu am găsit pagina :("
      intro="Ne pare rau, dar pagina pe care o cauți nu există..."
    />
    <h1 v-else>Eroare</h1>
    <div class="section">
      <div class="mx-auto max-w-screen-md text-center underline ">
        <h2 class="heading2">
          <NuxtLink to="/" class="text-b-orange hover:text-light"
            >&lt; înapoi acasă</NuxtLink
          >
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"]
};
</script>
