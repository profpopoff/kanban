<script setup lang="ts">
defineProps({
   value: {
      type: String,
      required: true,
   },
   placeholder: {
      type: String,
   },
   label: {
      type: String,
   },
   id: {
      type: String,
   },
});
defineEmits(["update:value"]);
</script>

<template>
   <div class="default-textarea">
      <label :for="id">{{ label }}</label>
      <textarea :id="id" :value="value" @input="$emit('update:value', ($event.target as HTMLInputElement).value)"
         :placeholder="placeholder"></textarea>
   </div>
</template>

<style scoped lang="scss">
.default-textarea {
   display: flex;
   flex-direction: column;
   gap: 0.5rem;

   label {
      width: fit-content;
      text-transform: capitalize;
      font-size: 0.8rem;
      font-weight: 600;
      line-height: 1;

      &:empty {
         display: none;
      }
   }

   textarea {
      min-height: 5rem;
      max-height: 25vh;
      width: 100%;
      padding: 0.5rem 1rem;
      background-color: hsl(var(--element-color));
      border-radius: 0.25rem;
      border: 1px solid hsl(var(--grey-color));
      outline: none;
      resize: vertical;

      &::placeholder {
         color: hsl(var(--grey-color));
         opacity: 1;
         font-size: 0.8rem;
      }
   }
}
</style>