'use client';

import { useEffect } from "react";
import { useMediaQuery } from 'react-responsive';
import DesktopHome from '../app/desktop';
import MobileHome from '../app/mobile';

export default function Home() {
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-device-width: 1224px)'
    });
    const isMobile = useMediaQuery({
        query: '(max-device-width: 1224px)'
    });

    useEffect(() => {
        const cursor = document.createElement('div');
        cursor.style.position = 'fixed';
        cursor.style.borderRadius = '50%';
        cursor.style.width = '1000px';
        cursor.style.height = '1000px';
        cursor.style.pointerEvents = 'none';
        cursor.style.zIndex = '9999';
        cursor.style.background = 'radial-gradient(circle at center, rgba(134,97,186,0.35) 0%, rgba(134,97,186,0.0) 50%)';
        document.body.appendChild(cursor);

        const updateCursor = (e: { clientX: number; clientY: number; }) => {
            cursor.style.left = `${e.clientX - 500}px`;
            cursor.style.top = `${e.clientY - 500}px`;
        };

        window.addEventListener('mousemove', updateCursor);

        return () => {
            window.removeEventListener('mousemove', updateCursor);
            document.body.removeChild(cursor);
        };
    }, []);

    return (
        <>
            {isDesktopOrLaptop && <DesktopHome />}
            {isMobile && <MobileHome />}
        </>
    );
}