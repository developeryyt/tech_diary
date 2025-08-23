import {LINK_PATH} from "../../common/routesConfig.ts";
import {Link, NavLink} from "react-router";

const LinkList = ({ className }) => {

    return (
        <ul className={className}>
            {
                LINK_PATH.map((list) => {
                    return (
                        <li key={list.id}>
                            <NavLink to={`/${list.id}`} end>{list.id}</NavLink>
                        </li>
                    )
                })
            }
        </ul>
    )
}




export default LinkList
