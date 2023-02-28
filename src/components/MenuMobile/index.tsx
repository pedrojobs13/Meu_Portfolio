import style from './style.module.scss'
export default function MenuMobile() {




    function handleMenuClick(event: React.MouseEvent<HTMLElement>) {
        event.preventDefault();

        const el = event.target as HTMLInputElement
        const targetAttr = el.getAttribute('href')
        const location = document.querySelector(`${targetAttr}`);

        if (location instanceof HTMLElement) {
            const valueoffSeat = location.offsetTop;
            window.scroll({
                left: 0,
                top: valueoffSeat - 64,
            })
        }

    }

    return (
        <div className={style.container}>
            <ul>
                <li><a href='#home' onClick={handleMenuClick}> Home</a></li>
                <li><a href='#sobre' onClick={handleMenuClick}>Sobre</a></li>
                <li><a href='#serviços' onClick={handleMenuClick}>Serviços</a></li>
                <li><a href='#portfolio' onClick={handleMenuClick}>Portfólio</a></li>
                <li><a href='#contato' onClick={handleMenuClick}>Contato</a></li>
            </ul>
        </div>
    )
}