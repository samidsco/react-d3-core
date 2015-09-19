"use strict";

import {
  default as React,
  Component,
} from 'react';

import {
  Chart as Chart,
} from '../../index.jsx';

(() => {

  const width = 960,
    height = 500,
    margins = {top: 20, right: 50, bottom: 20, left: 50},
    id = "test-chart",
    title = "test chart lib",
    svgClassName = "test-chart-class",
    titleClassName = "test-chart-title-class";

  React.render(
    <Chart
      title= {title}
      width= {width}
      height= {height}
      margins= {margins}
      svgClassName= {svgClassName}
      titleClassName= {titleClassName}
    />
  , document.getElementById('blank-container')
  )
})()