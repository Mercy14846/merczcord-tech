# Merczcord Technologies Website

## Project Overview

This is the official website for Merczcord Technologies, a dynamic firm specializing in providing cutting-edge geospatial solutions. The website showcases the company's services, mission, and contact information in a modern, responsive design.

## Features

- **Modern UI/UX**: Clean, minimalist design with smooth animations and transitions
- **Responsive Layout**: Fully responsive across all device sizes (mobile, tablet, desktop)
- **Service Showcase**: Detailed information about our geospatial solutions and services
- **Contact Form**: Easy-to-use contact form for inquiries and collaboration opportunities
- **Performance Optimized**: Fast loading times and optimized assets
- **Brand Integration**: Consistent use of Merczcord brand colors (teal and orange) and logo throughout

### Advanced Features

- **Interactive Map**: Visual representation of global projects with filtering capabilities
- **Data Visualization**: Interactive charts and graphs showcasing geospatial data insights
- **Dark Mode**: Toggle between light and dark themes for improved user experience
- **Multilingual Support**: Available in English, Spanish, and French
- **Chatbot Assistant**: AI-powered chatbot for answering common questions
- **Progressive Web App (PWA)**: Installable on devices with offline capabilities
- **Animations**: Smooth, subtle animations using Framer Motion for enhanced UX

## Technology Stack

- **Frontend Framework**: React with TypeScript
- **Styling**: Tailwind CSS with custom theming
- **Data Visualization**: Recharts for charts and graphs
- **Mapping**: Mapbox GL for interactive maps
- **Internationalization**: i18next for multilingual support
- **Animations**: Framer Motion
- **Deployment**: Render (optimized for free tier)

## Development

### Prerequisites

- Node.js (v18.0.0 or higher)
- npm or yarn

### Setup

1. Clone the repository
   ```
   git clone https://github.com/yourusername/merczcord-tech.git
   cd merczcord-tech
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Start the development server
   ```
   npm run dev
   ```

4. Open [http://localhost:8080](http://localhost:8080) in your browser

### Build

To build the project for production:

```
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Deployment

The website is configured for deployment on Render. The `render.yaml` file in the project root provides the configuration needed for seamless deployment.

### Steps to deploy:

1. Create a new Web Service on Render
2. Connect to your GitHub repository
3. Render will automatically detect the `render.yaml` file and configure the deployment

## Customization

- **Colors**: Update the theme in `tailwind.config.ts`
- **Content**: Modify content in the individual component files
- **Translations**: Edit language files in `src/i18n.ts`

## License

Copyright © 2023 Merczcord Technologies. All rights reserved.