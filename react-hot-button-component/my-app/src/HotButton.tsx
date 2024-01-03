import { useState } from 'react';
import './Styles.css';

type Props = {
  text: string;
};

function roundDownBy3(number: number) {
  return Math.floor(number / 3) * 3;
}

const clicksObj: string[] = ['cold', 'cool', 'tepid', 'warm', 'hot', 'nuclear'];
export default function HotButton({ text }: Props) {
  const [count, setCount] = useState(0);
  const classList = ['hot-button'];
  const clicksObjIndex = roundDownBy3(count - 1) / 3;

  const setText = clicksObj[clicksObjIndex < 0 ? 0 : clicksObjIndex];

  function clickHandler() {
    const newCount = count + 1;
    console.log(setText);
    console.log(newCount);
    setCount(newCount);
  }
  if (setText) {
    console.log('here');
    classList.push(setText);
  } else {
    classList.push('nuclear');
  }
  //   console.log('there')
  //   classList.push('nuclear');
  // }

  return (
    <>
      <button className={classList.join(' ')} onClick={clickHandler}>
        {text}
      </button>
    </>
  );
}
