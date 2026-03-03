export function Stack({
  children,
  gap = 20,
}: {
  children: React.ReactNode;
  gap?: number;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: `${gap}px`,
        alignItems: "center",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      {children}
    </div>
  );
}

