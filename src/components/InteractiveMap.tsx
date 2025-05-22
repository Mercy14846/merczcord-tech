import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import { useTheme } from '@/contexts/ThemeContext';

// You would need to get a Mapbox access token
// For the demo, we'll use a placeholder
const MAPBOX_TOKEN = 'YOUR_MAPBOX_TOKEN';
mapboxgl.accessToken = MAPBOX_TOKEN;

const DEMO_PROJECTS = [
  {
    id: 1,
    name: 'Urban Planning Project',
    location: [-73.9857, 40.7484], // New York
    description: 'Comprehensive urban planning project in New York City using advanced geospatial analytics.',
    type: 'urban'
  },
  {
    id: 2,
    name: 'Flood Monitoring System',
    location: [-95.3698, 29.7604], // Houston
    description: 'Real-time flood monitoring and prediction system for the greater Houston area.',
    type: 'disaster'
  },
  {
    id: 3,
    name: 'Transportation Optimization',
    location: [-87.6298, 41.8781], // Chicago
    description: 'Traffic flow optimization and public transit planning for Chicago metropolitan area.',
    type: 'transport'
  },
  {
    id: 4,
    name: 'Environmental Assessment',
    location: [-118.2437, 34.0522], // LA
    description: 'Environmental impact assessment for sustainable development in Los Angeles.',
    type: 'environment'
  }
];

interface InteractiveMapProps {
  height?: string;
}

const InteractiveMap: React.FC<InteractiveMapProps> = ({ height = '500px' }) => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [activeProject, setActiveProject] = useState<typeof DEMO_PROJECTS[0] | null>(null);
  const { isDarkMode } = useTheme();
  
  // Filter state for project types
  const [filters, setFilters] = useState({
    urban: true,
    disaster: true,
    transport: true,
    environment: true
  });

  useEffect(() => {
    if (!mapContainer.current) return;
    
    // Initialize map only once
    if (map.current) return;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: isDarkMode 
        ? 'mapbox://styles/mapbox/dark-v11'
        : 'mapbox://styles/mapbox/light-v11',
      center: [-95.7129, 37.0902], // Center of US
      zoom: 3
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add markers for each project
    DEMO_PROJECTS.forEach(project => {
      const markerColor = getMarkerColor(project.type);
      
      const markerElement = document.createElement('div');
      markerElement.className = 'map-marker';
      markerElement.style.width = '20px';
      markerElement.style.height = '20px';
      markerElement.style.borderRadius = '50%';
      markerElement.style.backgroundColor = markerColor;
      markerElement.style.border = '2px solid white';
      markerElement.style.cursor = 'pointer';
      markerElement.style.boxShadow = '0 2px 6px rgba(0,0,0,0.3)';
      
      const marker = new mapboxgl.Marker(markerElement)
        .setLngLat(project.location)
        .addTo(map.current);
        
      markerElement.addEventListener('click', () => {
        setActiveProject(project);
        map.current?.flyTo({
          center: project.location,
          zoom: 10,
          speed: 1.2
        });
      });
    });

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
    };
  }, [isDarkMode]);

  // Update map style when theme changes
  useEffect(() => {
    if (map.current) {
      map.current.setStyle(
        isDarkMode 
          ? 'mapbox://styles/mapbox/dark-v11'
          : 'mapbox://styles/mapbox/light-v11'
      );
    }
  }, [isDarkMode]);

  // Get marker color based on project type
  const getMarkerColor = (type: string): string => {
    switch (type) {
      case 'urban': return '#0D3B45'; // mercz-teal
      case 'disaster': return '#e63946'; // red
      case 'transport': return '#FFAA00'; // mercz-orange
      case 'environment': return '#2a9d8f'; // green
      default: return '#0D3B45';
    }
  };

  // Filter projects
  const toggleFilter = (type: keyof typeof filters) => {
    setFilters(prev => ({ ...prev, [type]: !prev[type] }));
    
    // Re-render markers based on filter
    if (map.current) {
      const markers = document.querySelectorAll('.map-marker') as NodeListOf<HTMLElement>;
      
      DEMO_PROJECTS.forEach((project, index) => {
        const updatedVisibility = filters[project.type as keyof typeof filters] ? 'visible' : 'none';
        if (markers[index]) {
          markers[index].style.display = updatedVisibility;
        }
      });
    }
  };

  return (
    <div className="relative rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 shadow-subtle">
      {/* Map container */}
      <div 
        ref={mapContainer} 
        style={{ height }}
        className="w-full"
      />
      
      {/* Filter controls */}
      <div className="absolute top-4 left-4 bg-white dark:bg-gray-800 shadow-md rounded-md p-3 z-10">
        <div className="text-sm font-medium mb-2 text-mercz-text dark:text-white">Project Types</div>
        <div className="space-y-2">
          <label className="flex items-center space-x-2 text-sm cursor-pointer">
            <input
              type="checkbox"
              checked={filters.urban}
              onChange={() => toggleFilter('urban')}
              className="rounded text-mercz-teal focus:ring-mercz-teal-light"
            />
            <span className="text-mercz-text-light dark:text-gray-300">Urban Planning</span>
          </label>
          <label className="flex items-center space-x-2 text-sm cursor-pointer">
            <input
              type="checkbox"
              checked={filters.disaster}
              onChange={() => toggleFilter('disaster')}
              className="rounded text-mercz-teal focus:ring-mercz-teal-light"
            />
            <span className="text-mercz-text-light dark:text-gray-300">Disaster Management</span>
          </label>
          <label className="flex items-center space-x-2 text-sm cursor-pointer">
            <input
              type="checkbox"
              checked={filters.transport}
              onChange={() => toggleFilter('transport')}
              className="rounded text-mercz-teal focus:ring-mercz-teal-light"
            />
            <span className="text-mercz-text-light dark:text-gray-300">Transportation</span>
          </label>
          <label className="flex items-center space-x-2 text-sm cursor-pointer">
            <input
              type="checkbox"
              checked={filters.environment}
              onChange={() => toggleFilter('environment')}
              className="rounded text-mercz-teal focus:ring-mercz-teal-light"
            />
            <span className="text-mercz-text-light dark:text-gray-300">Environmental</span>
          </label>
        </div>
      </div>
      
      {/* Project details popup */}
      {activeProject && (
        <div className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-80 bg-white dark:bg-gray-800 shadow-lg rounded-md p-4 z-10">
          <h3 className="font-medium text-mercz-text dark:text-white">{activeProject.name}</h3>
          <p className="text-sm text-mercz-text-light dark:text-gray-300 mt-1">{activeProject.description}</p>
          <button
            className="text-xs text-mercz-teal hover:text-mercz-teal-light mt-2"
            onClick={() => setActiveProject(null)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default InteractiveMap; 