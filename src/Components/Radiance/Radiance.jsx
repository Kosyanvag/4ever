import React from 'react'
import "./Radiance.scss"

export default function Radiance() {
  return (
    <div className='Radiance'>
      <div className="Radiance__content">
        <div className="Radiance__content-title">
          <h2>Она сказала Дааааа!</h2>
          <img src="./images/Radiance/wedding.jpg" alt="" />
          <h1>Гор & Амалия</h1>
          <p>Мы хотим разделить этот день с Вами - нашими близкими и родными людьми.</p>
          <h4>11 ноября в 17:00</h4>
          <h3>Приглашаем вас на торжество любви и счастья - нашу свадьбу</h3>
          <img src="./images/Radiance/wedding2.jpg" alt="" />
          <p>Мы рады сообщить Вам, что 11 ноября состоится самое главное торжество в нашей жизни - день нашей свадьбы! <br /> <br /> Приглашаем Вас разделить с нами радость этого незабываемого дня.</p>
        </div>
        <div className="Radiance__content-day">
          <h2>Место проведения</h2>

          <h3>Triumph Event Hall <br /> ул. Неверовского, 15</h3>
          <button><a href="https://yandex.com/maps/-/CDdAy85X">Как добраться</a></button>
          <h2>Dresscode</h2>
          <p>Мы очень старались сделать праздник красивым и будем рады, если в своих нарядах Вы поддержите цветовую гамму нашей свадьбы</p>
          <h2>Девушки</h2>
          <p>Вы будете великолепно смотреться в коктельных платьях пастельных оттенков</p>
          <img src="./images/Radiance/girl.png" alt="" />
          <h2>Мужчины</h2>
          <p>Вам подойдут черные костюмы и белые рубашки, не сомневайтесь!</p>
          <img src="./images/Radiance/men.png" alt="" />

          <h3>Потверждение</h3>
          <p>Пожалуйста, подвердите свое присутствие до 01.11.2024</p>
          

        </div>
        <div className="Radiance__content-contact">
       

          <form action="https://api.web3forms.com/submit" method="POST">
            <select name="Հյուրերի քանակ" required>
              <option value="Հյուրերի քանակ" selected disabled>
                Укажите кол-во гостей
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="Չենք կարողանա գալ">Не смогу присутствовать</option>
            </select>
            <input
              type="hidden"
              name="access_key"
              value="db261ca8-6f22-4a89-b93c-18f36a6ba980"
            ></input>
            <input
              type="text"
              placeholder="Имя Фамилия"
              name="Имя Фамилия"
              required
            />
            <input
              type="number"
              placeholder="Телефон"
              name="Телефон"
              required
            />
            <button>Отправить</button>
          </form>
          <h2>Ждем Вас!</h2>
          <img src="./images/Radiance/pigeon.png" alt="" />
          <h2>"Любовь - это единственное чувство, которое растет, делясь с другими" </h2>
          <p> Антуан де Сент-Экзюпери</p>
        </div>
      </div>
    </div>
  )
}
