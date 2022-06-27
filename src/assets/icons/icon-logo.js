import React from 'react';

const IconLogo = (props) => (
    // <svg width="103" height="31" viewBox="0 0 103 31" fill="none" xmlns="http://www.w3.org/2000/svg">
    //     <path d="M24.4727 6.85547H15.9375V30H9.08203V6.85547H0.703125V1.5625H24.4727V6.85547ZM38.5742 14.8242L36.4062 14.668C34.3359 14.668 33.0078 15.319 32.4219 16.6211V30H25.8398V8.86719H32.0117L32.2266 11.582C33.3333 9.51172 34.8763 8.47656 36.8555 8.47656C37.5586 8.47656 38.1706 8.55469 38.6914 8.71094L38.5742 14.8242ZM52.2656 30C52.0312 29.5703 51.8229 28.9388 51.6406 28.1055C50.4297 29.6289 48.737 30.3906 46.5625 30.3906C44.5703 30.3906 42.8776 29.7917 41.4844 28.5938C40.0911 27.3828 39.3945 25.8659 39.3945 24.043C39.3945 21.7513 40.2409 20.0195 41.9336 18.8477C43.6263 17.6758 46.0872 17.0898 49.3164 17.0898H51.3477V15.9766C51.3477 14.0365 50.5078 13.0664 48.8281 13.0664C47.2656 13.0664 46.4844 13.8346 46.4844 15.3711H39.9023C39.9023 13.3268 40.7682 11.6667 42.5 10.3906C44.2448 9.11458 46.4648 8.47656 49.1602 8.47656C51.8555 8.47656 53.9844 9.13411 55.5469 10.4492C57.1094 11.7643 57.9102 13.5677 57.9492 15.8594V25.2148C57.9753 27.1549 58.2747 28.6393 58.8477 29.668V30H52.2656ZM48.1445 25.7031C48.9648 25.7031 49.6419 25.5273 50.1758 25.1758C50.7227 24.8242 51.1133 24.4271 51.3477 23.9844V20.6055H49.4336C47.1419 20.6055 45.9961 21.6341 45.9961 23.6914C45.9961 24.2904 46.1979 24.7786 46.6016 25.1562C47.0052 25.5208 47.5195 25.7031 48.1445 25.7031ZM60.7812 19.2773C60.7812 15.931 61.5039 13.2943 62.9492 11.3672C64.3945 9.4401 66.4128 8.47656 69.0039 8.47656C70.8919 8.47656 72.4805 9.21875 73.7695 10.7031V0H80.3711V30H74.4531L74.1211 27.7344C72.7669 29.5052 71.0482 30.3906 68.9648 30.3906C66.4518 30.3906 64.4596 29.4271 62.9883 27.5C61.5169 25.5729 60.7812 22.832 60.7812 19.2773ZM67.3633 19.6875C67.3633 23.4375 68.457 25.3125 70.6445 25.3125C72.1029 25.3125 73.1445 24.7005 73.7695 23.4766V15.4297C73.1706 14.1797 72.1419 13.5547 70.6836 13.5547C68.6523 13.5547 67.5521 15.1953 67.3828 18.4766L67.3633 19.6875ZM96.0156 30C95.7812 29.5703 95.5729 28.9388 95.3906 28.1055C94.1797 29.6289 92.487 30.3906 90.3125 30.3906C88.3203 30.3906 86.6276 29.7917 85.2344 28.5938C83.8411 27.3828 83.1445 25.8659 83.1445 24.043C83.1445 21.7513 83.9909 20.0195 85.6836 18.8477C87.3763 17.6758 89.8372 17.0898 93.0664 17.0898H95.0977V15.9766C95.0977 14.0365 94.2578 13.0664 92.5781 13.0664C91.0156 13.0664 90.2344 13.8346 90.2344 15.3711H83.6523C83.6523 13.3268 84.5182 11.6667 86.25 10.3906C87.9948 9.11458 90.2148 8.47656 92.9102 8.47656C95.6055 8.47656 97.7344 9.13411 99.2969 10.4492C100.859 11.7643 101.66 13.5677 101.699 15.8594V25.2148C101.725 27.1549 102.025 28.6393 102.598 29.668V30H96.0156ZM91.8945 25.7031C92.7148 25.7031 93.3919 25.5273 93.9258 25.1758C94.4727 24.8242 94.8633 24.4271 95.0977 23.9844V20.6055H93.1836C90.8919 20.6055 89.7461 21.6341 89.7461 23.6914C89.7461 24.2904 89.9479 24.7786 90.3516 25.1562C90.7552 25.5208 91.2695 25.7031 91.8945 25.7031Z"
    //     fill={props.fill || "white"}/>
    // </svg>
    // // <span>Admin</span>
    <svg width="142" height="70" viewBox="0 0 142 70" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30.2188 30.5391L23.2852 53H15.9219L26.3711 24.5625H31.0391L30.2188 30.5391ZM35.9609 53L29.0078 30.5391L28.1094 24.5625H32.8359L43.3438 53H35.9609ZM35.6875 42.3945V47.6875H21.0977V42.3945H35.6875ZM57.2695 48.1562V23H63.8906V53H57.9531L57.2695 48.1562ZM44.3008 42.6875V42.2773C44.3008 40.6758 44.4766 39.2174 44.8281 37.9023C45.1797 36.5742 45.7005 35.4349 46.3906 34.4844C47.0807 33.5208 47.9401 32.7786 48.9688 32.2578C49.9974 31.737 51.1823 31.4766 52.5234 31.4766C53.7214 31.4766 54.7695 31.7565 55.668 32.3164C56.5664 32.8633 57.3346 33.6315 57.9727 34.6211C58.6107 35.6107 59.1315 36.7695 59.5352 38.0977C59.9388 39.4128 60.2448 40.832 60.4531 42.3555V42.8438C60.2448 44.276 59.9388 45.6302 59.5352 46.9062C59.1315 48.1693 58.6107 49.2891 57.9727 50.2656C57.3346 51.2422 56.5599 52.0104 55.6484 52.5703C54.75 53.1172 53.6953 53.3906 52.4844 53.3906C51.1432 53.3906 49.9583 53.1237 48.9297 52.5898C47.9141 52.056 47.0612 51.3073 46.3711 50.3438C45.694 49.3802 45.1797 48.2474 44.8281 46.9453C44.4766 45.6432 44.3008 44.224 44.3008 42.6875ZM50.8828 42.2773V42.6875C50.8828 43.4818 50.9349 44.2174 51.0391 44.8945C51.1432 45.5716 51.319 46.1706 51.5664 46.6914C51.8268 47.1992 52.1654 47.5964 52.582 47.8828C53.0117 48.1693 53.5391 48.3125 54.1641 48.3125C55.0104 48.3125 55.707 48.1107 56.2539 47.707C56.8138 47.3034 57.224 46.7305 57.4844 45.9883C57.7578 45.2461 57.875 44.3737 57.8359 43.3711V41.8281C57.862 40.9688 57.8034 40.2135 57.6602 39.5625C57.5169 38.8984 57.2891 38.3451 56.9766 37.9023C56.6771 37.4596 56.293 37.1276 55.8242 36.9062C55.3685 36.6719 54.8281 36.5547 54.2031 36.5547C53.5911 36.5547 53.0703 36.6979 52.6406 36.9844C52.224 37.2708 51.8854 37.6745 51.625 38.1953C51.3646 38.7031 51.1758 39.3086 51.0586 40.0117C50.9414 40.7018 50.8828 41.457 50.8828 42.2773ZM74.2617 36.3398V53H67.6797V31.8672H73.8516L74.2617 36.3398ZM73.4609 41.7109L71.957 41.75C71.957 40.2656 72.1328 38.8984 72.4844 37.6484C72.8359 36.3984 73.3568 35.3112 74.0469 34.3867C74.737 33.4622 75.5833 32.7461 76.5859 32.2383C77.6016 31.7305 78.7734 31.4766 80.1016 31.4766C81.026 31.4766 81.8659 31.6198 82.6211 31.9062C83.3763 32.1797 84.0273 32.6159 84.5742 33.2148C85.1211 33.8008 85.5378 34.569 85.8242 35.5195C86.1237 36.457 86.2734 37.5833 86.2734 38.8984V53H79.6914V39.7383C79.6914 38.8398 79.5872 38.1628 79.3789 37.707C79.1836 37.2513 78.8971 36.9453 78.5195 36.7891C78.1419 36.6328 77.6797 36.5547 77.1328 36.5547C76.5599 36.5547 76.0456 36.6849 75.5898 36.9453C75.1341 37.2057 74.7435 37.5703 74.418 38.0391C74.1055 38.4948 73.8646 39.0352 73.6953 39.6602C73.5391 40.2852 73.4609 40.9688 73.4609 41.7109ZM85.5312 41.7109L83.6953 41.75C83.6953 40.2656 83.8581 38.8984 84.1836 37.6484C84.5221 36.3984 85.0234 35.3112 85.6875 34.3867C86.3646 33.4622 87.2044 32.7461 88.207 32.2383C89.2096 31.7305 90.375 31.4766 91.7031 31.4766C92.6667 31.4766 93.5521 31.6198 94.3594 31.9062C95.1667 32.1927 95.8633 32.6549 96.4492 33.293C97.0352 33.931 97.4909 34.7773 97.8164 35.832C98.1419 36.8737 98.3047 38.1628 98.3047 39.6992V53H91.7031V39.6992C91.7031 38.8268 91.599 38.1693 91.3906 37.7266C91.1953 37.2708 90.9089 36.9648 90.5312 36.8086C90.1536 36.6393 89.7044 36.5547 89.1836 36.5547C88.5586 36.5547 88.0182 36.6849 87.5625 36.9453C87.1068 37.2057 86.7227 37.5703 86.4102 38.0391C86.1107 38.4948 85.8893 39.0352 85.7461 39.6602C85.6029 40.2852 85.5312 40.9688 85.5312 41.7109ZM109.027 31.8672V53H102.426V31.8672H109.027ZM102.035 26.418C102.035 25.4805 102.374 24.7122 103.051 24.1133C103.728 23.5143 104.607 23.2148 105.688 23.2148C106.768 23.2148 107.647 23.5143 108.324 24.1133C109.001 24.7122 109.34 25.4805 109.34 26.418C109.34 27.3555 109.001 28.1237 108.324 28.7227C107.647 29.3216 106.768 29.6211 105.688 29.6211C104.607 29.6211 103.728 29.3216 103.051 28.7227C102.374 28.1237 102.035 27.3555 102.035 26.418ZM119.555 36.3789V53H112.973V31.8672H119.145L119.555 36.3789ZM118.773 41.7109L117.23 41.75C117.23 40.1354 117.426 38.6966 117.816 37.4336C118.207 36.1576 118.76 35.0768 119.477 34.1914C120.193 33.306 121.046 32.6354 122.035 32.1797C123.038 31.7109 124.151 31.4766 125.375 31.4766C126.352 31.4766 127.243 31.6198 128.051 31.9062C128.871 32.1927 129.574 32.6549 130.16 33.293C130.759 33.931 131.215 34.7773 131.527 35.832C131.853 36.8737 132.016 38.1628 132.016 39.6992V53H125.395V39.6797C125.395 38.8333 125.277 38.1888 125.043 37.7461C124.809 37.2904 124.47 36.9779 124.027 36.8086C123.585 36.6393 123.044 36.5547 122.406 36.5547C121.729 36.5547 121.156 36.6849 120.688 36.9453C120.219 37.2057 119.841 37.5703 119.555 38.0391C119.281 38.4948 119.079 39.0352 118.949 39.6602C118.832 40.2852 118.773 40.9688 118.773 41.7109Z" fill="#FAFAFA"/>
    </svg>


);

export default IconLogo;
