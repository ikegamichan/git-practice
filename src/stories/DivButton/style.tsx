type DivButtonProps = {
  text: string;
  onClick?: () => void;
};

export const DivButton = ({ text, onClick }: DivButtonProps) => {
  return (
    <div
      style={{
        color: "white",
        background: "blue",
        width: "120px",
        height: "45px",
        borderRadius: "8px",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {text}
    </div>
  );
};
