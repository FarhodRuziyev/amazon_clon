import React from "react";
import type { GetStaticProps, GetStaticPaths } from "next";
interface homeProps {
  data: any;
}
export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch("http://localhost:3000/api/products");
  const data = await response.json();

  const paths = data?.products?.map((items: any) => {
    return { params: { productId: items?.id } };
  });
  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps: GetStaticProps = async (context: any) => {
  const { productId } = context?.params;
  const response = await fetch(
    `http://localhost:3000/api/products/${productId}`
  );
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
};
export default function ProductDetails({ data }: homeProps) {
  console.log(data)
  return (
    <div>
      <h2>Details </h2>
    </div>
  );
}
