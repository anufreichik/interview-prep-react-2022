import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link> |{" "}
                <Link to="todo">Todos</Link> |{" "}
                <Link to="algoquestions">AlgoQuestions</Link>|{" "}
                <Link to="debounce">Debounce</Link>|{" "}
                <Link to="autocomplete">Autocomplete</Link>|{" "}
                <Link to="marketplace">Market Place</Link>|{" "}
                <Link to="office">Office</Link>|{" "}
            </nav>
            <div className="content">
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Layout;
