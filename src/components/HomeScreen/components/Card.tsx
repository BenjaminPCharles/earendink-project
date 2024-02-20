import React, { useState } from 'react';
import Image from 'next/image'

interface CardProps {
    label: string
    imgSrc: any
    onClick: () => void
}

export const Card = ({label, imgSrc, onClick}: CardProps) => {
    const [isHovered, setIsHovered] = useState(false);
 
    const handleMouseEnter = () => {
        setIsHovered(true);
    }

    const handleMouseLeave = () => {
        setIsHovered(false);
    }

    return (
        <div
            style={{
                width: 300,
                height: 400,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize:  54,
                backgroundPosition: "center",
                backgroundSize: "100%",
                textShadow:"5px 5px #666",
                borderRadius: 25,
                position: "relative",
                margin:20
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
        >
            <Image
            src={imgSrc}
            style={{
                borderRadius: 25,
                position: "absolute",
                transition: "all 0.5s ease-in",
                transform: isHovered ? "scale(1.05)" : "scale(1)"
            }}
            width={300}
            height={400}
            alt="Picture of the author"
          />
            <p style={{zIndex: 1000}}>{label}</p>
        </div>
    )
}