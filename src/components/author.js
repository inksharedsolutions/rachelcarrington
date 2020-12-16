import React from 'react'
import AuthorImg from '../../static/author/main_author.png'

const Author = () =>{
    return(
        <>
            <section className="upper-main" id="main-upper-author">
                <div className="grid-two-columns">

                     <div className="grid-child" id="author-contents">

                        <p>
                          Rachel G. Carrington was born in a small southern
                          Kentucky town in 1930. She was first-born of eleven
                          children to loving, but strict, low-income parents
                          who struggled to keep food on the table and could
                          afford little more than that. Attending school and
                          earning a high school diploma was a given but,
                          lack of funds made further education impossible.
                        </p>

                        <h1 className="author-name-tag">
                            <span>Rachel G.</span>
                            <span>Carrington</span>
                        </h1>
                        
                        <span className="author-tagline">Author & Writer</span>

                     </div>

                    <div className="grid-child" id="author-image-container">
                        <img alt="author-img" src={AuthorImg}/>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Author;