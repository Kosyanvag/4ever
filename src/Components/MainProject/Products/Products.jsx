import { useState } from "react";
import "./Products.scss";
import Pagination from "../../Pagination/Pagination";
import ReactPaginate from "react-paginate";

const source = [
  {
    id: 1,
    img: "./images/Serene/2_cr.jpg",
    title: "Serene",
    desc: '"Спокойствие в каждой линии, красота в каждом мгновении."',
    price: "149 Gel",
    order: "Заказать",
  },
  {
    id: 2,
    img: "./images/Bliss/wedding(1).jpg",
    title: "Bliss",
    desc: '"Безмятежная радость, наполненная любовью"',
    price: "79 Gel",
    order: "Заказать",
  },
  {
    id: 3,
    img: "./images/Eternal/wedding(1).jpg",
    title: "Eternal",
    desc: '"Любовь, которая не знает конца."',
    price: "129 Gel",
    order: "Заказать",
  },
  {
    id: 4,
    img: "./images/Pure/man(1).jpg",
    title: "Pure",
    desc: '"Восторг, который захватывает сердце и душу."',
    price: "99 Gel",
    order: "Заказать",
  },
  {
    id: 5,
    img: "./images/Embrace/wedding.jpg",
    title: "Embrace",
    desc: '"Тепло объятий, которые связывают сердца навеки."',
    price: "89 Gel",
    order: "Заказать",
  },
  {
    id: 6,
    img: "./images/Velvet/2_cr.jpg",
    title: "Velvet",
    desc: '"Мягкость и элегантность, как прикосновение любви."',
    price: "149 Gel",
    order: "Заказать",
  },
  {
    id: 7,
    img: "./images/Harmony/wed(1).jpg",
    title: "Harmony",
    desc: '"Гармония - это слияние души и сердца в одном ритме."',
    price: "109 Gel",
    order: "Заказать",
  },
  {
    id: 8,
    img: "./images/Radiance/wedding_cr.jpg",
    title: "Radiance",
    desc: '"Сияние, которое отражает чистоту и красоту вашей любви."',
    price: " 159 Gel",
    order: "Заказать",
  },
  {
    id: 9,
    img: "./images/Siluette/Wedding_cr.jpg",
    title: "Siluette",
    desc: '"Силуэт любви, который никогда не исчезнет"',
    price: " 139 Gel",
    order: "Заказать",
  },

  {
    id: 10,
    img: "./images/Spark/wedding(1)_cr.jpg",
    title: "Spark",
    desc: '"Искра, с которой начинается ваше вечное пламя любви"',
    price: " 129 Gel",
    order: "Заказать",
  },
  // {
  //   id: 11,
  //   img: "./images/Eclipse/1.jpg",
  //   title: "Eclipse",
  //   desc: "“Любовь, как затмение, редка и прекрасна.”",
  //   price: "Gel",
  //   order: "Заказать",
  // },
];

export default function Products() {
  const [data, setData] = useState(source);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(4);

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
          nextLabel=">"
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
