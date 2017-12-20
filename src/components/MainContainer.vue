<template>
	<div>
		<navbar></navbar>
		<div class="container" id="chatContainer">
			<div class="container-fluid" id="messagesContainer">
				<message v-for="message in messages" 
					:text="message.text" 
					:yourMessage="message.yourMessage" 
					:interlocatorMessage="message.interlocatorMessage"></message>
			</div>

			<form>
				<div class="form-group row justify-content-center align-items-end" id="myForm">
					<div class="col-md-10 otstup">
						<input type="text" name="message" class="form-control" placeholder="Введите сообщение" autocomplete="off" v-model="message" @keyup.13="sendMessage" onkeypress="if(event.keyCode == 13) return false;">
					</div>

					<div class="col-md-auto otstup">
						<button type="button" class="btn btn-primary" @click="sendMessage">Отправить</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script type="text/javascript">
	import Message from './Message.vue'
	import Navbar from './Navbar.vue'

	var socket = io.connect('http://localhost:3000');

	export default {
		name: 'main-container',

		data: function(){
			return{
				message : '',

				messages:[
				]
			}
		},

		components: {
			Message,
			Navbar
		},

		methods: {
			sendMessage: function(){
				if(this.message != ''){
					socket.emit('message', this.message);

					this.messages.push({
						text: this.message,

						yourMessage: true,
						interlocatorMessage: false
					});

					this.message = '';
				}
			}
		},

		mounted: function(){
			this.$nextTick(function(){
				socket.on('connect', function(){
					console.log('client connected! ', socket.id);
				});

				socket.on('message', (data)=>{
					this.messages.push({
						text: data,

						yourMessage: false,
						interlocatorMessage: true
					});
				});
			});
		}
	}
</script>

<style scoped type="text/css">
	#chatContainer{
		background-color: #A7BDC1;
		border-radius: 10px;

		margin: 10px auto 10px auto;

		padding-top: 10px;
	}

	#messagesContainer{
		height: 450px;
		background-color: white;
		border-radius: 10px;

		overflow: auto;
	}

	.otstup{
		margin: 10px;
	}

	#myForm{

	}
</style>