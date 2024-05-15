"use strict"

// the entry data
const notesList = [
    {
        id: 1,
        title: "Coding JavaScript",
        createdAt: "2024-03-13T21:43:34.067Z",
        completed: false,
    },
    {
        id: 2,
        title: "Study physics",
        createdAt: "2024-02-13T22:43:34.067Z",
        completed: true,
    },
    {
        id: 3,
        title: "React.js intervew",
        createdAt: "2024-01-13T23:43:34.067Z",
        completed: true,
    },
    {
        id: 4,
        title: "Cooking",
        createdAt: "2024-04-13T20:43:34.067Z",
        completed: false,
    },
];
//1.Sort data by date in ascending and descending order
function sortData(sortType, data) {
    if(sortType === "none"){
        return data
    }
    if (sortType === "descending" || sortType === "ascending") {
        return data.sort((a, b) => {
            a = new Date(a.createdAt)
            b = new Date(b.createdAt)
            return sortType === "ascending" ? (a - b) : (b - a)
        })
    }
   console.log(`invalid sort type : ${sortType} ; please choose one of : ascending / descending / none`)
}
//2.filter data based on status : completed , uncompleted , all
function filterByStatus(status, data) {
    if (status !== "all") {
        if(status!=="completed" && status!== "uncompleted"){
            console.log(`invalid status type : ${status} / valid types : completed,uncompleted,all`)
        } else {
            return data.filter((item) => status === "completed" ? item.completed === true : item.completed === false)
        }
    }else{
        return data
    }
}
//3.filter data based on their names
function filterBySearch(searchWord , data){
    return searchWord==="none"? data : data.filter(item => item.title.toLowerCase().includes(searchWord))
}
// 4.define the main function
function queryData({data, sortType = "none", searchFilter = "none", status = "all"}) {
    let sortedDataByDate =  sortData(sortType, data)
    let sortedDataByStatus =  filterByStatus(status, sortedDataByDate ?? data)
    return   filterBySearch(searchFilter , sortedDataByStatus)
}

// invoke the function
let filteredData = queryData(
    {
        data: notesList,
        searchFilter:"none",      // none / could be anything
        sortType: "aa",   //ascending/descending/none
        status: "aaa"            // all / completed / uncompleted
    })
filteredData!==undefined && console.log(filteredData)