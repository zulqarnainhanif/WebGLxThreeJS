// create scene
const scene = new THREE.Scene();

// canvas dom element
const canvas = document.querySelector(".webgl")

// view size
const sizes = {
  width: 800,
  height: 600
}

// red cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const materail = new THREE.MeshBasicMaterial({
  color: "red"
});
const mesh = new THREE.Mesh(geometry, materail);

// change position of the cube
mesh.position.x = 0.5
mesh.position.y = 0.5
mesh.position.z = 0.5
mesh.rotation.x = 65

// add cube in the scene
scene.add(mesh);

// camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)

// move the camera position to see cube
camera.position.z = 3

// add camera to the scene
scene.add(camera);

// renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas
})

// resize the canvas window
renderer.setSize(sizes.width, sizes.height);

// render the scene and camera
renderer.render(scene, camera);