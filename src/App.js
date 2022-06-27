import { SplitScreen } from "./SplitScreen";

const LeftComp = ({ name }) => {
  return <h1 style={{ backgroundColor: "green" }}>{name}</h1>;
};

const RightComp = ({ message }) => {
  return <h1 style={{ backgroundColor: "red" }}>{message}</h1>;
};

function App() {
  return (
    <>
      <SplitScreen leftWeight={1} rightWeight={3}>
        <LeftComp name={"Gautam"} />
        <RightComp message={"I like React"} />
      </SplitScreen>
    </>
  );
}

export default App;
