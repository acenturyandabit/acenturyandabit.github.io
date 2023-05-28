import * as React from "react";

export default () => {
    const [tick, setTick] = React.useState(0);
    React.useEffect(() => {
        setInterval(() => {
            setTick((tick) => tick + 1);
        }, 1);
    }, []);
    const numBips = 200;
    const commonOptions = {
        numBips,
        widthPerBip: 100 / numBips,
        tick,
        spacing: 0.2
    }

    return <svg width="100%" height="100%">
        <rect width="100%" height="100%"></rect>
        <HeartBeatLine lineCommonOptions={commonOptions} center={60} shift={1} dt={1.2} />
    </svg >
};

const HeartBeatLine = (props: {
    center: number,
    shift: number,
    dt: number,
    lineCommonOptions: {
        numBips: number,
        tick: number,
        widthPerBip: number,
        spacing: number
    }
}) => {
    const tick = props.lineCommonOptions.tick;
    return <>
        {
            Array(props.lineCommonOptions.numBips).fill(0).map((_, idx) => {
                const calculatedY = getHeartbeatAmplitude(Math.sin(tick % 1000 / 1000) * 0.05 - (idx + props.shift) / 100) * 40;
                const opacity = Math.abs(Math.sin(((tick % 500) / 500 - (idx / props.lineCommonOptions.numBips)) * Math.PI) ** 10);
                let drawY: number;
                let height: number;
                if (calculatedY > 0) {
                    drawY = props.center - calculatedY;
                    height = calculatedY;
                } else {
                    drawY = props.center;
                    height = -calculatedY;
                }
                return <rect
                    key={idx}
                    x={`${props.lineCommonOptions.widthPerBip * idx}%`}
                    y={`${drawY}%`}
                    width={`${props.lineCommonOptions.widthPerBip - props.lineCommonOptions.spacing}% `}
                    height={`${height}%`}
                    fill={`rgba(0,0,255,${opacity})`}
                />
            })
        }
    </>
}

const getHeartbeatAmplitude = (percent: number): number => {
    const x = percent * Math.PI;
    return Math.sin(x) ** 63 * Math.sin(x + 1.5) * 8;
}