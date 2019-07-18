<template>

    <button @click="confirmRemoval()" class="button" :class="btnStyle" :type="btnType"> {{ btnText }} </button>

</template>

<script>

export default {

    props:  {

        btnType: {
            required: true,
            type: String
        },

        btnText: {
            required: true,
            type: String
        },

        needsToConfirm: Boolean,

        buttonKind: String

    },

    methods: {
        confirmRemoval() {
            if(this.needsToConfirm) {
                if(confirm('Remove picture?')) {
                    this.$emit('buttonClickEvent');
                }
                return;
            }
            this.$emit('buttonClickEvent');
        }
    },

    computed: {
        btnStyle() {
            if (this.buttonKind == 'regular' || !this.buttonKind) {
                return 'button-regular'
            } else if (this.buttonKind == 'dangerous') {
                return 'button-danger'
            }
        }
    }

}

</script>

<style lang="scss" scoped>

    @import './Button.scss';

</style>


