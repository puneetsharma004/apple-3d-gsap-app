import {useEffect, useRef} from "react";

export const Hero = () => {

    const videoRef = useRef(null);

    useEffect(() => {
        if(videoRef.current) videoRef.current.playsbackrate = 2;
    }, [])

    return (
        <>
            <section id="hero" className="h-screen">
                <div>
                    <h1>MacBook</h1>
                    <img src="/title.png" alt="title" />
                </div>

                <video src="/videos/hero.mp4" autoPlay muted playsInline/>
                <button>Buy</button>
                <p>From $1599 or $133/mo for 12 months</p>

            </section>
        </>
    )
}
