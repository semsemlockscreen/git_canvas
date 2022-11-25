(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"صل_atlas_1", frames: [[0,0,1634,1020],[0,1022,959,689],[961,1022,959,689]]},
		{name:"صل_atlas_2", frames: [[1479,1511,458,405],[1479,691,458,408],[559,1382,458,412],[1479,1101,458,408],[0,1382,557,559],[961,0,639,689],[0,691,639,689],[0,0,959,689],[641,691,639,689],[1019,1382,458,412]]},
		{name:"صل_atlas_3", frames: [[1128,1770,634,50],[1128,1822,634,50],[1036,1675,662,93],[1128,1874,634,50],[1639,801,218,188],[1380,389,381,410],[1840,251,203,195],[0,1603,458,384],[1380,0,458,387],[460,800,458,391],[920,0,458,394],[0,809,458,398],[0,406,458,401],[0,0,458,404],[460,402,458,396],[460,0,458,400],[0,1209,458,392],[920,396,458,388],[1636,1458,226,87],[460,1193,458,384],[1622,1087,226,93],[1636,1275,226,90],[1356,1926,226,96],[1636,1547,226,87],[1622,1182,226,91],[1128,1926,226,99],[1584,1926,226,95],[1639,991,226,94],[1764,1803,226,77],[1812,1882,226,74],[1700,1636,226,83],[1636,1367,226,89],[1764,1721,226,80],[920,1504,226,71],[1812,1958,226,68],[1376,1239,226,62],[0,1989,226,59],[228,1989,226,56],[1376,1360,226,54],[1376,1303,226,55],[1148,1504,226,65],[1376,1416,226,53],[1376,1525,226,51],[1376,1471,226,52],[1763,448,207,178],[920,786,458,380],[1763,628,212,127],[460,1814,240,212],[702,1814,240,212],[460,1675,574,137],[944,1814,182,201],[1840,0,206,249],[1380,801,257,222],[920,1168,329,334],[1380,1025,240,212],[460,1579,1174,94]]},
		{name:"صل_atlas_4", frames: [[456,88,38,79],[205,151,83,86],[472,265,38,79],[364,327,68,68],[434,346,38,79],[138,151,65,113],[0,370,179,32],[181,403,179,32],[0,404,179,32],[182,335,180,32],[0,336,180,32],[182,369,180,32],[0,266,180,33],[182,300,180,33],[0,301,180,33],[205,265,181,33],[290,193,181,34],[0,0,226,50],[0,52,226,49],[228,102,226,47],[228,52,226,48],[228,0,226,50],[290,151,163,40],[496,88,12,30],[503,0,7,26],[128,219,8,30],[242,257,3,6],[247,257,3,6],[508,158,4,8],[508,239,4,7],[465,180,5,10],[133,251,3,7],[205,239,15,23],[503,50,6,13],[182,266,18,30],[263,246,7,7],[0,219,82,33],[511,54,1,1],[279,253,5,5],[76,254,4,5],[473,241,9,6],[496,120,10,26],[257,260,3,3],[487,253,5,5],[503,28,9,9],[262,260,3,3],[0,254,5,5],[503,39,9,9],[511,57,1,1],[511,60,1,1],[276,260,3,3],[388,265,82,60],[0,151,136,66],[456,0,45,86],[510,108,2,2],[510,112,2,2],[42,260,4,3],[511,50,1,2],[506,254,4,5],[281,260,3,3],[409,427,43,32],[286,253,1,1],[486,260,3,3],[364,397,43,37],[15,261,3,2],[20,261,3,2],[286,256,1,1],[270,257,4,4],[7,254,5,5],[64,258,4,4],[505,233,7,4],[133,260,3,4],[473,169,39,40],[496,159,9,7],[262,255,6,3],[14,254,5,5],[263,239,11,5],[222,259,6,2],[505,211,7,8],[276,239,11,5],[64,254,10,2],[465,169,6,9],[21,254,5,5],[508,120,4,12],[230,259,6,2],[257,248,3,10],[503,75,7,10],[494,254,10,2],[510,100,2,6],[503,65,9,8],[499,248,9,4],[128,251,3,10],[272,246,5,9],[276,257,1,1],[503,258,1,1],[28,254,5,5],[25,261,3,2],[30,261,3,2],[279,246,8,5],[70,258,4,4],[35,254,5,5],[473,258,4,4],[84,219,42,44],[242,250,6,5],[484,248,13,3],[455,182,8,9],[42,254,6,4],[473,249,7,2],[484,241,10,5],[505,221,5,10],[50,254,6,4],[242,239,8,9],[252,248,3,13],[508,134,4,10],[473,253,12,3],[496,148,10,9],[252,239,9,7],[58,254,4,6],[455,169,8,11],[494,258,7,2],[496,241,10,5],[510,87,2,11],[508,146,4,10],[238,259,1,1],[510,116,2,2],[286,259,1,1],[0,261,3,3],[48,260,4,3],[510,248,2,2],[479,258,5,3],[5,261,3,3],[10,261,3,3],[473,211,30,28],[222,239,18,18],[0,103,226,46],[290,229,181,34]]}
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



(lib.CachedBmp_243 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_245 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_241 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_244 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_242 = function() {
	this.initialize(ss["صل_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_240 = function() {
	this.initialize(ss["صل_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_239 = function() {
	this.initialize(ss["صل_atlas_3"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_235 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_233 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_234 = function() {
	this.initialize(ss["صل_atlas_3"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_238 = function() {
	this.initialize(ss["صل_atlas_3"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_237 = function() {
	this.initialize(ss["صل_atlas_3"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_236 = function() {
	this.initialize(ss["صل_atlas_3"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_231 = function() {
	this.initialize(ss["صل_atlas_3"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_230 = function() {
	this.initialize(ss["صل_atlas_3"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_229 = function() {
	this.initialize(ss["صل_atlas_3"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_228 = function() {
	this.initialize(ss["صل_atlas_3"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_227 = function() {
	this.initialize(ss["صل_atlas_3"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_226 = function() {
	this.initialize(ss["صل_atlas_3"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_225 = function() {
	this.initialize(ss["صل_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_224 = function() {
	this.initialize(ss["صل_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_219 = function() {
	this.initialize(ss["صل_atlas_3"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_223 = function() {
	this.initialize(ss["صل_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_220 = function() {
	this.initialize(ss["صل_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_217 = function() {
	this.initialize(ss["صل_atlas_3"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_218 = function() {
	this.initialize(ss["صل_atlas_3"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_192 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_190 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_191 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_189 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_216 = function() {
	this.initialize(ss["صل_atlas_3"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_188 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_187 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_185 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_184 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_215 = function() {
	this.initialize(ss["صل_atlas_3"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_186 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_183 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_182 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_170 = function() {
	this.initialize(ss["صل_atlas_3"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_214 = function() {
	this.initialize(ss["صل_atlas_3"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_168 = function() {
	this.initialize(ss["صل_atlas_3"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_169 = function() {
	this.initialize(ss["صل_atlas_3"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_167 = function() {
	this.initialize(ss["صل_atlas_3"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_162 = function() {
	this.initialize(ss["صل_atlas_3"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_163 = function() {
	this.initialize(ss["صل_atlas_3"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_166 = function() {
	this.initialize(ss["صل_atlas_3"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_164 = function() {
	this.initialize(ss["صل_atlas_3"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_155 = function() {
	this.initialize(ss["صل_atlas_3"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_173 = function() {
	this.initialize(ss["صل_atlas_3"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_174 = function() {
	this.initialize(ss["صل_atlas_3"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_171 = function() {
	this.initialize(ss["صل_atlas_3"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_154 = function() {
	this.initialize(ss["صل_atlas_3"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_172 = function() {
	this.initialize(ss["صل_atlas_3"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_175 = function() {
	this.initialize(ss["صل_atlas_3"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_176 = function() {
	this.initialize(ss["صل_atlas_3"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_178 = function() {
	this.initialize(ss["صل_atlas_3"]);
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_179 = function() {
	this.initialize(ss["صل_atlas_3"]);
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_180 = function() {
	this.initialize(ss["صل_atlas_3"]);
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_141 = function() {
	this.initialize(ss["صل_atlas_3"]);
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_142 = function() {
	this.initialize(ss["صل_atlas_3"]);
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_177 = function() {
	this.initialize(ss["صل_atlas_3"]);
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_140 = function() {
	this.initialize(ss["صل_atlas_3"]);
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_138 = function() {
	this.initialize(ss["صل_atlas_3"]);
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_139 = function() {
	this.initialize(ss["صل_atlas_3"]);
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_136 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_135 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_133 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_134 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_137 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_131 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_126 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_125 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_127 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_124 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_123 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_122 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_121 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_120 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_119 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_118 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_116 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_117 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_115 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_113 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_112 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_111 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_110 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_130 = function() {
	this.initialize(ss["صل_atlas_3"]);
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_109 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_232 = function() {
	this.initialize(ss["صل_atlas_3"]);
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_108 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_107 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_106 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_105 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_104 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_103 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_102 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_101 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_100 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_96 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_99 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_98 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_97 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_94 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_93 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_92 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_91 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_89 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_87 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_85 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_83 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_90 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_84 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_80 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_81 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_82 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_79 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_78 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_75 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_77 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_76 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_74 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_73 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_72 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_70 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_71 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_69 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_66 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_67 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_68 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_64 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_65 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_63 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_60 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_62 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_61 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_59 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_57 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_55 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_58 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_56 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_54 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_52 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_53 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_49 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_50 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_51 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_47 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_46 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_48 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_45 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_44 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_42 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_41 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_43 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_40 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_39 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_38 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_36 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_35 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_34 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_33 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_32 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_37 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_31 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_28 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_27 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_25 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_30 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_29 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_26 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_24 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_23 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_21 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_22 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_19 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(126);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_18 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(127);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_20 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(128);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_17 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(129);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(130);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_15 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(131);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_14 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(132);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["صل_atlas_3"]);
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(133);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_129 = function() {
	this.initialize(ss["صل_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_132 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(134);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["صل_atlas_3"]);
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["صل_atlas_3"]);
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.Asset2 = function() {
	this.initialize(ss["صل_atlas_3"]);
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib._46092Converted = function() {
	this.initialize(img._46092Converted);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2491,1808);


(lib.ابدأ = function() {
	this.initialize(ss["صل_atlas_3"]);
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.book2x = function() {
	this.initialize(ss["صل_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.image_5 = function() {
	this.initialize(ss["صل_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.image_6 = function() {
	this.initialize(ss["صل_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.image_4 = function() {
	this.initialize(ss["صل_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.rfgv42x = function() {
	this.initialize(ss["صل_atlas_3"]);
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.image_7 = function() {
	this.initialize(ss["صل_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.image_10 = function() {
	this.initialize(ss["صل_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.foka3a2x = function() {
	this.initialize(ss["صل_atlas_3"]);
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.hnbg22x = function() {
	this.initialize(ss["صل_atlas_3"]);
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["صل_atlas_3"]);
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.image_3 = function() {
	this.initialize(ss["صل_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_212 = function() {
	this.initialize(ss["صل_atlas_4"]);
	this.gotoAndStop(135);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["صل_atlas_3"]);
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_222 = function() {
	this.initialize(ss["صل_atlas_2"]);
	this.gotoAndStop(9);
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


(lib.win2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_245();
	this.instance.setTransform(-10.3,-11.45,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10.3,-11.4,41.5,43);


(lib.win1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.hnbg22x();
	this.instance.setTransform(31,0,0.2371,0.2307);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(31,0,78,77.1);


(lib.win = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_244();
	this.instance.setTransform(57,19,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(57,19,34,34);


(lib.winMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var that = this
		function randomIntFromInterval(min, max) { // min and max included 
			return Math.floor(Math.random() * (max - min + 1) + min)
		}
		
		function randomFromInterval(min, max) {
			return Math.random() * (max - min) + min;
		}
		
		
		var inter = setInterval(() => {
		  addNjm(); 
		}, 200);
		
		
		setTimeout(
		
		clearInterval
		
		, 4000 , inter
		)
		function addNjm() {
		
			for (var i = 0 ; i < 7 ; i++) {
		
				var scl = randomFromInterval(0.2, 1)
		
				var inverse = randomIntFromInterval(0, 1)
				inverse = inverse == 0 ? -1 : 1
		
				var inv_scl = scl * inverse
		
				var xs = randomIntFromInterval(300, 500)
		
				var njm = i % 2 == 0 ? new lib.nejm() : i % 3 == 0 ?new lib.nejm2():new lib.nejm1()
		
		
				njm.x = xs
				njm.y = 300
		
				njm.scaleX = inv_scl
				njm.scaleY = scl
		
		
				that.addChild(njm)
		
			
		}
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.winMc, new cjs.Rectangle(0,0,0,0), null);


(lib.whites = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_233();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,32.5,56.5);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.foka3a2x();
	this.instance.setTransform(-128.5,-111);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-128.5,-111,257,222);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_237();
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
	this.instance = new lib.CachedBmp_239();
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


(lib.leps = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_131();
	this.instance.setTransform(-7.7,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.7,0,81.5,20);


(lib.head = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_232();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,229,190);


(lib.CompoundPath_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_97();
	this.instance.setTransform(-0.05,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_3, new cjs.Rectangle(0,0,22.5,43), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.book2x();
	this.instance.setTransform(0,0,0.2272,0.1895);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,126.6,106);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_12();
	this.instance.setTransform(68.1,-4.7,0.4883,0.4883);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(68.1,-4.7,573.1999999999999,45.900000000000006);


(lib.nejm2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_89 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(89).call(this.frame_89).wait(1));

	// Layer_1
	this.instance = new lib.win1("synched",0);
	this.instance.setTransform(99,796.55,1,1,0,0,0,67.6,44.6);

	this.instance_1 = new lib.win2("synched",0);
	this.instance_1.setTransform(113.95,-191.4,1,1,74.9998,0,0,67.6,44.6);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,rotation:74.9998,x:113.95,y:-191.4},13,cjs.Ease.quadOut).to({_off:false,y:848.6},75,cjs.Ease.cubicInOut).to({_off:true},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:false},13,cjs.Ease.quadOut).to({_off:true,y:848.6},75,cjs.Ease.cubicInOut).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-281.1,170.3,1178.1);


(lib.nejm1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_89 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(89).call(this.frame_89).wait(1));

	// Layer_1
	this.instance = new lib.win1("synched",0);
	this.instance.setTransform(99,732.55,1,1,0,0,0,67.6,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:247,y:-247.45},12,cjs.Ease.quadOut).wait(1).to({regX:70,regY:38.5,rotation:5.659,x:249.95,y:-253.3},0).wait(1).to({rotation:12.8373,x:250.65,y:-252.85},0).wait(1).to({rotation:21.6077,x:251.4,y:-252.2},0).wait(1).to({rotation:32.0485,x:252.2,y:-251.3},0).wait(1).to({rotation:44.2443,x:252.9,y:-250.1},0).wait(1).to({rotation:58.2859,x:253.35,y:-248.6},0).wait(1).to({scaleX:0.9999,scaleY:0.9999,rotation:74.2715,x:253.4,y:-246.85},0).wait(1).to({rotation:92.3074,x:252.9,y:-244.85},0).wait(1).to({rotation:112.5087,x:251.6,y:-243},0).wait(1).to({regX:67.8,regY:44.7,rotation:135.0006,x:246.9,y:-247.5},0).wait(1).to({regX:70,regY:38.5,x:249.7,y:-227.7},0).wait(1).to({y:-213.9},0).wait(1).to({y:-200.05},0).wait(1).to({y:-186.15},0).wait(1).to({y:-172.3},0).wait(1).to({y:-158.35},0).wait(1).to({y:-144.45},0).wait(1).to({y:-130.5},0).wait(1).to({y:-116.5},0).wait(1).to({y:-102.5},0).wait(1).to({y:-88.5},0).wait(1).to({y:-74.45},0).wait(1).to({y:-60.4},0).wait(1).to({y:-46.3},0).wait(1).to({y:-32.2},0).wait(1).to({y:-18.05},0).wait(1).to({y:-3.9},0).wait(1).to({y:10.25},0).wait(1).to({y:24.4},0).wait(1).to({y:38.6},0).wait(1).to({y:52.85},0).wait(1).to({y:67.1},0).wait(1).to({y:81.4},0).wait(1).to({y:95.7},0).wait(1).to({y:110.05},0).wait(1).to({y:124.4},0).wait(1).to({y:138.75},0).wait(1).to({y:153.15},0).wait(1).to({y:167.55},0).wait(1).to({y:182},0).wait(1).to({y:196.45},0).wait(1).to({y:210.9},0).wait(1).to({y:225.4},0).wait(1).to({y:239.95},0).wait(1).to({y:254.5},0).wait(1).to({y:269.05},0).wait(1).to({y:283.65},0).wait(1).to({y:298.25},0).wait(1).to({y:312.9},0).wait(1).to({y:327.55},0).wait(1).to({y:342.2},0).wait(1).to({y:356.9},0).wait(1).to({y:371.65},0).wait(1).to({y:386.4},0).wait(1).to({y:401.15},0).wait(1).to({y:415.95},0).wait(1).to({y:430.75},0).wait(1).to({y:445.6},0).wait(1).to({y:460.45},0).wait(1).to({y:475.3},0).wait(1).to({y:490.2},0).wait(1).to({y:505.15},0).wait(1).to({y:520.1},0).wait(1).to({y:535.05},0).wait(1).to({y:550.05},0).wait(1).to({y:565.05},0).wait(1).to({y:580.1},0).wait(1).to({y:595.15},0).wait(1).to({y:610.25},0).wait(1).to({y:625.35},0).wait(1).to({y:640.45},0).wait(1).to({y:655.6},0).wait(1).to({y:670.8},0).wait(1).to({y:685.95},0).wait(1).to({y:701.2},0).wait(1).to({regX:67.8,regY:44.7,x:246.9,y:710.5},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-304.9,307.8,1076.1);


(lib.nejm = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_79 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(79).call(this.frame_79).wait(1));

	// Layer_1
	this.instance = new lib.win("synched",0);
	this.instance.setTransform(104,594.05,1,1,0,0,0,67.6,44.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:192,y:-186.95},15,cjs.Ease.quadOut).to({x:283,y:738},63,cjs.Ease.quadInOut).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-212.5,306.4,958.9);


(lib.grapghayma = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_127();
	this.instance.setTransform(7.7,21.5,0.3953,0.3953);

	this.instance_1 = new lib.CachedBmp_126();
	this.instance_1.setTransform(7.7,21.5,0.3953,0.3953);

	this.instance_2 = new lib.CachedBmp_125();
	this.instance_2.setTransform(19.95,0,0.3953,0.3953);

	this.instance_3 = new lib.CachedBmp_124();
	this.instance_3.setTransform(20.9,35.7,0.3953,0.3953);

	this.instance_4 = new lib.CompoundPath_3();
	this.instance_4.setTransform(10.7,35.75,0.0581,0.0588,0,0,0,10.3,25.6);
	this.instance_4.alpha = 0.4688;

	this.instance_5 = new lib.CachedBmp_123();
	this.instance_5.setTransform(16.4,34.1,0.3953,0.3953);

	this.instance_6 = new lib.CachedBmp_122();
	this.instance_6.setTransform(18.95,32,0.3953,0.3953);

	this.instance_7 = new lib.CachedBmp_121();
	this.instance_7.setTransform(13.65,35.65,0.3953,0.3953);

	this.instance_8 = new lib.CachedBmp_120();
	this.instance_8.setTransform(14.9,29.4,0.3953,0.3953);

	this.instance_9 = new lib.CachedBmp_119();
	this.instance_9.setTransform(12.3,32.1,0.3953,0.3953);

	this.instance_10 = new lib.CachedBmp_118();
	this.instance_10.setTransform(21.95,26.6,0.3953,0.3953);

	this.instance_11 = new lib.CachedBmp_117();
	this.instance_11.setTransform(20.75,26.6,0.3953,0.3953);

	this.instance_12 = new lib.CachedBmp_116();
	this.instance_12.setTransform(24.25,20.65,0.3953,0.3953);

	this.instance_13 = new lib.CachedBmp_115();
	this.instance_13.setTransform(23.75,17.1,0.3953,0.3953);

	this.instance_14 = new lib.CachedBmp_115();
	this.instance_14.setTransform(6.3,17.3,0.3953,0.3953);

	this.instance_15 = new lib.CachedBmp_113();
	this.instance_15.setTransform(0,15.4,0.3953,0.3953);

	this.instance_16 = new lib.CachedBmp_112();
	this.instance_16.setTransform(27.55,21.65,0.3953,0.3953);

	this.instance_17 = new lib.CachedBmp_111();
	this.instance_17.setTransform(18.7,10.9,0.3953,0.3953);

	this.instance_18 = new lib.CachedBmp_110();
	this.instance_18.setTransform(12.9,11,0.3953,0.3953);

	this.instance_19 = new lib.CachedBmp_109();
	this.instance_19.setTransform(14.8,19.95,0.3953,0.3953);

	this.instance_20 = new lib.CachedBmp_108();
	this.instance_20.setTransform(19.95,0,0.3953,0.3953);

	this.instance_21 = new lib.CachedBmp_107();
	this.instance_21.setTransform(19.7,16.1,0.3953,0.3953);

	this.instance_22 = new lib.CachedBmp_106();
	this.instance_22.setTransform(20.2,15.55,0.3953,0.3953);

	this.instance_23 = new lib.CachedBmp_105();
	this.instance_23.setTransform(19.15,14.5,0.3953,0.3953);

	this.instance_24 = new lib.CachedBmp_104();
	this.instance_24.setTransform(11,16.2,0.3953,0.3953);

	this.instance_25 = new lib.CachedBmp_103();
	this.instance_25.setTransform(11.5,15.65,0.3953,0.3953);

	this.instance_26 = new lib.CachedBmp_102();
	this.instance_26.setTransform(10.45,14.6,0.3953,0.3953);

	this.instance_27 = new lib.CachedBmp_101();
	this.instance_27.setTransform(29.85,15.25,0.3953,0.3953);

	this.instance_28 = new lib.CachedBmp_100();
	this.instance_28.setTransform(27.55,21.65,0.3953,0.3953);

	this.instance_29 = new lib.CachedBmp_99();
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
	this.instance = new lib.CachedBmp_96();
	this.instance.setTransform(0,1.4,0.3953,0.3953);

	this.instance_1 = new lib.CachedBmp_96();
	this.instance_1.setTransform(-7.9,1.4,0.3953,0.3953);

	this.instance_2 = new lib.CachedBmp_94();
	this.instance_2.setTransform(-1.5,-1.05,0.3953,0.3953);

	this.instance_3 = new lib.CachedBmp_93();
	this.instance_3.setTransform(-6.1,-1.2,0.3953,0.3953);

	this.instance_4 = new lib.CachedBmp_92();
	this.instance_4.setTransform(-3.95,3.4,0.3953,0.3953);

	this.instance_5 = new lib.CachedBmp_91();
	this.instance_5.setTransform(-1.35,1.75,0.3953,0.3953);

	this.instance_6 = new lib.CachedBmp_90();
	this.instance_6.setTransform(-1.1,1.45,0.3953,0.3953);

	this.instance_7 = new lib.CachedBmp_89();
	this.instance_7.setTransform(-1.6,0.8,0.3953,0.3953);

	this.instance_8 = new lib.CachedBmp_91();
	this.instance_8.setTransform(-5.6,1.75,0.3953,0.3953);

	this.instance_9 = new lib.CachedBmp_87();
	this.instance_9.setTransform(-5.35,1.45,0.3953,0.3953);

	this.instance_10 = new lib.CachedBmp_89();
	this.instance_10.setTransform(-5.85,0.8,0.3953,0.3953);

	this.instance_11 = new lib.CachedBmp_85();
	this.instance_11.setTransform(-11.75,-5.05,0.3953,0.3953);

	this.instance_12 = new lib.CachedBmp_84();
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
	this.instance = new lib.CachedBmp_23();
	this.instance.setTransform(16.5,17.7,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_22();
	this.instance_1.setTransform(9.9,17.8,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_21();
	this.instance_2.setTransform(15.6,14.95,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_20();
	this.instance_3.setTransform(9.9,14.85,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_19();
	this.instance_4.setTransform(17.35,19.25,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_18();
	this.instance_5.setTransform(8.45,19.55,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_17();
	this.instance_6.setTransform(12.25,19.95,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_16();
	this.instance_7.setTransform(16.15,17.1,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_15();
	this.instance_8.setTransform(9.45,17.3,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_14();
	this.instance_9.setTransform(6,11.25,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_53();
	this.instance_10.setTransform(13.25,16.05,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_52();
	this.instance_11.setTransform(3.9,16.25,0.5,0.5);

	this.instance_12 = new lib.CachedBmp_51();
	this.instance_12.setTransform(11.9,11.7,0.5,0.5);

	this.instance_13 = new lib.CachedBmp_50();
	this.instance_13.setTransform(3.9,11.6,0.5,0.5);

	this.instance_14 = new lib.CachedBmp_49();
	this.instance_14.setTransform(14.4,18.45,0.5,0.5);

	this.instance_15 = new lib.CachedBmp_48();
	this.instance_15.setTransform(1.85,18.95,0.5,0.5);

	this.instance_16 = new lib.CachedBmp_47();
	this.instance_16.setTransform(7.15,19.5,0.5,0.5);

	this.instance_17 = new lib.CachedBmp_46();
	this.instance_17.setTransform(12.7,15.15,0.5,0.5);

	this.instance_18 = new lib.CachedBmp_45();
	this.instance_18.setTransform(3.3,15.4,0.5,0.5);

	this.instance_19 = new lib.CachedBmp_44();
	this.instance_19.setTransform(-1.55,6,0.5,0.5);

	this.instance_20 = new lib.CachedBmp_43();
	this.instance_20.setTransform(-1.75,26.55,0.5,0.5);

	this.instance_21 = new lib.CachedBmp_42();
	this.instance_21.setTransform(-3.4,24.05,0.5,0.5);

	this.instance_22 = new lib.CachedBmp_41();
	this.instance_22.setTransform(-8.6,12.25,0.5,0.5);

	this.instance_23 = new lib.CachedBmp_40();
	this.instance_23.setTransform(-4.25,8.4,0.5,0.5);

	this.instance_24 = new lib.CachedBmp_39();
	this.instance_24.setTransform(-5.95,16.75,0.5,0.5);

	this.instance_25 = new lib.CachedBmp_38();
	this.instance_25.setTransform(-7.6,20.7,0.5,0.5);

	this.instance_26 = new lib.CachedBmp_37();
	this.instance_26.setTransform(20.2,19.45,0.5,0.5);

	this.instance_27 = new lib.CachedBmp_36();
	this.instance_27.setTransform(3.3,28.5,0.5,0.5);

	this.instance_28 = new lib.CachedBmp_35();
	this.instance_28.setTransform(18.95,22.95,0.5,0.5);

	this.instance_29 = new lib.CachedBmp_34();
	this.instance_29.setTransform(16.6,26,0.5,0.5);

	this.instance_30 = new lib.CachedBmp_33();
	this.instance_30.setTransform(9.35,29,0.5,0.5);

	this.instance_31 = new lib.CachedBmp_32();
	this.instance_31.setTransform(13.7,28.3,0.5,0.5);

	this.instance_32 = new lib.CachedBmp_31();
	this.instance_32.setTransform(-3.45,3.9,0.5,0.5);

	this.instance_33 = new lib.CachedBmp_30();
	this.instance_33.setTransform(20.55,15.45,0.5,0.5);

	this.instance_34 = new lib.CachedBmp_29();
	this.instance_34.setTransform(19.9,10.6,0.5,0.5);

	this.instance_35 = new lib.CachedBmp_28();
	this.instance_35.setTransform(18,5.75,0.5,0.5);

	this.instance_36 = new lib.CachedBmp_27();
	this.instance_36.setTransform(2.2,2.9,0.5,0.5);

	this.instance_37 = new lib.CachedBmp_26();
	this.instance_37.setTransform(6.5,-0.5,0.5,0.5);

	this.instance_38 = new lib.CachedBmp_25();
	this.instance_38.setTransform(14.55,0.6,0.5,0.5);

	this.instance_39 = new lib.CachedBmp_24();
	this.instance_39.setTransform(10.6,-0.05,0.5,0.5);

	this.instance_40 = new lib.Symbol4("synched",0);
	this.instance_40.setTransform(11.3,15.3,0.701,0.701,0,0,0,16.8,16.9);

	this.instance_41 = new lib.CachedBmp_83();
	this.instance_41.setTransform(18.35,15.65,0.5,0.5);

	this.instance_42 = new lib.CachedBmp_82();
	this.instance_42.setTransform(9.8,15.85,0.5,0.5);

	this.instance_43 = new lib.CachedBmp_81();
	this.instance_43.setTransform(17.1,11.65,0.5,0.5);

	this.instance_44 = new lib.CachedBmp_80();
	this.instance_44.setTransform(9.8,11.6,0.5,0.5);

	this.instance_45 = new lib.CachedBmp_79();
	this.instance_45.setTransform(19.4,17.85,0.5,0.5);

	this.instance_46 = new lib.CachedBmp_78();
	this.instance_46.setTransform(7.95,18.3,0.5,0.5);

	this.instance_47 = new lib.CachedBmp_77();
	this.instance_47.setTransform(12.8,18.85,0.5,0.5);

	this.instance_48 = new lib.CachedBmp_76();
	this.instance_48.setTransform(17.85,14.85,0.5,0.5);

	this.instance_49 = new lib.CachedBmp_75();
	this.instance_49.setTransform(9.25,15.05,0.5,0.5);

	this.instance_50 = new lib.CachedBmp_74();
	this.instance_50.setTransform(4.8,6.5,0.5,0.5);

	this.instance_51 = new lib.CachedBmp_73();
	this.instance_51.setTransform(1.7,23.35,0.5,0.5);

	this.instance_52 = new lib.CachedBmp_72();
	this.instance_52.setTransform(1.35,20.55,0.5,0.5);

	this.instance_53 = new lib.CachedBmp_71();
	this.instance_53.setTransform(-0.1,8.65,0.5,0.5);

	this.instance_54 = new lib.CachedBmp_70();
	this.instance_54.setTransform(4.75,5.95,0.5,0.5);

	this.instance_55 = new lib.CachedBmp_69();
	this.instance_55.setTransform(1.1,13.25,0.5,0.5);

	this.instance_56 = new lib.CachedBmp_68();
	this.instance_56.setTransform(-1.5,17.1,0.5,0.5);

	this.instance_57 = new lib.CachedBmp_67();
	this.instance_57.setTransform(23.7,21.6,0.5,0.5);

	this.instance_58 = new lib.CachedBmp_66();
	this.instance_58.setTransform(5.65,25.95,0.5,0.5);

	this.instance_59 = new lib.CachedBmp_65();
	this.instance_59.setTransform(21.8,24.3,0.5,0.5);

	this.instance_60 = new lib.CachedBmp_64();
	this.instance_60.setTransform(19,26.5,0.5,0.5);

	this.instance_61 = new lib.CachedBmp_63();
	this.instance_61.setTransform(10.7,27.55,0.5,0.5);

	this.instance_62 = new lib.CachedBmp_62();
	this.instance_62.setTransform(15.7,27.85,0.5,0.5);

	this.instance_63 = new lib.CachedBmp_61();
	this.instance_63.setTransform(6.45,2.2,0.5,0.5);

	this.instance_64 = new lib.CachedBmp_60();
	this.instance_64.setTransform(24.9,18.4,0.5,0.5);

	this.instance_65 = new lib.CachedBmp_59();
	this.instance_65.setTransform(25.2,14.55,0.5,0.5);

	this.instance_66 = new lib.CachedBmp_58();
	this.instance_66.setTransform(24.45,9.75,0.5,0.5);

	this.instance_67 = new lib.CachedBmp_57();
	this.instance_67.setTransform(11.75,2.65,0.5,0.5);

	this.instance_68 = new lib.CachedBmp_56();
	this.instance_68.setTransform(15.5,0.7,0.5,0.5);

	this.instance_69 = new lib.CachedBmp_55();
	this.instance_69.setTransform(22.1,4.25,0.5,0.5);

	this.instance_70 = new lib.CachedBmp_54();
	this.instance_70.setTransform(18.85,2.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10}]},4).to({state:[{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.6,-0.5,38.8,36);


(lib.Symbol4copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_24 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(24).call(this.frame_24).wait(1));

	// Layer_1
	this.instance = new lib.Symbol5("synched",0);
	this.instance.setTransform(173.9,104.65,0.0254,1,0,0,0,333.2,19.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:332.8,scaleX:0.4766,scaleY:0.7699,x:153.8,y:108.25},24).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(27.7,80.6,273.2,45.900000000000006);


(lib.Symbol1copy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Tween2("synched",0);
	this.instance.setTransform(0,222,1,1,0,0,0,-128.5,111);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,257,222);


(lib.bgrdcopy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer_3
	this.instance = new lib.CachedBmp_8();
	this.instance.setTransform(51.3,-4.4,0.5,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	// Layer_4
	this.instance_1 = new lib.Symbol12("synched",0);
	this.instance_1.setTransform(57.35,50.05,0.6115,0.4954,0,0,0,0.1,0);

	this.instance_2 = new lib.CachedBmp_9();
	this.instance_2.setTransform(-2.95,-3.95,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_10();
	this.instance_3.setTransform(-2.95,-2.95,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_11();
	this.instance_4.setTransform(-2.95,-2.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.9,-4.4,120,107.5);


(lib.bgrd = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(4));

	// Layer_3
	this.instance = new lib.CachedBmp_8();
	this.instance.setTransform(53.6,95.55,0.5,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3).to({_off:false},0).wait(1));

	// Layer_4
	this.instance_1 = new lib.Symbol12("synched",0);
	this.instance_1.setTransform(57.35,50.05,0.6115,0.4954,0,0,0,0.1,0);

	this.instance_2 = new lib.CachedBmp_9();
	this.instance_2.setTransform(-2.95,-2.95,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_10();
	this.instance_3.setTransform(-2.95,-2.95,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_11();
	this.instance_4.setTransform(-2.95,-2.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-2.9,-2.9,120,107.5);


(lib.allhead = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.whites("synched",0);
	this.instance.setTransform(322.15,243.25,1,1,0,0,0,16.2,28.2);

	this.instance_1 = new lib.leps("synched",0);
	this.instance_1.setTransform(404.95,311.55,1,1,0,0,0,37.2,7);

	this.instance_2 = new lib.CachedBmp_132();
	this.instance_2.setTransform(347,298.1,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_212();
	this.instance_3.setTransform(357,256.05,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_222();
	this.instance_4.setTransform(288,173,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(288,173,229,206);


(lib.tayr = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_238();
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
	this.instance.setTransform(3,4,0.1677,0.103);

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
	this.instance = new lib.CachedBmp_236();
	this.instance.setTransform(7.15,0.6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Symbol 12
	this.bkg = new lib.bgrd();
	this.bkg.name = "bkg";
	this.bkg.setTransform(57.2,50.1,1,1,0,0,0,57.2,50.1);

	this.timeline.addTween(cjs.Tween.get(this.bkg).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.nahla, new cjs.Rectangle(-0.9,-0.7,116.5,101.5), null);


(lib.lossMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_77 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(77).call(this.frame_77).wait(1));

	// white
	this.instance = new lib.whites("synched",0);
	this.instance.setTransform(322.15,243.25,1,1,0,0,0,16.2,28.2);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(18).to({_off:false},0).wait(12).to({startPosition:0},0).to({x:319.65,y:251.25},9).to({x:320.65,y:242.25},3).to({x:321.15,y:251.25},10).to({x:320.65,y:242.25},4).to({x:322.15,y:248.75},12).to({y:243.25},9).wait(1));

	// Layer_2
	this.instance_1 = new lib.allhead("synched",0);
	this.instance_1.setTransform(402.5,123,1,1,0,0,0,402.5,276);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({y:276},17,cjs.Ease.elasticOut).to({_off:true},1).wait(60));

	// leps
	this.instance_2 = new lib.leps("synched",0);
	this.instance_2.setTransform(404.95,311.55,1,1,0,0,0,37.2,7);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(18).to({_off:false},0).wait(2).to({x:408.95,y:304.55},0).wait(2).to({startPosition:0},0).wait(2).to({y:303.05},0).wait(2).to({startPosition:0},0).wait(2).to({y:301.55},0).to({_off:true},2).wait(48));

	// mouth
	this.instance_3 = new lib.CachedBmp_132();
	this.instance_3.setTransform(347,298.1,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_133();
	this.instance_4.setTransform(347,297.65,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_134();
	this.instance_5.setTransform(347,297.2,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_135();
	this.instance_6.setTransform(347,296.75,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_136();
	this.instance_7.setTransform(347,296.3,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_137();
	this.instance_8.setTransform(347,295.85,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_138();
	this.instance_9.setTransform(347,295.4,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_139();
	this.instance_10.setTransform(347,294.95,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_140();
	this.instance_11.setTransform(347,294.5,0.5,0.5);

	this.instance_12 = new lib.CachedBmp_141();
	this.instance_12.setTransform(347,294,0.5,0.5);

	this.instance_13 = new lib.CachedBmp_142();
	this.instance_13.setTransform(347,293.55,0.5,0.5);

	this.instance_14 = new lib.CachedBmp_180();
	this.instance_14.setTransform(347,293.1,0.5,0.5);

	this.instance_15 = new lib.CachedBmp_179();
	this.instance_15.setTransform(347,289.5,0.5,0.5);

	this.instance_16 = new lib.CachedBmp_178();
	this.instance_16.setTransform(347,285.85,0.5,0.5);

	this.instance_17 = new lib.CachedBmp_177();
	this.instance_17.setTransform(347,282.2,0.5,0.5);

	this.instance_18 = new lib.CachedBmp_176();
	this.instance_18.setTransform(347,278.55,0.5,0.5);

	this.instance_19 = new lib.CachedBmp_175();
	this.instance_19.setTransform(347,274.95,0.5,0.5);

	this.instance_20 = new lib.CachedBmp_174();
	this.instance_20.setTransform(347,271.3,0.5,0.5);

	this.instance_21 = new lib.CachedBmp_173();
	this.instance_21.setTransform(347,267.65,0.5,0.5);

	this.instance_22 = new lib.CachedBmp_172();
	this.instance_22.setTransform(347,264,0.5,0.5);

	this.instance_23 = new lib.CachedBmp_171();
	this.instance_23.setTransform(347,260.4,0.5,0.5);

	this.instance_24 = new lib.CachedBmp_154();
	this.instance_24.setTransform(347,257.25,0.5,0.5);

	this.instance_25 = new lib.CachedBmp_155();
	this.instance_25.setTransform(347,254.05,0.5,0.5);

	this.instance_26 = new lib.CachedBmp_166();
	this.instance_26.setTransform(347,250.9,0.5,0.5);

	this.instance_27 = new lib.CachedBmp_164();
	this.instance_27.setTransform(347,253.05,0.5,0.5);

	this.instance_28 = new lib.CachedBmp_163();
	this.instance_28.setTransform(347,255.15,0.5,0.5);

	this.instance_29 = new lib.CachedBmp_162();
	this.instance_29.setTransform(347,257.3,0.5,0.5);

	this.instance_30 = new lib.CachedBmp_167();
	this.instance_30.setTransform(347,251.6,0.5,0.5);

	this.instance_31 = new lib.CachedBmp_168();
	this.instance_31.setTransform(347,252.3,0.5,0.5);

	this.instance_32 = new lib.CachedBmp_169();
	this.instance_32.setTransform(347,253,0.5,0.5);

	this.instance_33 = new lib.CachedBmp_170();
	this.instance_33.setTransform(347,253.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},18).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15,p:{y:289.5}}]},1).to({state:[{t:this.instance_16,p:{y:285.85}}]},1).to({state:[{t:this.instance_17,p:{y:282.2}}]},1).to({state:[{t:this.instance_18,p:{y:278.55}}]},1).to({state:[{t:this.instance_19,p:{y:274.95}}]},1).to({state:[{t:this.instance_20,p:{y:271.3}}]},1).to({state:[{t:this.instance_21,p:{y:267.65}}]},1).to({state:[{t:this.instance_22,p:{y:264}}]},1).to({state:[{t:this.instance_23,p:{y:260.4}}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_26}]},6).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_23,p:{y:259.4}}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_26}]},7).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_23,p:{y:254.4}}]},1).to({state:[{t:this.instance_22,p:{y:258.7}}]},1).to({state:[{t:this.instance_21,p:{y:263}}]},1).to({state:[{t:this.instance_20,p:{y:267.3}}]},1).to({state:[{t:this.instance_19,p:{y:271.6}}]},1).to({state:[{t:this.instance_18,p:{y:275.9}}]},1).to({state:[{t:this.instance_17,p:{y:280.2}}]},1).to({state:[{t:this.instance_16,p:{y:284.5}}]},1).to({state:[{t:this.instance_15,p:{y:288.8}}]},1).to({state:[{t:this.instance_14}]},1).wait(1));

	// eyes
	this.instance_34 = new lib.CachedBmp_212();
	this.instance_34.setTransform(357,256.05,0.5,0.5);
	this.instance_34._off = true;

	this.instance_35 = new lib.CachedBmp_182();
	this.instance_35.setTransform(357.05,256.2,0.5,0.5);

	this.instance_36 = new lib.CachedBmp_183();
	this.instance_36.setTransform(357.05,256.35,0.5,0.5);

	this.instance_37 = new lib.CachedBmp_184();
	this.instance_37.setTransform(357.1,256.45,0.5,0.5);

	this.instance_38 = new lib.CachedBmp_185();
	this.instance_38.setTransform(357.15,256.55,0.5,0.5);

	this.instance_39 = new lib.CachedBmp_186();
	this.instance_39.setTransform(357.15,256.65,0.5,0.5);

	this.instance_40 = new lib.CachedBmp_187();
	this.instance_40.setTransform(357.15,256.75,0.5,0.5);

	this.instance_41 = new lib.CachedBmp_188();
	this.instance_41.setTransform(357.15,256.85,0.5,0.5);

	this.instance_42 = new lib.CachedBmp_189();
	this.instance_42.setTransform(357.2,256.9,0.5,0.5);

	this.instance_43 = new lib.CachedBmp_190();
	this.instance_43.setTransform(357.25,256.95,0.5,0.5);

	this.instance_44 = new lib.CachedBmp_191();
	this.instance_44.setTransform(357.25,257,0.5,0.5);

	this.instance_45 = new lib.CachedBmp_192();
	this.instance_45.setTransform(357.3,257.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_34}]},18).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},29).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_34}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(18).to({_off:false},0).to({_off:true},1).wait(11).to({_off:false},0).wait(1).to({y:251.6},0).wait(1).to({y:247.15},0).wait(1).to({y:242.7},0).wait(1).to({y:238.25},0).wait(1).to({y:233.85},0).wait(1).to({y:229.4},0).wait(1).to({y:224.95},0).wait(1).to({y:220.5},0).wait(1).to({y:216.05},0).wait(30).to({y:220.5},0).wait(1).to({y:224.95},0).wait(1).to({y:229.4},0).wait(1).to({y:233.85},0).wait(1).to({y:238.25},0).wait(1).to({y:242.7},0).wait(1).to({y:247.15},0).wait(1).to({y:251.6},0).wait(1).to({y:256.05},0).wait(1));

	// headGraph
	this.instance_46 = new lib.head("synched",0);
	this.instance_46.setTransform(402.5,283.95,1,1,0,0,0,114.5,95);
	this.instance_46._off = true;

	this.instance_47 = new lib.CachedBmp_232();
	this.instance_47.setTransform(288,188.95,0.5,0.5);

	this.instance_48 = new lib.CachedBmp_214();
	this.instance_48.setTransform(288,186.95,0.5,0.5);

	this.instance_49 = new lib.CachedBmp_215();
	this.instance_49.setTransform(288,184.95,0.5,0.5);

	this.instance_50 = new lib.CachedBmp_216();
	this.instance_50.setTransform(288,182.95,0.5,0.5);

	this.instance_51 = new lib.CachedBmp_217();
	this.instance_51.setTransform(288,181,0.5,0.5);

	this.instance_52 = new lib.CachedBmp_218();
	this.instance_52.setTransform(288,179,0.5,0.5);

	this.instance_53 = new lib.CachedBmp_219();
	this.instance_53.setTransform(288,177,0.5,0.5);

	this.instance_54 = new lib.CachedBmp_220();
	this.instance_54.setTransform(288,175,0.5,0.5);

	this.instance_55 = new lib.CachedBmp_223();
	this.instance_55.setTransform(288,173,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_46}]},40).to({state:[{t:this.instance_46}]},2).to({state:[{t:this.instance_46}]},6).to({state:[{t:this.instance_46}]},4).to({state:[{t:this.instance_46}]},4).to({state:[{t:this.instance_46}]},7).to({state:[{t:this.instance_46}]},5).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_53}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_55}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(40).to({_off:false},0).to({y:278.95},2).to({y:283.95},6).to({y:287.95},4).to({y:280.95},4).to({y:284.95},7).to({y:286.95},5).to({_off:true},1).wait(9));

	// head
	this.instance_56 = new lib.CachedBmp_222();
	this.instance_56.setTransform(288,173,0.5,0.5);

	this.instance_57 = new lib.CachedBmp_223();
	this.instance_57.setTransform(288,173,0.5,0.5);

	this.instance_58 = new lib.CachedBmp_224();
	this.instance_58.setTransform(288,174.8,0.5,0.5);

	this.instance_59 = new lib.CachedBmp_225();
	this.instance_59.setTransform(288,176.55,0.5,0.5);

	this.instance_60 = new lib.CachedBmp_226();
	this.instance_60.setTransform(288,178.35,0.5,0.5);

	this.instance_61 = new lib.CachedBmp_227();
	this.instance_61.setTransform(288,180.1,0.5,0.5);

	this.instance_62 = new lib.CachedBmp_228();
	this.instance_62.setTransform(288,181.85,0.5,0.5);

	this.instance_63 = new lib.CachedBmp_229();
	this.instance_63.setTransform(288,183.6,0.5,0.5);

	this.instance_64 = new lib.CachedBmp_230();
	this.instance_64.setTransform(288,185.4,0.5,0.5);

	this.instance_65 = new lib.CachedBmp_231();
	this.instance_65.setTransform(288,187.15,0.5,0.5);

	this.instance_66 = new lib.CachedBmp_232();
	this.instance_66.setTransform(288,188.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_56}]},18).to({state:[{t:this.instance_57}]},12).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_60}]},1).to({state:[{t:this.instance_61}]},1).to({state:[{t:this.instance_62}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_65}]},1).to({state:[{t:this.instance_66}]},1).to({state:[]},1).wait(38));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(288,20,229,411.8);


(lib.khof = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_130();
	this.instance.setTransform(3.7,4.65,0.5,0.5);

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

	// Symbol 12
	this.bkg = new lib.bgrd();
	this.bkg.name = "bkg";
	this.bkg.setTransform(57.2,50.1,1,1,0,0,0,57.2,50.1);

	this.timeline.addTween(cjs.Tween.get(this.bkg).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.khalya, new cjs.Rectangle(-0.9,-0.7,116.5,101.5), null);


(lib.ghar3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.CachedBmp_98();
	this.instance.setTransform(24.55,63.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.instance_1 = new lib.image_7();
	this.instance_1.setTransform(3,62.45,0.1708,0.0877,0,180,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Symbol 12
	this.bkg = new lib.bgrdcopy();
	this.bkg.name = "bkg";
	this.bkg.setTransform(57.2,50.1,1,1,0,0,0,57.2,50.1);

	this.timeline.addTween(cjs.Tween.get(this.bkg).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ghar3, new cjs.Rectangle(-0.9,-0.7,116.5,101.5), null);


(lib.ghar1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.image_3();
	this.instance.setTransform(2,2,0.174,0.0842);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Symbol 12
	this.bkg = new lib.bgrdcopy();
	this.bkg.name = "bkg";
	this.bkg.setTransform(57.2,50.1,1,1,0,0,0,57.2,50.1);

	this.timeline.addTween(cjs.Tween.get(this.bkg).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ghar1, new cjs.Rectangle(-0.9,-0.7,116.5,101.5), null);


(lib.ghar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.image_5();
	this.instance.setTransform(4,3,0.1665,0.1051);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Symbol 12
	this.bkg = new lib.bgrdcopy();
	this.bkg.name = "bkg";
	this.bkg.setTransform(57.2,50.1,1,1,0,0,0,57.2,50.1);

	this.timeline.addTween(cjs.Tween.get(this.bkg).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ghar, new cjs.Rectangle(-0.9,-0.7,116.5,101.5), null);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_64 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(64).call(this.frame_64).wait(1));

	// Layer_3
	this.instance = new lib.ابدأ();
	this.instance.setTransform(10,-69,0.3624,0.2936);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(64).to({_off:false},0).wait(1));

	// Layer_3
	this.instance_1 = new lib.Symbol9("synched",0);
	this.instance_1.setTransform(-19.1,58.35,1,1,0,0,0,46.6,42.3);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(33).to({_off:false},0).wait(32));

	// Layer_5
	this.instance_2 = new lib.CachedBmp_13();
	this.instance_2.setTransform(-16.85,-66.25,0.4883,0.4883);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(64).to({_off:false},0).wait(1));

	// Layer_4
	this.instance_3 = new lib.Symbol1copy("synched",0);
	this.instance_3.setTransform(-2.15,11.2,0.0522,0.0502,0,0,0,39.2,222.9);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(44).to({_off:false},0).to({regX:39.6,regY:222.8,scaleX:0.4249,scaleY:0.3814},20).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.7,-73.7,155.9,195.7);


(lib.mcsil3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_243();
	this.instance.setTransform(195,227.25,0.5,0.5);

	this.RLINKTDD = new lib.tayr();
	this.RLINKTDD.name = "RLINKTDD";
	this.RLINKTDD.setTransform(80.75,170.25,0.9032,0.8684,0,0,0,57.3,50.1);

	this.RLINKTUU = new lib.khof();
	this.RLINKTUU.name = "RLINKTUU";
	this.RLINKTUU.setTransform(290.75,170.25,0.9032,0.8684,0,0,0,57.3,50.1);

	this.RLINKTEE = new lib.nahla();
	this.RLINKTEE.name = "RLINKTEE";
	this.RLINKTEE.setTransform(496.15,170.25,0.9032,0.8684,0,0,0,57.3,50.1);

	this.instance_1 = new lib.CachedBmp_242();
	this.instance_1.setTransform(249.05,40.65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.RLINKTEE},{t:this.RLINKTUU},{t:this.RLINKTDD},{t:this.instance}]}).wait(1));

	// Layer_2
	this.instance_2 = new lib.Symbol1("synched",0);
	this.instance_2.setTransform(570.2,54.4,1.1032,0.8684,0,0,0,149.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	// Layer_3
	this.RLINKBUU = new lib.ghar();
	this.RLINKBUU.name = "RLINKBUU";
	this.RLINKBUU.setTransform(80.75,349.55,0.9032,0.8684,0,0,0,57.3,50.1);

	this.RLINKBDD = new lib.och();
	this.RLINKBDD.name = "RLINKBDD";
	this.RLINKBDD.setTransform(293.05,349.55,0.9032,0.8684,0,0,0,57.3,50.1);

	this.RLINKBEE = new lib.khalya();
	this.RLINKBEE.name = "RLINKBEE";
	this.RLINKBEE.setTransform(444.4,306.05,0.8984,0.8675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.RLINKBEE},{t:this.RLINKBDD},{t:this.RLINKBUU}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.mcsil3, new cjs.Rectangle(28.2,36.2,543,357.40000000000003), null);


(lib.mcsil2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_241();
	this.instance.setTransform(164,237.25,0.5,0.5);

	this.RLINKTDD = new lib.tayr();
	this.RLINKTDD.name = "RLINKTDD";
	this.RLINKTDD.setTransform(80.75,170.25,0.9032,0.8684,0,0,0,57.3,50.1);

	this.RLINKTUU = new lib.khof();
	this.RLINKTUU.name = "RLINKTUU";
	this.RLINKTUU.setTransform(290.75,170.25,0.9032,0.8684,0,0,0,57.3,50.1);

	this.RLINKTEE = new lib.nahla();
	this.RLINKTEE.name = "RLINKTEE";
	this.RLINKTEE.setTransform(496.15,170.25,0.9032,0.8684,0,0,0,57.3,50.1);

	this.instance_1 = new lib.CachedBmp_240();
	this.instance_1.setTransform(249.05,40.65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.RLINKTEE},{t:this.RLINKTUU},{t:this.RLINKTDD},{t:this.instance}]}).wait(1));

	// Layer_2
	this.instance_2 = new lib.Symbol1("synched",0);
	this.instance_2.setTransform(570.2,54.4,1.1032,0.8684,0,0,0,149.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

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

}).prototype = getMCSymbolPrototype(lib.mcsil2, new cjs.Rectangle(28.2,36.2,543,357.40000000000003), null);


(lib.Mcsil0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.RLINKTDD = new lib.tayr();
	this.RLINKTDD.name = "RLINKTDD";
	this.RLINKTDD.setTransform(80.75,149.25,0.9032,0.8684,0,0,0,57.3,50.1);

	this.RLINKTUU = new lib.khof();
	this.RLINKTUU.name = "RLINKTUU";
	this.RLINKTUU.setTransform(290.75,149.25,0.9032,0.8684,0,0,0,57.3,50.1);

	this.RLINKTEE = new lib.nahla();
	this.RLINKTEE.name = "RLINKTEE";
	this.RLINKTEE.setTransform(496.15,149.25,0.9032,0.8684,0,0,0,57.3,50.1);

	this.instance = new lib.CachedBmp_234();
	this.instance.setTransform(249.05,40.65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.RLINKTEE},{t:this.RLINKTUU},{t:this.RLINKTDD}]}).wait(1));

	// Layer_2
	this.RLINKBEE = new lib.ghar3();
	this.RLINKBEE.name = "RLINKBEE";
	this.RLINKBEE.setTransform(501.6,336.1,1,1,0,0,0,57.2,50.1);

	this.RLINKBUU = new lib.ghar();
	this.RLINKBUU.name = "RLINKBUU";
	this.RLINKBUU.setTransform(86.2,336.1,1,1,0,0,0,57.2,50.1);

	this.RLINKBDD = new lib.ghar1();
	this.RLINKBDD.name = "RLINKBDD";
	this.RLINKBDD.setTransform(296.2,336.1,1,1,0,0,0,57.2,50.1);

	this.instance_1 = new lib.Symbol1("synched",0);
	this.instance_1.setTransform(570.2,54.4,1.1032,0.8684,0,0,0,149.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.RLINKBDD},{t:this.RLINKBUU},{t:this.RLINKBEE}]}).wait(1));

	// Layer_3
	this.instance_2 = new lib.CachedBmp_235();
	this.instance_2.setTransform(170,210.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Mcsil0, new cjs.Rectangle(28.1,36.2,543.1,350.6), null);


(lib.hijabb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// star
	this.start = new lib.Symbol7();
	this.start.name = "start";
	this.start.setTransform(404,267.1);

	this.timeline.addTween(cjs.Tween.get(this.start).wait(1));

	// quiste
	this.instance = new lib.Symbol4copy();
	this.instance.setTransform(239.4,31.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_4
	this.instance_1 = new lib.CachedBmp_129();
	this.instance_1.setTransform(2,0,0.4883,0.4883);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hijabb, new cjs.Rectangle(2,0,797.8,498), null);


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
		
		
		stage.enableMouseOver(20);
		createjs.Touch.enable(stage, true, true);
		
		stage.preventSelection = false;
		
		
		var currentpage = 0;
		var sumOfLinks = 0
		var numOfQ = 3
		var farExercice = 0
		var gameIsOver = false
		
		var myListofArraysFaul = [
			[],
			[],
			[]
		];
		var myListofArraysCorr = [
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
		
		var score = null
			function scorCalcul() {
		
				//correlated correct answer CCA
				// CCA =  correct answers(myListofArraysCorr) - incorrect(myListofArraysFaul)
				//If the correct answer CA in DND game is equal to wrong answer WA then
				// CCA is equal to 0	
		
		
				//weighted CCA 	
				// we devide CCA by all draged element in the exercices	done intel now
				//  CCA / sumOfdragged
		
				//we multiply by  (exercices done / total exercices)
		
				//lengOfLists(myListofArraysCorr) / (allQ_pages.length + lengOfLists(myListofArraysFaul))
		
				var sco = (lengOfLists(myListofArraysCorr) - lengOfLists(myListofArraysFaul)) / (sumOfLinks / 2)
				sco = Math.max(0, sco)
		
				var DoneByTotal = (farExercice + 1) / allQ_pages.length
				var scoreForStudnt = sumInner(allQ_pages) / allQ_pages.length
		
		
				console.log('sco', sco)
				console.log('sumOfdraged ', sumOfLinks)
		
				console.log('DoneByTotal', DoneByTotal)
		
				return [Math.round(sco * DoneByTotal * 100), Math.round(scoreForStudnt * 100)];
		
			}
		
		
		
		that.hijab.start.addEventListener('click', startfirst)
		function startfirst(e) {
		
			that.hijab.start.removeEventListener('click', startfirst)
			startSound('ibdaa')
		
			score = [0, 0]
			console.log('score', score)
			setTimeout(startSession, titleDuration['ibdaa'])
		
		}
		
		
		var cont = new createjs.Container();
		
		setTimeout(function () {
		
			var ind = that.getChildIndex(that.scoreBoard)
			that.addChildAt(cont, ind)
		
		}, 10);
		
		
		
		
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
		
		function showLossWinMc(boo) {
		
			createjs.Sound.stop()
		
			var lMc = boo ? new lib.winMc() : new lib.lossMc()
		
			var lsnd = boo ? 'win' : 'loss'
		
			startSound(lsnd)
			that.addChild(lMc)
		}
		
		
		function gameOver() {
		
			console.log('+++++++++++++++++game over+++++++++++++++++++')
			blockInteraction(true)
		
			showError()
		
			setTimeout(function () {
		
				showLossWinMc(false)
			}, 1200)
		
			send_statis()
		}
		
		function checkGameOver() {
		
			if (lengOfLists(myListofArraysFaul) == emoErrArray.length) {
		
				gameIsOver = true
		
				gameOver()
			}
		
		}
		
		
		function showError() {
		
			for (var i = 0; i < emoErrArray.length; i++) {
		
				createjs.Tween.get(emoErrArray[i]).to({
					rotation: 360
				}, 1000);
		
			}
		}
		
		function showNumOfemoError() {
		
			for (var i = lengOfLists(myListofArraysFaul) - 1; i > lengOfLists(myListofArraysFaul) - 4; i--) {
		
				createjs.Tween.get(emoErrArray[i])
					.to({
						rotation: 360
					}, 1000)
					.to({
						rotation: 0
					}, 0);
		
		
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
			that.hijab.visible = false
			cont.removeAllChildren()
		
			cont.mc = new lib['Mcsil' + currentpage]();
			cont.mc.name = 'Mcsil' + currentpage;
		
			console.log('Mcsil' + currentpage)
			farExercice = Math.max(farExercice, currentpage)
		
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
					if (!from_checkPrecedentQ) sumOfLinks += numOfLink
		
				}
		
		
			}
		
		
		
		var imageTimeAnime = 1500
			function animeImages() {
		
		
				blockInteraction(true)
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
		
				blockInteraction(false)
				return
				startSound('title' + 0)
		
				setTimeout(
					function () {
		
						blockInteraction(false)
					}, titleDuration['title' + 0]);
			}
		
		
			function blockInteraction(boo) {
		
				cont.mc.mouseEnabled = !boo
		
				if (gameIsOver) cont.mc.mouseEnabled = false
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
		
		
						linkArray[l].addEventListener("rollover", overBtn);
						linkArray[l].addEventListener("rollout", outBtn);
		
					}
		
					silMc.addEventListener("pressup", onup);
		
		
		
		
				}
		
				function removelisteners() {
		
		
					for (var l = 0; l < linkArray.length; l++) {
		
		
						linkArray[l].removeEventListener("mousedown", ondown);
						linkArray[l].removeEventListener("rollover", overBtn);
						linkArray[l].removeEventListener("rollout", outBtn);
		
		
					}
		
					silMc.removeEventListener("pressup", onup);
		
		
				}
		
		
		
				function overBtn(ev) {
		
		
					ev.currentTarget.bkg.gotoAndStop(1);
		
		
		
				}
				function outBtn(ev) {
		
		
					ev.currentTarget.bkg.gotoAndStop(0);
		
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
					TwomcArray[0].addEventListener("rollover", overBtn);
					TwomcArray[0].addEventListener("rollout", outBtn);
		
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
		
						if (iscorr) {
		
							TwomcArray[0].bkg.gotoAndStop(3)
							TwomcArray[1].bkg.gotoAndStop(3)
		
							TwomcArray[0].removeEventListener("rollout", outBtn);
							TwomcArray[1].removeEventListener("rollout", outBtn);
		
							TwomcArray[0].mouseEnabled = false
							TwomcArray[1].mouseEnabled = false
		
							startSound('addsound')
							myListofArraysCorr[currentpage].push(strngCode2 + ' , ' + strngCode1)
							correctCount += 1
						} else {
		
							TwomcArray[0].bkg.gotoAndStop(0)
							startSound('fault')
							//TwomcArray[1].bkg.gotoAndStop(0)
							animeFault(TwomcArray)
							myListofArraysFaul[currentpage].push(strngCode2 + ' , ' + strngCode1)
						}
		
					}
		
					checkGameOver()
					//targetTozero();
		
		
					if (conditionChangeSess() && !gameIsOver) {
		
		
						if (sessionAfterRightResp) {
		
							//setTimeout(startNextSession, 2000);
							startNextSession()
		
						} else {
		
							showNumOfemoError()
							removelisteners()
							startNextSession();
						}
					}
		
		
					downOnAcceptedMc = false;
					currentHit_sil = null;
				}
		
				function animeFault(arrFaulr) {
		
					blockInteraction(true)
		
					for (var i = 0; i < arrFaulr.length; i++) {
		
						createjs.Tween.get(arrFaulr[i])
							.to({
								rotation: 20
							}, 100)
							.to({
								rotation: -20
							}, 100)
							.to({
								rotation: 20
							}, 100)
							.to({
								rotation: -20
							}, 100)
							.to({
								rotation: 0
							}, 100).call(blockInteraction, [false]);
					}
		
		
				}
		
		
				function conditionChangeSess() {
		
		
					console.log('myListofArraysFaul[currentpage]', myListofArraysFaul[currentpage])
					console.log('allQ_pages', allQ_pages)
					if (correctCount == linkArray.length / 2) {
		
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
		
				function preStartSession() {
		
					setTimeout(function () {
		
						startSound('session')
		
					}, 1000);
		
		
					setTimeout(function () {
		
						startSession()
					}, 2500);
		
		
				}
		
				function startNextSession() {
		
					send_statis()
					console.log('from startNextSession check', from_checkPrecedentQ)
		
		
					if ((currentpage + 1) < numOfQ && allQ_pages[currentpage + 1].length == 0) {
						currentpage = currentpage + 1;
		
						preStartSession()
		
		
					} else {
		
						checkPrecedentQ()
		
		
					}
		
		
				}
		
				function checkPrecedentQ() {
		
					from_checkPrecedentQ = false;
					console.log('from checkPrecedentQ : allQ_pages', allQ_pages)
					for (var i = 0; i < allQ_pages.length; i++) {
		
						if (allQ_pages[i][allQ_pages[i].length - 1] == 0) {
		
							currentpage = i
		
							from_checkPrecedentQ = true;
		
		
							preStartSession()
		
		
							break
						}
					}
		
					if (!from_checkPrecedentQ) {
		
						showLossWinMc(true)
		
						send_statis();
					}
		
				}
		
		
		
		
		
		
				function ondown(ev) {
		
					ev.nativeEvent.preventDefault();
					downOnAcceptedMc = true;
		
		
					var mmc = ev.currentTarget;
		
					mmc.bkg.gotoAndStop(2)
					startSound('addsound')
		
					lastPoint = sbr.globalToLocal(ev.stageX, ev.stageY);
					
					silMc.addEventListener("pressmove", onpressmove_sil);
		
					mmc.removeEventListener("rollover", overBtn);
					mmc.removeEventListener("rollout", outBtn);
		
					TwomcArray[0] = mmc;
					strngOfLinkDown = TwomcArray[0].name.slice(1, 6);
					strngCode1 = TwomcArray[0].name.slice(6, 8);
		
		
		
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
		
					var col = (typeof color === 'undefined') ? "#00CC66" : color;
		
					silMc.shapeDraw0.graphics.beginStroke(col)
		
					.setStrokeStyle(3, "round")
		
					.moveTo(oldObject.x + AddRorL(oldObject).x, oldObject.y + AddRorL(oldObject).y)
		
					.lineTo(newObject.x + AddRorL(newObject).x, newObject.y + AddRorL(newObject).y);
		
		
					stage.update();
		
				}
		
		
		
		
			}
		
		
		
			function send_statis() {
		
				console.log('==++++++++++++++++++++++++++++++++++++++++++++++++==')
				console.log()
				console.log('allQ_pages', allQ_pages)
		
				console.log('myListofArraysFaul', myListofArraysFaul)
				score = scorCalcul()
				console.log('score ', score)
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
				id: "ibdaa",
				src: "ibdaa.mp3"
			}, {
				id: "title0",
				src: "title0.mp3"
			}], "mysound/");
		
		
		
		function handleFileLoad(event) {
			// A sound has been preloaded. This will fire multiple time
		
			//if (!event.id.startsWith('title')) return;
		
			sound_manif.push(event.id);
			myInstance = createjs.Sound.createInstance(event.id);
			console.log(event.id, myInstance.duration)
			titleDuration[event.id] = Math.round(myInstance.duration) + 200
		
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

	// hijab
	this.hijab = new lib.hijabb();
	this.hijab.name = "hijab";
	this.hijab.setTransform(-2.85,-7.1,1.015,1.024,0,0,0,0,-0.1);

	this.timeline.addTween(cjs.Tween.get(this.hijab).wait(1));

	// emg
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

	this.emoC3 = new lib.emogiCorr();
	this.emoC3.name = "emoC3";
	this.emoC3.setTransform(613.9,38.65);

	this.emoC2 = new lib.emogiCorr();
	this.emoC2.name = "emoC2";
	this.emoC2.setTransform(681.7,53.45,1,1,0,0,0,16.8,14.8);

	this.emoC1 = new lib.emogiCorr();
	this.emoC1.name = "emoC1";
	this.emoC1.setTransform(727.95,53.45,1,1,0,0,0,16.8,14.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.emoC1},{t:this.emoC2},{t:this.emoC3},{t:this.emoE1},{t:this.emoE2},{t:this.emoE3},{t:this.emoE4},{t:this.emoE5}]}).wait(1));

	// board
	this.scoreBoard = new lib.scorBar();
	this.scoreBoard.name = "scoreBoard";
	this.scoreBoard.setTransform(411.05,69.1,1,1,0,0,0,388.9,42.1);

	this.timeline.addTween(cjs.Tween.get(this.scoreBoard).wait(1));

	// Layer_2
	this.instance = new lib._46092Converted();
	this.instance.setTransform(0,0,0.3212,0.2766);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(399.2,243,409.8,260);
// library properties:
lib.properties = {
	id: 'DEAC4166318B4B47AD5E442104C63B05',
	width: 800,
	height: 500,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/_46092Converted.jpg?1669392937374", id:"_46092Converted"},
		{src:"images/صل_atlas_1.png?1669392937280", id:"صل_atlas_1"},
		{src:"images/صل_atlas_2.png?1669392937281", id:"صل_atlas_2"},
		{src:"images/صل_atlas_3.png?1669392937282", id:"صل_atlas_3"},
		{src:"images/صل_atlas_4.png?1669392937284", id:"صل_atlas_4"}
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