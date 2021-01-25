const quize = () => {
  class quize {
    constructor() {
      this.quize = document.querySelector('.quize')
      this.line = document.querySelector('.quize__line')
      this.answers = document.querySelectorAll('.quize__answer')
      this.nav = document.querySelector('.quize__nav')

      this.navPrev = document.querySelector('.quize__nav-back')
      this.navNext = document.querySelector('.quize__nav-next')

      this.toogleAnswers(this.answers)
      this.toogleSlides(this.navPrev, this.navNext)
      this.changeNav(this.activeIndex)
      this.changeSteps(this.activeIndex)

      this.quize.addEventListener('submit', this.onSubmit)
    }

    get activeTab() {
      return document.querySelector('.quize__tab--active')
    }

    get activeIndex() {
      return document
        .querySelector('.quize__tab--active')
        .getAttribute('data-tab')
    }

    get totalSlides() {
      return document.querySelectorAll('.quize__tab').length
    }

    onSubmit(event) {
      event.preventDefault()
      document.querySelector('.quize').classList.add('quize--thank')
      // $.ajax({
      //     type: 'post',
      //     url: '../send.php',
      //     data: $('#contact_form').serialize(),
      //     success:function(d) {
      //         alert(d);
      //     }
      // });
    }

    toogleAnswers(answers) {
      for (let i = 0; i < answers.length; i++) {
        answers[i].addEventListener('click', function () {
          this.closest('.quize__answers')
            .querySelector('.quize__answer--active')
            .classList.remove('quize__answer--active')
          this.classList.add('quize__answer--active')
          // console.log($('.quize').serializeArray());
        })
      }
    }

    toogleSlides(prev, next) {
      prev.addEventListener(
        'click',
        function () {
          if (this.activeIndex != 1) {
            this.changeSlide('prev')
          } else {
            console.log('нельзя переключить на слайд номер 0')
          }
        }.bind(this)
      )

      next.addEventListener(
        'click',
        function () {
          if (this.activeIndex != this.totalSlides) {
            this.changeSlide('next')
          } else {
            console.log('нельзя переключить на слайд номер последний + 1')
          }
        }.bind(this)
      )
    }

    changeSlide(direction) {
      let activeTab = this.activeTab
      activeTab.classList.remove('quize__tab--op1')
      activeTab.classList.add('quize__tab--op0')

      let xxx = function () {
        if (direction == 'next') {
          this.showSlide(+this.activeIndex + 1)
        } else if (direction == 'prev') {
          this.showSlide(+this.activeIndex - 1)
        }
        activeTab.classList.remove('quize__tab--op0')
        activeTab.classList.remove('quize__tab--active')
        activeTab.removeEventListener('transitionend', xxx)
      }.bind(this)

      activeTab.addEventListener('transitionend', xxx)
    }

    showSlide(index) {
      this.changeLine(index)
      this.changeSteps(index)
      this.changeNav(index)
      document
        .querySelector('.quize__tab[data-tab="' + index + '"]')
        .classList.add('quize__tab--active')
      document
        .querySelector('.quize__tab[data-tab="' + index + '"]')
        .classList.add('quize__tab--op0')
      raf(function () {
        document
          .querySelector('.quize__tab[data-tab="' + index + '"]')
          .classList.remove('quize__tab--op0')
        document
          .querySelector('.quize__tab[data-tab="' + index + '"]')
          .classList.add('quize__tab--op1')
      })
    }

    changeLine(index) {
      let persent = Math.round((100 / this.totalSlides) * (index - 1)) + '%'
      document.querySelector('.quize__line-fill').style.width = persent
      document.querySelector('.quize__line-text').innerHTML = persent
    }

    changeNav(index) {
      if (index == this.totalSlides) {
        document.querySelector('.quize__nav').classList.add('quize__nav--last')
      } else {
        document
          .querySelector('.quize__nav')
          .classList.remove('quize__nav--last')
      }

      if (index == 1) {
        document.querySelector('.quize__nav').classList.add('quize__nav--first')
      } else {
        document
          .querySelector('.quize__nav')
          .classList.remove('quize__nav--first')
      }
    }

    changeSteps(index) {
      document.querySelector('.quize__steps-current span').innerHTML = index
      if (index == this.totalSlides) {
        document.querySelector('.quize__steps-total').innerHTML =
          'Последний шаг'
      } else {
        document.querySelector('.quize__steps-total').innerHTML =
          'Осталось всего <span>' + (this.totalSlides - index) + '</span>'
      }
    }

    nextSlide() {
      alert('next slide')
    }

    prevSlide() {
      alert('prev slide')
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    if (document.querySelector('.quize')) {
      window.quize = new quize()
    }
  })

  function raf(fn) {
    window.requestAnimationFrame(function () {
      window.requestAnimationFrame(function () {
        fn()
      })
    })
  }
}

const payment = () => {
  if (document.querySelector('.payment__methods')) {
    let methods = document.querySelectorAll('.payment__methods-item')
    for (var i = 0; i < methods.length; i++) {
      methods[i].addEventListener('click', function () {
        document
          .querySelector('.payment__methods-item--active')
          .classList.remove('payment__methods-item--active')
        this.classList.add('payment__methods-item--active')
      })
    }
  }
}

const partners = () => {
  const mySwiper = new Swiper('.partners__slider .swiper-container', {
    speed: 400,
    spaceBetween: 30,
    autoHeight: true,
    slidesPerView: 4,
    loop: true,
    watchSlidesVisibility: true,
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },

      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },

      1024: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
  })

  return mySwiper
}

const serts = () => {
  const mySwiper = new Swiper('.serts__slider .swiper-container', {
    speed: 400,
    autoHeight: true,
    slidesPerView: 4,
    navigation: {
      nextEl: '.serts__slider .serts__slider-arrow--next',
      prevEl: '.serts__slider .serts__slider-arrow--prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },

      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  })
}

const diplomas = () => {
  const mySwiper = new Swiper('.diploms__slider .swiper-container', {
    speed: 400,
    autoHeight: true,
    navigation: {
      nextEl: '.diploms__slider .diploms__slider-arrow--next',
      prevEl: '.diploms__slider .diploms__slider-arrow--prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },

      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  })

  return mySwiper
}

const fixedMenu = () => {
  let header = document.querySelector('.header')

  document.addEventListener('scroll', function () {
    let scroll = document.querySelector('body').scrollTop
    if ((scroll > 200) & !header.classList.contains('header--fixed')) {
      headerFix()
    } else if ((scroll < 200) & header.classList.contains('header--fixed')) {
      headerStatic()
    }
  })

  function headerFix() {
    header.classList.add('header--fixed')
  }

  function headerStatic() {
    header.classList.add('header--height0')

    function headerRemoveFix() {
      header.classList.remove('header--fixed')
      header.classList.remove('header--height0')
      header.removeEventListener('animationend', headerRemoveFix)
    }
    header.addEventListener('animationend', headerRemoveFix)
  }
}

const toogles = () => {
  $(document).ready(function () {
    window.allow = true

    $('.toogles__item-title').on('click', function () {
      if (window.allow) {
        window.allow = false
        var needNumber = $(this).attr('data-toogles')
        var need_t = $(this)
        var need_w = need_t.closest('.toogles__wrap')
        var need_i = need_w.find(
          '.toogles__item[data-toogles="' + needNumber + '"]'
        )
        var need_c = need_i.find('.toogles__item-content')

        var lastNumber = need_w
          .find('.toogles__item--active')
          .attr('data-toogles') //+
        var last_t = need_w.find('.toogles__item-title--active') //+
        var last_i = need_w.find('.toogles__item--active') // +
        var last_c = last_i.find('.toogles__item-content') // +
        if (need_i.hasClass('toogles__item--active')) {
          window.allow = true
        } else {
          $(last_t).removeClass('toogles__item-title--active')
          $(need_t).addClass('toogles__item-title--active')

          $(last_c).fadeToggle(500, function () {
            $(last_i).removeClass('toogles__item--active')

            $(need_c).fadeToggle(500, function () {
              $(need_i).addClass('toogles__item--active')
              window.allow = true
            })
          })
        }
      }
    })
  })

  // document.querySelector('#rates').scrollIntoView();
}

const clients = () => {
  const mySwiper = new Swiper('.clients__slider .swiper-container', {
    pagination: {
      el: '.clients__slider .swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 10,
        autoHeight: true,
      },

      768: {
        slidesPerView: 3,
        spaceBetween: 10,
        spaceBetween: 30,
        autoHeight: false,
      },

      1024: {
        slidesPerView: 6,
        slidesPerColumn: 2,
      },
    },
  })

  return mySwiper
}

const mobileMenu = () => {
  const menu = document.querySelector('.mobile-menu')
  const burger = document.querySelector('.header__burger')
  const menuWrap = document.querySelector('.mobile-menu__wrap')
  const closeMenu = document.querySelector('.mobile-menu__act--close')
  window.MenuAllow = true

  burger.addEventListener('click', function () {
    window.showMenu()
  })
  closeMenu.addEventListener('click', function () {
    window.hideMenu()
  })

  window.showMenu = function () {
    if (window.MenuAllow) {
      window.MenuAllow = false
      menu.classList.add('mobile-menu--active')
      menu.classList.add('mobile-menu--opacity0')
      raf(function () {
        menu.classList.add('mobile-menu--opacity1')
      })

      function leftMenu() {
        menuWrap.classList.add('mobile-menu__wrap--left0')
        if (event.propertyName == 'left') {
          window.MenuAllow = true //-
          menu.removeEventListener('transitionend', leftMenu)
        }
      }

      menu.addEventListener('transitionend', leftMenu)
    }
  }

  window.hideMenu = function () {
    if (window.MenuAllow) {
      window.MenuAllow = false
      menuWrap.classList.remove('mobile-menu__wrap--left0')

      function xxx() {
        menu.classList.remove('mobile-menu--opacity1')
        menu.classList.remove('mobile-menu--opacity0')
        setTimeout(function () {
          menu.classList.remove('mobile-menu--active')
          window.MenuAllow = true
        }, 500)
        menuWrap.removeEventListener('transitionend', xxx)
      }

      menuWrap.addEventListener('transitionend', xxx)
    }
  }

  function raf(fn) {
    window.requestAnimationFrame(function () {
      window.requestAnimationFrame(function () {
        fn()
      })
    })
  }

  document
    .querySelector('.mobile-menu')
    .addEventListener('click', function (e) {
      if (window.MenuAllow) {
        if (e.target.closest('.mobile-menu__wrap') == null) {
          window.hideMenu()
        }
      }
    })
}

const anchors = () => {
  $('.anchors a:not([data-anchors]), [data-anchors="single"]').on(
    'click',
    function (e) {
      e.preventDefault()
      var elementid = $(this).attr('href')
      if (document.querySelector('#' + elementid)) {
        var destination = $('#' + elementid).offset().top
        $('body').animate(
          {
            scrollTop: destination,
          },
          1000,
          function () {
            // window.animations1.checkScroll();
            window.hideMenu()
          }
        )
      } else {
        location.href = '/#' + elementid
      }
    }
  )
}

const popup = () => {
  window.show_popup = function (id) {
    document.querySelector('body').classList.add('oh')
    document.querySelector('#' + id).classList.add('popup-wrap--active')
    raf(function () {
      document.querySelector('#' + id).classList.add('popup-wrap--opacity1')
    })

    function xxx() {
      document
        .querySelector('#' + id)
        .querySelector('.popup')
        .classList.add('popup--opacity1')
      document.querySelector('#' + id).removeEventListener('transitionend', xxx)
    }

    document.querySelector('#' + id).addEventListener('transitionend', xxx)
  }

  window.close_popup = function (id) {
    document.querySelector('body').classList.remove('oh')
    if (document.querySelector('#' + id).classList.contains('sale-popup--2')) {
      document.querySelector('#' + id).classList.remove('sale-popup--op1')

      function xxx3() {
        document.querySelector('#' + id).classList.remove('popup-wrap--active')
        document
          .querySelector('#' + id)
          .classList.remove('popup-wrap--opacity1')
        document.querySelector('#' + id).classList.remove('sale-popup--op0')
        document.querySelector('#' + id).classList.remove('sale-popup--2')
        document.querySelector('#' + id).classList.add('sale-popup--1')

        document
          .querySelector('#' + id)
          .querySelector('.popup--opacity1')
          .classList.remove('popup--opacity1')

        document
          .querySelector('#' + id)
          .removeEventListener('transitionend', xxx3)
      }

      document.querySelector('#' + id).addEventListener('transitionend', xxx3)
    } else {
      document
        .querySelector('#' + id)
        .querySelector('.popup')
        .classList.remove('popup--opacity1')
      function xxx() {
        document
          .querySelector('#' + id)
          .classList.remove('popup-wrap--opacity1')
        setTimeout(function () {
          document
            .querySelector('#' + id)
            .classList.remove('popup-wrap--active')
        }, 400)
        document
          .querySelector('#' + id)
          .querySelector('.popup')
          .removeEventListener('transitionend', xxx)
      }
      document
        .querySelector('#' + id)
        .querySelector('.popup')
        .addEventListener('transitionend', xxx)
    }
  }

  function raf(fn) {
    window.requestAnimationFrame(function () {
      window.requestAnimationFrame(function () {
        fn()
      })
    })
  }

  if (document.querySelector('.popup-wrap')) {
    let popups = document.querySelectorAll('.popup-wrap')
    for (var i = 0; i < popups.length; i++) {
      popups[i].addEventListener('click', function (e) {
        if (e.target.closest('.popup') == null) {
          close_popup(e.target.getAttribute('id'))
        }
      })
    }
  }
}

const callGeneralFuncs = () => {
  quize()
  payment()
  partners()
  serts()
  diplomas()
  fixedMenu()
  toogles()
  clients()
  mobileMenu()
  anchors()
  popup()
}

export { callGeneralFuncs }
