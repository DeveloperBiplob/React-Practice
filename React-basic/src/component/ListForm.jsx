import React, { useState } from 'react';

const ListForm = () => {

const [list, newList] = useState([])
const [item, newItem] = useState('')

const saveItem = ()=>{
    list.push(item);
    newList([...list])
}

const deleteItem = (index)=>{
    list.splice(index, 1)
    newList([...list])
}


    return (
        <div>
            <div className="card p-5 bg-light">
                <input onChange={(e)=>{newItem(e.target.value)}} className='form-control mb-3' type="text" placeholder='Enter Some Value..' />
                <button onClick={saveItem} className='btn btn-success'>Add New Item</button>
                <div className="row bg-white mt-5 p-3">
                    <table className=''>

                    {
                        list.map((item,index)=>{
                            return  <tr style={{ display:'flex',justifyContent:'space-between',alignItems:'center' }} className='border p-2 mb-3'>
                                        <td key={index}>{item} </td>
                                        <td><buton onClick={()=>{deleteItem(index)}} className="btn btn-sm btn-warning">Remove</buton></td>
                                    </tr>
                        })
                    }

                    </table>
                </div>
            </div>
        </div>
    );
};

export default ListForm;