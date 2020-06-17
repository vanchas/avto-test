export const adminService = {
  getData
}

async function getData(page) {
  return await fetch(`/api/report/query?page=${page}`)
    .then(res => res.json())
    .then(data => console.log(data))
}