const scene = new THREE.Scene();

const canvas = document.querySelector('canvas#webgl');

const camera = new THREE.PerspectiveCamera(75, 1280/720);
camera.position.z = 4;
camera.position.x = 1;
camera.rotation.y = -.5;

scene.add(camera);

const renderer = new THREE.WebGLRenderer({canvas: canvas});
renderer.setSize(1280, 720);
renderer.render(scene, camera);

/*
    Add New Objects with button
*/
const objs = [];
const colors = ['red', 'yellow', 'blue', 'green', 'purple', 'orange', 'pink'];
const btn = document.querySelector('button');
btn.addEventListener('click', () =>{
    const values = [(Math.floor(Math.random() * (3 - 1 + 1) ) + 1),(Math.floor(Math.random() * (3 - 1 + 1) ) + 1),(Math.floor(Math.random() * (3 - 1 + 1) ) + 1)];
    const newBox = new THREE.BoxGeometry(values[0],values[1],values[2]);
    const newMat = new THREE.MeshBasicMaterial({color: colors[(Math.floor(Math.random() * (6 - 0 + 1) ) + 0)]});
    const newMesh = new THREE.Mesh(newBox, newMat);
    newMesh.position.x = (Math.floor(Math.random() * (15 - (0) + 1) ) + 1);

    objs.push(newMesh);

    scene.add(newMesh);
    renderer.render(scene, camera);

})