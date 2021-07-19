const color = {
    lightWhite: '#FAFAFA',
    brightBlue: '#3498db',
    darkGrayishBlue: '#001529',
    baseWhite: '#F0F2F5',
    grayishBlue: '#A4A6B3',
    grayishBlue2: '#9fa2b4',
    grayishBlue3: '#bdc3c7',
    lightBlue: '#3751FF',
    lightGrayishBlack: '#E5E5E5', // background color
    lightGrayishBlue2: '#DFE0EB',
    paleBlue: '#DDE2FF',
    paleBlueTransparent: 'rgba(221, 226, 255, 0.08)',
    veryDarkGrayishBlue: '#373a47'
};

const typography = {
    blockTitle: {
        fontWeight: 500,
        fontSize: 24,
        lineHeight: '28px',
    },
    smallSubtitle: {
        fontSize: 12,
        lineHeight: '16px',
        letterSpacing: '0.1px'
    },
    link: {
        fontWeight: '600',
        fontSize: 14,
        lineHeight: '20px',
        letterSpacing: '0.2px',
        color: color.lightBlue,
        textAlign: 'right',
        cursor: 'pointer',
        textDecoration: 'underline',
        '&:hover': {
            color: color.grayishBlue
        }
    },
    itemTitle: {
        fontWeight: 600,
        fontSize: 14,
        lineHeight: '20px',
        letterSpacing: 0.2
    },
    title: {
        fontWeight: 500,
        fontSize: 28,
        lineHeight: '33px',
        letterSpacing: 0.3
    }
};

const Theme = {
    // https://www.colorhexa.com/A4A6B3
    color,
    typography
};

export default Theme;
