import { posts, submenu } from "../data";



console.log('Posts:', posts);

const Blog = () => {
  return (
    <div className="news section">
      <h2>News</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt quo fugit hic odit!</p>
       <div className="news__container container">
          <section  className="post__container">
          {
            posts.map((post)=>( 
           <div className = 'post' key = {post.id}>
                <div  className="image__container">
                   <img src={post.image} alt="post image" />
                </div>
                <div className="post__details">
                <h2 className="title">{post.title}</h2>
                <div className="post__time">
                   <p>{post.time}</p>
                   <p>{post.category}</p>
                   <p>{post.noOfComment}</p>
                </div>
                <div className="post__text">
                  <p>{post.text}</p>
                </div>
             </div>
             <button className="btn more">Read More</button>
             </div>
            ))
          }
          </section> 
       </div>
    </div>
  )
}

export default Blog