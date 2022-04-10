import { createContext, useState } from "react"; //react/cjs/react.production.min

export const BlogContext = createContext();

export const BlogContextProvider = ({ children }) => {

    const [contents, setContents] = useState([
        {_id: "22444", title: "The Big Deal", content: "The short story about the big deal mean still deal with"}
    ]);

    const addContent = (cont) => setContents([...contents, cont]);

    const removeContent = (cont) => setContents(contents.filter( item => item._id !== cont._id ));

    const editContent = (cont) => {
        console.log(cont);
    }

    return (
        <BlogContext.Provider value={{
            contents,
            addContent,
            removeContent,
            edit: editContent
        }}>
            { children }
        </BlogContext.Provider>
    )
}