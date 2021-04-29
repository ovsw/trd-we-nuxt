<template>
  <div>
    <div class="relative pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <!-- <div class="absolute inset-0">
        <div class="bg-white h-1/3 sm:h-2/3" />
      </div> -->
      <div class="relative max-w-7xl mx-auto">
        <div class="text-center relative z-0">
          <h2 class="heading2">De pe <strong>Blog</strong></h2>
          <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
            libero labore natus atque, ducimus sed.
          </p>
          <!-- <div class="spotlight-gradient"></div> -->
        </div>
        <div
          class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none"
        >
          <div
            v-for="post in posts"
            :key="post.title"
            class="flex flex-col rounded-lg shadow-lg overflow-hidden"
          >
            <div class="flex-shrink-0">
              <img
                class="h-56 w-full object-cover"
                :src="
                  $urlFor(post.content.mainImage)
                    .width(400)
                    .height(300)
                "
                :alt="post.content.mainImage.alt"
              />
            </div>
            <div
              class="flex-1 bg-white bg-opacity-5 p-6 flex flex-col justify-between"
            >
              <div class="flex-1">
                <div class="">
                  <!-- <p class="text-sm font-medium text-gray-900">
                    <a :href="post.author.href" class="hover:underline">
                      {{ post.author.name }}
                    </a>
                  </p> -->
                  <div class="flex space-x-1 text-sm text-gray-200">
                    <time :datetime="post.content.date">
                      {{ post.content.date | formatDateShort }}
                    </time>
                    <!-- <span aria-hidden="true">
                      &middot;
                    </span> -->
                    <!-- <span> {{ post.readingTime }} read </span> -->
                  </div>
                </div>
                <!-- <p class="text-sm font-medium text-indigo-600">
                  <a :href="post.category.href" class="hover:underline">
                    {{ post.category.name }}
                  </a>
                </p> -->
                <NuxtLink
                  :to="`/blog/${post.content.slug.current}/`"
                  class="block mt-2"
                >
                  <p class="text-xl font-semibold text-gray-100">
                    {{ post.content.title }}
                  </p>
                  <p class="mt-3 text-base text-gray-400">
                    {{ post.content.excerpt }}
                  </p>
                </NuxtLink>

                <ButtonC
                  :url="`/blog/${post.content.slug.current}/`"
                  class="mt-4"
                >
                  Citește
                </ButtonC>
              </div>
              <div class="mt-6 flex items-center">
                <!-- <div class="flex-shrink-0">
                  <a :href="post.author.href">
                    <span class="sr-only">{{ post.author.name }}</span>
                    <img
                      class="h-10 w-10 rounded-full"
                      :src="post.author.imageUrl"
                      alt=""
                    />
                  </a>
                </div> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style lang="css" scoped>
.newsSection {
  perspective: 900px;
}
.grid {
  perspective: 900px;
}
.item {
  transition: transform 0.2s ease-in-out, background-color 0.4s ease-in-out,
    color 0.4s ease-in-out;
}
.item:hover {
  color: get-color("light");
  background-color: rgba(gray, 0.1);
  transform: rotate(0deg) scale(1) translateY(-20px);
  z-index: 400;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.2),
    0 0 60px rgba(255, 255, 255, 0.1);
}
</style>
