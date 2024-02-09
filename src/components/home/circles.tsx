import React, { useRef, useEffect, useState, useCallback } from 'react';
import s from './main.module.css'
const CircleCanvas = () => {
    const canvasRef = useRef(null);
    const [mousePos, setMousePos] = useState({ x: -1100, y: -1100 });



    useEffect(() => {
        const canvas: any = canvasRef.current;
        if (!canvas) return;
        const screenWidth = window.innerWidth;
        if (screenWidth <= 768) {
            canvas.width = 500
            canvas.height = 350
        }
        if (screenWidth <= 425) {
            canvas.width = 400
            canvas.height = 250
        }
        if (screenWidth <= 375) {
            canvas.width = 300
            canvas.height = 200
        }
        const rect = canvas.getBoundingClientRect();
        const handleTouchEnd = () => {
            setMousePos({ x: -500, y: -500 })
        };

        const handleMouseMove = (event: any) => {
            if (screenWidth <= 768) {
                const touch = event.touches[0];

                setMousePos({
                    x: touch.clientX - rect.left,
                    y: touch.clientY - rect.top,
                });
            }
            else
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
            if (screenWidth <= 375) {
                context.fillRect(-length / 2, 0, length, 2);
            }
            else {
                context.fillRect(-length / 2, 0, length, 3);
            }
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
                    let length
                    if (screenWidth <= 375) {
                        length = Math.min(15, Math.max(lineLength, lineLength * 1000 / (distance + 2)));
                    }
                    else
                        length = Math.min(20, Math.max(lineLength, lineLength * 1000 / (distance + 2)));
                    drawLine(x, y, length, angle);

                }
            }
        };

        animate();
        if (screenWidth <= 768) {
            window.addEventListener('touchmove', handleMouseMove);
            window.addEventListener('touchend', handleTouchEnd);
        }
        else
            window.addEventListener('mousemove', handleMouseMove);

        return () => {
            if (screenWidth <= 768) {
                window.removeEventListener('touchmove', handleMouseMove);
                window.removeEventListener('touchend', handleTouchEnd);

            }
            else
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