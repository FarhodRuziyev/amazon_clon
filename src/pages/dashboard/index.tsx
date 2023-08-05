import {
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  ReactPortal,
  useEffect,
  useState,
} from "react";
import type { NextPage } from "next";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import Head from "next/head";
import { useRouter } from "next/router";
import { AxiosError } from "axios";
import styles from "../../styles/Home.module.css";

type DataType = {
  id: string;
  name: string;
  description: string;
  price: number;
  size: string;
  color: string;
  img: string;
};
type Data = {
  products: DataType[];
  method?: string;
  total: number;
};

const Dashboard: NextPage = () => {
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      let acsessApi: boolean = true;
      try {
        const response = await fetch("http://localhost:3000/api/products");
        const data = await response.json();
        if (acsessApi) {
          setData(data?.products);
        }
      } catch (error) {
        if (error instanceof AxiosError) {
          console.log(error.message);
        }
      }
    };
    fetchData();
    return () => {
      const acsessApi = false;
    };
  }, []);

  const columns: ColumnsType<DataType | any> = [
    { title: "No", dataIndex: "id", key: "name" },
    { title: "Image", dataIndex: "img", key: "name" },
    { title: "Name", dataIndex: "name", key: "name" },
    { title: "Price", dataIndex: "price", key: "address" },
    { title: "CRUD btn", dataIndex: "crudButtons", key: "crudButtons" },
  ];

  // const data: DataType = [
  //   {
  //     key: 1,
  //     name: "John Brown",
  //     age: 32,
  //     address: "New York No. 1 Lake Park",
  //     description:
  //       "My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.",
  //   },
  //   {
  //     key: 2,
  //     name: "Jim Green",
  //     age: 42,
  //     address: "London No. 1 Lake Park",
  //     description:
  //       "My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.",
  //   },
  //   {
  //     key: 3,
  //     name: "Not Expandable",
  //     age: 29,
  //     address: "Jiangsu No. 1 Lake Park",
  //     description: "This not expandable",
  //   },
  //   {
  //     key: 4,
  //     name: "Joe Black",
  //     age: 32,
  //     address: "Sydney No. 1 Lake Park",
  //     description:
  //       "My name is Joe Black, I am 32 years old, living in Sydney No. 1 Lake Park.",
  //   },
  // ];
  const { push } = useRouter();
  console.log(data);
  // console.log(data);
  return (
    <div className={styles.container}>
      <Head>
        <title> Amazon </title>
        <meta name="Amazon" content="Amazon-create" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Hello World</h1>

      <div className={styles.cards}>
        <Table
          columns={columns}
          dataSource={data?.map((items: any, index: number) => ({
            key: index + 1,
            id: <p>{items?.id}</p>,
            img: <img width={60} height={60} src={items?.img} alt="image" />,
            price: <p>{items?.price}</p>,
            name: <h3>{items?.name}</h3>,
            
            crudButtons: (
              <div className="crud-buttons">
                <button>delete</button>
                <button>update</button>
                <button onClick={() => push(`/product-details/${items?.id}`)}>details</button>
              </div>
            ),
          }))}
        />
      </div>
    </div>
  );
};

export default Dashboard;
