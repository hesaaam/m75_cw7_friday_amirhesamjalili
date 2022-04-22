let obj = {
    firstName: "john",
    lastName: "doe",
    address: [],
    workInfo: { company: "google", category: { name: "IT", id: 1 } }


}

let addAddress = (newAddress) => {
    obj.address = [...obj.address,newAddress]
}

let removeAddress = (address) => {
    obj = {...obj, address:obj.address.filter(add => add !== address)} 
    
}

let changeName = (name, family)=>{
    obj = {
        ...obj,
        firstName: name,
        lastName:family
    }
}

let changeWorkInfo =(newWorkInfo)=>{
    obj = {...obj,workInfo:newWorkInfo}
}

let changeWorkInfoName = (name)=>{
    obj.workInfo = {...obj.workInfo,company:name}
}
let changeCategoryoName = (name)=>{
    obj.workInfo.category = {...obj.workInfo.category,name}
}
let changeObj = (key,value) =>{
    obj = {...obj,[key]:value}
}



addAddress("new york")
addAddress("tehran")
removeAddress("new york")
changeName("hesam","jalili")
changeWorkInfo({ company: "google", category: { name: "Bussines", id: 2} })
changeWorkInfoName("yahoo")
changeCategoryoName("Entertainment")
changeObj("firstName","Ali")

console.log(obj)



