<script setup lang="ts">
const props = defineProps({
   isChecked: {
      type: Boolean,
      default: false,
   },
   name: {
      type: String,
      default: 'toggle'
   }
})
</script>

<template>
   <div class="custom-toggle">
      <input type="checkbox" :name="name" :id="name" :checked="isChecked">
      <label :for="name">
         <slot />
      </label>
   </div>
</template>

<style scoped lang="scss">
.custom-toggle {
   display: flex;
   align-items: center;
   gap: .5em;

   input {
      --height: 1.5em;
      --padding: .3em;

      position: relative;
      width: 3em;
      height: var(--height);
      background: #696969;
      /* background: hsl(var(--grey-color)); */
      border-radius: 2em;
      cursor: pointer;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      transition: all 0.3s ease-in-out;

      &::after {
         content: "";
         display: inline-block;
         position: absolute;
         left: var(--padding);
         top: 50%;
         width: calc(var(--height) - var(--padding) * 2);
         aspect-ratio: 1;
         background-color: #fff;
         border-radius: 50%;
         transform: translate(0, -50%);
         transition: all 0.3s cubic-bezier(0.2, 0.85, 0.32, 1.4);
      }

      &:checked {
         /* background-color: hsl(var(--accent-color)); */
         background-color: #640101;

         &::after {
            left: calc(100% - (var(--height) - var(--padding)));
         }
      }
   }

   label {
      cursor: pointer;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
   }
}
</style>