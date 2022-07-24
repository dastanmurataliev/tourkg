import React from 'react';




export  default function Mode({mode, changeMode}) {
  let ChangeModeText = mode.current === "day" ? "Ночной режим" : "Дневной режим"
  const buttonHandler = () => {
    const newValue = mode.current === "day" ? "night": "day"
    changeMode({current: newValue})
  }
  const style = {
    day: {
      color: "black",
      backgroundColor: "white",
      padding: "10px"
    },
    night: {
      color: "white",
      backgroundColor: "black",
      border: "2px solid white",
      padding: "10x"
    }
  }
  const newColor = mode.current === "day" ? style.day : style.night
  return (
    <div style={newColor}>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto quia hic reiciendis suscipit. Mollitia iusto sed repellat tempore recusandae ipsa eaque nulla sequi itaque tenetur, aperiam, commodi blanditiis expedita aliquid excepturi explicabo eligendi at neque saepe amet pariatur? Facere vero possimus autem. Unde iusto laboriosam nobis nihil maxime laborum dolore temporibus possimus perferendis hic voluptatibus, tempora quidem distinctio dolorem molestiae placeat exercitationem rem. Saepe veniam officiis optio sunt incidunt explicabo laboriosam doloremque, quod tempora exercitationem nisi repellat nulla vel fuga facilis ipsam sit corporis id ratione. Optio, eos! Esse voluptatem hic illum voluptas ullam at quidem perspiciatis cum quae aut.</p>
      <button onClick={buttonHandler} style={newColor} className="button">{ChangeModeText}</button>
      
    </div>
  )
}