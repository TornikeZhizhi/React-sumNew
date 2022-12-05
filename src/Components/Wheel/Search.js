import React, { useState } from 'react';




const SearchTest = () => {

    const [films, setFilms] = useState([
        { name: "spiderd", text: "bla bla bla" },
        { name: "batman", text: "haha haha haha" },
        { name: "panda", text: "yeyeye ye ye ye " }
    ])
    const [inputValue, setInputValue] = useState("")

    return (
        <div>
             <input onChange={(e) => {
                     setInputValue(e.target.value)
                }} type="text" />
        
                {films.map((item) => {
                    if(item.name.includes(inputValue)){
                        return (
                            <div>
                                {item.name} - {item.text}
                            </div>
                        )

                    }

                    
                })}
        </div>
    );
};

export default SearchTest;


