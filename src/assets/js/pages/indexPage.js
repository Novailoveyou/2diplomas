const indexPage = async () => {
  const pageHTML = /* html */ `

<section class="main-screen" id='home'>
<div class="center-wrap">
  <div class="main-screen__content">
    <h1 class="main-screen__title">Получите <span>полноценное высшее образование и MBA</span> дистанционно по программе двойного диплома от ИПО в <span>2 раза дешевле чем в других вузах</span></h1>
    <div class="main-screen__text">
      <p>Узнайте о программе, правилах приема и дополнительных скидках, оставив заявку</p>
    </div>
    <span class="btn" onclick='show_popup("callback")'>ОСТАВИТЬ ЗАЯВКУ</span>
  </div>
</div>
</section>

<section class="features">
<div class="center-wrap">
  <div class="features__list">	
    <div class="features__item">
      <div class="features__item-img">
        <img src="assets/images/features1.png" alt="">
      </div>
      <p class="features__item-title">Гибкий график
      </p>
      <div class="features__item-text">
        <p>Учитесь удаленно когда<br> угодно и где угодно
        </p>
      </div>
    </div>	
    <div class="features__item">
      <div class="features__item-img">
        <img src="assets/images/features2.png" alt="">
      </div>
      <p class="features__item-title">Удобно</p>
      <div class="features__item-text">
        <p>Дистанционная сдача<br> экзаменов и зачетов
        </p>
      </div>
    </div>	
    <div class="features__item">
      <div class="features__item-img">
        <img src="assets/images/features3.png" alt="">
      </div>
      <p class="features__item-title">Госдиплом</p>
      <div class="features__item-text">
        <p>Дипломы государственного<br> образца</p>
      </div>
    </div>	
    <div class="features__item features__item--empty"></div>
    <div class="features__item">
      <div class="features__item-img">
        <img src="assets/images/features4.png" alt="">
      </div>
      <p class="features__item-title">Совмещайте с работой</p>
      <div class="features__item-text">
        <p>За счет удаленного формата,<br> Вы можете совмещать<br> обучение с работой
        </p>
      </div>
    </div>	
    <div class="features__item">
      <div class="features__item-img">
        <img src="assets/images/features5.png" alt="">
      </div>
      <p class="features__item-title">Ежемесячный прием</p>
      <div class="features__item-text">
        <p>Можете начать учиться<br> уже в следующем месяце
        </p>
      </div>
    </div>	
    <div class="features__item">
      <div class="features__item-img">
        <img src="assets/images/features6.png" alt="">
      </div>
      <p class="features__item-title">Аккредитация</p>
      <div class="features__item-text">
        <p>Все наши программы<br> аккредитованы и сертифицированы</p>
      </div>
    </div>	
    <div class="features__item">
      <div class="features__item-img">
        <img src="assets/images/features7.png" alt="">
      </div>
      <p class="features__item-title">Доступная цена
      </p>
      <div class="features__item-text">
        <p>Стоимость обучения начинается<br> от   <strike><span>40 000</span></strike> <span>21 000 р</span> за семестр
        </p>
      </div>
    </div>			
  </div>
</div>
</section>
<section class="go-online">
<div class="center-wrap">
  <div class="go-online__wrap">
    <div class="go-online__img">
      <img src="assets/images/go-online__img.png" alt="">
    </div>
    <div class="go-online__right">
      <h2 class="h2 go-online__title">Подберите направление обучения </h2>
      <span class="btn" onclick='show_popup("quize")'>Подобрать</span>
    </div>
  </div>
</div>
</section>
<section class="possibility">
<div class="center-wrap">
  <h2 class="possibility__title h2 h2--round">Вам необходима программа двух дипломов, если хотите:</h2>
  <div class="possibility__list">

    <div class="possibility__item">
      <span class="possibility__item-number">01</span>
      <div class="possibility__item-img">
        <img src="assets/images/possibility1.png">
      </div>
      <h3 class="possibility__item-title">Получить повышение на работе</h3>
    </div>

    <div class="possibility__item">
      <span class="possibility__item-number">02</span>
      <div class="possibility__item-img">
        <img src="assets/images/possibility2.png">
      </div>
      <h3 class="possibility__item-title">Сменить сферу деятельности</h3>
    </div>

    <div class="possibility__item">
      <span class="possibility__item-number">03</span>
      <div class="possibility__item-img">
        <img src="assets/images/possibility3.png">
      </div>
      <h3 class="possibility__item-title">Получить дополнительный доход</h3>
    </div>

    <div class="possibility__item">
      <span class="possibility__item-number">04</span>
      <div class="possibility__item-img">
        <img src="assets/images/possibility4.png">
      </div>
      <h3 class="possibility__item-title">Освоить новую профессию</h3>
    </div>

  </div>
</div>
</section>
<section class="about" id='about'>
<div class="center-wrap">
  <div class="about__wrap">
    <div class="about__left">
      <h2 class="h2 about__title">О программе двух дипломов</h2>
      <div class="about__text">
        <p>Программа двух дипломов позволит Вам параллельно получить классическое <strong>высшее образование от университетов партнеров и дополнительное бизнес образование (MBA) от ИПО</strong> ( институт профессионального образования) в удаленном формате.</p>
      </div>
    </div>
    <img class='about__img' src="assets/images/about__img.png" alt="">
  </div>
</div>
</section>
<section class="partners" id='partners'>
<div class="about__img"></div>
<div class="center-wrap">
  <h2 class="h2 h2--round partners__title">Университеты партнеры</h2>
  <div class="partners__slider">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="partners__item">
            <div class="partners__item-img">
              <div class="partners__item-img-ratio">
                <div class="partners__item-img-wrap">
                  <img src="assets/images/partners1.png">
                </div>
              </div>
            </div>
            <h3 class="partners__item-title">Московская Бизнес Академия</h3>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="partners__item">
            <div class="partners__item-img">
              <div class="partners__item-img-ratio">
                <div class="partners__item-img-wrap">
                  <img src="assets/images/partners2.png">
                </div>
              </div>
            </div>
            <h3 class="partners__item-title">Тамбовский государственный университет</h3>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="partners__item">
            <div class="partners__item-img">
              <div class="partners__item-img-ratio">
                <div class="partners__item-img-wrap">
                  <img src="assets/images/partners3.png">
                </div>
              </div>
            </div>
            <h3 class="partners__item-title">Российский новый университет</h3>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="partners__item">
            <div class="partners__item-img">
              <div class="partners__item-img-ratio">
                <div class="partners__item-img-wrap">
                  <img src="assets/images/partners4.png">
                </div>
              </div>
            </div>
            <h3 class="partners__item-title">Университет<br> Синергия</h3>
          </div>
        </div>
        <div class="swiper-slide">
          <div class="partners__item">
            <div class="partners__item-img">
              <div class="partners__item-img-ratio">
                <div class="partners__item-img-wrap">
                  <img src="assets/images/partners5.png">
                </div>
              </div>
            </div>
          </div>
          <h3 class="partners__item-title">Московский<br> открытый институт</h3>
        </div>
      </div>
    </div>
  </div>
</div>
</section>
<section class="institute">
<div class="center-wrap">
  <h2 class="institute__title h2 h2--round">Институт Профессионального Образования (ИПО)</h2>
  <div class="institute__text institute__text--mobile">
    <p>Является лидером программ дополнительного образования, включая программы бизнес-образования MBA со стажировкой в Европе.</p>
  </div>
  <div class="institute__wrap">
    <div class="institute__img">
      <picture>
        <source srcset="assets/images/institute__logo--mobile.png" media="(max-width: 768px)">
          <img src="assets/images/institute__logo.png" alt="">
        </picture>
      </div>
      <div class="institute__right">
        <div class="institute__text">
          <p>Является лидером программ дополнительного образования, включая программы бизнес-образования MBA со стажировкой в Европе.</p>
        </div>
        <div class="institute__list">
          <div class="institute__item">
            <span class="institute__item-number">8000+</span>
            <p class="institute__item-text">студентов уже<br> оценили ИПО</p>
          </div>
          <div class="institute__item">
            <span class="institute__item-number">20+</span>
            <p class="institute__item-text">направлений<br> обучения</p>
          </div>
          <div class="institute__item">
            <span class="institute__item-number">5000+</span>
            <p class="institute__item-text">образовательных<br> материалов</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="clients">
  <div class="center-wrap">
    <h2 class="h2 h2--round clients__title">У нас обучаются:</h2>
    <div class="clients__slider">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="clients__item">
              <img src="assets/images/logo1.png" alt="">
            </div>
          </div>
          <div class="swiper-slide">
            <div class="clients__item">
              <img src="assets/images/logo2.png" alt="">
            </div>
          </div>
          <div class="swiper-slide">
            <div class="clients__item">
              <img src="assets/images/logo3.png" alt="">
            </div>
          </div>
          <div class="swiper-slide">
            <div class="clients__item">
              <img src="assets/images/logo4.png" alt="">
            </div>
          </div>
          <div class="swiper-slide">
            <div class="clients__item">
              <img src="assets/images/logo5.png" alt="">
            </div>
          </div>
          <div class="swiper-slide">
            <div class="clients__item">
              <img src="assets/images/logo6.png" alt="">
            </div>
          </div>
          <div class="swiper-slide">
            <div class="clients__item">
              <img src="assets/images/logo7.png" alt="">
            </div>
          </div>
          <div class="swiper-slide">
            <div class="clients__item">
              <img src="assets/images/logo8.png" alt="">
            </div>
          </div>
          <div class="swiper-slide">
            <div class="clients__item">
              <img src="assets/images/logo9.png" alt="">
            </div>
          </div>
          <div class="swiper-slide">
            <div class="clients__item">
              <img src="assets/images/logo10.png" alt="">
            </div>
          </div>	
          <div class="swiper-slide">
            <div class="clients__item">
              <img src="assets/images/logo11.png" alt="">
            </div>
          </div>	
          <div class="swiper-slide">
            <div class="clients__item">
              <img src="assets/images/logo12.png" alt="">
            </div>
          </div>	
          <div class="swiper-slide">
            <div class="clients__item">
              <img src="assets/images/logo9.png" alt="">
            </div>
          </div>
          <div class="swiper-slide">
            <div class="clients__item">
              <img src="assets/images/logo10.png" alt="">
            </div>
          </div>	
          <div class="swiper-slide">
            <div class="clients__item">
              <img src="assets/images/logo11.png" alt="">
            </div>
          </div>	
          <div class="swiper-slide">
            <div class="clients__item">
              <img src="assets/images/logo12.png" alt="">
            </div>
          </div>	

        </div>
      </div>
      <div class="swiper-pagination">
      </div>

    </div>
  </div>
</section>
<section class="why">
  <div class="center-wrap">
    <h2 class="why__title h2 h2--round">Почему Вам стоит выбрать нашу<br> программу?</h2>
    <div class="why__list">
      <div class="why__item">
        <h3 class="why__item-title">Удаленное обучение</h3>
        <div class="why__item-content">
          <p>Учитесь где удобно, в любое удобное для Вас время, с любого доступного устройства, на котором есть Интернет.</p>
        </div>
        <div class="why__item-img why__item-img--bottom">
          <img src="assets/images/why1.png" alt="">
        </div>
      </div>
      <div class="why__item">
        <div class="why__item-img why__item-img--top">
          <img src="assets/images/why2.png">
        </div>
        <h3 class="why__item-title">Низкие цены</h3>
        <div class="why__item-content">
          <p>Стоимость обучения по нашей программе  одна из самых низких в Москве, при этом качество образования соответствует стандартам лучших вузов столицы.</p>
        </div>
      </div>
      <div class="why__item">
        <h3 class="why__item-title">Ежемесячное зачислиение</h3>
        <div class="why__item-content">
          <p>Звчисление в вузы-партнеры идет круглый год. Вы можете начать учиться уже в следующем месяце в независимости от текущего местонахождения.</p>
        </div>
        <div class="why__item-img why__item-img--bottom">
          <img src="assets/images/why3.png" alt="">
        </div>
      </div>
      <div class="why__item">
        <h3 class="why__item-title">Большой опыт</h3>
        <div class="why__item-content">
          <p>С момента основания нашей программы, мы успешно обучили уже более 3000 слушателей.</p>
        </div>
        <div class="why__item-img why__item-img--bottom">
          <img src="assets/images/why4.png" alt="">
        </div>
      </div>
      <div class="why__item">
        <div class="why__item-img why__item-img--top">
          <img src="assets/images/why5.png">
        </div>
        <h3 class="why__item-title">Перевод из других вузов</h3>
        <div class="why__item-content">
          <p>Вы можете перевестись к нам из любого другого вуза. Перевод возможен на все профили и формы обучения, зачисление происходит на тот же курс.</p>
        </div>
      </div>
      <div class="why__item">
        <h3 class="why__item-title">Престижные дипломы</h3>
        <div class="why__item-content">
          <p>После завершения обучения, Вы получите престижные дипломы: диплом бакалавра или магистра гос. образца и диплом MBA.</p>
        </div>
        <div class="why__item-img why__item-img--bottom">
          <img src="assets/images/why6.png" alt="">
        </div>
      </div>
    </div>
  </div>
</section>
<section class="programms toogles__wrap" id='programms'>
  <div class="center-wrap">
    <h2 class="h2 h2--round programms__title">Направления обучения по программе<br><span>двух дипломов</span></h2>
    <div class="programms__sub-title">
      <p><span><em class="big">1</em>-й</span>&ensp; диплом</p>
    </div>
    <div class="programms__nav">
      <div data-toogles='1' class="toogles__item-title toogles__item-title--active programms__nav-item programms__nav-item--active"> Бакалавриат от университетов партнеров</div>
      <div data-toogles='2' class="toogles__item-title programms__nav-item">Магистратура от университетов партнеров</div>
    </div>	
    <div class="toogles__item toogles__item--active" data-toogles="1">
      <div class="toogles__item-content" style="display: block;">
        <div>
          <div class="programms__list">
            <div class="programms__item">
              <div class="programms__item-img">
                <div>
                  <img src="assets/images/programm.png" alt="">
                </div>
              </div>
              <div class="programms__item-content">	
                <div class="programms__item-header">
                  <span class="programms__item-tag">МОИ</span>
                  <span class="programms__item-term">
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 0C2.0187 0 0 2.0187 0 4.5C0 6.9813 2.0187 9 4.5 9C6.9813 9 9 6.9813 9 4.5C9 2.0187 6.9813 0 4.5 0ZM4.5 8.04248C2.5467 8.04248 0.957431 6.4534 0.957431 4.5C0.957431 2.5466 2.5467 0.957524 4.5 0.957524C6.4533 0.957524 8.04257 2.5466 8.04257 4.5C8.04257 6.4534 6.4533 8.04248 4.5 8.04248Z" fill="#3183FF" fill-opacity="0.8"/><path d="M6.64531 4.37255H4.70939V2.31373C4.70939 2.14047 4.55057 2 4.35469 2C4.15881 2 4 2.14047 4 2.31373V4.68627C4 4.85953 4.15881 5 4.35469 5H6.64531C6.84119 5 7 4.85953 7 4.68627C7 4.51302 6.84119 4.37255 6.64531 4.37255Z" fill="#3183FF" fill-opacity="0.8"/></svg>
                    4,5 года
                  </span>
                </div>
                <h3 class="programms__item-title">Название обучающей программы</h3>
                <a href="/programm.html" class="btn"><span>Узнать</span> подробнее</a>
              </div>
            </div>
            <div class="programms__item">
              <div class="programms__item-img">
                <div>
                  <img src="assets/images/programm.png" alt="">
                </div>
              </div>
              <div class="programms__item-content">	
                <div class="programms__item-header">
                  <span class="programms__item-tag">МОИ</span>
                  <span class="programms__item-term">
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 0C2.0187 0 0 2.0187 0 4.5C0 6.9813 2.0187 9 4.5 9C6.9813 9 9 6.9813 9 4.5C9 2.0187 6.9813 0 4.5 0ZM4.5 8.04248C2.5467 8.04248 0.957431 6.4534 0.957431 4.5C0.957431 2.5466 2.5467 0.957524 4.5 0.957524C6.4533 0.957524 8.04257 2.5466 8.04257 4.5C8.04257 6.4534 6.4533 8.04248 4.5 8.04248Z" fill="#3183FF" fill-opacity="0.8"/><path d="M6.64531 4.37255H4.70939V2.31373C4.70939 2.14047 4.55057 2 4.35469 2C4.15881 2 4 2.14047 4 2.31373V4.68627C4 4.85953 4.15881 5 4.35469 5H6.64531C6.84119 5 7 4.85953 7 4.68627C7 4.51302 6.84119 4.37255 6.64531 4.37255Z" fill="#3183FF" fill-opacity="0.8"/></svg>
                    4,5 года
                  </span>
                </div>
                <h3 class="programms__item-title">Название обучающей программы</h3>
                <a href="/programm.html" class="btn"><span>Узнать</span> подробнее</a>
              </div>
            </div>
            <div class="programms__item">
              <div class="programms__item-img">
                <div>
                  <img src="assets/images/programm.png" alt="">
                </div>
              </div>
              <div class="programms__item-content">	
                <div class="programms__item-header">
                  <span class="programms__item-tag">МОИ</span>
                  <span class="programms__item-term">
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 0C2.0187 0 0 2.0187 0 4.5C0 6.9813 2.0187 9 4.5 9C6.9813 9 9 6.9813 9 4.5C9 2.0187 6.9813 0 4.5 0ZM4.5 8.04248C2.5467 8.04248 0.957431 6.4534 0.957431 4.5C0.957431 2.5466 2.5467 0.957524 4.5 0.957524C6.4533 0.957524 8.04257 2.5466 8.04257 4.5C8.04257 6.4534 6.4533 8.04248 4.5 8.04248Z" fill="#3183FF" fill-opacity="0.8"/><path d="M6.64531 4.37255H4.70939V2.31373C4.70939 2.14047 4.55057 2 4.35469 2C4.15881 2 4 2.14047 4 2.31373V4.68627C4 4.85953 4.15881 5 4.35469 5H6.64531C6.84119 5 7 4.85953 7 4.68627C7 4.51302 6.84119 4.37255 6.64531 4.37255Z" fill="#3183FF" fill-opacity="0.8"/></svg>
                    4,5 года
                  </span>
                </div>
                <h3 class="programms__item-title">Название обучающей программы</h3>
                <a href="/programm.html" class="btn"><span>Узнать</span> подробнее</a>
              </div>
            </div>
            <div class="programms__item">
              <div class="programms__item-img">
                <div>
                  <img src="assets/images/programm.png" alt="">
                </div>
              </div>
              <div class="programms__item-content">	
                <div class="programms__item-header">
                  <span class="programms__item-tag">МОИ</span>
                  <span class="programms__item-term">
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 0C2.0187 0 0 2.0187 0 4.5C0 6.9813 2.0187 9 4.5 9C6.9813 9 9 6.9813 9 4.5C9 2.0187 6.9813 0 4.5 0ZM4.5 8.04248C2.5467 8.04248 0.957431 6.4534 0.957431 4.5C0.957431 2.5466 2.5467 0.957524 4.5 0.957524C6.4533 0.957524 8.04257 2.5466 8.04257 4.5C8.04257 6.4534 6.4533 8.04248 4.5 8.04248Z" fill="#3183FF" fill-opacity="0.8"/><path d="M6.64531 4.37255H4.70939V2.31373C4.70939 2.14047 4.55057 2 4.35469 2C4.15881 2 4 2.14047 4 2.31373V4.68627C4 4.85953 4.15881 5 4.35469 5H6.64531C6.84119 5 7 4.85953 7 4.68627C7 4.51302 6.84119 4.37255 6.64531 4.37255Z" fill="#3183FF" fill-opacity="0.8"/></svg>
                    4,5 года
                  </span>
                </div>
                <h3 class="programms__item-title">Название обучающей программы</h3>
                <a href="/programm.html" class="btn"><span>Узнать</span> подробнее</a>
              </div>
            </div>
            <div class="programms__item">
              <div class="programms__item-img">
                <div>
                  <img src="assets/images/programm.png" alt="">
                </div>
              </div>
              <div class="programms__item-content">	
                <div class="programms__item-header">
                  <span class="programms__item-tag">МОИ</span>
                  <span class="programms__item-term">
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 0C2.0187 0 0 2.0187 0 4.5C0 6.9813 2.0187 9 4.5 9C6.9813 9 9 6.9813 9 4.5C9 2.0187 6.9813 0 4.5 0ZM4.5 8.04248C2.5467 8.04248 0.957431 6.4534 0.957431 4.5C0.957431 2.5466 2.5467 0.957524 4.5 0.957524C6.4533 0.957524 8.04257 2.5466 8.04257 4.5C8.04257 6.4534 6.4533 8.04248 4.5 8.04248Z" fill="#3183FF" fill-opacity="0.8"/><path d="M6.64531 4.37255H4.70939V2.31373C4.70939 2.14047 4.55057 2 4.35469 2C4.15881 2 4 2.14047 4 2.31373V4.68627C4 4.85953 4.15881 5 4.35469 5H6.64531C6.84119 5 7 4.85953 7 4.68627C7 4.51302 6.84119 4.37255 6.64531 4.37255Z" fill="#3183FF" fill-opacity="0.8"/></svg>
                    4,5 года
                  </span>
                </div>
                <h3 class="programms__item-title">Название обучающей программы</h3>
                <a href="/programm.html" class="btn"><span>Узнать</span> подробнее</a>
              </div>
            </div>
            <div class="programms__item">
              <div class="programms__item-img">
                <div>
                  <img src="assets/images/programm.png" alt="">
                </div>
              </div>
              <div class="programms__item-content">	
                <div class="programms__item-header">
                  <span class="programms__item-tag">МОИ</span>
                  <span class="programms__item-term">
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 0C2.0187 0 0 2.0187 0 4.5C0 6.9813 2.0187 9 4.5 9C6.9813 9 9 6.9813 9 4.5C9 2.0187 6.9813 0 4.5 0ZM4.5 8.04248C2.5467 8.04248 0.957431 6.4534 0.957431 4.5C0.957431 2.5466 2.5467 0.957524 4.5 0.957524C6.4533 0.957524 8.04257 2.5466 8.04257 4.5C8.04257 6.4534 6.4533 8.04248 4.5 8.04248Z" fill="#3183FF" fill-opacity="0.8"/><path d="M6.64531 4.37255H4.70939V2.31373C4.70939 2.14047 4.55057 2 4.35469 2C4.15881 2 4 2.14047 4 2.31373V4.68627C4 4.85953 4.15881 5 4.35469 5H6.64531C6.84119 5 7 4.85953 7 4.68627C7 4.51302 6.84119 4.37255 6.64531 4.37255Z" fill="#3183FF" fill-opacity="0.8"/></svg>
                    4,5 года
                  </span>
                </div>
                <h3 class="programms__item-title">Название обучающей программы</h3>
                <a href="/programm.html" class="btn"><span>Узнать</span> подробнее</a>
              </div>
            </div>
            <div class="programms__item">
              <div class="programms__item-img">
                <div>
                  <img src="assets/images/programm.png" alt="">
                </div>
              </div>
              <div class="programms__item-content">	
                <div class="programms__item-header">
                  <span class="programms__item-tag">МОИ</span>
                  <span class="programms__item-term">
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 0C2.0187 0 0 2.0187 0 4.5C0 6.9813 2.0187 9 4.5 9C6.9813 9 9 6.9813 9 4.5C9 2.0187 6.9813 0 4.5 0ZM4.5 8.04248C2.5467 8.04248 0.957431 6.4534 0.957431 4.5C0.957431 2.5466 2.5467 0.957524 4.5 0.957524C6.4533 0.957524 8.04257 2.5466 8.04257 4.5C8.04257 6.4534 6.4533 8.04248 4.5 8.04248Z" fill="#3183FF" fill-opacity="0.8"/><path d="M6.64531 4.37255H4.70939V2.31373C4.70939 2.14047 4.55057 2 4.35469 2C4.15881 2 4 2.14047 4 2.31373V4.68627C4 4.85953 4.15881 5 4.35469 5H6.64531C6.84119 5 7 4.85953 7 4.68627C7 4.51302 6.84119 4.37255 6.64531 4.37255Z" fill="#3183FF" fill-opacity="0.8"/></svg>
                    4,5 года
                  </span>
                </div>
                <h3 class="programms__item-title">Название обучающей программы</h3>
                <a href="/programm.html" class="btn"><span>Узнать</span> подробнее</a>
              </div>
            </div>
            <div class="programms__item">
              <div class="programms__item-img">
                <div>
                  <img src="assets/images/programm.png" alt="">
                </div>
              </div>
              <div class="programms__item-content">	
                <div class="programms__item-header">
                  <span class="programms__item-tag">МОИ</span>
                  <span class="programms__item-term">
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 0C2.0187 0 0 2.0187 0 4.5C0 6.9813 2.0187 9 4.5 9C6.9813 9 9 6.9813 9 4.5C9 2.0187 6.9813 0 4.5 0ZM4.5 8.04248C2.5467 8.04248 0.957431 6.4534 0.957431 4.5C0.957431 2.5466 2.5467 0.957524 4.5 0.957524C6.4533 0.957524 8.04257 2.5466 8.04257 4.5C8.04257 6.4534 6.4533 8.04248 4.5 8.04248Z" fill="#3183FF" fill-opacity="0.8"/><path d="M6.64531 4.37255H4.70939V2.31373C4.70939 2.14047 4.55057 2 4.35469 2C4.15881 2 4 2.14047 4 2.31373V4.68627C4 4.85953 4.15881 5 4.35469 5H6.64531C6.84119 5 7 4.85953 7 4.68627C7 4.51302 6.84119 4.37255 6.64531 4.37255Z" fill="#3183FF" fill-opacity="0.8"/></svg>
                    4,5 года
                  </span>
                </div>
                <h3 class="programms__item-title">Название обучающей программы</h3>
                <a href="/programm.html" class="btn"><span>Узнать</span> подробнее</a>
              </div>
            </div>
            
            <div class="programms__item programms__item--hide"></div> <!-- ВЫВЕСТИ ПОСЛЕ ЦИКЛА ДЛЯ КОРРЕКТНОГО ОТОБРАЖЕНИЯ ЭТИ 2 БЛОКА -->
            <div class="programms__item programms__item--hide"></div> <!-- ВЫВЕСТИ ПОСЛЕ ЦИКЛА ДЛЯ КОРРЕКТНОГО ОТОБРАЖЕНИЯ ЭТИ 2 БЛОКА -->

          </div>
        </div>
      </div>
    </div>
    <div class="toogles__item" data-toogles="2">
      <div class="toogles__item-content">
        <div>
          <div class="programms__list">
            <div class="programms__item">
              <div class="programms__item-img">
                <div>
                  <img src="assets/images/programm.png" alt="">
                </div>
              </div>
              <div class="programms__item-content">	
                <div class="programms__item-header">
                  <span class="programms__item-tag">МОИ</span>
                  <span class="programms__item-term">
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 0C2.0187 0 0 2.0187 0 4.5C0 6.9813 2.0187 9 4.5 9C6.9813 9 9 6.9813 9 4.5C9 2.0187 6.9813 0 4.5 0ZM4.5 8.04248C2.5467 8.04248 0.957431 6.4534 0.957431 4.5C0.957431 2.5466 2.5467 0.957524 4.5 0.957524C6.4533 0.957524 8.04257 2.5466 8.04257 4.5C8.04257 6.4534 6.4533 8.04248 4.5 8.04248Z" fill="#3183FF" fill-opacity="0.8"/><path d="M6.64531 4.37255H4.70939V2.31373C4.70939 2.14047 4.55057 2 4.35469 2C4.15881 2 4 2.14047 4 2.31373V4.68627C4 4.85953 4.15881 5 4.35469 5H6.64531C6.84119 5 7 4.85953 7 4.68627C7 4.51302 6.84119 4.37255 6.64531 4.37255Z" fill="#3183FF" fill-opacity="0.8"/></svg>
                    4,5 года
                  </span>
                </div>
                <h3 class="programms__item-title">Название обучающей программы2</h3>
                <a href="/programm.html" class="btn"><span>Узнать</span> подробнее</a>
              </div>
            </div>
            <div class="programms__item">
              <div class="programms__item-img">
                <div>
                  <img src="assets/images/programm.png" alt="">
                </div>
              </div>
              <div class="programms__item-content">	
                <div class="programms__item-header">
                  <span class="programms__item-tag">МОИ</span>
                  <span class="programms__item-term">
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 0C2.0187 0 0 2.0187 0 4.5C0 6.9813 2.0187 9 4.5 9C6.9813 9 9 6.9813 9 4.5C9 2.0187 6.9813 0 4.5 0ZM4.5 8.04248C2.5467 8.04248 0.957431 6.4534 0.957431 4.5C0.957431 2.5466 2.5467 0.957524 4.5 0.957524C6.4533 0.957524 8.04257 2.5466 8.04257 4.5C8.04257 6.4534 6.4533 8.04248 4.5 8.04248Z" fill="#3183FF" fill-opacity="0.8"/><path d="M6.64531 4.37255H4.70939V2.31373C4.70939 2.14047 4.55057 2 4.35469 2C4.15881 2 4 2.14047 4 2.31373V4.68627C4 4.85953 4.15881 5 4.35469 5H6.64531C6.84119 5 7 4.85953 7 4.68627C7 4.51302 6.84119 4.37255 6.64531 4.37255Z" fill="#3183FF" fill-opacity="0.8"/></svg>
                    4,5 года
                  </span>
                </div>
                <h3 class="programms__item-title">Название обучающей программы2</h3>
                <a href="/programm.html" class="btn"><span>Узнать</span> подробнее</a>
              </div>
            </div>
            <div class="programms__item">
              <div class="programms__item-img">
                <div>
                  <img src="assets/images/programm.png" alt="">
                </div>
              </div>
              <div class="programms__item-content">	
                <div class="programms__item-header">
                  <span class="programms__item-tag">МОИ</span>
                  <span class="programms__item-term">
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 0C2.0187 0 0 2.0187 0 4.5C0 6.9813 2.0187 9 4.5 9C6.9813 9 9 6.9813 9 4.5C9 2.0187 6.9813 0 4.5 0ZM4.5 8.04248C2.5467 8.04248 0.957431 6.4534 0.957431 4.5C0.957431 2.5466 2.5467 0.957524 4.5 0.957524C6.4533 0.957524 8.04257 2.5466 8.04257 4.5C8.04257 6.4534 6.4533 8.04248 4.5 8.04248Z" fill="#3183FF" fill-opacity="0.8"/><path d="M6.64531 4.37255H4.70939V2.31373C4.70939 2.14047 4.55057 2 4.35469 2C4.15881 2 4 2.14047 4 2.31373V4.68627C4 4.85953 4.15881 5 4.35469 5H6.64531C6.84119 5 7 4.85953 7 4.68627C7 4.51302 6.84119 4.37255 6.64531 4.37255Z" fill="#3183FF" fill-opacity="0.8"/></svg>
                    4,5 года
                  </span>
                </div>
                <h3 class="programms__item-title">Название обучающей программы2</h3>
                <a href="/programm.html" class="btn"><span>Узнать</span> подробнее</a>
              </div>
            </div>
            <div class="programms__item">
              <div class="programms__item-img">
                <div>
                  <img src="assets/images/programm.png" alt="">
                </div>
              </div>
              <div class="programms__item-content">	
                <div class="programms__item-header">
                  <span class="programms__item-tag">МОИ</span>
                  <span class="programms__item-term">
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 0C2.0187 0 0 2.0187 0 4.5C0 6.9813 2.0187 9 4.5 9C6.9813 9 9 6.9813 9 4.5C9 2.0187 6.9813 0 4.5 0ZM4.5 8.04248C2.5467 8.04248 0.957431 6.4534 0.957431 4.5C0.957431 2.5466 2.5467 0.957524 4.5 0.957524C6.4533 0.957524 8.04257 2.5466 8.04257 4.5C8.04257 6.4534 6.4533 8.04248 4.5 8.04248Z" fill="#3183FF" fill-opacity="0.8"/><path d="M6.64531 4.37255H4.70939V2.31373C4.70939 2.14047 4.55057 2 4.35469 2C4.15881 2 4 2.14047 4 2.31373V4.68627C4 4.85953 4.15881 5 4.35469 5H6.64531C6.84119 5 7 4.85953 7 4.68627C7 4.51302 6.84119 4.37255 6.64531 4.37255Z" fill="#3183FF" fill-opacity="0.8"/></svg>
                    4,5 года
                  </span>
                </div>
                <h3 class="programms__item-title">Название обучающей программы</h3>
                <a href="/programm.html" class="btn"><span>Узнать</span> подробнее</a>
              </div>
            </div>
            <div class="programms__item">
              <div class="programms__item-img">
                <div>
                  <img src="assets/images/programm.png" alt="">
                </div>
              </div>
              <div class="programms__item-content">	
                <div class="programms__item-header">
                  <span class="programms__item-tag">МОИ</span>
                  <span class="programms__item-term">
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 0C2.0187 0 0 2.0187 0 4.5C0 6.9813 2.0187 9 4.5 9C6.9813 9 9 6.9813 9 4.5C9 2.0187 6.9813 0 4.5 0ZM4.5 8.04248C2.5467 8.04248 0.957431 6.4534 0.957431 4.5C0.957431 2.5466 2.5467 0.957524 4.5 0.957524C6.4533 0.957524 8.04257 2.5466 8.04257 4.5C8.04257 6.4534 6.4533 8.04248 4.5 8.04248Z" fill="#3183FF" fill-opacity="0.8"/><path d="M6.64531 4.37255H4.70939V2.31373C4.70939 2.14047 4.55057 2 4.35469 2C4.15881 2 4 2.14047 4 2.31373V4.68627C4 4.85953 4.15881 5 4.35469 5H6.64531C6.84119 5 7 4.85953 7 4.68627C7 4.51302 6.84119 4.37255 6.64531 4.37255Z" fill="#3183FF" fill-opacity="0.8"/></svg>
                    4,5 года
                  </span>
                </div>
                <h3 class="programms__item-title">Название обучающей программы</h3>
                <a href="/programm.html" class="btn"><span>Узнать</span> подробнее</a>
              </div>
            </div>
            <div class="programms__item">
              <div class="programms__item-img">
                <div>
                  <img src="assets/images/programm.png" alt="">
                </div>
              </div>
              <div class="programms__item-content">	
                <div class="programms__item-header">
                  <span class="programms__item-tag">МОИ</span>
                  <span class="programms__item-term">
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 0C2.0187 0 0 2.0187 0 4.5C0 6.9813 2.0187 9 4.5 9C6.9813 9 9 6.9813 9 4.5C9 2.0187 6.9813 0 4.5 0ZM4.5 8.04248C2.5467 8.04248 0.957431 6.4534 0.957431 4.5C0.957431 2.5466 2.5467 0.957524 4.5 0.957524C6.4533 0.957524 8.04257 2.5466 8.04257 4.5C8.04257 6.4534 6.4533 8.04248 4.5 8.04248Z" fill="#3183FF" fill-opacity="0.8"/><path d="M6.64531 4.37255H4.70939V2.31373C4.70939 2.14047 4.55057 2 4.35469 2C4.15881 2 4 2.14047 4 2.31373V4.68627C4 4.85953 4.15881 5 4.35469 5H6.64531C6.84119 5 7 4.85953 7 4.68627C7 4.51302 6.84119 4.37255 6.64531 4.37255Z" fill="#3183FF" fill-opacity="0.8"/></svg>
                    4,5 года
                  </span>
                </div>
                <h3 class="programms__item-title">Название обучающей программы</h3>
                <a href="/programm.html" class="btn"><span>Узнать</span> подробнее</a>
              </div>
            </div>
            <div class="programms__item">
              <div class="programms__item-img">
                <div>
                  <img src="assets/images/programm.png" alt="">
                </div>
              </div>
              <div class="programms__item-content">	
                <div class="programms__item-header">
                  <span class="programms__item-tag">МОИ</span>
                  <span class="programms__item-term">
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 0C2.0187 0 0 2.0187 0 4.5C0 6.9813 2.0187 9 4.5 9C6.9813 9 9 6.9813 9 4.5C9 2.0187 6.9813 0 4.5 0ZM4.5 8.04248C2.5467 8.04248 0.957431 6.4534 0.957431 4.5C0.957431 2.5466 2.5467 0.957524 4.5 0.957524C6.4533 0.957524 8.04257 2.5466 8.04257 4.5C8.04257 6.4534 6.4533 8.04248 4.5 8.04248Z" fill="#3183FF" fill-opacity="0.8"/><path d="M6.64531 4.37255H4.70939V2.31373C4.70939 2.14047 4.55057 2 4.35469 2C4.15881 2 4 2.14047 4 2.31373V4.68627C4 4.85953 4.15881 5 4.35469 5H6.64531C6.84119 5 7 4.85953 7 4.68627C7 4.51302 6.84119 4.37255 6.64531 4.37255Z" fill="#3183FF" fill-opacity="0.8"/></svg>
                    4,5 года
                  </span>
                </div>
                <h3 class="programms__item-title">Название обучающей программы</h3>
                <a href="/programm.html" class="btn"><span>Узнать</span> подробнее</a>
              </div>
            </div>
            <div class="programms__item">
              <div class="programms__item-img">
                <div>
                  <img src="assets/images/programm.png" alt="">
                </div>
              </div>
              <div class="programms__item-content">	
                <div class="programms__item-header">
                  <span class="programms__item-tag">МОИ</span>
                  <span class="programms__item-term">
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 0C2.0187 0 0 2.0187 0 4.5C0 6.9813 2.0187 9 4.5 9C6.9813 9 9 6.9813 9 4.5C9 2.0187 6.9813 0 4.5 0ZM4.5 8.04248C2.5467 8.04248 0.957431 6.4534 0.957431 4.5C0.957431 2.5466 2.5467 0.957524 4.5 0.957524C6.4533 0.957524 8.04257 2.5466 8.04257 4.5C8.04257 6.4534 6.4533 8.04248 4.5 8.04248Z" fill="#3183FF" fill-opacity="0.8"/><path d="M6.64531 4.37255H4.70939V2.31373C4.70939 2.14047 4.55057 2 4.35469 2C4.15881 2 4 2.14047 4 2.31373V4.68627C4 4.85953 4.15881 5 4.35469 5H6.64531C6.84119 5 7 4.85953 7 4.68627C7 4.51302 6.84119 4.37255 6.64531 4.37255Z" fill="#3183FF" fill-opacity="0.8"/></svg>
                    4,5 года
                  </span>
                </div>
                <h3 class="programms__item-title">Название обучающей программы</h3>
                <a href="/programm.html" class="btn"><span>Узнать</span> подробнее</a>
              </div>
            </div>
            <div class="programms__item programms__item--hide"></div> <!-- ВЫВЕСТИ ПОСЛЕ ЦИКЛА ДЛЯ КОРРЕКТНОГО ОТОБРАЖЕНИЯ ЭТИ 2 БЛОКА -->
            <div class="programms__item programms__item--hide"></div> <!-- ВЫВЕСТИ ПОСЛЕ ЦИКЛА ДЛЯ КОРРЕКТНОГО ОТОБРАЖЕНИЯ ЭТИ 2 БЛОКА -->
          </div>
        </div>
      </div>
    </div>
    <div class="pagination">
      <div class="pagination__arrow pagination__arrow--prev">
        <svg width="7" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.185815 7.49966L5.90303 13.7933C6.1539 14.0689 6.56035 14.0689 6.81185 13.7933C7.06272 13.5178 7.06272 13.0702 6.81185 12.7946L1.54811 7.00035L6.81121 1.20605C7.06208 0.930496 7.06208 0.482921 6.81121 0.206667C6.56035 -0.0688891 6.15327 -0.0688891 5.9024 0.206667L0.185181 6.50028C-0.0618326 6.77299 -0.0618326 7.22759 0.185815 7.49966Z" fill="#495054"/></svg>
      </div>
      <a href="" class="pagination__item pagination__item--current">1</a>
      <a href="" class="pagination__item">2</a>
      <a href="" class="pagination__item">3</a>
      <a href="" class="pagination__item">4</a>
      <a href="" class="pagination__item">5</a>
      <a href="" class="pagination__item">...</a>
      <div class="pagination__arrow pagination__arrow--next">
        <svg width="7" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.185815 7.49966L5.90303 13.7933C6.1539 14.0689 6.56035 14.0689 6.81185 13.7933C7.06272 13.5178 7.06272 13.0702 6.81185 12.7946L1.54811 7.00035L6.81121 1.20605C7.06208 0.930496 7.06208 0.482921 6.81121 0.206667C6.56035 -0.0688891 6.15327 -0.0688891 5.9024 0.206667L0.185181 6.50028C-0.0618326 6.77299 -0.0618326 7.22759 0.185815 7.49966Z" fill="#495054"/></svg>
      </div>
    </div>
  </div>
</section>
<section class="programms toogles__wrap">
  <div class="center-wrap">
    <div class="programms__sub-title">
      <p><span><em class="big">2</em>-й</span>&ensp; диплом</p>
    </div>
    <div class="programms__nav">
      <div data-toogles='1' class="toogles__item-title toogles__item-title--active programms__nav-item programms__nav-item--active"> Бакалавриат от университетов партнеров</div>
      <div data-toogles='2' class="toogles__item-title programms__nav-item">Магистратура от университетов партнеров</div>
    </div>	
    <div class="toogles__item toogles__item--active" data-toogles="1">
      <div class="toogles__item-content" style="display: block;">
        <div>
          <div class="programms__list">
            <div class="programms__item">
              <div class="programms__item-img">
                <div>
                  <img src="assets/images/programm.png" alt="">
                </div>
              </div>
              <div class="programms__item-content">	
                <div class="programms__item-header">
                  <span class="programms__item-tag">МОИ</span>
                  <span class="programms__item-term">
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 0C2.0187 0 0 2.0187 0 4.5C0 6.9813 2.0187 9 4.5 9C6.9813 9 9 6.9813 9 4.5C9 2.0187 6.9813 0 4.5 0ZM4.5 8.04248C2.5467 8.04248 0.957431 6.4534 0.957431 4.5C0.957431 2.5466 2.5467 0.957524 4.5 0.957524C6.4533 0.957524 8.04257 2.5466 8.04257 4.5C8.04257 6.4534 6.4533 8.04248 4.5 8.04248Z" fill="#3183FF" fill-opacity="0.8"/><path d="M6.64531 4.37255H4.70939V2.31373C4.70939 2.14047 4.55057 2 4.35469 2C4.15881 2 4 2.14047 4 2.31373V4.68627C4 4.85953 4.15881 5 4.35469 5H6.64531C6.84119 5 7 4.85953 7 4.68627C7 4.51302 6.84119 4.37255 6.64531 4.37255Z" fill="#3183FF" fill-opacity="0.8"/></svg>
                    4,5 года
                  </span>
                </div>
                <h3 class="programms__item-title">Название обучающей программы</h3>
                <a href="/programm.html" class="btn"><span>Узнать</span> подробнее</a>
              </div>
            </div>
            <div class="programms__item">
              <div class="programms__item-img">
                <div>
                  <img src="assets/images/programm.png" alt="">
                </div>
              </div>
              <div class="programms__item-content">	
                <div class="programms__item-header">
                  <span class="programms__item-tag">МОИ</span>
                  <span class="programms__item-term">
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 0C2.0187 0 0 2.0187 0 4.5C0 6.9813 2.0187 9 4.5 9C6.9813 9 9 6.9813 9 4.5C9 2.0187 6.9813 0 4.5 0ZM4.5 8.04248C2.5467 8.04248 0.957431 6.4534 0.957431 4.5C0.957431 2.5466 2.5467 0.957524 4.5 0.957524C6.4533 0.957524 8.04257 2.5466 8.04257 4.5C8.04257 6.4534 6.4533 8.04248 4.5 8.04248Z" fill="#3183FF" fill-opacity="0.8"/><path d="M6.64531 4.37255H4.70939V2.31373C4.70939 2.14047 4.55057 2 4.35469 2C4.15881 2 4 2.14047 4 2.31373V4.68627C4 4.85953 4.15881 5 4.35469 5H6.64531C6.84119 5 7 4.85953 7 4.68627C7 4.51302 6.84119 4.37255 6.64531 4.37255Z" fill="#3183FF" fill-opacity="0.8"/></svg>
                    4,5 года
                  </span>
                </div>
                <h3 class="programms__item-title">Название обучающей программы</h3>
                <a href="/programm.html" class="btn"><span>Узнать</span> подробнее</a>
              </div>
            </div>
            <div class="programms__item">
              <div class="programms__item-img">
                <div>
                  <img src="assets/images/programm.png" alt="">
                </div>
              </div>
              <div class="programms__item-content">	
                <div class="programms__item-header">
                  <span class="programms__item-tag">МОИ</span>
                  <span class="programms__item-term">
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 0C2.0187 0 0 2.0187 0 4.5C0 6.9813 2.0187 9 4.5 9C6.9813 9 9 6.9813 9 4.5C9 2.0187 6.9813 0 4.5 0ZM4.5 8.04248C2.5467 8.04248 0.957431 6.4534 0.957431 4.5C0.957431 2.5466 2.5467 0.957524 4.5 0.957524C6.4533 0.957524 8.04257 2.5466 8.04257 4.5C8.04257 6.4534 6.4533 8.04248 4.5 8.04248Z" fill="#3183FF" fill-opacity="0.8"/><path d="M6.64531 4.37255H4.70939V2.31373C4.70939 2.14047 4.55057 2 4.35469 2C4.15881 2 4 2.14047 4 2.31373V4.68627C4 4.85953 4.15881 5 4.35469 5H6.64531C6.84119 5 7 4.85953 7 4.68627C7 4.51302 6.84119 4.37255 6.64531 4.37255Z" fill="#3183FF" fill-opacity="0.8"/></svg>
                    4,5 года
                  </span>
                </div>
                <h3 class="programms__item-title">Название обучающей программы</h3>
                <a href="/programm.html" class="btn"><span>Узнать</span> подробнее</a>
              </div>
            </div>
            <div class="programms__item">
              <div class="programms__item-img">
                <div>
                  <img src="assets/images/programm.png" alt="">
                </div>
              </div>
              <div class="programms__item-content">	
                <div class="programms__item-header">
                  <span class="programms__item-tag">МОИ</span>
                  <span class="programms__item-term">
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 0C2.0187 0 0 2.0187 0 4.5C0 6.9813 2.0187 9 4.5 9C6.9813 9 9 6.9813 9 4.5C9 2.0187 6.9813 0 4.5 0ZM4.5 8.04248C2.5467 8.04248 0.957431 6.4534 0.957431 4.5C0.957431 2.5466 2.5467 0.957524 4.5 0.957524C6.4533 0.957524 8.04257 2.5466 8.04257 4.5C8.04257 6.4534 6.4533 8.04248 4.5 8.04248Z" fill="#3183FF" fill-opacity="0.8"/><path d="M6.64531 4.37255H4.70939V2.31373C4.70939 2.14047 4.55057 2 4.35469 2C4.15881 2 4 2.14047 4 2.31373V4.68627C4 4.85953 4.15881 5 4.35469 5H6.64531C6.84119 5 7 4.85953 7 4.68627C7 4.51302 6.84119 4.37255 6.64531 4.37255Z" fill="#3183FF" fill-opacity="0.8"/></svg>
                    4,5 года
                  </span>
                </div>
                <h3 class="programms__item-title">Название обучающей программы</h3>
                <a href="/programm.html" class="btn"><span>Узнать</span> подробнее</a>
              </div>
            </div>
            <div class="programms__item">
              <div class="programms__item-img">
                <div>
                  <img src="assets/images/programm.png" alt="">
                </div>
              </div>
              <div class="programms__item-content">	
                <div class="programms__item-header">
                  <span class="programms__item-tag">МОИ</span>
                  <span class="programms__item-term">
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 0C2.0187 0 0 2.0187 0 4.5C0 6.9813 2.0187 9 4.5 9C6.9813 9 9 6.9813 9 4.5C9 2.0187 6.9813 0 4.5 0ZM4.5 8.04248C2.5467 8.04248 0.957431 6.4534 0.957431 4.5C0.957431 2.5466 2.5467 0.957524 4.5 0.957524C6.4533 0.957524 8.04257 2.5466 8.04257 4.5C8.04257 6.4534 6.4533 8.04248 4.5 8.04248Z" fill="#3183FF" fill-opacity="0.8"/><path d="M6.64531 4.37255H4.70939V2.31373C4.70939 2.14047 4.55057 2 4.35469 2C4.15881 2 4 2.14047 4 2.31373V4.68627C4 4.85953 4.15881 5 4.35469 5H6.64531C6.84119 5 7 4.85953 7 4.68627C7 4.51302 6.84119 4.37255 6.64531 4.37255Z" fill="#3183FF" fill-opacity="0.8"/></svg>
                    4,5 года
                  </span>
                </div>
                <h3 class="programms__item-title">Название обучающей программы</h3>
                <a href="/programm.html" class="btn"><span>Узнать</span> подробнее</a>
              </div>
            </div>
            <div class="programms__item">
              <div class="programms__item-img">
                <div>
                  <img src="assets/images/programm.png" alt="">
                </div>
              </div>
              <div class="programms__item-content">	
                <div class="programms__item-header">
                  <span class="programms__item-tag">МОИ</span>
                  <span class="programms__item-term">
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 0C2.0187 0 0 2.0187 0 4.5C0 6.9813 2.0187 9 4.5 9C6.9813 9 9 6.9813 9 4.5C9 2.0187 6.9813 0 4.5 0ZM4.5 8.04248C2.5467 8.04248 0.957431 6.4534 0.957431 4.5C0.957431 2.5466 2.5467 0.957524 4.5 0.957524C6.4533 0.957524 8.04257 2.5466 8.04257 4.5C8.04257 6.4534 6.4533 8.04248 4.5 8.04248Z" fill="#3183FF" fill-opacity="0.8"/><path d="M6.64531 4.37255H4.70939V2.31373C4.70939 2.14047 4.55057 2 4.35469 2C4.15881 2 4 2.14047 4 2.31373V4.68627C4 4.85953 4.15881 5 4.35469 5H6.64531C6.84119 5 7 4.85953 7 4.68627C7 4.51302 6.84119 4.37255 6.64531 4.37255Z" fill="#3183FF" fill-opacity="0.8"/></svg>
                    4,5 года
                  </span>
                </div>
                <h3 class="programms__item-title">Название обучающей программы</h3>
                <a href="/programm.html" class="btn"><span>Узнать</span> подробнее</a>
              </div>
            </div>
            <div class="programms__item">
              <div class="programms__item-img">
                <div>
                  <img src="assets/images/programm.png" alt="">
                </div>
              </div>
              <div class="programms__item-content">	
                <div class="programms__item-header">
                  <span class="programms__item-tag">МОИ</span>
                  <span class="programms__item-term">
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 0C2.0187 0 0 2.0187 0 4.5C0 6.9813 2.0187 9 4.5 9C6.9813 9 9 6.9813 9 4.5C9 2.0187 6.9813 0 4.5 0ZM4.5 8.04248C2.5467 8.04248 0.957431 6.4534 0.957431 4.5C0.957431 2.5466 2.5467 0.957524 4.5 0.957524C6.4533 0.957524 8.04257 2.5466 8.04257 4.5C8.04257 6.4534 6.4533 8.04248 4.5 8.04248Z" fill="#3183FF" fill-opacity="0.8"/><path d="M6.64531 4.37255H4.70939V2.31373C4.70939 2.14047 4.55057 2 4.35469 2C4.15881 2 4 2.14047 4 2.31373V4.68627C4 4.85953 4.15881 5 4.35469 5H6.64531C6.84119 5 7 4.85953 7 4.68627C7 4.51302 6.84119 4.37255 6.64531 4.37255Z" fill="#3183FF" fill-opacity="0.8"/></svg>
                    4,5 года
                  </span>
                </div>
                <h3 class="programms__item-title">Название обучающей программы</h3>
                <a href="/programm.html" class="btn"><span>Узнать</span> подробнее</a>
              </div>
            </div>
            <div class="programms__item">
              <div class="programms__item-img">
                <div>
                  <img src="assets/images/programm.png" alt="">
                </div>
              </div>
              <div class="programms__item-content">	
                <div class="programms__item-header">
                  <span class="programms__item-tag">МОИ</span>
                  <span class="programms__item-term">
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 0C2.0187 0 0 2.0187 0 4.5C0 6.9813 2.0187 9 4.5 9C6.9813 9 9 6.9813 9 4.5C9 2.0187 6.9813 0 4.5 0ZM4.5 8.04248C2.5467 8.04248 0.957431 6.4534 0.957431 4.5C0.957431 2.5466 2.5467 0.957524 4.5 0.957524C6.4533 0.957524 8.04257 2.5466 8.04257 4.5C8.04257 6.4534 6.4533 8.04248 4.5 8.04248Z" fill="#3183FF" fill-opacity="0.8"/><path d="M6.64531 4.37255H4.70939V2.31373C4.70939 2.14047 4.55057 2 4.35469 2C4.15881 2 4 2.14047 4 2.31373V4.68627C4 4.85953 4.15881 5 4.35469 5H6.64531C6.84119 5 7 4.85953 7 4.68627C7 4.51302 6.84119 4.37255 6.64531 4.37255Z" fill="#3183FF" fill-opacity="0.8"/></svg>
                    4,5 года
                  </span>
                </div>
                <h3 class="programms__item-title">Название обучающей программы</h3>
                <a href="/programm.html" class="btn"><span>Узнать</span> подробнее</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="toogles__item" data-toogles="2">
      <div class="toogles__item-content">
        <div>
          <div class="programms__list">
            <div class="programms__item">
              <div class="programms__item-img">
                <div>
                  <img src="assets/images/programm.png" alt="">
                </div>
              </div>
              <div class="programms__item-content">	
                <div class="programms__item-header">
                  <span class="programms__item-tag">МОИ</span>
                  <span class="programms__item-term">
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 0C2.0187 0 0 2.0187 0 4.5C0 6.9813 2.0187 9 4.5 9C6.9813 9 9 6.9813 9 4.5C9 2.0187 6.9813 0 4.5 0ZM4.5 8.04248C2.5467 8.04248 0.957431 6.4534 0.957431 4.5C0.957431 2.5466 2.5467 0.957524 4.5 0.957524C6.4533 0.957524 8.04257 2.5466 8.04257 4.5C8.04257 6.4534 6.4533 8.04248 4.5 8.04248Z" fill="#3183FF" fill-opacity="0.8"/><path d="M6.64531 4.37255H4.70939V2.31373C4.70939 2.14047 4.55057 2 4.35469 2C4.15881 2 4 2.14047 4 2.31373V4.68627C4 4.85953 4.15881 5 4.35469 5H6.64531C6.84119 5 7 4.85953 7 4.68627C7 4.51302 6.84119 4.37255 6.64531 4.37255Z" fill="#3183FF" fill-opacity="0.8"/></svg>
                    4,5 года
                  </span>
                </div>
                <h3 class="programms__item-title">Название обучающей программы2</h3>
                <a href="/programm.html" class="btn"><span>Узнать</span> подробнее</a>
              </div>
            </div>
            <div class="programms__item">
              <div class="programms__item-img">
                <div>
                  <img src="assets/images/programm.png" alt="">
                </div>
              </div>
              <div class="programms__item-content">	
                <div class="programms__item-header">
                  <span class="programms__item-tag">МОИ</span>
                  <span class="programms__item-term">
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 0C2.0187 0 0 2.0187 0 4.5C0 6.9813 2.0187 9 4.5 9C6.9813 9 9 6.9813 9 4.5C9 2.0187 6.9813 0 4.5 0ZM4.5 8.04248C2.5467 8.04248 0.957431 6.4534 0.957431 4.5C0.957431 2.5466 2.5467 0.957524 4.5 0.957524C6.4533 0.957524 8.04257 2.5466 8.04257 4.5C8.04257 6.4534 6.4533 8.04248 4.5 8.04248Z" fill="#3183FF" fill-opacity="0.8"/><path d="M6.64531 4.37255H4.70939V2.31373C4.70939 2.14047 4.55057 2 4.35469 2C4.15881 2 4 2.14047 4 2.31373V4.68627C4 4.85953 4.15881 5 4.35469 5H6.64531C6.84119 5 7 4.85953 7 4.68627C7 4.51302 6.84119 4.37255 6.64531 4.37255Z" fill="#3183FF" fill-opacity="0.8"/></svg>
                    4,5 года
                  </span>
                </div>
                <h3 class="programms__item-title">Название обучающей программы2</h3>
                <a href="/programm.html" class="btn"><span>Узнать</span> подробнее</a>
              </div>
            </div>
            <div class="programms__item">
              <div class="programms__item-img">
                <div>
                  <img src="assets/images/programm.png" alt="">
                </div>
              </div>
              <div class="programms__item-content">	
                <div class="programms__item-header">
                  <span class="programms__item-tag">МОИ</span>
                  <span class="programms__item-term">
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 0C2.0187 0 0 2.0187 0 4.5C0 6.9813 2.0187 9 4.5 9C6.9813 9 9 6.9813 9 4.5C9 2.0187 6.9813 0 4.5 0ZM4.5 8.04248C2.5467 8.04248 0.957431 6.4534 0.957431 4.5C0.957431 2.5466 2.5467 0.957524 4.5 0.957524C6.4533 0.957524 8.04257 2.5466 8.04257 4.5C8.04257 6.4534 6.4533 8.04248 4.5 8.04248Z" fill="#3183FF" fill-opacity="0.8"/><path d="M6.64531 4.37255H4.70939V2.31373C4.70939 2.14047 4.55057 2 4.35469 2C4.15881 2 4 2.14047 4 2.31373V4.68627C4 4.85953 4.15881 5 4.35469 5H6.64531C6.84119 5 7 4.85953 7 4.68627C7 4.51302 6.84119 4.37255 6.64531 4.37255Z" fill="#3183FF" fill-opacity="0.8"/></svg>
                    4,5 года
                  </span>
                </div>
                <h3 class="programms__item-title">Название обучающей программы2</h3>
                <a href="/programm.html" class="btn"><span>Узнать</span> подробнее</a>
              </div>
            </div>
            <div class="programms__item">
              <div class="programms__item-img">
                <div>
                  <img src="assets/images/programm.png" alt="">
                </div>
              </div>
              <div class="programms__item-content">	
                <div class="programms__item-header">
                  <span class="programms__item-tag">МОИ</span>
                  <span class="programms__item-term">
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 0C2.0187 0 0 2.0187 0 4.5C0 6.9813 2.0187 9 4.5 9C6.9813 9 9 6.9813 9 4.5C9 2.0187 6.9813 0 4.5 0ZM4.5 8.04248C2.5467 8.04248 0.957431 6.4534 0.957431 4.5C0.957431 2.5466 2.5467 0.957524 4.5 0.957524C6.4533 0.957524 8.04257 2.5466 8.04257 4.5C8.04257 6.4534 6.4533 8.04248 4.5 8.04248Z" fill="#3183FF" fill-opacity="0.8"/><path d="M6.64531 4.37255H4.70939V2.31373C4.70939 2.14047 4.55057 2 4.35469 2C4.15881 2 4 2.14047 4 2.31373V4.68627C4 4.85953 4.15881 5 4.35469 5H6.64531C6.84119 5 7 4.85953 7 4.68627C7 4.51302 6.84119 4.37255 6.64531 4.37255Z" fill="#3183FF" fill-opacity="0.8"/></svg>
                    4,5 года
                  </span>
                </div>
                <h3 class="programms__item-title">Название обучающей программы</h3>
                <a href="/programm.html" class="btn"><span>Узнать</span> подробнее</a>
              </div>
            </div>
            <div class="programms__item">
              <div class="programms__item-img">
                <div>
                  <img src="assets/images/programm.png" alt="">
                </div>
              </div>
              <div class="programms__item-content">	
                <div class="programms__item-header">
                  <span class="programms__item-tag">МОИ</span>
                  <span class="programms__item-term">
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 0C2.0187 0 0 2.0187 0 4.5C0 6.9813 2.0187 9 4.5 9C6.9813 9 9 6.9813 9 4.5C9 2.0187 6.9813 0 4.5 0ZM4.5 8.04248C2.5467 8.04248 0.957431 6.4534 0.957431 4.5C0.957431 2.5466 2.5467 0.957524 4.5 0.957524C6.4533 0.957524 8.04257 2.5466 8.04257 4.5C8.04257 6.4534 6.4533 8.04248 4.5 8.04248Z" fill="#3183FF" fill-opacity="0.8"/><path d="M6.64531 4.37255H4.70939V2.31373C4.70939 2.14047 4.55057 2 4.35469 2C4.15881 2 4 2.14047 4 2.31373V4.68627C4 4.85953 4.15881 5 4.35469 5H6.64531C6.84119 5 7 4.85953 7 4.68627C7 4.51302 6.84119 4.37255 6.64531 4.37255Z" fill="#3183FF" fill-opacity="0.8"/></svg>
                    4,5 года
                  </span>
                </div>
                <h3 class="programms__item-title">Название обучающей программы</h3>
                <a href="/programm.html" class="btn"><span>Узнать</span> подробнее</a>
              </div>
            </div>
            <div class="programms__item">
              <div class="programms__item-img">
                <div>
                  <img src="assets/images/programm.png" alt="">
                </div>
              </div>
              <div class="programms__item-content">	
                <div class="programms__item-header">
                  <span class="programms__item-tag">МОИ</span>
                  <span class="programms__item-term">
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 0C2.0187 0 0 2.0187 0 4.5C0 6.9813 2.0187 9 4.5 9C6.9813 9 9 6.9813 9 4.5C9 2.0187 6.9813 0 4.5 0ZM4.5 8.04248C2.5467 8.04248 0.957431 6.4534 0.957431 4.5C0.957431 2.5466 2.5467 0.957524 4.5 0.957524C6.4533 0.957524 8.04257 2.5466 8.04257 4.5C8.04257 6.4534 6.4533 8.04248 4.5 8.04248Z" fill="#3183FF" fill-opacity="0.8"/><path d="M6.64531 4.37255H4.70939V2.31373C4.70939 2.14047 4.55057 2 4.35469 2C4.15881 2 4 2.14047 4 2.31373V4.68627C4 4.85953 4.15881 5 4.35469 5H6.64531C6.84119 5 7 4.85953 7 4.68627C7 4.51302 6.84119 4.37255 6.64531 4.37255Z" fill="#3183FF" fill-opacity="0.8"/></svg>
                    4,5 года
                  </span>
                </div>
                <h3 class="programms__item-title">Название обучающей программы</h3>
                <a href="/programm.html" class="btn"><span>Узнать</span> подробнее</a>
              </div>
            </div>
            <div class="programms__item">
              <div class="programms__item-img">
                <div>
                  <img src="assets/images/programm.png" alt="">
                </div>
              </div>
              <div class="programms__item-content">	
                <div class="programms__item-header">
                  <span class="programms__item-tag">МОИ</span>
                  <span class="programms__item-term">
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 0C2.0187 0 0 2.0187 0 4.5C0 6.9813 2.0187 9 4.5 9C6.9813 9 9 6.9813 9 4.5C9 2.0187 6.9813 0 4.5 0ZM4.5 8.04248C2.5467 8.04248 0.957431 6.4534 0.957431 4.5C0.957431 2.5466 2.5467 0.957524 4.5 0.957524C6.4533 0.957524 8.04257 2.5466 8.04257 4.5C8.04257 6.4534 6.4533 8.04248 4.5 8.04248Z" fill="#3183FF" fill-opacity="0.8"/><path d="M6.64531 4.37255H4.70939V2.31373C4.70939 2.14047 4.55057 2 4.35469 2C4.15881 2 4 2.14047 4 2.31373V4.68627C4 4.85953 4.15881 5 4.35469 5H6.64531C6.84119 5 7 4.85953 7 4.68627C7 4.51302 6.84119 4.37255 6.64531 4.37255Z" fill="#3183FF" fill-opacity="0.8"/></svg>
                    4,5 года
                  </span>
                </div>
                <h3 class="programms__item-title">Название обучающей программы</h3>
                <a href="/programm.html" class="btn"><span>Узнать</span> подробнее</a>
              </div>
            </div>
            <div class="programms__item">
              <div class="programms__item-img">
                <div>
                  <img src="assets/images/programm.png" alt="">
                </div>
              </div>
              <div class="programms__item-content">	
                <div class="programms__item-header">
                  <span class="programms__item-tag">МОИ</span>
                  <span class="programms__item-term">
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 0C2.0187 0 0 2.0187 0 4.5C0 6.9813 2.0187 9 4.5 9C6.9813 9 9 6.9813 9 4.5C9 2.0187 6.9813 0 4.5 0ZM4.5 8.04248C2.5467 8.04248 0.957431 6.4534 0.957431 4.5C0.957431 2.5466 2.5467 0.957524 4.5 0.957524C6.4533 0.957524 8.04257 2.5466 8.04257 4.5C8.04257 6.4534 6.4533 8.04248 4.5 8.04248Z" fill="#3183FF" fill-opacity="0.8"/><path d="M6.64531 4.37255H4.70939V2.31373C4.70939 2.14047 4.55057 2 4.35469 2C4.15881 2 4 2.14047 4 2.31373V4.68627C4 4.85953 4.15881 5 4.35469 5H6.64531C6.84119 5 7 4.85953 7 4.68627C7 4.51302 6.84119 4.37255 6.64531 4.37255Z" fill="#3183FF" fill-opacity="0.8"/></svg>
                    4,5 года
                  </span>
                </div>
                <h3 class="programms__item-title">Название обучающей программы</h3>
                <a href="/programm.html" class="btn"><span>Узнать</span> подробнее</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pagination">
      <div class="pagination__arrow pagination__arrow--prev">
        <svg width="7" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.185815 7.49966L5.90303 13.7933C6.1539 14.0689 6.56035 14.0689 6.81185 13.7933C7.06272 13.5178 7.06272 13.0702 6.81185 12.7946L1.54811 7.00035L6.81121 1.20605C7.06208 0.930496 7.06208 0.482921 6.81121 0.206667C6.56035 -0.0688891 6.15327 -0.0688891 5.9024 0.206667L0.185181 6.50028C-0.0618326 6.77299 -0.0618326 7.22759 0.185815 7.49966Z" fill="#495054"/></svg>
      </div>
      <a href="" class="pagination__item pagination__item--current">1</a>
      <a href="" class="pagination__item">2</a>
      <a href="" class="pagination__item">3</a>
      <a href="" class="pagination__item">4</a>
      <a href="" class="pagination__item">5</a>
      <a href="" class="pagination__item">...</a>
      <div class="pagination__arrow pagination__arrow--next">
        <svg width="7" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.185815 7.49966L5.90303 13.7933C6.1539 14.0689 6.56035 14.0689 6.81185 13.7933C7.06272 13.5178 7.06272 13.0702 6.81185 12.7946L1.54811 7.00035L6.81121 1.20605C7.06208 0.930496 7.06208 0.482921 6.81121 0.206667C6.56035 -0.0688891 6.15327 -0.0688891 5.9024 0.206667L0.185181 6.50028C-0.0618326 6.77299 -0.0618326 7.22759 0.185815 7.49966Z" fill="#495054"/></svg>
      </div>
    </div>
    <div class="add-block add-block--programms">
      <div class="add-block__content">
        <p class="h2 h2--round">Не знаете, что выбрать?</p>
        <p>Получите бесплатную консультацию по направлениям и возможным скидкам!</p>
      </div>
      <span class="btn" onclick='show_popup("callback")'>ПОЛУЧИТЬ</span>
    </div>
  </div>
</section>
<section class="serts" id='serts'>
  <div class="center-wrap">
    <h2 class="h2 h2--round serts__title">ИПО и все наши вузы-партнеры имеют аккредитацию и государственные лицензии</h2>
    <div class="serts__slider">
      <div class="serts__slider-arrow serts__slider-arrow--prev"><svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.31854 12.8566L10.1195 23.6457C10.5495 24.1181 11.2463 24.1181 11.6775 23.6457C12.1075 23.1733 12.1075 22.4061 11.6775 21.9337L2.65391 12.0006L11.6764 2.06752C12.1064 1.59514 12.1064 0.827864 11.6764 0.354287C11.2463 -0.118096 10.5485 -0.118096 10.1184 0.354287L0.317454 11.1433C-0.105999 11.6108 -0.105999 12.3902 0.31854 12.8566Z" fill="#58646B"/></svg></div>
      <div class="serts__slider-arrow serts__slider-arrow--next">
        <svg width="12" height="25" viewBox="0 0 12 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.6815 12.1395L1.88051 1.35038C1.45045 0.877999 0.75369 0.877999 0.322545 1.35038C-0.107514 1.82276 -0.107514 2.59004 0.322545 3.06242L9.34609 12.9955L0.32363 22.9286C-0.10643 23.401 -0.10643 24.1682 0.323629 24.6418C0.753689 25.1142 1.45154 25.1142 1.8816 24.6418L11.6825 13.8528C12.106 13.3853 12.106 12.6059 11.6815 12.1395Z" fill="#58646B"/></svg>
      </div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="serts__item">
              <div  class="serts__item-img">
                <div class='serts__item-img-ratio'>
                  <img src="assets/images/serts1.png" alt="">
                </div>
                <div class="serts__item-hover">
                  <p>Посмотреть на сайте Рособрнадзора</p>
                  <a href="#" class="btn btn--white">Посмотреть
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.08066 0.120315C7.91718 -0.0401043 7.64509 -0.0401043 7.4759 0.120315C7.31242 0.275314 7.31242 0.533286 7.4759 0.687924L10.5424 3.59534L0.423372 3.59534C0.187487 3.5957 3.69496e-07 3.77346 3.49944e-07 3.99711C-6.23282e-07 4.22076 0.187487 4.4043 0.423372 4.4043L10.5424 4.4043L7.4759 7.3063C7.31242 7.46671 7.31242 7.72505 7.4759 7.87969C7.64509 8.0401 7.91756 8.0401 8.08066 7.87969L11.8731 4.28399C12.0423 4.12899 12.0423 3.87102 11.8731 3.71638L8.08066 0.120315Z" fill="#3183FF"/></svg>
                  </a>
                </div>
              </div>
              <h3 class="serts__item-title">Государственная лицензия на право ведения образовательной деятельности</h3>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="serts__item">
              <div  class="serts__item-img">
                <div class='serts__item-img-ratio'>
                  <img src="assets/images/serts1.png" alt="">
                </div>
                <div class="serts__item-hover">
                  <p>Посмотреть на сайте Рособрнадзора</p>
                  <a href="#" class="btn btn--white">Посмотреть
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.08066 0.120315C7.91718 -0.0401043 7.64509 -0.0401043 7.4759 0.120315C7.31242 0.275314 7.31242 0.533286 7.4759 0.687924L10.5424 3.59534L0.423372 3.59534C0.187487 3.5957 3.69496e-07 3.77346 3.49944e-07 3.99711C-6.23282e-07 4.22076 0.187487 4.4043 0.423372 4.4043L10.5424 4.4043L7.4759 7.3063C7.31242 7.46671 7.31242 7.72505 7.4759 7.87969C7.64509 8.0401 7.91756 8.0401 8.08066 7.87969L11.8731 4.28399C12.0423 4.12899 12.0423 3.87102 11.8731 3.71638L8.08066 0.120315Z" fill="#3183FF"/></svg>
                  </a>
                </div>
              </div>
              <h3 class="serts__item-title">Государственная лицензия на право ведения образовательной деятельности</h3>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="serts__item">
              <div  class="serts__item-img">
                <div class='serts__item-img-ratio'>
                  <img src="assets/images/serts1.png" alt="">
                </div>
                <div class="serts__item-hover">
                  <p>Посмотреть на сайте Рособрнадзора</p>
                  <a href="#" class="btn btn--white">Посмотреть
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.08066 0.120315C7.91718 -0.0401043 7.64509 -0.0401043 7.4759 0.120315C7.31242 0.275314 7.31242 0.533286 7.4759 0.687924L10.5424 3.59534L0.423372 3.59534C0.187487 3.5957 3.69496e-07 3.77346 3.49944e-07 3.99711C-6.23282e-07 4.22076 0.187487 4.4043 0.423372 4.4043L10.5424 4.4043L7.4759 7.3063C7.31242 7.46671 7.31242 7.72505 7.4759 7.87969C7.64509 8.0401 7.91756 8.0401 8.08066 7.87969L11.8731 4.28399C12.0423 4.12899 12.0423 3.87102 11.8731 3.71638L8.08066 0.120315Z" fill="#3183FF"/></svg>
                  </a>
                </div>
              </div>
              <h3 class="serts__item-title">Государственная лицензия на право ведения образовательной деятельности</h3>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="serts__item">
              <div  class="serts__item-img">
                <div class='serts__item-img-ratio'>
                  <img src="assets/images/serts1.png" alt="">
                </div>
                <div class="serts__item-hover">
                  <p>Посмотреть на сайте Рособрнадзора</p>
                  <a href="#" class="btn btn--white">Посмотреть
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.08066 0.120315C7.91718 -0.0401043 7.64509 -0.0401043 7.4759 0.120315C7.31242 0.275314 7.31242 0.533286 7.4759 0.687924L10.5424 3.59534L0.423372 3.59534C0.187487 3.5957 3.69496e-07 3.77346 3.49944e-07 3.99711C-6.23282e-07 4.22076 0.187487 4.4043 0.423372 4.4043L10.5424 4.4043L7.4759 7.3063C7.31242 7.46671 7.31242 7.72505 7.4759 7.87969C7.64509 8.0401 7.91756 8.0401 8.08066 7.87969L11.8731 4.28399C12.0423 4.12899 12.0423 3.87102 11.8731 3.71638L8.08066 0.120315Z" fill="#3183FF"/></svg>
                  </a>
                </div>
              </div>
              <h3 class="serts__item-title">Государственная лицензия на право ведения образовательной деятельности</h3>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="serts__item">
              <div  class="serts__item-img">
                <div class='serts__item-img-ratio'>
                  <img src="assets/images/serts1.png" alt="">
                </div>
                <div class="serts__item-hover">
                  <p>Посмотреть на сайте Рособрнадзора</p>
                  <a href="#" class="btn btn--white">Посмотреть
                    <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.08066 0.120315C7.91718 -0.0401043 7.64509 -0.0401043 7.4759 0.120315C7.31242 0.275314 7.31242 0.533286 7.4759 0.687924L10.5424 3.59534L0.423372 3.59534C0.187487 3.5957 3.69496e-07 3.77346 3.49944e-07 3.99711C-6.23282e-07 4.22076 0.187487 4.4043 0.423372 4.4043L10.5424 4.4043L7.4759 7.3063C7.31242 7.46671 7.31242 7.72505 7.4759 7.87969C7.64509 8.0401 7.91756 8.0401 8.08066 7.87969L11.8731 4.28399C12.0423 4.12899 12.0423 3.87102 11.8731 3.71638L8.08066 0.120315Z" fill="#3183FF"/></svg>
                  </a>
                </div>
              </div>
              <h3 class="serts__item-title">Государственная лицензия на право ведения образовательной деятельности</h3>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
<section class="diploms" id='diploms'>
  <div class="center-wrap">
    <h2 class="h2 h2--round diploms__title">Ваш будущий диплом</h2>
    <div class="diploms__slider">
      <div class="diploms__slider-arrow diploms__slider-arrow--prev"><svg width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.31854 12.8566L10.1195 23.6457C10.5495 24.1181 11.2463 24.1181 11.6775 23.6457C12.1075 23.1733 12.1075 22.4061 11.6775 21.9337L2.65391 12.0006L11.6764 2.06752C12.1064 1.59514 12.1064 0.827864 11.6764 0.354287C11.2463 -0.118096 10.5485 -0.118096 10.1184 0.354287L0.317454 11.1433C-0.105999 11.6108 -0.105999 12.3902 0.31854 12.8566Z" fill="#58646B"/></svg></div>
      <div class="diploms__slider-arrow diploms__slider-arrow--next">
        <svg width="12" height="25" viewBox="0 0 12 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.6815 12.1395L1.88051 1.35038C1.45045 0.877999 0.75369 0.877999 0.322545 1.35038C-0.107514 1.82276 -0.107514 2.59004 0.322545 3.06242L9.34609 12.9955L0.32363 22.9286C-0.10643 23.401 -0.10643 24.1682 0.323629 24.6418C0.753689 25.1142 1.45154 25.1142 1.8816 24.6418L11.6825 13.8528C12.106 13.3853 12.106 12.6059 11.6815 12.1395Z" fill="#58646B"/></svg>
      </div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="diploms__item">
              <div  class="diploms__item-img">
                <div class='diploms__item-img-ratio'>
                  <img src="assets/images/diplom1.png" alt="">
                </div>
                <a data-fancybox="diploms" href="assets/images/diplom1.png" class="diploms__item-hover">
                  <svg width="41" height="43" viewBox="0 0 41 43" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.9798 16.3673H18.0201V11.4077C18.0201 10.9514 17.6498 10.5811 17.1935 10.5811C16.7372 10.5811 16.3669 10.9514 16.3669 11.4077V16.3673H11.4072C10.9509 16.3673 10.5806 16.7377 10.5806 17.194C10.5806 17.6502 10.9509 18.0206 11.4072 18.0206H16.3669V22.9802C16.3669 23.4365 16.7372 23.8069 17.1935 23.8069C17.6498 23.8069 18.0201 23.4365 18.0201 22.9802V18.0206H22.9798C23.4361 18.0206 23.8064 17.6502 23.8064 17.194C23.8064 16.7377 23.4361 16.3673 22.9798 16.3673Z" fill="white"/><path d="M40.776 40.9698L28.8304 28.622C31.8773 25.5848 33.7649 21.3978 33.7649 16.7801C33.7649 7.52707 26.1919 0 16.8825 0C7.57299 0 0 7.52707 0 16.7801C0 26.0331 7.57299 33.5602 16.8825 33.5602C20.9688 33.5602 24.7191 32.1083 27.6422 29.6992L39.6167 42.0773C39.7743 42.2411 39.9849 42.3226 40.1963 42.3226C40.3973 42.3226 40.5975 42.2483 40.7534 42.0996C41.0734 41.7936 41.0831 41.2878 40.776 40.9698ZM1.60785 16.7801C1.60785 8.40842 8.45972 1.5981 16.8825 1.5981C25.3052 1.5981 32.1571 8.40842 32.1571 16.7801C32.1571 25.1518 25.3052 31.9621 16.8825 31.9621C8.45972 31.9621 1.60785 25.1518 1.60785 16.7801Z" fill="white"/></svg>
                </a>
              </div>
              <h3 class="diploms__item-title">Государственный диплом о высшем образовании с присвоением степени бакалавра</h3>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="diploms__item">
              <div  class="diploms__item-img">
                <div class='diploms__item-img-ratio'>
                  <img src="assets/images/diplom1.png" alt="">
                </div>
                <a data-fancybox="diploms" href="assets/images/diplom1.png" class="diploms__item-hover">
                  <svg width="41" height="43" viewBox="0 0 41 43" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.9798 16.3673H18.0201V11.4077C18.0201 10.9514 17.6498 10.5811 17.1935 10.5811C16.7372 10.5811 16.3669 10.9514 16.3669 11.4077V16.3673H11.4072C10.9509 16.3673 10.5806 16.7377 10.5806 17.194C10.5806 17.6502 10.9509 18.0206 11.4072 18.0206H16.3669V22.9802C16.3669 23.4365 16.7372 23.8069 17.1935 23.8069C17.6498 23.8069 18.0201 23.4365 18.0201 22.9802V18.0206H22.9798C23.4361 18.0206 23.8064 17.6502 23.8064 17.194C23.8064 16.7377 23.4361 16.3673 22.9798 16.3673Z" fill="white"/><path d="M40.776 40.9698L28.8304 28.622C31.8773 25.5848 33.7649 21.3978 33.7649 16.7801C33.7649 7.52707 26.1919 0 16.8825 0C7.57299 0 0 7.52707 0 16.7801C0 26.0331 7.57299 33.5602 16.8825 33.5602C20.9688 33.5602 24.7191 32.1083 27.6422 29.6992L39.6167 42.0773C39.7743 42.2411 39.9849 42.3226 40.1963 42.3226C40.3973 42.3226 40.5975 42.2483 40.7534 42.0996C41.0734 41.7936 41.0831 41.2878 40.776040.9698ZM1.60785 16.7801C1.60785 8.40842 8.45972 1.5981 16.8825 1.5981C25.3052 1.5981 32.1571 8.40842 32.1571 16.7801C32.1571 25.1518 25.3052 31.9621 16.8825 31.9621C8.45972 31.9621 1.60785 25.1518 1.60785 16.7801Z" fill="white"/></svg>
                </a>
              </div>
              <h3 class="diploms__item-title">Государственный диплом о высшем образовании с присвоением степени магистра</h3>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="diploms__item">
              <div  class="diploms__item-img">
                <div class='diploms__item-img-ratio'>
                  <img src="assets/images/diplom2.png" alt="">
                </div>
                <a data-fancybox="diploms" href="assets/images/diplom2.png" class="diploms__item-hover">
                  <svg width="41" height="43" viewBox="0 0 41 43" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.9798 16.3673H18.0201V11.4077C18.0201 10.9514 17.6498 10.5811 17.1935 10.5811C16.7372 10.5811 16.3669 10.9514 16.3669 11.4077V16.3673H11.4072C10.9509 16.3673 10.5806 16.7377 10.5806 17.194C10.5806 17.6502 10.9509 18.0206 11.4072 18.0206H16.3669V22.9802C16.3669 23.4365 16.7372 23.8069 17.1935 23.8069C17.6498 23.8069 18.0201 23.4365 18.0201 22.9802V18.0206H22.9798C23.4361 18.0206 23.8064 17.6502 23.8064 17.194C23.8064 16.7377 23.4361 16.3673 22.9798 16.3673Z" fill="white"/><path d="M40.776 40.9698L28.8304 28.622C31.8773 25.5848 33.7649 21.3978 33.7649 16.7801C33.7649 7.52707 26.1919 0 16.8825 0C7.57299 0 0 7.52707 0 16.7801C0 26.0331 7.57299 33.5602 16.8825 33.5602C20.9688 33.5602 24.7191 32.1083 27.6422 29.6992L39.6167 42.0773C39.7743 42.2411 39.9849 42.3226 40.1963 42.3226C40.3973 42.3226 40.5975 42.2483 40.7534 42.0996C41.0734 41.7936 41.0831 41.2878 40.776 40.9698ZM1.60785 16.7801C1.60785 8.40842 8.45972 1.5981 16.8825 1.5981C25.3052 1.5981 32.1571 8.40842 32.1571 16.7801C32.1571 25.1518 25.3052 31.9621 16.8825 31.9621C8.45972 31.9621 1.60785 25.1518 1.60785 16.7801Z" fill="white"/></svg>
                </a>
              </div>
              <h3 class="diploms__item-title">Диплом о профессиональной переподготовке, приравниваемй по статусу ко второму высшему образованию</h3>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="diploms__item">
              <div  class="diploms__item-img">
                <div class='diploms__item-img-ratio'>
                  <img src="assets/images/diplom1.png" alt="">
                </div>
                <a data-fancybox="diploms" href="assets/images/diplom1.png" class="diploms__item-hover">
                  <svg width="41" height="43" viewBox="0 0 41 43" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.9798 16.3673H18.0201V11.4077C18.0201 10.9514 17.6498 10.5811 17.1935 10.5811C16.7372 10.5811 16.3669 10.9514 16.3669 11.4077V16.3673H11.4072C10.9509 16.3673 10.5806 16.7377 10.5806 17.194C10.5806 17.6502 10.9509 18.0206 11.4072 18.0206H16.3669V22.9802C16.3669 23.4365 16.7372 23.8069 17.1935 23.8069C17.6498 23.8069 18.0201 23.4365 18.0201 22.9802V18.0206H22.9798C23.4361 18.0206 23.8064 17.6502 23.8064 17.194C23.8064 16.7377 23.4361 16.3673 22.9798 16.3673Z" fill="white"/><path d="M40.776 40.9698L28.8304 28.622C31.8773 25.5848 33.7649 21.3978 33.7649 16.7801C33.7649 7.52707 26.1919 0 16.8825 0C7.57299 0 0 7.52707 0 16.7801C0 26.0331 7.57299 33.5602 16.8825 33.5602C20.9688 33.5602 24.7191 32.1083 27.6422 29.6992L39.6167 42.0773C39.7743 42.2411 39.9849 42.3226 40.1963 42.3226C40.3973 42.3226 40.5975 42.2483 40.7534 42.0996C41.0734 41.7936 41.0831 41.2878 40.776 40.9698ZM1.60785 16.7801C1.60785 8.40842 8.45972 1.5981 16.8825 1.5981C25.3052 1.5981 32.1571 8.40842 32.1571 16.7801C32.1571 25.1518 25.3052 31.9621 16.8825 31.9621C8.45972 31.9621 1.60785 25.1518 1.60785 16.7801Z" fill="white"/></svg>
                </a>
              </div>
              <h3 class="diploms__item-title">Государственный диплом о высшем образовании с присвоением степени бакалавра</h3>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="diploms__item">
              <div  class="diploms__item-img">
                <div class='diploms__item-img-ratio'>
                  <img src="assets/images/diplom1.png" alt="">
                </div>
                <a data-fancybox="diploms" href="assets/images/diplom1.png" class="diploms__item-hover">
                  <svg width="41" height="43" viewBox="0 0 41 43" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M22.9798 16.3673H18.0201V11.4077C18.0201 10.9514 17.6498 10.5811 17.1935 10.5811C16.7372 10.5811 16.3669 10.9514 16.3669 11.4077V16.3673H11.4072C10.9509 16.3673 10.5806 16.7377 10.5806 17.194C10.5806 17.6502 10.9509 18.0206 11.4072 18.0206H16.3669V22.9802C16.3669 23.4365 16.7372 23.8069 17.1935 23.8069C17.6498 23.8069 18.0201 23.4365 18.0201 22.9802V18.0206H22.9798C23.4361 18.0206 23.8064 17.6502 23.8064 17.194C23.8064 16.7377 23.4361 16.3673 22.9798 16.3673Z" fill="white"/><path d="M40.776 40.9698L28.8304 28.622C31.8773 25.5848 33.7649 21.3978 33.7649 16.7801C33.7649 7.52707 26.1919 0 16.8825 0C7.57299 0 0 7.52707 0 16.7801C0 26.0331 7.57299 33.5602 16.8825 33.5602C20.9688 33.5602 24.7191 32.1083 27.6422 29.6992L39.6167 42.0773C39.7743 42.2411 39.9849 42.3226 40.1963 42.3226C40.3973 42.3226 40.5975 42.2483 40.7534 42.0996C41.0734 41.7936 41.0831 41.2878 40.776 40.9698ZM1.60785 16.7801C1.60785 8.40842 8.45972 1.5981 16.8825 1.5981C25.3052 1.5981 32.1571 8.40842 32.1571 16.7801C32.1571 25.1518 25.3052 31.9621 16.8825 31.9621C8.45972 31.9621 1.60785 25.1518 1.60785 16.7801Z" fill="white"/></svg>
                </a>
              </div>
              <h3 class="diploms__item-title">Государственный диплом о высшем образовании с присвоением степени бакалавра</h3>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
<section class="scheme toogles__wrap" id='scheme'>
  <div class="center-wrap">
    <h2 class="h2 h2--round scheme__title">Как проходит зачисление и обучение</h2>
    <div class="scheme__wrap">
      <div class="scheme__line">
        <div class="scheme__line-item">
          <div class='scheme__line-round'>
            <div></div>
          </div>
        </div>
        <div class="scheme__line-item">
          <div class='scheme__line-round'>
            <div></div>
          </div>
        </div>	
        <div class="scheme__line-item">
          <div class='scheme__line-round'>
            <div></div>
          </div>
        </div>	
      </div>
      <div class="scheme__nav">
        <div class="toogles__item-title toogles__item-title--active scheme__nav-link" data-toogles='1'>
          Поступление
          <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.67489 6.90727L0.947871 2.1818C0.867743 2.10165 0.827637 2.00942 0.827637 1.90523C0.827637 1.80103 0.867701 1.7088 0.947871 1.62883L1.54933 1.02755C1.62954 0.947446 1.72176 0.907227 1.82574 0.907227C1.93 0.907227 2.02222 0.947446 2.10239 1.02755L7.70749 6.63066C7.78766 6.7108 7.82764 6.80303 7.82764 6.90723C7.82764 7.01146 7.78766 7.10365 7.70749 7.1838L2.10269 12.7869C2.02239 12.8672 1.93009 12.9072 1.82586 12.9072C1.72176 12.9072 1.62954 12.8672 1.54938 12.7869L0.947913 12.186C0.867785 12.1059 0.827806 12.0136 0.827806 11.9094C0.827806 11.8052 0.867743 11.7131 0.947913 11.6329L5.67489 6.90727Z" fill="#939393"/></svg>
        </div>
        <div class="toogles__item-title scheme__nav-link" data-toogles='2'>
          Обучение
          <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.67489 6.90727L0.947871 2.1818C0.867743 2.10165 0.827637 2.00942 0.827637 1.90523C0.827637 1.80103 0.867701 1.7088 0.947871 1.62883L1.54933 1.02755C1.62954 0.947446 1.72176 0.907227 1.82574 0.907227C1.93 0.907227 2.02222 0.947446 2.10239 1.02755L7.70749 6.63066C7.78766 6.7108 7.82764 6.80303 7.82764 6.90723C7.82764 7.01146 7.78766 7.10365 7.70749 7.1838L2.10269 12.7869C2.02239 12.8672 1.93009 12.9072 1.82586 12.9072C1.72176 12.9072 1.62954 12.8672 1.54938 12.7869L0.947913 12.186C0.867785 12.1059 0.827806 12.0136 0.827806 11.9094C0.827806 11.8052 0.867743 11.7131 0.947913 11.6329L5.67489 6.90727Z" fill="#939393"/></svg>
        </div>
        <div class="toogles__item-title scheme__nav-link" data-toogles='3'>
          Завершение обучения
          <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.67489 6.90727L0.947871 2.1818C0.867743 2.10165 0.827637 2.00942 0.827637 1.90523C0.827637 1.80103 0.867701 1.7088 0.947871 1.62883L1.54933 1.02755C1.62954 0.947446 1.72176 0.907227 1.82574 0.907227C1.93 0.907227 2.02222 0.947446 2.10239 1.02755L7.70749 6.63066C7.78766 6.7108 7.82764 6.80303 7.82764 6.90723C7.82764 7.01146 7.78766 7.10365 7.70749 7.1838L2.10269 12.7869C2.02239 12.8672 1.93009 12.9072 1.82586 12.9072C1.72176 12.9072 1.62954 12.8672 1.54938 12.7869L0.947913 12.186C0.867785 12.1059 0.827806 12.0136 0.827806 11.9094C0.827806 11.8052 0.867743 11.7131 0.947913 11.6329L5.67489 6.90727Z" fill="#939393"/></svg>
        </div>
      </div>
      <div class="toogles__item-title scheme__nav-link--mobile toogles__item-title--active scheme__nav-link" data-toogles='1'>
        <div class="scheme__line-item">
          <div class='scheme__line-round'>
            <div></div>
          </div>
        </div>
        Поступление
        <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.67489 6.90727L0.947871 2.1818C0.867743 2.10165 0.827637 2.00942 0.827637 1.90523C0.827637 1.80103 0.867701 1.7088 0.947871 1.62883L1.54933 1.02755C1.62954 0.947446 1.72176 0.907227 1.82574 0.907227C1.93 0.907227 2.02222 0.947446 2.10239 1.02755L7.70749 6.63066C7.78766 6.7108 7.82764 6.80303 7.82764 6.90723C7.82764 7.01146 7.78766 7.10365 7.70749 7.1838L2.10269 12.7869C2.02239 12.8672 1.93009 12.9072 1.82586 12.9072C1.72176 12.9072 1.62954 12.8672 1.54938 12.7869L0.947913 12.186C0.867785 12.1059 0.827806 12.0136 0.827806 11.9094C0.827806 11.8052 0.867743 11.7131 0.947913 11.6329L5.67489 6.90727Z" fill="#939393"/></svg>
      </div>
      <div class="toogles__item toogles__item--active" data-toogles='1'>
        <div class="toogles__item-content" style='display: block;'>
          <div>
            <div class="scheme__items">
              <div class="scheme__item">
                <span class="scheme__item-number">01</span>
                <div class="scheme__item-content">
                  <p>Вы оставляете заявку и с Вами связывается специалист приемной комиссии, чтобы подобрать нужную программу обучения и более подробно рассказать о процессе обучения, ответить на интересующие Вас вопросы.</p>
                </div>
              </div>
              <div class="scheme__item">
                <span class="scheme__item-number">02</span>
                <div class="scheme__item-content">
                  <p>Ваш консультант презентует Вам программу обучения, знакомит Вас с системой дистанционного обучения, предоставляет демо-доступ к личному кабинету и учебным материалам.</p>
                </div>
              </div>
              <div class="scheme__item">
                <span class="scheme__item-number">03</span>
                <div class="scheme__item-content">
                  <p>После ознакомления с продуктами Академии, обмена необходимыми документами и заключения договора на обучение, Вы осуществляете оплату и Вам предоставляется полный доступ к системе дистанционного обучения СБА.</p>
                </div>
              </div>
            </div>		
          </div>
        </div>
      </div>
      <div class="toogles__item-title scheme__nav-link--mobile scheme__nav-link" data-toogles='2'>
        <div class="scheme__line-item">
          <div class='scheme__line-round'>
            <div></div>
          </div>
        </div>
        Обучение
        <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.67489 6.90727L0.947871 2.1818C0.867743 2.10165 0.827637 2.00942 0.827637 1.90523C0.827637 1.80103 0.867701 1.7088 0.947871 1.62883L1.54933 1.02755C1.62954 0.947446 1.72176 0.907227 1.82574 0.907227C1.93 0.907227 2.02222 0.947446 2.10239 1.02755L7.70749 6.63066C7.78766 6.7108 7.82764 6.80303 7.82764 6.90723C7.82764 7.01146 7.78766 7.10365 7.70749 7.1838L2.10269 12.7869C2.02239 12.8672 1.93009 12.9072 1.82586 12.9072C1.72176 12.9072 1.62954 12.8672 1.54938 12.7869L0.947913 12.186C0.867785 12.1059 0.827806 12.0136 0.827806 11.9094C0.827806 11.8052 0.867743 11.7131 0.947913 11.6329L5.67489 6.90727Z" fill="#939393"/></svg>
      </div>
      <div class="toogles__item" data-toogles='2'>
        <div class="toogles__item-content">
          <div>
            <div class="scheme__items">
              <div class="scheme__item">
                <span class="scheme__item-number">04</span>
                <div class="scheme__item-content">
                  <p>Вы оставляете заявку и с Вами связывается специалист приемной комиссии, чтобы подобрать нужную программу обучения и более подробно рассказать о процессе обучения, ответить на интересующие Вас вопросы.</p>
                </div>
              </div>
              <div class="scheme__item">
                <span class="scheme__item-number">05</span>
                <div class="scheme__item-content">
                  <p>Ваш консультант презентует Вам программу обучения, знакомит Вас с системой дистанционного обучения, предоставляет демо-доступ к личному кабинету и учебным материалам.</p>
                </div>
              </div>
              <div class="scheme__item">
                <span class="scheme__item-number">06</span>
                <div class="scheme__item-content">
                  <p>После ознакомления с продуктами Академии, обмена необходимыми документами и заключения договора на обучение, Вы осуществляете оплату и Вам предоставляется полный доступ к системе дистанционного обучения СБА.</p>
                </div>
              </div>
            </div>		
          </div>
        </div>
      </div>
      <div class="toogles__item-title scheme__nav-link--mobile scheme__nav-link" data-toogles='3'>
        <div class="scheme__line-item">
          <div class='scheme__line-round'>
            <div></div>
          </div>
        </div>
        Завершение обучения
        <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.67489 6.90727L0.947871 2.1818C0.867743 2.10165 0.827637 2.00942 0.827637 1.90523C0.827637 1.80103 0.867701 1.7088 0.947871 1.62883L1.54933 1.02755C1.62954 0.947446 1.72176 0.907227 1.82574 0.907227C1.93 0.907227 2.02222 0.947446 2.10239 1.02755L7.70749 6.63066C7.78766 6.7108 7.82764 6.80303 7.82764 6.90723C7.82764 7.01146 7.78766 7.10365 7.70749 7.1838L2.10269 12.7869C2.02239 12.8672 1.93009 12.9072 1.82586 12.9072C1.72176 12.9072 1.62954 12.8672 1.54938 12.7869L0.947913 12.186C0.867785 12.1059 0.827806 12.0136 0.827806 11.9094C0.827806 11.8052 0.867743 11.7131 0.947913 11.6329L5.67489 6.90727Z" fill="#939393"/></svg>
      </div>
      <div class="toogles__item" data-toogles='3'>
        <div class="toogles__item-content">
          <div>
            <div class="scheme__items">
              <div class="scheme__item">
                <span class="scheme__item-number">07</span>
                <div class="scheme__item-content">
                  <p>Вы оставляете заявку и с Вами связывается специалист приемной комиссии, чтобы подобрать нужную программу обучения и более подробно рассказать о процессе обучения, ответить на интересующие Вас вопросы.</p>
                </div>
              </div>
              <div class="scheme__item">
                <span class="scheme__item-number">08</span>
                <div class="scheme__item-content">
                  <p>Ваш консультант презентует Вам программу обучения, знакомит Вас с системой дистанционного обучения, предоставляет демо-доступ к личному кабинету и учебным материалам.</p>
                </div>
              </div>
              <div class="scheme__item">
                <span class="scheme__item-number">09</span>
                <div class="scheme__item-content">
                  <p>После ознакомления с продуктами Академии, обмена необходимыми документами и заключения договора на обучение, Вы осуществляете оплату и Вам предоставляется полный доступ к системе дистанционного обучения СБА.</p>
                </div>
              </div>
            </div>		
          </div>
        </div>
      </div>
    </div>
    <div class="add-block add-block--reverse">
      <div class="add-block__content">
        <p>Получите демо-доступ к <span>личному кабинету</span> студента </p>
      </div>
      <span class="btn" onclick='show_popup("callback")'>ПОЛУЧИТЬ</span>
    </div>
  </div>
</section>
<section class="total">
  <div class="center-wrap">
    <h2 class="h2 h2--round total__title">По итогу обучения вы</h2>
    <div class="total__list">
      <div class="total__item">
        <div class="total__item-img">
          <img src="assets/images/total1.png" alt="">
        </div>
        <div class="total__item-text">
          <p>Будете<br> претендовать на<br> более высокую ЗП</p>
        </div>
      </div>
      <div class="total__item">
        <div class="total__item-img">
          <img src="assets/images/total2.png" alt="">
        </div>
        <div class="total__item-text">
          <p>Приобретете десятки<br> новых навыков</p>
        </div>
      </div>
      <div class="total__item">
        <div class="total__item-img">
          <img src="assets/images/total3.png" alt="">
        </div>
        <div class="total__item-text">
          <p>Освоите интересную<br> для себя профессию</p>
        </div>
      </div>
      <div class="total__item">
        <div class="total__item-img">
          <img src="assets/images/total4.png" alt="">
        </div>
        <div class="total__item-text">
          <p>Получите престижные<br> дипломы</p>
        </div>
      </div>
      <div class="total__item">
        <div class="total__item-img">
          <img src="assets/images/total5.png" alt="">
        </div>
        <div class="total__item-text">
          <p>Станете более<br> востребованным<br> специалистом</p>
        </div>
      </div>
      <div class="total__item">
        <div class="total__item-img">
          <img src="assets/images/total6.png" alt="">
        </div>
        <div class="total__item-text">
          <p>Обзаведетесь полезными<br> знакомствами</p>
        </div>
      </div>
    </div>
    <div class="add-block">
      <div class="add-block__content">
        <p>Получите <span>список самых востребованных специальностей</span> на ближайшие 5 лет</p>
      </div>
      <span class="btn" onclick='show_popup("callback")'>ПОЛУЧИТЬ</span>
    </div>
  </div>
</section>
<section class="docs" id='docs'>
  <div class="center-wrap">
    <h2 class="docs__title h2 h2--round">Для дистанционного и заочного обучения в ВУЗе требуется всего <span>3 документа</span> и фото</h2>
    <div class="docs__list">

      <div class="docs__item">
        <span class="docs__item-number">01</span>
        <div class="docs__item-img">
          <img src="assets/images/docs1.png">
        </div>
        <h3 class="docs__item-title">Паспорт</h3>
      </div>
      <div class="docs__sep"></div>	
      <div class="docs__item">
        <span class="docs__item-number">02</span>
        <div class="docs__item-img">
          <img src="assets/images/docs2.png">
        </div>
        <h3 class="docs__item-title">Аттестат</h3>
      </div>
      <div class="docs__sep"></div>	
      <div class="docs__item">
        <span class="docs__item-number">03</span>
        <div class="docs__item-img">
          <img src="assets/images/docs3.png">
        </div>
        <h3 class="docs__item-title">ЕГЭ или<br>
        диплом колледжа</h3>
      </div>
      <div class="docs__sep"></div>	
      <div class="docs__item">
        <span class="docs__item-number">04</span>
        <div class="docs__item-img">
          <img src="assets/images/docs4.png">
        </div>
        <h3 class="docs__item-title">4 фото</h3>
      </div>

    </div>
    <div class="add-block">
      <div class="add-block__content">
        <p>Нет ЕГЭ или диплома колледжа, что делать?</p>
      </div>
      <span class="btn" onclick='show_popup("callback")'>Узнать</span>
    </div>
  </div>
</section>
<section class="tarifs" id='tarifs'>
  <div class="center-wrap">
    <h2 class="h2 h2--round tarifs__title">Стоимость программы и срок обучения</h2>
    <div class="tarifs__sub-title">
      <p>Выгодная стоимость обучения за счет применения дистанционных образовательных технологий</p>
    </div>
    <div class="tarifs__list">
      <div class="tarif">
        <h3 class="tarif__title">Бакалавриат партнеров & MBA (ИПО)</h3>
        <div class="tarif__content">
          <div class="tarif__list">
            <div class="tarif__item">
              <span class='tarif__item-name'>Срок обучения:</span>
              <span class='tarif__item-value'>4 года</span>
            </div>
            <div class="tarif__item">
              <span class='tarif__item-name'>Кол-во направлений:</span>
              <span class='tarif__item-value'>200</span>
            </div>
            <div class="tarif__item">
              <span class='tarif__item-name'>Форма диплома: </span>
              <span class='tarif__item-value'>Гос. образца</span>
            </div>
            <div class="tarif__item">
              <span class='tarif__item-name'>Аккредитация: </span>
              <span class='tarif__item-value'>есть</span>
            </div>
            <div class="tarif__item">
              <span class='tarif__item-name'>Форма обучения: </span>
              <span class='tarif__item-value'>дистанционно</span>
            </div>
            <div class="tarif__item">
              <span class='tarif__item-name'>Сдача зачетов: </span>
              <span class='tarif__item-value'>дистанционно</span>
            </div>
            <div class="tarif__item">
              <span class='tarif__item-name'>Сроки зачисления: </span>
              <span class='tarif__item-value'>каждый месяц</span>
            </div>	
          </div>
          <div class="tarif__price">
            <span class="tarif__price-old">34 700</span>
            <div class="tarif__price-main">
              <span class="tarif__price-from">от</span>
              <span class="tarif__price-now">17 350</span>
              <span class="tarif__price-rub">₽</span>
              <span class="tarif__price-semester">/ семестр</span>
            </div>
            <div class="tarif__price-sale">
              <p><span>*скидка 10% </span> при оплате за год</p>
            </div>
            <span class="btn" onclick='show_popup("callback")'>УЗНАТЬ ТОЧНУЮ СТОИМОСТЬ<em class='mobile'>Поступить</em></span>
          </div>
        </div>
      </div>
      <div class="tarif">
        <h3 class="tarif__title">Магистратура партнеров & MBA (ИПО)</h3>
        <div class="tarif__content">
          <div class="tarif__list">
            <div class="tarif__item">
              <span class='tarif__item-name'>Срок обучения:</span>
              <span class='tarif__item-value'>4 года</span>
            </div>
            <div class="tarif__item">
              <span class='tarif__item-name'>Кол-во направлений:</span>
              <span class='tarif__item-value'>200</span>
            </div>
            <div class="tarif__item">
              <span class='tarif__item-name'>Форма диплома: </span>
              <span class='tarif__item-value'>Гос. образца</span>
            </div>
            <div class="tarif__item">
              <span class='tarif__item-name'>Аккредитация: </span>
              <span class='tarif__item-value'>есть</span>
            </div>
            <div class="tarif__item">
              <span class='tarif__item-name'>Форма обучения: </span>
              <span class='tarif__item-value'>дистанционно</span>
            </div>
            <div class="tarif__item">
              <span class='tarif__item-name'>Сдача зачетов: </span>
              <span class='tarif__item-value'>дистанционно</span>
            </div>
            <div class="tarif__item">
              <span class='tarif__item-name'>Сроки зачисления: </span>
              <span class='tarif__item-value'>каждый месяц</span>
            </div>	
          </div>
          <div class="tarif__price">
            <span class="tarif__price-old">41 040</span>
            <div class="tarif__price-main">
              <span class="tarif__price-from">от</span>
              <span class="tarif__price-now">20 520</span>
              <span class="tarif__price-rub">₽</span>
              <span class="tarif__price-semester">/ семестр</span>
            </div>
            <div class="tarif__price-sale">
              <p><span>*скидка 10% </span> при оплате за год</p>
            </div>
            <span class="btn" onclick='show_popup("callback")'>УЗНАТЬ ТОЧНУЮ СТОИМОСТЬ<em class='mobile'>Поступить</em></span>
          </div>
        </div>
      </div>
    </div>
    <div class="add-block">
      <div class="add-block__content">
        <p>Хотите еще <span>дешевле</span>? Дополнительные скидки на обучение до 50% для различных групп лиц </p>
      </div>
      <span class="btn" onclick='show_popup("sale")'>Получить</span>
    </div>
  </div>
</section>
<section class="modern">
  <div class="center-wrap">
    <div class="modern__wrap">
      <div class="modern__left">
        <h2 class="h2 h2--round modern__title">Учитесь по программе, <span>адаптированной</span> под современные требования</h2>
        <div class="modern__text content content--large">
          <p>Мы постоянно берем обратную связь от работодателей и каждый месяц адаптируем учебные программы. Это в <span>12</span> раз быстрее обновления программы обучения в государственном ВУЗе.</p>
        </div>
      </div>
      <div class="modern__img">
        <img src="assets/images/modern__img.png" alt="">
      </div>
    </div>
  </div>
</section>
<section class="reviews" id='reviews'>
  <div class="center-wrap">
    <h2 class="h2 h2--round reviews__title">Узнайте, что о нас говорят наши <span>студенты</span> и <span>выпускники</span></h2>
    <div class="reviews__list">
      <div class="reviews__item">
        <div class="reviews__item-wrap">
          <div class="reviews__item-header">
            <span class="reviews__item-name">Имя Фамилия</span>
            <span class="reviews__item-faculty">Факультет</span>
            <img src='assets/images/reviews__quote.svg'class="reviews__item-quote" />
          </div>
          <div class="content">
            <p>Московский открытый институт является одним из самых прогрессивных и динамично развивающихся вузов России. Десятилетний опыт успешной работы на поприще образования позволили вузу добиться высоких показателей. Институт соответствует самым передовым требованиям, предъявляемым к современному образованию.</p>
          </div>
          <svg class='reviews__item-svg'width="43" height="35" viewBox="0 0 43 35" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect width="42.5" height="35" fill="url(#pattern0)"/><defs><pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlink:href="#image0" transform="scale(0.0117647 0.0142857)"/></pattern><image id="image0" width="85" height="70" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFUAAABGCAYAAAC9t9hvAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKkSURBVHgB7ZzhbdswEIWfjP5vRkg3aDaIR+gG6QbtBvUEbSdoukE6gTVCRrhOkHQC9Q62kEShI9FHSifyPoAIlMD58UH3RD0QbsB0XXfJP77zuuZ1gXEIegh6Ho9L+z/+Qce9rKZpSC6ao9A9r0s4Wr6x2J1I/cUXN3BSsRWpD5g28s40/mzgQlPzfgMnNeTjn54PcqdqtyTOAfG4lW3VOzgpIByFyoVnqp47Xle9UMGl6tixzE+8XkSojL9najzi7CvLvA390aXGQ3iWnyF8/ONoMcjPEC51Oj9Z5naYnyF8nzpOn59fpn5AMlXbJZYM8ZKn+33Mh3z8TyMit7FCBZcaRvJz9IF0Cpf6mqj8DOH71CfEg+RnCyX+9D8guXmVQqjg4w/8xsgbUiy1S5VC5GbKhj6GWvtUkfiZZd4hAyKVUBeExOM+pLbxbzGhENFSk9Td1EJESw2Z+mahnIPSpRLOKES0bFDug6rFmYWIllIztS+UCQtQolR1IaKlpEwlLJCfIUopVM4ulHNQgtTkhYiWtY+/5OcPGGOtUpMVyjlYo1SCsXEfsrZMfXXCziKbOQqGRARP2FlkDeM/eyGixbpUgvH8DGH5NbXFCvIzRC+VYIvJJ+wsYu1OjT5hZxFLmUowUohosXKnmipEtPRSl8wu1Qk7iywtdfX5GWKpTDVdiGhZIlOTnrCzyNxSzRXKOeil/kV+spyws8gcmZr1hJ1FckslVDDuQ3JmaouVFiJackmd7YSdRfrxJ6RhdYVyDlJmKqGQQkRLqvFvUVAhoiWF1EVP2FlEW6gUWYho6TM1VirB8/Mk54x/UYVyDmKlVlGIJKHruo/dOJ6dsbC0/QmZD7yu4cTD4i543Q6E7o9fr+xE0Ax/IXJx+OrPx1rf3bX8B0DRAEdMvCR6AAAAAElFTkSuQmCC"/></defs></svg>
        </div>
        <div class="reviews__item-img">
          <div><img src="assets/images/reviews1.png" alt=""></div>
        </div>
      </div>
      <div class="reviews__item">
        <div class="reviews__item-wrap">
          <div class="reviews__item-header">
            <span class="reviews__item-name">Имя Фамилия</span>
            <span class="reviews__item-faculty">Факультет</span>
            <img src='assets/images/reviews__quote.svg'class="reviews__item-quote" />
          </div>
          <div class="content">
            <p>Московский открытый институт является одним из самых прогрессивных и динамично развивающихся вузов России. Десятилетний опыт успешной работы на поприще образования позволили вузу добиться высоких показателей. Институт соответствует самым передовым требованиям, предъявляемым к современному образованию.</p>
          </div>
          <svg class='reviews__item-svg'width="43" height="35" viewBox="0 0 43 35" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect width="42.5" height="35" fill="url(#pattern0)"/><defs><pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlink:href="#image0" transform="scale(0.0117647 0.0142857)"/></pattern><image id="image0" width="85" height="70" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFUAAABGCAYAAAC9t9hvAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKkSURBVHgB7ZzhbdswEIWfjP5vRkg3aDaIR+gG6QbtBvUEbSdoukE6gTVCRrhOkHQC9Q62kEShI9FHSifyPoAIlMD58UH3RD0QbsB0XXfJP77zuuZ1gXEIegh6Ho9L+z/+Qce9rKZpSC6ao9A9r0s4Wr6x2J1I/cUXN3BSsRWpD5g28s40/mzgQlPzfgMnNeTjn54PcqdqtyTOAfG4lW3VOzgpIByFyoVnqp47Xle9UMGl6tixzE+8XkSojL9najzi7CvLvA390aXGQ3iWnyF8/ONoMcjPEC51Oj9Z5naYnyF8nzpOn59fpn5AMlXbJZYM8ZKn+33Mh3z8TyMit7FCBZcaRvJz9IF0Cpf6mqj8DOH71CfEg+RnCyX+9D8guXmVQqjg4w/8xsgbUiy1S5VC5GbKhj6GWvtUkfiZZd4hAyKVUBeExOM+pLbxbzGhENFSk9Td1EJESw2Z+mahnIPSpRLOKES0bFDug6rFmYWIllIztS+UCQtQolR1IaKlpEwlLJCfIUopVM4ulHNQgtTkhYiWtY+/5OcPGGOtUpMVyjlYo1SCsXEfsrZMfXXCziKbOQqGRARP2FlkDeM/eyGixbpUgvH8DGH5NbXFCvIzRC+VYIvJJ+wsYu1OjT5hZxFLmUowUohosXKnmipEtPRSl8wu1Qk7iywtdfX5GWKpTDVdiGhZIlOTnrCzyNxSzRXKOeil/kV+spyws8gcmZr1hJ1FckslVDDuQ3JmaouVFiJackmd7YSdRfrxJ6RhdYVyDlJmKqGQQkRLqvFvUVAhoiWF1EVP2FlEW6gUWYho6TM1VirB8/Mk54x/UYVyDmKlVlGIJKHruo/dOJ6dsbC0/QmZD7yu4cTD4i543Q6E7o9fr+xE0Ax/IXJx+OrPx1rf3bX8B0DRAEdMvCR6AAAAAElFTkSuQmCC"/></defs></svg>
        </div>
        <div class="reviews__item-img">
          <div><img src="assets/images/reviews2.png" alt=""></div>
        </div>
      </div>
      <div class="reviews__item">
        <div class="reviews__item-wrap">
          <div class="reviews__item-header">
            <span class="reviews__item-name">Имя Фамилия</span>
            <span class="reviews__item-faculty">Факультет</span>
            <img src='assets/images/reviews__quote.svg'class="reviews__item-quote" />
          </div>
          <div class="content">
            <p>Московский открытый институт является одним из самых прогрессивных и динамично развивающихся вузов России. Десятилетний опыт успешной работы на поприще образования позволили вузу добиться высоких показателей. Институт соответствует самым передовым требованиям, предъявляемым к современному образованию.</p>
          </div>
          <svg class='reviews__item-svg'width="43" height="35" viewBox="0 0 43 35" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><rect width="42.5" height="35" fill="url(#pattern0)"/><defs><pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlink:href="#image0" transform="scale(0.0117647 0.0142857)"/></pattern><image id="image0" width="85" height="70" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFUAAABGCAYAAAC9t9hvAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKkSURBVHgB7ZzhbdswEIWfjP5vRkg3aDaIR+gG6QbtBvUEbSdoukE6gTVCRrhOkHQC9Q62kEShI9FHSifyPoAIlMD58UH3RD0QbsB0XXfJP77zuuZ1gXEIegh6Ho9L+z/+Qce9rKZpSC6ao9A9r0s4Wr6x2J1I/cUXN3BSsRWpD5g28s40/mzgQlPzfgMnNeTjn54PcqdqtyTOAfG4lW3VOzgpIByFyoVnqp47Xle9UMGl6tixzE+8XkSojL9najzi7CvLvA390aXGQ3iWnyF8/ONoMcjPEC51Oj9Z5naYnyF8nzpOn59fpn5AMlXbJZYM8ZKn+33Mh3z8TyMit7FCBZcaRvJz9IF0Cpf6mqj8DOH71CfEg+RnCyX+9D8guXmVQqjg4w/8xsgbUiy1S5VC5GbKhj6GWvtUkfiZZd4hAyKVUBeExOM+pLbxbzGhENFSk9Td1EJESw2Z+mahnIPSpRLOKES0bFDug6rFmYWIllIztS+UCQtQolR1IaKlpEwlLJCfIUopVM4ulHNQgtTkhYiWtY+/5OcPGGOtUpMVyjlYo1SCsXEfsrZMfXXCziKbOQqGRARP2FlkDeM/eyGixbpUgvH8DGH5NbXFCvIzRC+VYIvJJ+wsYu1OjT5hZxFLmUowUohosXKnmipEtPRSl8wu1Qk7iywtdfX5GWKpTDVdiGhZIlOTnrCzyNxSzRXKOeil/kV+spyws8gcmZr1hJ1FckslVDDuQ3JmaouVFiJackmd7YSdRfrxJ6RhdYVyDlJmKqGQQkRLqvFvUVAhoiWF1EVP2FlEW6gUWYho6TM1VirB8/Mk54x/UYVyDmKlVlGIJKHruo/dOJ6dsbC0/QmZD7yu4cTD4i543Q6E7o9fr+xE0Ax/IXJx+OrPx1rf3bX8B0DRAEdMvCR6AAAAAElFTkSuQmCC"/></defs></svg>
        </div>
        <div class="reviews__item-img">
          <div><img src="assets/images/reviews1.png" alt=""></div>
        </div>
      </div>
    </div>
  </div>
</section>
<section class="callback">
  <div class="center-wrap">
    <div class="callback__wrap">
      <h2 class="h2 h2--round callback__title">Запишитесь на консультацию</h2>
      <div class="callback__sub-title">
        <p><span>Менеджер поможет Вам</span> в выборе направления и ответит на вопросы</p>
      </div>
      <form action="" class="inputs inputs--column">
        <input type="text" placeholder="Имя">
        <input type="text" placeholder="Телефон">
        <label class='btn'>Записаться</label>
      </form>
    </div>
  </div>
</section>
<div class="fixed-btn" onclick='show_popup("callback")'>
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.5965 14.2371L14.8167 11.4507C14.263 10.898 13.346 10.9148 12.7731 11.4893L11.3726 12.8926C11.2841 12.8437 11.1925 12.7927 11.0962 12.7385C10.2118 12.2474 9.0014 11.5742 7.72766 10.2967C6.45015 9.01641 5.77788 7.80136 5.28635 6.91439C5.23449 6.82043 5.18479 6.72983 5.13572 6.64379L6.07565 5.70313L6.53775 5.23941C7.11161 4.66409 7.12743 3.74536 6.57504 3.19103L3.79522 0.404295C3.24282 -0.149249 2.32549 -0.132456 1.75163 0.442856L0.968184 1.23259L0.989593 1.25389C0.726892 1.58985 0.507372 1.97733 0.344011 2.39519C0.193424 2.79293 0.0996685 3.17248 0.0567986 3.55281C-0.310259 6.60269 1.0803 9.39005 4.85409 13.1724C10.0706 18.4004 14.2744 18.0055 14.4558 17.9862C14.8508 17.9389 15.2293 17.8443 15.614 17.6946C16.0273 17.5327 16.4136 17.313 16.7486 17.0503L16.7658 17.0655L17.5594 16.2866C18.1321 15.7114 18.1486 14.7923 17.5965 14.2371Z" fill="white"/>
  </svg>
  <div class="fixed-btn__rings">
    <div class="fixed-btn__ring"></div>
    <div class="fixed-btn__ring"></div>
    <div class="fixed-btn__ring"></div>
  </div>
</div>
`
  return pageHTML
}

export { indexPage }
