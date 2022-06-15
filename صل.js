(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"صل_atlas_1", frames: [[0,0,1683,1518]]},
		{name:"صل_atlas_2", frames: [[0,0,1332,1708]]},
		{name:"صل_atlas_3", frames: [[0,0,1381,1167]]},
		{name:"صل_atlas_4", frames: [[0,0,1450,1097]]},
		{name:"صل_atlas_5", frames: [[0,0,1600,992]]},
		{name:"صل_atlas_6", frames: [[0,1074,860,811],[0,0,687,1072],[862,0,959,689],[862,691,959,689]]},
		{name:"صل_atlas_7", frames: [[740,1712,662,93],[1276,1909,634,50],[712,1807,562,66],[712,1875,562,66],[2030,145,8,30],[2032,0,12,30],[2032,60,7,26],[2043,288,3,6],[1602,0,381,410],[1985,291,3,6],[2044,251,4,8],[1811,1214,218,188],[1856,412,185,159],[1990,279,4,7],[1404,1712,203,195],[2041,210,5,10],[2038,284,3,7],[2030,120,15,23],[2040,158,6,13],[1940,573,82,33],[2030,88,18,30],[2043,234,5,5],[1990,288,4,5],[2041,242,7,7],[2030,242,9,6],[2047,124,1,1],[2032,32,10,26],[1985,299,3,3],[2008,300,3,3],[1996,279,5,5],[2003,279,5,5],[2026,188,9,9],[2037,188,9,9],[2047,127,1,1],[2047,130,1,1],[1985,0,45,86],[1856,573,82,60],[2046,21,2,2],[2046,25,2,2],[2030,295,4,3],[2030,300,3,3],[2042,300,3,3],[2047,120,1,2],[1990,301,3,3],[2047,133,1,1],[2047,136,1,1],[2030,288,4,5],[1985,134,43,37],[2018,302,3,2],[1985,304,3,2],[2004,292,4,4],[1985,215,43,32],[2018,292,4,4],[1985,173,39,40],[2030,210,9,7],[2041,82,7,4],[2010,279,5,5],[2025,298,3,4],[1996,292,6,3],[2017,280,5,5],[2030,228,11,5],[2030,235,11,5],[2042,296,6,2],[2038,184,10,2],[2041,72,7,8],[2024,281,5,5],[2017,249,6,9],[2041,60,7,10],[2017,298,6,2],[2044,32,4,12],[2043,269,3,10],[2046,13,2,6],[2026,199,9,8],[2017,274,9,4],[2018,288,10,2],[2037,251,5,9],[1985,279,3,10],[2047,139,1,1],[2047,142,1,1],[2023,304,3,2],[2031,281,5,5],[2043,281,5,5],[2024,292,4,4],[2035,304,3,2],[2037,262,8,5],[2036,293,4,4],[2040,173,8,9],[1985,88,42,44],[2028,274,6,5],[1996,286,6,4],[2025,250,10,5],[2023,269,13,3],[1990,297,7,2],[2023,264,12,3],[2004,286,6,4],[2043,222,5,10],[2037,199,8,9],[2044,46,4,10],[2038,269,3,13],[2026,177,10,9],[2025,257,10,5],[2030,219,9,7],[1999,298,7,2],[2012,287,4,6],[2017,260,4,10],[2040,145,8,11],[2047,199,1,1],[2026,173,2,2],[2046,0,2,11],[2047,202,1,1],[1995,302,3,3],[2026,209,2,2],[2036,299,4,3],[1985,249,30,28],[2000,302,3,3],[455,1382,283,385],[2013,302,3,3],[1052,1573,574,137],[740,1382,310,317],[0,1382,453,411],[961,0,639,689],[2010,295,5,3],[1282,1214,527,357],[1282,691,735,521],[0,691,639,689],[641,691,639,689],[0,0,959,689],[1602,412,252,224],[1628,1573,252,224],[455,1769,255,221]]}
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



(lib.CachedBmp_267 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_263 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_268 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_269 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_260 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_259 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_258 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_257 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_265 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_256 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_255 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_266 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_262 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_254 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_264 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_253 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_252 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_251 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_249 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_246 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_250 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_244 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_243 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_248 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_242 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_245 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_241 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_240 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_237 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_239 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_236 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_235 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_238 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_233 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_234 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_231 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_232 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_228 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_227 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_226 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_230 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_224 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_225 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_221 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_216 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_217 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_223 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_218 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_214 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_215 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_213 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_219 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_209 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_208 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_207 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_211 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_212 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_210 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_206 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_204 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_205 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_201 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_203 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_202 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_200 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_199 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_198 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_195 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_194 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_197 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_196 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_191 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_189 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_192 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_193 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_188 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_190 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_186 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_187 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_185 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_182 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_183 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_180 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_184 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_181 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_179 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_177 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_178 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_176 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_174 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_172 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_175 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_173 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_171 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_169 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_170 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_168 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_166 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_167 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_165 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_163 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_162 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_164 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_161 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_158 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_159 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_156 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_155 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_160 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_157 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_153 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_154 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_152 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_261 = function() {
	this.initialize(ss["صل_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_148 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.بيتالكلب2 = function() {
	this.initialize(ss["صل_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_149 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.خصان2x = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.خم12x = function() {
	this.initialize(ss["صل_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_150 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.سنجاب43x = function() {
	this.initialize(ss["صل_atlas_6"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Asset2 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.جدع12x = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.كلب = function() {
	this.initialize(ss["صل_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.دجاجة13x = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.image_10 = function() {
	this.initialize(ss["صل_atlas_6"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.منكك2x = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.image_7 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_151 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.قنفذ33x = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.ثعلب42x = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.image_3 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.جحر12x = function() {
	this.initialize(ss["صل_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.image_6 = function() {
	this.initialize(ss["صل_atlas_6"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.image_5 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.image_4 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(126);
}).prototype = p = new cjs.Sprite();



(lib._46092Converted = function() {
	this.initialize(img._46092Converted);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2491,1808);


(lib.CachedBmp_147 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(127);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_146 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(128);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_143 = function() {
	this.initialize(ss["صل_atlas_7"]);
	this.gotoAndStop(129);
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


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_265();
	this.instance.setTransform(-95.25,-102.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-95.2,-102.5,190.5,205);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_267();
	this.instance.setTransform(-150,-20.9,0.4532,0.4532);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-20.9,300.1,42.2);


(lib.scorBar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Asset2();
	this.instance.setTransform(0,0,1.3552,0.6137);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.scorBar, new cjs.Rectangle(0,0,777.9,84.1), null);


(lib.hijab = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_261();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hijab, new cjs.Rectangle(0,0,800,496), null);


(lib.CompoundPath_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_231();
	this.instance.setTransform(-0.05,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_3, new cjs.Rectangle(0,0,22.5,43), null);


(lib.Mcsil2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_269();
	this.instance.setTransform(325.05,4.15,0.5,0.5);

	this.instance_1 = new lib.Symbol1("synched",0);
	this.instance_1.setTransform(465,19.95);

	this.instance_2 = new lib.سنجاب43x();
	this.instance_2.setTransform(274,105,0.086,0.086);

	this.instance_3 = new lib.قنفذ33x();
	this.instance_3.setTransform(495,136,0.1425,0.1425);

	this.instance_4 = new lib.دجاجة13x();
	this.instance_4.setTransform(26,109,0.2768,0.2768);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer_2
	this.instance_5 = new lib.خم12x();
	this.instance_5.setTransform(250,308,0.1258,0.1258);

	this.instance_6 = new lib.جحر12x();
	this.instance_6.setTransform(2,308,0.0896,0.0896);

	this.instance_7 = new lib.جدع12x();
	this.instance_7.setTransform(477,313,0.0817,0.0817);

	this.instance_8 = new lib.Symbol12("synched",0);
	this.instance_8.setTransform(532.15,153.4,0.6115,0.4954,0,0,0,0.1,0);

	this.instance_9 = new lib.Symbol12("synched",0);
	this.instance_9.setTransform(300.3,152.8,0.6115,0.4954,0,0,0,0.1,0.1);

	this.instance_10 = new lib.Symbol12("synched",0);
	this.instance_10.setTransform(67.95,152.8,0.6115,0.4954,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5}]}).wait(1));

	// Layer_3
	this.instance_11 = new lib.Symbol12("synched",0);
	this.instance_11.setTransform(234.1,296.8,0.7173,0.6094,0,0,0,-93.6,-100.7);

	this.instance_12 = new lib.Symbol12("synched",0);
	this.instance_12.setTransform(472.2,296.8,0.7173,0.6094,0,0,0,-93.6,-100.7);

	this.instance_13 = new lib.Symbol12("synched",0);
	this.instance_13.setTransform(0.1,296.8,0.7173,0.6094,0,0,0,-93.6,-100.7);

	this.instance_14 = new lib.Symbol12("synched",0);
	this.instance_14.setTransform(67.95,355.8,0.6115,0.4954,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Mcsil2, new cjs.Rectangle(-1,-0.9,616.1,421.5), null);


(lib.Mcsil1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_268();
	this.instance.setTransform(325.05,4.15,0.5,0.5);

	this.instance_1 = new lib.Symbol1("synched",0);
	this.instance_1.setTransform(465,19.95);

	this.instance_2 = new lib.جحر12x();
	this.instance_2.setTransform(246,316,0.0751,0.0751);

	this.instance_3 = new lib.بيتالكلب2();
	this.instance_3.setTransform(16,309,0.0621,0.0621);

	this.instance_4 = new lib.ثعلب42x();
	this.instance_4.setTransform(22,120,0.1267,0.1267);

	this.instance_5 = new lib.كلب();
	this.instance_5.setTransform(499,111,0.0506,0.0506);

	this.instance_6 = new lib.خصان2x();
	this.instance_6.setTransform(261,91,0.2896,0.2896);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer_2
	this.instance_7 = new lib.Symbol12("synched",0);
	this.instance_7.setTransform(532.15,153.4,0.6115,0.4954,0,0,0,0.1,0);

	this.instance_8 = new lib.Symbol12("synched",0);
	this.instance_8.setTransform(300.3,152.8,0.6115,0.4954,0,0,0,0.1,0.1);

	this.instance_9 = new lib.Symbol12("synched",0);
	this.instance_9.setTransform(67.95,152.8,0.6115,0.4954,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7}]}).wait(1));

	// Layer_3
	this.instance_10 = new lib.Symbol12("synched",0);
	this.instance_10.setTransform(234.1,296.8,0.7173,0.6094,0,0,0,-93.6,-100.7);

	this.instance_11 = new lib.منكك2x();
	this.instance_11.setTransform(474,297,0.2922,0.2922);

	this.instance_12 = new lib.Symbol12("synched",0);
	this.instance_12.setTransform(472.2,296.8,0.7173,0.6094,0,0,0,-93.6,-100.7);

	this.instance_13 = new lib.Symbol12("synched",0);
	this.instance_13.setTransform(0.1,296.8,0.7173,0.6094,0,0,0,-93.6,-100.7);

	this.instance_14 = new lib.Symbol12("synched",0);
	this.instance_14.setTransform(67.95,355.8,0.6115,0.4954,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Mcsil1, new cjs.Rectangle(-1,-0.9,616.1,421.5), null);


(lib.grapghayma = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_260();
	this.instance.setTransform(7.7,21.5,0.3953,0.3953);

	this.instance_1 = new lib.CachedBmp_259();
	this.instance_1.setTransform(7.7,21.5,0.3953,0.3953);

	this.instance_2 = new lib.CachedBmp_258();
	this.instance_2.setTransform(19.95,0,0.3953,0.3953);

	this.instance_3 = new lib.CachedBmp_257();
	this.instance_3.setTransform(20.9,35.7,0.3953,0.3953);

	this.instance_4 = new lib.CompoundPath_3();
	this.instance_4.setTransform(10.7,35.75,0.0581,0.0588,0,0,0,10.3,25.6);
	this.instance_4.alpha = 0.4688;

	this.instance_5 = new lib.CachedBmp_256();
	this.instance_5.setTransform(16.4,34.1,0.3953,0.3953);

	this.instance_6 = new lib.CachedBmp_255();
	this.instance_6.setTransform(18.95,32,0.3953,0.3953);

	this.instance_7 = new lib.CachedBmp_254();
	this.instance_7.setTransform(13.65,35.65,0.3953,0.3953);

	this.instance_8 = new lib.CachedBmp_253();
	this.instance_8.setTransform(14.9,29.4,0.3953,0.3953);

	this.instance_9 = new lib.CachedBmp_252();
	this.instance_9.setTransform(12.3,32.1,0.3953,0.3953);

	this.instance_10 = new lib.CachedBmp_251();
	this.instance_10.setTransform(21.95,26.6,0.3953,0.3953);

	this.instance_11 = new lib.CachedBmp_250();
	this.instance_11.setTransform(20.75,26.6,0.3953,0.3953);

	this.instance_12 = new lib.CachedBmp_249();
	this.instance_12.setTransform(24.25,20.65,0.3953,0.3953);

	this.instance_13 = new lib.CachedBmp_248();
	this.instance_13.setTransform(23.75,17.1,0.3953,0.3953);

	this.instance_14 = new lib.CachedBmp_248();
	this.instance_14.setTransform(6.3,17.3,0.3953,0.3953);

	this.instance_15 = new lib.CachedBmp_246();
	this.instance_15.setTransform(0,15.4,0.3953,0.3953);

	this.instance_16 = new lib.CachedBmp_245();
	this.instance_16.setTransform(27.55,21.65,0.3953,0.3953);

	this.instance_17 = new lib.CachedBmp_244();
	this.instance_17.setTransform(18.7,10.9,0.3953,0.3953);

	this.instance_18 = new lib.CachedBmp_243();
	this.instance_18.setTransform(12.9,11,0.3953,0.3953);

	this.instance_19 = new lib.CachedBmp_242();
	this.instance_19.setTransform(14.8,19.95,0.3953,0.3953);

	this.instance_20 = new lib.CachedBmp_241();
	this.instance_20.setTransform(19.95,0,0.3953,0.3953);

	this.instance_21 = new lib.CachedBmp_240();
	this.instance_21.setTransform(19.7,16.1,0.3953,0.3953);

	this.instance_22 = new lib.CachedBmp_239();
	this.instance_22.setTransform(20.2,15.55,0.3953,0.3953);

	this.instance_23 = new lib.CachedBmp_238();
	this.instance_23.setTransform(19.15,14.5,0.3953,0.3953);

	this.instance_24 = new lib.CachedBmp_237();
	this.instance_24.setTransform(11,16.2,0.3953,0.3953);

	this.instance_25 = new lib.CachedBmp_236();
	this.instance_25.setTransform(11.5,15.65,0.3953,0.3953);

	this.instance_26 = new lib.CachedBmp_235();
	this.instance_26.setTransform(10.45,14.6,0.3953,0.3953);

	this.instance_27 = new lib.CachedBmp_234();
	this.instance_27.setTransform(29.85,15.25,0.3953,0.3953);

	this.instance_28 = new lib.CachedBmp_233();
	this.instance_28.setTransform(27.55,21.65,0.3953,0.3953);

	this.instance_29 = new lib.CachedBmp_232();
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

	// Isolation_Mode
	this.instance = new lib.CachedBmp_230();
	this.instance.setTransform(0,1.4,0.3953,0.3953);

	this.instance_1 = new lib.CachedBmp_230();
	this.instance_1.setTransform(-7.9,1.4,0.3953,0.3953);

	this.instance_2 = new lib.CachedBmp_228();
	this.instance_2.setTransform(-1.5,-1.05,0.3953,0.3953);

	this.instance_3 = new lib.CachedBmp_227();
	this.instance_3.setTransform(-6.1,-1.2,0.3953,0.3953);

	this.instance_4 = new lib.CachedBmp_226();
	this.instance_4.setTransform(-3.95,3.4,0.3953,0.3953);

	this.instance_5 = new lib.CachedBmp_225();
	this.instance_5.setTransform(-1.35,1.75,0.3953,0.3953);

	this.instance_6 = new lib.CachedBmp_224();
	this.instance_6.setTransform(-1.1,1.45,0.3953,0.3953);

	this.instance_7 = new lib.CachedBmp_223();
	this.instance_7.setTransform(-1.6,0.8,0.3953,0.3953);

	this.instance_8 = new lib.CachedBmp_225();
	this.instance_8.setTransform(-5.6,1.75,0.3953,0.3953);

	this.instance_9 = new lib.CachedBmp_221();
	this.instance_9.setTransform(-5.35,1.45,0.3953,0.3953);

	this.instance_10 = new lib.CachedBmp_223();
	this.instance_10.setTransform(-5.85,0.8,0.3953,0.3953);

	this.instance_11 = new lib.CachedBmp_219();
	this.instance_11.setTransform(-11.75,-5.05,0.3953,0.3953);

	this.instance_12 = new lib.CachedBmp_218();
	this.instance_12.setTransform(-11.35,-4.3,0.3953,0.3953);

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
	this.instance = new lib.CachedBmp_157();
	this.instance.setTransform(16.5,17.7,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_156();
	this.instance_1.setTransform(9.9,17.8,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_155();
	this.instance_2.setTransform(15.6,14.95,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_154();
	this.instance_3.setTransform(9.9,14.85,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_153();
	this.instance_4.setTransform(17.35,19.25,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_152();
	this.instance_5.setTransform(8.45,19.55,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_151();
	this.instance_6.setTransform(12.25,19.95,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_150();
	this.instance_7.setTransform(16.15,17.1,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_149();
	this.instance_8.setTransform(9.45,17.3,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_148();
	this.instance_9.setTransform(6,11.25,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_187();
	this.instance_10.setTransform(13.25,16.05,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_186();
	this.instance_11.setTransform(3.9,16.25,0.5,0.5);

	this.instance_12 = new lib.CachedBmp_185();
	this.instance_12.setTransform(11.9,11.7,0.5,0.5);

	this.instance_13 = new lib.CachedBmp_184();
	this.instance_13.setTransform(3.9,11.6,0.5,0.5);

	this.instance_14 = new lib.CachedBmp_183();
	this.instance_14.setTransform(14.4,18.45,0.5,0.5);

	this.instance_15 = new lib.CachedBmp_182();
	this.instance_15.setTransform(1.85,18.95,0.5,0.5);

	this.instance_16 = new lib.CachedBmp_181();
	this.instance_16.setTransform(7.15,19.5,0.5,0.5);

	this.instance_17 = new lib.CachedBmp_180();
	this.instance_17.setTransform(12.7,15.15,0.5,0.5);

	this.instance_18 = new lib.CachedBmp_179();
	this.instance_18.setTransform(3.3,15.4,0.5,0.5);

	this.instance_19 = new lib.CachedBmp_178();
	this.instance_19.setTransform(-1.55,6,0.5,0.5);

	this.instance_20 = new lib.CachedBmp_177();
	this.instance_20.setTransform(-1.75,26.55,0.5,0.5);

	this.instance_21 = new lib.CachedBmp_176();
	this.instance_21.setTransform(-3.4,24.05,0.5,0.5);

	this.instance_22 = new lib.CachedBmp_175();
	this.instance_22.setTransform(-8.6,12.25,0.5,0.5);

	this.instance_23 = new lib.CachedBmp_174();
	this.instance_23.setTransform(-4.25,8.4,0.5,0.5);

	this.instance_24 = new lib.CachedBmp_173();
	this.instance_24.setTransform(-5.95,16.75,0.5,0.5);

	this.instance_25 = new lib.CachedBmp_172();
	this.instance_25.setTransform(-7.6,20.7,0.5,0.5);

	this.instance_26 = new lib.CachedBmp_171();
	this.instance_26.setTransform(20.2,19.45,0.5,0.5);

	this.instance_27 = new lib.CachedBmp_170();
	this.instance_27.setTransform(3.3,28.5,0.5,0.5);

	this.instance_28 = new lib.CachedBmp_169();
	this.instance_28.setTransform(18.95,22.95,0.5,0.5);

	this.instance_29 = new lib.CachedBmp_168();
	this.instance_29.setTransform(16.6,26,0.5,0.5);

	this.instance_30 = new lib.CachedBmp_167();
	this.instance_30.setTransform(9.35,29,0.5,0.5);

	this.instance_31 = new lib.CachedBmp_166();
	this.instance_31.setTransform(13.7,28.3,0.5,0.5);

	this.instance_32 = new lib.CachedBmp_165();
	this.instance_32.setTransform(-3.45,3.9,0.5,0.5);

	this.instance_33 = new lib.CachedBmp_164();
	this.instance_33.setTransform(20.55,15.45,0.5,0.5);

	this.instance_34 = new lib.CachedBmp_163();
	this.instance_34.setTransform(19.9,10.6,0.5,0.5);

	this.instance_35 = new lib.CachedBmp_162();
	this.instance_35.setTransform(18,5.75,0.5,0.5);

	this.instance_36 = new lib.CachedBmp_161();
	this.instance_36.setTransform(2.2,2.9,0.5,0.5);

	this.instance_37 = new lib.CachedBmp_160();
	this.instance_37.setTransform(6.5,-0.5,0.5,0.5);

	this.instance_38 = new lib.CachedBmp_159();
	this.instance_38.setTransform(14.55,0.6,0.5,0.5);

	this.instance_39 = new lib.CachedBmp_158();
	this.instance_39.setTransform(10.6,-0.05,0.5,0.5);

	this.instance_40 = new lib.Symbol4("synched",0);
	this.instance_40.setTransform(11.3,15.3,0.701,0.701,0,0,0,16.8,16.9);

	this.instance_41 = new lib.CachedBmp_217();
	this.instance_41.setTransform(18.35,15.65,0.5,0.5);

	this.instance_42 = new lib.CachedBmp_216();
	this.instance_42.setTransform(9.8,15.85,0.5,0.5);

	this.instance_43 = new lib.CachedBmp_215();
	this.instance_43.setTransform(17.1,11.65,0.5,0.5);

	this.instance_44 = new lib.CachedBmp_214();
	this.instance_44.setTransform(9.8,11.6,0.5,0.5);

	this.instance_45 = new lib.CachedBmp_213();
	this.instance_45.setTransform(19.4,17.85,0.5,0.5);

	this.instance_46 = new lib.CachedBmp_212();
	this.instance_46.setTransform(7.95,18.3,0.5,0.5);

	this.instance_47 = new lib.CachedBmp_211();
	this.instance_47.setTransform(12.8,18.85,0.5,0.5);

	this.instance_48 = new lib.CachedBmp_210();
	this.instance_48.setTransform(17.85,14.85,0.5,0.5);

	this.instance_49 = new lib.CachedBmp_209();
	this.instance_49.setTransform(9.25,15.05,0.5,0.5);

	this.instance_50 = new lib.CachedBmp_208();
	this.instance_50.setTransform(4.8,6.5,0.5,0.5);

	this.instance_51 = new lib.CachedBmp_207();
	this.instance_51.setTransform(1.7,23.35,0.5,0.5);

	this.instance_52 = new lib.CachedBmp_206();
	this.instance_52.setTransform(1.35,20.55,0.5,0.5);

	this.instance_53 = new lib.CachedBmp_205();
	this.instance_53.setTransform(-0.1,8.65,0.5,0.5);

	this.instance_54 = new lib.CachedBmp_204();
	this.instance_54.setTransform(4.75,5.95,0.5,0.5);

	this.instance_55 = new lib.CachedBmp_203();
	this.instance_55.setTransform(1.1,13.25,0.5,0.5);

	this.instance_56 = new lib.CachedBmp_202();
	this.instance_56.setTransform(-1.5,17.1,0.5,0.5);

	this.instance_57 = new lib.CachedBmp_201();
	this.instance_57.setTransform(23.7,21.6,0.5,0.5);

	this.instance_58 = new lib.CachedBmp_200();
	this.instance_58.setTransform(5.65,25.95,0.5,0.5);

	this.instance_59 = new lib.CachedBmp_199();
	this.instance_59.setTransform(21.8,24.3,0.5,0.5);

	this.instance_60 = new lib.CachedBmp_198();
	this.instance_60.setTransform(19,26.5,0.5,0.5);

	this.instance_61 = new lib.CachedBmp_197();
	this.instance_61.setTransform(10.7,27.55,0.5,0.5);

	this.instance_62 = new lib.CachedBmp_196();
	this.instance_62.setTransform(15.7,27.85,0.5,0.5);

	this.instance_63 = new lib.CachedBmp_195();
	this.instance_63.setTransform(6.45,2.2,0.5,0.5);

	this.instance_64 = new lib.CachedBmp_194();
	this.instance_64.setTransform(24.9,18.4,0.5,0.5);

	this.instance_65 = new lib.CachedBmp_193();
	this.instance_65.setTransform(25.2,14.55,0.5,0.5);

	this.instance_66 = new lib.CachedBmp_192();
	this.instance_66.setTransform(24.45,9.75,0.5,0.5);

	this.instance_67 = new lib.CachedBmp_191();
	this.instance_67.setTransform(11.75,2.65,0.5,0.5);

	this.instance_68 = new lib.CachedBmp_190();
	this.instance_68.setTransform(15.5,0.7,0.5,0.5);

	this.instance_69 = new lib.CachedBmp_189();
	this.instance_69.setTransform(22.1,4.25,0.5,0.5);

	this.instance_70 = new lib.CachedBmp_188();
	this.instance_70.setTransform(18.85,2.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10}]},4).to({state:[{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.6,-0.5,38.8,36);


(lib.bgrd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_4 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4).call(this.frame_4).wait(2));

	// Layer_3
	this.instance = new lib.CachedBmp_143();
	this.instance.setTransform(-7.2,-5.2,0.5,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(5).to({_off:false},0).wait(1));

	// Layer_4
	this.instance_1 = new lib.CachedBmp_146();
	this.instance_1.setTransform(-5.95,-5.95,0.5,0.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).to({_off:true},3).wait(1).to({_off:false},0).wait(1));

	// Layer_2
	this.instance_2 = new lib.CachedBmp_146();
	this.instance_2.setTransform(-5.95,-5.95,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_147();
	this.instance_3.setTransform(-5.95,-5.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},3).wait(2));

	// Layer_1
	this.instance_4 = new lib.Symbol12("synched",0);
	this.instance_4.setTransform(57.35,50.05,0.6115,0.4954,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({_off:true},1).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.2,-5.9,127.5,112);


(lib.tayr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_266();
	this.instance.setTransform(2,3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Symbol 12
	this.bkg = new lib.bgrd();
	this.bkg.name = "bkg";
	this.bkg.setTransform(57.2,50.1,1,1,0,0,0,57.2,50.1);

	this.timeline.addTween(cjs.Tween.get(this.bkg).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.tayr, new cjs.Rectangle(-0.9,-0.7,116.5,101.5), null);


(lib.och = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.image_3();
	this.instance.setTransform(3,4,0.1677,0.1297);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Symbol 12
	this.bkg = new lib.bgrd();
	this.bkg.name = "bkg";
	this.bkg.setTransform(57.2,50.1,1,1,0,0,0,57.2,50.1);

	this.timeline.addTween(cjs.Tween.get(this.bkg).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.och, new cjs.Rectangle(-0.9,-0.7,116.5,101.5), null);


(lib.nahla = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.CachedBmp_264();
	this.instance.setTransform(7.15,0.6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Symbol 12
	this.bkg = new lib.bgrd();
	this.bkg.name = "bkg";
	this.bkg.setTransform(57.2,50.1,1,1,0,0,0,57.2,50.1);

	this.timeline.addTween(cjs.Tween.get(this.bkg).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.nahla, new cjs.Rectangle(-0.9,-0.7,116.5,101.5), null);


(lib.khof = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_262();
	this.instance.setTransform(8,8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Symbol 12
	this.bkg = new lib.bgrd();
	this.bkg.name = "bkg";
	this.bkg.setTransform(57.2,50.1,1,1,0,0,0,57.2,50.1);

	this.timeline.addTween(cjs.Tween.get(this.bkg).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.khof, new cjs.Rectangle(-0.9,-0.7,116.5,101.5), null);


(lib.khalya = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.image_7();
	this.instance.setTransform(3,5,0.1708,0.1297);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Symbol 12
	this.bkg = new lib.bgrd();
	this.bkg.name = "bkg";
	this.bkg.setTransform(57.2,50.1,1,1,0,0,0,57.2,50.1);

	this.timeline.addTween(cjs.Tween.get(this.bkg).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.khalya, new cjs.Rectangle(-0.9,-0.7,116.5,101.5), null);


(lib.ghar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.image_5();
	this.instance.setTransform(6,3,0.1596,0.1335);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Symbol 12
	this.bkg = new lib.bgrd();
	this.bkg.name = "bkg";
	this.bkg.setTransform(57.2,50.1,1,1,0,0,0,57.2,50.1);

	this.timeline.addTween(cjs.Tween.get(this.bkg).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ghar, new cjs.Rectangle(-0.9,-0.7,116.5,101.5), null);


(lib.Mcsil0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.RLINKTDD = new lib.tayr();
	this.RLINKTDD.name = "RLINKTDD";
	this.RLINKTDD.setTransform(80.75,170.25,0.9032,0.8684,0,0,0,57.3,50.1);

	this.RLINKTUU = new lib.khof();
	this.RLINKTUU.name = "RLINKTUU";
	this.RLINKTUU.setTransform(290.75,170.25,0.9032,0.8684,0,0,0,57.3,50.1);

	this.RLINKTEE = new lib.nahla();
	this.RLINKTEE.name = "RLINKTEE";
	this.RLINKTEE.setTransform(496.15,170.25,0.9032,0.8684,0,0,0,57.3,50.1);

	this.instance = new lib.CachedBmp_263();
	this.instance.setTransform(249.05,40.65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.RLINKTEE},{t:this.RLINKTUU},{t:this.RLINKTDD}]}).wait(1));

	// Layer_2
	this.instance_1 = new lib.Symbol1("synched",0);
	this.instance_1.setTransform(570.2,54.4,1.1032,0.8684,0,0,0,149.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer_3
	this.RLINKBUU = new lib.ghar();
	this.RLINKBUU.name = "RLINKBUU";
	this.RLINKBUU.setTransform(80.75,349.55,0.9032,0.8684,0,0,0,57.3,50.1);

	this.RLINKBDD = new lib.och();
	this.RLINKBDD.name = "RLINKBDD";
	this.RLINKBDD.setTransform(293.05,349.55,0.9032,0.8684,0,0,0,57.3,50.1);

	this.RLINKBEE = new lib.khalya();
	this.RLINKBEE.name = "RLINKBEE";
	this.RLINKBEE.setTransform(495.8,349.5,0.8984,0.8675,0,0,0,57.2,50.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.RLINKBEE},{t:this.RLINKBDD},{t:this.RLINKBUU}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Mcsil0, new cjs.Rectangle(28.2,36.2,543,357.40000000000003), null);


// stage content:
(lib.صل = function(mode,startPosition,loop) {
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
		
		
		
		document.body.style.overflow = 'hidden';
		
		
		createjs.Touch.enable(stage, false, true);
		
		
		
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
		
			cont.mc = new lib['Mcsil' + currentpage]();
			cont.mc.name = 'Mcsil' + currentpage;
		
			console.log('Mcsil' + currentpage)
			cont.mc.x = lib.properties["width"] / 2 - (cont.mc.getBounds().width / 2);
			cont.mc.y = lib.properties["height"] / 2 - (cont.mc.getBounds().height / 2);
		
		
			var ind = that.getChildIndex(that.scoreBoard)
			that.addChildAt(cont, ind)
		
		
			getElementAndAlpha_mc(cont.mc);
		
		
			setTimeout(function () {
		
		
		
				cont.addChild(cont.mc);
				animeImages()
				silManager(cont.mc)
		
			}, 20);
		
		
		
		}
		
		
		
		var linkArray = []
		
			function getElementAndAlpha_mc(silMc) {
		
				linkArray = []
		
				setTimeout(function () {
		
					getLink();
		
		
				}, 10);
		
		
				function getLink() {
		
		
					var parent = silMc;
					var keys = Object.keys(parent);
					var len = keys.length;
		
					while (--len) {
		
		
		
						if (keys[len].slice(1, 5) === ("LINK")) {
		
		
		                    parent[keys[len]].scaleX = 0.2
							 parent[keys[len]].scaleY = 0.2
							
							parent[keys[len]].alpha = 0
							parent[keys[len]].name = keys[len];
		
							linkArray.push(parent[keys[len]]);
						}
					}
					numOfLink = linkArray.length
		
				}
		
		
			}
		
		
		
		var imageTimeAnime = 1500
			function animeImages() {
		
				for (var u = 0; u < linkArray.length; u++) {
		
		
					createjs.Tween.get(linkArray[u], {
						loop: false
					})
						.to({
								scaleX: 1.0,
								scaleY: 1.0,
								alpha: 1
							},
							imageTimeAnime, createjs.Ease.getBackOut(2))
				}
		
				setTimeout(function () {
		
		
					addTitle()
		
				}, imageTimeAnime);
			}
		
			function addTitle() {
		
		
		
				startSound('title' + 0) //('q' + currentpage)
				console.log('titleDuration', titleDuration)
		
		
		
			}
		
		
		
		
			function silManager(silMc) {
		
		
				var pt, lastPoint, numOfLink = 0,
					strngOfLinkDown, strngCode1, strngCode2;
				var downOnAcceptedMc, ismove;
		
				var correctCount = 0;
				var TwomcArray = [];
		
		
				setlisteners();
		
		
				silMc.shapeDraw = new createjs.Shape();
				silMc.shapeDraw0 = new createjs.Shape();
		
				silMc.shapeDraw.cache(0, 0, 1000, 600);
		
		
		
				function setlisteners() {
		
		
		
					for (var l = 0; l < linkArray.length; l++) {
		
						linkArray[l].addEventListener("mousedown", ondown);
		
		
		
					}
		
					silMc.addEventListener("pressup", onup);
		
		
		
		
				}
		
				function removelisteners() {
		
		
					for (var l = 0; l < linkArray.length; l++) {
		
		
						linkArray[l].removeEventListener("mousedown", ondown);
		
		
		
					}
		
					silMc.removeEventListener("pressup", onup);
		
		
				}
		
		
		
				var sbr = new createjs.Container();
		
				sbr.x = 0;
				sbr.y = 0;
		
		
		
				sbr.mouseEnabled = false;
				silMc.addChild(sbr);
		
		
		
		
				sbr.addChild(silMc.shapeDraw0);
		
				sbr.addChild(silMc.shapeDraw);
		
				function onpressmove_sil(evt) {
		
		
					ismove = true;
		
					pt = sbr.globalToLocal(evt.stageX, evt.stageY);
		
					//silMc.shapeDraw.graphics.clear();
					// drawPenLine(that.shapeDraw , pt)
					silMc.shapeDraw.graphics.beginStroke("#000000")
		
					.setStrokeStyle(3, "round")
						.moveTo(lastPoint.x, lastPoint.y)
						.lineTo(pt.x, pt.y);
		
					silMc.shapeDraw.updateCache("source-over");
		
					silMc.shapeDraw.graphics.clear();
		
					lastPoint.x = pt.x
					lastPoint.y = pt.y
		
				}
		
				var currentHit_sil = null;
				function checkHit_sil(pt) {
		
					var rect = {
		
						x: pt.x,
						y: pt.y,
					}
		
		
					for (var u = 0; u < linkArray.length; u++) {
		
		
		
						var rect2 = linkArray[u];
		
						if ((Math.abs(rect.x - rect2.x) < rect2.getTransformedBounds().width / 2) && Math.abs(rect.y - rect2.y) < (rect2.getTransformedBounds().height / 2)) {
		
		
		
							currentHit_sil = rect2;
							return true;
						}
					}
		
		
					return false;
				}
		
				function onup(ev) {
		
		
					silMc.removeEventListener("pressmove", onpressmove_sil);
		
					silMc.shapeDraw.graphics.clear();
					silMc.shapeDraw.updateCache();
		
		
					checkHit_sil(sbr.globalToLocal(ev.stageX, ev.stageY));
		
		             TwomcArray[0].bkg.gotoAndStop(0)
						
							
					if ((currentHit_sil) != null && downOnAcceptedMc && ismove) {
						console.log('up on ', currentHit_sil.name)
						ismove = false;
		
		
						TwomcArray[1] = currentHit_sil;
		
						strngCode2 = TwomcArray[1].name.slice(6, 8);
		
		
						console.log(TwomcArray[0].name, TwomcArray[1].name)
		
						if (strngOfLinkDown == TwomcArray[1].name.slice(1, 6)) {
		
							return;
						}
		
						var iscorr = iscorrect(strngCode1, strngCode2);
						
						if(iscorr){
							
							TwomcArray[0].bkg.gotoAndStop(5)
							TwomcArray[1].bkg.gotoAndStop(5)
							
							TwomcArray[0].mouseEnabled = false
							TwomcArray[1].mouseEnabled = false
							
							startSound('addsound')
							
							correctCount += 1
						}
						
						else{
							
							TwomcArray[0].bkg.gotoAndStop(0)
							//TwomcArray[1].bkg.gotoAndStop(0)
							
		                    myListofArraysFaul[currentpage].push(strngCode2 +' , ' + strngCode1)
						}
		
					}
					
						checkGameOver()
					//targetTozero();
		
		
					if (conditionChangeSess()) {
		
		
						if (sessionAfterRightResp) {
		
							setTimeout(startNextSession, 2000);
		
						} else {
		
							showNumOfemoError()
							removelisteners()
							startNextSession();
						}
					}
					
		
					downOnAcceptedMc = false;
					currentHit_sil = null;
				}
		
		
			function conditionChangeSess() {
		
					
					console.log('myListofArraysFaul[currentpage]', myListofArraysFaul[currentpage])
					console.log('allQ_pages', allQ_pages)
					if (correctCount == linkArray.length / 2 ) {
		
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
		
				
				
		
				function ondown(ev) {
		
					ev.nativeEvent.preventDefault();
					downOnAcceptedMc = true;
		
		
					var mmc = ev.currentTarget;
					
					mmc.bkg.play()
		            startSound('addsound')
					
					lastPoint = silMc.localToLocal(mmc.x + AddRorL(mmc).x, mmc.y + AddRorL(mmc).y, sbr);
					silMc.addEventListener("pressmove", onpressmove_sil);
		
					TwomcArray[0] = mmc;
					strngOfLinkDown = TwomcArray[0].name.slice(1, 6);
					strngCode1 = TwomcArray[0].name.slice(6, 8);
		
					console.log('down on ', mmc.name)
		
		
		
		
				}
		
		
		
		
				function AddRorL(MCC) {
		
					var dist = {};
		
					var ts = MCC.name.slice(5, 6);
		
					if (ts === "L") {
		
						dist.x = MCC.getTransformedBounds().width / 2;
						dist.y = 0;
		
					} else if (ts === "R") {
		
						dist.x = 0 - MCC.getTransformedBounds().width / 2;
						dist.y = 0;
					}
		
		
					if (ts === "T") {
		
						dist.x = 0;
						dist.y = MCC.getTransformedBounds().height / 2;
		
					} else if (ts === "B") {
		
						dist.x = 0;
						dist.y = 0 - MCC.getTransformedBounds().height / 2;
					}
		
					return dist;
				}
		
		
		
		
				function iscorrect(nameDown, nameUp) {
		
					if (nameDown == nameUp) {
		
						console.log('correct')
						drawLine(TwomcArray[1], TwomcArray[0]);
		
						return true
		
					}
		
					 showResu(false)
					
					return false
				}
		
		
		
				function drawLine(oldObject, newObject, color) {
		
					var col = (typeof color === 'undefined') ? "#000000" : color;
		
					silMc.shapeDraw0.graphics.beginStroke(col)
		
					.setStrokeStyle(3, "round")
		
					.moveTo(oldObject.x + AddRorL(oldObject).x, oldObject.y + AddRorL(oldObject).y)
		
					.lineTo(newObject.x + AddRorL(newObject).x, newObject.y + AddRorL(newObject).y);
		
		
					stage.update();
		
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

	// Layer_2
	this.emoE5 = new lib.emogiCorrEe();
	this.emoE5.name = "emoE5";
	this.emoE5.setTransform(79.2,54.3,1.024,1.2649,0,0,0,0,0.1);

	this.emoE4 = new lib.emogiCorrEe();
	this.emoE4.name = "emoE4";
	this.emoE4.setTransform(140.1,54.3,1.024,1.2649,0,0,0,0.1,0.1);

	this.emoE3 = new lib.emogiCorrEe();
	this.emoE3.name = "emoE3";
	this.emoE3.setTransform(200.15,54.3,1.024,1.2649,0,0,0,0,0.1);

	this.emoE2 = new lib.emogiCorrEe();
	this.emoE2.name = "emoE2";
	this.emoE2.setTransform(259.95,54.3,1.024,1.2649,0,0,0,0,0.1);

	this.emoE1 = new lib.emogiCorrEe();
	this.emoE1.name = "emoE1";
	this.emoE1.setTransform(317.05,54.3,1.024,1.2649,0,0,0,0,0.1);

	this.hijab = new lib.hijab();
	this.hijab.name = "hijab";
	this.hijab.setTransform(732,163,0.0658,0.0726,0,0,0,400,248.1);

	this.emoC3 = new lib.emogiCorr();
	this.emoC3.name = "emoC3";
	this.emoC3.setTransform(613.9,38.65);

	this.emoC2 = new lib.emogiCorr();
	this.emoC2.name = "emoC2";
	this.emoC2.setTransform(681.7,53.45,1,1,0,0,0,16.8,14.8);

	this.emoC1 = new lib.emogiCorr();
	this.emoC1.name = "emoC1";
	this.emoC1.setTransform(727.95,53.45,1,1,0,0,0,16.8,14.8);

	this.scoreBoard = new lib.scorBar();
	this.scoreBoard.name = "scoreBoard";
	this.scoreBoard.setTransform(411.05,64.1,1,1,0,0,0,388.9,42.1);

	this.instance = new lib._46092Converted();
	this.instance.setTransform(0,0,0.3212,0.2766);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.scoreBoard},{t:this.emoC1},{t:this.emoC2},{t:this.emoC3},{t:this.hijab},{t:this.emoE1},{t:this.emoE2},{t:this.emoE3},{t:this.emoE4},{t:this.emoE5}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(400,250,400,250);
// library properties:
lib.properties = {
	id: 'DEAC4166318B4B47AD5E442104C63B05',
	width: 800,
	height: 500,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/_46092Converted.jpg?1655306738464", id:"_46092Converted"},
		{src:"images/صل_atlas_1.png?1655306738382", id:"صل_atlas_1"},
		{src:"images/صل_atlas_2.png?1655306738383", id:"صل_atlas_2"},
		{src:"images/صل_atlas_3.png?1655306738383", id:"صل_atlas_3"},
		{src:"images/صل_atlas_4.png?1655306738383", id:"صل_atlas_4"},
		{src:"images/صل_atlas_5.png?1655306738384", id:"صل_atlas_5"},
		{src:"images/صل_atlas_6.png?1655306738384", id:"صل_atlas_6"},
		{src:"images/صل_atlas_7.png?1655306738392", id:"صل_atlas_7"}
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
an.compositions['DEAC4166318B4B47AD5E442104C63B05'] = {
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