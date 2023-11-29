
const url = "https://randomuser.me/api/?results=1000&gender=male&nat=us"
const peoples = async () => {
    const resp = await fetch(url)
    const obj = await resp.json()
    const people = []
    people.push(obj.results)
    people = people.flat()
        return people
}
module.exports = peoples


