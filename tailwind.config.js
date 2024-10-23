tailwind.config = {
    theme: {
        container: {
            center: true,
        },

        fontFamily: {
            sans: ['Urbanist', 'sans-serif'],
            serif: ['Recoleta', 'serif'],
            mono: ['monospace'],
        },

        lineHeight: {
            DEFAULT : '135%',
          },

      extend: {
            colors: {
                primary: '#FF008A',
                primary_dark: '#E5007C',
                title: '#000000',
                subtitle: '#989898',
                paragraph: '#4D4D4D',
                background: '#F8FAFC',
                leasy: '#6366F1',
            },

            borderRadius: {
                'xl': '1rem',
                '2xl': '1.25rem',
                '3xl': '1.5rem',
                '5xl': '2rem',
            },

            dropShadow: {
                'pink': '0 0 12px rgba(255, 72, 171, 0.25)',
                'pink_strong': '0 0 16px rgba(255, 72, 171, 0.50)',
                '1': '0 0 12px rgba(0, 0, 0, 0.25)',
                '2': '0 0 6px rgba(0, 0, 0, 0.15)',
                '4xl': [
                    '0 35px 35px rgba(0, 0, 0, 0.25)',
                    '0 45px 65px rgba(0, 0, 0, 0.15)',
                ],
            },

            cursor: {
                'designer' : 'url(../img/cursor-default-x1.svg), default',
                'designer' : 'url(../img/cursor-pointer-x1.svg), pointer',
            }

        } 
    }
}