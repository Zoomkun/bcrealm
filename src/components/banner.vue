<template>
    <div class="banner">
        <div v-if="page.pageNow === 0" class="banner-bg">
            <img class="cloud_left" src="@/assets/home/cloud_left.png" alt="">
            <img class="cloud_mid" src="@/assets/home/cloud_mid.png" alt="">
            <img class="cloud_right" src="@/assets/home/cloud_right.png" alt="">

            <div class="swiper-container banner-container">
                <span class="swiper-button-prev"></span>
                <ul class="swiper-wrapper">
                    <li class="swiper-slide">
                        <img class="img-text" src="@/assets/home/text.png" alt="">
                        <img class="img-tree" src="@/assets/home/tree.png" alt="">
                    </li>
                    <li class="swiper-slide">
                        <img class="img-text" src="@/assets/home/text.png" alt="">
                        <img class="img-tree" src="@/assets/home/tree.png" alt="">
                    </li>
                    <li class="swiper-slide">
                        <img class="img-text" src="@/assets/home/text.png" alt="">
                        <img class="img-tree" src="@/assets/home/tree.png" alt="">
                    </li>
                    <li class="swiper-slide">
                        <img class="img-text" src="@/assets/home/text.png" alt="">
                        <img class="img-tree" src="@/assets/home/tree.png" alt="">
                    </li>
                </ul>
                <span class="swiper-button-next"></span>
                <span class="banner-bullets">
                </span>
            </div>
        </div>
        <div v-if="page.pageNow !== 0" class="banner-small">
            <div v-if="page.pageNow === 1" class="idea"></div>
            <div v-if="page.pageNow === 2" class="team"></div>
            <div v-if="page.pageNow === 3" class="business"></div>
        </div>
        <div class="triangle">
            <div class="triangle-left"></div>
            <div class="triangle-center"></div>
            <div class="triangle-right"></div>
        </div>
    </div>

</template>

<script>
    import Swiper from 'swiper';
    import 'swiper/dist/css/swiper.min.css';
    import bus from '@/js/event'

    export default {
        name: 'Banner',
        data() {
            return {
                page: {
                    pageNow:0
                }
            }
        },
        mounted() {
            var self = this
            self.swiperRoll()
            bus.$on('toChangePage', function (index) {
                self.$forceUpdate()
                self.$set(self.page, 'pageNow', index)
            })
        },
        methods: {
            swiperRoll() {
                // swiper動畫
                var swiper = new Swiper('.swiper-container', {
                    effect: 'fade',
                    autoplay: false,
                    pagination: {
                        el: '.banner-bullets',
                        bulletClass:'banner-bullet',
                        bulletActiveClass:'banner-bullet-active'
                    },
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    },
                    on: {
                        slideChangeTransitionEnd: function () {
                            bus.$emit('toChangeSwiper',swiper.activeIndex)
                        },
                    },
                })
            },
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped src="@/less/components/banner.less"></style>
<style>
    .banner-bullets{
        position: absolute;
        left: 0;
        bottom:130px !important;
        text-align: center;
    }

    .banner-bullet{
        display: inline-block;
        width: 70px;
        height: 10px;
        margin-right: 5px;
        border-radius: 0;
        background: #fff;
        opacity: .5;
    }

    .banner-bullet-active{
        opacity: 1;
    }
</style>