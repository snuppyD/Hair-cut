export function ChooseRoom({setDataBase, setCounter}) {
    return (
        <div>
            ChooseWeight:
            <button onClick={() => {setDataBase((prev) => [...prev, 'standard']); setCounter((prev) => prev + 1)}}>standard</button>
            <button onClick={() => {setDataBase((prev) => [...prev, 'lux']); setCounter((prev) => prev + 1)}}>lux</button>
        </div>
    )
}
