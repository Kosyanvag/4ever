import "./Siluette.scss";
export default function Siluette() {
  return (
    <div className="Siluette">
      <div className="Siluette__content">
        <div className="Siluette__content-title">
          <div className="Siluette__content-title-name">
            <img src="./images/Siluette/Narek.svg" alt="photo" />
            <img src="./images/Siluette/And.svg" alt="photo" />
            <img src="./images/Siluette/Anna.svg" alt="photo" />
          </div>
          <div className="Siluette__content-title-photo">
            <div className="Siluette__content-title-photo-circle">
              {/* <img src="./images/Siluette/Wedding.jpg" alt="photo" /> */}
              <h2>
                25|08 <br />
                2024
              </h2>
            </div>
          </div>
        </div>
        <div className="Siluette__content-date">
          <img src="./images/Siluette/Sireli.svg" alt="photo" />
          <p>
            Մեր կյանքում սպասվում է մեծ փոփոխություն՝
            <span>մենք ընտանիք ենք կազմում։</span>
            Ցանկանում ենք, որ այդ հիասքանչ օրը մեր կողքին լինեն միայն մեզ
            հարազատ և թանկագին մարդիկ։ Ուրախ կլինենք Ձեզ հետ կիսելու մեզ համար
            այդ կարևոր օրը։
          </p>
          <img src="./images/Siluette/Calendare.svg" alt="photo" />
          <div className="Siluette__content-date-box">
            <p>Lianna Garden Hall Փարաքար, Երիտասարդության 34</p>
            <button>Քարտեզ</button>
          </div>
        </div>
        <div className="Siluette__content-timing">
          <div className="Siluette__content-timing-box">
            <img src="./images/Siluette/Timing.svg" alt="photo" />
            <ul>
              <li>
                <span>12:00</span>Պսակադրություն
              </li>
              <li>
                <span>17:00</span>Ռեստորան
              </li>
              <li>
                <span>23:00</span>Հրավառություն
              </li>
              <li>
                <span>00:00</span>Ավարտ
              </li>
            </ul>
            <img src="./images/Siluette/decor.png" alt="photo" />
          </div>
        </div>
        <div className="Siluette__content-agenda">
          <img src="./images/Siluette/Harcatertik.svg" alt="photo" />
          <p>Կսպասենք Ձեր պատասխանին մինչև հունիսի 10-ը</p>
          <form action="https://api.web3forms.com/submit" method="POST">
            <select name="Հյուրերի քանակ" required>
              <option value="Հյուրերի քանակ" selected disabled>
                Նշեք հյուրերի քանակը
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="Չենք կարողանա գալ">Չեմ կարողանա գալ</option>
            </select>
            <input
              type="hidden"
              name="access_key"
              value="db261ca8-6f22-4a89-b93c-18f36a6ba980"
            ></input>
            <input
              type="text"
              placeholder="Անուն Ազգանուն"
              name="Անուն Ազգանուն"
              required
            />
            <input
              type="number"
              placeholder="Հեռախոսահամար"
              name="Հեռախոսահամար"
              required
            />
            <button>Ուղարկել</button>
          </form>
        </div>
      </div>
    </div>
  );
}
