var renderer	= new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var updateFcts	= [];
var scene	= new THREE.Scene();
var camera	= new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.01, 100 );
camera.position.z = 3;

//////////////////////////////////////////////////////////////////////////////////
//		add an object and make it move					//
//////////////////////////////////////////////////////////////////////////////////
	
window.AudioContext	= window.AudioContext || window.webkitAudioContext;
var context	= new AudioContext();
// create the videoTexture
var videoTexture= new THREEx.VideoTexture('videos/sintel.mp4');
updateFcts.push(function(delta, now){
	videoTexture.update(delta, now);
})
// wait until the vid is loaded
videoTexture.video.addEventListener('canplaythrough', function(event){
	// create a source node from the mediaElement
	var sourceNode	= context.createMediaElementSource(videoTexture.video);
	// connect it to WebAudio API
	sourceNode.connect(context.destination);
})
