<template>
    <nav>
        <ul>
            <li v-for='(route, rt) of routes' :key='rt'>
                <router-link :to="route.path ? route.path : '/'">
                    {{ route.title }}
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>

    export default {
        props: {
            routes: {
                type: Array,
                required: true
            }
        }
    };

</script>

<style lang="scss" scoped>

</style>