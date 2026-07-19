import "./StarRating.css";

export default function StarRating({
    rating,
    onChange,
    readonly=false
}){

    return(

        <div className="star-rating">

        {

            [1,2,3,4,5].map((star)=>(

                <button

                key={star}

                type="button"

                disabled={readonly}

                className={

                    rating>=star

                    ?

                    "star active"

                    :

                    "star"

                }

                onClick={()=>onChange?.(star)}

                >

                    ★

                </button>

            ))

        }

        </div>

    )

}