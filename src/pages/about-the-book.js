import React from 'react'
import { Helmet } from 'react-helmet';
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book1 from '../../static/books/Book_Cover.png'



const ATB = (props)=>{

    const slug =(props.location.href);
    
	const disqusConfig = {
	  shortname: 'rachel-g-carrington',
	  config: { identifier:  12, slug}
    }
      

	return (
		<>
		 	<Layout>
		        <Helmet title="About the Book | Rachel G. Carrington" />
		 		<Nav pathExt={props.path}/>
                 
		 		<Banner
                    spanFirst={`About The`}
                    contextHeading={`Book`}
                />

                <main className="wrapperMain">
                    <div 
                        className="container"
                        id="book-containers" >

                            <BookInfo
                                data={{
                                    title:`The Early Years`,
                                    spanFirst:`A Memoir`,
                                    imgSrc: Book1,
                                    id:'',
                                    content:
                                    `
                                        <p>
                                          Rachel’s story is a true one of young love, joys,
                                          and triumphs experienced, but also is about
                                          difficulties of being and staying together as they
                                          are beset by hardships, disappointments, and struggles
                                          toward making a good life for themselves. 
                                        </p> 

                                        <p>
                                          Her story begins in her early teens while growing
                                          up in Southern Kentucky and being the oldest child
                                          in a large family of very strict parents. She relates
                                          of the rigors involved during post–Great Depression years,
                                          through WWII, and in her high school years. As a senior
                                          in high school with a diploma, a certainty along with a
                                          lucrative scholarship promised, she begins to see that her
                                          dreams of becoming a teacher can really happen. 
                                       </p>
                                    `,

                                    ebooks:{
                                        stratton:'https://www.stratton-press.com/books/the-early-years-a-memoir-matters-of-the-heart-book-1/',
                                        barnes:'#',
                                        amazon:'https://www.amazon.com/Early-Years-Memoir-Matters-Heart/dp/164345434X/ref=sr_1_1?keywords=9781643454344&qid=1571761115&sr=8-1', 
                                    },
                                    paperback:{
                                        amazon:'https://www.amazon.com/Early-Years-Memoir-Matters-Heart/dp/164345434X/ref=sr_1_1?keywords=9781643454344&qid=1571761115&sr=8-1',
                                        barnes:'#',
                                        booksamillion:'#',
                                    }
                                }} 
                            />

                            <div className="commentSection">
                                <div id="disqus_thread">
                                    <DiscussionEmbed {...disqusConfig} />
                                </div>
                            </div>
                    </div>	
                </main>


		 	</Layout>
		</>
	)
}


export default ATB;