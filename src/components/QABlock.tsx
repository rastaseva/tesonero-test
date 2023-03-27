import React, { useState, useEffect } from 'react'
const mobileMediaQuery = window.matchMedia("(max-width: 450px)").matches;

type QAProps = {
    QAQuestion: string
    QAAnswer: string
    buttonPicture: string
    activeIndex: number | null
    currentIndex: number
    showActiveBtn: (activeIndex: number | null, index: number) => boolean
}


export const QABlock: React.FC<QAProps> = ({ QAQuestion, QAAnswer, buttonPicture, activeIndex, currentIndex, showActiveBtn }) => {
    const [QAs, setQAs] = useState<Array<Element>>([])
    useEffect(() => {
        const getQAs = async () => {
            const data = await Array.from(document.querySelectorAll('.MainBlock_qas_list_button_container div'));

            setQAs(data);
        }
        getQAs();

    }, [])



    const buttonHandler = (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        ev.preventDefault();
        const target = ev.target as HTMLElement;
        let arrowBtn = target.lastChild as HTMLImageElement;
        let textContainer = target.nextElementSibling as HTMLElement;
        if (target.tagName === 'IMG') {
            let button = target.parentElement as HTMLElement;
            let textContainer = button.nextElementSibling as HTMLElement;
            if (target === button.lastChild) {
                if (textContainer.style.maxHeight) {
                    target.style.transform = 'scale(1,1)'
                    textContainer.style.maxHeight = ''
                    button.style.color = '#2E3A59'
                } else {
                    target.style.transform = 'matrix(1, 0, 0, -1, 0, 0)'
                    textContainer.style.maxHeight = textContainer.scrollHeight + 'px'
                    button.style.color = '#00C368'
                }
            } else {
                let arrowBtn = button.lastChild as HTMLImageElement;

                if (textContainer.style.maxHeight) {
                    arrowBtn.style.transform = 'scale(1,1)'
                    textContainer.style.maxHeight = ''
                    button.style.color = '#2E3A59'
                } else {
                    arrowBtn.style.transform = 'matrix(1, 0, 0, -1, 0, 0)'
                    textContainer.style.maxHeight = textContainer.scrollHeight + 'px'
                    button.style.color = '#00C368'
                }
            }

        } else {

            if (textContainer.style.maxHeight) {
                arrowBtn.style.transform = 'scale(1,1)'
                textContainer.style.maxHeight = ''
                target.style.color = '#2E3A59'
            } else {
                arrowBtn.style.transform = 'matrix(1, 0, 0, -1, 0, 0)'
                textContainer.style.maxHeight = textContainer.scrollHeight + 'px'
                target.style.color = '#00C368'
            }
        }
    }
    const closeOtherBtns = (element: Element) => {

        const target = element.firstChild as HTMLElement;
        let arrowBtn = target.lastChild as HTMLImageElement;
        let textContainer = target.nextElementSibling as HTMLElement;
        if (target.tagName === 'IMG') {
            let button = target.parentElement as HTMLElement;
            let textContainer = button.nextElementSibling as HTMLElement;
            if (target === button.lastChild) {
                if (textContainer.style.maxHeight) {
                    target.style.transform = 'scale(1,1)'
                    textContainer.style.maxHeight = ''
                    button.style.color = '#2E3A59'
                }
            } else {
                let arrowBtn = button.lastChild as HTMLImageElement;

                if (textContainer.style.maxHeight) {
                    arrowBtn.style.transform = 'scale(1,1)'
                    textContainer.style.maxHeight = ''
                    button.style.color = '#2E3A59'
                }
            }
        } else {
            if (textContainer.style.maxHeight) {
                arrowBtn.style.transform = 'scale(1,1)'
                textContainer.style.maxHeight = ''
                target.style.color = '#2E3A59'
            }
        }
    }

    const checkClickedBtns = () => {
        if (activeIndex === currentIndex) {
            for (let i = 0; i < QAs.length; i++) {
                if (QAs[i].className.includes(`${activeIndex}`)) {
                } else {
                    closeOtherBtns(QAs[i])
                }
            }
        }
    }
    if (mobileMediaQuery) {
        return (
            <>
                {checkClickedBtns()}
                <button
                    onClick={ev => {
                        if (activeIndex !== currentIndex) {
                            showActiveBtn(activeIndex, currentIndex)
                            buttonHandler(ev)
                        } else {
                            showActiveBtn(activeIndex, currentIndex)
                            buttonHandler(ev)
                        }
                    }}
                >
                    {QAQuestion}
                    <img src="/images/button_arrow.png" alt="Arrow" />
                </button>
                <span className='QAContainer_text'>{QAAnswer}</span>
            </>
        )
    } else {
        return (
            <>
                {checkClickedBtns()}
                <button
                    onClick={ev => {
                        if (activeIndex !== currentIndex) {
                            showActiveBtn(activeIndex, currentIndex)
                            buttonHandler(ev)
                        } else {
                            showActiveBtn(activeIndex, currentIndex)
                            buttonHandler(ev)
                        }
                    }}
                >
                    <img src={buttonPicture} alt="" />
                    {QAQuestion}
                    <img src="/images/button_arrow.png" alt="Arrow" />
                </button>
                <span className='QAContainer_text'>{QAAnswer}</span>
            </>
        )
    }

}