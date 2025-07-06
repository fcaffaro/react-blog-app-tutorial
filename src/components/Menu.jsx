
const Menu =  () => {

    const posts = [
        {
            id: 1,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptatum.",
            img: "https://images.unsplash.com/photo-1686466888700-2f3b8c6d4e5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        },
        {
            id: 2,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptatum.",
            img: "https://images.unsplash.com/photo-1686466888700-2f3b8c6d4e5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        },
        {
            id: 3,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, voluptatum.",
            img: "https://images.unsplash.com/photo-1686466888700-2f3b8c6d4e5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        },

    ];
    return (
        <div className="menu">
            <h1>Other posts you may like</h1>
            {

            posts.map((post) => (
                <div key={post.id} className="post">
                    <img src={post.img}></img>
                    <h2>{post.title}</h2>
                    <button onClick={() => {}}>Read More</button>
                </div>
            ))
            }
        </div>
    )
}
export default Menu;