(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"قالب القصص_atlas_1", frames: [[0,0,1630,997],[0,999,1266,839]]},
		{name:"قالب القصص_atlas_2", frames: [[0,817,1073,771],[0,0,1253,815]]},
		{name:"قالب القصص_atlas_3", frames: [[0,0,1073,770],[0,772,1073,770]]},
		{name:"قالب القصص_atlas_4", frames: [[0,0,1073,770],[0,772,1073,770]]},
		{name:"قالب القصص_atlas_5", frames: [[0,0,1073,770],[0,772,1073,770]]},
		{name:"قالب القصص_atlas_6", frames: [[0,0,1073,770],[0,772,1073,770]]},
		{name:"قالب القصص_atlas_7", frames: [[1075,871,845,863],[1075,0,852,869],[0,0,1073,770],[0,772,1073,770]]},
		{name:"قالب القصص_atlas_8", frames: [[544,515,455,455],[544,972,1203,131],[1001,754,630,216],[0,0,1073,513],[927,1678,454,283],[0,1091,467,287],[929,1392,454,283],[0,1380,467,287],[469,1105,461,285],[469,1678,456,284],[0,1669,467,287],[1388,1105,446,281],[932,1105,454,283],[1385,1390,448,282],[469,1392,458,284],[1383,1677,449,282],[0,515,542,574],[1075,0,709,752]]},
		{name:"قالب القصص_atlas_9", frames: [[1307,551,415,260],[1615,1339,340,255],[0,0,443,280],[436,1649,423,267],[885,548,420,264],[445,562,428,272],[444,836,424,269],[0,845,435,276],[1229,1680,335,266],[1615,1596,340,255],[437,1107,424,269],[445,282,438,278],[875,814,415,260],[1330,0,434,275],[0,564,442,279],[0,282,443,280],[1287,1103,306,302],[1645,1076,334,261],[0,1123,434,275],[436,1378,424,269],[1307,813,336,288],[862,1600,365,273],[0,1400,434,275],[870,1076,415,260],[1761,323,245,346],[0,1677,431,273],[890,280,422,266],[863,1338,415,260],[890,0,438,278],[1280,1407,333,271],[1645,813,338,261],[1330,277,429,272],[1766,0,276,321],[445,0,443,280]]},
		{name:"قالب القصص_atlas_10", frames: [[1257,949,73,75],[1179,1026,143,38],[0,1649,402,78],[2022,71,11,24],[1813,0,207,209],[740,1834,377,53],[1333,1640,636,61],[0,1491,451,156],[357,1791,381,56],[0,1319,273,47],[1333,1765,372,62],[1707,1765,328,55],[0,1737,462,52],[0,1791,355,62],[1333,1703,405,60],[1333,1829,367,58],[1831,386,116,110],[1179,911,231,36],[926,1193,69,58],[2035,71,13,20],[2007,269,31,48],[1965,486,77,96],[2035,93,13,20],[2007,319,31,48],[1965,584,77,96],[1859,1179,80,60],[1008,1126,80,63],[1965,778,80,81],[1949,386,80,98],[1477,250,80,84],[1332,949,80,68],[1831,498,80,71],[926,1126,80,65],[1941,1179,80,60],[1090,1126,80,62],[1008,1191,80,58],[1179,949,76,74],[1192,421,36,30],[1090,1190,82,58],[1913,498,39,28],[1192,348,38,33],[1965,861,76,30],[1192,453,28,35],[1179,1066,98,37],[1192,383,34,36],[1859,1241,98,34],[997,1251,95,34],[1620,1125,98,36],[2022,0,21,69],[311,1002,98,33],[1965,682,76,94],[1959,1241,73,44],[1520,1125,98,37],[1831,211,86,173],[1919,211,86,173],[2007,211,32,56],[591,682,116,110],[709,682,116,110],[2022,97,4,17],[1707,1822,339,32],[638,1037,286,260],[494,0,244,346],[0,348,350,231],[0,808,309,247],[0,581,345,225],[1332,1019,77,70],[1637,1401,286,237],[0,1057,286,260],[1477,341,352,233],[842,348,348,228],[740,0,244,346],[352,348,243,332],[625,1299,335,219],[1568,0,243,339],[764,1567,275,230],[842,578,335,233],[1300,1401,335,218],[1041,1621,290,211],[1179,1125,339,220],[936,813,241,311],[591,813,343,222],[1179,591,242,318],[1477,576,242,325],[986,0,244,346],[1232,250,243,339],[347,682,242,318],[597,348,243,332],[1721,576,242,325],[1232,0,334,248],[0,0,245,346],[1423,903,341,220],[962,1347,336,218],[311,1037,325,230],[1766,903,272,274],[1520,1179,337,220],[288,1269,335,220],[453,1520,309,215],[247,0,245,346]]}
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



(lib.CachedBmp_76 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_70 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_71 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_69 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_72 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_65 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_66 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_67 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_64 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_73 = function() {
	this.initialize(ss["قالب القصص_atlas_8"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_63 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_62 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_60 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_61 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_58 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_59 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_57 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_54 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_53 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_52 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_51 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_50 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_49 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_48 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_47 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_56 = function() {
	this.initialize(ss["قالب القصص_atlas_8"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_46 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_44 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_43 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_41 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_40 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_39 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_42 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_38 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_37 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_35 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_36 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(34);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_45 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(35);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_33 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(36);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_30 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(37);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_31 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(38);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_32 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(39);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_29 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(40);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_28 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(41);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_27 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(42);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_75 = function() {
	this.initialize(ss["قالب القصص_atlas_7"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_25 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(43);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_26 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(44);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_24 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(45);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_22 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(46);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_23 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(47);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_19 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(48);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_21 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(49);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_13 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(50);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_16 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(51);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_20 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(52);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_9 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(53);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_8 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(54);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_7 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(55);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_55 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(56);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_74 = function() {
	this.initialize(ss["قالب القصص_atlas_7"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(57);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_3 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(58);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_4 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(59);
}).prototype = p = new cjs.Sprite();



(lib.انااحبالوان = function() {
	this.initialize(ss["قالب القصص_atlas_8"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._0 = function() {
	this.initialize(ss["قالب القصص_atlas_8"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._10 = function() {
	this.initialize(ss["قالب القصص_atlas_3"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._13 = function() {
	this.initialize(ss["قالب القصص_atlas_3"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._11 = function() {
	this.initialize(ss["قالب القصص_atlas_4"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._5 = function() {
	this.initialize(ss["قالب القصص_atlas_4"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._6 = function() {
	this.initialize(ss["قالب القصص_atlas_5"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._7 = function() {
	this.initialize(ss["قالب القصص_atlas_5"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._8 = function() {
	this.initialize(ss["قالب القصص_atlas_6"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._9 = function() {
	this.initialize(ss["قالب القصص_atlas_6"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._12 = function() {
	this.initialize(ss["قالب القصص_atlas_7"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.BMP_01139964_40c7_4232_8682_39f90025b1b6 = function() {
	this.initialize(ss["قالب القصص_atlas_8"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(60);
}).prototype = p = new cjs.Sprite();



(lib.BMP_02608903_0767_4820_8270_842eae0f46cf = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(61);
}).prototype = p = new cjs.Sprite();



(lib.BMP_0444bafb_548d_4198_b562_7c4a87b5a3dd = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(62);
}).prototype = p = new cjs.Sprite();



(lib.BMP_2026600e_933a_4b93_b62a_aa224cbd506d = function() {
	this.initialize(ss["قالب القصص_atlas_8"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.BMP_0f478fff_3b12_4ccc_b898_5e7f2014e8c4 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(63);
}).prototype = p = new cjs.Sprite();



(lib.BMP_0f348e01_b304_48e1_a5c6_d1b9c1183d9d = function() {
	this.initialize(ss["قالب القصص_atlas_8"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.BMP_2394080f_f786_415c_87c7_6d844b7d2060 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(64);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_2 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(65);
}).prototype = p = new cjs.Sprite();



(lib.BMP_26ca2081_1427_479a_81ff_e0340fbe1102 = function() {
	this.initialize(ss["قالب القصص_atlas_9"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.BMP_2e28d8c5_c2ab_4439_908e_f224189da39b = function() {
	this.initialize(ss["قالب القصص_atlas_9"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.BMP_337d5419_b2de_468b_9653_c67e92b0180a = function() {
	this.initialize(ss["قالب القصص_atlas_9"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.BMP_1574cda9_9ce3_40df_86fc_83d5fa6a334d = function() {
	this.initialize(ss["قالب القصص_atlas_9"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.BMP_3b91d64a_f86e_4aa3_b7d2_314dfb26ded9 = function() {
	this.initialize(ss["قالب القصص_atlas_8"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.BMP_2ad843e0_c77b_4ca5_9ed7_310e6a367124 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(66);
}).prototype = p = new cjs.Sprite();



(lib.BMP_3aa4b983_8539_41c1_96f6_7ded5e21aa50 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(67);
}).prototype = p = new cjs.Sprite();



(lib.BMP_2770099b_caf3_4e4d_abcb_805aa5af742a = function() {
	this.initialize(ss["قالب القصص_atlas_9"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.BMP_4265763f_1970_4b1e_a0d9_62adcc7990cb = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(68);
}).prototype = p = new cjs.Sprite();



(lib.BMP_4786af54_ff3a_4c4f_b0ad_14f62e9cda44 = function() {
	this.initialize(ss["قالب القصص_atlas_9"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.BMP_5244a61b_fedc_4473_aac0_ed1ea9631b3f = function() {
	this.initialize(ss["قالب القصص_atlas_9"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.BMP_52761728_dd6e_42d8_b9fc_4c83f5393a0a = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(69);
}).prototype = p = new cjs.Sprite();



(lib.BMP_2baa44ce_b4bb_46fd_9f9a_bf7a9cf68c5c = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(70);
}).prototype = p = new cjs.Sprite();



(lib.BMP_5b5f51e3_d5c1_4f85_87d2_19835385824f = function() {
	this.initialize(ss["قالب القصص_atlas_9"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.BMP_42fcb312_a895_4d0b_8498_d9d80acda4c4 = function() {
	this.initialize(ss["قالب القصص_atlas_9"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.BMP_59f7fadc_9c39_4fec_97d1_cf58282e07ce = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(71);
}).prototype = p = new cjs.Sprite();



(lib.BMP_6e3c6144_a98a_4a9d_90d3_50a4e2f52166 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(72);
}).prototype = p = new cjs.Sprite();



(lib.BMP_701be41c_0ee7_4a2a_9208_d32a25de4c04 = function() {
	this.initialize(ss["قالب القصص_atlas_9"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.BMP_70a95905_be22_4049_b0c2_145a8f931283 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(73);
}).prototype = p = new cjs.Sprite();



(lib.BMP_76158392_e2d4_4a0b_88de_be2929eb06c7 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(74);
}).prototype = p = new cjs.Sprite();



(lib.BMP_45056f7f_bc1a_423c_84d7_c45c0d0b56a7 = function() {
	this.initialize(ss["قالب القصص_atlas_9"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.BMP_611bdd24_4891_4568_8111_960175980b88 = function() {
	this.initialize(ss["قالب القصص_atlas_9"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.BMP_8ee4be89_8d69_4cce_9bf6_dd74d50f8f47 = function() {
	this.initialize(ss["قالب القصص_atlas_9"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.BMP_924fdbc3_d9fc_4069_83fb_2217b3a652e7 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(75);
}).prototype = p = new cjs.Sprite();



(lib.BMP_92c9dccf_d36e_4605_8506_ebfce0e54554 = function() {
	this.initialize(ss["قالب القصص_atlas_8"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.BMP_94d064c7_d5f4_48e4_aca3_2bd4ff3af957 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(76);
}).prototype = p = new cjs.Sprite();



(lib.BMP_5f933ea4_c79b_40e5_8a33_6139c27a587b = function() {
	this.initialize(ss["قالب القصص_atlas_9"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.BMP_9910dc06_5fa0_4875_ac37_68fa0cb1efe2 = function() {
	this.initialize(ss["قالب القصص_atlas_9"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.BMP_994d0d51_a6df_49d7_8706_ac95ece10875 = function() {
	this.initialize(ss["قالب القصص_atlas_9"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.BMP_9afa22c7_f73f_4b57_a214_ded3f0c331d2 = function() {
	this.initialize(ss["قالب القصص_atlas_9"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.BMP_7e139baa_c783_420c_8536_edd31d2e3681 = function() {
	this.initialize(ss["قالب القصص_atlas_9"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.BMP_97fbdfe5_607d_4cb3_a0e2_b2614d0aa638 = function() {
	this.initialize(ss["قالب القصص_atlas_9"]);
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.BMP_a277066e_c96f_4811_9eb9_8e17b23841b1 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(77);
}).prototype = p = new cjs.Sprite();



(lib.BMP_9cbaff0c_d504_43e6_ad62_18e5a9b43b97 = function() {
	this.initialize(ss["قالب القصص_atlas_9"]);
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.BMP_a9590f5f_1d78_4511_80d8_a15b2831172d = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(78);
}).prototype = p = new cjs.Sprite();



(lib.BMP_aee36553_2bb1_4502_9fa0_30c59c274357 = function() {
	this.initialize(ss["قالب القصص_atlas_8"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.BMP_aef34530_dc6a_4eb4_9b99_6898425fee7e = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(79);
}).prototype = p = new cjs.Sprite();



(lib._3 = function() {
	this.initialize(ss["قالب القصص_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.BMP_a70e4df8_fafe_4954_a400_c13eb7fe14bb = function() {
	this.initialize(ss["قالب القصص_atlas_9"]);
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.BMP_b3bb29a8_12d2_4198_8f0a_3f6b81f185cc = function() {
	this.initialize(ss["قالب القصص_atlas_9"]);
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.BMP_b47da001_bf4f_4e80_bc07_15067d6518b4 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(80);
}).prototype = p = new cjs.Sprite();



(lib.BMP_b0c2be7e_9b42_458d_8ec6_44d98279e585 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(81);
}).prototype = p = new cjs.Sprite();



(lib._4 = function() {
	this.initialize(ss["قالب القصص_atlas_7"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.BMP_be8c5ece_5687_4dd3_bd36_d14c31f03d9b = function() {
	this.initialize(ss["قالب القصص_atlas_9"]);
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.BMP_9fa6e4a1_f532_46e4_bfe8_5d844412e215 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(82);
}).prototype = p = new cjs.Sprite();



(lib.BMP_c4c599ee_6409_4777_ad2a_ee3c0f6dda4c = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(83);
}).prototype = p = new cjs.Sprite();



(lib.BMP_c62b30f7_15c3_4137_8b09_acaa2aad7650 = function() {
	this.initialize(ss["قالب القصص_atlas_9"]);
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.BMP_c0675b67_a026_4d25_96a5_dd72b2948840 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(84);
}).prototype = p = new cjs.Sprite();



(lib.BMP_af978515_ec81_4bf2_9c17_b1d0875d3967 = function() {
	this.initialize(ss["قالب القصص_atlas_9"]);
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.BMP_cbb8df24_74ff_4527_8455_c92adbfbbd49 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(85);
}).prototype = p = new cjs.Sprite();



(lib.BMP_b4b531a9_cac8_444e_b435_38becf01c658 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(86);
}).prototype = p = new cjs.Sprite();



(lib.BMP_c92a49fe_c451_4788_84a5_cfb60fbeeb6c = function() {
	this.initialize(ss["قالب القصص_atlas_9"]);
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.BMP_d67e096e_0d85_4cf3_bc18_31419483e21a = function() {
	this.initialize(ss["قالب القصص_atlas_8"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.BMP_cd69625b_12d3_4e58_a429_fbefd4aa9919 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(87);
}).prototype = p = new cjs.Sprite();



(lib.BMP_d828e5d1_fc5f_46fe_a520_fc27a0463248 = function() {
	this.initialize(ss["قالب القصص_atlas_8"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.BMP_d9c9ab59_7459_4704_a503_0238a63b3289 = function() {
	this.initialize(ss["قالب القصص_atlas_9"]);
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.BMP_43d157ee_7eb6_4b72_8b71_3b7e958a1117 = function() {
	this.initialize(ss["قالب القصص_atlas_8"]);
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.BMP_b9c445f1_f36a_4129_a14f_94396ac2a404 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(88);
}).prototype = p = new cjs.Sprite();



(lib.BMP_e0762657_0170_4139_bffd_55416afe32d6 = function() {
	this.initialize(ss["قالب القصص_atlas_8"]);
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.BMP_e20da9c9_fb9d_4001_be3f_df8fed186635 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(89);
}).prototype = p = new cjs.Sprite();



(lib.BMP_dc17d831_8f44_4586_9a8e_baa29ebfe09d = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(90);
}).prototype = p = new cjs.Sprite();



(lib.BMP_d685dabc_0668_40a7_8c4a_86a8b4d039c9 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(91);
}).prototype = p = new cjs.Sprite();



(lib.BMP_ed68f9c4_0bae_496b_80a1_50d914d80755 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(92);
}).prototype = p = new cjs.Sprite();



(lib.BMP_f0f02161_c3a3_42e8_af6e_1d43b7c9709f = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(93);
}).prototype = p = new cjs.Sprite();



(lib.BMP_f12692b0_bc74_4f06_bbb4_7587a58c8c0a = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(94);
}).prototype = p = new cjs.Sprite();



(lib.BMP_d19c490c_1381_4fda_a893_eb308505f29f = function() {
	this.initialize(ss["قالب القصص_atlas_8"]);
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.BMP_e28ae5b9_d30b_43e9_8455_0d11d264e15d = function() {
	this.initialize(ss["قالب القصص_atlas_9"]);
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.BMP_c72bd517_5afe_4f83_be53_bb81650cc486 = function() {
	this.initialize(ss["قالب القصص_atlas_9"]);
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.BMP_f1e24729_2fa6_4905_a8a3_4be3666f8b8a = function() {
	this.initialize(ss["قالب القصص_atlas_9"]);
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.BMP_db22edc2_234e_4d71_850a_f4f950dd9a85 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(95);
}).prototype = p = new cjs.Sprite();



(lib.BMP_e6bfa4c6_631b_4683_9396_06c402089a76 = function() {
	this.initialize(ss["قالب القصص_atlas_9"]);
	this.gotoAndStop(30);
}).prototype = p = new cjs.Sprite();



(lib.BMP_ff8c0c02_e9ee_4e89_8415_1d857cb900f4 = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(96);
}).prototype = p = new cjs.Sprite();



(lib.dodq14x = function() {
	this.initialize(ss["قالب القصص_atlas_10"]);
	this.gotoAndStop(97);
}).prototype = p = new cjs.Sprite();



(lib.BMP_7d4d0ff8_5a15_4263_9681_6732c8789938 = function() {
	this.initialize(ss["قالب القصص_atlas_8"]);
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.BMP_fbaa0abf_12f6_4aee_8b22_b5a1ddb9fa1d = function() {
	this.initialize(ss["قالب القصص_atlas_9"]);
	this.gotoAndStop(31);
}).prototype = p = new cjs.Sprite();



(lib.BMP_f7e2176f_8c2d_428a_8e2d_3a9674d036a5 = function() {
	this.initialize(ss["قالب القصص_atlas_9"]);
	this.gotoAndStop(32);
}).prototype = p = new cjs.Sprite();



(lib.BMP_fdeaade0_691e_43f0_bec5_7f5688f73361 = function() {
	this.initialize(ss["قالب القصص_atlas_9"]);
	this.gotoAndStop(33);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_11 = function() {
	this.initialize(ss["قالب القصص_atlas_8"]);
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_12 = function() {
	this.initialize(ss["قالب القصص_atlas_8"]);
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_10 = function() {
	this.initialize(ss["قالب القصص_atlas_2"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_68 = function() {
	this.initialize(ss["قالب القصص_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_1 = function() {
	this.initialize(ss["قالب القصص_atlas_1"]);
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


(lib.WarpedAsset_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.BMP_e20da9c9_fb9d_4001_be3f_df8fed186635();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,245,346);


(lib.WarpedAsset_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.BMP_af978515_ec81_4bf2_9c17_b1d0875d3967();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,245,346);


(lib.WarpedAsset_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.BMP_26ca2081_1427_479a_81ff_e0340fbe1102();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,415,260);


(lib.WarpedAsset_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.BMP_0f478fff_3b12_4ccc_b898_5e7f2014e8c4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,309,247);


(lib.toggl = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_5
	this.instance = new lib.CachedBmp_76();
	this.instance.setTransform(-20.05,-20.05,0.5,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-20,36.5,37.5);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_12();
	this.instance.setTransform(0,0,0.093,0.093);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,66,70);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_11();
	this.instance.setTransform(0,0,0.0971,0.0971);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,52.6,55.7);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.CachedBmp_72();
	this.instance.setTransform(157.25,139.7,0.4619,0.4619);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_2
	this.instance_1 = new lib.CachedBmp_73();
	this.instance_1.setTransform(74.3,64.5,0.4619,0.4619);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// Layer_1
	this.instance_2 = new lib.CachedBmp_75();
	this.instance_2.setTransform(0,0,0.4619,0.4619);

	this.instance_3 = new lib.CachedBmp_74();
	this.instance_3.setTransform(-1.45,-1.45,0.4619,0.4619);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.4,-1.4,393.5,401.4);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.CachedBmp_70();
	this.instance.setTransform(15.5,-10.95,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_69();
	this.instance_1.setTransform(1,-5.7,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Layer_1
	this.instance_2 = new lib.CachedBmp_71();
	this.instance_2.setTransform(-100.5,-19.5,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-100.5,-19.5,201,39);


(lib.start = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_68();
	this.instance.setTransform(-418.6,-249.3,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.start, new cjs.Rectangle(-418.6,-249.3,815,498.5), null);


(lib.reply = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.instance = new lib.CachedBmp_52();
	this.instance.setTransform(-17.65,-15.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// Layer_2
	this.instance_1 = new lib.CachedBmp_53();
	this.instance_1.setTransform(-164.05,-11.65,0.5,0.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1));

	// Layer_3
	this.instance_2 = new lib.CachedBmp_54();
	this.instance_2.setTransform(-28.9,-27.4,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_55();
	this.instance_3.setTransform(-28.9,-27.4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164,-27.4,193.1,55);


(lib.fodoli = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.dodq14x();
	this.instance.setTransform(0,0,0.5185,0.4508);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fodoli, new cjs.Rectangle(0,0,127.1,156), null);


(lib.WarpedAsset_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.BMP_3aa4b983_8539_41c1_96f6_7ded5e21aa50();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,286,260);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_33();
	this.instance.setTransform(-10.2,-18.4,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_32();
	this.instance_1.setTransform(-28.4,3.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.4,-18.4,56.2,37);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_31();
	this.instance.setTransform(-26.35,-14.55,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_30();
	this.instance_1.setTransform(8.9,-10.8,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26.3,-14.5,53.2,29);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{AEI:1,FV:2,L:4,E:5,D:6,R:7,U:9,O:10,BMP:11,W:12});

	// Layer_2
	this.instance = new lib.CachedBmp_20();
	this.instance.setTransform(-27.2,-13.2,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_21();
	this.instance_1.setTransform(-28.9,-11.9,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_22();
	this.instance_2.setTransform(-25.9,-8.75,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_23();
	this.instance_3.setTransform(-31.3,-10.7,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_24();
	this.instance_4.setTransform(-27.3,-11.25,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_25();
	this.instance_5.setTransform(-27.2,-13.2,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_26();
	this.instance_6.setTransform(-10.9,-9.6,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_27();
	this.instance_7.setTransform(-11.65,-11.3,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_28();
	this.instance_8.setTransform(-21.6,-8.3,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_29();
	this.instance_9.setTransform(-12.4,-9.4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).to({state:[]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.3,-13.2,53.1,21.6);


(lib.Group_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_13();
	this.instance.setTransform(0,0,0.0875,0.0875);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Group_5, new cjs.Rectangle(0,0,6.7,8.2), null);


(lib.dodahijab = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.CachedBmp_10();
	this.instance.setTransform(0,0,0.4907,0.4907);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dodahijab, new cjs.Rectangle(0,0,614.8,399.9), null);


(lib.btn_next = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// Layer_1
	this.instance = new lib.CachedBmp_7();
	this.instance.setTransform(-13.9,-15.05,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// Layer_3
	this.instance_1 = new lib.CachedBmp_8();
	this.instance_1.setTransform(-21.4,-43.15,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_9();
	this.instance_2.setTransform(-21.4,-43.15,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.4,-43.1,43,86.5);


(lib.PuppetShape_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.WarpedAsset_5("synched",0);

	this.instance_1 = new lib.BMP_02608903_0767_4820_8270_842eae0f46cf();
	this.instance_1.setTransform(0.05,0);

	this.instance_2 = new lib.BMP_f7e2176f_8c2d_428a_8e2d_3a9674d036a5();
	this.instance_2.setTransform(-31,11.95);

	this.instance_3 = new lib.BMP_9afa22c7_f73f_4b57_a214_ded3f0c331d2();
	this.instance_3.setTransform(-61.75,25.05);

	this.instance_4 = new lib.BMP_a70e4df8_fafe_4954_a400_c13eb7fe14bb();
	this.instance_4.setTransform(-91.35,37.6);

	this.instance_5 = new lib.BMP_b3bb29a8_12d2_4198_8f0a_3f6b81f185cc();
	this.instance_5.setTransform(-120.6,51.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[]},2).to({state:[{t:this.instance_1}]},128).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-120.6,0,365.6,346);


(lib.PuppetShape_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.WarpedAsset_4("synched",0);

	this.instance_1 = new lib.BMP_c4c599ee_6409_4777_ad2a_ee3c0f6dda4c();
	this.instance_1.setTransform(0.8,0);

	this.instance_2 = new lib.BMP_70a95905_be22_4049_b0c2_145a8f931283();
	this.instance_2.setTransform(1.2,6.9);

	this.instance_3 = new lib.BMP_59f7fadc_9c39_4fec_97d1_cf58282e07ce();
	this.instance_3.setTransform(1.65,13.85);

	this.instance_4 = new lib.BMP_cd69625b_12d3_4e58_a429_fbefd4aa9919();
	this.instance_4.setTransform(2.25,20.85);

	this.instance_5 = new lib.BMP_b0c2be7e_9b42_458d_8ec6_44d98279e585();
	this.instance_5.setTransform(2.9,27.75);

	this.instance_6 = new lib.BMP_aef34530_dc6a_4eb4_9b99_6898425fee7e();
	this.instance_6.setTransform(3.8,34.7);

	this.instance_7 = new lib.BMP_cbb8df24_74ff_4527_8455_c92adbfbbd49();
	this.instance_7.setTransform(2.9,27.75);

	this.instance_8 = new lib.BMP_9fa6e4a1_f532_46e4_bfe8_5d844412e215();
	this.instance_8.setTransform(2.25,20.85);

	this.instance_9 = new lib.BMP_b4b531a9_cac8_444e_b435_38becf01c658();
	this.instance_9.setTransform(1.65,13.85);

	this.instance_10 = new lib.BMP_c0675b67_a026_4d25_96a5_dd72b2948840();
	this.instance_10.setTransform(1.2,6.9);

	this.instance_11 = new lib.BMP_2baa44ce_b4bb_46fd_9f9a_bf7a9cf68c5c();
	this.instance_11.setTransform(0.8,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},104).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).wait(21));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,245,346);


(lib.PuppetShape_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.WarpedAsset_3("synched",0);

	this.instance_1 = new lib.BMP_e28ae5b9_d30b_43e9_8455_0d11d264e15d();

	this.instance_2 = new lib.BMP_2770099b_caf3_4e4d_abcb_805aa5af742a();
	this.instance_2.setTransform(-5.15,-4.25);

	this.instance_3 = new lib.BMP_9cbaff0c_d504_43e6_ad62_18e5a9b43b97();
	this.instance_3.setTransform(-10.05,-7.85);

	this.instance_4 = new lib.BMP_fbaa0abf_12f6_4aee_8b22_b5a1ddb9fa1d();
	this.instance_4.setTransform(-15,-10.65);

	this.instance_5 = new lib.BMP_5f933ea4_c79b_40e5_8a33_6139c27a587b();
	this.instance_5.setTransform(-19.8,-12.95);

	this.instance_6 = new lib.BMP_c72bd517_5afe_4f83_be53_bb81650cc486();
	this.instance_6.setTransform(-24.75,-14.5);

	this.instance_7 = new lib.BMP_994d0d51_a6df_49d7_8706_ac95ece10875();
	this.instance_7.setTransform(-29.8,-15.65);

	this.instance_8 = new lib.BMP_e0762657_0170_4139_bffd_55416afe32d6();
	this.instance_8.setTransform(-34.9,-16.35);

	this.instance_9 = new lib.BMP_01139964_40c7_4232_8682_39f90025b1b6();
	this.instance_9.setTransform(-41.2,-16.55);

	this.instance_10 = new lib.BMP_92c9dccf_d36e_4605_8506_ebfce0e54554();
	this.instance_10.setTransform(-47.75,-16.55);

	this.instance_11 = new lib.BMP_2026600e_933a_4b93_b62a_aa224cbd506d();
	this.instance_11.setTransform(-54.4,-16.1);

	this.instance_12 = new lib.BMP_0f348e01_b304_48e1_a5c6_d1b9c1183d9d();
	this.instance_12.setTransform(-41.15,-16.6);

	this.instance_13 = new lib.BMP_fdeaade0_691e_43f0_bec5_7f5688f73361();
	this.instance_13.setTransform(-29.75,-15.7);

	this.instance_14 = new lib.BMP_be8c5ece_5687_4dd3_bd36_d14c31f03d9b();
	this.instance_14.setTransform(-19.75,-13);

	this.instance_15 = new lib.BMP_5244a61b_fedc_4473_aac0_ed1ea9631b3f();
	this.instance_15.setTransform(-10,-7.95);

	this.instance_16 = new lib.BMP_c62b30f7_15c3_4137_8b09_acaa2aad7650();

	this.instance_17 = new lib.BMP_d9c9ab59_7459_4704_a503_0238a63b3289();
	this.instance_17.setTransform(-7.25,-5.9);

	this.instance_18 = new lib.BMP_4786af54_ff3a_4c4f_b0ad_14f62e9cda44();
	this.instance_18.setTransform(-14.3,-10.35);

	this.instance_19 = new lib.BMP_5b5f51e3_d5c1_4f85_87d2_19835385824f();
	this.instance_19.setTransform(-21.25,-13.4);

	this.instance_20 = new lib.BMP_9910dc06_5fa0_4875_ac37_68fa0cb1efe2();
	this.instance_20.setTransform(-28.3,-15.4);

	this.instance_21 = new lib.BMP_7d4d0ff8_5a15_4263_9681_6732c8789938();
	this.instance_21.setTransform(-35.65,-16.35);

	this.instance_22 = new lib.BMP_d19c490c_1381_4fda_a893_eb308505f29f();
	this.instance_22.setTransform(-44.95,-16.55);

	this.instance_23 = new lib.BMP_3b91d64a_f86e_4aa3_b7d2_314dfb26ded9();
	this.instance_23.setTransform(-54.5,-16);

	this.instance_24 = new lib.BMP_43d157ee_7eb6_4b72_8b71_3b7e958a1117();
	this.instance_24.setTransform(-41.15,-16.6);

	this.instance_25 = new lib.BMP_337d5419_b2de_468b_9653_c67e92b0180a();
	this.instance_25.setTransform(-29.75,-15.7);

	this.instance_26 = new lib.BMP_97fbdfe5_607d_4cb3_a0e2_b2614d0aa638();
	this.instance_26.setTransform(-19.75,-13);

	this.instance_27 = new lib.BMP_45056f7f_bc1a_423c_84d7_c45c0d0b56a7();
	this.instance_27.setTransform(-10,-7.95);

	this.instance_28 = new lib.BMP_8ee4be89_8d69_4cce_9bf6_dd74d50f8f47();

	this.instance_29 = new lib.BMP_1574cda9_9ce3_40df_86fc_83d5fa6a334d();
	this.instance_29.setTransform(-8.45,-6.7);

	this.instance_30 = new lib.BMP_c92a49fe_c451_4788_84a5_cfb60fbeeb6c();
	this.instance_30.setTransform(-16.6,-11.5);

	this.instance_31 = new lib.BMP_611bdd24_4891_4568_8111_960175980b88();
	this.instance_31.setTransform(-24.75,-14.5);

	this.instance_32 = new lib.BMP_d828e5d1_fc5f_46fe_a520_fc27a0463248();
	this.instance_32.setTransform(-33.2,-16.1);

	this.instance_33 = new lib.BMP_aee36553_2bb1_4502_9fa0_30c59c274357();
	this.instance_33.setTransform(-43.4,-16.6);

	this.instance_34 = new lib.BMP_d67e096e_0d85_4cf3_bc18_31419483e21a();
	this.instance_34.setTransform(-54.5,-16);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},135).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).wait(18));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-54.5,-16.6,469.5,287.6);


(lib.PuppetShape_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.WarpedAsset_1("synched",0);

	this.instance_1 = new lib.BMP_4265763f_1970_4b1e_a0d9_62adcc7990cb();
	this.instance_1.setTransform(-43.55,-19.8);

	this.instance_2 = new lib.BMP_0444bafb_548d_4198_b562_7c4a87b5a3dd();
	this.instance_2.setTransform(-41.5,-17);

	this.instance_3 = new lib.BMP_52761728_dd6e_42d8_b9fc_4c83f5393a0a();
	this.instance_3.setTransform(-39.3,-14.05);

	this.instance_4 = new lib.BMP_2394080f_f786_415c_87c7_6d844b7d2060();
	this.instance_4.setTransform(-37.2,-11.2);

	this.instance_5 = new lib.BMP_b47da001_bf4f_4e80_bc07_15067d6518b4();
	this.instance_5.setTransform(-35,-8.2);

	this.instance_6 = new lib.BMP_dc17d831_8f44_4586_9a8e_baa29ebfe09d();
	this.instance_6.setTransform(-32.85,-6.2);

	this.instance_7 = new lib.BMP_a9590f5f_1d78_4511_80d8_a15b2831172d();
	this.instance_7.setTransform(-30.6,-6.15);

	this.instance_8 = new lib.BMP_f12692b0_bc74_4f06_bbb4_7587a58c8c0a();
	this.instance_8.setTransform(-28.45,-6.15);

	this.instance_9 = new lib.BMP_db22edc2_234e_4d71_850a_f4f950dd9a85();
	this.instance_9.setTransform(-26.2,-6.15);

	this.instance_10 = new lib.BMP_6e3c6144_a98a_4a9d_90d3_50a4e2f52166();
	this.instance_10.setTransform(-27.15,-5.85);

	this.instance_11 = new lib.BMP_d685dabc_0668_40a7_8c4a_86a8b4d039c9();
	this.instance_11.setTransform(-27.5,-4.85);

	this.instance_12 = new lib.BMP_94d064c7_d5f4_48e4_aca3_2bd4ff3af957();
	this.instance_12.setTransform(-27.05,-2.75);

	this.instance_13 = new lib.BMP_924fdbc3_d9fc_4069_83fb_2217b3a652e7();
	this.instance_13.setTransform(-26.35,0.25);

	this.instance_14 = new lib.BMP_b9c445f1_f36a_4129_a14f_94396ac2a404();
	this.instance_14.setTransform(-25.7,2.9);

	this.instance_15 = new lib.BMP_7e139baa_c783_420c_8536_edd31d2e3681();
	this.instance_15.setTransform(-25.15,7);

	this.instance_16 = new lib.BMP_f1e24729_2fa6_4905_a8a3_4be3666f8b8a();
	this.instance_16.setTransform(-24.45,12.85);

	this.instance_17 = new lib.BMP_42fcb312_a895_4d0b_8498_d9d80acda4c4();
	this.instance_17.setTransform(-26.65,10);

	this.instance_18 = new lib.BMP_e6bfa4c6_631b_4683_9396_06c402089a76();
	this.instance_18.setTransform(-28.95,7.55);

	this.instance_19 = new lib.BMP_2e28d8c5_c2ab_4439_908e_f224189da39b();
	this.instance_19.setTransform(-31.2,5.45);

	this.instance_20 = new lib.BMP_701be41c_0ee7_4a2a_9208_d32a25de4c04();
	this.instance_20.setTransform(-31.15,5.45);

	this.instance_21 = new lib.BMP_ed68f9c4_0bae_496b_80a1_50d914d80755();
	this.instance_21.setTransform(-16.35,1.8);

	this.instance_22 = new lib.BMP_ff8c0c02_e9ee_4e89_8415_1d857cb900f4();
	this.instance_22.setTransform(-1.2,1.5);

	this.instance_23 = new lib.BMP_a277066e_c96f_4811_9eb9_8e17b23841b1();
	this.instance_23.setTransform(17.4,7.4);

	this.instance_24 = new lib.BMP_76158392_e2d4_4a0b_88de_be2929eb06c7();
	this.instance_24.setTransform(32,-10);

	this.instance_25 = new lib.BMP_f0f02161_c3a3_42e8_af6e_1d43b7c9709f();
	this.instance_25.setTransform(33.2,-51.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[]},2).to({state:[{t:this.instance_1}]},7).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},47).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-43.5,-51.5,352.6,335.4);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_57 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(57).call(this.frame_57).wait(1));

	// Layer_2
	this.instance = new lib.CachedBmp_45();
	this.instance.setTransform(-19.9,-24.65,0.5,0.5);

	this.instance_1 = new lib.CachedBmp_35();
	this.instance_1.setTransform(-19.9,-24.65,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_36();
	this.instance_2.setTransform(-19.9,-24.65,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_37();
	this.instance_3.setTransform(-19.9,-24.65,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_38();
	this.instance_4.setTransform(-19.9,-24.65,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_39();
	this.instance_5.setTransform(-19.9,-24.65,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_40();
	this.instance_6.setTransform(-19.9,-24.65,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_41();
	this.instance_7.setTransform(-19.9,-24.65,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_42();
	this.instance_8.setTransform(-19.9,-24.65,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_43();
	this.instance_9.setTransform(-19.9,-24.65,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_44();
	this.instance_10.setTransform(-19.9,-24.65,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},45).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance}]},1).to({state:[]},1).wait(1));

	// Layer_1
	this.instance_11 = new lib.CachedBmp_48();
	this.instance_11.setTransform(3.4,-13.7,0.5,0.5);

	this.instance_12 = new lib.CachedBmp_47();
	this.instance_12.setTransform(-3.9,-15.7,0.5,0.5);

	this.instance_13 = new lib.Group_5();
	this.instance_13.setTransform(-2.6,-3.65,5.4191,5.7144,0,0,0,3.5,4.2);

	this.instance_14 = new lib.CachedBmp_46();
	this.instance_14.setTransform(-19.25,-23.25,0.5,0.5);

	this.instance_15 = new lib.CachedBmp_51();
	this.instance_15.setTransform(3.4,-13.75,0.5,0.5);

	this.instance_16 = new lib.CachedBmp_50();
	this.instance_16.setTransform(-3.9,-15.75,0.5,0.5);

	this.instance_17 = new lib.CachedBmp_49();
	this.instance_17.setTransform(-19.3,-23.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_14},{t:this.instance_13,p:{scaleX:5.4191,scaleY:5.7144,x:-2.6,y:-3.65}},{t:this.instance_12},{t:this.instance_11}]}).to({state:[{t:this.instance_17},{t:this.instance_13,p:{scaleX:5.419,scaleY:5.7139,x:-2.9,y:-3.95}},{t:this.instance_16},{t:this.instance_15}]},45).wait(13));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.8,-27.9,41.900000000000006,52.7);


(lib.PuppetShape_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.WarpedAsset_2("synched",0);

	this.instance_1 = new lib.BMP_2ad843e0_c77b_4ca5_9ed7_310e6a367124();
	this.instance_1.setTransform(-1.2,24.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},22).to({state:[]},8).wait(186));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.2,0,287.2,261.3);


(lib.dodafound = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// doda3_4x_png
	this.instance = new lib.PuppetShape_1("synched",9,false);
	this.instance.setTransform(425.2,-34.35,0.6277,0.654,0,0,0,156.9,120.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).to({regY:128.1,y:179.1,startPosition:17},8).to({y:179.9,startPosition:24},7,cjs.Ease.none).to({startPosition:27},3).wait(47).to({startPosition:74},0).to({startPosition:79},5).to({_off:true},1).wait(106));

	// doda2_4x_png
	this.instance_1 = new lib.PuppetShape_3("synched",135,false);
	this.instance_1.setTransform(391.85,173.6,0.6277,0.654,0,0,0,208.8,134.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(134).to({_off:false},0).to({startPosition:145},10).to({regX:214.7,regY:134.4,x:346.15,y:181.2,startPosition:150},5).to({regX:214.5,x:342.25,y:184,startPosition:157},7).to({regX:208.1,regY:134.2,x:260.2,y:191.85,startPosition:162},5).to({regY:134.3,y:192.1,startPosition:168},6).wait(18));

	// dodq1_4x_png
	this.instance_2 = new lib.dodq14x();
	this.instance_2.setTransform(367,13,0.6277,0.654);

	this.instance_3 = new lib.PuppetShape_4("synched",104,false);
	this.instance_3.setTransform(447.4,130,0.6277,0.654,0,0,0,126,177.2);
	this.instance_3._off = true;

	this.instance_4 = new lib.PuppetShape_5("synched",130,false);
	this.instance_4.setTransform(448.7,131.85,0.6381,0.6647,0,0,0,126,177.2);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},79).to({state:[{t:this.instance_3}]},24).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_3}]},5).to({state:[{t:this.instance_4}]},16).to({state:[{t:this.instance_4}]},4).to({state:[]},1).wait(51));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(103).to({_off:false},0).to({startPosition:109},5).to({startPosition:114},5).to({_off:true},16).wait(56));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(129).to({_off:false},0).to({startPosition:134},4).to({_off:true},1).wait(51));

	// Layer_5
	this.instance_5 = new lib.Symbol11("synched",0);
	this.instance_5.setTransform(393.4,189.45,0.826,0.826,0,0,0,26.1,31.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({regX:26.9,regY:28.8,scaleX:5.1508,scaleY:4.8915,x:414.35,y:191.75},20,cjs.Ease.bounceOut).wait(165));

	// Layer_4
	this.instance_6 = new lib.Symbol12("synched",0);
	this.instance_6.setTransform(390.95,190.75,0.826,0.826,0,0,0,35.1,38.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({regX:33.9,regY:36,scaleX:5.3729,scaleY:4.7197,x:392.25,y:192.65},20,cjs.Ease.bounceOut).wait(165));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(95.4,-125.8,469.20000000000005,478.8);


(lib.dodaBkg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol10("synched",0);
	this.instance.setTransform(219.5,225.8,0.9696,0.9615,0,0,0,219.5,225.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:219.3,regY:225.7,scaleX:1.0776,scaleY:1.0825,x:219.4},8).to({regX:219.5,regY:225.8,scaleX:0.9696,scaleY:0.9615,x:219.5},10).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-18.4,-20,424,434.5);


(lib.block_sound = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// toggl
	this.toggle = new lib.toggl();
	this.toggle.name = "toggle";
	this.toggle.setTransform(0.95,-0.85);

	this.timeline.addTween(cjs.Tween.get(this.toggle).wait(2));

	// Layer_1
	this.instance = new lib.CachedBmp_2();
	this.instance.setTransform(-19.8,-17.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// Layer_2
	this.instance_1 = new lib.CachedBmp_4();
	this.instance_1.setTransform(42.65,-8.8,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_3();
	this.instance_2.setTransform(40.5,-0.95,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2},{t:this.instance_1}]},1).wait(1));

	// Layer_4
	this.instance_3 = new lib.CachedBmp_5();
	this.instance_3.setTransform(-28.9,-27.4,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_55();
	this.instance_4.setTransform(-28.9,-27.4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3}]}).to({state:[{t:this.instance_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.9,-27.4,241.1,55);


(lib.doda = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{Neutral:0,Uh:4,S:7,"Uh":11,M:13,Ah:14,"D":18,"Neutral":21,"Ah":29,"S":32,"Ah":34,"L":39,Ee:43,"Uh":49,"M":52,"Neutral":53,"Ah":66,"D":68,Oh:69,"S":71,"Uh":73,Woo:77,"Ee":80,"L":83,"Ah":85,"D":88,"Uh":90,F:93,"Neutral":95,"Ah":98,"L":106,"Uh":109,"F":111,"Neutral":112,"Uh":115,"D":118,"Neutral":120,"Ee":149,"Uh":150,"L":153,"Ee":155,"D":159,"Uh":161,"L":162,"Woo":164,"L":167,"Neutral":169,"Uh":178,"D":180,"Ah":181,"D":183,"Uh":186,"F":191,"Uh":193,"Ee":196,"Woo":201,"D":204,"Neutral":207,"Neutral":214});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}
	this.frame_168 = function() {
		this.layn.gotoAndPlay(45)
		this.rayn.gotoAndPlay(45)
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(168).call(this.frame_168).wait(47));

	// FAM
	this.instance = new lib.Symbol6("single",11);
	this.instance.setTransform(88.65,-4.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({startPosition:9},0).wait(3).to({startPosition:7},0).wait(4).to({startPosition:9},0).wait(2).to({startPosition:11},0).wait(1).to({startPosition:1},0).wait(4).to({startPosition:6},0).wait(3).to({y:19.1,startPosition:11},0).wait(8).to({y:-3.9,startPosition:1},0).wait(3).to({y:1,startPosition:7},0).wait(2).to({startPosition:1},0).wait(5).to({y:-3,startPosition:4},0).wait(4).to({y:-3.9,startPosition:5},0).wait(6).to({y:-4.9,startPosition:9},0).wait(3).to({startPosition:11},0).wait(1).to({startPosition:11},0).wait(13).to({startPosition:1},0).wait(2).to({startPosition:6},0).wait(1).to({startPosition:10},0).wait(2).to({startPosition:7},0).wait(2).to({startPosition:9},0).wait(4).to({startPosition:12},0).wait(3).to({startPosition:5},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:1},0).wait(3).to({startPosition:6},0).wait(2).to({startPosition:9},0).wait(3).to({startPosition:2},0).wait(2).to({startPosition:11},0).wait(3).to({startPosition:1},0).wait(8).to({startPosition:4},0).wait(3).to({startPosition:9},0).wait(2).to({startPosition:2},0).wait(1).to({startPosition:11},0).wait(3).to({startPosition:9},0).wait(3).to({startPosition:6},0).wait(2).to({startPosition:11},0).wait(29).to({startPosition:5},0).wait(1).to({startPosition:9},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:5},0).wait(4).to({startPosition:6},0).wait(2).to({startPosition:9},0).wait(1).to({startPosition:4},0).wait(2).to({startPosition:12},0).wait(3).to({startPosition:4},0).wait(2).to({startPosition:11},0).wait(9).to({startPosition:9},0).wait(2).to({startPosition:6},0).wait(1).to({startPosition:1},0).wait(2).to({startPosition:6},0).wait(3).to({startPosition:9},0).wait(5).to({startPosition:2},0).wait(2).to({startPosition:9},0).wait(3).to({startPosition:5},0).wait(5).to({startPosition:12},0).wait(3).to({startPosition:6},0).wait(3).to({startPosition:11},0).wait(7).to({startPosition:11},0).wait(1));

	// Symbol_7
	this.instance_1 = new lib.Symbol7("synched",0);
	this.instance_1.setTransform(84.5,47.6,1,1,0,0,0,-26.4,-14.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(21).to({x:82.5,y:68.6},0).wait(8).to({x:84.5,y:47.6},0).wait(33).to({startPosition:0},0).to({rotation:90,x:84.6},8).wait(67).to({startPosition:0},0).to({rotation:0,x:84.5},8).wait(70));

	// Symbol_8
	this.instance_2 = new lib.Symbol8("synched",0);
	this.instance_2.setTransform(152.8,40.55,1,1,0,0,0,27.9,-18.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(21).to({x:150.8,y:61.55},0).wait(8).to({x:152.8,y:40.55},0).wait(33).to({startPosition:0},0).to({rotation:-45,x:152.85},8).wait(67).to({startPosition:0},0).to({rotation:0,x:152.8},8).wait(70));

	// AYN
	this.layn = new lib.Symbol9();
	this.layn.name = "layn";
	this.layn.setTransform(59.65,-64.35,0.8968,0.8996,0,0,0,0,-0.2);

	this.rayn = new lib.Symbol9();
	this.rayn.name = "rayn";
	this.rayn.setTransform(95.7,-72.8,1,1,0,0,0,-0.1,-0.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.rayn,p:{x:95.7,y:-72.8}},{t:this.layn,p:{x:59.65,y:-64.35}}]}).to({state:[{t:this.rayn,p:{x:93.7,y:-46.8}},{t:this.layn,p:{x:57.65,y:-38.35}}]},21).to({state:[{t:this.rayn,p:{x:95.7,y:-72.8}},{t:this.layn,p:{x:59.65,y:-64.35}}]},8).wait(186));

	// Layer_5
	this.instance_3 = new lib.CachedBmp_16();
	this.instance_3.setTransform(38.15,-105.25,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(21).to({y:-85.25},0).wait(8).to({y:-105.25},0).wait(186));

	// Layer_6
	this.instance_4 = new lib.CachedBmp_19();
	this.instance_4.setTransform(78.8,-120.55,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(21).to({y:-100.55},0).wait(8).to({y:-120.55},0).wait(186));

	// Isolation_Mode
	this.instance_5 = new lib.Bitmap3();
	this.instance_5.setTransform(-132,-100);

	this.instance_6 = new lib.PuppetShape_2("synched",22,false);
	this.instance_6.setTransform(11,30,1,1,0,0,0,143,130);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_5}]}).to({state:[{t:this.instance_6}]},21).to({state:[{t:this.instance_5}]},8).wait(186));

	// Layer_3
	this.bkg = new lib.dodaBkg();
	this.bkg.name = "bkg";
	this.bkg.setTransform(13,29.85,1,1,0,0,0,183.2,197.8);

	this.timeline.addTween(cjs.Tween.get(this.bkg).wait(215));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-164.9,-160.6,381.6,385.9);


(lib.show = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		if(this.douda){
		this.douda.visible = false
			}
		this.hijabDoda.visible = false
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12));

	// doda
	this.douda = new lib.doda();
	this.douda.name = "douda";
	this.douda.setTransform(61.05,63.95,0.2233,0.2326,0,0,0,25.8,32.2);

	this.timeline.addTween(cjs.Tween.get(this.douda).to({_off:true},1).wait(11));

	// hijab
	this.hijabDoda = new lib.dodahijab();
	this.hijabDoda.name = "hijabDoda";
	this.hijabDoda.setTransform(309.5,204.1,1,1.019,0,0,0,305.5,199.3);

	this.timeline.addTween(cjs.Tween.get(this.hijabDoda).wait(12));

	// fodolya
	this.fodolia = new lib.fodoli();
	this.fodolia.name = "fodolia";
	this.fodolia.setTransform(602.15,323.05,0.2126,0.2054,0,0,0,63.5,78.2);
	this.fodolia._off = true;

	this.timeline.addTween(cjs.Tween.get(this.fodolia).wait(8).to({_off:false},0).to({_off:true},1).wait(3));

	// Layer_1_copy
	this.instance = new lib.انااحبالوان();
	this.instance.setTransform(352,9,0.429,0.429);

	this.instance_1 = new lib.CachedBmp_56();
	this.instance_1.setTransform(11.05,336.55,0.5,0.5);

	this.instance_2 = new lib.CachedBmp_57();
	this.instance_2.setTransform(214.55,354.85,0.5,0.5);

	this.instance_3 = new lib.CachedBmp_58();
	this.instance_3.setTransform(225.5,189.9,0.5,0.5);

	this.instance_4 = new lib.CachedBmp_59();
	this.instance_4.setTransform(191.3,27.9,0.5,0.5);

	this.instance_5 = new lib.CachedBmp_60();
	this.instance_5.setTransform(294,368.45,0.5,0.5);

	this.instance_6 = new lib.CachedBmp_61();
	this.instance_6.setTransform(209.95,54.8,0.5,0.5);

	this.instance_7 = new lib.CachedBmp_62();
	this.instance_7.setTransform(20.05,210.1,0.5,0.5);

	this.instance_8 = new lib.CachedBmp_63();
	this.instance_8.setTransform(15.95,193.6,0.5,0.5);

	this.instance_9 = new lib.CachedBmp_64();
	this.instance_9.setTransform(207.95,70.45,0.5,0.5);

	this.instance_10 = new lib.CachedBmp_65();
	this.instance_10.setTransform(104.45,88.2,0.5,0.5);

	this.instance_11 = new lib.CachedBmp_66();
	this.instance_11.setTransform(22.95,52.05,0.5,0.5);

	this.instance_12 = new lib.CachedBmp_67();
	this.instance_12.setTransform(360.85,27.4,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).wait(1));

	// photo
	this.instance_13 = new lib._0();
	this.instance_13.setTransform(0,1,0.5784,0.7945);

	this.instance_14 = new lib._3();
	this.instance_14.setTransform(0,1,0.5784,0.5282);

	this.instance_15 = new lib._4();
	this.instance_15.setTransform(0,1,0.5784,0.5282);

	this.instance_16 = new lib._5();
	this.instance_16.setTransform(0,1,0.5784,0.5282);

	this.instance_17 = new lib._6();
	this.instance_17.setTransform(0,1,0.5784,0.5282);

	this.instance_18 = new lib._7();
	this.instance_18.setTransform(0,1,0.5784,0.5282);

	this.instance_19 = new lib._8();
	this.instance_19.setTransform(0,1,0.5784,0.5282);

	this.instance_20 = new lib._9();
	this.instance_20.setTransform(0,1,0.5784,0.5282);

	this.instance_21 = new lib._10();
	this.instance_21.setTransform(0,1,0.5784,0.5282);

	this.instance_22 = new lib._11();
	this.instance_22.setTransform(0,1,0.5784,0.5282);

	this.instance_23 = new lib._12();
	this.instance_23.setTransform(0,1,0.5784,0.5282);

	this.instance_24 = new lib._13();
	this.instance_24.setTransform(0,1,0.5784,0.5282);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_13}]}).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,1,622.3,407.6);


// stage content:
(lib.قالبالقصص = function(mode,startPosition,loop) {
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
		
		var max_slide = 0;
		
		///setTimeout(function () {
		
		//	init();
		
		
		//;}, 100);
		
		stage.on("drawend", init, this, true);
		var current_slide = 0;
		
		
		
		stage.enableMouseOver(10);
		
		createjs.Touch.enable(stage, true, true);
		
		stage.preventSelection = false;
		
		
		function init() {
		
		
			that.show.gotoAndStop(0);
			
			that.start.addEventListener("click", tostart);
		
			
		
			
		    that. pageNumStory = new createjs.Text();
		    
		    that. pageNumStory.color = '#000'
		    that. pageNumStory.font = "20px 'Comic Sans MS', cursive, sans-serif";
			that. pageNumStory.x = 334
			that. pageNumStory.y = 28
			that.addChild(that. pageNumStory)
			
			that.next.addEventListener("click", toNext);
			that.next.addEventListener("rollover", overBtn);
			that.next.addEventListener("rollout", outBtn);
		
			that.prev.addEventListener("click", toprev);
			that.prev.addEventListener("rollover", overBtn);
			that.prev.addEventListener("rollout", outBtn);
		
			that.prev.visible = false;
		
			that.reply.addEventListener("click", toreplay);
			that.reply.addEventListener("rollover", overBtn);
			that.reply.addEventListener("rollout", outBtn);
		
			that.block.addEventListener("click", toblock);
			that.block.addEventListener("rollover", overBtn);
			that.block.addEventListener("rollout", outBtn);
		
			
		
			that.show.addEventListener("mousedown", onmousedown);
		
			max_slide = that.show.totalFrames;
		
			that.pageNumStory.text = setValue(1);
		
			if(that.show.douda){
				
				that.show.douda.addEventListener("click", animeDouda);
				that.show.douda.visible = false
		}	
			
			if(that.show.fodolia) that.show.fodolia.addEventListener("click", tofodolia);
		}
		
		
		function mouseEnabledButton ( bool ){
			
		
			that.next.mouseEnabled = bool
			that.prev.mouseEnabled = bool
			that.reply.mouseEnabled = bool
			that.block.mouseEnabled = bool
			
		}
		function animeDouda(ev) {
				
			if (ev.nativeEvent instanceof MouseEvent) {
				
			mouseEnabledButton(false)
					that.show.hijabDoda.visible = true
					
					createjs.Tween.get(that.show.douda, {
						loop: false
					}).wait(0)
						.to({
				
							x: 300,
							y: 200,
				
							scaleX: 0.6,
							scaleY: 0.6
				
						}, 1000, createjs.Ease.getPowInOut(2)).call(function () {
				
							that.show.douda.play()
				
							that.show.douda.bkg.gotoAndStop(0)
				
							startSound('DODA')
						})
						
						setTimeout(function() {
						
						remove_doda()
						
						}
						,10000)
				}
				
			}
				function remove_doda(){
					
					createjs.Tween.get(that.show.douda, {
						loop: false
					})
						.to({
							scaleX: 0.2,
							scaleY: 0.2
				
						}, 1000, createjs.Ease.getBackOut(2))
						.wait(200)
						.to({
							scaleX: 0,
							scaleY: 0
				
						}, 400, createjs.Ease.getPowIn(3))
					
						setTimeout(function() {
							
						that.show.hijabDoda.visible = false
						that.show.douda.visible = false
							
						mouseEnabledButton(true)
							
						}
						,1800)
				}
		
		function onmousedown(e) {
		
		
		
		
			that.show.addEventListener("pressup", onpressup);
			//that.show.addEventListener("pressmove", onpressmove);
		
			var pt = that.globalToLocal(e.stageX, e.stageY);
			var posX = pt.x;
			var posY = pt.y;
			//e.currentTarget.offset = {
			//	x: posX - e.currentTarget.x,
			//	y: posY - e.currentTarget.y
			//};
		
			e.currentTarget.down = {
				x: posX,
				y: posY
			};
			console.log('onmousedown ' + pt.x);
		}
		
		
		
		
		var scaleFac = 1;
		function onpressup(evt) {
		
		
			that.show.removeEventListener("pressup", onpressup);
			//that.show.removeEventListener("pressmove", onpressmove);
		
			var pt = that.globalToLocal(evt.stageX, evt.stageY);
			console.log('onpressup ' + pt.x);
			console.log('onpressup swap dist' + Math.abs(evt.currentTarget.down.x - pt.x) * scaleFac);
		
			//if the diff between the x coord of touch/mouse down end up is bigger than 100 and the is no drag action on the container 'cont'
			if ((Math.abs(evt.currentTarget.down.x - pt.x) * scaleFac) > 100) {
				swapToNext(evt.currentTarget.down.x - pt.x, evt);
			}
		
		
		}
		
		
		
		function tofodolia (ev) {
			
			if (ev.nativeEvent instanceof MouseEvent) {
				
			mouseEnabledButton(false)
				
			that.show.fodolia.visible = false
			var fodoliMc = new lib['dodafound']()
			
			 createjs.Sound.stop();
			
			that.show.hijabDoda.visible = true
			that.show.addChild(fodoliMc)
			startSound('DODA1')
			console.log( that.show.getChildIndex(fodoliMc))
			setTimeout(function() {
						
				     
						remove_dodafounded(fodoliMc)
						
						}
						,7000)
			
		}
		
		}
		
		function remove_dodafounded(fdliMc){
			
			
			fdliMc.stop()
				createjs.Tween.get(fdliMc, {
						loop: false
					})
						.to({
							scaleX: 0.2,
							scaleY: 0.2
				
						}, 1000, createjs.Ease.getBackOut(2))
						.wait(200)
						.to({
							scaleX: 0,
							scaleY: 0
				
						}, 400, createjs.Ease.getPowIn(3))
					
						setTimeout(function() {
							
			that.show.hijabDoda.visible = false
			that.show.removeChildAt(5)
			startSound(current_slide);
				
			mouseEnabledButton(true)
			
						}
						,1800)
						
			
			
		}
		function tostart(ev) {
		
		
		console.log('ev ' , ev)
			if (ev.nativeEvent instanceof MouseEvent) {
		
				that.start.removeEventListener("click", tostart);
		
				startSound(0);
		
				that.start.visible = false;
		
		
		       if(that.show.douda){
				setTimeout(function () {
					
					that.show.douda.visible = true
					that.show.douda.layn.gotoAndPlay(1)
					that.show.douda.rayn.gotoAndPlay(1)
					
					
				}, 2000)
		
			}
		
			}
		
		}
		
		function toNext(ev, swap = false) {
		
		
		
			if (swap || ev.nativeEvent instanceof MouseEvent) {
		
		
				createjs.Sound.stop();
		
		
				//ev.currentTarget.bkg.alpha = 0.5;
				//alert(that.totalFrames);
		
				that.prev.visible = true;
				if (current_slide == max_slide - 2) {
		
					that.next.visible = false;
		
				}
				if (current_slide == max_slide - 1) {
		
					return
				}
		
				current_slide = current_slide + 1;
		
				startSound(current_slide);
		
				that.pageNumStory.text = setValue(current_slide + 1);
		
		
				that.show.gotoAndStop(current_slide);
			}
		}
		
		
		function toprev(ev, swap = false) {
		
		
		
			if (swap || ev.nativeEvent instanceof MouseEvent) {
		
		
				createjs.Sound.stop();
		
				//ev.currentTarget.bkg.alpha = 0.5; 
				that.next.visible = true;
				if (current_slide - 2 < 0) {
		
					that.prev.visible = false;
		
				}
		
				if (current_slide - 1 < 0) {
		
					return
				}
				current_slide = current_slide - 1;
				startSound(current_slide);
		
				that.pageNumStory.text = setValue(current_slide + 1);
		
		
				that.show.gotoAndStop(current_slide);
		
			}
		}
		
		function swapToNext(newdist, evt) {
		
		
			if (newdist > 100) {
		
				toprev(evt, true);
			}
			if (newdist < -100) {
		
				toNext(evt, true);
			}
		}
		
		function overBtn(ev) {
		
			ev.currentTarget.gotoAndStop(1);
		
		
		}
		function outBtn(ev) {
		
			ev.currentTarget.gotoAndStop(0);
		}
		
		function toreplay(ev) {
		
			if (ev.nativeEvent instanceof MouseEvent) {
				createjs.Sound.stop();
				startSound(current_slide);
			}
		}
		
		function toblock(ev) {
		
			if (ev.nativeEvent instanceof MouseEvent) {
		
		
				if (on) {
					createjs.Sound.stop();
		
					that.block.toggle.gotoAndStop(1),
					on = false;
				} else {
		
					that.block.toggle.gotoAndStop(0),
					on = true;
				}
			}
		}
		
		
		///////////////  sound  //////////////////////
		
		var on = true;
		var sound_manif = [];
		if (!createjs.Sound.isReady()) {
			// createjs.FlashAudioPlugin.swfPath = "../src/soundjs/flashaudio/";
			createjs.Sound.registerPlugins([createjs.WebAudioPlugin, createjs.HTMLAudioPlugin, createjs.FlashAudioPlugin]);
		}
		
		var sound_lisener =	createjs.Sound.on("fileload", handleFileLoad);
		createjs.Sound.alternateExtensions = ["ogg"];
		
		
			soundIsReady = createjs.Sound.registerSounds(
		     [
		{
			id:'DODA',
			src:'DODA.mp3'
		},{
			id:'DODA1',
			src:'DODA1.mp3'
		}
		
		] , "mysound/")
		
		function handleFileLoad(event){
			
			
			sound_manif.push(event.id);
		
		}
		
		function startSound(soutToPly) {
		
			sout = '' + soutToPly
			console.log('sound name to ply', sout);
		
			if (sound_manif.includes( sout)) {
		
				console.log('sound_manif.includes == true');
				music_play( sout);
				return;
			}
		
			createjs.Sound.addEventListener("fileload", handleLoad);
		
			soundIsReady = createjs.Sound.registerSound("mysound/" + sout + ".mp3",  sout);
		
		}
		
		
		
		function handleLoad(event) {
		
			music_play(event.id);
			sound_manif.push(event.id);
		
		}
		
		
		
		
		function music_play(sound_sout) {
		
			console.log('music_play(sound_sout)' ,typeof sound_sout === 'string' )
		
			if ( (on && soundIsReady) || sound_sout.startsWith('DODA') ) {
		
		
				that.music = createjs.Sound.play(sound_sout);
		
				that.music.on("complete", handleComplete);
		
		
		
		
			}
		
		}
		
		function handleComplete() {
		
			console.log('sound complete');
		}
		
		function setValue(num) {
		
			return max_slide + ' - ' + num;
		}
		
		that.addEventListener("removed", onRemove);
		
		function onRemove(ev) {
		
			that.next.removeEventListener("click", toNext);
			that.next.removeEventListener("rollover", overBtn);
			that.next.removeEventListener("rollout", outBtn);
		
			that.prev.removeEventListener("click", toprev);
			that.prev.removeEventListener("rollover", overBtn);
			that.prev.removeEventListener("rollout", outBtn);
		
			that.reply.removeEventListener("click", toreplay);
			that.reply.removeEventListener("rollover", overBtn);
			that.reply.removeEventListener("rollout", outBtn);
		
			that.block.removeEventListener("click", toblock);
			that.block.removeEventListener("rollover", overBtn);
			that.block.removeEventListener("rollout", outBtn);
		
		
			that.show.removeEventListener("mousedown", onmousedown);
		
			that.removeEventListener("removed", onRemove);
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// stat
	this.start = new lib.start();
	this.start.name = "start";
	this.start.setTransform(409.35,249.3,0.985,1);

	this.timeline.addTween(cjs.Tween.get(this.start).wait(1));

	// litleblue
	this.instance = new lib.CachedBmp_1();
	this.instance.setTransform(84.05,68,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// page_num
	this.instance_1 = new lib.Symbol4("synched",0);
	this.instance_1.setTransform(299.65,36.1,0.9933,1,0,0,0,-101.2,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	// prev
	this.prev = new lib.btn_next();
	this.prev.name = "prev";
	this.prev.setTransform(766.5,440.05,1,1,0,0,180);

	this.timeline.addTween(cjs.Tween.get(this.prev).wait(1));

	// next
	this.next = new lib.btn_next();
	this.next.name = "next";
	this.next.setTransform(32.8,440.3);

	this.timeline.addTween(cjs.Tween.get(this.next).wait(1));

	// show
	this.show = new lib.show();
	this.show.name = "show";
	this.show.setTransform(88.85,73.3);

	this.timeline.addTween(cjs.Tween.get(this.show).wait(1));

	// reply
	this.reply = new lib.reply();
	this.reply.name = "reply";
	this.reply.setTransform(245,35.3,0.8699,0.7756);

	this.timeline.addTween(cjs.Tween.get(this.reply).wait(1));

	// block
	this.block = new lib.block_sound();
	this.block.name = "block";
	this.block.setTransform(555.5,35.65,0.8663,0.7654);

	this.timeline.addTween(cjs.Tween.get(this.block).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(397.1,250,402.69999999999993,248.5);
// library properties:
lib.properties = {
	id: '34CEF71B78D4E94D84F9AE1A353C289A',
	width: 800,
	height: 500,
	fps: 24,
	color: "#181D49",
	opacity: 1.00,
	manifest: [
		{src:"images/قالب القصص_atlas_1.png?1655977717761", id:"قالب القصص_atlas_1"},
		{src:"images/قالب القصص_atlas_2.png?1655977717761", id:"قالب القصص_atlas_2"},
		{src:"images/قالب القصص_atlas_3.png?1655977717761", id:"قالب القصص_atlas_3"},
		{src:"images/قالب القصص_atlas_4.png?1655977717763", id:"قالب القصص_atlas_4"},
		{src:"images/قالب القصص_atlas_5.png?1655977717763", id:"قالب القصص_atlas_5"},
		{src:"images/قالب القصص_atlas_6.png?1655977717763", id:"قالب القصص_atlas_6"},
		{src:"images/قالب القصص_atlas_7.png?1655977717763", id:"قالب القصص_atlas_7"},
		{src:"images/قالب القصص_atlas_8.png?1655977717763", id:"قالب القصص_atlas_8"},
		{src:"images/قالب القصص_atlas_9.png?1655977717764", id:"قالب القصص_atlas_9"},
		{src:"images/قالب القصص_atlas_10.png?1655977717765", id:"قالب القصص_atlas_10"}
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
an.compositions['34CEF71B78D4E94D84F9AE1A353C289A'] = {
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