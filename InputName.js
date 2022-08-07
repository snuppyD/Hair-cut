export function InputName({setInputText, inputText}) {
    return (
        <div>
            Введіть ім'я своєї тварини:
            <input type='text' value={inputText} onChange = {(e) => setInputText(e.target.value)}></input>
        </div>
    )
    }