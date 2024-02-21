import "../css/App.css";
import React, { useEffect, useRef } from "react";
import { dia, shapes } from "@joint/core";
import icon from "../assets/awsicons.svg";


function getIcon() {
  const id = "Res_Amazon-SageMaker_Canvas_48";

  const uri = `${icon}#${id}`;
  
  return  (
    uri
  )
};

export default function AWSIcon() {
  const canvas = useRef(null);

  useEffect(() => {
    const graph = new dia.Graph({}, { cellNamespace: shapes });

    const paper = new dia.Paper({
      el: document.getElementById("canvas"),
      model: graph,
      width: 400,
      height: 400,
      async: true,
      cellViewNamespace: shapes,
      // drawGrid: { name: "doubleMesh" },
      // gridSize: 20,
    });

    const standardImage = new shapes.standard.Image({
      position: { x: 10, y: 10 },
      size: { width: 40, height: 40 },
    });

    graph.addCells([
      standardImage,
      standardImage
        .clone()
        .translate(0, 0)
        .attr("image/href", getIcon()),
    ]);

    canvas.current.appendChild(paper.el);

    return () => {
      paper.remove();
    };
  }, []);

  return <div className="canvas" ref={canvas}></div>;
}

