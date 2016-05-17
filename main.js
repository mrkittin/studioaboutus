var camera, scene, renderer;

var Element = function ( id, x, y, z, ry ) {
	var div = document.createElement( 'div' );
	div.style.width = '480px';
	div.style.height = '360px';
	div.style.backgroundColor = '#000';
	var iframe = document.createElement( 'iframe' );
	iframe.style.width = '480px';
	iframe.style.height = '360px';
	iframe.style.border = '0px';
	iframe.src = [ 'http://www.youtube.com/embed/', id, '?rel=0' ].join( '' );
	div.appendChild( iframe );
	var object = new THREE.CSS3DObject( div );
	object.position.set( x, y, z );
	object.rotation.y = ry;
	return object;
};
