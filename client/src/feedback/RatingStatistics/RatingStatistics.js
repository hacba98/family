import React from 'react';

import './RatingStatistics.css';

export default function RatingStatistics() {

    return (
        <div className="RatingStatisticsContainer">
            <div className="RatingBoardContainer__Header">
                Ratings
            </div>

            <table>
                <tr>
                    <td>
                        <a className="star-selected" ><div style={{width: "100%" }}>★</div></a>
                    </td>
                    <td><div className="RatingStatistics__Percentage" style={{backgroundColor: '#d32f2f',width:"11%"}}></div></td>
                    <td>11%</td>
                </tr>

                <tr>
                    <td>
                        <a className="star-selected" ><div style={{ width: "100%" }}>★</div></a>
                        <a className="star-selected" ><div style={{ width: "100%" }}>★</div></a>
                    </td>
                    <td><div className="RatingStatistics__Percentage" style={{backgroundColor: '#EF6C00',width:"5%"}}></div></td>
                    <td>5%</td>
                </tr>

                <tr>
                    <td>
                        <a className="star-selected" ><div style={{ width: "100%" }}>★</div></a>
                        <a className="star-selected" ><div style={{ width: "100%" }}>★</div></a>
                        <a className="star-selected" ><div style={{ width: "100%" }}>★</div></a>
                    </td>
                    <td><div className="RatingStatistics__Percentage" style={{backgroundColor: '#F9A825',width:"15%"}}></div></td>
                    <td>15%</td>
                </tr>

                <tr>
                    <td>
                        <a className="star-selected" ><div style={{ width: "100%" }}>★</div></a>
                        <a className="star-selected" ><div style={{ width: "100%" }}>★</div></a>
                        <a className="star-selected" ><div style={{ width: "100%" }}>★</div></a>
                        <a className="star-selected" ><div style={{ width: "100%" }}>★</div></a>
                    </td>
                    <td><div className="RatingStatistics__Percentage" style={{backgroundColor: '#CDDC39',width:"27%"}}></div></td>
                    <td style={{textColor:"green"}}>27%</td>
                </tr>

                <tr>
                    <td>
                        <a className="star-selected" ><div style={{ width: "100%" }}>★</div></a>
                        <a className="star-selected" ><div style={{ width: "100%" }}>★</div></a>
                        <a className="star-selected" ><div style={{ width: "100%" }}>★</div></a>
                        <a className="star-selected" ><div style={{ width: "100%" }}>★</div></a>
                        <a className="star-selected" ><div style={{ width: "100%" }}>★</div></a>
                    </td>
                    <td><div className="RatingStatistics__Percentage" style={{backgroundColor: '#4CAF50',width:"42%"}}></div></td>
                    <td>42%</td>
                </tr>
            </table>
        </div>
    );
}
