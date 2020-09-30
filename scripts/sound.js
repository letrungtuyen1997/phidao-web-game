document.writeln("<script type='text/javascript' src='howler.core.js'></script>");
	var sounds = [];

    function initSound(){
    }


    function loadSound(name) {
    	console.log('load: '+name);
    	var sound = new Howl({src: ['assets/sound/' + name]});
     	sounds[name] = sound;
        // if (name=='dice.mp3')
        //     playLoopSound('dice.mp3');
    }


    function playLoopSound(name) {
    	console.log('loop: '+name);
    	sounds[name].loop(true);
    	sounds[name].play();
    }

    function stopAllSound(){
    	for (var sound in sounds){
    		sounds[sound].stop();
    	}
    }

    function pauseAllSound(){
    	for (var sound in sounds){
    		sounds[sound].pause();
    	}
    }

    function playSound(name) {
    	console.log('play sound: '+name);
      sounds[name].play();
    }

    function pauseSound(name) {
    	sounds[name].pause();
    }

    function resumeSound(name) {
        if (!sounds[name].playing())
        	sounds[name].play();
    }

    function stopSound(name) {
    	sounds[name].stop();
    }
    function setVolume(name,volume){
        sounds[name].volume(volume);
    }