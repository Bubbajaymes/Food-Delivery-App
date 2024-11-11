import { Button } from 'antd';
import React, { useState } from 'react'

const  MyButton = ({text}) =>  {
  const [hover, setHover] = useState(false);
  return (
    <div>
        
        <Button
          type="primary"
          style={{
            background: hover ? "#fa8449" : "#ff5400",
            fontSize: "max(1vw, 16px)",
            fontWeight: '400',
            color: "black",
            border: "",
            padding: "1vw 2.3vw",
            borderRadius: "",
            transition: "background 0.3s ease",
          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          {text}
        </Button>
    </div>
  )
}

export default MyButton;
