<template>
    <div>
        <PARTHEAD></PARTHEAD>
        <ABOUTME></ABOUTME>
    </div>
</template>

<script>
    import PARTHEAD from './part/part-head.vue';
    import ABOUTME from './part/aboutme.vue';
    export default {
        name: "index",
        mounted:function () {
          console.log('index init')
        },
        components:{
            PARTHEAD,
            ABOUTME
        }
    }
</script>

<style>

</style>