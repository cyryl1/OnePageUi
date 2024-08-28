import React from 'react'

export default function ProgressCircle({ size = 80, progress = 75 }) {
    const strokeWidth = 10;
    const radius = (size - strokeWidth) / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (progress / 100) * circumference;

    return (
        <svg width={size} height={size} className='rotate-[-90deg]'>
            {/*BAckground circle*/}
            <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="transparent"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                className='text-gray-300'
            />
            {/*Foreground*/}
            <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="transparent"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeDasharray={circumference}
                // strokeDasharray={`${circumference} ${circumference}`}
                strokeDashoffset={offset}
                strokeLinecap='round'
                className='text-green-500'
            />
        </svg>
    )
}
