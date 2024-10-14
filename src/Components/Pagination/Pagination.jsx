import "./Pagination.scss";

export default function Pagination({ total }) {
  return (
    <div className="Pagination">
      {total.map((elem) => {
        return (
          <div className="Pagination__content" key={elem.id}>
            <div key={elem.id}>
              <img src={elem.img} alt="photo" />
              <h1>{elem.title}</h1>
              <p>{elem.desc}</p>
              <div>
                <button>{elem.price}</button>
                <button>{elem.order}</button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
