
const ClassList = ({ onSelect }) => {
  const classes = Array.from({ length: 12 }, (_, i) => `Class ${i + 1}`);
  return (
    <ul>
      {classes.map(cls => (
        <li key={cls} onClick={() => onSelect(cls)} style={{ cursor: 'pointer', color: 'blue' }}>
          {cls}
        </li>
      ))}
    </ul>
  );
};

export default ClassList;