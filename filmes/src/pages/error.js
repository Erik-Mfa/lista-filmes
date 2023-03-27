import React from 'react';
import { useParams } from 'react-router-dom';
import Title from './../components/Title/index';
 
function Error(){
    return (
        <div className="text-center">
            <h1>Página não encontrada</h1>         
        </div>
    )   
}
 
export default Error;