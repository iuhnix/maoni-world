export function PageTitle({ children }: { children: React.ReactNode }) {
  return (
    <h1
      style={{
        fontSize: "28px",
        fontWeight: 300,
        textAlign: "center",
        marginBottom: "60px",
      }}
    >
      {children}
    </h1>
  );
}
