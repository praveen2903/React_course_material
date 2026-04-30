import { useEffect, useState } from "react";

const ProgressDemo = ({ progress }) => (
    <div style={{ width: '300px', border: '2px solid', marginBottom: '10px' }}>
        <div
            style={{
                width: `${progress}%`,
                height: '40px',
                background: 'green',
                transition: 'width 0.5s ease'
            }}
        />
    </div>
);

export default function SequentialProgressBars() {
    const [progressBars, setProgressBars] = useState([0, 0, 0]);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgressBars(prev => {
                const copy = [...prev];

                const index = copy.findIndex(p => p < 100);

                if (index === -1) return prev;

                copy[index] = Math.min(copy[index] + 20, 100);

                return copy;
            });
        }, 500);

        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <div>Sequential Progress Bars Indexing</div>
            {progressBars.map((progress, index) => (
                <ProgressDemo key={index} progress={progress} />
            ))}
        </>
    );
}