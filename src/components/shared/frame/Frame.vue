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
    
    @import './Frame.scss';

</style>