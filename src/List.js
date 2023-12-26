import { useState } from "react";

function List() {
    
    const[item, setItem] = useState("");
    const [list,setList]=useState([]);
    const[check, setCheck] = useState(false);

    function addItem(e){
        let newList=[...list, item];
        if (item === ""){
            alert("How I will add an empty field? 🤔")
            return;
        }
        else{
            setList(newList);    
        }
        setItem(""); 
    }
    const removeItem = (i) => {
        const newList = list.filter((_, index) => index !== i);
        setList(newList);
    };

    return(
        <div className="container">
            <h2>Grocery Bud</h2>
            <input 
                type="text" 
                onChange = {(e) => setItem(e.target.value)}
            />
            <button
                onClick={(e) => addItem(e)}
            >Add Item</button>
            <div className="groceryBucket">
                {
                list.map((ele,i)=>{
                    return(
                        <div className="groceryCard" key={i}>
                            <input 
                                type="checkbox"
                                onChange={(e) => setCheck(e.target.checked)}
                            />
                            <label 
                                htmlFor="grocery"
                                style = {{textDecoration: (check) ? 'line-through' : 'none'}}
                            >{ele}</label>
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