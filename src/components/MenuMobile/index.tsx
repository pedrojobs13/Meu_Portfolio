import { useContext } from 'react';
import { MenuContext } from '../Menu';
import style from './style.module.scss'

interface PropsMenu {

    handleMenuClickProps: (event: React.MouseEvent<HTMLElement>) => void;
}

export default function MenuMobile({ handleMenuClickProps }: PropsMenu) {
    const { handleVisibleMenu, navLink } = useContext(MenuContext);
    const menu = navLink;

    function handleMenuVisible(event: React.MouseEvent<HTMLElement>) {
        handleMenuClickProps(event);
        handleVisibleMenu();
    }

    return (
        <div className={style.container}>
            <ul>
                {menu.map((elem, index) => (
                    <li key={index}>
                        <a
                            href={`#${elem.toLocaleLowerCase()}`}
                            onClick={handleMenuVisible}
                        >
                            {elem}
                        </a>
                    </li>
                ))}
            </ul>
        </div>

    )
}