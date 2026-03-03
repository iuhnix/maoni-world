export function ImageBlock({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      style={{
        width: "100%",
        maxWidth: "600px",
        borderRadius: "12px",
        marginBottom: "40px",
      }}
    />
  );
}
