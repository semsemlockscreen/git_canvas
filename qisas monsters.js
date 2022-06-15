(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"qisas monsters_atlas_1", frames: [[0,997,1600,992],[0,0,1596,995]]},
		{name:"qisas monsters_atlas_2", frames: [[1447,347,85,103],[1905,369,108,74],[1910,0,81,239],[1910,241,83,126],[1310,749,220,303],[778,401,226,100],[1006,467,74,53],[1604,305,299,303],[1604,0,304,303],[0,534,1308,171],[1993,0,45,86],[0,707,1308,171],[1548,467,37,36],[1153,467,38,36],[922,503,37,21],[2006,445,38,38],[0,880,1308,171],[1993,134,41,41],[2015,345,31,30],[1995,304,40,39],[1995,263,41,39],[1993,177,41,41],[1176,401,21,23],[1995,220,41,41],[885,503,35,23],[2015,407,21,23],[984,503,20,22],[1153,505,20,22],[1176,426,21,23],[1175,505,20,22],[961,503,21,23],[1548,505,20,22],[2037,88,9,24],[1570,505,20,22],[2040,49,5,21],[2046,216,2,5],[2040,23,6,24],[1905,317,3,5],[1199,401,4,8],[2045,208,3,6],[2045,258,3,6],[2036,134,12,18],[1905,324,3,5],[1587,467,14,24],[2038,243,5,10],[1534,397,65,26],[2007,345,6,6],[2038,407,6,6],[2047,49,1,1],[2009,362,4,4],[1905,331,3,4],[1589,425,7,4],[2040,0,8,21],[2046,407,2,2],[2046,411,2,2],[1598,425,4,4],[2038,267,7,7],[2047,52,1,1],[2047,55,1,1],[2038,415,6,6],[1598,431,4,4],[2038,423,6,6],[1534,347,65,48],[2047,58,1,1],[1542,433,4,4],[1597,437,4,4],[778,503,69,27],[2038,294,8,5],[2046,415,2,2],[2038,276,7,7],[2047,61,1,1],[2038,285,7,7],[1534,438,4,4],[1082,467,69,49],[2047,64,1,1],[1905,365,3,2],[2046,223,2,3],[2040,85,2,1],[1905,337,3,4],[2044,85,2,1],[2046,419,2,2],[2047,67,1,1],[1905,343,3,4],[2047,199,1,1],[849,503,34,25],[2006,485,34,30],[2047,202,1,1],[2045,431,3,2],[2030,440,3,2],[2015,438,4,4],[1905,349,3,4],[2035,438,4,4],[1589,431,7,4],[1199,411,5,5],[1548,425,39,40],[1199,418,5,5],[2037,304,11,5],[1589,437,6,3],[2037,124,9,7],[2007,353,6,2],[2023,432,10,2],[2037,311,11,5],[2036,208,7,8],[2037,318,4,12],[2038,218,6,9],[2045,187,3,10],[2036,187,7,10],[1199,425,5,5],[1534,444,6,2],[2037,339,9,4],[2046,178,2,6],[2023,436,10,2],[1905,305,3,10],[2037,114,9,8],[2047,205,1,1],[2043,318,5,9],[2047,266,1,1],[1542,444,3,2],[1199,445,3,2],[2038,431,5,5],[2037,332,8,5],[1199,432,5,5],[2041,438,4,4],[1199,439,4,4],[1993,88,42,44],[1534,425,6,5],[2036,165,8,9],[1534,432,6,4],[1995,362,12,3],[2038,229,10,5],[2021,440,7,2],[1995,357,13,3],[2038,255,5,10],[2036,176,8,9],[2045,243,3,13],[1995,345,4,10],[2036,154,10,9],[1589,443,7,2],[2038,236,10,5],[1542,425,4,6],[2015,432,6,4],[2036,199,9,7],[2046,165,2,11],[2047,269,1,1],[2001,345,4,10],[2047,272,1,1],[2040,72,8,11],[2046,423,2,2],[2046,427,2,2],[1905,355,3,3],[2010,357,3,3],[1598,443,4,3],[1540,439,5,3],[2015,377,30,28],[1905,360,3,3],[1905,593,92,72],[1886,667,92,72],[1905,445,99,72],[0,1053,92,72],[94,1053,92,72],[1447,452,99,72],[1905,519,99,72],[1310,531,232,55],[1206,347,239,182],[1532,749,239,182],[1773,749,239,182],[1310,610,574,137],[1532,933,239,182],[1773,933,206,158],[1006,401,168,64],[778,0,426,399],[1206,0,396,345],[0,0,776,532]]}
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



(lib.CachedBmp_1252 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1255 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1254 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1253 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1249 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1244 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1243 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1247 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1248 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1250 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1242 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1251 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1239 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1240 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1236 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1241 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1246 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1235 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1237 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1233 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1232 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1234 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1229 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1231 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1230 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1228 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1226 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1224 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1227 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1225 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1221 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1222 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1219 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1223 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1218 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1217 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1220 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1216 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1213 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1214 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1215 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1211 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1212 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1210 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1209 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1206 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1207 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1208 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1205 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1204 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1203 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1202 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1201 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1197 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1200 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1196 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1198 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1193 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1194 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1191 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1199 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1190 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1192 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1188 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1187 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1186 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1189 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1185 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1184 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1182 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1178 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1179 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1183 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1176 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1177 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1171 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1175 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1173 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1168 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1172 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1169 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1170 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1165 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1162 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1164 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1163 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1161 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1160 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1159 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1154 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1155 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1158 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1156 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1157 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1153 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1149 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1150 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1151 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1152 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(98);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1148 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(99);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1147 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(100);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1146 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(101);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1145 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(102);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1142 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(103);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1143 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(104);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1141 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(105);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1140 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(106);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1144 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(107);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1139 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(108);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1137 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(109);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1136 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(110);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1138 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(111);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1135 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(112);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1134 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(113);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1132 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(114);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1133 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(115);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1131 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(116);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1129 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(117);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1130 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(118);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1127 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(119);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1126 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(120);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1128 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(121);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1124 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(122);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1125 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(123);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1123 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(124);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1121 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(125);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1122 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(126);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1245 = function() {
	this.initialize(ss["qisas monsters_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1119 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(127);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1116 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(128);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1117 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(129);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1118 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(130);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1120 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(131);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1115 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(132);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1113 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(133);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1112 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(134);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1111 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(135);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1110 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(136);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1109 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(137);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1108 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(138);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1106 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(139);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1114 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(140);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1107 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(141);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1105 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(142);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1102 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(143);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1103 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(144);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1101 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(145);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1104 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(146);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1099 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(147);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1100 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(148);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1098 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(149);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1095 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(150);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1097 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(151);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1096 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(152);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1093 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(153);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1094 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(154);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1091 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(155);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1090 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(156);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1087 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(157);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1089 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(158);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1088 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(159);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1085 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(160);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1086 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(161);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1082 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(162);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1080 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(163);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1079 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(164);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1081 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(165);
}).prototype = p = new cjs.Sprite();



(lib.Asset2 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(166);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1078 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(167);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(168);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1077 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(169);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1092 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(170);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1083 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(171);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1084 = function() {
	this.initialize(ss["qisas monsters_atlas_2"]);
	this.gotoAndStop(172);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1076 = function() {
	this.initialize(ss["qisas monsters_atlas_1"]);
	this.gotoAndStop(1);
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


(lib.yad = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_1252();
	this.instance.setTransform(0,0,0.3973,0.3973);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33.8,40.9);


(lib.totalCook = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_1092();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,213,199.5);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_1254();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40.5,119.5);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_1253();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,41.5,63);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Bitmap1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,206,158);


(lib.singWWhiteClod = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_1255();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54,37);


(lib.hijab = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_1245();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hijab, new cjs.Rectangle(0,0,800,496), null);


(lib.hajib = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_1244();
	this.instance.setTransform(11,6.05,0.3585,0.3585);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(11,6.1,81.1,35.8);


(lib.fotat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.CachedBmp_1243();
	this.instance.setTransform(-0.5,-0.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.5,37,26.5);


(lib.CompoundPath_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_1242();
	this.instance.setTransform(-0.05,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CompoundPath_3, new cjs.Rectangle(0,0,22.5,43), null);


(lib.eyenew = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(10));

	// Layer_1
	this.instance = new lib.CachedBmp_1221();
	this.instance.setTransform(1.9,1.15,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_1222();
	this.instance_1.setTransform(3.85,-1.3,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_1223();
	this.instance_2.setTransform(-1,-1,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_1224();
	this.instance_3.setTransform(1.8,-1.9,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_1225();
	this.instance_4.setTransform(0.3,5.6,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_1226();
	this.instance_5.setTransform(5.1,5.9,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_1227();
	this.instance_6.setTransform(1.9,1.15,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_1228();
	this.instance_7.setTransform(1.9,1.15,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_1229();
	this.instance_8.setTransform(0.7,6.25,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_1230();
	this.instance_9.setTransform(-2,4.75,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).wait(1));

	// Layer_2
	this.instance_10 = new lib.CachedBmp_1231();
	this.instance_10.setTransform(-3.1,-2.6,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_1232();
	this.instance_11.setTransform(-3.1,-2.6,0.5,0.5);

	this.instance_12 = new lib.CachedBmp_1233();
	this.instance_12.setTransform(-2.75,-2.6,0.5,0.5);

	this.instance_13 = new lib.CachedBmp_1234();
	this.instance_13.setTransform(-3.1,-2.6,0.5,0.5);

	this.instance_14 = new lib.CachedBmp_1235();
	this.instance_14.setTransform(-3.1,-2.6,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_10}]}).to({state:[{t:this.instance_11}]},6).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).wait(1));

	// Layer_5
	this.instance_15 = new lib.CachedBmp_1236();
	this.instance_15.setTransform(-1.65,-1.95,0.5,0.5);

	this.instance_16 = new lib.CachedBmp_1237();
	this.instance_16.setTransform(-2.25,-2.15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_15}]},8).to({state:[{t:this.instance_16}]},1).wait(1));

	// Layer_4
	this.instance_17 = new lib.CachedBmp_1241();
	this.instance_17.setTransform(-2.6,-1.5,0.5,0.5);

	this.instance_18 = new lib.CachedBmp_1239();
	this.instance_18.setTransform(-2.6,-1.5,0.5,0.5);

	this.instance_19 = new lib.CachedBmp_1240();
	this.instance_19.setTransform(-2.6,-1.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17}]}).to({state:[{t:this.instance_18}]},6).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_17}]},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-3.1,-2.6,20.5,20.5);


(lib.cooki2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_1084();
	this.instance.setTransform(0,-3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-3,388,266);


(lib.cookgraph1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_1083();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,198,172.5);


(lib.body = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_9 = function() {
		this.gotoAndPlay(1)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(9).call(this.frame_9).wait(2));

	// Layer_5
	this.instance = new lib.CachedBmp_1077();
	this.instance.setTransform(14.9,21.4,0.3331,0.3331);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11));

	// Layer_1
	this.instance_1 = new lib.CachedBmp_1078();
	this.instance_1.setTransform(0,0,0.3331,0.3331);

	this.instance_2 = new lib.CachedBmp_1079();
	this.instance_2.setTransform(0,-3.35,0.3331,0.3331);

	this.instance_3 = new lib.CachedBmp_1080();
	this.instance_3.setTransform(0,0,0.3331,0.3331);

	this.instance_4 = new lib.CachedBmp_1081();
	this.instance_4.setTransform(0,0,0.3331,0.3331);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},4).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_4}]},1).wait(1));

	// Layer_4
	this.instance_5 = new lib.CachedBmp_1082();
	this.instance_5.setTransform(1,-0.95,0.3331,0.3331);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(10).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-3.3,79.6,63.9);


(lib.whiteCloud = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.singWWhiteClod("synched",0);
	this.instance.setTransform(11.4,7.1,0.4238,0.3848,0,0,0,26.9,18.4);
	this.instance.alpha = 0.5313;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:18.6,scaleX:0.3865,scaleY:0.418,skewX:-62.0215,skewY:-37.8956,x:72.1,y:11.55,alpha:0.0117},22).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.7,87.2,22.3);


(lib.singleRotateCloud = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.fotat("synched",0);
	this.instance.setTransform(9,6,0.5,0.4734,0,0,0,18,12.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:90,x:41.5,y:18.5,alpha:0.0117},16,cjs.Ease.quadOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,-0.2,47.900000000000006,28);


(lib.singleCloud1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.fotat("synched",0);
	this.instance.setTransform(9,6,0.5,0.4734,0,0,0,18,12.7);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:56.7,y:-2,alpha:0.0117},24,cjs.Ease.cubicOut).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.2,-8.2,66.2,20.6);


(lib.lhand = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_18 = function() {
		this.gotoAndPlay(1);
	}
	this.frame_43 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(18).call(this.frame_18).wait(25).call(this.frame_43).wait(1));

	// Layer_1
	this.instance = new lib.yad("synched",0);
	this.instance.setTransform(16.9,20.4,1,1,0,0,0,16.9,20.4);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({regX:33.7,regY:0,rotation:29.9992,x:33.75,y:0.05},0).wait(10).to({rotation:0,x:33.7,y:0},0).wait(1).to({rotation:-16.9847,x:33.75,y:-0.05},0).wait(1).to({regX:16.9,regY:20.5,rotation:-10.1231,x:20.8,y:23.1},0).wait(1).to({rotation:-6.7973,x:19.5,y:22.25},0).wait(1).to({rotation:-6.2206,x:19.2,y:22.15},0).wait(1).to({rotation:-8.7117,x:20.2,y:22.75},0).wait(1).to({rotation:-14.6871,x:22.65,y:24.05},0).wait(1).to({rotation:-16.4193,x:23.4,y:24.3},0).wait(1).to({rotation:-15.1119,x:22.85,y:24.15},0).wait(1).to({rotation:-13.3888,x:22.15,y:23.8},0).wait(1).to({rotation:-12.4996,x:21.8,y:23.6},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({x:21.85},0).wait(1).to({startPosition:0},0).wait(1).to({regX:33.8,regY:0.1,x:33.85,y:0.05},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.9,-16.8,61.699999999999996,65.8);


(lib.emogiCorrEe = function(mode,startPosition,loop) {
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

	// Isolation Mode
	this.instance = new lib.CachedBmp_1175();
	this.instance.setTransform(0,1.4,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_1175();
	this.instance_1.setTransform(-7.9,1.4,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_1173();
	this.instance_2.setTransform(-1.5,-1.05,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_1172();
	this.instance_3.setTransform(-6.1,-1.2,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_1171();
	this.instance_4.setTransform(-4,3.4,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_1170();
	this.instance_5.setTransform(-1.45,1.7,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_1169();
	this.instance_6.setTransform(-1.2,1.4,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_1168();
	this.instance_7.setTransform(-1.7,0.8,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_1170();
	this.instance_8.setTransform(-5.65,1.7,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_1169();
	this.instance_9.setTransform(-5.4,1.4,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_1165();
	this.instance_10.setTransform(-5.95,0.8,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_1164();
	this.instance_11.setTransform(-11.8,-5.05,0.5,0.5);

	this.instance_12 = new lib.CachedBmp_1163();
	this.instance_12.setTransform(-11.45,-4.4,0.5,0.5);

	this.instance_13 = new lib.CachedBmp_1191();
	this.instance_13.setTransform(6.2,8.6,0.5,0.5);

	this.instance_14 = new lib.CachedBmp_1190();
	this.instance_14.setTransform(-12.25,8.8,0.5,0.5);

	this.instance_15 = new lib.CachedBmp_1189();
	this.instance_15.setTransform(-19,6.9,0.5,0.5);

	this.instance_16 = new lib.CachedBmp_1188();
	this.instance_16.setTransform(10.25,13.25,0.5,0.5);

	this.instance_17 = new lib.CachedBmp_1187();
	this.instance_17.setTransform(0.85,2.3,0.5,0.5);

	this.instance_18 = new lib.CachedBmp_1186();
	this.instance_18.setTransform(-5.3,2.35,0.5,0.5);

	this.instance_19 = new lib.CachedBmp_1185();
	this.instance_19.setTransform(-3.25,11.5,0.5,0.5);

	this.instance_20 = new lib.CachedBmp_1184();
	this.instance_20.setTransform(1.95,7.6,0.5,0.5);

	this.instance_21 = new lib.CachedBmp_1183();
	this.instance_21.setTransform(2.5,7.05,0.5,0.5);

	this.instance_22 = new lib.CachedBmp_1182();
	this.instance_22.setTransform(1.35,5.95,0.5,0.5);

	this.instance_23 = new lib.CachedBmp_1184();
	this.instance_23.setTransform(-7.25,7.7,0.5,0.5);

	this.instance_24 = new lib.CachedBmp_1183();
	this.instance_24.setTransform(-6.7,7.15,0.5,0.5);

	this.instance_25 = new lib.CachedBmp_1179();
	this.instance_25.setTransform(-7.85,6.05,0.5,0.5);

	this.instance_26 = new lib.CachedBmp_1178();
	this.instance_26.setTransform(12.7,6.75,0.5,0.5);

	this.instance_27 = new lib.CachedBmp_1177();
	this.instance_27.setTransform(10.25,13.25,0.5,0.5);

	this.instance_28 = new lib.CachedBmp_1176();
	this.instance_28.setTransform(-19,-4.05,0.5,0.5);

	this.instance_29 = new lib.CachedBmp_1220();
	this.instance_29.setTransform(-16.1,3.65,0.5,0.5);

	this.instance_30 = new lib.CachedBmp_1219();
	this.instance_30.setTransform(-16.1,3.65,0.5,0.5);

	this.instance_31 = new lib.CachedBmp_1218();
	this.instance_31.setTransform(-3.85,-17.85,0.5,0.5);

	this.instance_32 = new lib.CachedBmp_1217();
	this.instance_32.setTransform(-2.9,17.85,0.5,0.5);

	this.instance_33 = new lib.CompoundPath_3();
	this.instance_33.setTransform(-13.15,17.9,0.0581,0.0588,0,0,0,10.3,25.6);
	this.instance_33.alpha = 0.4688;

	this.instance_34 = new lib.CachedBmp_1216();
	this.instance_34.setTransform(-7.4,16.3,0.5,0.5);

	this.instance_35 = new lib.CachedBmp_1215();
	this.instance_35.setTransform(-4.85,14.15,0.5,0.5);

	this.instance_36 = new lib.CachedBmp_1214();
	this.instance_36.setTransform(-10.15,17.85,0.5,0.5);

	this.instance_37 = new lib.CachedBmp_1213();
	this.instance_37.setTransform(-8.9,11.55,0.5,0.5);

	this.instance_38 = new lib.CachedBmp_1212();
	this.instance_38.setTransform(-11.55,14.25,0.5,0.5);

	this.instance_39 = new lib.CachedBmp_1211();
	this.instance_39.setTransform(-1.9,8.75,0.5,0.5);

	this.instance_40 = new lib.CachedBmp_1210();
	this.instance_40.setTransform(-3.05,8.75,0.5,0.5);

	this.instance_41 = new lib.CachedBmp_1209();
	this.instance_41.setTransform(0.4,2.8,0.5,0.5);

	this.instance_42 = new lib.CachedBmp_1208();
	this.instance_42.setTransform(-0.1,-0.7,0.5,0.5);

	this.instance_43 = new lib.CachedBmp_1207();
	this.instance_43.setTransform(-17.5,-0.5,0.5,0.5);

	this.instance_44 = new lib.CachedBmp_1206();
	this.instance_44.setTransform(-23.85,-2.4,0.5,0.5);

	this.instance_45 = new lib.CachedBmp_1205();
	this.instance_45.setTransform(3.7,3.8,0.5,0.5);

	this.instance_46 = new lib.CachedBmp_1204();
	this.instance_46.setTransform(-5.1,-6.9,0.5,0.5);

	this.instance_47 = new lib.CachedBmp_1203();
	this.instance_47.setTransform(-10.95,-6.85,0.5,0.5);

	this.instance_48 = new lib.CachedBmp_1202();
	this.instance_48.setTransform(-9,2.1,0.5,0.5);

	this.instance_49 = new lib.CachedBmp_1201();
	this.instance_49.setTransform(-3.85,-17.85,0.5,0.5);

	this.instance_50 = new lib.CachedBmp_1200();
	this.instance_50.setTransform(-4.1,-1.7,0.5,0.5);

	this.instance_51 = new lib.CachedBmp_1199();
	this.instance_51.setTransform(-3.6,-2.25,0.5,0.5);

	this.instance_52 = new lib.CachedBmp_1198();
	this.instance_52.setTransform(-4.65,-3.3,0.5,0.5);

	this.instance_53 = new lib.CachedBmp_1197();
	this.instance_53.setTransform(-12.8,-1.6,0.5,0.5);

	this.instance_54 = new lib.CachedBmp_1196();
	this.instance_54.setTransform(-12.3,-2.15,0.5,0.5);

	this.instance_55 = new lib.CachedBmp_1198();
	this.instance_55.setTransform(-13.35,-3.2,0.5,0.5);

	this.instance_56 = new lib.CachedBmp_1194();
	this.instance_56.setTransform(6,-2.55,0.5,0.5);

	this.instance_57 = new lib.CachedBmp_1193();
	this.instance_57.setTransform(3.7,3.8,0.5,0.5);

	this.instance_58 = new lib.CachedBmp_1192();
	this.instance_58.setTransform(-23.85,-13.1,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13}]},4).to({state:[{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41},{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.8,-17.8,39.3,38.7);


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
	this.instance = new lib.CachedBmp_1102();
	this.instance.setTransform(16.55,17.7,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_1101();
	this.instance_1.setTransform(9.9,17.85,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_1100();
	this.instance_2.setTransform(15.6,14.95,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_1099();
	this.instance_3.setTransform(9.9,14.85,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_1098();
	this.instance_4.setTransform(17.35,19.25,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_1097();
	this.instance_5.setTransform(8.45,19.55,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_1096();
	this.instance_6.setTransform(12.25,19.95,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_1095();
	this.instance_7.setTransform(16.15,17.1,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_1094();
	this.instance_8.setTransform(9.45,17.3,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_1093();
	this.instance_9.setTransform(6,11.25,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_1132();
	this.instance_10.setTransform(13.25,16.05,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_1131();
	this.instance_11.setTransform(3.9,16.25,0.5,0.5);

	this.instance_12 = new lib.CachedBmp_1130();
	this.instance_12.setTransform(11.9,11.7,0.5,0.5);

	this.instance_13 = new lib.CachedBmp_1129();
	this.instance_13.setTransform(3.9,11.6,0.5,0.5);

	this.instance_14 = new lib.CachedBmp_1128();
	this.instance_14.setTransform(14.4,18.45,0.5,0.5);

	this.instance_15 = new lib.CachedBmp_1127();
	this.instance_15.setTransform(1.85,18.95,0.5,0.5);

	this.instance_16 = new lib.CachedBmp_1126();
	this.instance_16.setTransform(7.15,19.5,0.5,0.5);

	this.instance_17 = new lib.CachedBmp_1125();
	this.instance_17.setTransform(12.7,15.15,0.5,0.5);

	this.instance_18 = new lib.CachedBmp_1124();
	this.instance_18.setTransform(3.3,15.4,0.5,0.5);

	this.instance_19 = new lib.CachedBmp_1123();
	this.instance_19.setTransform(-1.55,6,0.5,0.5);

	this.instance_20 = new lib.CachedBmp_1122();
	this.instance_20.setTransform(-1.75,26.55,0.5,0.5);

	this.instance_21 = new lib.CachedBmp_1121();
	this.instance_21.setTransform(-3.4,24.05,0.5,0.5);

	this.instance_22 = new lib.CachedBmp_1120();
	this.instance_22.setTransform(-8.6,12.25,0.5,0.5);

	this.instance_23 = new lib.CachedBmp_1119();
	this.instance_23.setTransform(-4.25,8.4,0.5,0.5);

	this.instance_24 = new lib.CachedBmp_1118();
	this.instance_24.setTransform(-5.95,16.75,0.5,0.5);

	this.instance_25 = new lib.CachedBmp_1117();
	this.instance_25.setTransform(-7.6,20.7,0.5,0.5);

	this.instance_26 = new lib.CachedBmp_1116();
	this.instance_26.setTransform(20.2,19.45,0.5,0.5);

	this.instance_27 = new lib.CachedBmp_1115();
	this.instance_27.setTransform(3.3,28.5,0.5,0.5);

	this.instance_28 = new lib.CachedBmp_1114();
	this.instance_28.setTransform(18.95,22.95,0.5,0.5);

	this.instance_29 = new lib.CachedBmp_1113();
	this.instance_29.setTransform(16.6,26,0.5,0.5);

	this.instance_30 = new lib.CachedBmp_1112();
	this.instance_30.setTransform(9.35,29,0.5,0.5);

	this.instance_31 = new lib.CachedBmp_1111();
	this.instance_31.setTransform(13.7,28.3,0.5,0.5);

	this.instance_32 = new lib.CachedBmp_1110();
	this.instance_32.setTransform(-3.45,3.9,0.5,0.5);

	this.instance_33 = new lib.CachedBmp_1109();
	this.instance_33.setTransform(20.55,15.45,0.5,0.5);

	this.instance_34 = new lib.CachedBmp_1108();
	this.instance_34.setTransform(19.9,10.6,0.5,0.5);

	this.instance_35 = new lib.CachedBmp_1107();
	this.instance_35.setTransform(18,5.75,0.5,0.5);

	this.instance_36 = new lib.CachedBmp_1106();
	this.instance_36.setTransform(2.2,2.9,0.5,0.5);

	this.instance_37 = new lib.CachedBmp_1105();
	this.instance_37.setTransform(6.5,-0.5,0.5,0.5);

	this.instance_38 = new lib.CachedBmp_1104();
	this.instance_38.setTransform(14.55,0.6,0.5,0.5);

	this.instance_39 = new lib.CachedBmp_1103();
	this.instance_39.setTransform(10.6,-0.05,0.5,0.5);

	this.instance_40 = new lib.Symbol4("synched",0);
	this.instance_40.setTransform(11.3,15.3,0.701,0.701,0,0,0,16.8,16.9);

	this.instance_41 = new lib.CachedBmp_1162();
	this.instance_41.setTransform(18.35,15.65,0.5,0.5);

	this.instance_42 = new lib.CachedBmp_1161();
	this.instance_42.setTransform(9.8,15.85,0.5,0.5);

	this.instance_43 = new lib.CachedBmp_1160();
	this.instance_43.setTransform(17.1,11.65,0.5,0.5);

	this.instance_44 = new lib.CachedBmp_1159();
	this.instance_44.setTransform(9.8,11.6,0.5,0.5);

	this.instance_45 = new lib.CachedBmp_1158();
	this.instance_45.setTransform(19.4,17.85,0.5,0.5);

	this.instance_46 = new lib.CachedBmp_1157();
	this.instance_46.setTransform(7.95,18.3,0.5,0.5);

	this.instance_47 = new lib.CachedBmp_1156();
	this.instance_47.setTransform(12.8,18.85,0.5,0.5);

	this.instance_48 = new lib.CachedBmp_1155();
	this.instance_48.setTransform(17.85,14.85,0.5,0.5);

	this.instance_49 = new lib.CachedBmp_1154();
	this.instance_49.setTransform(9.25,15.05,0.5,0.5);

	this.instance_50 = new lib.CachedBmp_1153();
	this.instance_50.setTransform(4.8,6.5,0.5,0.5);

	this.instance_51 = new lib.CachedBmp_1152();
	this.instance_51.setTransform(1.7,23.35,0.5,0.5);

	this.instance_52 = new lib.CachedBmp_1151();
	this.instance_52.setTransform(1.35,20.55,0.5,0.5);

	this.instance_53 = new lib.CachedBmp_1150();
	this.instance_53.setTransform(-0.1,8.65,0.5,0.5);

	this.instance_54 = new lib.CachedBmp_1149();
	this.instance_54.setTransform(4.75,5.95,0.5,0.5);

	this.instance_55 = new lib.CachedBmp_1148();
	this.instance_55.setTransform(1.1,13.25,0.5,0.5);

	this.instance_56 = new lib.CachedBmp_1147();
	this.instance_56.setTransform(-1.5,17.1,0.5,0.5);

	this.instance_57 = new lib.CachedBmp_1146();
	this.instance_57.setTransform(23.7,21.6,0.5,0.5);

	this.instance_58 = new lib.CachedBmp_1145();
	this.instance_58.setTransform(5.65,25.95,0.5,0.5);

	this.instance_59 = new lib.CachedBmp_1144();
	this.instance_59.setTransform(21.8,24.3,0.5,0.5);

	this.instance_60 = new lib.CachedBmp_1143();
	this.instance_60.setTransform(19,26.5,0.5,0.5);

	this.instance_61 = new lib.CachedBmp_1142();
	this.instance_61.setTransform(10.7,27.55,0.5,0.5);

	this.instance_62 = new lib.CachedBmp_1141();
	this.instance_62.setTransform(15.7,27.85,0.5,0.5);

	this.instance_63 = new lib.CachedBmp_1140();
	this.instance_63.setTransform(6.45,2.2,0.5,0.5);

	this.instance_64 = new lib.CachedBmp_1139();
	this.instance_64.setTransform(24.9,18.4,0.5,0.5);

	this.instance_65 = new lib.CachedBmp_1138();
	this.instance_65.setTransform(25.2,14.55,0.5,0.5);

	this.instance_66 = new lib.CachedBmp_1137();
	this.instance_66.setTransform(24.45,9.75,0.5,0.5);

	this.instance_67 = new lib.CachedBmp_1136();
	this.instance_67.setTransform(11.75,2.65,0.5,0.5);

	this.instance_68 = new lib.CachedBmp_1135();
	this.instance_68.setTransform(15.5,0.7,0.5,0.5);

	this.instance_69 = new lib.CachedBmp_1134();
	this.instance_69.setTransform(22.1,4.25,0.5,0.5);

	this.instance_70 = new lib.CachedBmp_1133();
	this.instance_70.setTransform(18.85,2.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_40},{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_33},{t:this.instance_32},{t:this.instance_31},{t:this.instance_30},{t:this.instance_29},{t:this.instance_28},{t:this.instance_27},{t:this.instance_26},{t:this.instance_25},{t:this.instance_24},{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10}]},4).to({state:[{t:this.instance_70},{t:this.instance_69},{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65},{t:this.instance_64},{t:this.instance_63},{t:this.instance_62},{t:this.instance_61},{t:this.instance_60},{t:this.instance_59},{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55},{t:this.instance_54},{t:this.instance_53},{t:this.instance_52},{t:this.instance_51},{t:this.instance_50},{t:this.instance_49},{t:this.instance_48},{t:this.instance_47},{t:this.instance_46},{t:this.instance_45},{t:this.instance_44},{t:this.instance_43},{t:this.instance_42},{t:this.instance_41}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.6,-0.5,38.8,36);


(lib.dail = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_12 = function() {
		this.gotoAndPlay(1)
	}
	this.frame_38 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12).call(this.frame_12).wait(26).call(this.frame_38).wait(1));

	// Layer_1
	this.instance = new lib.Symbol2("synched",0);
	this.instance.setTransform(-3,63.1,1,1,0,0,0,0,63.1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:-0.1,regY:63.2,rotation:1.4095,x:-3.05,y:63.2},1).to({regX:0.1,rotation:12.6903,x:-3},5).to({regX:-0.1,regY:63.5,rotation:-14.7623,x:-3.05,y:63.55},6).to({regX:1,regY:55.3,rotation:-8.2152,x:-3.1,y:55.05},1).to({regX:0.3,regY:54.1,rotation:96.5479,x:-2.65,y:54.2},25).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.1,-8.4,84.6,109.7);


(lib.corretimg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_23 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(23).call(this.frame_23).wait(1));

	// Layer_2
	this.instance = new lib.Symbol1("synched",0);
	this.instance.setTransform(30,31,0.2524,0.2408,0,0,0,103,78.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:102.8,regY:78.8,scaleX:0.5243,scaleY:0.5944,x:25.95,y:19},23).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-27.9,-27.8,108,93.89999999999999);


(lib.cook1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.totalCook("synched",0);
	this.instance.setTransform(99,92.85,0.9296,0.9294,0,0,0,106.5,99.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,198,185.4);


(lib.cloudFotat = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.singleRotateCloud();
	this.instance.setTransform(-35.4,-10.6,1,1,-74.9998,0,0,9,6);

	this.instance_1 = new lib.singleRotateCloud();
	this.instance_1.setTransform(3,-4.55,1,1,-105.0002,0,0,9,6);

	this.instance_2 = new lib.singleCloud1();
	this.instance_2.setTransform(-27.5,22,1,1,0,0,0,9,6);

	this.instance_3 = new lib.singleCloud1();
	this.instance_3.setTransform(-0.65,1.85,1,1,180,0,0,9,6);

	this.instance_4 = new lib.singleRotateCloud();
	this.instance_4.setTransform(-30.3,15.9,1,1,-45,0,0,9,6);

	this.instance_5 = new lib.singleRotateCloud();
	this.instance_5.setTransform(20.3,16.75,1,1,29.9992,0,0,9.1,6);

	this.instance_6 = new lib.singleCloud1();
	this.instance_6.setTransform(-36.3,4.9,1,1,-29.9992,0,0,9,6);

	this.instance_7 = new lib.singleCloud1();
	this.instance_7.setTransform(22.3,5.6,1,1,29.9992,0,0,9.1,6);

	this.instance_8 = new lib.singleRotateCloud();
	this.instance_8.setTransform(-39.8,14.7,1,1,180,0,0,9,6);

	this.instance_9 = new lib.singleRotateCloud();
	this.instance_9.setTransform(33.2,17.55,1,1,0,0,0,9,6);

	this.instance_10 = new lib.singleCloud1();
	this.instance_10.setTransform(-15.1,18.5,1,1,-90,0,0,9,6);

	this.instance_11 = new lib.singleCloud1();
	this.instance_11.setTransform(7.1,16.9,1,1,82.7187,0,0,9,6);

	this.instance_12 = new lib.singleCloud1();
	this.instance_12.setTransform(-18.1,-2.8,1,1,180,0,0,9,6);

	this.instance_13 = new lib.singleCloud1();
	this.instance_13.setTransform(12.25,-2.8,1,1,0,0,0,9,6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer_2
	this.instance_14 = new lib.whiteCloud();
	this.instance_14.setTransform(-15.45,-2.7,1,1,168.0301,0,0,11.5,7);

	this.instance_15 = new lib.whiteCloud();
	this.instance_15.setTransform(-34,1,1,1,44.9994,0,0,11.3,7.1);

	this.instance_16 = new lib.whiteCloud();
	this.instance_16.setTransform(18.85,2.5,1,1,-45,0,0,11.4,7.1);

	this.instance_17 = new lib.whiteCloud();
	this.instance_17.setTransform(12.75,5.7,1,1,0,0,0,28.8,-1.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cloudFotat, new cjs.Rectangle(-49,-21.1,91.5,49.400000000000006), null);


(lib.clickedMcCook = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.instance = new lib.totalCook("synched",0);
	this.instance.setTransform(70.15,65.65,0.6573,0.6571,0,0,0,106.7,99.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:106.5,scaleX:0.7512,scaleY:0.7773,x:70.05,y:65.7},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.9,-11.9,160,155);


(lib.clickedAnime = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_44 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(44).call(this.frame_44).wait(1));

	// Layer_1
	this.instance = new lib.cook1("synched",0);
	this.instance.setTransform(-3.35,-0.6,0.7071,0.707,0,0,0,98.7,92.5);

	this.instance_1 = new lib.cookgraph1("synched",0);
	this.instance_1.setTransform(0,-51.6,0.7071,0.707,0,0,0,99,86.3);

	this.instance_2 = new lib.cooki2("synched",0);
	this.instance_2.setTransform(1.15,-104.3,0.3608,0.3607,0,0,0,194.5,129.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},14).to({state:[{t:this.instance_2}]},15).to({state:[]},15).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.1,-151.9,144.1,217);


(lib.monsterMc1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
		this.mounth.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(3));

	// eye
	this.leye = new lib.eyenew();
	this.leye.name = "leye";
	this.leye.setTransform(29.55,41.95,0.8866,0.8711,0,0,0,7.1,7.6);

	this.reye = new lib.eyenew();
	this.reye.name = "reye";
	this.reye.setTransform(58.3,41.3,1,1,0,0,0,7,6.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.reye},{t:this.leye}]}).wait(3));

	// yad
	this.lhand = new lib.lhand();
	this.lhand.name = "lhand";
	this.lhand.setTransform(5.05,73.35,1.2584,1.1795,0,36.739,-143.2607,33.6,0);

	this.rhand = new lib.lhand();
	this.rhand.name = "rhand";
	this.rhand.setTransform(103.3,66.45,1.2584,1.1795,-39.6793,0,0,33.8,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.rhand},{t:this.lhand}]}).wait(3));

	// Layer_3
	this.mounth = new lib.body();
	this.mounth.name = "mounth";
	this.mounth.setTransform(53.35,97.1,1.4094,1.2676,0,0,0,39.8,30.4);

	this.instance = new lib.CachedBmp_1247();
	this.instance.setTransform(0.65,0.4,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_1248();
	this.instance_1.setTransform(-2.3,0.4,0.5,0.5);

	this.dail = new lib.dail();
	this.dail.name = "dail";
	this.dail.setTransform(130.9,95.35,1,1,0,0,0,20.7,31.6);

	this.instance_2 = new lib.CachedBmp_1249();
	this.instance_2.setTransform(0.35,0.4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.mounth,p:{scaleX:1.4094,x:53.35}}]}).to({state:[{t:this.instance_1},{t:this.mounth,p:{scaleX:1.5011,x:53.4}}]},1).to({state:[{t:this.instance_2},{t:this.mounth,p:{scaleX:1.3177,x:53}},{t:this.dail}]},1).wait(1));

	// foot
	this.instance_3 = new lib.Symbol3("synched",0);
	this.instance_3.setTransform(84.2,131.15,1,1,0,0,180,20.4,59.7);

	this.instance_4 = new lib.Symbol3("synched",0);
	this.instance_4.setTransform(24.5,132.45,1,1,0,0,0,20.4,59.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3}]}).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-23.9,0.4,174.1,191.9);


(lib.clk33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.instance = new lib.CachedBmp_1090();
	this.instance.setTransform(-17.05,19,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_1091();
	this.instance_1.setTransform(-17.05,19,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// Layer_4
	this.instance_2 = new lib.hajib("synched",0);
	this.instance_2.setTransform(6,37.1,1.3946,1,0,0,0,51.5,24.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2));

	// Layer_2
	this.bkg = new lib.clickedMcCook();
	this.bkg.name = "bkg";
	this.bkg.setTransform(-2.65,-2.65,1,1,0,0,0,64,36);

	this.timeline.addTween(cjs.Tween.get(this.bkg).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.6,-38.6,140,131.1);


(lib.clk2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.instance = new lib.CachedBmp_1088();
	this.instance.setTransform(-17.05,19,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_1089();
	this.instance_1.setTransform(-17.05,19,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// Layer_4
	this.instance_2 = new lib.hajib("synched",0);
	this.instance_2.setTransform(6,37.1,1.3946,1,0,0,0,51.5,24.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2));

	// Layer_2
	this.bkg = new lib.clickedMcCook();
	this.bkg.name = "bkg";
	this.bkg.setTransform(-2.65,-2.65,1,1,0,0,0,64,36);

	this.timeline.addTween(cjs.Tween.get(this.bkg).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-66.6,-38.6,140,131.1);


(lib.clk1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_3
	this.instance = new lib.CachedBmp_1085();
	this.instance.setTransform(-12.2,19,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_1086();
	this.instance_1.setTransform(-12.2,19,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// Layer_4
	this.instance_2 = new lib.hajib("synched",0);
	this.instance_2.setTransform(6,37.1,1.3946,1,0,0,0,51.5,24.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(2));

	// Layer_1
	this.bkg = new lib.clickedMcCook();
	this.bkg.name = "bkg";
	this.bkg.setTransform(1.35,-2.05,1,1,0,0,0,64,36);

	this.instance_3 = new lib.CachedBmp_1087();
	this.instance_3.setTransform(-24.65,-27.9,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.bkg}]}).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-62.6,-38,140,131.1);


(lib.Mcmonster2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.cloudFotat = new lib.cloudFotat();
	this.cloudFotat.name = "cloudFotat";
	this.cloudFotat.setTransform(288.3,202.65,0.8714,0.6434,0,0,0,-3.2,9.3);

	this.timeline.addTween(cjs.Tween.get(this.cloudFotat).wait(1));

	// correcImg
	this.corrImg = new lib.corretimg();
	this.corrImg.name = "corrImg";
	this.corrImg.setTransform(293.8,52.35,1,1,0,0,0,25.3,1.7);

	this.timeline.addTween(cjs.Tween.get(this.corrImg).wait(1));

	// Layer_3
	this.n3klkf = new lib.clk33();
	this.n3klkf.name = "n3klkf";
	this.n3klkf.setTransform(97.05,92.5,0.7786,0.6251,0,0,0,3.4,26.9);

	this.l2klkf = new lib.clk2();
	this.l2klkf.name = "l2klkf";
	this.l2klkf.setTransform(295.9,75.1,0.7826,0.6316,0,0,0,0,0.1);

	this.m1klkt = new lib.clk1();
	this.m1klkt.name = "m1klkt";
	this.m1klkt.setTransform(480.95,75.1,0.7826,0.6316,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.m1klkt},{t:this.l2klkf},{t:this.n3klkf}]}).wait(1));

	// Layer_1
	this.instance = new lib.CachedBmp_1251();
	this.instance.setTransform(-10,306.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.monster = new lib.monsterMc1();
	this.monster.name = "monster";
	this.monster.setTransform(310,296.1,1,0.9212,0,0,0,75.2,63.1);

	this.timeline.addTween(cjs.Tween.get(this.monster).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Mcmonster2, new cjs.Rectangle(-10,50.6,654,364.5), null);


(lib.Mcmonster1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.cloudFotat = new lib.cloudFotat();
	this.cloudFotat.name = "cloudFotat";
	this.cloudFotat.setTransform(288.3,202.65,0.8714,0.6434,0,0,0,-3.2,9.3);

	this.timeline.addTween(cjs.Tween.get(this.cloudFotat).wait(1));

	// correcImg
	this.corrImg = new lib.corretimg();
	this.corrImg.name = "corrImg";
	this.corrImg.setTransform(293.8,52.35,1,1,0,0,0,25.3,1.7);

	this.timeline.addTween(cjs.Tween.get(this.corrImg).wait(1));

	// Layer_3
	this.n3klkf = new lib.clk33();
	this.n3klkf.name = "n3klkf";
	this.n3klkf.setTransform(97.05,92.5,0.7786,0.6251,0,0,0,3.4,26.9);

	this.l2klkf = new lib.clk2();
	this.l2klkf.name = "l2klkf";
	this.l2klkf.setTransform(295.9,75.1,0.7826,0.6316,0,0,0,0,0.1);

	this.m1klkt = new lib.clk1();
	this.m1klkt.name = "m1klkt";
	this.m1klkt.setTransform(480.95,75.1,0.7826,0.6316,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.m1klkt},{t:this.l2klkf},{t:this.n3klkf}]}).wait(1));

	// Layer_1
	this.instance = new lib.CachedBmp_1250();
	this.instance.setTransform(-10,306.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.monster = new lib.monsterMc1();
	this.monster.name = "monster";
	this.monster.setTransform(310,296.1,1,0.9212,0,0,0,75.2,63.1);

	this.timeline.addTween(cjs.Tween.get(this.monster).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Mcmonster1, new cjs.Rectangle(-10,50.6,654,364.5), null);


(lib.Mcmonster0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.cloudFotat = new lib.cloudFotat();
	this.cloudFotat.name = "cloudFotat";
	this.cloudFotat.setTransform(288.3,202.65,0.8714,0.6434,0,0,0,-3.2,9.3);

	this.timeline.addTween(cjs.Tween.get(this.cloudFotat).wait(1));

	// correcImg
	this.corrImg = new lib.corretimg();
	this.corrImg.name = "corrImg";
	this.corrImg.setTransform(293.8,52.35,1,1,0,0,0,25.3,1.7);

	this.timeline.addTween(cjs.Tween.get(this.corrImg).wait(1));

	// Layer_3
	this.n3klkf = new lib.clk33();
	this.n3klkf.name = "n3klkf";
	this.n3klkf.setTransform(97.05,92.5,0.7786,0.6251,0,0,0,3.4,26.9);

	this.l2klkf = new lib.clk2();
	this.l2klkf.name = "l2klkf";
	this.l2klkf.setTransform(295.9,75.1,0.7826,0.6316,0,0,0,0,0.1);

	this.m1klkt = new lib.clk1();
	this.m1klkt.name = "m1klkt";
	this.m1klkt.setTransform(480.95,75.1,0.7826,0.6316,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.m1klkt},{t:this.l2klkf},{t:this.n3klkf}]}).wait(1));

	// Layer_1
	this.instance = new lib.CachedBmp_1246();
	this.instance.setTransform(-10,306.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.monster = new lib.monsterMc1();
	this.monster.name = "monster";
	this.monster.setTransform(310,296.1,1,0.9212,0,0,0,75.2,63.1);

	this.timeline.addTween(cjs.Tween.get(this.monster).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Mcmonster0, new cjs.Rectangle(-10,50.6,654,364.5), null);


// stage content:
(lib.qisasmonsters = function(mode,startPosition,loop) {
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
		
		
		var marge = 20
		
		var currentpage = 0;
		var numOfQ = 3
		
		var Sound_startResultAnimeTime = 0
		
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
		
		var gameIsOver = false
		
		
		that.hijab.addEventListener('click', startfirst)
			function startfirst(e) {
		
				startSession()
		
			}
		
		
		var cont = new createjs.Container();
		that.addChild(cont)
		
		
		
		
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
			gameIsOver = true
			cont.mc.mouseEnabled = false
		}
		
		function checkGameOver() {
		
			if (lengOfLists(myListofArraysFaul) == emoErrArray.length) {
		
		
		
				gameOver()
			}
		
		}
		
		
		
		function showResu(bool) {
		
			if (bool) {
		
				var sm = sumInner(allQ_pages)
				console.log('sumInner(allQ_pages)', sm)
				emoCorrArray[sm].gotoAndPlay(1)
		
			} else {
		
				console.log('lengOfLists(myListofArraysFaul)', lengOfLists(myListofArraysFaul))
				emoErrArray[lengOfLists(myListofArraysFaul) - 1].gotoAndPlay(1)
		
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
		
			cont.mc = new lib['Mcmonster' + currentpage]();
			cont.mc.name = 'Mcmonster' + currentpage;
		
			console.log('Mcmonster' + currentpage)
			cont.mc.x = lib.properties["width"] / 2 - (cont.mc.getBounds().width / 2);
			cont.mc.y = lib.properties["height"] / 2 - (cont.mc.getBounds().height / 2);
		
		
		
		
			getElementAndAlpha_mc(cont.mc);
		
		
			setTimeout(function () {
		
		
		
				cont.addChild(cont.mc);
				animeImage()
				klk_Manager(cont.mc)
		
			}, 20);
		
		
		
		
		}
		
		
		function shuffleArray(array) {
		
		
			for (let i = array.length - 1; i > 0; i--) {
				const j = Math.floor(Math.random() * (i + 1));
				[array[i], array[j]] = [array[j], array[i]];
		
			}
		
			return array
		}
		
		function fillPostion(klArray) {
		
		
		
			var kposition = [];
		
			for (var u1 = 0; u1 < klArray.length; u1++) {
		
				kposition.push(klArray[u1].x)
			}
		
		
			return kposition
		}
		
		function startAnimeKLK(kArray, centerMc) {
		
			var klkposition = fillPostion(kArray);
		
			shuffleArray(kArray)
		
		
			for (var u1 = 0; u1 < kArray.length; u1++) {
		
		
				createjs.Tween.get(kArray[u1], {
					loop: false
				}).wait((u1 + 1) * 300)
					.to({
		
		
						x: klkposition[u1]
		
					}, 1000, createjs.Ease.getPowInOut(2))
		
			}
		
		
		}
		
		
		
		var klkArray = []
		
			function getElementAndAlpha_mc(monsterMc) {
		
				klkArray = []
		
				setTimeout(function () {
		
					getklk();
		
				}, 0);
		
		
		
				function getklk() {
		
					console.log('monsterMc', monsterMc)
					var parent = monsterMc;
					var keys = Object.keys(parent);
					var len = keys.length;
		
					while (--len) {
		
		
						if (keys[len].slice(2, 5) == ("klk")) {
		
		
		
							parent[keys[len]].name = keys[len];
		
							klkArray.push(parent[keys[len]]);
		
		
						}
		
					}
		
				}
		
				monsterMc.corrImg.visible = false
				monsterMc.cloudFotat.visible = false
			}
		
			function animeImage() {
		
				createjs.Tween.get(cont.mc.monster, {
					loop: false
				}).to({
					y: cont.mc.monster.y - 100
				}, 1000, createjs.Ease.getBackOut(2)).call(addTitle)
		
		
			}
		
			function addTitle() {
		
				cont.mc.monster.play()
		
		
		
				startAnimeKLK(klkArray);
		
		
			}
		
		
		
		
			function klk_Manager(klkMc) {
		
		
				console.log('klkMc', klkMc)
		
		
				var isCorr = false
		
		
					function setlisteners() {
		
						for (var u1 = 0; u1 < klkArray.length; u1++) {
		
		
		
							klkArray[u1].addEventListener("click", onklk);
		
							klkArray[u1].addEventListener("mouseover", overBtn);
							klkArray[u1].addEventListener("mouseout", outBtn);
		
		
						}
		
		
					}
		
		
				setTimeout(function () {
		
					setlisteners();
		
				}, klkArray.length * 300 + 1000);
		
		
		
		
				function removelisteners() {
		
					for (var u1 = 0; u1 < klkArray.length; u1++) {
		
		
		
						klkArray[u1].removeEventListener("click", onklk);
						klkArray[u1].removeEventListener("mouseover", overBtn);
						klkArray[u1].removeEventListener("mouseout", outBtn);
		
					}
		
		
				}
		
		
				klkMc.addEventListener("removed", onRemove);
		
				function onRemove(ev) {
					removelisteners()
					klkMc.removeEventListener("removed", onRemove);
		
				}
		
		
				function getEyePosition(trg) {
		
					var po = 3
					if ((trg.x - klkMc.monster.x) > 60) po = 1
					else if ((trg.x - klkMc.monster.x) < -60) po = 2
		
					return po
		
				}
				function overBtn(ev) {
		
		
					ev.currentTarget.bkg.gotoAndStop(1);
		
					var p = getEyePosition(ev.currentTarget)
		
					klkMc.monster.reye.gotoAndStop(p);
					klkMc.monster.leye.gotoAndStop(p);
		
				}
				function outBtn(ev) {
		
		
					ev.currentTarget.bkg.gotoAndStop(0);
					klkMc.monster.reye.gotoAndStop(0);
					klkMc.monster.leye.gotoAndStop(0);
				}
		
		
		
		
				function blockInteraction() {
		
					removelisteners()
				}
		
		
		
				var change_boo = false
		
		
					function onklk(e) {
		
		
		
						e.nativeEvent.preventDefault();
		
						blockInteraction()
		
						var iscorrect = correct(e.currentTarget);
		
						console.log('click onklk function')
		
		
		
		                checkGameOver()
		
						change_boo = conditionChangeSess(iscorrect)
						var _delayBeforNextSess = adaptView(e.currentTarget, iscorrect)
		
						
						if (gameIsOver) return
		
						if (change_boo) {
		
							if (sessionAfterRightResp) {
		
								console.log('_delayBeforNextSess', _delayBeforNextSess)
		
								setTimeout(function () {
		
									startNextSession();
		
		
								}, _delayBeforNextSess);
		
							} else {
		
							
		
								removelisteners()
		
								setTimeout(function () {
		
									startNextSession();
		
		
								}, _delayBeforNextSess);
		
							}
						}
		
						// remove and add the same currentpage
						else {
		
							setTimeout(function () {
		
								startSession();
		
		
							}, _delayBeforNextSess);
		
						}
					}
		
		
					function showNumOfemoError() {
		
						for (var i = lengOfLists(myListofArraysFaul) - 1; i > lengOfLists(myListofArraysFaul) - 4; i--) {
		
							createjs.Tween.get(emoErrArray[i]).to({
								rotation: 360
							}, 1000);
		
						}
		
					}
		
					function conditionChangeSess(iscoor) {
		
						if (iscoor) {
		
							console.log('rom conditionChangeSess: iscoor', iscoor)
		
							allQ_pages[currentpage].push(1)
							sessionAfterRightResp = true
							return true;
						}
		
						if ((myListofArraysFaul[currentpage].length + 1) % (autorizedSingleQ + 1) == 0) {
		
							allQ_pages[currentpage].push(0)
							sessionAfterRightResp = false
							return true;
		
						}
						sessionAfterRightResp = false
						return false
					}
		
		
					function startNextSession() {
		
		
						console.log('rom startNextSession: from_checkPrecedentQ', from_checkPrecedentQ)
		
						if (currentpage == numOfQ - 1 || from_checkPrecedentQ) {
		
							checkPrecedentQ()
		
							return
						}
						if (allQ_pages[currentpage + 1].length == 0 || allQ_pages[currentpage + 1] == 0) {
							currentpage = currentpage + 1;
		
						setTimeout(function () {
		
							startSound('session')
		
							}, 0);
		
							
		
						
						setTimeout(function () {
		
							startSession()
		
						},  titleDuration['session']);
							
						}
		
		
					}
		
		
					function checkPrecedentQ() {
		
						from_checkPrecedentQ = false;
						console.log('from checkPrecedentQ : allQ_pages', allQ_pages)
						for (var i = 0; i < allQ_pages.length; i++) {
		
							if (allQ_pages[i][allQ_pages[i].length - 1] == 0) {
								
								from_checkPrecedentQ = true;
		
		
								console.log('from checkPrecedentQ :delayBeforNextSess', delayBeforNextSess)
						
								if(i != currentpage){
									
								currentpage = i	
								startSound('session')
									
								setTimeout(function () {
		
								    startSession();
		
							        }, titleDuration['session']);
									
								}
		
								else{
									
									
									 startSession();
		
									
								}
		
								
						
		
								
							}
						}
		
						console.log('from checkPrecedentQ :from_checkPrecedentQ', from_checkPrecedentQ)
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
		
					// DONT move this var from klkManager		
				var delayBeforNextSess = 0;
				var klkMigrationTime = 1000
		
				var correctImage_duration = 1500
				var clickedAnime_duration = 2000 //eat of sandwich
				var eatAnime_duration = 2000
				var monsterExpan_duration = 1000
				var dail_duration = 2000
		
					function adaptView(clicked, iscorr) {
		
		
						delayBeforNextSess = 0
		
						if (iscorr) {
							Sound_startResultAnimeTime = 'kalima' + currentpage
							delayBeforNextSess = klkMigrationTime + titleDuration[Sound_startResultAnimeTime] +
								correctImage_duration +
								titleDuration[Sound_startResultAnimeTime] + clickedAnime_duration  //+ eatAnime_duration 
							                                                          + monsterExpan_duration
		
						} 
		
						else if (change_boo  && !sessionAfterRightResp){
							
							delayBeforNextSess =  klkMigrationTime +titleDuration['fachil'] +titleDuration[Sound_startResultAnimeTime]
								
						}
						
						else {
		
							Sound_startResultAnimeTime = 'kalima' + currentpage
		
							delayBeforNextSess = klkMigrationTime+  titleDuration[Sound_startResultAnimeTime]
								+ titleDuration['fachil'] + titleDuration['hawil'] //+ dail_duration
		
						}
		
						var id = parseInt(clicked.name.slice(1, 2))
		
		
						createjs.Tween.get(clicked, {
							loop: false
						})
							.to({
		
								x: klkMc.monster.x - 20,
								y: klkMc.monster.y + 80
		
		
							}, klkMigrationTime)
							.call(function () {
		
								clicked.gotoAndStop(1)
		
								klkMc.monster.reye.gotoAndStop(4);
								klkMc.monster.leye.gotoAndStop(5);
		
								startSound(Sound_startResultAnimeTime)
		
								setTimeout(function () {
		
		
									startResultAnime(clicked, iscorr, Sound_startResultAnimeTime)
		
								}, titleDuration[Sound_startResultAnimeTime]);
		
		
		
							})
		
						return delayBeforNextSess
					}
		
		
		
					function startResultAnime(cliked, boo, Sound_startResultAnimeTime) {
		
		
		
						if (boo) {
		
							var clicedAnime = new lib.clickedAnime()
							clicedAnime.x = cliked.x
							clicedAnime.y = cliked.y
							clicedAnime.scaleX = cliked.getTransformedBounds().width / cliked.getBounds().width
							clicedAnime.scaleY = cliked.getTransformedBounds().height / cliked.getBounds().height
		
		
							for (var i = 0; i < klkArray.length; i++) {
		
								if (klkArray[i] != cliked) klkArray[i].visible = false
		
							}
		
							klkMc.corrImg.visible = true
							klkMc.corrImg.gotoAndPlay(1)
							startSound('magic')
		
							setTimeout(function () {
		
								startSound(Sound_startResultAnimeTime)
		
		
							}, correctImage_duration);
		
		
							setTimeout(function () {
		
								klkMc.addChild(clicedAnime)
								cliked.visible = false
								klkMc.cloudFotat.visible = true
								klkMc.cloudFotat.play()
		
								clicedAnime.gotoAndPlay(1)
		
								klkMc.monster.mounth.play()
		
								klkMc.monster.rhand.gotoAndPlay(1)
								klkMc.monster.lhand.gotoAndPlay(1)
								
								
								
							setTimeout(function () {
								startSound('eating')
		
		                       },200)
							}, correctImage_duration + titleDuration[Sound_startResultAnimeTime]);
		
		
							setTimeout(function () {
		
		
								klkMc.monster.mounth.stop()
								klkMc.monster.rhand.stop()
								klkMc.monster.lhand.stop()
		
								startSound('chahga')
		
								createjs.Tween.get(klkMc.monster, {
									loop: false
								})
									.to({
		
										scaleX: klkMc.monster.scaleX * 1.1,
										y: klkMc.monster.y - 10
		
									}, 200)
		
								.to({
		
									scaleX: klkMc.monster.scaleX,
									y: klkMc.monster.y
		
								}, 200).call(expandEye)
		
		
							}, correctImage_duration + titleDuration[Sound_startResultAnimeTime] + eatAnime_duration);
		
		
		
		
						} else {
							if (change_boo && !sessionAfterRightResp) {
		
								showNumOfemoError()
		
							}
							startSound('fachil')
		
							klkMc.monster.gotoAndStop(2)
							klkMc.monster.mounth.gotoAndStop(10)
		
							klkMc.monster.reye.gotoAndStop(8)
							klkMc.monster.leye.gotoAndStop(9)
		
							klkMc.monster.rhand.gotoAndPlay(19)
							klkMc.monster.lhand.gotoAndPlay(19)
							klkMc.monster.dail.gotoAndPlay(13)
		
		
		
							setTimeout(function () {
		
								if (!change_boo && !gameIsOver) startSound('hawil')
		
							}, titleDuration['fachil']);
		
		
							console.log('false...........')
						}
					}
		
		
					function expandEye() {
		
						klkMc.monster.reye.gotoAndStop(6),
						klkMc.monster.leye.gotoAndStop(7)
		
						klkMc.cloudFotat.visible = false
		
						klkMc.monster.gotoAndStop(1)
						klkMc.monster.dail.play()
					}
		
					function correct(obj) {
		
		
		
						if (obj.name.slice(5) == 't') {
		
							showResu(true);
		
		
							return true
		
						}
		
						myListofArraysFaul[currentpage].push(obj.name)
		
						showResu(false);
		
		
						return false
		
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
				id: "kalima0",
				src: "kalima0.mp3"
			}, {
				id: "kalima1",
				src: "kalima1.mp3"
			}, {
				id: "kalima2",
				src: "kalima2.mp3"
			}, {
				id: "hawil",
				src: "hawil.mp3"
			}, {
				id: "eating",
				src: "eating.mp3"
			}, {
				id: "fachil",
				src: "fachil.mp3"
			}], "mysound/");
		
		
		
		function handleFileLoad(event) {
			// A sound has been preloaded. This will fire multiple time
		
			//if (!event.id.startsWith('title')) return;
		
			sound_manif.push(event.id);
		
			//if we dont need sound duration 
			//titleDuration[parseInt(event.id.slice(5))] = 0
			//to get duration of title sound before play them
		
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
		
			console.log(that.soun);
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// emoj
	this.emoE5 = new lib.emogiCorrEe();
	this.emoE5.name = "emoE5";
	this.emoE5.setTransform(72.9,53.85);

	this.emoE4 = new lib.emogiCorrEe();
	this.emoE4.name = "emoE4";
	this.emoE4.setTransform(127.4,53.85);

	this.emoE3 = new lib.emogiCorrEe();
	this.emoE3.name = "emoE3";
	this.emoE3.setTransform(191,53.85);

	this.emoE2 = new lib.emogiCorrEe();
	this.emoE2.name = "emoE2";
	this.emoE2.setTransform(249.4,53.85);

	this.emoE1 = new lib.emogiCorrEe();
	this.emoE1.name = "emoE1";
	this.emoE1.setTransform(305.15,53.85);

	this.emoC3 = new lib.emogiCorr();
	this.emoC3.name = "emoC3";
	this.emoC3.setTransform(604.9,37.65);

	this.emoC2 = new lib.emogiCorr();
	this.emoC2.name = "emoC2";
	this.emoC2.setTransform(672.7,52.45,1,1,0,0,0,16.8,14.8);

	this.emoC1 = new lib.emogiCorr();
	this.emoC1.name = "emoC1";
	this.emoC1.setTransform(718.95,52.45,1,1,0,0,0,16.8,14.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.emoC1},{t:this.emoC2},{t:this.emoC3},{t:this.emoE1},{t:this.emoE2},{t:this.emoE3},{t:this.emoE4},{t:this.emoE5}]}).wait(1));

	// hijb
	this.instance = new lib.Asset2();
	this.instance.setTransform(7,25,1.3848,0.5406);

	this.hijab = new lib.hijab();
	this.hijab.name = "hijab";
	this.hijab.setTransform(767.25,34.05,0.0675,0.1127,0,0,0,400.1,248);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.hijab},{t:this.instance}]}).wait(1));

	// Layer_4
	this.instance_1 = new lib.CachedBmp_1076();
	this.instance_1.setTransform(1.5,0.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(401.5,250.8,400.4,247.5);
// library properties:
lib.properties = {
	id: 'A9BD58CD4773774EABAE6EE2EC59B180',
	width: 800,
	height: 500,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/qisas monsters_atlas_1.png?1655234055610", id:"qisas monsters_atlas_1"},
		{src:"images/qisas monsters_atlas_2.png?1655234055613", id:"qisas monsters_atlas_2"}
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
an.compositions['A9BD58CD4773774EABAE6EE2EC59B180'] = {
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
