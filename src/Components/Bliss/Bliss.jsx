import "./Bliss.scss";

export default function Bliss() {
  return (
    <div className="Bliss">
      <div className="Bliss__content">
        <div className="Bliss__content-title">
          <h1>
            Արամ & <br /> Մարիաննա
          </h1>
          <p>ՀԱՐՍԱՆՅԱՑ ՀՐԱՎԵՐ</p>
          <img src="./images/Bliss/down-arrow.svg" alt="down" />
        </div>
        <div className="Bliss__content-about">
          <h2>Ընկերներ և բարեկամներ</h2>
          <p>
            Լիահույս ենք, որ կկիսեք մեզ հետ մեր կյանքի լուսավոր օրը։ <br />{" "}
            <br />
            Հրավիրում ենք Ձեզ մեր հարսանիքին:
          </p>
          <h2>
            12 Դեկտեմբերի <br /> 2024
          </h2>
          <img src="./images/Bliss/infinity.png" alt="infinity" />
        </div>
        <div className="Bliss__content-day">
          <h2>
            14:30 <br /> <br /> Պսակադրություն <br />{" "}
          </h2>
          <p>
            Սուռբ Սարգիս եկեղեցի <br /> ք․ Երևան, Իսրայելյան 21
          </p>
          <button>
            <a href="https://yandex.com/maps/-/CDTPjH65" target="_blank">
              ԻՆՉՊԵՍ ՀԱՍՆԵԼ
            </a>
          </button>
          <h2>
            17:00 <br /> <br /> Հարսանյաց հանդիսություն <br />{" "}
          </h2>
          <p>
            "Florence" ռեստորանային համալիր <br /> ք․ Երևան, Բարբյուսի 64/2
          </p>
          <button>
            <a href="https://yandex.com/maps/-/CDTPfD1T" target="_blank">
              ԻՆՉՊԵՍ ՀԱՍՆԵԼ
            </a>
          </button>
        </div>
        <div className="Bliss__content-photo">
          <img src="./images/Bliss/love.svg" alt="love" />
          <h2>Սիրով սպասում ենք Ձեզ</h2>
        </div>
      </div>
    </div>
  );
}
