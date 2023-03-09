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
})
defineEmits(['update:value'])
</script>

<template>
    <div class="default-input">
        <label :for="label">{{ label }}</label>
        <input :id="label" :value="value" @input="$emit('update:value', ($event.target as HTMLInputElement).value)"
            :placeholder="placeholder" />
    </div>
</template>
 
<style scoped lang="scss">
.default-input {
    display: flex;
    flex-direction: column;
    gap: .5rem;

    label {
        text-transform: capitalize;
        font-size: .8rem;
        font-weight: 600;
        line-height: 1;

        &:empty {
            display: none;
        }
    }

    input {
        height: 2.5rem;
        width: 100%;
        padding-inline: 1rem;
        background-color: hsl(var(--element-color));
        border-radius: .25rem;
        border: 1px solid hsl(var(--grey-color));
        outline: none;

        &::placeholder {
            color: hsl(var(--grey-color));
            opacity: 1;
            font-size: .8rem;
        }
    }
}
</style>