import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { ResponsiveAreaBump } from '@nivo/bump'
import Data from '../data/data'

function Plotter() {
  // console.log(Data.map((dt) => 
  //   console.log(dt.id))
  // )
  return (
    <div className="flex flex-row">
      <div className="h-96 w-[65%] bg-white">
        <ResponsiveAreaBump
          data={Data}
          margin={{ top: 40, right: 100, bottom: 40, left: 100 }}
          spacing={8}
          colors={{ scheme: "nivo" }}
          blendMode="multiply"
          defs={[
            {
              id: "dots",
              type: "patternDots",
              background: "inherit",
              color: "#38bcb2",
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: "lines",
              type: "patternLines",
              background: "inherit",
              color: "white",
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
          ]}
          fill={[
            {
              match: {
                id: "CoffeeScript",
              },
              id: "dots",
            },
            {
              match: {
                id: "TypeScript",
              },
              id: "lines",
            },
          ]}
          startLabel="id"
          endLabel="id"
          axisTop={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "",
            legendPosition: "middle",
            legendOffset: -36,
          }}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "",
            legendPosition: "middle",
            legendOffset: 32,
          }}
        />
      </div>
      <div className="ml-2 mr-2  bg-white w-[40%]">
        <div>
          <div class="sticky h-12 text-center text-2xl font-semibold bg-slate-200">
            Recent Clients
          </div>
          <div>
            {Data.map((recent) => (
              <div>
                <hr className='mr-6 ml-6' style={{color:"gray"}}/>
              <div className="flex flex-row items-center">
                <div>
                  <img
                    className="rounded-full m-2 w-12 h-12 border-2 border-gray-400"
                    src={recent.img}
                  />
                </div>
                <div className='text-2xl p-2'>{recent.firstName}</div>
                <div className='text-2xl p-2'>{recent.id}</div>
              </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plotter