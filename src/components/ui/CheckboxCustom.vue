<script setup lang="ts">
const { id } = withDefaults(
  defineProps<{
    isChecked?: boolean;
    id?: string;
    type?: "checkbox" | "toggle";
  }>(),
  {
    isChecked: false,
    id: "id",
    type: "checkbox",
  }
);
const emit = defineEmits<{
  onChange: [id: string];
}>();

const handleClick = () => {
  emit("onChange", id);
};
</script>

<template>
  <div class="custom-checkbox">
    <input
      type="checkbox"
      :name="id"
      :id="id"
      :checked="isChecked"
      :class="type"
      @click="handleClick"
    />
    <label :for="id">
      <slot />
    </label>
  </div>
</template>

<style scoped lang="scss">
.custom-checkbox {
  display: flex;
  align-items: center;
  gap: 0.5em;

  input {
    $padding: 0.3em;
    $defaultColor: hsl(var(--default-color, var(--grey-color)));
    $checkedColor: hsl(var(--checked-color, var(--accent-color)));
    cursor: pointer;

    &.checkbox {
      width: 1.2rem;
      aspect-ratio: 1;
      accent-color: $checkedColor;
      transition: all 0.25s linear;

      &:checked + label {
        text-decoration: line-through;
        opacity: 0.7;
      }
    }

    &.toggle {
      $height: 1.5em;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;

      position: relative;
      height: $height;
      width: calc($height * 2);
      background: $defaultColor;
      border-radius: $height;
      transition: all 0.3s ease-in-out;

      &::after {
        content: "";
        display: inline-block;
        position: absolute;
        left: $padding;
        top: 50%;
        transform: translateY(-50%);
        width: calc($height - 2 * $padding);
        aspect-ratio: 1;
        background-color: #fff;
        border-radius: 50%;
        transition: all 0.3s cubic-bezier(0.2, 0.85, 0.32, 1.4);
      }

      &:checked {
        background-color: $checkedColor;

        &::after {
          left: calc(100% - ($height - $padding));
        }
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
    font-weight: 500;

    &:first-letter {
      text-transform: uppercase;
    }

    &:empty {
      display: none;
    }
  }
}
</style>
