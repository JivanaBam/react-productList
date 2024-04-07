import React from "react";
import "./App.css";
import ProductData from "./ProductData";
import ConditionalRender1 from "./ConditionalRender1";
import ConditionalRender2 from "./ConditionalRender2";
import ConditionalRender3 from "./ConditionalRender3";
import ShowName from "./ShowName";
import ProductCard from "./ProductCard";
import ProductUsingProps from "./ProductUsingProps";

const App = () => {
  return (
    <div>
      {/* <ProductData /> */}
      {/* <ConditionalRender1 /> */}
      {/* <ConditionalRender2 /> */}
      {/* <ConditionalRender3 /> */}
      {/* <ShowName studentName="Jibana" /> */}
      {/* <ProductCard
        image="https://itti.com.np/_next/image?url=https%3A%2F%2Fadmin.itti.com.np%2Fstorage%2Fproduct%2Fmsi-gf63-thin-10scxr-price-nepal%2Fthumb%2F09da26e7-a503-4f80-bcdf-bf76ed9ec325.webp&w=1920&q=75"
        name="MSI GF63 Thin 10SCXR i7 10TH GEN / GTX 1650 / 8GB RAM / 512GB SSD / 15.6 FHD"
        price={112000}
      /> */}

      <ProductUsingProps
        id="1"
        image="https://static-01.daraz.com.np/p/9a5f85c067833bdf7a746142c5d68213.png_300x0q75.webp"
        name="Royal Blue Water Purifier"
        price={10395}
      />
      <ProductUsingProps
        id="2"
        image="https://static-01.daraz.com.np/p/67789aac75b2c560fc34336b77fbb147.png_300x0q75.webp"
        name="Aqua Fresh Accent Plus RO"
        price={14599}
      />
      <ProductUsingProps
        id="3"
        image="https://static-01.daraz.com.np/p/57485880e1f1dd76081e795428e25b34.jpg_300x0q75.webp"
        name="Kent Grand Plus"
        price={22500}
      />

      <ProductUsingProps
        id="4"
        image="https://static-01.daraz.com.np/p/6131ef9f232eefcea78fabf3265333c6.png_300x0q75.webp"
        name="Kent Grand Plus B"
        price={31550}
      />

      <ProductUsingProps
        id="5"
        image="https://static-01.daraz.com.np/p/add6498abe698fbaddcd54f2eaedb92d.jpg_300x0q75.webp"
        name="Blue Fleece Belt Design Trekking joggers For Women/Ment"
        price={2800}
      />

      <ProductUsingProps
        id="6"
        image="https://static-01.daraz.com.np/p/fd9d82f18a9498df4d412b5b0ad1a4de.jpg_300x0q75.webp"
        name="Portable Stainless Steel Vacuum Flask Therom Cup Travel Water Bottle"
        price={549}
      />

      <ProductUsingProps
        id="7"
        image="https://static-01.daraz.com.np/p/dce9e7f255adb6d8a47d81e866ae846e.jpg_300x0q75.webp"
        name="Vacuum Flask Set Stainless Steel Drinking Metal Water Thermos Bottle with Cup 500ML"
        price={637}
      />

      <ProductUsingProps
        id="8"
        image="https://static-01.daraz.com.np/p/0ff3e7bb2c1cfd471ba8a13329a07765.jpg_300x0q75.webp"
        name="Hiking Trekking Shoes By Happy Kicks"
        price={3999}
      />

      <ProductUsingProps
        id="9"
        image="https://static-01.daraz.com.np/p/5de0d7ec94f4fa39a60e4dee2efb8bbb.jpg_300x0q75.webp"
        name="Nylon Material Outdoor Trekking Bag- 50L"
        price={1334}
      />

      <ProductUsingProps
        id="10"
        image="https://static-01.daraz.com.np/p/268b573d6b93858de67c153301bd25eb.jpg_300x0q75.webp"
        name="Windproof Softshell Stylist Outdoor Hiking Trekking Winter Jacket For Men"
        price={2375}
      />
    </div>
  );
};

export default App;
