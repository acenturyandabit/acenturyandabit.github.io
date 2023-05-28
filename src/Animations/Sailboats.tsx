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
        <g transform={`rotate(-${Math.sin(tick / 100)} 0 0)`}>
            <HeartBeatLine lineCommonOptions={commonOptions} center={14} shift={10} dt={1} />
            <HeartBeatLine lineCommonOptions={commonOptions} center={14+80/3} shift={30} dt={1.2} />
            <HeartBeatLine lineCommonOptions={commonOptions} center={14+160/3} shift={50} dt={1.3} />
            <HeartBeatLine lineCommonOptions={commonOptions} center={94} shift={70} dt={1.25} />
        </g>
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
    return <>
        {
            Array(props.lineCommonOptions.numBips).fill(0).map((_, idx) => {
                const calculatedY = getHeartbeatAmplitude((idx * 3 - props.lineCommonOptions.tick * props.dt / 8 + props.shift) / 100) * 10;
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
                    fill="blue"
                />
            })
        }
    </>
}

const getHeartbeatAmplitude = (percent: number): number => {
    const x = percent * Math.PI;
    return Math.sin(x) ** 63 * Math.sin(x + 1.5) * 8;
}