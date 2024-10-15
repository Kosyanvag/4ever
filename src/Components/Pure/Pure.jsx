import "./Pure.scss";
import { useEffect } from "react";
export default function Pure() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="Pure">
      <div className="Pure__content">
        <div className="Pure__content-title">
          <h2>PURE LOVE</h2>
          <h1>Դավիթ և Նունե</h1>
          <p>12.12.2024</p>
        </div>
        <div className="Pure__content-invite">
          <div className="Pure__content-invite-left">
            <h2>ՍԻՐԵԼԻ ՀՅՈՒՐԵՐ</h2>
            <p>
              Մենք ցանկանում ենք Ձեզ հետ կիսել մեր կյանքի կարևորագույն օրերից
              մեկը:Մեծ ուրախությամբ հրավիրում ենք Ձեզ մեր հարսանիքին:
            </p>
            <span>12.12.2024</span>
          </div>
          <div className="Pure__content-invite-right">
            <img src="./images/Pure/man3.jpg" alt="photo" />
            <img src="./images/Pure/man2.jpg" alt="photo" />
          </div>
        </div>
        <div className="Pure__content-time">
          <h5>Թայմինգ</h5>
          <div className="Pure__content-time-box">
            <div className="Pure__content-time-box-left">
              <h3>15:00</h3>
              <p>Պսակադրություն</p>
              <h4>Սուրբ Հովհաննես Մկրտիչ եկեղեցի</h4>
            </div>
            <div className="Pure__content-time-box-right">
              <h3>17:00</h3>
              <p>Հանդիսություն</p>
              <h4>Armenian Marriott Resturant Yerevan</h4>
            </div>
          </div>
          <div className="Pure__content-time-bottom">
            <div className="Pure__content-time-bottom-box">
              <h2>Ինչպես հասնել</h2>
              <h3>Սուրբ Հովհաննես Մկրտիչ եկեղեցի</h3>
              <p>
                Հասցեն ք․ Աբովյան,
                <br /> Ռուսաստանի փողոց 12
              </p>
              <button>
                <a href="https://maps.app.goo.gl/SoaJeoXNVggWYTJV9">Քարտեզ</a>
              </button>
              <h3>Armenian Marriott Hotel Yerevan</h3>
              <p>Հասցեն ք․ Երևան, Ամիրյան 1</p>
              <button>
                <a href="https://maps.app.goo.gl/yCtTDD7a9y2VmrZF6">Քարտեզ</a>
              </button>
            </div>
          </div>
        </div>
        <div className="Pure__content-location">
          <h4>
            Ստորև տեղադրված քարտեզները ձեզ կօգնեն ավելի արագ <br />
            գտնել մեր միջոցառման գտնվելու վայրերը և միանալ մեզ:
          </h4>
          <div className="Pure__content-location-box">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3044.051240037279!2d44.62755537552028!3d40.27461196427759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aa1cde06733bf%3A0xfc394fda1212f30a!2s12%20Russia%20Street%2C%20Abovyan%202204!5e0!3m2!1sen!2sam!4v1728148478559!5m2!1sen!2sam"
              width="400"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6096.759349028016!2d44.501537893579105!3d40.17836320000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abcf96549a887%3A0x32871df8850445df!2sArmenia%20Marriott%20Hotel%20Yerevan!5e0!3m2!1sen!2sam!4v1728148521184!5m2!1sen!2sam"
              width="400"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="Pure__content-agenda">
          <h3>Խնդրում ենք հաստատել Ձեր ներկայությունը միջոցառմանը</h3>
          <p>Սպասում ենք ձեր պատասխանին մինչև 01.12.2024</p>
          <form action="https://api.web3forms.com/submit" method="POST">
            <input
              type="hidden"
              name="access_key"
              value="90d4ff81-22a6-4ea2-8021-1173977264a8"
            />
            <div className="data">
              <select name="ՀյուրերիՔանակ" required>
                <option value="Չենք կարողանա գալ">Չենք կարողանա գալ</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="Նշեք հյուրերի քանակը" selected disabled>
                  Նշեք հյուրերի քանակը
                </option>
              </select>
              <input
                type="text"
                name="Անուն Ազգանուն"
                placeholder="Անուն Ազգանուն"
              />
              <input
                type="number"
                name="Հեռախոսահամար"
                placeholder="Ձեր Հեռախոսահամարը"
                required
              />
            </div>
            <button>Ուղղարկել</button>
          </form>
        </div>
      </div>
    </section>
  );
}
