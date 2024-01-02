type Props = {
  text: string;
  color: string;
  onCustomClick: (text: string) => void;
};

export default function CustomButton({ text, color, onCustomClick }: Props) {
  return (
    <button
      onClick={() => onCustomClick(text)}
      style={{
        backgroundColor: color,
      }}>
      {text}
    </button>
  );
}
