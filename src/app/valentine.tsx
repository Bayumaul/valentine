'use client'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React, { useState } from 'react'
import Party from 'party-js';

const sadImages = [
    '/img/cat-1.jpg',
    '/img/cat-2.jpg',
    '/img/cat-3.jpg',
    '/img/cat-4.jpg',
    '/img/cat-5.jpg'
];

export default function Valentine() {
    const [buttonClicked, setButtonClicked] = useState(false);
    const [imageSrc, setImageSrc] = useState('/img/flower.jpg');
    const [buttonStyle, setButtonStyle] = useState({
        width: 120,
        height: 40,
        fontSize: 14
    });

    const handleYesClick = () => {
        setImageSrc('/img/cat-yes.jpg');
        startPartyEffect();
        setButtonClicked(true);
    };

    const handleNoClick = () => {
        setImageSrc(getRandomSadImage());
        setButtonStyle(prevStyle => ({
            width: prevStyle.width + 50,
            height: prevStyle.height + 10,
            fontSize: prevStyle.fontSize + 6
        }));
    };

    const getRandomSadImage = () => {
        const randomIndex = Math.floor(Math.random() * sadImages.length);
        return sadImages[randomIndex];
    };

    const startPartyEffect = () => {
        const button: any = document.querySelector('.party-button');
        if (button) {
            Party.confetti(button);
        }
    };


    return (
        <div className="flex flex-col items-center justify-center">
            <Image src={imageSrc} width={200} height={200} alt='sad-moment' />
            {!buttonClicked &&
                <h1 className="text-4xl text-center mt-2 font-bold mb-6 text-pink-500">Mau ngerayain valentine sama aku ga?</h1>
            }
            {!buttonClicked ? (
                <div className="flex justify-between items-center content-center w-1/3 gap-2">
                    <div className="flex flex-col md:flex-row justify-center items-center w-full space-y-4 md:space-y-0 md:space-x-4">
                        <Button
                            onClick={handleYesClick}
                            className={cn('bg-green-500 hover:bg-green-600 party-button')}
                            style={{
                                width: `${buttonStyle.width}px`,
                                height: `${buttonStyle.height}px`,
                                fontSize: `${buttonStyle.fontSize}px`
                            }}
                        >
                            Mau banget
                        </Button>
                        <Button onClick={handleNoClick} variant="destructive">
                            Ga mau
                        </Button>
                    </div>
                </div>
            ) : (
                <p className="text-xl mt-6 text-pink-500">Makasih cantikk ❤️</p>
            )}
        </div>
    )
}
