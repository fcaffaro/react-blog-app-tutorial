import {Link} from "react-router-dom";
import {useContext} from "react";

const Home = () => {

    const posts = [
        {
            id: 1,
            title: "First Post",
            content: "This is the content of the first post.",
            img: "https://plus.unsplash.com/premium_photo-1683865776032-07bf70b0add1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXJsfGVufDB8fDB8fHww"
        },
        {
            id: 2,
            title: "Second Post",
            content: "This is the content of the second post.",
            img: "https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXJsfGVufDB8fDB8fHww"
        },
        {
            id: 3,
            title: "Third Post",
            content: "This is the content of the third post.",
            img: "https://images.unsplash.com/file-1707883121023-8e3502977149image?w=416&dpr=2&auto=format&fit=crop&q=60"
        }]



    return (
        <div className="home">
        <h1>Welcome to the Home Page</h1>

        <div className="posts">
            {posts.map((post) => (
                <div className="post" key={post.id}>
                    <div className="post-img">
                        <img src={post.img} alt="post image" />
                    </div>
                    <div className="post-content">
                        <Link to={`/posts/${post.id}`}>
                            <h2>{post.title}</h2>
                        </Link>
                        <p>{post.content}</p>
                        <button className="read-more">Read More</button>
                    </div>
                </div>
            ))}
        </div>

        <p>This is the main page of our application.</p>
        </div>
    );
}

export default Home;