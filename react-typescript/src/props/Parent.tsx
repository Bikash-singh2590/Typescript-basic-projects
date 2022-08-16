import { ChildAsFC } from "./Child";

const Parent = () => {
  return (
    <>
      <div
        style={{
          border: "1px solid #000",
          width: "200px",
          textAlign: "center",
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        {" "}
        Hi,I am parent.
      </div>
      <ChildAsFC color="green" onClick={() => alert("Clicked")}>
        Hello,I am children props of ChildAsFC.
      </ChildAsFC>
    </>
  );
};

export default Parent;
