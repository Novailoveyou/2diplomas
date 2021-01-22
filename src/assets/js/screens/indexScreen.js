const indexScreen = function (screen) {
  window.history.pushState({ page_id: 1 }, '', '/')

  const main = document.querySelector('main')
  main.id = 'index-screen'

  console.log('Index Screen')
}

export { indexScreen }
