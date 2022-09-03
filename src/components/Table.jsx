import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {FaArrowAltCircleLeft} from 'react-icons/fa'
import "./table.css"
const Table = () => {
    const [apiData, setApiData] = useState([]);
    const [loadMore, setLoadMore] = useState(50);
    const [toggle, setToggle] = useState(false);
    const fetchApi = () => {
        fetch('https://api.coincap.io/v2/assets')
            .then((res) => {
                return res.json();
            }).then((data) => {

                setApiData(data.data);
            })
    }
    useEffect(() => {
        fetchApi();
    }, [])
    return (
        <>
            <div className='mobile-view'>
             <div className='header'>
                <h5>Market Snapshot</h5>
                <h5><FaArrowAltCircleLeft className={toggle?'rotate':''} onClick={()=>{setToggle(!toggle)}}/></h5>
                </div>
               {toggle &&
                 <ul>
                 <li>
                     <p>Market Cap:</p>
                     <p>1.04t</p>
                 </li>
                 <li>
                     <p>Exchange val:</p>
                     <p>1.04t</p>
                 </li>
                 <li>
                     <p>Assets:</p>
                     <p>1.04t</p>
                 </li>
                 <li>
                     <p>Exchanges:</p>
                     <p>1.04t</p>
                 </li>
                 <li>
                     <p>Market :</p>
                     <p>1.04t</p>
                 </li>
                 <li>
                     <p>BTC Dom index</p>
                     <p>1.04t</p>
                 </li>
             </ul>
          
               }
            </div>
            <div className='wrapper'>
                <div className='box'>
                    <h3>MARKET CAB</h3>
                    <h3>$1.02T</h3>
                </div>
                <div className='box'>
                    <h3>EXCHANGE VOL</h3>
                    <h3>$45.41B</h3>
                </div>
                <div className='box'>
                    <h3>ASSETS</h3>
                    <h3>2,295</h3>
                </div>
                <div className='box'>
                    <h3>EXCHANGES</h3>
                    <h3>73</h3>
                </div>
                <div className='box'>
                    <h3>MARKETS</h3>
                    <h3>13,220</h3>
                </div>
                <div className='box'>
                    <h3>BTC DOM INDEX</h3>
                    <h3>37.4%</h3>
                </div>
            </div>
            <div className='table-wrapper'>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <td className='none'>Rank</td>
                            <td>Name</td>
                            <td>Price</td>
                            <td className='none'>Market Cap</td>
                            <td className='none'>VWAP(24Hr)</td>
                            <td className='none'>Supply</td>
                            <td className='none'>Volume(24Hr)</td>
                            <td>Change(24Hr)</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            apiData.slice(0,loadMore).map((el) => {
                                const { id, rank, name, priceUsd, marketCapUsd, vwap24Hr, supply, volumeUsd24Hr, changePercent24Hr, symbol } = el;
                                return (

                                    <tr key={id}>
                                        <td className='none'>{rank}</td>
                                        <td>
                                            <img src={`https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}%402x.png`} style={{height:"30px",width:"30px"}}/>
                                            {name}
                                            <p>{symbol}</p>
                                        </td>
                                        <td>${parseFloat(priceUsd).toFixed(2)}</td>
                                        <td className='none'>${parseFloat(marketCapUsd).toFixed(2)}b</td>
                                        <td className='none'>${parseFloat(vwap24Hr).toFixed(2)}</td>
                                        <td className='none'>{parseFloat(supply).toFixed(2)}m</td>
                                        <td className='none'>${parseFloat(volumeUsd24Hr).toFixed(2)}b</td>
                                        <td>{parseFloat(changePercent24Hr).toFixed(2)}%</td>
                                    </tr>

                                )
                            })
                            
                        }
                      
                    </tbody>

                </table>
                <button className='load-more' onClick={()=>{setLoadMore(loadMore+50)}}>Load More</button> 
            </div>
            {/* <footer>
                <div className='footer-box'>
                  <ul>
                    <li>
                        <h3>COINCAP.IO</h3>
                    </li>
                    <li>
                        <a href="#">Methodology</a>
                    </li>
                    <li>
                        <a href="#">Support</a>
                    </li>
                    <li>
                        <a href="#">Rate Comparison</a>
                    </li>
                   
                    <li>
                        <a href="#">Career</a>
                    </li>
                  </ul>
                </div>
            </footer> */}
        </>
    )
}

export default Table