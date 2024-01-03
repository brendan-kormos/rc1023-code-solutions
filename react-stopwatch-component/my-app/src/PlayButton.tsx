import { FaPlay } from 'react-icons/fa';
type Props = {
  style:{[key:string]: string}
}
export default function PlayButton ({style}: Props) {
  return (
    <>
      <FaPlay style={style} className="hover-button" />
    </>
  );
}
