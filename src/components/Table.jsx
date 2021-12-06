import React, { useContext } from 'react';

import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { data } = useContext(PlanetsContext);
  const firstPlanet = Object.keys(data[0]);
  const hexadecimal = 16;
  return (
    <table>
      <thead>
        <tr>
          {
            firstPlanet
              .filter((planetFeature) => planetFeature !== 'residents')
              .map((feature) => (
                <th key={ feature }>{ feature }</th>
              ))
          }
        </tr>
      </thead>
      <tbody>
        {
          data.map((planet) => {
            delete planet.residents;
            const planetInfos = Object.values(planet);
            return (
              <tr key={ Math.random() }>
                {
                  planetInfos.map((planetInfo) => (
                    <td key={ (Math.random()).toString(hexadecimal) }>
                      {' '}
                      { planetInfo }
                    </td>
                  ))
                }
              </tr>
            );
          })
        }
      </tbody>
    </table>
  );
}

export default Table;