import data from './data.json'
const allCategories = data.map(obj => obj.category)
const categorieSet = new Set(allCategories)
const categoriesUnique = Array.from(categorieSet)
const categoriesWithCounts = allCategories.reduce((obj, cat) => {
    if(obj[cat]){
        obj[cat]++
    } else {
        obj[cat]=1
    }
    return obj
  }, {})
const catWCountObj = categoriesUnique.map(name => {
    return {name, count: categoriesWithCounts[name]}
})
catWCountObj.push({name:'All', count:data.length})
export {
    data,
    allCategories, 
    categorieSet, 
    categoriesUnique, 
    categoriesWithCounts,
    catWCountObj,
}