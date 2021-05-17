<template>
  <div>
    <PageHeader
      :title="page.content.title"
      :longTitle="page.content.longTitle"
      :intro="page.content.excerpt"
    />
    <SectionsRenderer :sections="page.content.sections1" />
  </div>
</template>

<script>
import imageUrlBuilder from "@sanity/image-url";

const query = /* groq */ `
{ 
  "page": *[(_type == 'post') && content.slug.current == $slug][0] {
          ...,
          content {
  					...,
            'mainImageUrl': mainImage.asset->url 
          }
        }
}
`;

export default {
  name: "Post",
  scrollToTop: true,

  validate({ params, store, query }) {
    // console.log('params:', params)
    // If FALSE redirect to 404 page
    return (
      query.preview === "true" || store.state.postsSlugs.includes(params.page)
    );
  },

  computed: {
    seoTitle() {
      if (this.page.content.seo && this.page.content.seo.title)
        return this.page.content.seo.title;
      return undefined;
    },
    seoDescription() {
      if (this.page.content.seo && this.page.content.seo.description)
        return this.page.content.seo.description;
      return undefined;
    },
    seoShareImage() {
      return this.$urlFor(this.page.content.mainImage)
        .width(1200)
        .height(630);
    },
    seoPageUrl() {
      return `https://tridia.ro/${this.page.content.slug.current}/`;
    }
  },

  head() {
    return {
      title: this.seoTitle,
      meta: [
        {
          hid: "description",
          name: "description",
          content: this.seoDescription
        },
        {
          hid: "ogtitle",
          name: "og:title",
          content: this.seoTitle
        },
        {
          hid: "ogdescription",
          name: "og:description",
          content: this.seoDescription
        },
        {
          hid: "ogimage",
          name: "og:image",
          content: this.seoShareImage
        },
        {
          hid: "ogurl",
          name: "og:url",
          content: this.seoPageUrl
        }
      ],
      link: [{ rel: "cannonical", href: this.seoPageUrl }],
      __dangerouslyDisableSanitizersByTagID: {
        ogimage: ["content"]
      }
    };
  },

  jsonld() {
    return {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: this.seoTitle,
      image: this.page.content.mainImageUrl,
      author: {
        "@type": "Organization",
        name: "Tridia"
      },
      publisher: {
        "@type": "Organization",
        name: "Tridia",
        logo: {
          "@type": "ImageObject",
          url: "https://tridia.ro/_nuxt/img/tridia-logo-white.88a26aa.png"
        }
      },
      datePublished: this.page.content.date
    };
  },

  asyncData({ $sanity, params, payload }) {
    if (payload) {
      return { page: payload };
    }
    return $sanity.fetch(query, {
      slug: params.page
    });
  }
};
</script>

<style lang="scss" scoped></style>
