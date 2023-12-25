/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
        keyframes:{
            red:{
                  from:{ backgroundColor: '#FFD700'},
                  to:{ backgroundColor: '#FF0000'}
            },
            blue:{
                from:{ backgroundColor: '#FFFFFF'},
                to:{ backgroundColor: '#33FFFF'}
            },
            light:{
              from:{ backgroundColor: '#FFFFFF'},
              to:{ backgroundColor: '#FFFF33'}
            }
        },
        animation:{
            'chan-red':'red 5s linear infinite',
            'chan-blue':'blue 5s linear infinite',
            'chan-light':'light 5s linear infinite',
        }
    },
  },
  plugins: [],
}