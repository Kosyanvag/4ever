import { useState, useEffect } from "react";
import "./Products.scss";
import Pagination from "../../Pagination/Pagination";
import ReactPaginate from "react-paginate";
import { useTranslation } from "react-i18next";

const source = [
  {
    id: 1,
    img: "./images/Serene/2_cr.jpg",
    title: "Serene",
    desc: "products.serene.quote",
    price: "products.serene.price",
    rate: "products.serene.rate",
    order: "products.serene.order",
  },
  {
    id: 2,
    img: "./images/Bliss/wedding(1).jpg",
    title: "Bliss",
    desc: "products.bliss.quote",
    price: "products.bliss.price",
    rate: "products.bliss.rate",
    order: "products.bliss.order",
  },
  {
    id: 3,
    img: "./images/Eternal/wedding(1).jpg",
    title: "Eternal",
    desc: "products.eternal.quote",
    price: "products.eternal.price",
    rate: "products.eternal.rate",
    order: "products.eternal.order",
  },
  {
    id: 4,
    img: "./images/Pure/man(1).jpg",
    title: "Pure",
    desc: "products.pure.quote",
    price: "products.pure.price",
    rate: "products.pure.rate",
    order: "products.pure.order",
  },
  {
    id: 5,
    img: "./images/Embrace/wedding.jpg",
    title: "Embrace",
    desc: "products.embrace.quote",
    price: "products.embrace.price",
    rate: "products.embrace.rate",
    order: "products.embrace.order",
  },
  {
    id: 6,
    img: "./images/Velvet/2_cr.jpg",
    title: "Velvet",
    desc: "products.velvet.quote",
    price: "products.velvet.price",
    rate: "products.velvet.rate",
    order: "products.velvet.order",
  },
  {
    id: 7,
    img: "./images/Harmony/wed(1).jpg",
    title: "Harmony",
    desc: "products.harmony.quote",
    price: "products.harmony.price",
    rate: "products.harmony.rate",
    order: "products.harmony.order",
  },
  {
    id: 8,
    img: "./images/Radiance/wedding_cr.jpg",
    title: "Radiance",
    desc: "products.radiance.quote",
    price: "products.radiance.price",
    rate: "products.radiance.rate",
    order: "products.radiance.order",
  },
  {
    id: 9,
    img: "./images/Siluette/Wedding_cr.jpg",
    title: "Siluette",
    desc: "products.siluette.quote",
    price: "products.siluette.price",
    rate: "products.siluette.rate",
    order: "products.siluette.order",
  },

  {
    id: 10,
    img: "./images/Spark/wedding(1)_cr.jpg",
    title: "Spark",
    desc: "products.spark.quote",
    price: "products.spark.price",
    rate: "products.spark.rate",
    order: "products.spark.order",
  },
];

export default function Products() {
  const { t, i18n } = useTranslation();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [perPage] = useState(4);


  useEffect(() => {
    const translatedData = source.map((item) => ({
      ...item,
      desc: t(item.desc),
      price: t(item.price),
      rate: t(item.rate),
      order: t(item.order),
    }));
    setData(translatedData);
  }, [t, i18n.language]); 

  const total = data.slice((page - 1) * perPage, page * perPage);

  const handlePageClick = (option) => {
    setPage(option.selected + 1);
  };

  return (
    <div className="Products" id="products">
      <div className="Products__content">
        <Pagination total={total} />
        <ReactPaginate
          breakLabel="..."
          nextLabel= ">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={Math.ceil(data.length / perPage)}
          previousLabel="<"
          renderOnZeroPageCount={null}
          className="navigation"
        />
      </div>
    </div>
  );
}
