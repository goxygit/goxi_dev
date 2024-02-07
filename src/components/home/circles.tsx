import React, { useRef, useEffect, useState, useCallback } from 'react';
import s from './main.module.css'
const CircleCanvas = () => {
    const canvasRef = useRef(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });


    const handleScroll = useCallback((event: any) => {
        setMousePos({
            x: event.pageX,
            y: event.pageY,
        });
    }, []);

    useEffect(() => {
        const canvas: any = canvasRef.current;
        if (!canvas) return;
        const rect = canvas.getBoundingClientRect();
        const handleMouseMove = (event: any) => {
            setMousePos({
                x: event.clientX - rect.left,
                y: event.clientY - rect.top,
            });
        }

        const context = canvas.getContext('2d');
        const drawLine = (x: number, y: number, length: number, angle: number) => {
            context.lineCap = 'round';
            context.save();
            context.translate(x, y);
            context.rotate(angle);
            context.fillRect(-length / 2, 0, length, 3);
            context.restore();
        };

        const lineLength = 1;
        const lineSpacing = 30;


        const animate = () => {
            const gradient = context.createLinearGradient(0, 0, canvas.width, 0);
            gradient.addColorStop(0.35, 'rgba(141,58,223,1)');
            gradient.addColorStop(1, 'rgba(106,0,255,1)');
            context.fillStyle = gradient;

            context.clearRect(0, 0, canvas.width, canvas.height);
            for (let x = 0; x < canvas.width; x += lineSpacing) {
                for (let y = 0; y < canvas.height; y += lineSpacing) {
                    const dx = x - mousePos.x;
                    const dy = y - mousePos.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    const angle = Math.atan2(dy, dx);
                    const length = Math.min(20, Math.max(lineLength, lineLength * 1000 / (distance + 1)));
                    drawLine(x, y, length, angle);

                }
            }
        };

        animate();
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);

        };
    }, [mousePos]);





    return (
        <canvas
            ref={canvasRef}
            width={700}
            height={500}
            className={s.canvas}
        />
    );
};

export default CircleCanvas;