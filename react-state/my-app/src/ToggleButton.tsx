import { useState } from 'react';
type Props = {
  text: string;
  color: string;
};

export default function ToggleButton({ text, color }: Props) {
  const [isClicked, setClicked] = useState(false);
  console.log('this is the value returned by useState', isClicked);

  function handleClick() {
    console.log(
      'this is the value returned by useState before calling the setter',
      isClicked
    );
    setClicked(true);
    console.log(
      'this is the value returned by useState after calling the setter',
      isClicked
    );
  }
  if (!isClicked) color = '#e7ecef';
  return (
    <button onClick={handleClick} style={{ backgroundColor: color }}>
      {text}
    </button>
  );
}
