import PlayButton from './PlayButton';
import PauseButton from './PauseButton';
import { useState } from 'react';

type Props = {
  color: string;
  size: string;
  onPlayToggled:(playing:boolean)=>(void)
};

export default function Stopwatch({ color, size, onPlayToggled }: Props) {
  const [time, setTime] = useState(0);
  const [playing, setPlaying] = useState(true);

  function handleClick(event){
    const className = event.className
    console.log(className)
    onPlayToggled(playing)
  }
  return (
    <div onClick={handleClick}>
      <div
        style={{
          lineHeight: size,
          color: color,
          fontSize: '8em',
          border: '4px solid ' + color,
          borderRadius: size,
          width: size,
          height: size,
        }}>
        2
      </div>
      {playing === false ? (
        <PauseButton
          style={{
            marginTop: '20px',
            fontSize: '50px',
            color: color,
          }}
        />
      ) : (
        <PlayButton
          style={{
            marginTop: '20px',
            fontSize: '50px',
            color: color,
          }}
        />
      )}
    </div>
  );
}
