const myApp = new Vue({
	el: '#root',
	data: {
		welcome: 'Hello Vue!',
		name: '',
		surname: '',
		age: '',
		myClasses: 'red'
	},
	methods: {
		nameAlert: function (){
			alert(this.name);
		},
		logger: function(e){
			console.log(e.key);
		}
	}
})