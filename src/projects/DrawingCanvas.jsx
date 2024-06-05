import React, { useRef, useEffect, useState } from 'react';

const DrawingCanvas = () => {
    const canvasRef = useRef(null);
    const contextRef = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);
    const [color, setColor] = useState('black');
    const [thickness, setThickness] = useState(5);

    // Setup the canvas only once on mount
    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        // Adjusting for high resolution displays
        canvas.width = 800 * 2;
        canvas.height = 600 * 2;
        canvas.style.width = '800px';
        canvas.style.height = '600px';

        // Initial background color setup
        context.fillStyle = 'white';
        context.fillRect(0, 0, canvas.width, canvas.height);

        context.scale(2, 2);
        context.lineCap = 'round';

        contextRef.current = context;
    }, []);

    // Update only color and thickness
    useEffect(() => {
        if (contextRef.current) {
            contextRef.current.strokeStyle = color;
            contextRef.current.lineWidth = thickness;
        }
    }, [color, thickness]);

    const startDrawing = ({ nativeEvent }) => {
        const { offsetX, offsetY } = nativeEvent;
        contextRef.current.beginPath();
        contextRef.current.moveTo(offsetX, offsetY);
        setIsDrawing(true);
    };

    const finishDrawing = () => {
        contextRef.current.closePath();
        setIsDrawing(false);
    };

    const draw = ({ nativeEvent }) => {
        if (!isDrawing) {
            return;
        }
        const { offsetX, offsetY } = nativeEvent;
        contextRef.current.lineTo(offsetX, offsetY);
        contextRef.current.stroke();
    };

    return (
        <div>
            <h1>Draw something!</h1>
            <canvas
                onMouseDown={startDrawing}
                onMouseUp={finishDrawing}
                onMouseMove={draw}
                onMouseOut={finishDrawing}
                ref={canvasRef}
                style={{ border: '2px solid #000' }}
            />
            <div>
                <label>
                    Brush Color:
                    <input type="color" value={color} onChange={e => setColor(e.target.value)} />
                </label>
                <label>
                    Brush Thickness:
                    <input type="range" min="1" max="10" value={thickness} onChange={e => setThickness(e.target.value)} />
                </label>
            </div>
        </div>
    );
};

export default DrawingCanvas;
