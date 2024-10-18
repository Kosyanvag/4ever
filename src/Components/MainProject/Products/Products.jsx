import { useState } from "react";
import "./Products.scss";
import Pagination from "../../Pagination/Pagination";
import ReactPaginate from "react-paginate";

const source = [
  {
    id: 1,
    img: "./images/Serene/1.jpg",
    title: "Serene",
    desc: '"Спокойствие в каждой линии, красота в каждом мгновении."',
    price: "149 Gel",
    order: "Заказать",
  },
  {
    id: 2,
    img: "./images/Bliss/wedding1.jpg",
    title: "Bliss",
    desc: '"Безмятежная радость, наполненная любовью"',
    price: "79 Gel",
    order: "Заказать",
  },
  {
    id: 3,
    img: "./images/Eternal/wedding.jpg",
    title: "Eternal",
    desc: '"Любовь, которая не знает конца."',
    price: "99 Gel",
    order: "Заказать",
  },
  {
    id: 4,
    img: "./images/Pure/man.jpg",
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
    img: "./images/Velvet/2.jpg",
    title: "Velvet",
    desc: '"Мягкость и элегантность, как прикосновение любви."',
    price: "149 Gel",
    order: "Заказать",
  },
  {
    id: 7,
    img: "./images/Harmony/wed.jpg",
    title: "Harmony",
    desc: '"Гармония - это слияние души и сердца в одном ритме."',
    price: "109 Gel",
    order: "Заказать",
  },
  {
    id: 8,
    img: "./images/Radiance/wedding.jpg",
    title: "Radiance",
    desc: '"Сияние, которое отражает чистоту и красоту вашей любви."',
    price: " 159 Gel",
    order: "Заказать",
  },
  {
    id: 9,
    img: "./images/Siluette/Wedding.jpg",
    title: "Siluette",
    desc: '"Siluette — изысканная деталь вашего идеального дня."',
    price: "89 Gel",
    order: "Заказать",
  },
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
