<template>
	<div :class="{
		'row justify-content-end':yourMessage,
		'row justify-content-start':interlocatorMessage
	}">
		<div class="alert alert-primary" 
			:class="{
				'yourMessage': yourMessage, 
				'interlocatorMessage': interlocatorMessage
			}" 
			role="alert">
			
  			{{text}}
		</div>
	</div>
</template>

<script type="text/javascript">
	export default {
		name: 'message',

		props: [
			'text',
			'yourMessage',
			'interlocatorMessage'
		],

		data: function(){
			return{

			}
		}
	}
</script>

<style scoped type="text/css">
	.yourMessage{
		background-color: #D0FF89FF;
		border-color: #D0FF89FF;
		border-radius: 15px 15px 0px 15px;
		margin: 10px;
		color: #161C1EFF;
	}

	.interlocatorMessage{
		background-color: #D6EFE0FF;
		border-color: #D6EFE0FF;
		border-radius: 15px 15px 15px 0px;
		margin: 10px;
		color: #161C1EFF;
	}
</style>