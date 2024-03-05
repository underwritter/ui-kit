import React from "react";
import Tooltip from "../tooltip/tooltip";
import {Button} from "../button/button";

export const Page = () => {
  return (
    <div style={{}}>
      <Tooltip
        content="Tooltidfp content       Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima autem quis nobis fuga necessitatibus similique corrupti qui excepturi tempore inventore provident voluptate suscipit unde exercitationem veritatis repellendus, quae aliquam? Incidunt fugit natus quae ipsa harum, aperiam modi. Veniam eum eos sit libero neque ex dignissimos consequatur blanditiis explicabo, sunt eius excepturi asperiores commodi iste minus, similique vitae nobis molestiae odit? Voluptate perferendis animi debitis ut ad necessitatibus molestiae atque totam quo tempora dignissimos eveniet, beatae modi fugiat nam ipsum ipsam rem consectetur quisquam porro hic. Deleniti voluptatum quisquam blanditiis eum consectetur quo reiciendis, quibusdam mollitia excepturi placeat corrupti quas eligendi! "
        position="left"
      >
        <Button label="hui" />
      </Tooltip>
    
    </div>
  );
};
