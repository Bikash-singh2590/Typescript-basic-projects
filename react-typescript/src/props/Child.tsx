interface ChildProps {
  color: string;
  onClick: () => void;
  children: React.ReactNode;
}

export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div
      style={{
        color: `${color}`,
        border: "1px solid green",
        width: "200px",
        padding: "20px",
        textAlign: "center",
      }}
    >
      Hi,I am child.<br></br>
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

// use this whenever you want to use of propType,contextType etc properties.
export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick }) => {
  return (
    <div
      style={{
        color: `${color}`,
        border: "1px solid green",
        width: "200px",
        padding: "20px",
        textAlign: "center",
      }}
    >
      Hi,I am childAsFC.<br></br>
      <br></br>
      <button onClick={onClick}>Click me</button>
    </div>
  );
};
