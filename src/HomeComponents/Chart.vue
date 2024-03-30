<template>
    <svg
      class="bar-chart"
      :viewBox="viewBox"
    >
      <g transform="translate(0, 10)">
        <rect
          v-for="(d, i) in data.slice(1)"
          :key="i"
          class="bar-chart__bar"
          :x="xScale(i)"
          :y="yScale(parseFloat(d[6]))"
          :width="xScale.bandwidth()"
          :height="height - yScale(parseFloat(d[6]))"
          fill="purple"
        />
      </g>
    </svg>
  </template>
  
  <script>
  import * as d3 from 'd3';
  
  export default {
    name: 'ChartD3',
    props: {
      data: {
        required: true,
        type: Array,
      },
      width: {
        default: 500,
        type: Number,
      },
      height: {
        default: 270,
        type: Number,
      },
    },
    data() {
      return {
        padding: 60,
      };
    },
    computed: {
      xScale() {
        return d3
          .scaleBand()
          .domain(this.data[0].slice(1)) 
          .range([0, this.width - this.padding])
          .padding(0.1);
      },
      yScale() {
        return d3
          .scaleLinear()
          .domain([0, d3.max(this.data.slice(1), (d) => parseFloat(d[6]))])
          .nice()
          .range([this.height - this.padding, 0]);
      },
      viewBox() {
        return `0 0 ${this.width} ${this.height}`;
      },
    },
  };
  </script>
  
  <style scoped>
  .bar-chart__bar {
    fill: purple;
  }
  </style>
  