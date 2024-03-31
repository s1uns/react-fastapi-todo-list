import React, { FC, useState } from "react";

interface SliderProps {
    title: string;
    minValue: number;
    maxValue: number;
    currentValue: number;
    step: number;
    onSlide: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Slider: FC<SliderProps> = (props: SliderProps) => {
    return (
        <div className="w-full">
            <h3 className="text-2xl">
                {props.title}: {props.currentValue}
            </h3>
            <input
                type="range"
                min={props.minValue}
                max={props.maxValue}
                value={11 - props.currentValue}
                step={props.step}
                className="range range-md"
                onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                    props.onSlide(e);
                }}
            />
        </div>
    );
};
