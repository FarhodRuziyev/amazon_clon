import { useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import {AxiosError} from "axios"
const Home: NextPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let acsessApi: boolean = true;
      try {
        const response = await fetch('http://localhost:3001/api/products');
        const data = await response.json();
        if (acsessApi) {
          setData(data?.products)
        }

      } catch (error) {
        if (error instanceof AxiosError) {
          console.log(error.message)
        }
      }
    }
    fetchData();
    return ( ) => {
      const acsessApi = false
    }
  }, []);

  const { push } = useRouter();
  console.log(data)
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
          </div>
        );
      })}
      </div>
    </div>
  );
};

export default Home;
