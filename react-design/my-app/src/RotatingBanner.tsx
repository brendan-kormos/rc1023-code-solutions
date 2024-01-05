import { useState } from 'react';
interface Props {
  items: string[];
}

export function RotatingBanner({ items }: Props) {
  const [index, setIndex] = useState(0);
  const [word, setWord] = useState(items[0]);

  function handleIndicatorClicked(index: number) {
    setIndex(index);
    setWord(items[index]);
  }

  function handleNextClicked() {
    const newIndex = (index + 1) % items.length;
    setIndex(newIndex);
    setWord(items[newIndex]);
  }

  function handlePrevClicked() {
    const newIndex = (index - 1 + items.length) % items.length;
    setIndex(newIndex);
    setWord(items[newIndex]);
  }

  return (
    <>
      <Banner word={word} />
      <Prev onPrevClicked={handlePrevClicked} />
      <Indicators
        onIndicatorClicked={handleIndicatorClicked}
        currentIndex={index}
        items={items}
      />
      <Next onNextClicked={handleNextClicked} />
    </>
  );
}

interface BannerProps {
  word: string;
}

function Banner({ word }: BannerProps) {
  return <h1>{word}</h1>;
}

interface PrevProps {
  onPrevClicked: () => void;
}

function Prev({ onPrevClicked }: PrevProps) {
  return (
    <div>
      <button onClick={onPrevClicked}>Prev</button>
    </div>
  );
}

interface NextProps {
  onNextClicked: () => void;
}
function Next({ onNextClicked }: NextProps) {
  return (
    <div>
      <button onClick={onNextClicked}>Next</button>
    </div>
  );
}

interface IndicatorsProps {
  items: Props['items'];
  currentIndex: number;
  onIndicatorClicked: (index: number) => void;
}
function Indicators({
  items,
  currentIndex,
  onIndicatorClicked,
}: IndicatorsProps) {
  return (
    <>
      {items.map((_, index) => {
        return (
          <button
            key={index}
            onClick={() => onIndicatorClicked(index)}
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
