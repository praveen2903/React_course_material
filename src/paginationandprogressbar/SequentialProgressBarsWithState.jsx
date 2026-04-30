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

export default function SequentialProgressBarsWithState() {
    const [progressBars, setProgressBars] = useState([0, 0, 0]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
    const timer = setInterval(() => {
        setProgressBars(prev => {
            if (currentIndex >= prev.length) return prev;

            const copy = [...prev];

            if (copy[currentIndex] === 100) return prev;

            const updated = Math.min(copy[currentIndex] + 20, 100);
            copy[currentIndex] = updated;

            if (updated === 100) {
                setCurrentIndex(prevIndex => prevIndex + 1);
            }

            return copy;
        });
    }, 500);

    return () => clearInterval(timer);
}, [currentIndex]);

    return (
        <>
            <div>Sequential Progress Bars with State</div>
            {progressBars.map((progress, index) => (
                <ProgressDemo key={index} progress={progress} />
            ))}
        </>
    );
}