import { PreviewBlockProps } from "@/types/preview";

export default async function PreviewBlock({ title, description, delay = 2000 }: PreviewBlockProps) {
    await new Promise((r) => setTimeout(r, delay));
  return (
  <div className="border p-4 rounded-md mb-4 shadow-sm">
    <h2 className="text-lg font-bold">{title}</h2>
    <p className="text-gray-600">{description}</p>
  </div>
  )
}