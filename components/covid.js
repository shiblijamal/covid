import React,{useEffect,useState} from 'react'
import './covid.css'

const Covid = () => {

    const [ data,setData ]= useState([]);

    const getCovidData=async  ()=>{
        try{
            const res=await fetch('https://covidtracking.com/api/states');
            const actualData=await res.json();
            console.log(actualData);
            setData(actualData);
        }
        catch(err){
            console.log('err');
        }
    }
    useEffect(() => {
        getCovidData();
    },[]);

    return (
        <>
            <div className="container-fluid mt-5">
                <div className='man-heading'>
                    <h1 className='mb-5  text-center'> <span className='font-weight-bold'>INDIA</span> COVID DASHBOARD</h1>

                    <div  className='table-responsive'>
                        <table className='table table-hover'>
                            <thead className='thead-dark'>
                                <tr>
                                    <th>
                                        State
                                    </th>
                                    
                                    <th>Positive</th>
                                    <th>Negative</th>
                                    <th>positiveIncrease</th>
                                    <th>negativeIncrease</th>
                                    <th>deathIncrease</th>
                                    <th>total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map((curElem,ind)=> {
                                       return(
                                          <tr key={ind}>
                                            <th>{curElem.state}</th>
                                            
                                            
                                            <td>{curElem.positive}</td>
                                            <td>{curElem.negative}</td>
                                            <td>{curElem.positiveIncrease}</td>
                                            <td>{curElem.negativeIncrease}</td>
                                            <td>{curElem.deathIncrease}</td>
                                            <td>{curElem.total}</td>
                                        </tr> 
                                       ) 
                                    })
                                }
                                
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Covid
