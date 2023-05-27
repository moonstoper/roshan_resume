
import './nav.css';
import menu from './images/menu1.png'
import { useEffect } from 'react';


const drops = (isactive) => {


    const dd = document.getElementById('navdrop')
    // console.log(dd)
    if (isactive) {
        dd.classList.add('drops-display')
    }
    else {
        dd.classList.remove('drops-display');
    }
}

const links = (event, path) => {
    event.preventDefault();
    window.location.replace(path)
}

const createObserver = (id)=>{
    new IntersectionObserver(([entries])=>{
        console.log(entries)
       if(entries.isIntersecting){
        document.getElementsByName(id)[0].style.width = '3%';
        document.getElementsByName('drops'+id)[0].style.backdropFilter = "contrast(0.5)"
       }else{
        document.getElementsByName(id)[0].style.width = '0%';
        document.getElementsByName('drops'+id)[0].style.backdropFilter = "contrast(1)"
       }
    },{threshold:0.55}).observe(document.getElementById(id));
}

function Nav() {
 

    

    let d = false
    useEffect(()=>{
        createObserver("tophome")
         createObserver("work");
        createObserver("contacts");
    },[])
    return (
        <div id="navmain">
            <nav className='navgrid'>
                <div id="headertitle">ROSHAN</div>
                <ul id="navpaths">
                    <div  dataincwidth={0} onClick={(e) => links(e, '/#tophome')}>Home <span name = "tophome"></span></div>
                   
                    <div  dataincwidth={0} onClick={(e) => links(e, '/#work')}>Works <span name="work"></span></div>
                   
                    <div  dataincwidth={0} onClick={(e) => links(e, '/#contacts')}>Contacts<span name="contacts"></span></div>
                    

                </ul>
                <img src={menu} alt={'menu'}
                    id="hamburger" onClick={(e) => {
                        e.preventDefault();
                        d = !d;
                        drops(d)
                    }}
                ></img>

            </nav>
            <div id='navdrop' className='drops'>
                <li name="dropstophome" onClick={(e) => {
                    links(e, '/#tophome');
                    d = !d;
                    drops(d);
                }} >Home&nbsp;</li>
                <li name="dropswork" onClick={(e) => {
                    links(e, '/#work');
                    d = !d;
                    drops(d);
                }}>Projects&nbsp;</li>
                <li name="dropscontacts" onClick={(e) => {
                    links(e, '/#contacts');
                    d = !d;
                    drops(d);
                }}>Contacts&nbsp;</li>
            </div>
        </div>

    )
}

export default Nav;