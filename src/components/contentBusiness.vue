<template>
    <div class="content-business">
        <h2 class="title">商业合作联系方式</h2>
        <p class="prompt">如果您需要任何帮助，请与我们联系或发送电子邮件给我们。<br/> 我们会尽快答复您</p>
        <div class="companyInfo">
            <dl>
                <dd class="phone"></dd>
                <dt>
                    <h6>电话</h6>
                    <span>手机：13888888888<br/>座机：0755-123456</span>
                </dt>
            </dl>
            <dl>
                <dd class="address"></dd>
                <dt>
                    <h6>地址</h6>
                    <span>南山区天工道科技北路南玻电子大厦302室<br/>中国.深圳市</span>
                </dt>
            </dl>
            <dl>
                <dd class="email"></dd>
                <dt>
                    <h6>邮箱</h6>
                    <span>support@supernovatheme.com</span>
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
