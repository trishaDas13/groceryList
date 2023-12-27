import { useState } from "react";

function List() {
    
    //todo ----- declair state varriable -----
    const[item, setItem] = useState("");
    const [list,setList] = useState([]);

    //todo ----- function to add the item -----
    function addItem(){
        let newList=[...list, {
            name: item,
            checked: false
        }];
        if (item === ""){
            alert("How I will add an empty field? 🤔")
            return;
        }
        else{
            setList(newList);    
        }
        setItem(""); 
    }
    //todo ----- function to remove the item -----
    const removeItem = (i) => {
        const newList = list.filter((_, index) => index !== i);
        setList(newList);
    };
    //todo ----- function to check the boxes -----
    const handleCheckboxChange= (i)=>{
        const newList = list.map((item, idx) =>{
            if(idx === i){
                return { ...item, checked: !item.checked };
            }
            return item;
        })
        setList(newList);
    }

    return(
        <div className="container">
            <h2>Grocery Bud</h2>
            <input 
                type="text" 
                onChange = {(e) => setItem(e.target.value)}
            />
            <button onClick={addItem}>Add Item</button>

            {/* append grocery child  */}
            <div className="groceryBucket">
                {
                list.map((ele,i)=>{
                    return(
                        <div className="groceryCard" key={i}>
                            <input 
                                type="checkbox"
                                check = {ele.checked}
                                onChange = {(e) => handleCheckboxChange(i)}
                            />
                            <label 
                                htmlFor="grocery"
                                style = {{textDecoration: (ele.checked) ? 'line-through' : 'none'}}
                            >{ele.name}</label>
                            <button
                                onClick={()=>removeItem(i)}
                            >Remove</button>
                        </div>
                    );
                })
                }
            </div>
        </div>
    );
}

export default List;