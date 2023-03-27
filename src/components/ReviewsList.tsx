import React from 'react'
import { IReview } from '../interface'
const mobileMediaQuery = window.matchMedia("(max-width: 450px)").matches;

type ReviewListProps = {
    reviews: IReview[]
}

export const ReviewsList: React.FC<ReviewListProps> = ({ reviews }) => {
    if (reviews.length === 0) {
        return <p>Not any reviews yet!</p>
    }
    let count = 0

    return (
        <div className='MainBlock_reviews_container'>
            <img src="/images/Rectangle 159.png" alt="" />
            <h1>Lorem ipsum, dolor sit adipisicing elit.</h1>
            <div className='MainBlock_reviews_list'>
                {reviews.map((review, index) => {
                    const classes = ['review']
                    if (review.review) {

                        classes.push(`withText${count}`)
                    }
                    count++
                    if (mobileMediaQuery) {
                        return (
                            (index === 0) ?
                                <div className={classes.join('_')} key={classes.join('_')}>
                                    <div className='review_title'>
                                        <div className='first_commas_block'>
                                            <img className='commas' src="/images/Comma(grey).png" alt="" />
                                            <img className='commas' src="/images/Comma(grey).png" alt="" />
                                        </div>
                                        <img className='author_pic' src="/images/Rectangle 88.png" alt="author pic" />
                                        <div className='second_commas_block'>
                                            <img className='commas' src="/images/Comma-reverse(grey).png" alt="" />
                                            <img className='commas' src="/images/Comma-reverse(grey).png" alt="" />
                                        </div>
                                    </div>
                                    <div className='textContainer'>
                                        <span className={`container_${review.author}`}>{review.review}</span>
                                        <span className={`container_${review.author}`}><strong>{review.author}</strong></span>
                                    </div>
                                </div> : (index === 1) ?
                                    <div className={classes.join('_')} key={classes.join('_')}>
                                        <div className='first_commas_block'>
                                            <img className='commas' src="/images/Vector.png" alt="" />
                                            <img className='commas' src="/images/Vector.png" alt="" />
                                        </div>
                                        <div className='textContainer'>
                                            <span className={`container_${review.author}`}>{review.review}</span>
                                            <span className={`container_${review.author}`}><strong>{review.author}</strong></span>
                                        </div>
                                        <img className='author_pic' src="/images/Rectangle 88.png" alt="author pic" />
                                        <div className='second_commas_block'>
                                            <img className='commas' src="/images/Vector(reverse).png" alt="" />
                                            <img className='commas' src="/images/Vector(reverse).png" alt="" />
                                        </div>
                                    </div> : <div className={classes.join('_')} key={classes.join('_')}>
                                        <img className='author_pic' src="/images/Rectangle 88.png" alt="author pic" />
                                        <div className='first_commas_block'>
                                            <img className='commas' src="/images/Vector.png" alt="" />
                                            <img className='commas' src="/images/Vector.png" alt="" />
                                        </div>
                                        <div className='textContainer'>
                                            <span className={`container_${review.author}`}>{review.review}</span>
                                            <span className={`container_${review.author}`}><strong>{review.author}</strong></span>
                                        </div>
                                        <div className='second_commas_block'>
                                            <img className='commas' src="/images/Vector(reverse).png" alt="" />
                                            <img className='commas' src="/images/Vector(reverse).png" alt="" />
                                        </div>
                                    </div>
                        )
                    } else {
                        return (
                            (index === 0) ?
                                <div className={classes.join('_')} key={classes.join('_')}>
                                    <img className='author_pic' src="/images/Rectangle 88.png" alt="author pic" />
                                    <div className='first_commas_block'>
                                        <img className='commas' src="/images/Vector.png" alt="" />
                                        <img className='commas' src="/images/Vector.png" alt="" />
                                    </div>
                                    <div className='textContainer'>
                                        <span className={`container_${review.author}`}>{review.review}</span>
                                        <span className={`container_${review.author}`}><strong>{review.author}</strong></span>
                                    </div>
                                    <div className='second_commas_block'>
                                        <img className='commas' src="/images/Vector(reverse).png" alt="" />
                                        <img className='commas' src="/images/Vector(reverse).png" alt="" />
                                    </div>
                                </div> : (index === 1) ?
                                    <div className={classes.join('_')} key={classes.join('_')}>
                                        <div className='first_commas_block'>
                                            <img className='commas' src="/images/Vector.png" alt="" />
                                            <img className='commas' src="/images/Vector.png" alt="" />
                                        </div>
                                        <div className='textContainer'>
                                            <span className={`container_${review.author}`}>{review.review}</span>
                                            <span className={`container_${review.author}`}><strong>{review.author}</strong></span>
                                        </div>
                                        <img className='author_pic' src="/images/Rectangle 88.png" alt="author pic" />
                                        <div className='second_commas_block'>
                                            <img className='commas' src="/images/Vector(reverse).png" alt="" />
                                            <img className='commas' src="/images/Vector(reverse).png" alt="" />
                                        </div>
                                    </div> : <div className={classes.join('_')} key={classes.join('_')}>
                                        <img className='author_pic' src="/images/Rectangle 88.png" alt="author pic" />
                                        <div className='first_commas_block'>
                                            <img className='commas' src="/images/Vector.png" alt="" />
                                            <img className='commas' src="/images/Vector.png" alt="" />
                                        </div>
                                        <div className='textContainer'>
                                            <span className={`container_${review.author}`}>{review.review}</span>
                                            <span className={`container_${review.author}`}><strong>{review.author}</strong></span>
                                        </div>
                                        <div className='second_commas_block'>
                                            <img className='commas' src="/images/Vector(reverse).png" alt="" />
                                            <img className='commas' src="/images/Vector(reverse).png" alt="" />
                                        </div>
                                    </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}