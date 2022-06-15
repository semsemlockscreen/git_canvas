(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"qisas dnd_atlas_1", frames: [[1874,940,28,34],[1934,932,20,27],[2008,133,29,34],[1973,175,22,30],[1916,900,29,30],[1894,864,29,34],[1674,921,12,30],[1947,894,8,30],[2039,94,7,26],[1929,932,3,6],[2045,201,3,6],[0,994,463,208],[1820,924,4,8],[2044,277,4,7],[2041,54,5,10],[1954,961,15,23],[2039,144,6,13],[1934,961,18,30],[2045,192,3,7],[2041,78,7,7],[465,994,463,208],[1889,175,82,33],[1765,984,5,5],[1967,986,9,6],[2044,307,4,5],[2044,333,1,1],[1674,953,10,26],[1770,973,5,5],[2045,209,3,3],[2039,122,9,9],[1772,980,5,5],[2045,214,3,3],[2039,133,9,9],[2047,333,1,1],[1978,342,45,86],[2045,219,3,3],[1798,977,1,1],[1704,990,2,2],[2029,169,4,3],[1688,858,82,60],[2041,169,2,2],[2047,144,1,2],[1772,987,3,3],[2044,314,4,5],[1899,991,1,1],[1826,910,43,37],[2047,148,1,1],[2045,224,3,2],[1865,906,3,2],[1909,900,4,4],[1777,973,5,5],[1871,906,43,32],[1929,987,3,4],[2044,321,4,4],[2041,87,7,4],[2016,336,6,3],[1853,864,39,40],[1916,932,11,5],[1809,924,9,7],[1853,906,10,2],[1675,981,7,8],[1696,990,6,2],[1779,980,5,5],[1954,986,11,5],[1762,973,6,9],[1784,973,5,5],[1655,980,7,10],[2021,169,6,2],[1929,975,3,10],[2044,228,4,12],[1684,990,10,2],[2045,169,3,10],[1793,980,2,6],[1997,336,9,4],[2047,151,1,1],[1716,983,5,9],[2039,159,9,8],[2047,154,1,1],[1797,980,3,2],[1798,973,3,2],[2044,327,4,4],[1786,980,5,5],[1791,973,5,5],[2008,169,4,4],[1747,983,8,5],[1635,980,8,9],[1809,864,42,44],[1757,984,6,5],[1747,990,7,2],[1894,900,13,3],[2041,66,5,10],[1925,894,12,3],[1939,894,6,4],[1684,983,10,5],[2008,336,6,4],[2044,242,4,10],[1899,976,3,13],[1696,983,10,5],[1645,980,8,9],[1664,990,7,2],[1664,981,9,7],[1623,980,10,9],[2044,286,4,6],[1871,940,1,1],[2044,254,4,10],[2044,294,2,11],[1762,920,8,11],[1802,977,2,2],[1777,987,3,3],[1871,943,1,1],[1803,973,2,2],[2035,169,4,3],[1782,987,3,3],[2014,169,5,3],[1787,987,3,3],[1925,864,30,28],[1997,175,46,51],[1904,940,28,33],[1688,920,72,61],[1997,228,45,52],[1978,430,59,63],[2008,94,29,37],[2008,54,31,38],[1997,282,45,52],[1826,949,46,33],[1602,921,70,57],[0,0,1600,992],[1978,495,52,70],[1739,983,6,7],[1809,910,12,12],[1810,698,174,164],[1602,858,84,61],[2045,181,3,9],[1708,983,6,8],[2044,266,4,9],[1904,975,23,17],[1874,976,23,15],[1723,983,5,9],[1772,858,35,74],[1730,983,7,6],[1602,342,186,176],[1602,980,19,11],[2008,0,38,52],[1790,342,186,176],[2025,386,23,40],[1978,567,52,56],[1395,1133,174,164],[1762,934,62,37],[2025,336,23,48],[1747,1133,173,164],[1602,520,186,176],[1602,0,285,208],[1978,625,38,69],[1602,698,206,158],[1889,0,117,173],[1395,994,574,137],[1571,1133,174,164],[1790,520,186,176],[1602,210,393,130],[930,994,463,208]]}
];


(lib.AnMovieClip = function(){
	this.currentSoundStreamInMovieclip;
	this.actionFrames = [];
	this.soundStreamDuration = new Map();
	this.streamSoundSymbolsList = [];

	this.gotoAndPlayForStreamSoundSync = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.gotoAndPlay = function(positionOrLabel){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(positionOrLabel);
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(this.currentFrame);
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		this.clearAllSoundStreams();
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
		this.clearAllSoundStreams();
	}
	this.startStreamSoundsForTargetedFrame = function(targetFrame){
		for(var index=0; index<this.streamSoundSymbolsList.length; index++){
			if(index <= targetFrame && this.streamSoundSymbolsList[index] != undefined){
				for(var i=0; i<this.streamSoundSymbolsList[index].length; i++){
					var sound = this.streamSoundSymbolsList[index][i];
					if(sound.endFrame > targetFrame){
						var targetPosition = Math.abs((((targetFrame - sound.startFrame)/lib.properties.fps) * 1000));
						var instance = playSound(sound.id);
						var remainingLoop = 0;
						if(sound.offset){
							targetPosition = targetPosition + sound.offset;
						}
						else if(sound.loop > 1){
							var loop = targetPosition /instance.duration;
							remainingLoop = Math.floor(sound.loop - loop);
							if(targetPosition == 0){ remainingLoop -= 1; }
							targetPosition = targetPosition % instance.duration;
						}
						instance.loop = remainingLoop;
						instance.position = Math.round(targetPosition);
						this.InsertIntoSoundStreamData(instance, sound.startFrame, sound.endFrame, sound.loop , sound.offset);
					}
				}
			}
		}
	}
	this.InsertIntoSoundStreamData = function(soundInstance, startIndex, endIndex, loopValue, offsetValue){ 
 		this.soundStreamDuration.set({instance:soundInstance}, {start: startIndex, end:endIndex, loop:loopValue, offset:offsetValue});
	}
	this.clearAllSoundStreams = function(){
		var keys = this.soundStreamDuration.keys();
		for(var i = 0;i<this.soundStreamDuration.size; i++){
			var key = keys.next().value;
			key.instance.stop();
		}
 		this.soundStreamDuration.clear();
		this.currentSoundStreamInMovieclip = undefined;
	}
	this.stopSoundStreams = function(currentFrame){
		if(this.soundStreamDuration.size > 0){
			var keys = this.soundStreamDuration.keys();
			for(var i = 0; i< this.soundStreamDuration.size ; i++){
				var key = keys.next().value; 
				var value = this.soundStreamDuration.get(key);
				if((value.end) == currentFrame){
					key.instance.stop();
					if(this.currentSoundStreamInMovieclip == key) { this.currentSoundStreamInMovieclip = undefined; }
					this.soundStreamDuration.delete(key);
				}
			}
		}
	}

	this.computeCurrentSoundStreamInstance = function(currentFrame){
		if(this.currentSoundStreamInMovieclip == undefined){
			if(this.soundStreamDuration.size > 0){
				var keys = this.soundStreamDuration.keys();
				var maxDuration = 0;
				for(var i=0;i<this.soundStreamDuration.size;i++){
					var key = keys.next().value;
					var value = this.soundStreamDuration.get(key);
					if(value.end > maxDuration){
						maxDuration = value.end;
						this.currentSoundStreamInMovieclip = key;
					}
				}
			}
		}
	}
	this.getDesiredFrame = function(currentFrame, calculatedDesiredFrame){
		for(var frameIndex in this.actionFrames){
			if((frameIndex > currentFrame) && (frameIndex < calculatedDesiredFrame)){
				return frameIndex;
			}
		}
		return calculatedDesiredFrame;
	}

	this.syncStreamSounds = function(){
		this.stopSoundStreams(this.currentFrame);
		this.computeCurrentSoundStreamInstance(this.currentFrame);
		if(this.currentSoundStreamInMovieclip != undefined){
			var soundInstance = this.currentSoundStreamInMovieclip.instance;
			if(soundInstance.position != 0){
				var soundValue = this.soundStreamDuration.get(this.currentSoundStreamInMovieclip);
				var soundPosition = (soundValue.offset?(soundInstance.position - soundValue.offset): soundInstance.position);
				var calculatedDesiredFrame = (soundValue.start)+((soundPosition/1000) * lib.properties.fps);
				if(soundValue.loop > 1){
					calculatedDesiredFrame +=(((((soundValue.loop - soundInstance.loop -1)*soundInstance.duration)) / 1000) * lib.properties.fps);
				}
				calculatedDesiredFrame = Math.floor(calculatedDesiredFrame);
				var deltaFrame = calculatedDesiredFrame - this.currentFrame;
				if(deltaFrame >= 2){
					this.gotoAndPlayForStreamSoundSync(this.getDesiredFrame(this.currentFrame,calculatedDesiredFrame));
				}
			}
		}
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_573 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_568 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_569 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_575 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_572 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_574 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_564 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_565 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_563 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_562 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_561 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_576 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_560 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_559 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_558 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_556 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_554 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_555 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_557 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_553 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_567 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_551 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_549 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_547 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_548 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_550 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_546 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_544 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_542 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_543 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_541 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_545 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_540 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_539 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_536 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_535 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_538 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_533 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_531 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_537 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_532 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_530 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_529 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_528 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_522 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_523 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_521 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_520 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_519 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_518 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_517 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_524 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_515 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_514 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_516 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_511 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_513 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_510 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_512 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_507 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_505 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_508 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_504 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_506 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_503 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_509 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_500 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_499 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_501 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_502 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_498 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_495 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_496 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_497 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_492 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_493 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_494 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_491 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_489 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_490 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_485 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_487 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_488 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_484 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_486 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_482 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_483 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_481 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_478 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_480 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_475 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_476 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_479 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_477 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_474 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_471 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_472 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_468 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_473 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_469 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_467 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_470 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_466 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_462 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_463 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_465 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_464 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_460 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_458 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_461 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_459 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_457 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_455 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_456 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_454 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_453 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_448 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_452 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_447 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_446 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_445 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_444 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_451 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_441 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_443 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_442 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_566 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(126);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_440 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(127);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_431 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(128);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_433 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(129);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_438 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(130);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_439 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(131);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_430 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(132);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_429 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(133);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_425 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(134);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_428 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(135);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_424 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(136);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_426 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(137);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_422 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(138);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_427 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(139);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_421 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(140);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_423 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(141);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_419 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(142);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_418 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(143);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_416 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(144);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_413 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(145);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_420 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(146);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_410 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(147);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_407 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(148);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_414 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(149);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_415 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(150);
}).prototype = p = new cjs.Sprite();



(lib.بادنجان12x = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(151);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_406 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(152);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(153);
}).prototype = p = new cjs.Sprite();



(lib.خرشوف22x = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(154);
}).prototype = p = new cjs.Sprite();



(lib.Asset2 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(155);
}).prototype = p = new cjs.Sprite();



(lib._46092Converted = function() {
	this.initialize(img._46092Converted);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2491,1808);


(lib.CachedBmp_449 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(156);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_450 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(157);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_405 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(158);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_404 = function() {
	this.initialize(ss["qisas dnd_atlas_1"]);
	this.gotoAndStop(159);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.yakt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_576();
	this.instance.setTransform(-1.5,-1.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,231.5,104);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_575();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,11,15);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_574();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.5,17);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_573();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14,17);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_572();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.5,15);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_575();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,11,15);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_574();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.5,17);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_569();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14.5,17);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_568();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,10,13.5);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_450();
	this.instance.setTransform(-46.5,-43.85,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_449();
	this.instance_1.setTransform(-43.4,-40.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(-46.5,-43.8,93,88), null);


(lib.scorebarre = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Asset2();
	this.instance.setTransform(0,0,1.3552,0.6137);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.scorebarre, new cjs.Rectangle(0,0,777.9,84.1), null);


(lib.kharch = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_567();
	this.instance.setTransform(-1.5,-1.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,231.5,104);


(lib.Im3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(0,-157);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Im3, new cjs.Rectangle(0,-157,206,158), null);


(lib.Im2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.خرشوف22x();
	this.instance.setTransform(0,-173);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Im2, new cjs.Rectangle(0,-173,117,173), null);


(lib.Im1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.بادنجان12x();
	this.instance.setTransform(0,-151,0.7018,0.726);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Im1, new cjs.Rectangle(0,-151,200,151), null);


(lib.hijab = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_566();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hijab, new cjs.Rectangle(0,0,800,496), null);


(lib.CompoundPath_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_536();
	this.instance.setTransform(-0.05,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_3, new cjs.Rectangle(0,0,22.5,43), null);


(lib.Symbol4_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_452();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,14,16.5);


(lib.Symbol1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance_2 = new lib.CachedBmp_451();
	this.instance_2.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,15.5,19);


(lib.droped = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// Layer_3
	this.instance = new lib.CachedBmp_422();
	this.instance.setTransform(39.35,27.35,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_433();
	this.instance_1.setTransform(57.8,49.15,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_433();
	this.instance_2.setTransform(31,48.85,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_431();
	this.instance_3.setTransform(38.85,34.85,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_430();
	this.instance_4.setTransform(35.25,33.1,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_429();
	this.instance_5.setTransform(30.3,35.2,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_428();
	this.instance_6.setTransform(30.45,36.6,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_427();
	this.instance_7.setTransform(62.85,37.05,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_426();
	this.instance_8.setTransform(59.65,33.65,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_425();
	this.instance_9.setTransform(55.5,33.9,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_424();
	this.instance_10.setTransform(53,36.6,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_423();
	this.instance_11.setTransform(43.2,56.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1}]},2).wait(1));

	// Layer_1
	this.instance_12 = new lib.CachedBmp_450();
	this.instance_12.setTransform(0.55,-0.5,0.5,0.5);

	this.instance_13 = new lib.CachedBmp_438();
	this.instance_13.setTransform(3.6,2.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12}]}).to({state:[{t:this.instance_12},{t:this.instance_13}]},1).to({state:[{t:this.instance_12},{t:this.instance_13}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0.6,-0.5,93,88);


(lib.draged5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.CachedBmp_419();
	this.instance.setTransform(37.4,37.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// flash0.ai
	this.instance_1 = new lib.CachedBmp_421();
	this.instance_1.setTransform(-0.05,0.05,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_420();
	this.instance_2.setTransform(3.05,2.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.draged5, new cjs.Rectangle(0,0.1,93,88), null);


(lib.draged4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.CachedBmp_416();
	this.instance.setTransform(40.1,35.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// flash0.ai
	this.instance_1 = new lib.CachedBmp_418();
	this.instance_1.setTransform(-0.05,0.05,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_420();
	this.instance_2.setTransform(3.05,2.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.draged4, new cjs.Rectangle(0,0.1,93,88), null);


(lib.draged3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.CachedBmp_413();
	this.instance.setTransform(31,28.4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// flash0.ai
	this.instance_1 = new lib.CachedBmp_415();
	this.instance_1.setTransform(-0.05,0.05,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_414();
	this.instance_2.setTransform(3.05,2.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.draged3, new cjs.Rectangle(0,0.1,93,88), null);


(lib.draged2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.CachedBmp_410();
	this.instance.setTransform(31.35,38.65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// flash0.ai
	this.instance_1 = new lib.CachedBmp_415();
	this.instance_1.setTransform(-0.05,0.05,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_414();
	this.instance_2.setTransform(3.05,2.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.draged2, new cjs.Rectangle(0,0.1,93,88), null);


(lib.draged1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.CachedBmp_407();
	this.instance.setTransform(41.15,30.4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// flash0.ai
	this.instance_1 = new lib.CachedBmp_450();
	this.instance_1.setTransform(0,0,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_449();
	this.instance_2.setTransform(3.05,2.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.draged1, new cjs.Rectangle(0,0,93,88), null);


(lib.badin = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_405();
	this.instance.setTransform(18.65,10.5,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_404();
	this.instance_1.setTransform(-1.5,-1.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,231.5,104);


(lib.nojoum = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
		this.visible = false
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(36));

	// flash0.ai
	this.instance = new lib.Symbol1_1("synched",0);
	this.instance.setTransform(-46.6,21.05,1,1,0,0,0,7.7,9.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:-68.6,y:33.05},20).to({_off:true},15).wait(1));

	// flash0.ai
	this.instance_1 = new lib.Symbol2("synched",0);
	this.instance_1.setTransform(-5.75,5.4,1,1,0,0,0,5,6.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({x:9.25,y:-6.6},19).to({_off:true},15).wait(1));

	// flash0.ai
	this.instance_2 = new lib.Symbol3("synched",0);
	this.instance_2.setTransform(-16.25,-11.65,1,1,0,0,0,7.1,8.4);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2).to({_off:false},0).to({x:-10.25,y:-30.65},18).to({_off:true},15).wait(1));

	// flash0.ai
	this.instance_3 = new lib.Symbol4_1("synched",0);
	this.instance_3.setTransform(-24,6.65,1,1,0,0,0,7,8.2);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(3).to({_off:false},0).to({y:-3.35},17).to({_off:true},15).wait(1));

	// flash0.ai
	this.instance_4 = new lib.Symbol5("synched",0);
	this.instance_4.setTransform(-13.95,44.25,1,1,0,0,0,7.1,8.4);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(4).to({_off:false},0).to({x:-3.95,y:63.25},16).to({_off:true},15).wait(1));

	// flash0.ai
	this.instance_5 = new lib.Symbol6("synched",0);
	this.instance_5.setTransform(-3.65,22.9,1,1,0,0,0,5.4,7.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(5).to({_off:false},0).to({x:18.35,y:24.9},15).to({_off:true},15).wait(1));

	// flash0.ai
	this.instance_6 = new lib.Symbol7("synched",0);
	this.instance_6.setTransform(-22.3,25.95,1,1,0,0,0,7.2,7.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(6).to({_off:false},0).to({y:37.95},14).to({_off:true},15).wait(1));

	// flash0.ai
	this.instance_7 = new lib.Symbol8("synched",0);
	this.instance_7.setTransform(-35.75,46,1,1,0,0,0,6.9,8.4);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(7).to({_off:false},0).to({x:-38.75,y:66},13).to({_off:true},15).wait(1));

	// flash0.ai
	this.instance_8 = new lib.Symbol9("synched",0);
	this.instance_8.setTransform(-31.9,-11.65,1,1,0,0,0,7.1,8.4);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(8).to({_off:false},0).to({x:-43.9,y:-29.65},12).to({_off:true},15).wait(1));

	// flash0.ai
	this.instance_9 = new lib.Symbol10("synched",0);
	this.instance_9.setTransform(-44.35,0.15,1,1,0,0,0,5.4,7.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(9).to({_off:false},0).to({x:-58.35,y:-11.85},11).to({_off:true},15).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.3,-39,100.3,113.6);


(lib.khorchMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_14 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(1));

	// Layer_1
	this.nojom = new lib.nojoum();
	this.nojom.name = "nojom";
	this.nojom.setTransform(-3.9,-0.9,1,1,0,0,0,-46.6,21.1);

	this.instance = new lib.kharch("synched",0);
	this.instance.setTransform(-12.05,2.05,0.755,0.5644,0,0,0,114.2,50.5);
	this.instance.alpha = 0.0117;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.nojom}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},13).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({alpha:1},13).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.3,-27.2,174.8,58.7);


(lib.grapghayma = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_565();
	this.instance.setTransform(7.7,21.5,0.3953,0.3953);

	this.instance_1 = new lib.CachedBmp_564();
	this.instance_1.setTransform(7.7,21.5,0.3953,0.3953);

	this.instance_2 = new lib.CachedBmp_563();
	this.instance_2.setTransform(19.95,0,0.3953,0.3953);

	this.instance_3 = new lib.CachedBmp_562();
	this.instance_3.setTransform(20.9,35.7,0.3953,0.3953);

	this.instance_4 = new lib.CompoundPath_3();
	this.instance_4.setTransform(10.7,35.75,0.0581,0.0588,0,0,0,10.3,25.6);
	this.instance_4.alpha = 0.4688;

	this.instance_5 = new lib.CachedBmp_561();
	this.instance_5.setTransform(16.4,34.1,0.3953,0.3953);

	this.instance_6 = new lib.CachedBmp_560();
	this.instance_6.setTransform(18.95,32,0.3953,0.3953);

	this.instance_7 = new lib.CachedBmp_559();
	this.instance_7.setTransform(13.65,35.65,0.3953,0.3953);

	this.instance_8 = new lib.CachedBmp_558();
	this.instance_8.setTransform(14.9,29.4,0.3953,0.3953);

	this.instance_9 = new lib.CachedBmp_557();
	this.instance_9.setTransform(12.3,32.1,0.3953,0.3953);

	this.instance_10 = new lib.CachedBmp_556();
	this.instance_10.setTransform(21.95,26.6,0.3953,0.3953);

	this.instance_11 = new lib.CachedBmp_555();
	this.instance_11.setTransform(20.75,26.6,0.3953,0.3953);

	this.instance_12 = new lib.CachedBmp_554();
	this.instance_12.setTransform(24.25,20.65,0.3953,0.3953);

	this.instance_13 = new lib.CachedBmp_553();
	this.instance_13.setTransform(23.75,17.1,0.3953,0.3953);

	this.instance_14 = new lib.CachedBmp_553();
	this.instance_14.setTransform(6.3,17.3,0.3953,0.3953);

	this.instance_15 = new lib.CachedBmp_551();
	this.instance_15.setTransform(0,15.4,0.3953,0.3953);

	this.instance_16 = new lib.CachedBmp_550();
	this.instance_16.setTransform(27.55,21.65,0.3953,0.3953);

	this.instance_17 = new lib.CachedBmp_549();
	this.instance_17.setTransform(18.7,10.9,0.3953,0.3953);

	this.instance_18 = new lib.CachedBmp_548();
	this.instance_18.setTransform(12.9,11,0.3953,0.3953);

	this.instance_19 = new lib.CachedBmp_547();
	this.instance_19.setTransform(14.8,19.95,0.3953,0.3953);

	this.instance_20 = new lib.CachedBmp_546();
	this.instance_20.setTransform(19.95,0,0.3953,0.3953);

	this.instance_21 = new lib.CachedBmp_545();
	this.instance_21.setTransform(19.7,16.1,0.3953,0.3953);

	this.instance_22 = new lib.CachedBmp_544();
	this.instance_22.setTransform(20.2,15.55,0.3953,0.3953);

	this.instance_23 = new lib.CachedBmp_543();
	this.instance_23.setTransform(19.15,14.5,0.3953,0.3953);

	this.instance_24 = new lib.CachedBmp_542();
	this.instance_24.setTransform(11,16.2,0.3953,0.3953);

	this.instance_25 = new lib.CachedBmp_541();
	this.instance_25.setTransform(11.5,15.65,0.3953,0.3953);

	this.instance_26 = new lib.CachedBmp_540();
	this.instance_26.setTransform(10.45,14.6,0.3953,0.3953);

	this.instance_27 = new lib.CachedBmp_539();
	this.instance_27.setTransform(29.85,15.25,0.3953,0.3953);

	this.instance_28 = new lib.CachedBmp_538();
	this.instance_28.setTransform(27.55,21.65,0.3953,0.3953);

	this.instance_29 = new lib.CachedBmp_537();
	this.instance_29.setTransform(0,4.7,0.3953,0.3953);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32.4,38.5);


(lib.emogiCorrEe = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_1 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Isolation Mode
	this.instance = new lib.CachedBmp_535();
	this.instance.setTransform(0,1.4,0.3953,0.3953);

	this.instance_1 = new lib.CachedBmp_535();
	this.instance_1.setTransform(-7.9,1.4,0.3953,0.3953);

	this.instance_2 = new lib.CachedBmp_533();
	this.instance_2.setTransform(-1.5,-1.05,0.3953,0.3953);

	this.instance_3 = new lib.CachedBmp_532();
	this.instance_3.setTransform(-6.1,-1.2,0.3953,0.3953);

	this.instance_4 = new lib.CachedBmp_531();
	this.instance_4.setTransform(-4.1,3.2,0.3953,0.3953);

	this.instance_5 = new lib.CachedBmp_530();
	this.instance_5.setTransform(-1.55,1.5,0.3953,0.3953);

	this.instance_6 = new lib.CachedBmp_529();
	this.instance_6.setTransform(-1.3,1.2,0.3953,0.3953);

	this.instance_7 = new lib.CachedBmp_528();
	this.instance_7.setTransform(-1.8,0.6,0.3953,0.3953);

	this.instance_8 = new lib.CachedBmp_530();
	this.instance_8.setTransform(-5.8,1.5,0.3953,0.3953);

	this.instance_9 = new lib.CachedBmp_529();
	this.instance_9.setTransform(-5.55,1.2,0.3953,0.3953);

	this.instance_10 = new lib.CachedBmp_528();
	this.instance_10.setTransform(-6.05,0.6,0.3953,0.3953);

	this.instance_11 = new lib.CachedBmp_524();
	this.instance_11.setTransform(-11.75,-5.05,0.3953,0.3953);

	this.instance_12 = new lib.CachedBmp_523();
	this.instance_12.setTransform(-11.55,-4.55,0.3953,0.3953);

	this.instance_13 = new lib.grapghayma("synched",0);
	this.instance_13.setTransform(-7.75,1.35,1,1,0,0,0,16.1,19.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_13}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.8,-17.8,32.4,38.400000000000006);


(lib.emogiCorr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_7 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(1));

	// Layer_1
	this.instance = new lib.CachedBmp_462();
	this.instance.setTransform(16.55,17.7,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_461();
	this.instance_1.setTransform(9.9,17.85,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_460();
	this.instance_2.setTransform(15.6,14.95,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_459();
	this.instance_3.setTransform(9.9,14.85,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_458();
	this.instance_4.setTransform(17.35,19.25,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_457();
	this.instance_5.setTransform(8.45,19.55,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_456();
	this.instance_6.setTransform(12.25,19.95,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_455();
	this.instance_7.setTransform(16.15,17.1,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_454();
	this.instance_8.setTransform(9.45,17.3,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_453();
	this.instance_9.setTransform(6,11.25,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_492();
	this.instance_10.setTransform(13.25,16.05,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_491();
	this.instance_11.setTransform(3.95,16.3,0.5,0.5);

	this.instance_12 = new lib.CachedBmp_490();
	this.instance_12.setTransform(11.9,11.7,0.5,0.5);

	this.instance_13 = new lib.CachedBmp_489();
	this.instance_13.setTransform(3.9,11.6,0.5,0.5);

	this.instance_14 = new lib.CachedBmp_488();
	this.instance_14.setTransform(14.4,18.45,0.5,0.5);

	this.instance_15 = new lib.CachedBmp_487();
	this.instance_15.setTransform(1.85,18.95,0.5,0.5);

	this.instance_16 = new lib.CachedBmp_486();
	this.instance_16.setTransform(7.15,19.5,0.5,0.5);

	this.instance_17 = new lib.CachedBmp_485();
	this.instance_17.setTransform(12.7,15.15,0.5,0.5);

	this.instance_18 = new lib.CachedBmp_484();
	this.instance_18.setTransform(3.3,15.4,0.5,0.5);

	this.instance_19 = new lib.CachedBmp_483();
	this.instance_19.setTransform(-1.55,6,0.5,0.5);

	this.instance_20 = new lib.CachedBmp_482();
	this.instance_20.setTransform(-1.75,26.55,0.5,0.5);

	this.instance_21 = new lib.CachedBmp_481();
	this.instance_21.setTransform(-3.4,24.05,0.5,0.5);

	this.instance_22 = new lib.CachedBmp_480();
	this.instance_22.setTransform(-8.6,12.25,0.5,0.5);

	this.instance_23 = new lib.CachedBmp_479();
	this.instance_23.setTransform(-4.25,8.4,0.5,0.5);

	this.instance_24 = new lib.CachedBmp_478();
	this.instance_24.setTransform(-5.95,16.75,0.5,0.5);

	this.instance_25 = new lib.CachedBmp_477();
	this.instance_25.setTransform(-7.6,20.7,0.5,0.5);

	this.instance_26 = new lib.CachedBmp_476();
	this.instance_26.setTransform(20.2,19.45,0.5,0.5);

	this.instance_27 = new lib.CachedBmp_475();
	this.instance_27.setTransform(3.3,28.5,0.5,0.5);

	this.instance_28 = new lib.CachedBmp_474();
	this.instance_28.setTransform(18.95,22.95,0.5,0.5);

	this.instance_29 = new lib.CachedBmp_473();
	this.instance_29.setTransform(16.6,26,0.5,0.5);

	this.instance_30 = new lib.CachedBmp_472();
	this.instance_30.setTransform(9.35,29,0.5,0.5);

	this.instance_31 = new lib.CachedBmp_471();
	this.instance_31.setTransform(13.7,28.3,0.5,0.5);

	this.instance_32 = new lib.CachedBmp_470();
	this.instance_32.setTransform(-3.45,3.9,0.5,0.5);

	this.instance_33 = new lib.CachedBmp_469();
	this.instance_33.setTransform(20.55,15.45,0.5,0.5);

	this.instance_34 = new lib.CachedBmp_468();
	this.instance_34.setTransform(19.9,10.6,0.5,0.5);

	this.instance_35 = new lib.CachedBmp_467();
	this.instance_35.setTransform(18,5.75,0.5,0.5);

	this.instance_36 = new lib.CachedBmp_466();
	this.instance_36.setTransform(2.2,2.9,0.5,0.5);

	this.instance_37 = new lib.CachedBmp_465();
	this.instance_37.setTransform(6.5,-0.5,0.5,0.5);

	this.instance_38 = new lib.CachedBmp_464();
	this.instance_38.setTransform(14.55,0.6,0.5,0.5);

	this.instance_39 = new lib.CachedBmp_463();
	this.instance_39.setTransform(10.6,-0.05,0.5,0.5);

	this.instance_40 = new lib.Symbol4("synched",0);
	this.instance_40.setTransform(11.3,15.3,0.701,0.701,0,0,0,16.8,16.9);

	this.instance_41 = new lib.CachedBmp_522();
	this.instance_41.setTransform(18.35,15.65,0.5,0.5);

	this.instance_42 = new lib.CachedBmp_521();
	this.instance_42.setTransform(9.8,15.85,0.5,0.5);

	this.instance_43 = new lib.CachedBmp_520();
	this.instance_43.setTransform(17.1,11.65,0.5,0.5);

	this.instance_44 = new lib.CachedBmp_519();
	this.instance_44.setTransform(9.8,11.6,0.5,0.5);

	this.instance_45 = new lib.CachedBmp_518();
	this.instance_45.setTransform(19.4,17.85,0.5,0.5);

	this.instance_46 = new lib.CachedBmp_517();
	this.instance_46.setTransform(7.95,18.3,0.5,0.5);

	this.instance_47 = new lib.CachedBmp_516();
	this.instance_47.setTransform(12.8,18.85,0.5,0.5);

	this.instance_48 = new lib.CachedBmp_515();
	this.instance_48.setTransform(17.85,14.85,0.5,0.5);

	this.instance_49 = new lib.CachedBmp_514();
	this.instance_49.setTransform(9.25,15.05,0.5,0.5);

	this.instance_50 = new lib.CachedBmp_513();
	this.instance_50.setTransform(4.8,6.5,0.5,0.5);

	this.instance_51 = new lib.CachedBmp_512();
	this.instance_51.setTransform(1.7,23.35,0.5,0.5);

	this.instance_52 = new lib.CachedBmp_511();
	this.instance_52.setTransform(1.35,20.55,0.5,0.5);

	this.instance_53 = new lib.CachedBmp_510();
	this.instance_53.setTransform(-0.1,8.65,0.5,0.5);

	this.instance_54 = new lib.CachedBmp_509();
	this.instance_54.setTransform(4.75,5.95,0.5,0.5);

	this.instance_55 = new lib.CachedBmp_508();
	this.instance_55.setTransform(1.1,13.25,0.5,0.5);

	this.instance_56 = new lib.CachedBmp_507();
	this.instance_56.setTransform(-1.5,17.1,0.5,0.5);

	this.instance_57 = new lib.CachedBmp_506();
	this.instance_57.setTransform(23.7,21.6,0.5,0.5);

	this.instance_58 = new lib.CachedBmp_505();
	this.instance_58.setTransform(5.65,25.95,0.5,0.5);

	this.instance_59 = new lib.CachedBmp_504();
	this.instance_59.setTransform(21.8,24.3,0.5,0.5);

	this.instance_60 = new lib.CachedBmp_503();
	this.instance_60.setTransform(19,26.5,0.5,0.5);

	this.instance_61 = new lib.CachedBmp_502();
	this.instance_61.setTransform(10.7,27.55,0.5,0.5);

	this.instance_62 = new lib.CachedBmp_501();
	this.instance_62.setTransform(15.7,27.85,0.5,0.5);

	this.instance_63 = new lib.CachedBmp_500();
	this.instance_63.setTransform(6.45,2.2,0.5,0.5);

	this.instance_64 = new lib.CachedBmp_499();
	this.instance_64.setTransform(24.9,18.4,0.5,0.5);

	this.instance_65 = new lib.CachedBmp_498();
	this.instance_65.setTransform(25.2,14.55,0.5,0.5);

	this.instance_66 = new lib.CachedBmp_497();
	this.instance_66.setTransform(24.45,9.75,0.5,0.5);

	this.instance_67 = new lib.CachedBmp_496();
	this.instance_67.setTransform(11.75,2.65,0.5,0.5);

	this.instance_68 = new lib.CachedBmp_495();
	this.instance_68.setTransform(15.5,0.7,0.5,0.5);

	this.instance_69 = new lib.CachedBmp_494();
	this.instance_69.setTransform(22.1,4.25,0.5,0.5);

	this.instance_70 = new lib.CachedBmp_493();
	this.instance_70.setTransform(18.85,2.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10}]},4).to({state:[{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.6,-0.5,38.8,36);


(lib.dragedcopy10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.CachedBmp_448();
	this.instance.setTransform(35.4,29.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// flash0.ai
	this.instance_1 = new lib.Symbol1("synched",0);
	this.instance_1.setTransform(45.9,43.8,1,1,0,0,0,-0.6,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dragedcopy10, new cjs.Rectangle(0,0.1,93,88), null);


(lib.dragedcopy9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.CachedBmp_447();
	this.instance.setTransform(23.75,19.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// flash0.ai
	this.instance_1 = new lib.Symbol1("synched",0);
	this.instance_1.setTransform(45.9,43.8,1,1,0,0,0,-0.6,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dragedcopy9, new cjs.Rectangle(0,0.1,93,88), null);


(lib.dragedcopy8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.CachedBmp_446();
	this.instance.setTransform(34.55,24.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// flash0.ai
	this.instance_1 = new lib.Symbol1("synched",0);
	this.instance_1.setTransform(45.9,43.8,1,1,0,0,0,-0.6,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dragedcopy8, new cjs.Rectangle(0,0.1,93,88), null);


(lib.dragedcopy7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.CachedBmp_445();
	this.instance.setTransform(32.35,28.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// flash0.ai
	this.instance_1 = new lib.Symbol1("synched",0);
	this.instance_1.setTransform(45.9,43.8,1,1,0,0,0,-0.6,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dragedcopy7, new cjs.Rectangle(0,0.1,93,88), null);


(lib.dragedcopy6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.CachedBmp_444();
	this.instance.setTransform(38.05,38.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// flash0.ai
	this.instance_1 = new lib.Symbol1("synched",0);
	this.instance_1.setTransform(45.9,43.8,1,1,0,0,0,-0.6,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dragedcopy6, new cjs.Rectangle(0,0.1,93,88), null);


(lib.dragedcopy5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.CachedBmp_443();
	this.instance.setTransform(35,40.65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// flash0.ai
	this.instance_1 = new lib.Symbol1("synched",0);
	this.instance_1.setTransform(45.9,43.8,1,1,0,0,0,-0.6,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dragedcopy5, new cjs.Rectangle(0,0.1,93,88), null);


(lib.dragedcopy4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.CachedBmp_442();
	this.instance.setTransform(28.15,23.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// flash0.ai
	this.instance_1 = new lib.Symbol1("synched",0);
	this.instance_1.setTransform(45.9,43.8,1,1,0,0,0,-0.6,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dragedcopy4, new cjs.Rectangle(0,0.1,93,88), null);


(lib.dragedcopy3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.CachedBmp_441();
	this.instance.setTransform(33.9,34.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// flash0.ai
	this.instance_1 = new lib.Symbol1("synched",0);
	this.instance_1.setTransform(45.9,43.8,1,1,0,0,0,-0.6,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dragedcopy3, new cjs.Rectangle(0,0.1,93,88), null);


(lib.dragedcopy2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.CachedBmp_440();
	this.instance.setTransform(35.25,23.4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// flash0.ai
	this.instance_1 = new lib.Symbol1("synched",0);
	this.instance_1.setTransform(45.9,43.8,1,1,0,0,0,-0.6,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dragedcopy2, new cjs.Rectangle(0,0.1,93,88), null);


(lib.dragedcopy1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.CachedBmp_439();
	this.instance.setTransform(26,29.2,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// flash0.ai
	this.instance_1 = new lib.Symbol1("synched",0);
	this.instance_1.setTransform(45.9,43.8,1,1,0,0,0,-0.6,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dragedcopy1, new cjs.Rectangle(0,0.1,93,88), null);


(lib.draged = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.CachedBmp_406();
	this.instance.setTransform(38.15,26.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// flash0.ai
	this.instance_1 = new lib.Symbol1("synched",0);
	this.instance_1.setTransform(45.9,43.8,1,1,0,0,0,-0.6,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.draged, new cjs.Rectangle(0,0.1,93,88), null);


(lib.Mcdnd2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.fdndbb = new lib.dragedcopy10();
	this.fdndbb.name = "fdndbb";
	this.fdndbb.setTransform(290.9,455.1,0.6083,0.5597,0,0,0,46,43.9);

	this.gdndcc = new lib.dragedcopy9();
	this.gdndcc.name = "gdndcc";
	this.gdndcc.setTransform(355.05,455.7,0.6083,0.5597,0,0,0,46.1,43.9);

	this.wdndaa = new lib.dragedcopy8();
	this.wdndaa.name = "wdndaa";
	this.wdndaa.setTransform(418.65,455.85,0.6083,0.5597,0,0,0,46,43.9);

	this.gdndee = new lib.dragedcopy7();
	this.gdndee.name = "gdndee";
	this.gdndee.setTransform(484,456.2,0.6083,0.5597,0,0,0,46.8,43.5);

	this.jdnddd = new lib.dragedcopy6();
	this.jdnddd.name = "jdnddd";
	this.jdnddd.setTransform(548.5,456.2,0.6083,0.5597,0,0,0,46.7,43.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.jdnddd},{t:this.gdndee},{t:this.wdndaa},{t:this.gdndcc},{t:this.fdndbb}]}).wait(1));

	// Layer_3
	this.kalima = new lib.khorchMc();
	this.kalima.name = "kalima";
	this.kalima.setTransform(410,249.05);

	this.timeline.addTween(cjs.Tween.get(this.kalima).wait(1));

	// Layer_20
	this.jtrgaa = new lib.droped();
	this.jtrgaa.name = "jtrgaa";
	this.jtrgaa.setTransform(548.55,360.3,0.6128,0.5612,0,0,0,47.1,43.6);

	this.timeline.addTween(cjs.Tween.get(this.jtrgaa).wait(1));

	// Layer_19
	this.atrgbb = new lib.droped();
	this.atrgbb.name = "atrgbb";
	this.atrgbb.setTransform(486.1,359.4,0.6128,0.5612,0,0,0,47,43.4);

	this.timeline.addTween(cjs.Tween.get(this.atrgbb).wait(1));

	// Layer_18
	this.btrgcc = new lib.droped();
	this.btrgcc.name = "btrgcc";
	this.btrgcc.setTransform(422,360.3,0.6128,0.5612,0,0,0,47,43.6);

	this.timeline.addTween(cjs.Tween.get(this.btrgcc).wait(1));

	// Layer_17
	this.ctrgdd = new lib.droped();
	this.ctrgdd.name = "ctrgdd";
	this.ctrgdd.setTransform(358.8,360.3,0.6128,0.5612,0,0,0,47,43.6);

	this.timeline.addTween(cjs.Tween.get(this.ctrgdd).wait(1));

	// Layer_16
	this.vtrgee = new lib.droped();
	this.vtrgee.name = "vtrgee";
	this.vtrgee.setTransform(295.55,359.4,0.6128,0.5612,0,0,0,47,43.4);

	this.timeline.addTween(cjs.Tween.get(this.vtrgee).wait(1));

	// Layer_1
	this.imgIntro = new lib.Im2();
	this.imgIntro.name = "imgIntro";
	this.imgIntro.setTransform(-3.8,19.8,0.8435,0.8333,0,0,0,-4.5,2);

	this.timeline.addTween(cjs.Tween.get(this.imgIntro).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Mcdnd2, new cjs.Rectangle(0,-126,577.1,607.1), null);


(lib.badinmc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_14 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(1));

	// Layer_1
	this.nojom = new lib.nojoum();
	this.nojom.name = "nojom";
	this.nojom.setTransform(6.05,1.1,1,1,0,0,0,-46.6,21.1);

	this.instance = new lib.badin("synched",0);
	this.instance.setTransform(0.05,-3,0.72,0.6436,0,0,0,114.3,50.4);
	this.instance.alpha = 0.0117;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.nojom}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},13).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({alpha:1},13).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.3,-36.4,166.7,67);


(lib.yakmc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_14 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(1));

	// Layer_1
	this.nojom = new lib.nojoum();
	this.nojom.name = "nojom";
	this.nojom.setTransform(-0.95,-4.9,1,1,0,0,0,-46.6,21.1);

	this.instance = new lib.yakt("synched",0);
	this.instance.setTransform(29.05,0.05,0.6326,0.6436,0,0,0,114.3,50.5);
	this.instance.alpha = 0.0117;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.nojom}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},13).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).to({alpha:1},13).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-44.1,-33.4,146.4,67);


(lib.Mcdnd0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.kalima = new lib.yakmc();
	this.kalima.name = "kalima";
	this.kalima.setTransform(393,247.05);

	this.timeline.addTween(cjs.Tween.get(this.kalima).wait(1));

	// draged
	this.ddnddd = new lib.dragedcopy5();
	this.ddnddd.name = "ddnddd";
	this.ddnddd.setTransform(293.8,453.25,0.6029,0.5731,0,0,0,46.7,43.5);

	this.bdndbb = new lib.dragedcopy4();
	this.bdndbb.name = "bdndbb";
	this.bdndbb.setTransform(357,454.1,0.6029,0.5731,0,0,0,46.1,43.9);

	this.adndaa = new lib.dragedcopy3();
	this.adndaa.name = "adndaa";
	this.adndaa.setTransform(420.4,454,0.6029,0.5731,0,0,0,46.6,43.5);

	this.edndee = new lib.dragedcopy2();
	this.edndee.name = "edndee";
	this.edndee.setTransform(484.45,454.75,0.6029,0.5731,0,0,0,46.1,43.9);

	this.cdndcc = new lib.dragedcopy1();
	this.cdndcc.name = "cdndcc";
	this.cdndcc.setTransform(548.3,454.85,0.6029,0.5731,0,0,0,46,43.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.cdndcc},{t:this.edndee},{t:this.adndaa},{t:this.bdndbb},{t:this.ddnddd}]}).wait(1));

	// Layer_20
	this.jtrgaa = new lib.droped();
	this.jtrgaa.name = "jtrgaa";
	this.jtrgaa.setTransform(548.8,356.3,0.6074,0.5746,0,0,0,47,43.4);

	this.timeline.addTween(cjs.Tween.get(this.jtrgaa).wait(1));

	// Layer_19
	this.atrgbb = new lib.droped();
	this.atrgbb.name = "atrgbb";
	this.atrgbb.setTransform(486.95,355.45,0.6074,0.5746,0,0,0,47.1,43.4);

	this.timeline.addTween(cjs.Tween.get(this.atrgbb).wait(1));

	// Layer_18
	this.btrgcc = new lib.droped();
	this.btrgcc.name = "btrgcc";
	this.btrgcc.setTransform(423.45,356.3,0.6074,0.5746,0,0,0,47.1,43.4);

	this.timeline.addTween(cjs.Tween.get(this.btrgcc).wait(1));

	// Layer_17
	this.ctrgdd = new lib.droped();
	this.ctrgdd.name = "ctrgdd";
	this.ctrgdd.setTransform(360.7,356.3,0.6074,0.5746,0,0,0,47,43.4);

	this.timeline.addTween(cjs.Tween.get(this.ctrgdd).wait(1));

	// Layer_16
	this.vtrgee = new lib.droped();
	this.vtrgee.name = "vtrgee";
	this.vtrgee.setTransform(298.05,355.45,0.6074,0.5746,0,0,0,47,43.4);

	this.timeline.addTween(cjs.Tween.get(this.vtrgee).wait(1));

	// Layer_1
	this.imgIntro = new lib.Im3();
	this.imgIntro.name = "imgIntro";
	this.imgIntro.setTransform(0,6.05,0.836,0.8533);

	this.timeline.addTween(cjs.Tween.get(this.imgIntro).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Mcdnd0, new cjs.Rectangle(0,-127.9,577.1,608.1), null);


(lib.Mcdnd1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.cdndww = new lib.draged1();
	this.cdndww.name = "cdndww";
	this.cdndww.setTransform(85.4,449.35,0.7266,0.6732,0,0,0,46,43.9);

	this.adndgg = new lib.draged5();
	this.adndgg.name = "adndgg";
	this.adndgg.setTransform(162.4,449.3,0.7212,0.6716,0,0,0,46.1,43.9);

	this.zdndaa = new lib.draged4();
	this.zdndaa.name = "zdndaa";
	this.zdndaa.setTransform(238.4,450.15,0.7212,0.6716,0,0,0,46.1,43.9);

	this.rdndbb = new lib.draged3();
	this.rdndbb.name = "rdndbb";
	this.rdndbb.setTransform(313.8,450.3,0.7212,0.6716,0,0,0,46.1,43.9);

	this.fdndcc = new lib.draged2();
	this.fdndcc.name = "fdndcc";
	this.fdndcc.setTransform(390.75,450.95,0.7212,0.6716,0,0,0,46.1,43.9);

	this.adndww = new lib.draged1();
	this.adndww.name = "adndww";
	this.adndww.setTransform(466.8,451,0.7266,0.6732,0,0,0,46,43.9);

	this.zdndjj = new lib.draged();
	this.zdndjj.name = "zdndjj";
	this.zdndjj.setTransform(542.5,450.2,0.7265,0.6734,0,0,0,46,43.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.zdndjj},{t:this.adndww},{t:this.fdndcc},{t:this.rdndbb},{t:this.zdndaa},{t:this.adndgg},{t:this.cdndww}]}).wait(1));

	// Layer_15
	this.gtrggg = new lib.droped();
	this.gtrggg.name = "gtrggg";
	this.gtrggg.setTransform(543.25,335.55,0.7265,0.6734,0,0,0,47,43.4);

	this.jtrgww = new lib.droped();
	this.jtrgww.name = "jtrgww";
	this.jtrgww.setTransform(467.65,335.55,0.7265,0.6734,0,0,0,47,43.4);

	this.atrgaa = new lib.droped();
	this.atrgaa.name = "atrgaa";
	this.atrgaa.setTransform(393.65,334.6,0.7265,0.6734,0,0,0,47,43.5);

	this.btrgbb = new lib.droped();
	this.btrgbb.name = "btrgbb";
	this.btrgbb.setTransform(317.65,335.55,0.7265,0.6734,0,0,0,47,43.4);

	this.ctrgcc = new lib.droped();
	this.ctrgcc.name = "ctrgcc";
	this.ctrgcc.setTransform(242.7,335.55,0.7265,0.6734,0,0,0,47,43.4);

	this.vtrgww = new lib.droped();
	this.vtrgww.name = "vtrgww";
	this.vtrgww.setTransform(167.7,334.6,0.7265,0.6734,0,0,0,47,43.5);

	this.jtrgjj = new lib.droped();
	this.jtrgjj.name = "jtrgjj";
	this.jtrgjj.setTransform(92.75,335.55,0.7265,0.6734,0,0,0,47.1,43.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.jtrgjj},{t:this.vtrgww},{t:this.ctrgcc},{t:this.btrgbb},{t:this.atrgaa},{t:this.jtrgww},{t:this.gtrggg}]}).wait(1));

	// kalima
	this.kalima = new lib.badinmc();
	this.kalima.name = "kalima";
	this.kalima.setTransform(318,211.05);

	this.timeline.addTween(cjs.Tween.get(this.kalima).wait(1));

	// Layer_1
	this.imgIntro = new lib.Im1();
	this.imgIntro.name = "imgIntro";
	this.imgIntro.setTransform(-3.65,0.7,0.8103,0.8388,0,0,0,-4.5,2);

	this.timeline.addTween(cjs.Tween.get(this.imgIntro).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Mcdnd1, new cjs.Rectangle(0,-127.6,577.1,608.3), null);


// stage content:
(lib.qisasdnd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.clearAllSoundStreams();
		 
		var that = this
		
		
		var currentpage = 0;
		var numOfQ = 3
		var myListofArraysFaul = [
			[],
			[],
			[]
		];
		
		var autorizedSingleQ = 3;
		
		var from_checkPrecedentQ = false
		
		
		
		var allQ_pages = [
			[],
			[],
			[]
		];
		
		
		
		that.hijab.addEventListener('click', startfirst)
		function startfirst(e) {
		
			startSession()
		
		}
		
		
		var cont = new createjs.Container();
		that.addChildAt(cont, 1)
		
		
		
		var emoErrArray = []
		var emoCorrArray = []
		
		setTimeout(function () {
		
			getEmo();
		
		
		}, 10);
		
		
		function getEmo() {
		
		
			var parent = that;
			var keys = Object.keys(parent);
			var len = keys.length;
		
			while (--len) {
		
		
				if (keys[len].slice(0, 4) == ("emoC")) {
		
					parent[keys[len]].name = keys[len];
		
					emoCorrArray.push(parent[keys[len]]);
		
		
		
		
				}
		
				if (keys[len].slice(0, 4) == ("emoE")) {
		
					parent[keys[len]].name = keys[len];
		
					emoErrArray.push(parent[keys[len]]);
		
		
		
				}
		
		
			}
		
			sortbyName(emoErrArray)
			sortbyName(emoCorrArray)
		
			console.log('after sort', emoErrArray)
		}
		
		
		function sortbyName(arr) {
		
			arr.sort(function (a, b) {
				if (a.name < b.name) {
					return -1;
				}
				if (a.name > b.name) {
					return 1;
				}
				return 0;
		
			})
		
		
		}
		
		
		function gameOver() {
		
			console.log('+++++++++++++++++game over+++++++++++++++++++')
			cont.mc.mouseEnabled = false
		}
		
		function checkGameOver() {
		
			if (lengOfLists(myListofArraysFaul) == emoErrArray.length) {
		
		
		
				gameOver()
			}
		
		}
		function showNumOfemoError() {
		
			for (var i = lengOfLists(myListofArraysFaul) - 1; i > lengOfLists(myListofArraysFaul) - 4; i--) {
		
				createjs.Tween.get(emoErrArray[i]).to({
					rotation: 360
				}, 1000);
		
			}
		
		}
		function showResu(bool) {
		
			if (bool) {
		
				var sm = sumInner(allQ_pages)
				console.log('sumInner(allQ_pages)', sm)
				emoCorrArray[sm].gotoAndPlay(1)
		
			} else {
		
		
		
				console.log('lengOfLists(myListofArraysFaul)', lengOfLists(myListofArraysFaul))
				emoErrArray[lengOfLists(myListofArraysFaul)].gotoAndPlay(1)
		
			}
		}
		
		function sumInner(lists) {
		
			var total = 0;
			for (var i = 0; i < lists.length; i++) {
				console.log('sumInner first loop', i)
				for (var j = 0; j < lists[i].length; j++) {
					total += lists[i][j];
				}
		
			}
			return total
		}
		
		
		function lengOfLists(lists) {
		
		
			var lengths = 0;
		
			for (var i = 0; i < lists.length; i++) {
		
				lengths = lengths + lists[i].length
		
			}
			return lengths
		}
		
		
		
		
		
		function startSession() {
		
			createjs.Sound.stop()
		
			cont.removeAllChildren()
		
			cont.mc = new lib['Mcdnd' + currentpage]();
			cont.mc.name = 'Mcdnd' + currentpage;
		
			console.log('Mcdnd' + currentpage)
			cont.mc.x = lib.properties["width"] / 2 - (cont.mc.getBounds().width / 2);
			cont.mc.y = lib.properties["height"] / 2 - (cont.mc.getBounds().height / 2);
		
		
			var ind = that.getChildIndex(that.scoreBoard)
			that.addChildAt(cont, ind)
		
		
			getElementAndAlpha_mc(cont.mc);
		
		
			setTimeout(function () {
		
		
		
				cont.addChild(cont.mc);
				animeImage()
				dnd_Manager(cont.mc)
		
			}, 20);
		
		
		
		
		
		
		}
		
		
		var draggedArray = []
		var dropArray = []
		
			function getElementAndAlpha_mc(dndMc) {
		
				draggedArray = []
				dropArray = []
		
				setTimeout(function () {
		
					getDrag();
		
		
				}, 10);
		
		
		
				function getDrag() {
		
					console.log('getElementAndAlpha_mc ', dndMc)
					var parent = dndMc;
					var keys = Object.keys(parent);
					var len = keys.length;
		
					while (--len) {
		
		
						if (keys[len].slice(1, 4) == ("dnd")) {
		
		
		
							parent[keys[len]].name = keys[len];
		
							//parent[keys[len]].regX = parent[keys[len]].width / 2;
							//parent[keys[len]].regY = parent[keys[len]].height / 2;
		
							parent[keys[len]].startx = parent[keys[len]].x;
							parent[keys[len]].starty = parent[keys[len]].y;
		
		
							parent[keys[len]].alpha = 0
							draggedArray.push(parent[keys[len]]);
		
		
		
						} else if (keys[len].slice(1, 4) == ("trg")) {
		
		
							parent[keys[len]].name = keys[len];
							//parent[keys[len]].regX = parent[keys[len]].width / 2;
							//parent[keys[len]].regY = parent[keys[len]].height / 2;
		
							parent[keys[len]].alpha = 0
							dropArray.push(parent[keys[len]]);
		
						}
		
		
					}
		
				}
		
				dndMc.imgIntro.alpha = 0;
		
				console.log('draggedArray00', draggedArray)
			}
		
			function animeImage() {
		
				createjs.Tween.get(cont.mc.imgIntro, {
					loop: false
				})
					.to({
						alpha: 1,
						y: cont.mc.imgIntro.getBounds().height + 140
					}, 2000, createjs.Ease.getPowInOut(2)).call(addTitle)
		
			}
		
			function addTitle() {
		
		
		
				startSound('title' + 0) //('q' + currentpage)
				console.log('titleDuration', titleDuration)
		
		
				for (var u = 0; u < dropArray.length; u++) {
		
					createjs.Tween.get(dropArray[u], {
						loop: false
					}).wait((dropArray.length - u) * 50)
						.to({
							alpha: 1,
						}, 200, createjs.Ease.getPowInOut(2))
		
		
				}
		
				setTimeout(function () {
		
		
		
					initialAnime();
		
		
				}, titleDuration[0]); // titleDuration[currentpage]);
		
		
		
			}
			function initialAnime() {
		
		
		
				for (var u = 0; u < draggedArray.length; u++) {
		
		
		
					createjs.Tween.get(draggedArray[u], {
						loop: false
					}).wait(u * 500)
						.to({
							alpha: 1,
						}, 0, createjs.Ease.getPowInOut(2)).call(addSound)
		
		
				}
		
		
		
			}
		
			function addSound() {
		
				startSound('addsound')
			}
		
		
			function dnd_Manager(dndMc) {
		
				var currentHit;
				var currentHitString;
		
		
				var used_target = []
				var isCorr = false
		
				setlisteners();
		
		
				function setlisteners() {
		
					for (var u1 = 0; u1 < draggedArray.length; u1++) {
		
		
		
						draggedArray[u1].addEventListener("mousedown", onmousedown);
						draggedArray[u1].addEventListener("pressup", onpressup);
						draggedArray[u1].addEventListener("pressmove", onpressmove);
		
					}
		
		
				}
		
		
		
				function removelisteners() {
		
					for (var u1 = 0; u1 < draggedArray.length; u1++) {
		
		
		
						draggedArray[u1].removeEventListener("mousedown", onmousedown);
						draggedArray[u1].removeEventListener("pressup", onpressup);
						draggedArray[u1].removeEventListener("pressmove", onpressmove);
		
					}
		
		
				}
		
				dndMc.addEventListener("removed", onRemove);
		
				function onRemove(ev) {
					removelisteners()
					dndMc.removeEventListener("removed", onRemove);
		
				}
		
		
				function onmousedown(e) {
		
		
		
					e.nativeEvent.preventDefault();
		
					e.currentTarget.startx = e.currentTarget.x;
					e.currentTarget.starty = e.currentTarget.y;
		
		
				}
		
		
		
				function onpressmove(evt) {
		
		
					evt.nativeEvent.preventDefault();
		
		
		
					evt.currentTarget.parent.setChildIndex(evt.currentTarget, evt.currentTarget.parent.numChildren - 1);
		
					var pt = dndMc.globalToLocal(evt.stageX, evt.stageY);
		
					evt.currentTarget.x = pt.x;
					evt.currentTarget.y = pt.y;
		
		
					targetTozero();
					var isHitsome = checkHit(evt.currentTarget);
					if (isHitsome) {
		
						currentHit.gotoAndStop(1);
		
		
		
					}
					stage.update();
		
		
				}
		
		
				function onpressup(evt) {
		
					var isHit = false;
		
					isHit = checkHit(evt.currentTarget);
					if (isHit) {
						isCorr = correct(evt.currentTarget);
					}
		
					if (isHit && isCorr) {
		
						evt.currentTarget.x = currentHit.x;
						evt.currentTarget.y = currentHit.y;
		
						evt.currentTarget.mouseEnabled = false
		
						startSound('dropsound')
						currentHit.gotoAndStop(2);
		
						used_target.push(currentHitString)
		
		
					} else {
		
						returntoFirstplace(evt.currentTarget);
		
						if (isHit) {
		
							startSound('return')
		
		
							myListofArraysFaul[currentpage].push(currentHitString)
						}
					}
		
					checkGameOver()
					targetTozero();
		
		
					if (conditionChangeSess()) {
		
		
						if (sessionAfterRightResp) {
		
		
							dndMc.kalima.nojom.visible = true
							dndMc.kalima.nojom.gotoAndPlay(1)
							
							startSound('magic')
							setTimeout(function () {
		
		                		dndMc.kalima.gotoAndPlay(1)
								startSound('kalima' + currentpage)
							}, 1000);
		
		
							setTimeout(startNextSession, 4000);
		
						} else {
		
							showNumOfemoError()
							removelisteners()
							startNextSession();
						}
					}
				}
		
		
				function conditionChangeSess() {
		
					console.log('used_target', used_target)
					console.log('dropArray', dropArray)
					console.log('myListofArraysFaul[currentpage]', myListofArraysFaul[currentpage])
					console.log('allQ_pages', allQ_pages)
					if (used_target.length == dropArray.length) {
		
						showResu(true); //show Resu score befor filling the allQ_pages array
						allQ_pages[currentpage].push(1)
		
						sessionAfterRightResp = true
						return true;
					}
		
					if ((myListofArraysFaul[currentpage].length + 1) % (autorizedSingleQ + (autorizedSingleQ * allQ_pages[currentpage].length) + 1) == 0) {
		
						allQ_pages[currentpage].push(0)
						sessionAfterRightResp = false
						return true;
		
					}
		
					sessionAfterRightResp = false
					return false
				}
		
		
		
				that.hijab.addEventListener('click', startfirst)
				function startfirst(e) {
		
		
					alert('gggg')
					startSession()
		
				}
		
				function startNextSession() {
		
					console.log('from startNextSession check', from_checkPrecedentQ)
		
					if (currentpage == numOfQ - 1 || from_checkPrecedentQ) {
		
						checkPrecedentQ()
		
						return
					}
					if (allQ_pages[currentpage + 1].length == 0 || allQ_pages[currentpage + 1] == 0) {
						currentpage = currentpage + 1;
		
		
						setTimeout(function () {
		
							startSound('session')
		
						}, 1000);
		
		
						setTimeout(function () {
		
							startSession()
						}, 2500);
		
					}
		
		
		
		
				}
		
				function checkPrecedentQ() {
		
					from_checkPrecedentQ = false;
					console.log('from checkPrecedentQ : allQ_pages', allQ_pages)
					for (var i = 0; i < allQ_pages.length; i++) {
		
						if (allQ_pages[i].length == 0 || allQ_pages[i][allQ_pages[i].length - 1] == 0) {
		
							currentpage = i
		
							from_checkPrecedentQ = true;
		
							startSession();
		
							break
						}
					}
		
					if (!from_checkPrecedentQ) {
		
						alert('anihhhhaaaaya')
		
						send_statis();
					}
		
				}
		
		
		
				function send_statis() {
		
					console.log('==++++++++++++++++++++++++++++++++++++++++++++++++==')
					console.log()
					console.log('allQ_pages', allQ_pages)
		
					console.log('myListofArraysFaul', myListofArraysFaul)
				}
		
		
				function targetTozero() {
		
					for (var u = 0; u < dropArray.length; u++) {
		
						if (!used_target.includes(dropArray[u].name && dropArray[u] != currentHit)) {
		
							dropArray[u].gotoAndStop(0);
		
						}
		
					}
				}
				function correct(obj) {
		
		
					if (currentHit.name.slice(4) == obj.name.slice(4)) {
		
						//showResu(true);
						return true
		
					}
		
					showResu(false);
					return false
		
				}
		
		
				function checkHit(obj) {
		
					var lastDist = 100;
		
					currentHitString = null;
		
					currentHit = null;
		
					var rect = {
		
						x: obj.x,
						y: obj.y,
						width: obj.getTransformedBounds().width,
						height: obj.getTransformedBounds().height
					}
		
		
					for (var u = 0; u < dropArray.length; u++) {
		
		
		
						var rect2 = dropArray[u];
		
						//	if (Math.abs(rect.x - rect2.x) < (rect.width / 2 + rect2.getTransformedBounds().width / 2) && Math.abs(rect.y - rect2.y) < (rect.height / 2 + rect2.getTransformedBounds().height / 2)) {
						if (Math.abs(rect.x - rect2.x) < (rect.width / 2 + rect2.getTransformedBounds().width / 2) && Math.abs(rect.y - rect2.y) < (rect.height / 2 + rect2.getTransformedBounds().height / 2)) {
		
							if (used_target.includes(rect2.name)) {
		
								continue; //return false;
							}
		
							if (Math.abs(rect.x - rect2.x) < lastDist) {
		
		
								currentHitString = rect2.name;
		
								currentHit = rect2;
		
								lastDist = Math.abs(rect.x - rect2.x)
		
							}
		
						}
		
					}
					if (currentHit != null) {
						return true;
					}
		
					return false;
				}
		
		
				function returntoFirstplace(mc) {
		
		
		
					mc.x = mc.startx;
					mc.y = mc.starty;
		
		
				}
		
				dndMc.addEventListener("removed", onDNDRemove);
				function onDNDRemove(ev) {
		
		
					removelisteners();
					dndMc.removeEventListener("removed", onDNDRemove);
				}
		
			}
		
		
		
		var titleDuration = {}
		
		var sound_manif = [];
		
		///////////////  sound  //////////////////////
		
		
		if (!createjs.Sound.isReady()) {
			// createjs.FlashAudioPlugin.swfPath = "../src/soundjs/flashaudio/";
			createjs.Sound.registerPlugins([createjs.WebAudioPlugin, createjs.HTMLAudioPlugin, createjs.FlashAudioPlugin]);
		}
		
		
		var sound_listener = createjs.Sound.on("fileload", handleFileLoad);
		createjs.Sound.alternateExtensions = ["ogg"];
		soundIsReady = createjs.Sound.registerSounds(
			[{
				id: "title0",
				src: "title0.mp3"
			}], "mysound/");
		
		
		function handleFileLoad(event) {
			// A sound has been preloaded. This will fire multiple time
		
			if (!event.id.startsWith('title')) return;
		
			sound_manif.push(event.id);
			myInstance = createjs.Sound.createInstance(event.id);
			console.log('myInstance.duration', myInstance.duration)
			titleDuration[parseInt(event.id.slice(5))] = Math.round(myInstance.duration)
		
		
		}
		
		
		
		
		
		function startSound(sout) {
		
			console.log('sound name to ply', sout);
		
			if (sound_manif.includes(sout)) {
		
				console.log('sound_manif.includes == true');
				music_play(sout);
				return;
			}
		
		
			createjs.Sound.on("fileload", handleLoad);
			//createjs.Sound.alternateExtensions = ["ogg"];
			///createjs.Sound.addEventListener("fileload", handleLoad);
		
			soundIsReady = createjs.Sound.registerSound("mysound/" + sout + ".mp3", sout);
		
		}
		
		
		
		function handleLoad(event) {
		
			music_play(event.id);
			sound_manif.push(event.id);
		
		}
		
		
		
		
		function music_play(sound_sout) {
		
			//createjs.Sound.stop();
		
			if (soundIsReady) {
		
		
				that.music = createjs.Sound.play(sound_sout);
		
				that.music.on("complete", handleComplete);
		
		
			}
		
		}
		
		function handleComplete() {
		
			console.log('sound complete');
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// hijb
	this.emoE5 = new lib.emogiCorrEe();
	this.emoE5.name = "emoE5";
	this.emoE5.setTransform(79.2,54.3,1.0241,1.2649,0,0,0,0,0.1);

	this.emoE4 = new lib.emogiCorrEe();
	this.emoE4.name = "emoE4";
	this.emoE4.setTransform(140.1,54.3,1.0241,1.2649,0,0,0,0.1,0.1);

	this.emoE3 = new lib.emogiCorrEe();
	this.emoE3.name = "emoE3";
	this.emoE3.setTransform(200.15,54.3,1.0241,1.2649,0,0,0,0,0.1);

	this.emoE2 = new lib.emogiCorrEe();
	this.emoE2.name = "emoE2";
	this.emoE2.setTransform(259.95,54.3,1.0241,1.2649,0,0,0,0,0.1);

	this.emoE1 = new lib.emogiCorrEe();
	this.emoE1.name = "emoE1";
	this.emoE1.setTransform(317.05,54.3,1.0241,1.2649,0,0,0,0,0.1);

	this.hijab = new lib.hijab();
	this.hijab.name = "hijab";
	this.hijab.setTransform(732,163,0.0658,0.0726,0,0,0,400,248.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hijab},{t:this.emoE1},{t:this.emoE2},{t:this.emoE3},{t:this.emoE4},{t:this.emoE5}]}).wait(1));

	// emoj
	this.emoC3 = new lib.emogiCorr();
	this.emoC3.name = "emoC3";
	this.emoC3.setTransform(613.9,38.65);

	this.emoC2 = new lib.emogiCorr();
	this.emoC2.name = "emoC2";
	this.emoC2.setTransform(681.7,53.45,1,1,0,0,0,16.8,14.8);

	this.emoC1 = new lib.emogiCorr();
	this.emoC1.name = "emoC1";
	this.emoC1.setTransform(727.95,53.45,1,1,0,0,0,16.8,14.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.emoC1},{t:this.emoC2},{t:this.emoC3}]}).wait(1));

	// scorbarr
	this.scoreBoard = new lib.scorebarre();
	this.scoreBoard.name = "scoreBoard";
	this.scoreBoard.setTransform(411.05,64.1,1,1,0,0,0,388.9,42.1);

	this.timeline.addTween(cjs.Tween.get(this.scoreBoard).wait(1));

	// Layer_2
	this.instance = new lib._46092Converted();
	this.instance.setTransform(0,0,0.3212,0.2766);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(400,250,400,250);
// library properties:
lib.properties = {
	id: '8DB21DA41F816E41BB24503D44F899B7',
	width: 800,
	height: 500,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/_46092Converted.jpg?1655307061192", id:"_46092Converted"},
		{src:"images/qisas dnd_atlas_1.png?1655307061103", id:"qisas dnd_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['8DB21DA41F816E41BB24503D44F899B7'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;