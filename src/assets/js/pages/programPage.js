import { getReqProgram } from '../utils/getReqProgram'

const programPage = async () => {
  let program = await getReqProgram()

  if (!program) {
    program = {
      title: 'Название программы',
      level: 'Уровень',
      uni: 'Название Университета',
      description: 'Описание Программы',
      priceDisc: 'Цена со Скидкой',
      price: 'Цена',
      trainingPeriodFrom: 'Период обучения с',
      trainingPeriodTo: 'Период обучения до',
    }
  }

  const {
    title,
    level,
    uni,
    description,
    priceDisc,
    price,
    trainingPeriodFrom,
    trainingPeriodTo,
  } = program

  const pageHTML = /* html */ `
    <section class="programm-screen" style="background: url('/assets/images/programm-screen.png') no-repeat center / cover;">
      <div class="center-wrap">
        <div class="programm-screen__wrap">
          <div class="programm-screen__left">
            <div id="js-program-level" class="programm-screen__tag">${level}</div>
            <h1 id="js-program-title" class="programm-screen__title h2 h2--round">${title}</h1>
            <a href='#' target='_blank' class="programm-screen__institute btn btn--white btn--empty">Универрситет ${uni}</a>
          </div>
          <form class="programm-screen__form">
            <div class="programm-screen__form-title">Оставьте заявку на<span> поступление</span> или <span>консультацию</span>! </div>
            <div class="programm-screen__form-inputs inputs inputs--column">
              <input type="text" placeholder="Имя">
              <input type="text" placeholder="Телефон">
              <input class='btn' type="submit" value="Отправить">
            </div>	
          </form>
        </div>
      </div>
    </section>
    <section class="prog-features">
      <div class="center-wrap">
        <div class="prog-features__list">

          <div class="prog-features__item">
            <div class="prog-features__item-img">
              <img src="/assets/images/prog-features1.png">
            </div>
            <h3 class="prog-features__item-title">Срок обучения
              ${trainingPeriodFrom} —
            ${trainingPeriodTo}</h3>
          </div>

          <div class="prog-features__item">
            <div class="prog-features__item-img">
              <img src="/assets/images/prog-features2.png">
            </div>
            <h3 class="prog-features__item-title">Форма обучения
            дистанционная</h3>
          </div>

          <div class="prog-features__item">
            <div class="prog-features__item-img">
              <img src="/assets/images/prog-features3.png">
            </div>
            <h3 class="prog-features__item-title">Государственный диплом</h3>
          </div>

          <div class="prog-features__item">
            <div class="prog-features__item-img">
              <img src="/assets/images/prog-features4.png">
            </div>
            <h3 class="prog-features__item-title">Зачисление каждый месяц</h3>
          </div>

        </div>
        <section class="prog-text">
          <div class="center-wrap">
            <div class="prog-text__wrap">
              <div class="prog-text__text">
                ${description}
              </div>
            </div>
          </div>
        </section>
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
              <div class="tarif__price">
                <span class="tarif__price-old">${price}</span>
                <div class="tarif__price-main">
                  <span class="tarif__price-from">от</span>
                  <span class="tarif__price-now">${priceDisc}</span>
                  <span class="tarif__price-rub">₽</span>
                  <span class="tarif__price-semester">/ семестр</span>
                </div>
                <div class="tarif__price-sale">
                  <p><span>*скидка 10% </span> при оплате за год</p>
                </div>
                <span class="btn" onclick='show_popup("callback")'>Поступить <em>Поступить</em></span>
              </div>
            </div>
          </div>
                  <div class="add-block">
          <div class="add-block__content">
            <p>Хотите еще <span>дешевле</span>? Дополнительные скидки на обучение <strong><span>до 50%</span></strong> для различных групп лиц </p>
          </div>
          <span class="btn" onclick='show_popup("sale")'>Посмотреть</span>
        </div>
        </div>
      </div>
    </section>
  `

  return pageHTML
}

export { programPage }
