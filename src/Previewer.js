import './Previewer.css'
import { marked } from 'marked'
import { useEffect } from 'react'

export default function Previewer({markDown}) {

    useEffect(() => {
        console.log(typeof markDown)
        document.getElementById('preview').innerHTML =
      marked.parse(markDown)
    })

    return (
        <div className='container-previewer'>
            <header className='header-previewer'><h1>Previewer</h1></header>
            <div id="preview"></div>
        </div>
    )
}