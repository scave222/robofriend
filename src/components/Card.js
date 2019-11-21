import React from 'react';

//WE HAVE DESTRUCTURE THIS
const Card = ({name, email, id}) => {

    return(
            <div className='bg-light-green dib br3 ma2 grow bw2 shadow-5 tc'>
                <img alt='robots' src={`https://robohash.org/${id}?200*200`}/>
                <div>
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
            </div>
    );
}

export default Card;


//WE HAVE NOT DESTRUCTURE THIS 
// import React from 'react';

// const Card = (props) => {
//     return(
//             <div className='bg-light-green dib br3 ma2 grow bw2 shadow-5 tc'>
//                 <img alt='robots' src={`https://robohash.org/${props.id}?200*200`}/>
//                 <div>
//                     <h2>{props.name}</h2>
//                     <p>{props.email}</p>
//                 </div>
//             </div>
//     );
// }

// export default Card;