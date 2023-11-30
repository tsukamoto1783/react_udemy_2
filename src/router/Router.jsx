import { Switch, Route } from "react-router-dom";


import { Home } from "../components/Home";

import { page1Routes } from "./Page1Routes";
import { page2Routes } from "./Page2Routes";
import { Page404 } from "../components/Page404";




export const Router = () => {
    return (
        <Switch>
            {/* exact: pathの完全一致かどうかを判定 */}
            <Route Route exact path="/" >
                <Home />
            </Route >

            <Route
                path="/page1"
                render={({ match: { url } }) => (
                    <Switch>
                        {page1Routes.map((route) => (
                            // console.log(route),
                            <Route
                                key={route.path}
                                exact={route.exact}
                                path={`${url}${route.path}`}
                                render={() => route.children}
                            />
                        ))}
                    </Switch>
                )}
            />
            <Route
                path="/page2"
                render={({ match: { url } }) => (
                    <Switch>
                        {page2Routes.map((route) => (
                            <Route
                                key={route.path}
                                exact={route.exact}
                                path={`${url}${route.path}`}
                                render={() => route.children}
                            />
                        ))}
                    </Switch>
                )}
            />
            <Route path="*">
                <Page404 />
            </Route>

        </Switch >
    )
};