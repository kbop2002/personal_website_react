import { loadFull } from 'tsparticles';
import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { particleConfig } from "./config/particles.config";

export default function ParticleBackground() {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);  // This loads the full tsparticles engine
    }, []);

    return (
        <div style={{
            width: "100vw",
            height: "100vh",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 2
        }}>
            <Particles id="tsparticles" init={particlesInit} options={particleConfig} />
        </div>
    );
}
