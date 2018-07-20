<template>
    <div class="content-business">
        <h2 class="title">商业合作联系方式</h2>
        <p class="prompt">如果您需要任何帮助，请与我们联系或发送电子邮件给我们。<br/> 我们会尽快答复您</p>
        <div class="companyInfo">
            <dl>
                <dd class="phone"></dd>
                <dt>
                    <h6>联系方式</h6>
                    <span>联系人：曹先生<br/>手&emsp;机：187-0755-9295<br/>座&emsp;机：0755-86525405</span>
                </dt>
            </dl>
            <dl>
                <dd class="address"></dd>
                <dt>
                    <h6>地址</h6>
                    <span>深圳市南山区科技北三路天工道1号<br/>宏益嘉瑞大厦301、302室</span>
                </dt>
            </dl>
            <dl>
                <dd class="qrCode"></dd>
                <dt>
                    <span class="qrCodeTitle">公众号二维码</span>
                </dt>
            </dl>
        </div>
        <h2 class="title">邮件联系</h2>
        <p class="prompt">如果您有任何问题，请不要犹豫，给我们发送邮件。</p>
        <div class="postMsg">
            <p class="input-text">
                <input type="text" v-model="msg.userName" placeholder="您的名字">
                <input type="text" v-model="msg.email" placeholder="您的邮箱">
                <input type="text" v-model="msg.title" placeholder="标题">
            </p>
            <textarea name="" id="" cols="30" v-model="msg.content" rows="10" placeholder="再次输入您的内容">

            </textarea>
            <span class="btn" @click="sedMsg"></span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Content-business',
        data() {
            return {
                msg:{
                    userName:'',
                    email:'',
                    title:'',
                    content:'',
                }
            }
        },
        methods: {
            sedMsg(){
                var self = this
                self.$ajax.post('url',self.msg,function(data){
                    if(data.code === 1){
                        alert('发送成功')
                    }
                })
            },
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped src="@/less/components/contentBusiness.less"></style>
