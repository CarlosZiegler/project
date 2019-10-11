import React from 'react';
import PropType from 'prop-types';
import Helmet from 'react-helmet';
import { graphql, Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from "../components/seo"
import Menu from "../components/menu";
import Footer from "../components/footer"

const PostTemplate = (props) => {
    const { data: { wordpressPost: post } } = props;
    return (
        <Layout>
            <SEO title="Page two"/>
            <Menu/>
            <Helmet
                title={post.title}
                meta={[
                    { name: 'description', content: post.excerpt },
                ]}
            />

            <article>
                    <div className="background-bar">

                    </div>

                <section className="container-fluid main-body">
                    <section className="row">
                        <div className="hidden-xs col-sm-1 col-md-2" />
                        <div className="col-xs-12 col-sm-10 col-md-8">
                            <div className="content-holder">
                                <div className="content-description">
                                    <h3>{post.title}</h3>

                                <div className="content-body">
                                    <p dangerouslySetInnerHTML={{ __html: post.content }} />
                                </div>

                                    <div className="row blog-info">
                                        <div className="col-xs-12 col-sm-6">
                      <span className="lead text-muted">
                        <i className="fa fa-clock-o" />
                          {' '}
                          Published:
                          {' '}
                          {post.date}
                          {post.tags}
                      </span>
                                        </div>
                                        <div className="col-xs-12 col-sm-6">

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hidden-xs col-sm-1 col-md-2" />
                    </section>
                </section>
            </article>
            <Link to="/blog/">Go Back</Link>
            <Footer/>
        </Layout>
    );
};
PostTemplate.propTypes = {
    data: PropType.shape({}).isRequired,
};
export default PostTemplate;

export const pageQuery = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
        title
        content
        excerpt
        date(formatString: "DD, MMM YYYY")
        slug
        featured_media{
          localFile{
            childImageSharp{
              id
              sizes( maxWidth: 800 ) {
                  ...GatsbyImageSharpSizes
              }
            }
          }
        }
        
        
        
    }
  }
`;