<template>
   <svg version="1.1" id="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" xml:space="preserve">
      <path d="M185,307.2C120.5,210.9,145.1,71.7,247,0C109,9.3,0,120.2,0,255.7C0,397.2,119,512,265.8,512
               	c111.3,0,206.5-65.9,246.2-159.5C407.1,436,254.2,410.5,185,307.2z" />
      <path d="M356.3,184.7c33.6,0,64.4,12,88.4,32c-20-24-32-54.8-32-88.4s12-64.4,32-88.4c-24,20-54.8,32-88.4,32s-64.4-12-88.4-32
               	c20,24,32,54.8,32,88.4s-12,64.4-32,88.4C291.9,196.7,322.7,184.7,356.3,184.7z" />
   </svg>
</template>

<style scoped>
svg {
   fill: hsl(var(--grey-color));
   transition: var(--dark-theme-transition);
}

.dark svg {
   fill: hsl(var(--accent-color));
}
</style>