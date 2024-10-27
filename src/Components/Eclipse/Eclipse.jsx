import "./Eclipse.scss";
export default function Eclipse() {
  return (
    <div className="Eclipse">
      <div className="Eclipse__content">
        <div className="Eclipse__content-header">
          <h1>
            ՀԱՐՍԱՆԵԿԱՆ <br /> ՀՐԱՎԻՐԱՏՈՄՍ
          </h1>
        </div>
        <div className="Eclipse__content-invitation">
          <div className="Eclipse__content-invitation-text">
            <h2>ՍԻՐԵԼԻ ՀՅՈՒՐԵՐ</h2>
            <p>
              Մենք ցանկանում ենք Ձեզ հետ կիսել մեր կյանքի կարեվորագույն օրերից
              մեկը, որը տեղի կունենա
            </p>
            <h3>09.02.2025</h3>
          </div>
        </div>

        <div className="Eclipse__content-church"></div>
        <div className="Eclipse__content-churchText">
          <div className="Eclipse__content-churchText-box">
            <h2>ՍՈՒՐԲ ՄԱՐԻԱՄ ԱՍՏՎԱԾԱԾԻՆ ԵԿԵՂԵՑԻ</h2>
            <p>
              Հասցե՝ <br />
              Երևան,Արմենակյան 225
            </p>
            <button>Քարտեզ</button>
          </div>
        </div>
        <div className="Eclipse__content-resturant"></div>
        <div className="Eclipse__content-resturantText">
          <div className="Eclipse__content-resturantText-box">
            <h2>ԴՎԻՆ ՄՅՈՒԶԻՔ ՀՈԼԼ</h2>
            <p>
              Հասցե՝ <br />
              Երևան,Պարոնյան 40
            </p>
            <button>Քարտեզ</button>
          </div>
        </div>
        <div className="Eclipse__content-couple"></div>
        <div className="Eclipse__content-dressCode">
          <div className="Eclipse__content-dressCode-box">
            <h2>DRESS CODE</h2>
            <p>
              Տղամարդկանց համար՝ սմոքինգ, <br />
              Կանանց համար՝ երեկոյան զգեստ։
            </p>
            <p>
              Մենք շատ երախտապարտ կլինենք, եթե ձեր հանդերձանքով աջակցեք մեր
              հարսանիքի ոճին և գույնին։
            </p>
            <button>Քարտեզ</button>
          </div>
        </div>
        <div className="Eclipse__content-couple2"></div>
        <div className="Eclipse__content-agenda">
          <div className="Eclipse__content-agenda-box">
            <h2>Խնդրում ենք, հաստատեք Ձեր ներկայությունը</h2>
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
    </div>
  );
}
