import React from 'react'
import abstract3 from "../images/abstract3.png";
import abstract2 from "../images/abstract2.jpeg";

const ProductSell = () => {
    return (
        <>
            <div className="col-lg-12">
                <div className='bg-white-rounded'>
                    <div className="d-flex" style={{ whiteSpace: 'nowrap' }}>
                        <h1 className="userHeading2">Product Sell</h1>

                        <div className='right-search-bar'>

                            <div className='main'>
                                <div className="form-group has-search">
                                    <span className="fa fa-search form-control-feedback"></span>
                                    <input type="text" className="form-control full-width" placeholder="Search" />
                                </div>
                            </div>

                            <div>
                                <select className="form-select" aria-label="Default select">
                                    <option defaultValue>Last 30 days</option>
                                    <option value="1">1 Week</option>
                                    <option value="2">2 Week</option>
                                    <option value="3">2 Months</option>
                                </select>
                            </div>
                        </div>

                    </div>
                    <section style={{marginTop:'20px'}} className='OverflowScroll'>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Product Name</th>
                            <th scope="col" className='text-center'>Stock</th>
                            <th scope="col" className='text-center'>Price</th>
                            <th scope="col" className='text-center'>Total Sales</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">
                                <div className='d-flex'>
                                    <img src={abstract3} height={40} width={70} className='ProductImg' alt='abstract'/>
                                    <div className='table-text'>
                                        <h3 className='table-heading'>abstract 3D</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                </div>
                            </th>
                            <td className='text-center stock-td'>32 in stock</td>
                            <td className='text-center rate-td'>$ 45.99</td>
                            <td className='text-center stock-td'>20</td>
                        </tr>

                        <tr>
                            <th scope="row">
                                <div className='d-flex'>
                                    <img src={abstract2} height={40} width={70} className='ProductImg' alt='abstract'/>
                                    <div className='table-text'>
                                        <h3 className='table-heading'>abstract 3D</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </div>
                                </div>
                            </th>
                            <td className='text-center stock-td'>32 in stock</td>
                            <td className='text-center rate-td'>$ 45.99</td>
                            <td className='text-center stock-td'>20</td>
                        </tr>


                    </tbody>
                </table>
            </section>
                </div>
            </div>
        </>
    )
}

export default ProductSell