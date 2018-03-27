(function(){
	var username = document.getElementById('username');
	var mail = document.getElementById('mail');
	var btn = document.getElementById('btn');
	var user_prompt = document.getElementById('usercontent');
	var mail_prompt = document.getElementById('mailcontent');
	btn.onclick = function(){
		if(username.value.length == 0){
			user_prompt.style.display = 'block';
		}
		if(username.value.length == 0){
			mail_prompt.style.display = 'block';
		}
	};
})();
