<template>
  <div class="section border">
    <!-- {{ section.formUrl }} -->
    <a
      class="typeform-share button"
      href="https://form.typeform.com/to/xpjm95QT?utm_source=xxxxx&utm_medium=xxxxx&utm_campaign=xxxxx&utm_term=xxxxx&utm_content=xxxxx&typeform-medium=embed-snippet"
      data-mode="popup"
      style="display:inline-block;text-decoration:none;background-color:#0445AF;color:white;cursor:pointer;font-family:Helvetica,Arial,sans-serif;font-size:20px;line-height:50px;text-align:center;margin:0;height:50px;padding:0px 33px;border-radius:25px;max-width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;font-weight:bold;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;"
      data-size="100"
      target="_blank"
      >Launch me
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isTypeFormLoaded: false
    };
  },

  head() {
    return {
      title: "Payment Page - My awesome project",
      script: [
        {
          hid: "typeform",
          src: "https://embed.typeform.com/embed.js",
          defer: true,
          // Changed after script load
          callback: () => {
            this.isTypeFormLoaded = true;
          }
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped></style>
