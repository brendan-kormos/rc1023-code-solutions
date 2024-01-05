import { useState } from 'react';
interface Props {
  items: string[];
}

export function RotatingBanner({ items }: Props) {
  const [index] = useState(0);
  const [word] = useState(items[0]);

  return (
    <>
      <Banner word={word} />
      <Prev />
      <Indicators currentIndex={index} items={items} />
      <Next />
    </>
  );
}

interface BannerProps {
  word: string;
}

function Banner({ word }: BannerProps) {
  return <h1>{word}</h1>;
}

function Prev() {
  return (
    <div>
      <button>Prev</button>
    </div>
  );
}

function Next() {
  return (
    <div>
      <button>Next</button>
    </div>
  );
}

interface IndicatorsProps {
  items: Props['items'];
  currentIndex: number;
}
function Indicators({ items, currentIndex }: IndicatorsProps) {
  return (
    <>
      {items.map((_, index) => {
        return (
          <button
            key={index}
            style={{
              backgroundColor: currentIndex === index ? 'lightblue' : '',
            }}>
            {index}
          </button>
        );
      })}
    </>
  );
}
