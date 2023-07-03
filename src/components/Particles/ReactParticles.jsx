import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import options from "./ParticleOptions";

const ReactParticles = () => {
    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <Particles className="absolute z-[-1]" id="tsparticles" init={particlesInit} loaded={particlesLoaded} options={options} />
    );
};

export default ReactParticles