import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './components/Card';
import Sdata from './components/Sdata';



const root = ReactDOM.createRoot(document.getElementById('root'));
let count = 0;


root.render(
  <>
    <h1 className="heading">NetFlix Orignal Series </h1>
    <div className="cards">
      {
        Sdata.map((val) => {
          return (
            <Card
              imgsrc={val.imgscr}
              title={val.title}
              sname={val.sname}
              link={val.links}
            />
          );
        })

      }
    </div>
  </>
);