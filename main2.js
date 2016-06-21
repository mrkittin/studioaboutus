var renderer	= new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var updateFcts	= [];
var scene	= new THREE.Scene();
var camera	= new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.01, 100 );
camera.position.z = 3;
