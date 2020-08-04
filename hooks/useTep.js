const content = [
  {
    teb: "section1",
    content: "섹션1111",
  },
  {
    teb: "section1",
    content: "섹션222",
  },
];

const useTep = (initialTeb, allTeb) => {
  if (!allTeb || !Array.isArray(allTabs)) {
    return;
  }
  const [index, setIndex] = useState(initialTeb);

  return {
    currentitem: allTeb[index],
    tepChange: setIndex,
  };
};

// export default function App() {
//   const { currentitem, tepChange } = useTep(0, content);
//   return (
//     <div className="App">
//       {content.map((section, index) => (
//         <button onClick={() => tepChange(index)}>{section.content}</button>
//       ))}
//       <div>{currentitem.content}</div>
//     </div>
//   );
// }
