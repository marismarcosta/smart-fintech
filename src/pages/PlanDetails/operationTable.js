import React, { useState, useEffect } from 'react';
import { MdAddCircleOutline, IoMdRemoveCircleOutline } from 'react-icons/all';

import Data from './FakeData';
import './style.css';

function OperationTable() {
  const [fakeData, setFakeData] = useState(Data);  
  const [count, serCount] = useState(1);

  function handleDeleteRow(operation){
    let tempData = []
    tempData = [...fakeData];

    const findItem = fakeData.findIndex((item)=> 
        item.operation === operation);
    
    tempData.splice(findItem, 1);
    console.log(tempData);
    setFakeData(tempData);

    console.log({findItem});
  }

  function handleAddRow(){
    setFakeData([...fakeData, {
        operation: `Operação ${count}`,
        values: [],
    }]);

    serCount(count + 1);
  }

  useEffect(()=>{},fakeData, count);

  return (
   <>
   <div>
     
    {/* <div className="table-nav">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
    </div> */}

    <table>
    <thead>
        <tr>
            <th />
            <th>Julho</th>
            <th>Agosto</th>
            <th/>
        </tr>  
    </thead>
    
    <tbody>
    {fakeData.map(item => (
        <tr>
    
            <td className="delete-row">
                <button type="button" 
                  onClick={()=> handleDeleteRow(item.operation)}>
                    <IoMdRemoveCircleOutline/>
                </button>
                <strong>{item.operation}</strong>
            </td>

            <td>
                <div>
                    <p className="plan-value"
                    style={{fontSize:'12px'}}
                    >
                        R$ 12.000,00
                    </p>
                </div>
            </td>

            <td>
                <div>
                    <p className="plan-value"
                    style={{fontSize:'12px'}}
                    >R$ 7.500,00</p>
                </div>
            </td>
        </tr>
    ))}
    </tbody>
    </table>
    
    </div>

    <div className="add-new-row">
        <button onClick={handleAddRow}>
          <MdAddCircleOutline/>  Adicionar item
        </button>
    </div>

    <div className="plan-amount">
        <p>
          <strong>Fat. Planejado</strong>
        </p>
        <p className="plan-value">R$ 16.900,00</p>
        <p className="plan-value">R$ 10.140,00</p>
    </div>
  </>
  );
}

export default OperationTable;