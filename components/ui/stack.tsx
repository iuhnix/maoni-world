export function Stack({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        alignItems: "center",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      {children}
    </div>
  );
}
