import * as THREE from "three"


// canvas to display the scene

const canvas = document.querySelector('.webGL');


// scene 

const scene  = new THREE.Scene();


// objects/ geometry 

const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);

console.log(`pi = ${Math.PI}`);

// sizes 
const sizes = {
    width: 800,
    height: 600
}


//camera 

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);

camera.position.set(1, 1, 3);

// group 

const group = new THREE.Group();

scene.add(group);

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: '#ff0000'})
);
group.add(cube1);


const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: '#fff000'})
);
cube2.position.set(-2, 1 , -2)

group.add(cube2)


const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({color: '#ff0f00'})
);
cube3.position.set(2, 2, -3);
group.add(cube3);

group.rotation.set(2, 1.5, .5);

scene.add(camera);



//renderer

const renderer = new THREE.WebGLRenderer({
    canvas: canvas
});


renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);


