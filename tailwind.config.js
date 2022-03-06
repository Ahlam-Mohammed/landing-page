module.exports = {
  content: ['./src/**/*.{html,js}','index.html'],
  theme: {
    extend: {
      screens: {
        'xsm': '280px',
        'md': '825px',
        'lg': '1363px',
      },
      colors: {
        'cyan': {
          '900': 'rgb(57, 102, 122,100%)',
          '800': 'rgb(117, 153, 169,100%)',
        },
        'Teal': {
          '600': 'rgb(45, 183, 174,100%)'
        }
        ,
        'slate': {
          '200': 'rgb(235, 242, 245,100%)'
        }
      },
      fontFamily: {
        'rubik' : ['Rubik', 'sans-serif']
      },
      fontSize: {
        '22': '1.375rem',
        '28': '1.75rem',
        '64': '4rem',
      },
      spacing: {
        '22': '94px',
      },
      backgroundPosition: {
        'bottom-center': '50% 70%',
      }
    },
  },
  plugins: [],
}
