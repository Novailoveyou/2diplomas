import { programPage } from '../pages/programPage.js'
import { callGeneralFuncs } from '../general'

const productScreen = function (screen) {
  const currentUrl = window.location.href
  const currentUrlArr = currentUrl.split('/')
  const programUrl = currentUrlArr[4]

  window.history.pushState(
    { page_id: `${programUrl === undefined ? null : 'programs/'+programUrl}` },
    '',
    `/programs/${programUrl === undefined ? '' : programUrl}`
  )

  const main = document.querySelector('main')
  main.id = 'program-screen'

  const populateUI = async () => {
    const html = await programPage()
    main.innerHTML = html

    callGeneralFuncs()
  }

  populateUI()

  console.log('Program Screen')
}

export { productScreen }
