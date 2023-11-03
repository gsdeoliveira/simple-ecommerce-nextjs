export type ProductType = {
  id: string;
  name: string;
  price: number | null;
  quantity?: number | 1;
  description: string | null;
  image: string;
  currency?: string;
}