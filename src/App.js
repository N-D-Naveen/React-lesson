import { useEffect, useState } from 'react';

// function App() {
//   const [users,setUsers] = useState([]);
//   const [allUsers, setAllUsers] = useState([]);
//   useEffect(()=>{
//     fetch("https://jsonplaceholder.typicode.com/users").then(v=>v.json()).then(val=>{
//       console.log(val);
//       setAllUsers(val);
//       setUsers(val);
//     })
//   },[])

//   const handleSearchChange=(e)=>{
//     console.log(e.target.value);
//     let filteredUser = allUsers.filter(v=>{
//       if(new RegExp(e.target.value,"i").test(v.name)){
//         return true;
//       }
//       else{
//         return false;
//       }
//     })
//     setUsers(filteredUser);
//   }
//   return (
//     <div>
//       <input onInput={handleSearchChange}/>
//       {users.map(val=>{
//         return (<div>{val.name}</div>)
//       })}
//     </div>
//   );
// }


//useState
// function App() {
//   // Step 1: Create a state variable "count" with default value 0
//   const [count, setCount] = useState(0);

//   // Step 2: Functions to update the state
//   const handleClick = ()=>{
//     setCount(count + 1);
//   }

//   // Step 3: Render the UI
//   return (
//     <div style={{ textAlign: "center", marginTop: "50px" }}>
//       <h1>Counter App</h1>
//       <h2>{count}</h2>
//       <button onClick={handleClick}>Increase</button>
//     </div>
//   );
// }

//useEffect
function App() {
  console.log("app")
  // Step 1: Create a state variable "count" with default value 0
  const [count, setCount] = useState(0);
  let [a, updateA] = useState(0);
  //mount
  // useEffect(()=>{
  //   alert("welcome to Counter Application");
  // },[])

  //unmount
  // useEffect(()=>{
  //   return()=>{
  //     alert("Thanks for using the Counter Application");
  //   }    
  // },[])

  //update
  // useEffect(()=>{
  //     if(count > 5)
  //     alert("counter is greater than 5");
  // },[count])

  // Step 2: Functions to update the state
  const handleClick = () => {
    // setCount(count + 1);
    setCount(count + 1);
    console.log(count);
  }

  function handleDecClick() {
    setCount(count - 1);
  }

  //users
  //fetch users through API - 2s   ------> common storage place  -context

  //admin
  //fetch users through API - 2s
  //admin0 detils -2s

  //superAdmin
  //fetch users through API - 2s
  //admin0 detils -2s
  //super admin details -2s


  const title = "Counter App"; // 1.
  // const [title,setTile] = useState("Counter App"); //2.
  // Step 3: Render the UI
  //state variable
  //why: we dont want a DOM query to update the HTML
  //When: only for dynamic content


  //useEffect
  //why: need to do someActions based on application life cycle
  //When to Use: do some action on load,or update or remove

  //cycle:
  //1.load phase: initial page load 
  //2.Updation phase: doing action (click somthing)
  //3.removal phase: page reload or remove

  //1.load
  useEffect(() => {
    // alert("hello , welcome to our application");
  }, [])

  //3.Removal
  useEffect(() => {

    // return ()=>{
    //   alert("Thanks for visting our application"); // removal
    // }

  }, [])

  //2.update
  useEffect(() => {
    if (count == 0) {
      alert("Welcome.....")
    }
    else {
      alert("counter variable updated")
    }
  }, [count])

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{title}</h1>
      <h2>{count}</h2>
      <button onClick={handleClick}>Increase</button>
      <button onClick={handleDecClick}>DEcrease</button>
    </div>
  );
}

export default App;
