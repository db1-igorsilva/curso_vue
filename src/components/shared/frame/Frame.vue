<template>
    <div class="frame">
        <h2 class="frame-title" @click="shown = !shown"> {{ title }} </h2>
        <transition name="frame-fade">
            <div class="frame-content" v-show="shown">
                <slot name="content"> </slot>
            </div>
        </transition>
        <slot name="btn"> </slot>
    </div>
</template>

<script>
export default {
    props: ['title'],

    data() {
        return {
            shown: false
        }
    }
}
</script>

<style lang="scss" scoped>
    $font: Helvetica, sans-serif;
    $black: #000;
    $gray: #AAA;

    .frame {
        border: 2.5px solid $black;
        padding: 2.5px;
        display: inline-block;
        margin: 5px;
        box-shadow: 5px 5px $gray;
        width: 200px;
        height: 100%;
        vertical-align: top;
    }

    .frame .frame-title {
        margin: 0;
        font-family: $font;
        font-weight: bold;
        font-style: italic;
        color: $black;
        padding: 2.5px;
        text-transform: uppercase;
        cursor: default;
    }

    .frame-content {
        vertical-align: bottom;
        overflow: hidden;
    }

    .frame-fade-enter, .frame-fade-leave-active {
        opacity: 0;
    }

    .frame-fade-enter-active, .frame-fade-leave-active {
        transition: opacity.5s;
    }

</style>