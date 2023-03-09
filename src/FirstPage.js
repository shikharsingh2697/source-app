import {useState, useEffect} from 'react'
import Select from 'react-select';
import Button from 'react-bootstrap/Button'
import {useNavigate} from 'react-router-dom';

export const FirstPage = () =>{
    const navigate = useNavigate();
    const [options,setOptions] = useState();
    useEffect( ()=>{
      async function fetchData(){const res = await fetch("http://localhost:8080/v1/source-form-templates/source-types",{
        method:"GET"
      }).then(res=>res.json()).then(data=>setOptions(data));}
    fetchData();
    },[])
      const backendCall = async() =>{
        try{
          const res = await fetch(`http://localhost:8080/v1/source-form-templates?type=${encodeURIComponent(source)}`, {
            method: "GET" ,
          }).then(res => res.json()).then(data=>data);
          navigate('/secondpage',{state:{res:res}})
          console.log(res);
          
        }catch (e){
          throw e;
        }
      }
      const [source , setSource] = useState();

    return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "40px"
      }}
    >
      <Select
        className="select"
        onChange={(e) => {
          setSource(e.value);
        }}
        options={options}
        placeholder="Select source type"
      />
      <Button
        onClick={() => {
          backendCall();
        }}
      >
        Go
      </Button>
    </div>
  );
};