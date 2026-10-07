import {useEffect,useState} from 'react';
import {SCHOOL} from './data.js';
const ico=['✏️','📚','🎓','🌈','⭐','🔬','🎨','🎵','🚀','🧮'];
export default function Splash({onDone}){const[leave,setLeave]=useState(false);
 const go=()=>{if(leave)return;setLeave(true);setTimeout(onDone,900)};
 useEffect(()=>{document.body.style.overflow='hidden';const t=setTimeout(go,4800);return()=>{clearTimeout(t);document.body.style.overflow=''}},[]);
 return<div className={'splash'+(leave?' leave':'')}>
  <div className="sp-blob a"/><div className="sp-blob b"/><div className="sp-blob c"/>
  {ico.map((e,i)=><span key={i} className="sp-ico" style={{left:(i*11+4)+'%',animationDelay:(i*.45)+'s',fontSize:24+(i%4)*10}}>{e}</span>)}
  <div className="sp-center"><div className="sp-logo"><i/><i/><span>N</span></div>
   <h1>{SCHOOL.name.split('').map((c,i)=><span key={i} style={{animationDelay:(.6+i*.045)+'s'}}>{c===' '?'\u00a0':c}</span>)}</h1>
   <p>Create. Educate. Innovate.</p><div className="sp-bar"><b/></div>
   <button className="sp-btn" onClick={go}>Enter Website →</button><small>Since {SCHOOL.founded}</small></div></div>}
