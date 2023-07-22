import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Lang from './supplie/lang2.png'
import Navbar from './navbar'
import Sidenavbar from './sidenav'
import Footer from './footer'

export default function Translator() {
  const [options, setOptions] = useState([]);
  const [to, setTo] = useState('hi');
  const [from, setFrom] = useState('en');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const translate = () => {
    const params = new URLSearchParams();
    params.append('q', input);
    params.append('source', from);
    params.append('target', to);
    params.append('api_key', 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');

    axios
      .post('https://libretranslate.de/translate', params, {
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      .then((res) => {
        console.log(res.data);
        setOutput(res.data.translatedText);
      });
  };

  useEffect(() => {
    axios
      .get('https://libretranslate.de/languages', {
        headers: { accept: 'application/json' },
      })
      .then((res) => {
        console.log(res.data);
        setOptions(res.data);
      });
  }, []);
  return (
    <>
    <Navbar />
    <Sidenavbar />
    <div className='Translate-head'>LIVE TRANSLATOR</div>
    <div className="Translate">
        <div className='Translate-left'>
            <img src={Lang} alt='Lang' className='Translate-img' />
        </div>
        <div className='Translate-right'>
            <div className='Translate-right-top'>
                <div className='Translate-lang'>
                    &nbsp;From :&nbsp;
                    <select className='Translate-select' onChange={(e) => setFrom(e.target.value)}>
                        {options.map((opt) => (
                            <option key={opt.code} value={opt.code} selected={opt.code === 'en'}>
                            {opt.name}
                            </option>
                        ))}
                    </select>
                    &nbsp;To :&nbsp;
                    <select className='Translate-select' onChange={(e) => setTo(e.target.value)}>
                        {options.map((opt) => (
                            <option key={opt.code} value={opt.code} selected={opt.code === 'hi'}>
                            {opt.name}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='Translate-text'>
                    <div className='Translate-textarea'>
                        <textarea className='Translate-textarea-text'  placeholder='Hello' cols="20" rows="2"
                        onInput={(e) => setInput(e.target.value)}
                        ></textarea>
                    </div>&nbsp;&nbsp;&nbsp;
                    <div className='Translate-textarea'>
                        <textarea className='Translate-textarea-text' placeholder='नमस्ते।' cols="20" rows="2" value={output} readOnly></textarea>
                    </div>
                </div>  
                <div className='Translate-btn'>
                    <button className='Translate-btn-btn' onClick={translate}>Translate</button>
                </div>
            </div>
            <div className='Translate-right-bottom'>
                <div className='Translate-right-bottom-leftBtn'>Audio  Translation</div>
                <div className='Translate-right-bottom-rightBtn'>Text  Translation</div>
            </div>
      </div>
    </div>
    <Footer />
    </>
  );
}
