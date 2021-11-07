import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import tw from "tailwind-styled-components";
import mapboxgl from "mapbox-gl";
mapboxgl.accessToken =
  "pk.eyJ1IjoicHJhZGVlcGt1YW1yMTIzIiwiYSI6ImNrdnAwaGwzNWE1aTQybnM3Nzk1ZmloMWMifQ.7NIxSVDWN7AbwXp268ttKQ";

export default function Home() {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v11",
      center: [84.78, 19.32],
      zoom: 3,
    });
  }, []);
  return (
    <Wrapper>
      <Map id="map"></Map>
      <Actionitem>start</Actionitem>
    </Wrapper>
  );
}

const Wrapper = tw.div`
 flex flex-col bg-red-300 h-screen
`;

const Map = tw.div`
bg-red-500 flex-1
`;

const Actionitem = tw.div`
bg-green-500 flex-1
`;
