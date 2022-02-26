import React, { createElement } from 'react';
import { useForm } from 'react-hook-form';
import './ItemsForm.css';


function ItemsForm() {
    const {register, handleSubmit} = useForm();

  return (
    <div id='itemsDiv'>
        <form id='itemForm' onSubmit={handleSubmit((item)=> {
            let form = document.getElementById('itemForm');
            let itemArr = [];
            itemArr.push(item);
            console.log(itemArr);
            let list = document.getElementById('itemList');  
            itemArr.forEach((item) => {
            let li = document.createElement('li');
            li.innerText = JSON.stringify(item);
            list.appendChild(li);
            form.reset();
            })
            
        })}>
            <input {...register("item")} placeholder="Item"/> <br/>
            <input type="submit" />
        </form>
    </div>
  )
}

export default ItemsForm