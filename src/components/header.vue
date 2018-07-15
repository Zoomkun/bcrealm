<template>
    <div class="header-bg">
        <div class="header clear">
            <div class="logo">
                <img src="@/assets/home/logo.png">
            </div>
            <ul class="nav-container">
                <li :class="[index == page ? 'active' : ''] " v-for="(item,index) in nav" @click="getPageIndex(index)">{{item}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import bus from '@/js/event'
    export default {
        name: 'Header',
        data () {
            return {
                nav:['区世界','核心理念','团队介绍', '商务合作'],
                page:0
            }
        },
        methods:{
            getPageIndex(index){
                this.page = index
                bus.$emit('toChangePage',index)
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped src="@/less/components/header.less"></style>
