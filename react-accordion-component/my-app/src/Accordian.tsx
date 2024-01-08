import { useState } from 'react';

type ListEntry = {
  id: number;
  title: string;
  content: string;
};
type TopicsCardProps = {
  listEntry: ListEntry;
  activeID: number;
  onTopicCardClicked: (id: number) => void;
};

function TopicCard({
  listEntry,
  activeID,
  onTopicCardClicked,
}: TopicsCardProps) {
  const { id, title, content } = listEntry;
  return (
    <li key={id} onClick={() => onTopicCardClicked(id)}>
      <div
        style={{
          backgroundColor: 'lightgray',
          outline: '2px solid black',
          padding: '10px',
          margin: '2px',
          textAlign: 'left',
        }}>
        {title}
      </div>
      {activeID === id && (
        <p
          style={{
            outline: '2px solid black',
            padding: '10px',
            margin: '2px',
            textAlign: 'left',
          }}>
          {content}
        </p>
      )}
    </li>
  );
}

type AccordianProps = {
  list: ListEntry[];
};

export default function Accordian({ list }: AccordianProps) {
  const [activeID, setActiveID] = useState(-1);
  function handleTopicCardClicked(id: number) {
    setActiveID(id === activeID ? -1 : id);
  }
  return (
    <>
      <ul style={{ listStyleType: 'none', width: '500px' }}>
        {list.map((value) => (
          <TopicCard
            onTopicCardClicked={handleTopicCardClicked}
            listEntry={value}
            activeID={activeID}
          />
        ))}
      </ul>
    </>
  );
}
