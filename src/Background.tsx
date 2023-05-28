import * as React from "react";
import './App.css'
import BarHeartBeats from "~Animations/BarHeartBeats";
import Sailboats from "~Animations/Sailboats";

export default (props: React.PropsWithChildren) => {
    // const animations = [BarHeartBeats] as React.JSXElementConstructor<{}>[];
    const animations = [BarHeartBeats, Sailboats] as React.JSXElementConstructor<{}>[];
    const SelectedAnimation = animations[Math.floor(Math.random() * animations.length)];
    return <>
        <div style={{
            position: "fixed",
            top: 0,
            left: 0,
            height: '100vh',
            width: '100vw',
            zIndex: -1
        }}>
            <SelectedAnimation />
        </div>
        <div style={{
            maxWidth: '600px',
            margin: 'auto',
            padding: "30px",
            background: "rgba(255,255,255,0.5)"
        }}>
            {props.children}
        </div>
    </>
};