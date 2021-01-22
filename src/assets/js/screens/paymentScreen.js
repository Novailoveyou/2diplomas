const paymentScreen = function (screen) {
  window.history.pushState({ page_id: 1 }, '', '/payment')

  const main = document.querySelector('main')
  main.id = 'payment-screen'

  console.log('Payment Screen')
}

export { paymentScreen }
