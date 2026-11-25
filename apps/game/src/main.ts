import { ArcRotateCamera } from "@babylonjs/core/Cameras/arcRotateCamera";
import { Engine } from "@babylonjs/core/Engines/engine";
import { HemisphericLight } from "@babylonjs/core/Lights/hemisphericLight";
import { Vector3 } from "@babylonjs/core/Maths/math.vector";
import { MeshBuilder } from "@babylonjs/core/Meshes/meshBuilder";
import { Scene } from "@babylonjs/core/scene";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const engine = new Engine(canvas, true);
const scene = new Scene(engine);

const camera = new ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 3, 6, Vector3.Zero(), scene);
camera.attachControl(canvas, true);

new HemisphericLight("light", new Vector3(0, 1, 0), scene);

const sphere = MeshBuilder.CreateSphere("sphere", { diameter: 2 }, scene);
sphere.position.y = 1;
MeshBuilder.CreateGround("ground", { width: 6, height: 6 }, scene);

engine.runRenderLoop(() => scene.render());
window.addEventListener("resize", () => engine.resize());
