const Write = () => {
    return <div className="write">
        <h1>Write a New Post</h1>
        <form>
            <div>
                <label htmlFor="title">Title:</label>
                <input type="text" id="title" name="title" required />
            </div>
            <div>
                <label htmlFor="content">Content:</label>
                <textarea id="content" name="content" rows="10" required></textarea>
            </div>
            <button type="submit">Publish</button>
        </form>
    </div>;
}

export default Write;