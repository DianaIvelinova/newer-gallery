import { Button } from "react-bootstrap";

const Test = () => {
  async function fetch1() {
    console.log("beginning of await")

    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    console.log("received data")

    const data = await response.json()
    console.log("processed data",data)

    console.log("end of await")

    console.log("beginning of fetch");

    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => { 
      console.log("received data");
      return response.json() 
        })
      .then((data) => console.log("processed data",data))
      
    console.log("end of fetch");
  }
  return (
    <>
      <Button onClick={fetch1}> Click </Button>
    </>
  );
};

export default Test;
