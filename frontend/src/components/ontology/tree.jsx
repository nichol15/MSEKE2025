import React from "react";
import { LinkVertical } from "@visx/shape";
import { Group } from "@visx/group";
import { hierarchy, Tree } from "@visx/hierarchy";

import { useState } from "react";
import "../../css/content";

/* This function takes in a nested data format, and outputs a tree */
class CreateTree extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const treedata = Object(this.props.data);
    const width = Number(this.props.width);
    const height = Number(this.props.height);
    const innerWidth = width - 60;
    const innerHeight = height - 150;
  
    return (
      <div>
        <svg width={width} height={height}>           
            <rect width={width} height={height} rx={0} fill="#FFFAFA" fillOpacity={0} />
            <Group top={20} left={20}>
            <Tree
                root={hierarchy(treedata, (d) =>  d.children)}
                size={[innerWidth, innerHeight]}
                separation={(a, b) =>  1 }
            >
                {(tree) => (
                <Group top={0} left={0}>      
                    
                    {tree.links().map((link, i) => (
                        <LinkVertical
                            className="fade-in-four"
                            data={link}
                            key={i}
                            stroke={link.target.data.colour}
                            strokeWidth="1.5"
                            fill="none"
                            display={"block"}
                        />
                    ))}
                   
                    {tree.descendants().map((node, key) => {

                       
                        const width = 110;
                        const height = 40;

                        let top = node.y;
                        let left = node.x;

                        let shape = node.data.shape;
                        let borderRad;
                        let borderDash;
                        if (shape == "set") {
                            borderRad = "25px";
                            borderDash = "none";
                        } else if (shape == "aset") {
                            borderRad = "25px";
                            borderDash = "2px dashed #e0aaff";
                        } else {
                            borderRad = "25px";
                            borderDash = "2px dashed #333333";
                        } 

                        let depth = Number(node.depth)
                        let fadeClass = null;
                        if (depth == 1 || depth == 0) {
                            fadeClass = "fade-in-one";
                        } else if (depth == 2) {
                            fadeClass = "fade-in-two";
                        } else if (depth == 3) {
                            fadeClass = "fade-in-three";
                        } 

                        return (
                            <foreignObject key={key} x={left-width/2} y={top-height/2} width="110" height="100">
                                <div className={fadeClass} >
                                    <div className="nodes" 
                                    style={{
                                        backgroundColor: "#292929",
                                        boxShadow: "rgba(0, 0, 0, 0.23) 0px 6px 6px",
                                        color: "#FFFFFF",
                                        fontFamily: 'Mukta',
                                        lineHeight: "15px",
                                        fontSize: "15px",
                                        borderRadius: borderRad,
                                        border: borderDash,
                                        }}> 
                                        {node.data.name}
                                    </div>
                                </div>
                            </foreignObject>         
                        ); 
                    })}
                </Group>
                )}
            </Tree>
            </Group>
        </svg>
        </div>
    );
  }
}

export default CreateTree;

