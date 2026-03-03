export function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontSize: "16px",
        fontWeight: 300,
        lineHeight: 1.8,
        marginBottom: "40px",
        textAlign: "center",
      }}
    >
      {children}
    </p>
  );
}
