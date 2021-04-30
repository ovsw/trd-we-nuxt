const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  corePlugins: {
    // ...
    ringColor: false
  },
  purge: {
    // layers: ['components', 'utilities'],
    content: [
      "tw-jit-classes.txt",
      "components/**/*.vue",
      "layouts/**/*.vue",
      "pages/**/*.vue",
      "plugins/**/*.js",
      "nuxt.config.js"
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: colors.orange,
        purple: colors.purple,
        transparent: "transparent",
        current: "currentColor",
        "b-orange": {
          light: "#FF6917",
          DEFAULT: "#FF6917",
          dark: "#FF6917"
        },
        "b-cyan": {
          light: "#B4D9DB",
          DEFAULT: "#00949A",
          dark: "#052b2b"
        },
        "b-purple": {
          light: "#140e21",
          DEFAULT: "#1d072a",
          dark: "#140e21"
        },
        "b-blue": {
          light: "#126078",
          DEFAULT: "#126078",
          dark: "#126078"
        },
        "b-brown": {
          light: "#af7763",
          DEFAULT: "#af7763",
          dark: "#af7763"
        },
        "b-red": {
          light: "#732b31",
          DEFAULT: "#732b31",
          dark: "#732b31"
        },
        "b-green": {
          light: "#646b58",
          DEFAULT: "#646b58",
          dark: "#646b58"
        },
        dark: {
          light: "#42413b",
          DEFAULT: "#36342E",
          dark: "#343432"
        },
        light: {
          light: "#FFF",
          DEFAULT: "#c1c4c3",
          dark: "#c1c4c3"
        },
        muted: {
          DEFAULT: "#8b8b8b"
        }
      },
      outline: {
        dark: ["2px solid #777", "0.25rem"]
      },
      fontSize: {
        xxs: ".69rem"
      },
      fontFamily: {
        menu: ["Neue Metana", ...defaultTheme.fontFamily.sans],
        body: ["Plus Jakarta", ...defaultTheme.fontFamily.sans]
      },
      spacing: {
        "160": "40rem"
      },
      // borderWidth: {
      //   "5": "5px"
      // },
      // maxWidth: {
      //   'content': '1600px'
      // }
      // borderRadius: {
      //   medium: "50px",
      //   large: "100px"
      // },
      typography: {
        DEFAULT: {
          css: {
            color: "#b5aea6",
            strong: {
              color: "#c1c4c3"
            },
            h2: {
              color: "#fffdf5"
            },
            h3: {
              color: "#fffdf5"
            },
            h4: {
              color: "#fffdf5"
            },
            blockquote: {
              color: "#ffffff"
            },
            a: {
              color: "#FF6917",
              "&:hover": {
                color: "#FF6917"
              }
            }
          }
        },
        steps: {
          css: {
            color: "#b9b9b9",
            strong: {
              color: "white",
              display: "block",
              "margin-top": "1rem",
              "text-transform": "uppercase",
              "letter-spacing": "1.5px",
              "font-weight": "400",
              "font-size": "0.9rem"
            },
            a: {
              color: "white",
              "&:hover": {
                color: "#FF6917"
              }
            }
          }
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio")
  ]
};
