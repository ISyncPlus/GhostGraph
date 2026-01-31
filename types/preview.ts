export interface PreviewBlockProps {
  title: string;
  description: string;
  delay?: number;
}

export type Preview = {
  id: number;
  description: string;
  title: string
}

export type GetPreviews = Promise<Preview[]>;