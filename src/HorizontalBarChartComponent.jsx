import React, { useEffect } from 'react';
import Chart from 'chart.js/auto';

const HorizontalBarChartComponent = ({ FaMicrophone, buttons, TbBrandAsana }) => {
  useEffect(() => {
    let chartInstance = null;

    const data = {
      labels: ['9:41AM','11AM','1PM','3PM'   ],
      datasets: [
        {
          label: 'Events',
          data: [1, 1, 2, 0],
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };

    const options = {
      indexAxis: 'y',
      scales: {
        x: {
          beginAtZero: true,
        },
      },
    };

    const canvas = document.getElementById('myChart');
    const context = canvas.getContext('2d');

    if (chartInstance) {
      chartInstance.destroy();
    }

    chartInstance = new Chart(context, {
      type: 'bar',
      data: data,
      options: options,
    });

    return () => {
      if (chartInstance) {
        chartInstance.destroy();
      }
    };
  }, [buttons, FaMicrophone, TbBrandAsana]);

  return (
    
          <div>
              <div className='d-flex justify-content-between block-top'>
                  <p>See my availability:today</p>
                  <p className='sender-name'><FaMicrophone/></p>
              </div>
              <div className='inside-card-2'>
                  <div>
                  <h2>Available until 1 PM</h2>
                      <p className='coff-aval'>Would you like to create an event for Coffee with Marisa at 11AM?</p>
                       <canvas id='myChart'></canvas>
              </div>
              <ul className='buttons-container'>
                  {buttons.map(each => (
                      each.id === 2 && <button type="button" className='buttons' key={each.key}>{each.name}</button>
                  ))}
              </ul>
               <p className='sender-name'><TbBrandAsana/>More actions</p>
              </div>
     
       
      </div>
    
    
  );
};

export default HorizontalBarChartComponent;
