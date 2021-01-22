import { productScreen } from './screens/programScreen.js'
import { indexScreen } from './screens/indexScreen.js'
import { paymentScreen } from './screens/paymentScreen.js'
import { makeReq } from './utils/makeReq.js'

const testBtnProduct = document.getElementById('js-test-btn-product')
const testBtnIndex = document.getElementById('js-test-btn-index')
const testBtnPayment = document.getElementById('js-test-btn-payment')

// Page state
const PageState = function () {
  let currentState
  if (window.location.pathname.includes('/programs')) {
    currentState = new productScreen(this)
  } else if (window.location.pathname.includes('/payment')) {
    currentState = new paymentScreen(this)
  } else {
    currentState = new indexScreen(this)
    // currentState;
  }

  this.init = function () {
    if (window.location.pathname.includes('/programs')) {
      this.change(new productScreen())
    } else if (window.location.pathname.includes('/payment')) {
      currentState = new paymentScreen(this)
    } else {
      this.change(new indexScreen())
      // return;
    }
  }

  this.change = function (state) {
    currentState = state
  }
}

// Instantiate pageState
const page = new PageState()

// Management state
testBtnProduct.addEventListener('click', (e) => {
  page.change(new productScreen())

  e.preventDefault()
})

// Management state
testBtnIndex.addEventListener('click', (e) => {
  page.change(new indexScreen())

  e.preventDefault()
})

testBtnPayment.addEventListener('click', (e) => {
  page.change(new paymentScreen())

  e.preventDefault()
})
