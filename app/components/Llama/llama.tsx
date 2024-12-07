"use client";

import React, { useState } from "react";
import { useSpring, animated } from "@react-spring/web";
import styles from "./llama.module.scss";

const TrottingLlama = () => {
  const [hover, setHover] = useState(false);

  const springProps = useSpring({
    transform: hover
      ? "translateX(10px) translateY(2px)"
      : "translateX(0px) translateY(0px)",
    config: { tension: 200, friction: 12 },
  });

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  return (
    <animated.div
      className={styles["llama"]}
      style={springProps}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <svg
        width="83"
        height="102"
        viewBox="0 0 83 102"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M39.6667 76.6667L42 70.3333L44 71L46.3333 71.3333L49 72.3333L53 73.3333V74.3333L53.3333 78.3333L54.6667 81.6667L56 85.3333L56.6667 89.3333L56.3333 90.6667L53.3333 93V94L54.6667 94.3333L55.6667 95L56.6667 97L57 98.3333H59L60 99.6667L60.6667 100L65 97.6667L65.6667 97V90.3333V80L66.6667 78L68.6667 73.6667L70 68.6667L72 62.3333L78.3333 66.6667L79.3333 67L81 65V63.6667L69.6667 52.3333L66.6667 50L62.6667 48.3333L56.3333 48H47.3333L42.6667 47.3333L38.3333 45.3333L36.6667 42.6667L35.3333 39.3333L35 34.6667V26.6667L34.6667 21.3333L33.6667 17.3333L31.3333 14L19 2H17.6667L16 3.33333V4.66667L20.3333 11L19 11.6667L13.3333 13.3333L7.66667 15L3 17.6667L1.33333 20L1 22L2.33333 23.6667L6 25H13L16.6667 25.6667L21 27.6667L21.6667 29L22.3333 33.6667L21.6667 36.6667L20.3333 41.3333L19.6667 47L20.3333 53.3333L23.3333 62L27 67V72.6667L27.3333 76L29.6667 82.3333L30.3333 89.6667L30 90.6667L26.6667 92.6667L29 93.3333L29.6667 94.6667L31.3333 95.3333V96.3333L32 98H33.6667L35 99.3333L39.6667 97.6667V76.6667Z"
          fill="#FFEDE6"
        />
        <path
          d="M1.76144 18.8508C4.51685 16.2016 7.07427 14.9912 8.93979 14.3789C10.889 13.738 12.2279 13.7013 15.5875 12.7359C17.7408 12.1174 19.4695 11.4766 20.6105 11.0255C20.1716 10.2519 19.4573 9.05588 18.4531 7.67205C16.7651 5.34527 15.7283 4.50436 15.9773 3.59814C16.0977 3.16135 16.5978 2.41025 19.0919 2C22.3596 5.02278 25.2395 7.82309 27.7174 10.307C31.4872 14.085 32.9975 15.7995 33.9466 18.5263C34.5569 20.2796 34.6569 21.694 34.8549 24.5208C35.1529 28.7744 34.9365 29.5826 34.8222 34.6097C34.7896 36.0793 34.9182 38.2999 35.7836 40.8165C36.451 42.7576 37.3409 44.2373 38.0205 45.2088"
          stroke="#942206"
          stroke-width="2"
          stroke-miterlimit="10"
        />
        <path
          d="M64.0967 81.121C66.746 78.3656 67.9563 75.8081 68.5687 73.9426C69.2095 71.9934 69.2463 70.6545 70.2117 67.295C70.8301 65.1417 71.471 63.4129 71.9221 62.272C72.6956 62.7108 73.8917 63.4251 75.2755 64.4293C77.6023 66.1173 78.4432 67.1541 79.3494 66.9051C79.7862 66.7847 80.5373 66.2846 80.9476 63.7905C77.9248 60.5228 75.1245 57.6429 72.6405 55.1651C68.8626 51.3952 67.1481 49.8849 64.4213 48.9358C62.668 48.3255 61.2536 48.2255 58.4267 48.0275C54.1732 47.7295 53.3649 47.9459 48.3379 48.0602C46.8683 48.0928 44.6477 47.9643 42.131 47.0989C40.19 46.4314 38.7103 45.5415 37.7387 44.8619"
          stroke="#942206"
          stroke-width="2"
          stroke-miterlimit="10"
        />
        <path
          d="M2.24516 18.3977C2.01656 18.5855 1.23892 19.2754 1.04298 20.4469C0.836837 21.6879 1.42874 22.6186 1.62264 22.9227C2.68602 24.5963 4.66787 24.8127 4.9577 24.8392C6.27213 24.925 8.28051 25.0148 10.7481 24.9597C13.5893 24.8943 13.5893 24.7147 14.5812 24.8801C17.9877 25.4454 18.4939 27.6538 21.2819 27.5844C21.78 27.5722 23.2169 27.4661 24.5252 26.4374C25.5273 25.6495 25.9968 24.678 26.2029 24.1616"
          stroke="#942206"
          stroke-width="2"
          stroke-miterlimit="10"
        />
        <path
          d="M60.6699 93.7708C60.5706 93.8869 60.4031 94.5066 59.651 95.0148C58.8542 95.5529 58.1761 95.8252 57.9546 95.9141C56.7354 96.4041 56.3793 96.1433 56.3305 96.1031C56.1324 95.9068 55.8569 95.5902 55.6276 95.1343C55.3648 94.6086 55.4833 94.536 55.2674 94.4285C54.5275 94.0585 53.0154 94.8626 52.761 94.3446C52.7155 94.2522 52.6308 93.9567 53.1689 93.3108C53.581 92.8161 56.5039 90.9283 56.8225 90.6833"
          stroke="#942206"
          stroke-width="2"
          stroke-miterlimit="10"
        />
        <path
          d="M65.8397 97.0239C65.7056 97.1613 65.2064 97.6551 64.2375 98.2961C63.2111 98.9749 62.3609 99.3527 62.083 99.4761C60.5543 100.156 60.158 99.9195 60.1044 99.8823C59.8904 99.6957 59.5983 99.3893 59.3792 98.9271C59.1285 98.3941 59.2802 98.3011 59.0337 98.2123C58.1892 97.9065 56.2686 98.9609 56.027 98.435C55.9837 98.3412 55.9187 98.0337 56.6471 97.2712C57.2049 96.6872 57.9753 96.1017 58.3895 95.7981"
          stroke="#942206"
          stroke-width="2"
          stroke-miterlimit="10"
        />
        <path
          d="M39.5757 96.869C39.4574 96.9967 39.4018 97.6223 38.5315 98.2029C37.6096 98.8176 36.8378 99.1475 36.5855 99.2552C35.1977 99.8485 34.8197 99.6011 34.7683 99.5625C34.5616 99.3715 34.277 99.0604 34.0532 98.6011C33.797 98.0714 33.9337 97.9877 33.7011 97.8904C32.9041 97.5554 31.1695 98.4959 30.9221 97.9736C30.8778 97.8804 30.8038 97.5784 31.4456 96.869C31.9371 96.3256 32.6257 95.7902 32.9963 95.5133"
          stroke="#942206"
          stroke-width="2"
          stroke-miterlimit="10"
        />
        <path
          d="M35.0854 93.4238C34.9844 93.5427 34.4682 93.6266 33.7014 94.1453C32.889 94.6944 32.1969 94.971 31.9707 95.0613C30.7263 95.5589 30.3608 95.2893 30.3108 95.2478C30.1072 95.0451 29.8239 94.7184 29.5872 94.2489C29.316 93.7075 29.4369 93.6334 29.2155 93.5219C28.457 93.1382 26.9145 93.9573 26.6519 93.4238C26.6049 93.3286 26.5169 93.0246 27.0641 92.3635C27.4831 91.8571 30.4745 90.8314 30.7992 90.5811"
          stroke="#942206"
          stroke-width="2"
          stroke-miterlimit="10"
        />
        <path
          d="M1.95331 23.3657C2.84524 23.182 3.99027 22.8534 5.23734 22.2431C6.26195 21.741 7.08448 21.1818 7.71313 20.6858"
          stroke="#1D1D1B"
          stroke-width="2"
          stroke-miterlimit="10"
        />
        <path
          d="M2.19616 19.9591C2.72684 19.6427 3.27383 19.3794 3.84941 19.1773C4.47397 18.9589 5.13526 18.861 5.73941 18.5854C5.99046 18.4711 6.05169 18.1078 5.92311 17.8874C5.77207 17.6302 5.47612 17.5894 5.22507 17.7037C4.95769 17.8262 4.64133 17.8833 4.34946 17.9588C4.05759 18.0344 3.7494 18.1303 3.45753 18.2364C2.84113 18.4609 2.24515 18.7426 1.68182 19.0773C1.44506 19.2182 1.35934 19.5366 1.49813 19.7754C1.63692 20.0142 1.9594 20.0999 2.19616 19.9591Z"
          fill="#942206"
        />
        <path
          d="M23.5251 14.4973C23.9986 14.728 25.2865 15.4321 26.1213 16.9731C27.1173 18.8121 26.7826 20.5817 26.6805 21.047"
          stroke="#942206"
          stroke-width="2"
          stroke-miterlimit="10"
        />
        <path
          d="M65.9051 78.7432C65.8464 79.4188 65.6867 81.4814 65.5832 85.9954C65.4597 91.3822 65.5012 96.5658 65.5139 97.929"
          stroke="#942206"
          stroke-width="2"
          stroke-miterlimit="10"
        />
        <path
          d="M39.3716 76.9062C39.3422 77.6322 39.2624 79.8484 39.2106 84.6985C39.1489 90.4865 39.3653 96.3623 39.3716 97.8269"
          stroke="#942206"
          stroke-width="2"
          stroke-miterlimit="10"
        />
        <path
          d="M23.896 62.97C23.5852 62.5795 22.9137 61.3719 21.9168 58.537C20.7273 55.1539 20.1819 51.7731 20.045 50.8826"
          stroke="#942206"
          stroke-width="2"
          stroke-miterlimit="10"
        />
        <path
          d="M31.2547 69.3474C30.8749 69.2253 27.8339 68.3414 26.4769 66.8764C24.8576 65.1279 23.751 62.8808 23.5208 62.3396"
          stroke="#942206"
          stroke-width="2"
          stroke-miterlimit="10"
        />
        <path
          d="M41.7307 68.2385C41.8175 68.6574 42.0018 69.893 41.3929 72.0558C40.6662 74.6367 39.5111 77.1755 39.1465 77.732"
          stroke="#942206"
          stroke-width="2"
          stroke-miterlimit="10"
        />
        <path
          d="M21.3289 27.8354C21.7208 29.1519 22.182 31.1664 22.1678 33.6259C22.1433 37.7896 20.7778 39.7817 20.1716 44.0087C19.894 45.9354 19.7165 48.7418 20.292 52.2749"
          stroke="#942206"
          stroke-width="2"
          stroke-miterlimit="10"
        />
        <path
          d="M56.5634 67.6671C56.1933 69.1851 55.8041 71.4922 56.0681 74.2429C56.5154 78.8997 58.4622 80.9729 59.6605 85.634C60.2083 87.7585 60.7159 90.8788 60.3321 94.8984"
          stroke="#942206"
          stroke-width="2"
          stroke-miterlimit="10"
        />
        <path
          d="M31.8111 63.3173C31.5394 65.013 31.2568 67.5996 31.4676 70.7223C31.8248 76.0089 33.2988 78.4559 34.221 83.7876C34.6425 86.2177 35.0383 89.7712 34.7674 94.2933"
          stroke="#942206"
          stroke-width="2"
          stroke-miterlimit="10"
        />
        <path
          d="M53.5979 72.3257C53.337 73.387 53.0624 74.9998 53.247 76.9224C53.5598 80.1773 54.928 81.6257 55.7689 84.8833C56.1533 86.3681 56.7132 88.7531 56.4417 91.5629"
          stroke="#942206"
          stroke-width="2"
          stroke-miterlimit="10"
        />
        <path
          d="M27.2684 67.4271C27.032 68.7614 26.7947 70.7919 27.0248 73.2246C27.4147 77.343 28.8198 79.2046 29.7389 83.3388C30.1589 85.2232 30.5667 87.9861 30.3607 91.5285"
          stroke="#942206"
          stroke-width="2"
          stroke-miterlimit="10"
        />
        <path
          d="M40.9778 71.8891C41.8123 71.494 43.0897 71.0279 44.6515 71.0362C47.2955 71.0507 48.5656 72.4114 51.252 73.0074C52.4765 73.2803 54.2592 73.4511 56.5005 72.867"
          stroke="#942206"
          stroke-width="2"
          stroke-miterlimit="10"
        />
        <path
          d="M1.95331 23.3657C2.84524 23.182 3.99027 22.8534 5.23734 22.2431C6.26195 21.741 7.08448 21.1818 7.71313 20.6858"
          stroke="#942206"
          stroke-width="2"
          stroke-miterlimit="10"
        />
        <path
          d="M14.9608 17.7342C14.9772 17.626 15.0976 16.9055 15.7058 16.5626C16.3549 16.1973 17.3019 16.4075 17.8897 17.1484"
          stroke="#3C6679"
          stroke-width="2"
          stroke-miterlimit="10"
          stroke-linecap="round"
        />
      </svg>
    </animated.div>
  );
};

export default TrottingLlama;
