import './Editor.css'

export default function Editor({markDown, inputHandler}) {
    return (
        <div className='container-editor'>
            <header className='header-editor'><h1>Editor</h1></header>
            <textarea value={markDown} id="editor" onChange={inputHandler}>{markDown}
            </textarea>
        </div>
    )
}