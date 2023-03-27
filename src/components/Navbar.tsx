import React from 'react'
const mobileMediaQuery = window.matchMedia('(max-width: 450px)').matches;
const wideScreenMediaQuery = window.matchMedia('(min-width: 1620px)');

export const Navbar: React.FC = () => {
    const onBtnColrChanger = (event: React.MouseEvent<Element, MouseEvent>): void => {
        const target = event.target as HTMLElement
        let link = target.firstChild as HTMLLinkElement
        if (target.tagName === 'A') {
            let button = target.parentElement as HTMLButtonElement;
            target.style.color = '#FFFFFF'
            button.style.background = '#00C368'
        } else {
            link.style.color = '#FFFFFF'
            target.style.background = '#00C368'
        }
    }
    const offBtnColrChanger = (event: React.MouseEvent<Element, MouseEvent>): void => {
        const target = event.target as HTMLElement
        let link = target.firstChild as HTMLLinkElement
        if (target.tagName === 'A') {
            let button = target.parentElement as HTMLButtonElement;
            target.style.color = '#A6ABBD'
            button.style.background = '#F5F5F5'
        } else {
            link.style.color = '#A6ABBD'
            target.style.background = '#F5F5F5'
        }
    }
    if (mobileMediaQuery){
        return(
            <nav>
                <div className="nav-wrapper">
                    <div className='nav-wrapper-logo-corner'>
                        <h1>PRODUCT</h1>
                        <div className='nav-wrapper-logo-corner-images'>
                            <img className="nav-wrapper-logo-corner-arrow" src="/images/Vector1.png" alt="arrow" />
                            <div className='nav-wrapper-logo-corner-numbers'>
                                <img src="/images/Vector(2).png" alt="vector of 2" />
                                <img src="/images/Vector(4).png" alt="vector of 4" />
                            </div>
                        </div>
                    </div>
                </div>
            </nav >
        )
    }else{
        return(
            <nav>
                <div className="nav-wrapper">
                    <div className='nav-wrapper-logo-corner'>
                        <h1>PRODUCT</h1>
                        <div className='nav-wrapper-logo-corner-images'>
                            <img className="nav-wrapper-logo-corner-arrow" src="/images/Vector1.png" alt="arrow" />
                            <div className='nav-wrapper-logo-corner-numbers'>
                                <img src="/images/Vector(2).png" alt="vector of 2" />
                                <img src="/images/Vector(4).png" alt="vector of 4" />
                            </div>
                        </div>
                    </div>
                    <button
                        onMouseOver={ev => onBtnColrChanger(ev)}
                        onMouseOut={ev => offBtnColrChanger(ev)}
                    >
                        <a href="/">Navitem1</a>
                    </button>
                    <button
                        onMouseOver={ev => onBtnColrChanger(ev)}
                        onMouseOut={ev => offBtnColrChanger(ev)}
                    >
                        <a href="/">Navitem2</a></button>
                    <button
                        onMouseOver={ev => onBtnColrChanger(ev)}
                        onMouseOut={ev => offBtnColrChanger(ev)}
                    >
                        <a href="/">Navitem2</a></button>

                </div>
            </nav >
        )
    }
}