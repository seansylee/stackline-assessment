import data from './Webdev_data2.json'

export default function fetchItemData()  {
  return new Promise((res) => {
    // timed out to mock api response time. 
    setTimeout(() => res(data), 3000)
  }) 
}   