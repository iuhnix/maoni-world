export function Container({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        maxWidth: "760px",
        margin: "0 auto",
        padding: "120px 24px",
      }}
    >
      {children}
    </div>
  );
}
