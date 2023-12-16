import Header from "./component/Header";
import Hero from "./component/Hero";
import { useRef, useState } from 'react';
import ListForm from "./component/ListForm";
import ContactForm from "./component/ContactForm";

const App = () => {

  const menu = ('Home', 'About', 'Service', 'Portfolio',  'Contact', 'Help')
  const obj = {
    name: 'Biplob',
    address: 'North Badd Dhaka',
    age: 25,
    email: 'Developerbiplob.bd@gmail.com'
  }

  const warning = ()=>{
    alert('This Is Invalid')
  }

  let getData = (event)=>{
    event.preventDefault()
    alert('Hello world')
  }

  let changeName = useRef();
  let showName = ()=>{
    changeName.current.innerText = "Hello Biplob!"
  }
  let changeImageValue = useRef()
  let showValue = ()=>{
    changeImageValue.current.src = 'https://www.gravatar.com/avatar/4798617496366fdde2c1c3b69d9293e9?s=250&d=mm&r=x'
  }

let firstname, lastName = useRef();

const showAllname = ()=>{
  let fName = firstname.value;
  let lName = lastName.value;

  alert(`The Name Is: ${fName} ${lName}`)
}

let cardStyle = useRef()

let changeColor = ()=>{
  cardStyle.current.classList.remove('bg-primary');
  cardStyle.current.classList.add('bg-worning');
}

let calculate = useRef(0);

let numberShow = ()=> {
  let displyNumber = calculate.current ++;
  alert(displyNumber);
  
}

let storeData = useRef()
let displayRequestData = useRef()

let requestData = async ()=>{
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  storeData.current = await response.json();
}

let ShowData = ()=>{
  displayRequestData.current.innerText = JSON.stringify(storeData.current)
}

let [state, increment] = useState(0)

let updateValue = ()=>{
  increment(state+1);
}
 
const [stateValue, changeValue] = useState(
  {
    name:'Biplob',
    address: 'North Badda, Dkhaka',
    email: 'Developerbiplob.bd@gmail.com'
  }
)

let ChangeStates = ()=>{
  changeValue(
    (updateObject) => (
      {
        ...updateObject,
        name:"Developer Biplob",
        address: 'Middle Badd Dkaka',
      }
    )
  )
}

const [todoItems, newTodoList] = useState([]);
const [items, addItems] = useState('');

let todoadd = ()=>{
  todoItems.push(items);

  newTodoList([...todoItems])
}

const deleteList = (index)=>{
  todoItems.splice(index, 1)
  newTodoList([...todoItems])
}




  return (
    <div>
      <Header/>
      <ContactForm/>
      <ListForm/>
      <Hero obj = {obj} alert = {warning}/>
      

      <form onSubmit={getData}>
        <input type="Enter Your Name" />
        <button type="submit">Submit</button>
      </form>

      <h1 ref={changeName}>Hello Programmer...!</h1>
        <button onClick={showName}>Add Name</button>

        <img ref={changeImageValue} src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w300/2023/10/free-images.jpg" alt="" />
        <button onClick={showValue}>Are You Ready</button><br /><br />

    <label htmlFor="">First Name</label>
    <input ref={(a)=>firstname = a} type="text" placeholder="Enter First Name" /> <br />
    <label htmlFor="">Last Name</label>
    <input ref={(a)=>lastName = a} type="text" placeholder="Enter Last Name" />
    <button onClick={showAllname}>Submit</button>

    <div className="mt-5">
      <div className="card bg-primary" ref={cardStyle}>
        <h1>Hello Programmer</h1>
        <button className="btn btn-secondary btn-small  mt-2" onClick={changeColor}>changeColor</button>
      </div>
    </div>

    <div className="mt-5">
      <button onClick={numberShow} className="btn btn-success">Click</button>
    </div>

    <div className="mt-5">
      <button onClick={requestData} className="btn btn-secondary">Request</button>
      <button onClick={ShowData} className="btn btn-primary">Show Data</button>
      <p ref={displayRequestData}></p>
    </div>

    <div className="mt-5">
      <p>{state}</p>
      <button onClick={updateValue} className="btn btn-success"> Increment</button>
    </div>

    <div className="mt-5">
      <p>{stateValue.name}</p>
      <p>{stateValue.address}</p>
      <button onClick={ChangeStates}>Change</button>
    </div>

    <div className="mt-5">
      <div className="row m-auto">
      <div className="col-md-6">
        <input onChange={(e)=>addItems(e.target.value)} className="col-sm-6 form-control" type="text" placeholder="Enter a Value" />
        <button onClick={todoadd} className="col-sm-3 btn btn-primary mt-3">Add Item</button>
      </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-6">
          <ul style={{ listStyle:"none", }}>
            {
              todoItems.map((item,index)=>{
                return <li key={index} className="mb-3">{item} <button onClick={()=>{deleteList(index)}} className="btn btn-sm btn-warning">Delete</button></li>
              })
            }
          </ul>
        </div>
      </div>
    </div>

    </div>
  );
};

export default App;

// VIDEO POSS TIME - 1:49:11 