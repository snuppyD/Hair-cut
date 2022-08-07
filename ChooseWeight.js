export function ChooseWeight({setDataBase, setCounter}) {
    return (
        <div>
            ChooseWeight:
            <button onClick={() => {setDataBase((prev) => [...prev, 'small']); setCounter((prev) => prev + 1)}}>small</button>
            <button onClick={() => {setDataBase((prev) => [...prev, 'middle']); setCounter((prev) => prev + 1)}}>middle</button>
            <button onClick={() => {setDataBase((prev) => [...prev, 'big']); setCounter((prev) => prev + 1)}}>big</button>
        </div>
    )
}