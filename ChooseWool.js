export function ChooseWool({setDataBase, setCounter}) {
    return (
        <div>
            ChooseWool:
            <button onClick={() => {setDataBase((prev) => [...prev, 'long']); setCounter((prev) => prev + 1)}}>long</button>
            <button onClick={() => {setDataBase((prev) => [...prev, 'short']); setCounter((prev) => prev + 1)}}>short</button>
        </div>
    )
}