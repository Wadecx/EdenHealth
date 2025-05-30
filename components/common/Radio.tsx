import React from 'react';

interface RadioButtonProps {
  name: string;
  id: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
}

export const RadioButton: React.FC<RadioButtonProps> = ({
  name,
  id,
  value,
  checked,
  onChange,
}) => {
  return (
    <div className="relative">
      <div className="relative w-6 h-6">
        <input
          type="radio"
          id={id}
          name={name}
          value={value}
          checked={checked}
          onChange={() => onChange(value)}
          className="absolute top-0 left-0 w-full h-full cursor-pointer rounded-full border-2 border-gray-300 appearance-none focus:outline-none checked:animate-splash"
        />
        <label
          htmlFor={id}
          className="absolute cursor-pointer top-0 left-0 w-full h-full rounded-full"
        ></label>
        <svg
          fill="none"
          viewBox="0 0 15 14"
          height="14"
          width="15"
          className="absolute cursor-pointer top-1 left-1 z-10 pointer-events-none"
        >
          <path
            d="M2 8.36364L6.23077 12L13 2"
            className={`stroke-white stroke-[3] stroke-linecap-round stroke-linejoin-round stroke-dasharray-[19] stroke-dashoffset-[19] transition-[stroke-dashoffset] duration-300 ${
              checked ? 'delay-200' : ''
            }`}
          ></path>
        </svg>
      </div>
      <svg
        className="absolute top-[-130%] left-[-170%] w-[110px] pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id={`goo-${id}`}>
            <feGaussianBlur
              result="blur"
              stdDeviation="4"
              in="SourceGraphic"
            ></feGaussianBlur>
            <feColorMatrix
              result={`goo-${id}`}
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7"
              mode="matrix"
              in="blur"
            ></feColorMatrix>
            <feBlend in2={`goo-${id}`} in="SourceGraphic"></feBlend>
          </filter>
        </defs>
      </svg>
    </div>
  );
};
