import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../styles/Home.module.css";
const Home: NextPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then((res) => res.json())
      .then((data) => setData(data?.products));
  }, []);

  const { push } = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title> Amazon </title>
        <meta name="Amazon" content="Amazon-create" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hello World</h1>

      <div className={styles.cards}>
      {data?.map((item: any) => {
        return (
            <div className={styles.card} key={item?.id}>
            <div>
             <Image alt="test" src={item?.img} width={300} height={300} layout="intrinsic"/>
            </div>
            <h3>{item?.name}</h3>
            <div className={styles.btnla}>
              <button>delete</button>
              <button>update</button>
              <button onClick={() => push(`/product-details/${item.id}`)}>
                details
              </button>
            </div>
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default Home;
