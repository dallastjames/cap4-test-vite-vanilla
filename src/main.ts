import "./style.css";
import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
  <button id="camera-open">Open Camera</button>
`;
document.querySelector<HTMLButtonElement>("#camera-open")!.onclick = () =>
  Camera.getPhoto({
    resultType: CameraResultType.Uri,
    source: CameraSource.Camera,
  });
