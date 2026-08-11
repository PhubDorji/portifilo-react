import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

function Laptop(){

    const { scene, error } = useGLTF("/macbook.glb");

    useEffect(() => {
        if (error) {
            console.error("Error loading laptop model:", error);
        } else {
            console.log("Laptop model loaded:", scene);
        }
    }, [scene, error]);

    if (error) {
        return null;
    }

    return (

        <primitive

            object={scene}

            scale={6.0}

            position={[
                0.1,
                -0.7,
                0
            ]}

            rotation={[
                0,
                Math.PI,
                0
            ]}

        />

    );

}

export default Laptop;

useGLTF.preload("/macbook.glb");