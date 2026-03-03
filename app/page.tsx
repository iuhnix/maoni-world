import { Container } from "@/components/ui/container";
import { Paragraph } from "@/components/ui/paragraph";

export default function Home() {
  return (
    <Container>
      <img
        src="/hero.jpg"
        alt="Maoni"
        style={{ width: "100%", marginBottom: "60px" }}
      />

      <Paragraph>Maoni 是一个在光与想象之间轻轻行走的女孩。</Paragraph>
      <Paragraph>她记录日常的微光，也陪伴每一个需要柔软的人。</Paragraph>
    </Container>
  );
}
