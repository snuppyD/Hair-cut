export function ChooseAnimal({setDataBase, setCounter}) {
    return (
        <div>
            ChooseAnimal:
            <button onClick={() => {setDataBase((prev) => [...prev, 'dog']); setCounter((prev) => prev + 1)}}>dog</button>
            <button onClick={() => {setDataBase((prev) => [...prev, 'cat']); setCounter((prev) => prev + 1)}}>cat</button>
        </div>
    )
}

