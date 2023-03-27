import React from 'react'
import { useState } from 'react'
import { IQA } from '../interface'
import { QABlock } from './QABlock'
import remote from '../Button/Button_vector_remote.png'
import mail from '../Button/Button_vector_mail.png'
import notAnIdea from '../Button/Button_vector_notAnIdea.png'
import light from '../Button/Button_vector_light.png'
import power from '../Button/Button_vector_power.png'


const picArray = [remote, mail, notAnIdea, light, power]


type QAProps = {
    qas: IQA[]
}

export const QAList: React.FC<QAProps> = ({ qas }) => {
    const [isBtnClicked, setBtnClickedState] = useState<number | null>(null);
    if (qas.length === 0) {
        return <p>Not any qas yet!</p>
    }
    let count = 0;

    const showActiveBtn = (activeIndex: number | null, index: number): boolean => {
        setBtnClickedState(index)

        if (activeIndex === isBtnClicked) {
            return true;
        }
        return true;
    }


    return (
        <div className='MainBlock_qas_list'>
            <img src="/images/Rectangle 159.png" alt="" />
            <h1>Lorem ipsum, dolor sit adipisicing elit.</h1>
            <h3>Porro ab rerum omnis magnam eligendi error nobis dolore?</h3>
            <div className='MainBlock_qas_list_button_container'>
                {qas.map((QA, index) => {
                    const classes = ['QA']
                    if (QA.answer) {

                        classes.push(`withText${count}`)
                    }
                    count++
                    for (let i = 0; i < picArray.length; i++) {
                        return (
                            <div className={classes.join(' ')}>
                                <QABlock
                                    key={count}
                                    QAQuestion={QA.question}
                                    QAAnswer={QA.answer}
                                    buttonPicture={picArray[count - 1]}
                                    activeIndex={isBtnClicked}
                                    currentIndex={index}
                                    showActiveBtn={showActiveBtn}
                                />
                            </div>
                        )
                    }
                    return true

                })}
            </div>
        </div>
    )
}