import React, { FC, useState } from "react";

interface SliderProps {
    title: string;
    minValue: number;
    maxValue: number;
    defaultValue: number;
    step: number;
    onSlide: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Slider: FC<SliderProps> = (props: SliderProps) => {
    const [currentValue, setCurrentValue] = useState<number>(
        props.defaultValue
    );

    return (
        <div className="w-full">
            <h3 className="text-2xl">
                {props.title}: {currentValue}
            </h3>
            <input
                type="range"
                min={props.minValue}
                max={props.maxValue}
                defaultValue={11 - props.defaultValue}
                step={props.step}
                className="range range-md"
                onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                    props.onSlide(e);
                    setCurrentValue((previousValue) => 11 - +e.target.value);
                }}
            />
        </div>
    );
};
