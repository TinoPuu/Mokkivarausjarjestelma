
import React , { Component } from 'react';
import { fire } from "../Firebase/config";
import Varaus from '../comps/Varaus';
import Kalenteri from '../comps/Kalenteri';

const Varaus_lomake = () => {
    return ( 
        <div className="Varaus">
            <Kalenteri/>
            <Varaus></Varaus>
            
        </div>
     );
}  
 
export default Varaus_lomake;