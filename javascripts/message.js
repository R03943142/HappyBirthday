function MessageBox() 
{
	var _obj = this;
	var _count = 0;
	var _countWelcome = 0;
	var _welcomeBox;
	var _countM = 0;
	_obj.wait = function(m) {
		_count += 1;
		if (_count % 2 == 0) {
			return m + '▋';
		} else {
			return m.replace('▋','');
		}
	}
	_obj.setWelcome = function(b) {
		_welcomeBox = b;
	}
	_obj.printWelcome = function () {
		var welcomeMessage = 'Hi I am Baymax, Ho Yu-Hao wants me to say HAPPY BIRTHDAY TO YOU!!' + '\n'
		+ 'Let me play the \"Happy Birthday Song\" for you first !!!';
		var appear;
		for (var i = 0; i < welcomeMessage.length; i+=1) {
          
		  timer = setTimeout(function() {
		  	appear = '';
            for (var j = 0; j <= _countM; j+=1)
          	  appear += welcomeMessage[j];
            appear += '▋';
            _countM+=1;
            _welcomeBox.innerText = appear;
          }, i * 50);
		}
        timer = setTimeout(function() {
            _welcomeBox.innerText = welcomeMessage;
          }, 6000);
	}
};