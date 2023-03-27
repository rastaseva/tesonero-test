import React, { useEffect, useState } from 'react'
import { QAList } from '../components/QAList';
import { Images } from './Images'
import { IQA, IReview } from '../interface';
import { ReviewsList } from './ReviewsList';

const mobileMediaQuery = window.matchMedia("(max-width: 450px)").matches;



export const MainBlock: React.FC = (props) => {

    const [qas, setQAs] = useState<IQA[]>([]);
    const [reviews, setReviews] = useState<IReview[]>([]);

    const newArticle: IQA = {
        question: 'Lorem ipsum, dolor sit amet adipisicing elit.',
        answer: 'Laboriosam quas, aut consectetur animi autem aliquid consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae delenit'
    }

    const newReview: IReview = {
        title: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
        review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quas, aut consectetur animi  autem aliquid consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae deleniti, iste nisi expedita, provident excepturi officia! Porro ab rerum omnis magnam eligendi error nobis dolore? Porro ab rerum omnis magnam eligendi error nobis dolore? Porro ab rerum omnis magnam eligendi error nobis dolore?',
        author: 'Jane Doe'
    }
    useEffect(() => {
        const getQAs = async () => {
            setQAs(prev => Array(5).fill(newArticle))
        }
        const getReviews = async () => {
            setReviews(prev => Array(3).fill(newReview))
        }
        getQAs()
        getReviews()
    }, [])



    if (mobileMediaQuery) {
        return (
            <div className='MainBlock'>
                <div className='MainBlock-toppart'>
                    <Images />
                    <h1>Lorem ipsum, dolor sit amet consectetur </h1>
                </div>
                <div className='MainBlock-reviews_qas'>
                    <QAList
                        qas={qas}
                    />
                    <ReviewsList
                        reviews={reviews}
                    />
                </div>
            </div>);
    } else {
        return (
            <div className='MainBlock'>
                <div className='MainBlock-toppart'>
                    <img src="/images/Rectangle 159.png" alt="" />
                    <h1>Lorem ipsum, dolor sit amet consectetur </h1>
                    <Images />
                    <div className='MainBlock-background'>
                        <img src="/images/pattern.png" alt="" />
                        <img src="/images/pattern (1).png" alt="" />
                    </div>
                </div>
                <div className='MainBlock-reviews_qas'>
                    <ReviewsList
                        reviews={reviews}
                    />
                    <QAList
                        qas={qas}
                    />
                </div>
            </div>
        );
    }
}