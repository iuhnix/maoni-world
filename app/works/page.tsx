import { Container } from "@/components/ui/container";
import { PageTitle } from "@/components/ui/page-title";
import { Paragraph } from "@/components/ui/paragraph";
import { ImageBlock } from "@/components/ui/image-block";
import { Stack } from "@/components/ui/stack";

export default function Works() {
  return (
    <Container>
      <PageTitle>Moments of Soft Light</PageTitle>

      <Paragraph>一些安静的小片段。</Paragraph>

      <Stack gap={80}>
        <ImageBlock src="/works/1.jpg" alt="Work 1" />
        <ImageBlock src="/works/2.jpg" alt="Work 2" />
        <ImageBlock src="/works/3.jpg" alt="Work 3" />
      </Stack>
    </Container>
  );
}
