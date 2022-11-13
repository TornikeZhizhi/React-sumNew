import React, { useState } from 'react';




const Drawcarbox = () => {

    const carArray = [
        {img:"https://promos-stage.adjarabet.com/big-choice/static/assets/img/porshe.svg",
        active:true,
        sold:false,
        miniTitle:"Porshe",
        tooltipText:"პორშეს ტექტსი"
        },
        {img:"https://promos-stage.adjarabet.com/big-choice/static/assets/img/porshe.svg",
        active:false,
        sold:true,
        miniTitle:"Porshe",
        tooltipText:"პორშეს ტექტსი"
        },
        {img:"https://promos-stage.adjarabet.com/big-choice/static/assets/img/porshe.svg",
        active:false,
        sold:false,
        miniTitle:"Porshe",
        tooltipText:"პორშეს ტექტსი"
        },
        {img:"https://promos-stage.adjarabet.com/big-choice/static/assets/img/bmw_logo.svg",
        active:false,
        sold:false,
        miniTitle:"BMW",
        tooltipText:"პორშეს ტექტსი"
        },
        {img:"https://promos-stage.adjarabet.com/big-choice/static/assets/img/porshe.svg",
        active:false,
        sold:false,
        miniTitle:"Porshe",
        tooltipText:"პორშეს ტექტსი"
        },
        {img:"https://promos-stage.adjarabet.com/big-choice/static/assets/img/porshe.svg",
        active:false,
        sold:false,
        miniTitle:"Porshe",
        tooltipText:"პორშეს ტექტსი"
        },
        {img:"https://promos-stage.adjarabet.com/big-choice/static/assets/img/porshe.svg",
        active:false,
        sold:false,
        miniTitle:"Porshe",
        tooltipText:"პორშეს ტექტსი"
        },
        {img:"https://promos-stage.adjarabet.com/big-choice/static/assets/img/porshe.svg",
        active:false,
        sold:false,
        miniTitle:"Porshe",
        tooltipText:"პორშეს ტექტსი"
        },
    ]
    
    const [catData, setCarData] = useState(carArray)
    const [tabActive, setTabActive] = useState(0)


    const tabHandler =(tabIndex)=> {
        setTabActive(tabIndex)
    }
    
    const carHandler =(index)=> {
       const finalData = catData.map((data,listIndex)=>{
            if(listIndex == index){
                return {...data,active:true}  
            }else {
                return {...data,active:false}
            }
        })
        setCarData(finalData) 
    }



    return (
        <div className="draw_fluid">
        <div className="draw_tabs_wrapper">
          <div onClick={()=>tabHandler(0)} className={"draw_tab " + (tabActive == 0 ? 'active' : null)}>1 კვირა</div>
          <div onClick={()=>tabHandler(1)} className={"draw_tab " + (tabActive == 1 ? 'active' : null)}>2 კვირა</div>
          <div onClick={()=>tabHandler(2)} className={"draw_tab " + (tabActive == 2 ? 'active' : null)}>3 კვირა</div>
          <div onClick={()=>tabHandler(3)} className={"draw_tab " + (tabActive == 3 ? 'active' : null)}>4 კვირა</div>
        </div>
        <div className="draw_tabs_content_container">

           {tabActive == 0 &&  
            <div className="draw_tabs_content">
            <div className="draw_tabs_date_wrapper">
              <div className="draw_tabs_date">11 SEP</div>
              <div className="draw_tabs_time">20:00</div>
            </div>
            <div className="draw_tabs_body_text">
              <div className="draw_tabs_body_text1">Ბილეთების დაგროვება დასრულდება</div>
              <div className="draw_tabs_body_text2">5 სექ. 23h : 59m</div>
            </div>
            <div className="draw_tabs_quantity_wrapper">
              <div className="draw_tabs_quantity_img"></div>
              <div className="draw_tabs_quantity_text">160</div>
            </div>
             </div> } 
           {tabActive ==1 &&
            <div className="draw_tabs_content">
            <div className="draw_tabs_date_wrapper">
              <div className="draw_tabs_date">12 SEP</div>
              <div className="draw_tabs_time">20:00</div>
            </div>
            <div className="draw_tabs_body_text">
              <div className="draw_tabs_body_text1">Ბილეთების დაგროვება დასრულდება</div>
              <div className="draw_tabs_body_text2">5 სექ. 23h : 59m</div>
            </div>
            <div className="draw_tabs_quantity_wrapper">
              <div className="draw_tabs_quantity_img"></div>
              <div className="draw_tabs_quantity_text">160</div>
            </div>
          </div>
           } 
        
        {tabActive ==2  &&  
          <div className="draw_tabs_content">
            <div className="draw_tabs_date_wrapper">
              <div className="draw_tabs_date">13 SEP</div>
              <div className="draw_tabs_time">20:00</div>
            </div>
            <div className="draw_tabs_body_text">
              <div className="draw_tabs_body_text1">Ბილეთების დაგროვება დასრულდება</div>
              <div className="draw_tabs_body_text2">5 სექ. 23h : 59m</div>
            </div>
            <div className="draw_tabs_quantity_wrapper">
              <div className="draw_tabs_quantity_img"></div>
              <div className="draw_tabs_quantity_text">160</div>
            </div>
          </div> }
          {tabActive == 3  &&  
          <div className="draw_tabs_content">
            <div className="draw_tabs_date_wrapper">
              <div className="draw_tabs_date">15 SEP</div>
              <div className="draw_tabs_time">20:00</div>
            </div>
            <div className="draw_tabs_body_text">
              <div className="draw_tabs_body_text1">Ბილეთების დაგროვება დასრულდება</div>
              <div className="draw_tabs_body_text2">5 სექ. 23h : 59m</div>
            </div>
            <div className="draw_tabs_quantity_wrapper">
              <div className="draw_tabs_quantity_img"></div>
              <div className="draw_tabs_quantity_text">160</div>
            </div>
          </div>
            }
        </div>
        <div className="draw_main_img_wrapper">
       
          {catData.map((data,index)=>{
                return (
                    <div className={"draw_main_img big_img"+(index) + (data.active ? " active": "")}></div>
                )
            })}

        </div>
        <>
        {catData.map((data,index)=>{
                return (
                <div className={"draw_main_img_title_wrapper" + (data.active ? " active" : "")}>
                    <div className="draw_main_img_title">{data.miniTitle}</div>
                    <div className="draw_main_tooltip_wrapper">
                      <div className="draw_tooltip_img"></div>
                      <div className="draw_tooltip_body">
                        <div className="draw_tooltip_title">{data.miniTitle}</div>
                        <div className="draw_tooltip_text">{data.tooltipText}</div>
                      </div>
                    </div>
                  </div>
                )
            })}
        </>
       
        <div className="draw_car_logos_wrapper">
          <div className="draw_logo_container">
            {catData.map((data,index)=>{

               return (
                    <div className={"draw_car_logo " + (data.active ? "active" : "") + (data.sold ? "sold":"")} onClick={()=>carHandler(index)}>
                        <img className='draw_car_active_bg' src='https://promos-stage.adjarabet.com/big-choice/static/assets/img/logo_bg_active.svg' alt=''/>
                        <img className='draw_car' src={data.img} alt=''/>
                        <div className="draw_car_sold">გათამაშდა</div>
                    </div>
                    )
            })}
         
         
          </div>
        </div>

      </div>
    );
};

export default Drawcarbox;