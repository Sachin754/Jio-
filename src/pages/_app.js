import Layout from "@/components/Layout";
import "@/styles/main.scss";
import "@/styles/globals.scss";
import "@/styles/globals.css";
import { useState } from "react";
import store from '../components/Redux/store'
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);
  const [vechileType, setVechileType] = useState('Bike');
  return (
    <>
     <Provider store={store}>
      <Layout>
        <Component
          {...pageProps}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
          vechileType={vechileType}
          setVechileType={setVechileType}
        />
      </Layout>
      </Provider>
    </>
  );
}
