<template>
    <div>
        <navbar></navbar>

        <div class="container" id="chatContainer">
            <div class="row justify-content-center">
                <div class="col-xs-auto">
                    <h1 id="hello_text">Добро пожаловать!</h1> 
                </div>
            </div>

            <div class="row justify-content-center">
                <div class="col-xs-auto">
                    <button type="button" class="btn btn-outline-success btn-lg" id="enter_button" @click="redirectToEntrance">Войти</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Navbar from './Navbar.vue'

    export default {
        name: 'enter-button',

        data: function(){
            return{

            }
        },

        components:{
            Navbar
        },

        methods:{
            redirectToEntrance: function(){
                setTimeout(function(){
                    location.replace('/#/enter');
                }, 500);
            }
        }
    }
</script>

<style scoped>
    #enter_button{
        margin-top: 100px;
        margin-bottom: 100px;
        cursor: pointer;
    }

    #chatContainer{
		background-color: white;
		border-radius: 10px;

		margin: 10px auto 10px auto;

		padding-top: 10px;
	}

    #hello_text{
        text-align: center 
    }
</style>
