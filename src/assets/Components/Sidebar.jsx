import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Sidebar() {
    return (
        <>
            <div className="row">

                {/* Sidebar */}
                <div className="col-lg-3">
                    <nav id="sidebarMenu" class="collapse d-lg-block sidebar collapse bg-white">
                        <div class="position-sticky">
                            <div class="list-group list-group-flush mx-3 mt-4">
                                <Link to={"/admin"} className='text-decoration-none'>
                                    <a href="#"
                                        class="list-group-item list-group-item-action py-2 ripple"
                                        aria-current="true">
                                        <i class="fas fa-tachometer-alt fa-fw me-3"></i><span>Main dashboard</span>
                                    </a>
                                </Link>
                                <Link to={"/admin/addproduct"} className='text-decoration-none'>
                                    <a href="#" class="list-group-item list-group-item-action py-2 ripple">
                                        <i class="fas fa-chart-area fa-fw me-3"></i><span>Add Products</span>
                                    </a>
                                </Link>
                                <Link to={"/admin/products"} className='text-decoration-none'>
                                    <a href="#" class="list-group-item list-group-item-action py-2 ripple"
                                    ><i class="fas fa-lock fa-fw me-3"></i><span>Products</span></a
                                    >
                                </Link>
                                <a href="#" class="list-group-item list-group-item-action py-2 ripple"
                                ><i class="fas fa-chart-line fa-fw me-3"></i><span>Logout</span></a
                                >
                            </div>
                        </div>
                    </nav>
                </div>

                {/* Child Componenets */}
                <div className="col-lg-9">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Sidebar
