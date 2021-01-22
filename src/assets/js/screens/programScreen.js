import { makeReq } from '../utils/makeReq'
import { cpUrlRoot } from '../constants/apiUrls'

const productScreen = function (screen) {
  const currentUrl = window.location.href
  const currentUrlArr = currentUrl.split('/')
  const programUrl = currentUrlArr[4]

  window.history.pushState(
    { page_id: `${programUrl === undefined ? null : programUrl}` },
    '',
    `/programs/${programUrl === undefined ? '' : programUrl}`
  )

  const main = document.querySelector('main')
  main.id = 'program-screen'
  // main.innerHTML = `Страница программы`

  console.log('Program Screen')

  const populateUI = async () => {
    const req = await makeReq('GET', `${cpUrlRoot}/api/v1/courses`)

    console.log(req)

    const { data } = req
    let requestedProgram

    data.forEach((program) => {
      if (programUrl === program.url) {
        requestedProgram = program
      }
    })

    console.log(requestedProgram)
  }

  populateUI()
}

export { productScreen }
