<template>
    <div class="index">
        <Cheader nav-active="1"></Cheader>
        <Cbanner></Cbanner>
        <section class="clear" style="background: #fff">
            <Cindex v-if="page.pageNow === 0"></Cindex>
            <Cidea v-if="page.pageNow === 1"></Cidea>
            <Cteam v-if="page.pageNow === 2"></Cteam>
            <Cbusiness v-if="page.pageNow === 3"></Cbusiness>
        </section>
    </div>
</template>
<script src="@/js/index.js"></script>
<style lang="less" scoped src="@/less/index.less"></style>
