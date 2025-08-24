import {LINK_PATH} from "../../common/routesConfig.ts";
import {NavLink} from "react-router";
import type {CompProps} from "../../types";


const LinkList = ({ className }: CompProps) => {

    return (
        <ul className={className}>
            {
                LINK_PATH?.map((list) => {
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
