import { useState } from "react";
import { Pie } from "@visx/shape";
import { Group } from "@visx/group";
import { Text } from "@visx/text";

//REPLICHE INDICATORI IN SVG
//NON TROVANDO UNA LIBRERIA CHE FACESSE DONUTS IDENTICI, è STATO RICREATO UN SIMILE
//IL PROSSIMO STEP, GIA TESTATO è DI UTILIZZARE CHART.JS O SIMILARE PER RECUPERO DATI FETCH DINAMICI

const performance = [
  { symbol: "Performance", amount: 5, color: "#00ffbd", inVar: 37.6 },
  { symbol: "null", amount: 0.03, color: "#F7931A", inVar: 37363 },
];

const accessibility = [
  { symbol: "Accessibility", amount: 5, color: "#00ffbd", inVar: 37.6 },
  { symbol: "null", amount: 0.009, color: "#F7931A", inVar: 37363 },
];

const bestpractices = [
  { symbol: "Best Practices", amount: 5, color: "#00ffbd", inVar: 37.6 },
  { symbol: "null", amount: 0.04, color: "#F7931A", inVar: 37363 },
];

const seo = [
  { symbol: "Seo", amount: 5, color: "#00ffbd", inVar: 37.6 },
  { symbol: "null", amount: 0.007, color: "#F7931A", inVar: 37363 },
];

const pwa = [
  { symbol: "Pwa", amount: 5, color: "#5a5e68", inVar: 37.6 },
  { symbol: "null", amount: 0, color: "#5a5e68", inVar: 37363 },
];

export default function Dashboard() {
  const [active, setActive] = useState(null);
  const width = 100;
  const half = width / 2;

  return (
    <main>
      <svg width={width} height={width}>
        <Group top={half} left={half}>
          <Pie
            data={performance}
            pieValue={(data) => data.amount * data.inVar}
            outerRadius={half}
            innerRadius={({ data }) => {
              const size = active && active.symbol === data.symbol ? 12 : 8;
              return half - size;
            }}
            padAngle={0.01}
          >
            {(pie) => {
              return pie.arcs.map((arc) => {
                return (
                  <g>
                    <path d={pie.path(arc)} fill={arc.data.color}></path>
                  </g>
                );
              });
            }}
          </Pie>

          {active ? (
            <>
              <Text textAnchor="middle" fill="#fff" fontSize={40} dy={-20}>
          
              </Text>

              <Text
                textAnchor="middle"
                fill={active.color}
                fontSize={20}
                dy={20}
              >
                {`${active.amount} ${active.symbol}`}
              </Text>
            </>
          ) : (
            <>
              <Text textAnchor="middle" fill="#f7931a" fontSize={30} dy={0}>
                80
              </Text>

              <Text textAnchor="middle" fill="#aaa" fontSize={12} dy={18}>
                {`Performance`}
              </Text>
            </>
          )}
        </Group>
      </svg>


      <svg width={width} height={width}>
        <Group top={half} left={half}>
          <Pie
            data={accessibility}
            pieValue={(data) => data.amount * data.inVar}
            outerRadius={half}
            innerRadius={({ data }) => {
              const size = active && active.symbol === data.symbol ? 12 : 8;
              return half - size;
            }}
            padAngle={0.01}
          >
            {(pie) => {
              return pie.arcs.map((arc) => {
                return (
                  <g>
                    <path d={pie.path(arc)} fill={arc.data.color}></path>
                  </g>
                );
              });
            }}
          </Pie>

          {active ? (
            <>
              <Text textAnchor="middle" fill="#fff" fontSize={40} dy={-20}>
              
              </Text>

              <Text
                textAnchor="middle"
                fill={active.color}
                fontSize={20}
                dy={20}
              >
                {`${active.amount} ${active.symbol}`}
              </Text>
            </>
          ) : (
            <>
              <Text textAnchor="middle" fill="#f7931a" fontSize={30} dy={0}>
                60
              </Text>

              <Text textAnchor="middle" fill="#aaa" fontSize={12} dy={18}>
                {`Accessibility`}
              </Text>
            </>
          )}
        </Group>
      </svg>


      <svg width={width} height={width}>
        <Group top={half} left={half}>
          <Pie
            data={bestpractices}
            pieValue={(data) => data.amount * data.inVar}
            outerRadius={half}
            innerRadius={({ data }) => {
              const size = active && active.symbol === data.symbol ? 12 : 8;
              return half - size;
            }}
            padAngle={0.01}
          >
            {(pie) => {
              return pie.arcs.map((arc) => {
                return (
                  <g>
                    <path d={pie.path(arc)} fill={arc.data.color}></path>
                  </g>
                );
              });
            }}
          </Pie>

          {active ? (
            <>
              <Text textAnchor="middle" fill="#fff" fontSize={40} dy={-20}>
              
              </Text>

              <Text
                textAnchor="middle"
                fill={active.color}
                fontSize={20}
                dy={20}
              >
                {`${active.amount} ${active.symbol}`}
              </Text>
            </>
          ) : (
            <>
              <Text textAnchor="middle" fill="#f7931a" fontSize={30} dy={0}>
                90
              </Text>

              <Text textAnchor="middle" fill="#aaa" fontSize={12} dy={18}>
                {`Best Practies`}
              </Text>
            </>
          )}
        </Group>
      </svg>


      <svg width={width} height={width}>
        <Group top={half} left={half}>
          <Pie
            data={seo}
            pieValue={(data) => data.amount * data.inVar}
            outerRadius={half}
            innerRadius={({ data }) => {
              const size = active && active.symbol === data.symbol ? 12 : 8;
              return half - size;
            }}
            padAngle={0.01}
          >
            {(pie) => {
              return pie.arcs.map((arc) => {
                return (
                  <g>
                    <path d={pie.path(arc)} fill={arc.data.color}></path>
                  </g>
                );
              });
            }}
          </Pie>

          {active ? (
            <>
              <Text textAnchor="middle" fill="#fff" fontSize={40} dy={-20}>
              
              </Text>

              <Text
                textAnchor="middle"
                fill={active.color}
                fontSize={20}
                dy={20}
              >
                {`${active.amount} ${active.symbol}`}
              </Text>
            </>
          ) : (
            <>
              <Text textAnchor="middle" fill="#f7931a" fontSize={30} dy={0}>
                55
              </Text>

              <Text textAnchor="middle" fill="#aaa" fontSize={12} dy={18}>
                {`SEO`}
              </Text>
            </>
          )}
        </Group>
      </svg>


      <svg width={width} height={width}>
        <Group top={half} left={half}>
          <Pie
            data={pwa}
            pieValue={(data) => data.amount * data.inVar}
            outerRadius={half}
            innerRadius={({ data }) => {
              const size = active && active.symbol === data.symbol ? 12 : 8;
              return half - size;
            }}
            padAngle={0.01}
          >
            {(pie) => {
              return pie.arcs.map((arc) => {
                return (
                  <g>
                    <path d={pie.path(arc)} fill={arc.data.color}></path>
                  </g>
                );
              });
            }}
          </Pie>

          {active ? (
            <>
              <Text textAnchor="middle" fill="#fff" fontSize={40} dy={-20}>
              
              </Text>

              <Text
                textAnchor="middle"
                fill={active.color}
                fontSize={20}
                dy={20}
              >
                {`${active.amount} ${active.symbol}`}
              </Text>
            </>
          ) : (
            <>
              <Text textAnchor="middle" fill="#f7931a" fontSize={30} dy={0}>
                ///
              </Text>

              <Text textAnchor="middle" fill="#aaa" fontSize={12} dy={18}>
                {`PWA`}
              </Text>
            </>
          )}
        </Group>
      </svg>
    </main>
  );
}