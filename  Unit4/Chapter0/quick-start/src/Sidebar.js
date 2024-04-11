import {useState} from 'react'
function Sidebar(){
    const [value, setValue] = useState(9)
    const hello = () => {
        setValue(value + 1)
        console.log(value)
    }
    return(
        <button className="sidebar" 
        onClick={hello}
        style={{
            color: 'red',
            'font-size': '10px'
        }}>{ value }</button>
    )
}
export default Sidebar