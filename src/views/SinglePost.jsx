import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import sanityClient from '../client/client'
import imageUrlBuilder from '@sanity/image-url'
import BlockContent from '@sanity/block-content-to-react';

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)

}

export default function SinglePost() {
  const [singlePost, setSinglePost] = useState(null);
  const [authorImag, setAuthorImage] = useState(null)
  const { slug } = useParams()



  const GetSinglePost = async () => {

    await sanityClient.fetch(`*[slug.current =="${slug}"]{
   title,
   _id,
   slug,
   mainImage{
     asset->{
       _id,
       url
     }
   },
   body,
   "author":author,  
   "name":author->name,
   "authorImage": author->image
    }`)
      .then((data) => {
        setSinglePost(data[0])
      }).catch(console.error);
  }

  const Author = async () => {

    await sanityClient.fetch(`*[_type =="author"]{
      name,
      bio,
      "authorImage":image.asset->url
    }`)
      .then((re) => {
        setAuthorImage(re[0])
      })

  }

  useEffect(() => {
    GetSinglePost()
    Author()
  }, [])

  if (!singlePost) return <div>Loading.....</div>

  console.log(singlePost)
  return (

    <div>
      <section class="container">
        <div class="row">
          <div class="col-md-12 col-sm-12">
            <div class="education">
              <h2 class="white" style={{ textAlign: "center" }}>{singlePost.title}</h2>
              <img src={urlFor(singlePost.mainImage?.asset.url)} style={{ width: "100%" }} />
              <div class="education-content">
                <br />
                <img src={urlFor(authorImag?.authorImge).url()} />
                {/* <h4 class="education-title accent">ddd{singlePost.name}</h4> */}


              </div>
              <BlockContent
                blocks={singlePost.body}
                projectId="x87mr9hq"
                dataset="production"
              />
            </div>
            <hr />
            <h3>Author</h3>
            <div>                 <img src={urlFor(authorImag?.authorImage).url()} width="100" />
              <p style={{ color: "#EA1E63" }}> Hey there. I'm {authorImag?.name} </p>
              {/* <p style={{ color: "black" }}>{authorImag?.bio}</p> */}
              <BlockContent />
            </div>

          </div>

        </div>
      </section>
    </div>
  )

}
