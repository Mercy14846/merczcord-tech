import React, { useState } from 'react';
import { 
  BarChart, Bar, AreaChart, Area, PieChart, Pie, 
  LineChart, Line, XAxis, YAxis, CartesianGrid, 
  Tooltip, Legend, ResponsiveContainer, Cell
} from 'recharts';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

// Sample data for visualizations
const urbanData = [
  { name: '2018', value: 45 },
  { name: '2019', value: 52 },
  { name: '2020', value: 48 },
  { name: '2021', value: 70 },
  { name: '2022', value: 95 },
  { name: '2023', value: 120 }
];

const disasterData = [
  { name: 'Floods', value: 35 },
  { name: 'Hurricanes', value: 25 },
  { name: 'Wildfires', value: 20 },
  { name: 'Earthquakes', value: 15 },
  { name: 'Other', value: 5 }
];

const transportData = [
  { name: 'Jan', cars: 4000, buses: 2400, trains: 1800 },
  { name: 'Feb', cars: 3000, buses: 2210, trains: 1400 },
  { name: 'Mar', cars: 2000, buses: 2290, trains: 1700 },
  { name: 'Apr', cars: 2780, buses: 3490, trains: 2200 },
  { name: 'May', cars: 1890, buses: 3490, trains: 2500 },
  { name: 'Jun', cars: 2390, buses: 2800, trains: 2100 },
];

const environmentalData = [
  { name: '2018', co2: 240, methane: 139 },
  { name: '2019', co2: 250, methane: 148 },
  { name: '2020', co2: 200, methane: 130 },
  { name: '2021', co2: 230, methane: 137 },
  { name: '2022', co2: 245, methane: 141 },
  { name: '2023', co2: 260, methane: 152 }
];

// Colors that work in both light and dark mode
const COLORS = ['#0D3B45', '#FFAA00', '#1A5A69', '#2a9d8f', '#e76f51'];

const DataVisualization: React.FC = () => {
  const [activeChart, setActiveChart] = useState<'urban' | 'disaster' | 'transport' | 'environment'>('urban');
  const { isDarkMode } = useTheme();
  
  // Text and grid colors based on theme
  const textColor = isDarkMode ? '#CBD5E1' : '#6B7280';
  const gridColor = isDarkMode ? '#334155' : '#E5E7EB';

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-subtle p-6">
      <h2 className="text-xl font-medium text-mercz-text dark:text-white mb-6">Geospatial Data Insights</h2>
      
      {/* Chart selection tabs */}
      <div className="flex space-x-1 mb-6 overflow-x-auto pb-2">
        <button
          onClick={() => setActiveChart('urban')}
          className={`px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${
            activeChart === 'urban' 
              ? 'bg-mercz-teal text-white' 
              : 'bg-gray-100 dark:bg-gray-700 text-mercz-text-light dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
          }`}
        >
          Urban Growth
        </button>
        <button
          onClick={() => setActiveChart('disaster')}
          className={`px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${
            activeChart === 'disaster' 
              ? 'bg-mercz-teal text-white' 
              : 'bg-gray-100 dark:bg-gray-700 text-mercz-text-light dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
          }`}
        >
          Disaster Types
        </button>
        <button
          onClick={() => setActiveChart('transport')}
          className={`px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${
            activeChart === 'transport' 
              ? 'bg-mercz-teal text-white' 
              : 'bg-gray-100 dark:bg-gray-700 text-mercz-text-light dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
          }`}
        >
          Transportation
        </button>
        <button
          onClick={() => setActiveChart('environment')}
          className={`px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${
            activeChart === 'environment' 
              ? 'bg-mercz-teal text-white' 
              : 'bg-gray-100 dark:bg-gray-700 text-mercz-text-light dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
          }`}
        >
          Environmental
        </button>
      </div>
      
      {/* Chart content */}
      <div className="h-80">
        <motion.div
          key={activeChart}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="h-full"
        >
          {activeChart === 'urban' && (
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={urbanData}>
                <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
                <XAxis dataKey="name" tick={{ fill: textColor }} />
                <YAxis tick={{ fill: textColor }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: isDarkMode ? '#1E293B' : '#FFFFFF',
                    borderColor: isDarkMode ? '#334155' : '#E5E7EB',
                    color: isDarkMode ? '#F1F5F9' : '#1F2937'
                  }} 
                />
                <Legend wrapperStyle={{ color: textColor }} />
                <Bar dataKey="value" name="Urban Development Projects" fill="#0D3B45" />
              </BarChart>
            </ResponsiveContainer>
          )}
          
          {activeChart === 'disaster' && (
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={disasterData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {disasterData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: isDarkMode ? '#1E293B' : '#FFFFFF',
                    borderColor: isDarkMode ? '#334155' : '#E5E7EB',
                    color: isDarkMode ? '#F1F5F9' : '#1F2937'
                  }} 
                />
                <Legend wrapperStyle={{ color: textColor }} />
              </PieChart>
            </ResponsiveContainer>
          )}
          
          {activeChart === 'transport' && (
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={transportData}>
                <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
                <XAxis dataKey="name" tick={{ fill: textColor }} />
                <YAxis tick={{ fill: textColor }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: isDarkMode ? '#1E293B' : '#FFFFFF',
                    borderColor: isDarkMode ? '#334155' : '#E5E7EB',
                    color: isDarkMode ? '#F1F5F9' : '#1F2937'
                  }} 
                />
                <Legend wrapperStyle={{ color: textColor }} />
                <Line type="monotone" dataKey="cars" stroke="#0D3B45" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="buses" stroke="#FFAA00" />
                <Line type="monotone" dataKey="trains" stroke="#2a9d8f" />
              </LineChart>
            </ResponsiveContainer>
          )}
          
          {activeChart === 'environment' && (
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={environmentalData}>
                <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
                <XAxis dataKey="name" tick={{ fill: textColor }} />
                <YAxis tick={{ fill: textColor }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: isDarkMode ? '#1E293B' : '#FFFFFF',
                    borderColor: isDarkMode ? '#334155' : '#E5E7EB',
                    color: isDarkMode ? '#F1F5F9' : '#1F2937'
                  }} 
                />
                <Legend wrapperStyle={{ color: textColor }} />
                <Area type="monotone" dataKey="co2" name="CO2 Emissions" stroke="#0D3B45" fill="#0D3B45" fillOpacity={0.2} />
                <Area type="monotone" dataKey="methane" name="Methane Levels" stroke="#FFAA00" fill="#FFAA00" fillOpacity={0.2} />
              </AreaChart>
            </ResponsiveContainer>
          )}
        </motion.div>
      </div>
      
      {/* Chart description */}
      <div className="mt-4 text-sm text-mercz-text-light dark:text-gray-300">
        {activeChart === 'urban' && (
          <p>Visualization of urban development projects over the past 6 years, showing significant growth in recent years as urban planning solutions became more advanced and accessible.</p>
        )}
        {activeChart === 'disaster' && (
          <p>Distribution of different disaster types that our disaster management systems have been deployed to monitor and predict, with flooding representing the largest category.</p>
        )}
        {activeChart === 'transport' && (
          <p>Monthly traffic patterns for different transportation modes, demonstrating how our transportation planning solutions help optimize traffic flow and reduce congestion.</p>
        )}
        {activeChart === 'environment' && (
          <p>Six-year trend of environmental indicators from our monitoring systems, showing the relationship between CO2 emissions and methane levels in areas where our environmental assessment tools are deployed.</p>
        )}
      </div>
    </div>
  );
};

export default DataVisualization; 