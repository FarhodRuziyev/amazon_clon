// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import data from "./../../data/products.json";
type ProductType = {
  id: string;
  name: string;
  brand: string;
  description: string;
  price: number;
  size: string;
  color: string;
  img: string;
};
type Data = {
  products: ProductType[];
  method?: string;
  total: number;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let prod = data.products as ProductType[];
  if (req.method == "GET") {
    res.status(200).json({ products: prod, total: prod.length });
  } else if (req.method == "POST") {
    prod.push({ ...req.body, id: `${prod.length + 1}` });
    res.status(201).json({ ...req.body, id: `${prod.length + 1}` });
  }
}
