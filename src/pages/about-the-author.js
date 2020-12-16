import React from 'react'
import { Helmet } from 'react-helmet';
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import AuthorImg from '../../static/author/main_author.png'

const ATB = (props)=>{
	
	return (
		<> 
		 	<Layout>
		        <Helmet title="About the Author | Rachel G. Carrington" />
		 		<Nav pathExt={props.path}/>

                <Banner 
                    spanFirst={`About The`} 
                    contextHeading={`Author`}/>
                
		 		<div className="container">
				    <section className="body-author-contents columns">
                        <div className="heading-quote column">
                            <div className="author-image-container">
                                <img src={AuthorImg} />
                            </div>

                            <div className="heading-quote">
                                <h4>
                                  “When you hold on long enough, love will find a way to make it work somehow”.
                                </h4>
                                <span className="ata-span-fx">
                                    author quote
                                </span>
                            </div>
                        </div>

                        <article className="article-section column" id="author">
                            <p>
                                Rachel G. Carrington was born in a small southern
                                Kentucky town in 1930. She was first-born of eleven
                                children to loving, but strict, low-income parents
                                who struggled to keep food on the table and could
                                afford little more than that. Attending school
                                and earning a high school diploma was a given but,
                                lack of funds made further education impossible.
                            </p>

                            <p>
                               Rachel's desire to learn made it easy to comply with
                               her parent's demands of school attendance and, as a result,
                               she was offered a prestigious scholarship during her senior
                               year of high school. A common wad of paper changed things
                               drastically, causing her to abruptly choose another path.
                            </p>

                            <p>
                                Though void of higher education, fantastic employment or 
                                honors earned, Rachel's multifaceted life was filled with 
                                a special kind of joy in her sixty-two years of marriage.
                                Follow her journey as she travels this path through hardships
                                and successes, filled with love as she and her chosen mate
                                successfully bring two families together and work toward
                                success in making life easier for all concerned. Through it all,
                                the Carringtons trust in the heavenly Father to see them through.
                            </p>

                            <p>
                                Rachel now makes her home in Ocala Florida. Besides her 
                                early life in Kentucky, she has previously resided in
                                Butler County Ohio and Honolulu (Waikiki) Hawaii. 
                                She continues to write and hopes to have a sequel 
                                to The Early Years in the near future.
                            </p>

                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author | Writer </span>
                                    <span className="ata-name">Rachel G. Carrington</span>
                                </span>
                            </p>
                            
                        </article>
                    </section>
                </div>

		 	</Layout>
		</>
	)
}


export default ATB;
