import { Container } from "@/components/ui/container";
import { PageTitle } from "@/components/ui/page-title";
import { Paragraph } from "@/components/ui/paragraph";

export default function About() {
  return (
    <Container>
      <PageTitle>About Maoni</PageTitle>

      <Paragraph>
        Maoni 是一个关于温柔、留白与情绪流动的视觉角色。
        她来自安静的光，也来自每一个人心里柔软的地方。
      </Paragraph>

      <Paragraph>
        Created by an independent visual designer based in Asia,
        focusing on emotional storytelling and soft aesthetics.
      </Paragraph>
    </Container>
  );
}
