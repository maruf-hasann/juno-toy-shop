import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TabContent from "./TabContent";
const HomeTab = () => {
    const [products,setProducts] = useState([])
  const [active, setActive] = useState('teddy')
  

    const tabClick = (text) => {
            setActive(text)
    }
    useEffect(() => {
      fetch(`https://server-plum-rho.vercel.app/category/${active}`)
        .then(res => res.json())
      .then(data => setProducts(data))
    },[active])

  return (
    <div className="my_container">
      <h1 className=" mb-8 text-5xl text-center font-bold text-[#181d4e] mb-13 ">
       Products
      </h1>
      <Tabs>
        <TabList className="text-center font-semibold text-xl mb-7">
          <Tab onClick={() => tabClick("teddy")}>Teddy Bear</Tab>
          <Tab onClick={() => tabClick("fish")}>Fish Teddy</Tab>
          <Tab onClick={() => tabClick("cat")}>Cat Teddy</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-2">
            {products.map((product) => (
              <TabContent
                className=""
                key={product._id}
                product={product}
              ></TabContent>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-2">
            {products.map((product) => (
              <TabContent
                className=""
                key={product._id}
                product={product}
              ></TabContent>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-2">
            {products.map((product) => (
              <TabContent
                className=""
                key={product._id}
                product={product}
              ></TabContent>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default HomeTab;
