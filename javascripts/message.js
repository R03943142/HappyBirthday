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
            _welcomeBox.innerText = welcomeMessage + '\n' + '▋';
          }, 6000);
	}

	_obj.saySomething = function(m) {
		var originM = m.replace('▋','');
		var sentence = 'I am going to copy what Yu-Hao wants to say.' + '\n' + 'Ho Yu-Hao:' + '\n' 
		+ 'Hello, Cherry Wu. HAPPY BIRTHDAY!! I am very glad to make friend with you.' + '\n' 
		+ 'We have finished a lot of painting!!! That\'s a very interesting memory.';
		var appear;
		_countM = 0;
		console.log(sentence.length);
		for (var i = 0; i < sentence.length; i+=1) {
          
		  timer = setTimeout(function() {
		  	appear = originM;
            for (var j = 0; j <= _countM; j+=1)
          	  appear += sentence[j];
            appear += '▋';
            _countM+=1;
            _welcomeBox.innerText = appear;
          }, i * 50);
		}
		timer = setTimeout(function() {
            _welcomeBox.innerText = appear.replace('▋','');
          }, 9700);
	}

	_obj.saySomethingSecond = function(m) {
		var originM = m.replace('▋','') + '\n';
		var sentence = 'We also talk the story about Little Prince. When will the story be ended xD ?' + '\n' 
		+ 'Please keep your smile not only today but everyday!! It\'s very beautiful thing.' + '\n' 
		+ 'Anyway, all I want to say is ...';
		var appear;
		_countM = 0;
		console.log(sentence.length);
		for (var i = 0; i < sentence.length; i+=1) {
          
		  timer = setTimeout(function() {
		  	appear = originM;
            for (var j = 0; j <= _countM; j+=1)
          	  appear += sentence[j];
            appear += '▋';
            _countM+=1;
            _welcomeBox.innerText = appear;
          }, i * 50);
		}
		timer = setTimeout(function() {
            _welcomeBox.innerText = appear.replace('▋','');
          }, 9700);
	}
};