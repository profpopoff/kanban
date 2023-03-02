<template>
   <svg version="1.1" id="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xml:space="preserve">
      <g>
         <g>
            <circle cx="256" cy="256" r="126.4" />
         </g>
         <g>
            <ellipse cx="256" cy="50.9" rx="31.1" ry="50.9" />
         </g>
         <g>
            <ellipse cx="256" cy="461.1" rx="31.1" ry="50.9" />
         </g>
         <g>
            <ellipse cx="50.9" cy="248.9" rx="50.9" ry="31.1" />
         </g>
         <g>
            <ellipse cx="461.1" cy="248.9" rx="50.9" ry="31.1" />
         </g>
         <g>
            <ellipse transform="matrix(0.7071 -0.7071 0.7071 0.7071 -46.1071 110.8229)" cx="110.7" cy="111.1" rx="31.1"
               ry="50.9" />
         </g>
         <g>
            <ellipse transform="matrix(0.7071 -0.7071 0.7071 0.7071 -166.2407 400.8556)" cx="400.8" cy="401.1" rx="31.1"
               ry="50.9" />
         </g>
         <g>
            <ellipse transform="matrix(0.7071 -0.7071 0.7071 0.7071 -251.1905 195.7728)" cx="110.7" cy="401.1" rx="50.9"
               ry="31.1" />
         </g>
         <g>
            <ellipse transform="matrix(0.7071 -0.7071 0.7071 0.7071 38.8429 315.9066)" cx="400.8" cy="111.1" rx="50.9"
               ry="31.1" />
         </g>
      </g>
   </svg>
</template>

<style scoped>
svg {
   fill: hsl(var(--accent-color));
   transition: var(--dark-theme-transition);
}

.dark svg {
   fill: hsl(var(--grey-color));
}
</style>