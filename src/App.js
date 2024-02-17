import "./App.css";
import React, { useEffect, useRef } from "react";
import { dia, shapes } from "@joint/core";

function App() {
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
    });

    const bucketSVGFile = "bucket.svg";

    const bucketImage = `<?xml version="1.0" encoding="UTF-8"?>
    <svg width="48px" height="48px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <title>Bucket</title>
        <g id="Bucket" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <path d="M8,31 L10,31 C10,32.654 11.346,34 13,34 L15,34 C16.654,34 18,32.654 18,31 C18,29.346 16.654,28 15,28 L15,26 C17.757,26 20,28.243 20,31 C20,33.757 17.757,36 15,36 L13,36 C10.243,36 8,33.757 8,31 M4,31 C4,32.654 5.346,34 7,34 L7,36 C4.243,36 2,33.757 2,31 C2,28.243 4.243,26 7,26 L9,26 C11.757,26 14,28.243 14,31 L12,31 C12,29.346 10.654,28 9,28 L7,28 C5.346,28 4,29.346 4,31 M41.757,28.033 L41.944,26.554 C43.324,27.439 43.781,27.969 43.931,28.214 C43.678,28.266 43.071,28.305 41.757,28.033 M24.275,12.5 C13.002,12.5 6.942,10.372 6.109,8.955 L6.041,8.469 C6.463,6.808 13.297,4 24.275,4 C35.55,4 41.842,6.868 42.224,8.476 L42.161,8.97 C41.339,10.52 35.052,12.5 24.275,12.5 M45.968,28.004 C45.766,26.92 44.598,25.782 42.221,24.377 L44.114,9.467 C44.208,9.2 44.261,8.922 44.261,8.631 C44.261,8.564 44.251,8.499 44.246,8.433 L44.253,8.376 L44.241,8.374 C43.831,4.379 33.895,2 24.275,2 C14.505,2 4.413,4.385 4.019,8.388 L4.01,8.39 L4.016,8.431 C4.01,8.497 4,8.563 4,8.631 C4,8.94 4.062,9.234 4.169,9.516 L6.214,24 L8.234,24 L6.504,11.749 C10.271,13.73 17.663,14.5 24.275,14.5 C30.803,14.5 38.101,13.728 41.809,11.74 L40.069,25.442 L40.062,25.454 L40.067,25.457 L39.804,27.532 C35.407,26.248 29.296,23.54 26.077,22.055 C26.107,21.918 26.124,21.777 26.124,21.631 C26.124,20.528 25.229,19.631 24.131,19.631 C23.031,19.631 22.137,20.528 22.137,21.631 C22.137,22.734 23.031,23.631 24.131,23.631 C24.291,23.631 24.444,23.607 24.593,23.572 C28.034,25.178 34.756,28.188 39.549,29.541 L38.142,40.622 C38.137,40.664 38.134,40.706 38.134,40.748 C38.134,40.925 37.756,41.536 36.032,42.23 C35.275,42.535 34.379,42.81 33.366,43.047 C30.76,43.662 27.562,44 24.36,44 C20.73,44 17.085,43.56 14.36,42.792 C11.281,41.924 10.589,41.002 10.589,40.748 C10.589,40.701 10.586,40.655 10.579,40.608 L10.211,38 L8.19,38 L8.59,40.829 C8.725,44.594 18.306,46 24.36,46 C27.711,46 31.072,45.643 33.824,44.994 C34.935,44.734 35.928,44.428 36.779,44.086 C38.964,43.205 40.092,42.107 40.133,40.82 L41.504,30.019 C42.258,30.168 42.915,30.252 43.462,30.252 C44.467,30.252 45.144,29.999 45.573,29.49 C45.929,29.071 46.068,28.543 45.968,28.004" id="Fill-1" fill="#7AA116"></path>
        </g>
    </svg>`;

    const standardImage = new shapes.standard.Image({
      position: { x: 100, y: 100 },
      size: { width: 100, height: 100 },
      attrs: {
        image: {
          // href: `data:image/svg+xml;utf8,${encodeURIComponent(bucketImage)}`,
          href: `data:image/svg+xml;utf8,${encodeURIComponent(bucketSVGFile)}`,
        },
      },
    });

    graph.addCells(standardImage);

    canvas.current.appendChild(paper.el);

    return () => {
      paper.remove();
    };
  }, []);

  return <div className="canvas" ref={canvas}></div>;
}

export default App;
