import { Container } from "@/components/ui/container";
import { PageTitle } from "@/components/ui/page-title";
import { Paragraph } from "@/components/ui/paragraph";
import { Stack } from "@/components/ui/stack";

export default function Products() {
  return (
    <Container>
      <PageTitle>Upcoming Products</PageTitle>

      <Paragraph>
        Maoni 正在准备一些温柔的小作品。它们会以数字形式呈现：壁纸、插画包、情绪日记模板……
      </Paragraph>

      <Stack gap={20}>
        <Paragraph>Maoni Soft Wallpaper Pack</Paragraph>
        <Paragraph>Coming Soon</Paragraph>
      </Stack>
    </Container>
  );
}
