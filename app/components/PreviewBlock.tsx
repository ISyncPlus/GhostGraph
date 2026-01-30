interface PreviewBlockProps {
  title: string;
  description: string;
  delay?: number;
}

export default async function PreviewBlock({ title, description, delay = 2000 }: PreviewBlockProps) {
    await new Promise((r) => setTimeout(r, delay));
  return (
  <>
    <h2 className="text-lg font-bold">{title}</h2>
    <p>{description}</p>
  </>
  )
}