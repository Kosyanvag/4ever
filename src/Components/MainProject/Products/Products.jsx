import "./Products.scss";
export default function Products() {
  const data = [
    {
      id: 1,
      img: "./images/Serene/1.jpg",
      title: "Serene",
      desc: '"Спокойствие в каждой линии, красота в каждом мгновении."',
    },
    {
      id: 2,
      img: "./images/Bliss/wedding1.jpg",
      title: "Bliss",
      desc: '"Безмятежная радость, наполненная любовью"',
    },
    {
      id: 3,
      img: "./images/Eternal/wedding.jpg",
      title: "Eternal",
      desc: '"Любовь, которая не знает конца."',
    },
    {
      id: 3,
      img: "./images/Eternal/wedding.jpg",
      title: "Eternal",
      desc: '"Любовь, которая не знает конца."',
    },
    {
      id: 3,
      img: "./images/Eternal/wedding.jpg",
      title: "Eternal",
      desc: '"Любовь, которая не знает конца."',
    },
    {
      id: 3,
      img: "./images/Eternal/wedding.jpg",
      title: "Eternal",
      desc: '"Любовь, которая не знает конца."',
    },
  ];
  return (
    <div className="Products">
      <div className="Products__content">
        {data.map((elem) => (
          <div key={elem.id}>
            <img src={elem.img} alt="photo" />
            <h1>{elem.title}</h1>
            <p>{elem.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
