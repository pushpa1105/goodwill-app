import { useFrame, useThree } from "@react-three/fiber";
import { Vector3 } from "three";



function SimpleCameraRig() {
  const { camera, mouse } = useThree();



  const initialCameraPosition = new Vector3().copy(camera.position);
  const initialTargetPosition = new Vector3(-1,1.2,0.5);
  const interpolatedTargetPosition = new Vector3();

  const newTarget = new Vector3();
  let factor = 0.1;

  return useFrame(() => {
    
    interpolatedTargetPosition.set(
      initialTargetPosition.x + (mouse.x * factor),
      initialTargetPosition.y + (mouse.y * factor),
      initialTargetPosition.z 
    );

    newTarget.lerpVectors(initialTargetPosition,interpolatedTargetPosition,0.3)

    camera.lookAt(newTarget);

    // console.log(initialCameraPosition);


  });
}


export { SimpleCameraRig }