import React, {useState} from "react";

type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

export function Rating() {
    const [rating, setRating] = useState(0)

    function setStars(star: number) {
        setRating(star)
    }

    console.log("Rating Rendered")
    return (
        <div>
            <Star selected={rating > 0} setStars={setStars} currentRating = {1}/>

            <Star selected={rating > 1} setStars={setStars} currentRating = {2}/>

            <Star selected={rating > 2} setStars={setStars} currentRating = {3}/>

            <Star selected={rating > 3} setStars={setStars} currentRating = {4}/>

            <Star selected={rating > 4} setStars={setStars} currentRating = {5}/>

        </div>
    )


}

type StarPropsType = {
    selected: boolean
    setStars: (currentNumber: number)=> void
    currentRating: number
}

function Star(props: StarPropsType) {


    return props.selected ? <span onClick={() => {props.setStars(props.currentRating)}}><b>star </b></span> :
        <span onClick={() => {props.setStars(props.currentRating)}}>star </span>
}