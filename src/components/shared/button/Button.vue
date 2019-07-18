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

    .button {
        display: inline-block;
        padding: 5px;
        border-radius: 5px;
        margin: 15px;
        font-size: 12px;
    }
    
    .button-danger {
        background: #C00;
        color: #FFF;
    }

    .button-regular {
        background: #0AA;
        color: #FFF;
    }

</style>


