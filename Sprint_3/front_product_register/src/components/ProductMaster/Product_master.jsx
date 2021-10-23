import './PM_styles.css'
import Ownfooter from '../Footer/Ownfooter'
import { Ownheader } from '../Header/Ownheader'
import { NavLink } from 'react-router-dom';

export function Product_Master() {

    return (
        <div className='App'>
            <Ownheader/>
            <div className="body">
                <div className="sidebar">
                    <div className="sidebar_title">
                        <h1>Product List</h1>
                    </div>
                    <div class="product_list">
                        <ul>
                            <li>
                                <a href="#" class="active"><span>Product #1</span></a>
                            </li>
                            <li>
                                <a href="#"><span>Product #2</span></a>
                            </li>
                            <li>
                                <a href="#"><span>Product #3</span></a>
                            </li>
                            <li>
                                <a href="#"><span>Product #4</span></a>
                            </li>
                            <li>
                                <a href="#"><span>Product #5</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="product_info">
                    <div className="headerp">
                        <h1>Product Search</h1>
                        <div class="search">
                            <input type="search" placeholder="Search here"/>
                        </div>
                    <div className="mainp">
                            <div className="product_box">
                                <div className="box_header">
                                    <h2>Product #1</h2>
                                    <button>Modify</button>
                                </div>
                                <div className="box_body">
                                    <div className="table_responsive">
                                        <table width="100%">
                                            <thead>
                                                <tr>
                                                    <td>Yogurt</td>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Product ID</td>
                                                    <td>ID 6173485f304b76337e3d3627</td>
                                                </tr>
                                                <tr>
                                                    <td>Description</td>
                                                    <td>Yogurt</td>
                                                </tr>
                                                <tr>
                                                    <td>Unit Value</td>
                                                    <td>17800</td>
                                                </tr>
                                                <tr>
                                                    <td>Current State</td>
                                                    <td>Valiable</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                    </div>
                    </div>
                </div>
            </div>
            <Ownfooter/>
        </div>
    )
}
