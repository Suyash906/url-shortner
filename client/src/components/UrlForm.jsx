import React, { useState } from 'react';

const style = {
    table: {
      borderCollapse: 'collapse'
    },
    tableCell: {
      border: '1px solid gray',
      margin: 0,
      padding: '5px 10px',
      width: 'max-content',
      minWidth: '150px'
    },
    form: {
      container: {
        padding: '20px',
        border: '1px solid #F0F8FF',
        borderRadius: '15px',
        width: 'max-content',
        marginBottom: '40px'
      },
      inputs: {
        marginBottom: '5px'
      },
      submitBtn: {
        marginTop: '10px',
        padding: '10px 15px',
        border:'none',
        backgroundColor: 'lightseagreen',
        fontSize: '14px',
        borderRadius: '5px'
      }
    }
  }
  

function UrlForm({ saveNewURL }) {

    const [orignalUrl, setOrignalUrl] = useState("");
    const [shortBaseUrl, setShortBaseUrl] = useState("");
  
    const orignalUrlChangeHandler = (e) => {
        setOrignalUrl(e.target.value);
    }
  
    const shortBaseUrlChangeHandler = (e) => {
        setShortBaseUrl(e.target.value)
    }

    /**
     * https://stackoverflow.com/questions/5717093/check-if-a-javascript-string-is-a-url
     * @param {*} string 
     */
    const isValidHttpUrl = (string) => {
        let url;
      
        try {
            url = new URL(string);
        } catch (_) {
            return false;  
        }
        return url.protocol === "http:" || url.protocol === "https:";
    }
  
    const addEntry = () => {
        if(isValidHttpUrl(orignalUrl)) {
            if(isValidHttpUrl(shortBaseUrl)) {
                saveNewURL(orignalUrl, shortBaseUrl)
            } else {
                alert(`Orignal URL is not Valid!!!. Please enter a valid url`)
            }
        } else {
            alert(`Short Base URL is not Valid!!!. Please enter a valid url`)
        }
        
    }
  
    return (
      <form onSubmit={e => { e.preventDefault(); addEntry();}} style={style.form.container}>
        <label>Orignal URL</label>
        <br />
        <input 
          style={style.form.inputs}
          className='orignalUrl'
          name='orignalUrl' 
          type='text'
          onChange={orignalUrlChangeHandler}
        />
        <br/>
        <label>SHort Base URL</label>
        <br />
        <input 
          style={style.form.inputs}
          className='shortBaseUrl'
          name='shortBaseUrl' 
          type='text'
          onChange={shortBaseUrlChangeHandler} 
        />
        <br/>
        <input 
          style={style.form.submitBtn} 
          className='submitButton'
          type='submit' 
          value='Shorten URL' 
        />
      </form>
    )
}
export default UrlForm;