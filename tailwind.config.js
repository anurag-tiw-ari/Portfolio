module.exports = {
    content: [
        "./src/**/*.{js,jsx}",
        "./public/index.html"
      ],
    darkMode: 'class',
    theme: {
      extend: {
        fontFamily: {
          'space-grotesk': ['Space Grotesk', 'sans-serif'],
          'poppins': ['Poppins', 'sans-serif'],
        },
        animation: {
          'bucket-fill': 'bucketFill 1s ease-in-out forwards',
        },
        keyframes: {
          bucketFill: {
            '0%': { 'background-position': '0% 0%' },
            '100%': { 'background-position': '100% 0%' },
          }
        }
      },
    },
    plugins: [],
  }