export function PriceCalculation({DataBase, inputText, setCounter}) {
    const a = {
        dog: {
          weight: {
            small: 12,
            middle: 20,
            big: 30,
          },
          wool: {
            long: 30,
            short: 10,
          },
          room: {
            standard: 5,
            lux: 15,
          },
        },
        cat: {
          weight: {
            small: 8,
            middle: 15,
            big: 20,
          },
          wool: {
            long: 20, 
            short: 12,
          },
          room: {
            standard: 4,
            lux: 12,
          },
        },
      }
    const result = a[DataBase[0]].weight[DataBase[1]] + a[DataBase[0]].wool[DataBase[2]] + a[DataBase[0]].room[DataBase[3]]
    return (
        <div>
            Вартість стрижки:
            {inputText}
            {result}
            <button onClick={setCounter(0)}>Restart</button>
        </div>
    )
}
