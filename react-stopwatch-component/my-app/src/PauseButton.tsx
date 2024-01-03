import { FaPause } from 'react-icons/fa';

type Props = {
  style: { [key: string]: string };
};
export default function PlayButton({ style }: Props) {
  return (
    <>
      <FaPause style={style} className="hover-button" />
    </>
  );
}
