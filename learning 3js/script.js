import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000);
camera.position.z=5;
scene.add(camera);

let material=new THREE.MeshBasicMaterial({color: 0x00ff00,wireframe:true});

let sphere=new THREE.CylinderGeometry(6,2,10);
let sphereMesh=new THREE.Mesh(sphere,material);
sphereMesh.position.x=2;
scene.add(sphereMesh);





window.addEventListener("resize",()=>{
     camera.aspect=window.innerWidth/window.innerHeight;
     camera.updateProjectionMatrix();
     renderer.setSize(window.innerWidth,window.innerHeight);
});

const canvas=document.querySelector("canvas");
let renderer=new THREE.WebGLRenderer({canvas,antialias:true});
renderer.setSize(window.innerWidth,window.innerHeight);
renderer.render(scene,camera);

const controls = new OrbitControls( camera, renderer.domElement );
controls.autorotate=true;





function animate(){
    
    window.requestAnimationFrame(animate);

    controls.update();
    renderer.render(scene,camera);
}
animate();