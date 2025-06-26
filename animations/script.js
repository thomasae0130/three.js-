import * as THREE from 'three'

// canvas 

const canvas = document.querySelector('.webGL');

// scene

const scene = new THREE.Scene();

// objects


// axes helper 

const axesHelper = new THREE.AxesHelper();

scene.add(axesHelper);

// sizes 
const sizes = {
    width: 800,
    height: 600
}


// camera

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.set(1, 1, 3);

scene.add(camera);


// renderer 

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});

renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);