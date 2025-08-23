import './header.module.scss'

export interface PATH {
    id: string;
    to?: string;
}


const HEADERPATH: PATH[] = [
    {
        id: 'blog',

    },
    {
        id: 'profile',

    },
    {
        id: '',
        to: ''
    }
]

const Header = () => {


    return (
        <header className='header'>
            <ul>
                {
                    HEADERPATH.map((list) => {
                        return (
                            <li key={list.id}>
                                {list.id}
                            </li>
                        )
                    })
                }
            </ul>
        </header>
    );
};

export default Header;
