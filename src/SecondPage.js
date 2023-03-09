import Select from "react-select";
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import Button from "react-bootstrap/Button";
import { useLocation } from "react-router-dom";

export const SecondPage = () => {
  const location = useLocation();
  const formRes = location.state.res;
  const category = formRes.fields.category;
  const apiKey = formRes.fields.apiKey;
  const useHTTP = formRes.fields.useHTTP;
  const [formObject, setFormObject] = useState({});
  const [apiKeyErr, setApiKeyErr] = useState();
  const [selectErr,setSelectErr] = useState(false);
  const [validateRegex, setValidateRegex] = useState(false);
  const initialRender = useRef(true);

  const backendCall = async () => {
    document.querySelector('form').reportValidity();
    if (validate()) {
      async function postData(){ 
        const res = await fetch('http://localhost:8080/v1/sources',{
          method:'POST',
          headers: {'userId': '2', 'Content-Type': 'application/json'},
          body:JSON.stringify({
              sourceType:formRes.type,
              values:{...formObject}
          })
      })
      console.log(res);
      if(res.status===201){
        alert("Saved successfully");
      }else{
        alert("Error: Could not save")
      }
      
  }

      postData();
    }
  };
  const validate = () => {
    let isValid = true;
    const validApiKey = new RegExp(apiKey.regex);
    if(!validApiKey.test(formObject.apiKey)) {
      setApiKeyErr(apiKey.regexErrorMessage);
      setValidateRegex(true);
      isValid = isValid & false;
    }
    else{
        setValidateRegex(false);
    }
    if(category.required){if(!formObject.category){
        setSelectErr(true);
        isValid = isValid & false;
    }
    else{
        setSelectErr(false);
    }}
    return isValid;
  };
  console.log(window.location.pathname);
  const options = category.options;
  return (
    <div style={{ flexDirection: "column" }}>
      <form action="/secondpage/">
        <div style={{ margin: 20 }}>
          {apiKey.label}
          <input
            type="input"
            required={apiKey.required}
            placeholder={apiKey.placeholder}
            style={{ marginLeft: 10 }}
            onChange={(e) => {
              setFormObject({ ...formObject, apiKey: e.target.value });
            }}
          ></input>
        </div>
        <div style={{ margin: "20px" }}>
          {useHTTP.label}
          <input
            required={useHTTP.required}
            style={{ marginLeft: "10px" }}
            type="checkbox"
            onChange={(e) => {
              setFormObject({ ...formObject, useHTTP: e.target.checked });
            }}
          ></input>
        </div>
        <div style={selectErr ? {border:"1px solid red",} :{ margin: 20 }}>
          <Select
            
            placeholder={category.label}
            onChange={(e) => {
              setFormObject({ ...formObject, category: e.value });
            }}
            options={options}
          ></Select>
          
        </div>
        {selectErr &&<div style={{color:'red',margin: 20}}>Select a category</div>}
        {validateRegex && <div style={{color:'red',margin: 20}}>{apiKeyErr}</div>}
        <Button onClick={backendCall} style={{ margin: 20 }}>
          Go
        </Button>
      </form>
    </div>
  );
};