import Axios from 'axios'
export const FETCH_CONTENT = 'FETCH_CONTENT'
export const FETCHED_CONTENT = 'FETCHED_CONTENT'
// if (process.env.NODE_ENV == 'none') {
var ROOT_URL =  'http://127.0.0.1:10001'
// } else {
//     var ROOT_URL = 'https://ruukkiserver.ddns.net'
// }


export function getContent() {
  return (dispatch) => {
      (async () => {
          dispatch({ type: FETCHED_CONTENT })
          let response = null
          let error = null
          try {
              response = await Axios.get(
                                  `${ROOT_URL}/loopback/api/application-pages`, // get session
                                  {headers: { 'Access-Control-Allow-Origin': '*' }},
                                  {
                                      withCredentials: true
                                  }
                              )
          } catch (err) {
              error = err
          }
          dispatch({
              type: FETCHED_CONTENT,
              payload: response ? response.data : null,
              error: error
          })
      })()
  }
}


// export function getContainer(customer) {
//     return (dispatch) => {
//         (async () => {
//             dispatch({ type: FETCH_CONTAINER })
//             let response = null
//             let error = null
//             try {
//                 response = await Axios.get(
//                     `${ROOT_URL}/boxcontrol/API/bdm/businessData/com.company.model.ContainerDetails?`,
//                     {
//                       params: {
//                           q: 'findByCustomer',
//                           p: 0,
//                           c: 100,
//                           f: `customer=${customer}`
//                       },
//                       withCredentials: true
//                   }
//                   )
//             } catch (err) {
//                 error = err
//             }
//             dispatch({
//                 type: FETCHED_CONTAINER,
//                 payload: response ? response.data.filter((array)=> array.archived == false) : null,
//                 error: error
//             })
//         })()
//     }
//   }
