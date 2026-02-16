"use client";

export const React = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      width="100%"
      height="100%"
      viewBox="-10.5 -9.45 21 18.9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="0" cy="0" r="2" fill="rgba(80, 169, 198, 1)"></circle>
      <g stroke="rgba(80, 169, 198, 1)" strokeWidth="1" fill="none">
        <ellipse rx="10" ry="4.5"></ellipse>
        <ellipse rx="10" ry="4.5" transform="rotate(60)"></ellipse>
        <ellipse rx="10" ry="4.5" transform="rotate(120)"></ellipse>
      </g>
    </svg>
  );
};

export const TypeScript = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 256 256"
      preserveAspectRatio="xMidYMid"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 0h216c11.046 0 20 8.954 20 20v216c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0Z"
        fill="#3178C6"
      />
      <path
        d="M150.518 200.475v27.62c4.492 2.302 9.805 4.028 15.938 5.179 6.133 1.151 12.597 1.726 19.393 1.726 6.622 0 12.914-.633 18.874-1.899 5.96-1.266 11.187-3.352 15.678-6.257 4.492-2.906 8.048-6.704 10.669-11.394 2.62-4.689 3.93-10.486 3.93-17.391 0-5.006-.749-9.394-2.246-13.163a30.748 30.748 0 0 0-6.479-10.055c-2.821-2.935-6.205-5.567-10.149-7.898-3.945-2.33-8.394-4.531-13.347-6.602-3.628-1.497-6.881-2.949-9.761-4.359-2.879-1.41-5.327-2.848-7.342-4.316-2.016-1.467-3.571-3.021-4.665-4.661-1.094-1.64-1.641-3.495-1.641-5.567 0-1.899.489-3.61 1.468-5.135s2.362-2.834 4.147-3.927c1.785-1.094 3.973-1.942 6.565-2.547 2.591-.604 5.471-.906 8.638-.906 2.304 0 4.737.173 7.299.518 2.563.345 5.14.877 7.732 1.597a53.669 53.669 0 0 1 7.558 2.719 41.7 41.7 0 0 1 6.781 3.797v-25.807c-4.204-1.611-8.797-2.805-13.778-3.582-4.981-.777-10.697-1.165-17.147-1.165-6.565 0-12.784.705-18.658 2.115-5.874 1.409-11.043 3.61-15.506 6.602-4.463 2.993-7.99 6.805-10.582 11.437-2.591 4.632-3.887 10.17-3.887 16.615 0 8.228 2.375 15.248 7.127 21.06 4.751 5.811 11.963 10.731 21.638 14.759a291.458 291.458 0 0 1 10.625 4.575c3.283 1.496 6.119 3.049 8.509 4.66 2.39 1.611 4.276 3.366 5.658 5.265 1.382 1.899 2.073 4.057 2.073 6.474a9.901 9.901 0 0 1-1.296 4.963c-.863 1.524-2.174 2.848-3.93 3.97-1.756 1.122-3.945 1.999-6.565 2.632-2.62.633-5.687.95-9.2.95-5.989 0-11.92-1.05-17.794-3.151-5.875-2.1-11.317-5.25-16.327-9.451Zm-46.036-68.733H140V109H41v22.742h35.345V233h28.137V131.742Z"
        fill="#FFF"
      />
    </svg>
  );
};

export const CSS = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="1000"
      height="1000"
      viewBox="0 0 1000 1000"
      role="img"
      aria-labelledby="css-logo-title css-logo-description"
    >
      <title id="css-logo-title">CSS Logo</title>
      <desc id="css-logo-description">
        A purple square with rounded corners and the letters CSS inside in white
      </desc>
      <path
        fill="#639"
        d="M0 0H840A160 160 0 0 1 1000 160V840A160 160 0 0 1 840 1000H160A160 160 0 0 1 0 840V0Z"
      />
      <path
        fill="#fff"
        d="M816.54 919.9c-32.39 0-57.16-9.42-74.5-28.35-17.15-19.03-26.08-46.18-26.88-81.64h69.8c.4 31.36 11.42 47.08 33.08 47.08 11.04 0 18.86-3.5 23.37-10.42 4.41-6.9 6.72-17.93 6.72-33.05 0-12.02-3.01-22.04-8.83-29.95a73.2 73.2 0 0 0-29.48-21.14L783.95 750c-23.06-11.02-39.81-24.04-50.14-39.27-10.03-15.13-15.04-36.36-15.04-63.5 0-30.36 8.83-55 26.37-73.94 18.05-18.93 42.62-28.34 74-28.34 30.3 0 53.76 9.31 70.3 27.84 16.85 18.64 25.67 45.28 26.38 80.14h-67.19c.4-11.4-1.9-22.72-6.72-33.06-3.8-7.6-11.23-11.41-22.26-11.41-19.65 0-29.48 11.71-29.48 35.05 0 11.83 2.4 21.04 7.22 28.05A65.18 65.18 0 0 0 822.76 689l24.77 10.92c25.57 11.72 44.02 26.05 55.35 43.38 11.43 17.23 17.05 40.27 17.05 69.12 0 34.56-9.03 61.1-27.38 79.63-18.25 18.53-43.62 27.85-76 27.85Zm-225.42 0c-32.4 0-57.16-9.42-74.51-28.35-17.15-19.03-26.07-46.18-26.87-81.64h69.79c.4 31.36 11.43 47.08 33.1 47.08 11.02 0 18.84-3.5 23.25-10.42 4.52-6.9 6.72-17.93 6.72-33.05 0-12.02-2.9-22.04-8.72-29.95a73.2 73.2 0 0 0-29.48-21.14L558.53 750c-23.07-11.02-39.81-24.04-50.14-39.27-10.03-15.13-15.04-36.36-15.04-63.5 0-30.36 8.82-55 26.37-73.94 18.05-18.93 42.62-28.34 74-28.34 30.29 0 53.75 9.31 70.2 27.84 17.05 18.64 25.77 45.28 26.47 80.14h-67.18c.4-11.4-1.9-22.72-6.72-33.06-3.81-7.6-11.23-11.41-22.26-11.41-19.66 0-29.49 11.71-29.49 35.05 0 11.83 2.41 21.04 7.22 28.05A65.18 65.18 0 0 0 597.33 689l24.77 10.92c25.57 11.72 44.02 26.05 55.36 43.38 11.33 17.23 17.04 40.27 17.04 69.12 0 34.56-9.12 61.1-27.37 79.63-18.25 18.53-43.62 27.85-76.01 27.85Zm-234.75 0c-31.7 0-56.86-8.62-75.51-25.85-18.65-17.12-27.88-42.87-27.88-76.93V648.83c0-33.85 9.83-59.5 29.48-77.13 19.96-17.43 46.13-26.24 78.52-26.24 31.39 0 56.15 9.01 74.5 26.84 18.56 17.93 27.88 44.58 27.88 80.14v13.32h-73.9v-12.92c0-13.72-3.01-23.84-8.83-30.45a26.46 26.46 0 0 0-21.66-10.32c-12.03 0-20.55 4.1-25.37 12.42a79.04 79.04 0 0 0-6.72 36.66v146.26c0 30.55 10.74 46.08 32.1 46.38 10.02 0 17.54-3.61 22.76-10.82a51.74 51.74 0 0 0 7.72-30.46V801.6h73.9v11.42c0 23.74-4.61 43.57-13.94 59.4a88.8 88.8 0 0 1-38.2 35.66 121.46 121.46 0 0 1-54.85 11.82Z"
      />
    </svg>
  );
};

export const Vite = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      width="410"
      height="404"
      viewBox="0 0 410 404"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M399.641 59.5246L215.643 388.545C211.844 395.338 202.084 395.378 198.228 388.618L10.5817 59.5563C6.38087 52.1896 12.6802 43.2665 21.0281 44.7586L205.223 77.6824C206.398 77.8924 207.601 77.8904 208.776 77.6763L389.119 44.8058C397.439 43.2894 403.768 52.1434 399.641 59.5246Z"
        fill="url(#paint0_linear)"
      />
      <path
        d="M292.965 1.5744L156.801 28.2552C154.563 28.6937 152.906 30.5903 152.771 32.8664L144.395 174.33C144.198 177.662 147.258 180.248 150.51 179.498L188.42 170.749C191.967 169.931 195.172 173.055 194.443 176.622L183.18 231.775C182.422 235.487 185.907 238.661 189.532 237.56L212.947 230.446C216.577 229.344 220.065 232.527 219.297 236.242L201.398 322.875C200.278 328.294 207.486 331.249 210.492 326.603L212.5 323.5L323.454 102.072C325.312 98.3645 322.108 94.137 318.036 94.9228L279.014 102.454C275.347 103.161 272.227 99.746 273.262 96.1583L298.731 7.86689C299.767 4.27314 296.636 0.855181 292.965 1.5744Z"
        fill="url(#paint1_linear)"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="6.00017"
          y1="32.9999"
          x2="235"
          y2="344"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#41D1FF" />
          <stop offset="1" stopColor="#BD34FE" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="194.651"
          y1="8.81818"
          x2="236.076"
          y2="292.989"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFEA83" />
          <stop offset="0.0833333" stopColor="#FFDD35" />
          <stop offset="1" stopColor="#FFA800" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const HTML = ({ className }: { className?: string }) => {
  return (
    <svg viewBox="0 0 452 520" className={className}>
      <path fill="#e34f26" d="M41 460L0 0h451l-41 460-185 52" />
      <path fill="#ef652a" d="M226 472l149-41 35-394H226" />
      <path
        fill="#ecedee"
        d="M226 208h-75l-5-58h80V94H84l15 171h127zm0 147l-64-17-4-45h-56l7 89 117 32z"
      />
      <path
        fill="#fff"
        d="M226 265h69l-7 73-62 17v59l115-32 16-174H226zm0-171v56h136l5-56z"
      />
    </svg>
  );
};

export const Tailwind = ({ className }: { className?: string }) => {
  return (
    <svg fill="none" viewBox="0 0 54 33" className={className}>
      <g clipPath="url(#tailwindcss__a)">
        <path
          fill="#38bdf8"
          fillRule="evenodd"
          d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.054.513 3.522 2.004 5.147 3.653C30.744 13.09 33.808 16.2 40.5 16.2c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C36.756 3.11 33.692 0 27 0zM13.5 16.2C6.3 16.2 1.8 19.8 0 27c2.7-3.6 5.85-4.95 9.45-4.05 2.054.514 3.522 2.004 5.147 3.653C17.244 29.29 20.308 32.4 27 32.4c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.054-.513-3.522-2.004-5.147-3.653C23.256 19.31 20.192 16.2 13.5 16.2z"
          clipRule="evenodd"
        />
      </g>
      <defs>
        <clipPath id="tailwindcss__a">
          <path fill="#fff" d="M0 0h54v32.4H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const Next = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 180 180" className={className}>
    <mask
      height="180"
      id="nextjs_icon_dark__:r8:mask0_408_134"
      maskUnits="userSpaceOnUse"
      width="180"
      x="0"
      y="0"
      style={{ maskType: "alpha" }}
    >
      <circle cx="90" cy="90" fill="black" r="90" />
    </mask>
    <g mask="url(#nextjs_icon_dark__:r8:mask0_408_134)">
      <circle cx="90" cy="90" data-circle="true" fill="black" r="90" />
      <path
        d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
        fill="url(#nextjs_icon_dark__:r8:paint0_linear_408_134)"
      />
      <rect
        fill="url(#nextjs_icon_dark__:r8:paint1_linear_408_134)"
        height="72"
        width="12"
        x="115"
        y="54"
      />
    </g>
    <defs>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="nextjs_icon_dark__:r8:paint0_linear_408_134"
        x1="109"
        x2="144.5"
        y1="116.5"
        y2="160.5"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
      <linearGradient
        gradientUnits="userSpaceOnUse"
        id="nextjs_icon_dark__:r8:paint1_linear_408_134"
        x1="121"
        x2="120.799"
        y1="54"
        y2="106.875"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

export const Astro = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#fff"
    viewBox="0 0 128 128"
    className={className}
  >
    <g>
      <path d="M47.7 107.1c-5.5-5-7.2-15.7-4.9-23.4 4 4.9 9.6 6.4 15.4 7.3 8.9 1.3 17.6.8 25.9-3.2l2.8-1.7a18 18 0 0 1-7.2 20l-5.5 3.8c-5.6 3.8-7.2 8.2-5 14.7l.2.7a14 14 0 0 1-6.6-5.6 15.8 15.8 0 0 1-2.6-8.6c0-1.5 0-3-.2-4.5-.5-3.7-2.2-5.3-5.5-5.4-3.3-.1-5.9 2-6.6 5.2l-.2.7Z" />
      <path d="M16 82.4s16.5-8 33-8l12.4-38.3c.5-2 1.8-3.2 3.3-3.2 1.6 0 3 1.3 3.4 3.2l12.4 38.3c19.6 0 33 8 33 8l-28-76c-.8-2.3-2.2-3.7-4-3.7H48c-1.8 0-3.1 1.4-4 3.7l-28 76Z" />
    </g>
    <path
      fill="url(#a)"
      d="M47.7 107.1c-5.5-5-7.2-15.7-4.9-23.4 4 4.9 9.6 6.4 15.4 7.3 8.9 1.3 17.6.8 25.9-3.2l2.8-1.7a18 18 0 0 1-7.2 20l-5.5 3.8c-5.6 3.8-7.2 8.2-5 14.7l.2.7a14 14 0 0 1-6.6-5.6 15.8 15.8 0 0 1-2.6-8.6c0-1.5 0-3-.2-4.5-.5-3.7-2.2-5.3-5.5-5.4-3.3-.1-5.9 2-6.6 5.2l-.2.7Z"
    />

    <defs>
      <linearGradient
        id="a"
        x1="64.7"
        x2="77.4"
        y1="119.2"
        y2="77.4"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#D83333" />
        <stop offset="1" stop-color="#F041FF" />
      </linearGradient>
    </defs>
  </svg>
);

export const JavaScript = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 1052 1052" className={className}>
    <path fill="#f0db4f" d="M0 0h1052v1052H0z" />
    <path
      d="M965.9 801.1c-7.7-48-39-88.3-131.7-125.9-32.2-14.8-68.1-25.399-78.8-49.8-3.8-14.2-4.3-22.2-1.9-30.8 6.9-27.9 40.2-36.6 66.6-28.6 17 5.7 33.1 18.801 42.8 39.7 45.4-29.399 45.3-29.2 77-49.399-11.6-18-17.8-26.301-25.4-34-27.3-30.5-64.5-46.2-124-45-10.3 1.3-20.699 2.699-31 4-29.699 7.5-58 23.1-74.6 44-49.8 56.5-35.6 155.399 25 196.1 59.7 44.8 147.4 55 158.6 96.9 10.9 51.3-37.699 67.899-86 62-35.6-7.4-55.399-25.5-76.8-58.4-39.399 22.8-39.399 22.8-79.899 46.1 9.6 21 19.699 30.5 35.8 48.7 76.2 77.3 266.899 73.5 301.1-43.5 1.399-4.001 10.6-30.801 3.199-72.101zm-394-317.6h-98.4c0 85-.399 169.4-.399 254.4 0 54.1 2.8 103.7-6 118.9-14.4 29.899-51.7 26.2-68.7 20.399-17.3-8.5-26.1-20.6-36.3-37.699-2.8-4.9-4.9-8.7-5.601-9-26.699 16.3-53.3 32.699-80 49 13.301 27.3 32.9 51 58 66.399 37.5 22.5 87.9 29.4 140.601 17.3 34.3-10 63.899-30.699 79.399-62.199 22.4-41.3 17.6-91.3 17.4-146.6.5-90.2 0-180.4 0-270.9z"
      fill="#323330"
    />
  </svg>
);

export const GitHub = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 100 100"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
        fill="#fff"
      />
    </svg>
  );
};

export const Linkedin = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 256 256"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453"
        fill="#fff"
      />
    </svg>
  );
};

export const LinkTo = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      className={className}
      viewBox="0 -960 960 960"
      width="24px"
      fill="#faf5ff"
    >
      <path d="M210-74q-57.4 0-96.7-39.3Q74-152.6 74-210v-540q0-57.4 39.3-96.7Q152.6-886 210-886h209q29 0 48.5 19.5t19.5 48q0 28.5-19.5 48.5T419-750H210v540h540v-209q0-29 20-48.5t48.5-19.5q28.5 0 48 19.5T886-419v209q0 57.4-39.3 96.7Q807.4-74 750-74H210Zm540-582L464-370q-19 19-46 18.5t-46.5-20Q352-391 352-418.5t19-46.5l285-285h-21q-27.6 0-47.8-20-20.2-20-20.2-48.5t20.2-48Q607.4-886 635-886h183q29 0 48.5 19.5T886-818v183q0 27.6-19.5 47.8-19.5 20.2-48 20.2T770-587.2q-20-20.2-20-47.8v-21Z" />
    </svg>
  );
};

export const MailSusses = ({ className, fill }: { className?: string, fill?: string }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" className={className}>
      <defs>
        <mask id="SVGwmTVw6iw">
          <path fill={fill} fillOpacity={0} d="M12 11l-8 -5h16l-8 5Z">
            <animate fill="freeze" attributeName="fill-opacity" begin="0.9s" dur="0.15s" to={0.3}></animate>
          </path>
          <g fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
            <path strokeDasharray={66} d="M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z">
              <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="66;0"></animate>
            </path>
            <path strokeDasharray={24} strokeDashoffset={24} d="M3 6.5l9 5.5l9 -5.5">
              <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.3s" to={0}></animate>
            </path>
          </g>
          <path d="M19 13c3.31 0 6 2.69 6 6c0 3.31 -2.69 6 -6 6c-3.31 0 -6 -2.69 -6 -6c0 -3.31 2.69 -6 6 -6Z" opacity={0}>
            <set fill="freeze" attributeName="opacity" begin="1.15s" to={1}></set>
          </path>
        </mask>
      </defs>
      <path fill={fill} d="M0 0h24v24H0z" mask="url(#SVGwmTVw6iw)"></path>
      <path fill="none" stroke={fill} strokeDasharray={10} strokeDashoffset={10} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 19l1.75 1.75l3.75 -3.75">
        <animate fill="freeze" attributeName="stroke-dashoffset" begin="1.15s" dur="0.2s" to={0}></animate>
      </path>
    </svg>
  )
}

export const MailError = ({ className, fill }: { className?: string, fill?: string }) => {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" className={className}>
      <defs>
        <mask id="SVGwmTVw6iw">
          <path fill={fill} fillOpacity={0} d="M12 11l-8 -5h16l-8 5Z">
            <animate fill="freeze" attributeName="fill-opacity" begin="0.45s" dur="0.075s" to={0.3}></animate>
          </path>
          <g fill="none" stroke={fill} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
            <path strokeDasharray={66} d="M4 5h16c0.55 0 1 0.45 1 1v12c0 0.55 -0.45 1 -1 1h-16c-0.55 0 -1 -0.45 -1 -1v-12c0 -0.55 0.45 -1 1 -1Z">
              <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="66;0"></animate>
            </path>
            <path strokeDasharray={24} strokeDashoffset={24} d="M3 6.5l9 5.5l9 -5.5">
              <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.3s" dur="0.15s" to={0}></animate>
            </path>
          </g>
          <path d="M19 13c3.31 0 6 2.69 6 6c0 3.31 -2.69 6 -6 6c-3.31 0 -6 -2.69 -6 -6c0 -3.31 2.69 -6 6 -6Z" opacity={0}>
            <set fill="freeze" attributeName="opacity" begin="0.575s" to={1}></set>
          </path>
        </mask>
      </defs>
      <path fill={fill} d="M0 0h24v24H0z" mask="url(#SVGwmTVw6iw)"></path>
      <g fill="none" stroke={fill} strokeDasharray={8} strokeDashoffset={8} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
        <path d="M17 17l4 4">
          <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.575s" dur="0.1s" to={0}></animate>
        </path>
        <path d="M21 17l-4 4">
          <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.675s" dur="0.1s" to={0}></animate>
        </path>
      </g>
    </svg>
  )
}

export const Loading = ({ className, fill }: { className?: string, fill?: string }) => {
  return(
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"
    className={className}
    >
      <g stroke={fill} strokeWidth={1}>
        <circle cx={12} cy={12} r={9.5} fill="none" strokeLinecap="round" strokeWidth={3}>
          <animate attributeName="stroke-dasharray" calcMode="spline" dur="1.5s" keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1" keyTimes="0;0.475;0.95;1" repeatCount="indefinite" values="0 150;42 150;42 150;42 150"></animate>
          <animate attributeName="stroke-dashoffset" calcMode="spline" dur="1.5s" keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1" keyTimes="0;0.475;0.95;1" repeatCount="indefinite" values="0;-16;-59;-59"></animate>
        </circle>
        <animateTransform attributeName="transform" dur="2s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></animateTransform>
      </g>
    </svg>
  )
}