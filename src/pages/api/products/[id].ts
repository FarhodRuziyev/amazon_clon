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
  product?: ProductType;
  method?: string;
};
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let { id } = req.query;
  if (req.method == "GET") {
    let prod = data.products;
    let product = prod.filter((item: ProductType) => item.id.toString() == `${id}`);
    console.log(product);
    res.status(200).json({ product: product[0] });
  } else if (req.method == "PATCH") {
    res.status(203).json({ method: "patch" });
  } else if (req.method == "DELETE") {
    res.status(204).json({ method: "delete" });
  }
}
