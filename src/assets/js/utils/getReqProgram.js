import { makeReq } from '../utils/makeReq'
import { cpUrlRoot } from '../constants/apiUrls'

const getReqProgram = async () => {
  const currentUrl = window.location.href
  const currentUrlArr = currentUrl.split('/')
  const programUrl = currentUrlArr[4]

  const req = await makeReq('GET', `${cpUrlRoot}/api/v1/courses`)

  console.log(req)

  let requestedProgram

  req.data.forEach((program) => {
    if (programUrl === program.url) {
      requestedProgram = program
    }
  })

  console.log(requestedProgram === undefined ? null : requestedProgram)

  return requestedProgram
}

export { getReqProgram }