import React, { createElement } from 'react';
import { useForm } from 'react-hook-form';
import './ItemsForm.css';


function ItemsForm() {
    const {register, handleSubmit} = useForm();

  return (
    <div id='itemsDiv'>
        <form id='itemForm' onSubmit={handleSubmit((item)=> {
            let itemArr = [];
            itemArr.push(item);
            console.log(itemArr);
            // let list = document.getElementById('itemList');
             
            //  itemArr.forEach((item) => {
            //     let li = document.createElement('li');
            //     li.innerText = item;
            //     list.appendChild(li);
            //  })

            // let ul = document.getElementById('itemList');
            // let li = document.createElement('li');
            // li.appendChild(document.createTextNode(JSON.stringify(item)));
            // li.setAttribute("class", 'newItem');
            // ul.appendChild(li);
           
            
            
        })}>
            <input {...register("item")} placeholder="Item"/> <br/>
            <input type="submit" />
        </form>
    </div>
  )
}

export default ItemsForm