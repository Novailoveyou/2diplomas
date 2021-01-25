import { indexPage } from '../pages/indexPage.js'
import { callGeneralFuncs } from '../general'

const indexScreen = function (screen) {
  window.history.pushState({ page_id: 1 }, '', '/')

  const main = document.querySelector('main')
  main.id = 'index-screen'

  const populateUI = async () => {
    const html = await indexPage()
    main.innerHTML = html
    callGeneralFuncs()
  }

  populateUI()

  console.log('Index Screen')
}

export { indexScreen }
