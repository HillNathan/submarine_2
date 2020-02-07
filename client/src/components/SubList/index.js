import React from "react";
import "./style.css"
// let dummyData = require("../../test/dummyData.json");

function listSplitter(subscriptionsList) {
    var categories = []
    var usedCategories = [] 

    subscriptionsList.forEach(item => {
        if (!usedCategories.includes(item.category)) {
            var temp = {}
            temp.category = item.category
            temp.list = []
            categories.push(temp)
            usedCategories.push(item.category)
            subscriptionsList.forEach(sub => {
                if (sub.category === temp.category) temp.list.push(sub)
            })    
        }
    })
    return categories
}

function SubList(props) {
    return (
        <div className="row justify-content-center">
            <div className="col-md-10">
                <ul id="sub-list">
                    {props.subscriptions.map(data => {
                        return (
                            <li className="list-group-item" key={data._id}><strong>{data.name}</strong>
                            <i onClick={() => props.removeSub(data.name, data._id)} className="fas fa-minus-circle"></i>
                            <div className="details">${data.cost} {data.frequency}</div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div >
    )
}



function SubList2(props) {
    var newList = listSplitter(props.subscriptions)
    return (
        <div className="row justify-content-center">
            <div className="col-md-10">
                <ul id="sub-list">
                    {newList.map(thing => {
                        return (
                            <div>
                                <CategoryHeader category= {thing.category} />
                                <CategoryList 
                                    subscriptions = {thing.list} 
                                    removeSub = {props.removeSub} 
                                />
                            </div>
                        )

                    })}

                    {/* {props.subscriptions.map(data => {
                        return (
                            <li className="list-group-item" key={data._id}><strong>{data.name}</strong>
                            <i onClick={() => props.removeSub(data.name, data._id)} className="fas fa-minus-circle"></i>
                            <div className="details">${data.cost} {data.frequency}</div>
                            </li>
                        )
                    })} */}
                </ul>
            </div>
        </div >
    )
}

function CategoryHeader(props) {
    return (
        <div className="category-header">{props.category}</div>
        )
}

function CategoryList(props) {
    return (
        props.subscriptions.map(data => {
            return (
                <li className="list-group-item" key={data._id}><strong>{data.name}</strong>
                <i onClick={() => props.removeSub(data.name, data._id)} className="fas fa-minus-circle"></i>
                <div className="details">${data.cost} {data.frequency}</div>
                </li>
            )
        })
    )
}



export default SubList2


