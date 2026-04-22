import {
  Globe2, Map, Bot, Waves, Plane, Zap, Building2, Shield, Brain,
  Satellite, Cpu, Layers, Radar
} from 'lucide-react'

import smartPropertyImage from './Smart Property.png'
import renewableEnergyImage from './Renewable Energy Allocation System.jpg'
import recceImage from './Recce.png'
import submarineImage from './Submarine.jpg'
import geospatialImage from './Geo spatial.jpg'
import agricultureImage from './AGriculature.webp'
import mk1Image from './Mk-I.jpg'
import mk2Image from './Mk-II.jpg'

export const COMPANY = {
  name: 'Yantrikaran Innovations',
  short: 'Yantrikaran',
  tagline: 'Engineering intelligence for the physical world.',
  founded: '2025',
  email: 'contact@yantrikaran.com',
  phone: '+91 80901 44807',
  address: 'Param Height, Flat No. 504, Opp. Water Tank, Raiyadhar, Raiya Road, Rajkot — 360007, Gujarat',
  linkedin: 'https://www.linkedin.com/company/yantrikaran-innovations/',
  aikosh: 'https://aikosh.indiaai.gov.in/home/public-profile/org/ad170303-ba15-4f20-8214-3327ed3aa0c0',
  mapEmbed: 'https://www.google.com/maps?q=Param+Height+Raiyadhar+Raiya+Road+Rajkot+360007+Gujarat&z=16&output=embed',
  about: [
    'Yantrikaran Innovations Pvt. Ltd. is a deep-tech engineering firm building intelligent systems for the physical world — autonomous machines, sensors and the AI that lets them understand the ground beneath them.',
    'Whether it is an underwater drone, a satellite pipeline or a defence reconnaissance system, the practice is one and the same: engineer hardware, perception and decisioning together, then ship it to industry, governments and research labs.',
  ],
  recognition: [
    'Honoured by the Chief Ministers of Gujarat and Maharashtra',
    'Recognised by the Agriculture Minister of India',
    'Backed by the FITT Delhi Innovation Grant',
    'Contributor on AI Kosh — India AI Mission open-dataset and Model platform',
  ],
}

const UNSPLASH = (id, w = 1200) => `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`

export const DIRECTIONS = [
  {
    id: 'robotics',
    name: 'Robotics',
    headline: 'Autonomous machines that work in the real world.',
    blurb: 'Underwater drones, ground robots and aerial platforms — designed, built and operated end-to-end by our engineering team.',
    icon: Bot,
    accent: 'violet',
    href: '/robotics',
    image: submarineImage,
    capabilities: [
      'Hybrid underwater submarines and ROVs',
      'Edge-AI perception on Jetson / RK3588',
      'SLAM, sensor fusion and autonomous navigation',
      'Custom payload integration and telemetry',
    ],
  },
  {
    id: 'gis',
    name: 'Geospatial AI',
    headline: 'Intelligence layered on top of the earth.',
    blurb: 'Satellite, UAV and AI pipelines that turn raw earth observation into decisions — for governments, defence briefs and operators.',
    icon: Globe2,
    accent: 'cyan',
    href: '/gis',
    image: geospatialImage,
    capabilities: [
      'Sentinel-2 / SAR / GEDI processing on Google Earth Engine',
      'Land-use & land-cover classification with deep learning',
      'UAV photogrammetry and 3D reconstruction',
      'Recce, route and terrain intelligence for defence',
    ],
  },
]

export const GIS_PROJECTS = [
  {
    title: 'AI + GIS Smart Property Identification',
    client: 'Govt. of Andhra Pradesh',
    year: '2025',
    icon: Building2,
    image: smartPropertyImage,
    summary: 'Automated property footprint extraction and ownership intelligence by fusing high-resolution satellite, cadastral and revenue datasets.',
    stack: ['Building footprints', 'YOLOv8', 'PostGIS', 'Mapbox'],
    metric: { label: 'parcels indexed', value: '2.4M+' },
  },
  {
    title: 'Renewable Energy Allocation System',
    client: 'Govt. of Andhra Pradesh',
    year: '2025',
    icon: Zap,
    image: renewableEnergyImage,
    summary: 'AI + GIS decision system that ranks land parcels for solar and wind suitability using slope, irradiance, grid distance and land-use constraints.',
    stack: ['MCDA', 'Solar / wind atlas', 'Open-source GIS', 'React + Mapbox GL'],
    metric: { label: 'parcels scored', value: '~1.1M' },
  },
  {
    title: 'Recce — Defence Reconnaissance Prototype',
    client: 'Govt. defence brief · Under R&D',
    year: '2026',
    icon: Shield,
    image: recceImage,
    summary: 'GIS + UAV reconnaissance prototype for terrain, vegetation, slope and route intelligence across six border districts. Currently under active R&D; field deployment pending.',
    stack: ['Mapbox GL', 'Sentinel-2', 'GEE', 'UAV photogrammetry', 'React'],
    metric: { label: 'AOIs prototyped', value: '6 districts' },
    inProgress: true,
  },
  {
    title: 'GIS-based Agriculture Land Classification',
    client: 'Applied agriculture intelligence · Under R&D',
    year: '2026',
    icon: Map,
    image: agricultureImage,
    summary: 'Agriculture land classification pipeline using Sentinel-2 multispectral imagery and SMAP soil-moisture analysis for crop and suitability mapping.',
    stack: ['Sentinel-2', 'SMAP', 'GEE', 'PyTorch', 'QGIS'],
    metric: { label: 'analysis coverage', value: 'multi-district pilot' },
    inProgress: true,
  },
]

export const ROBOTICS_PROJECTS = [
  {
    title: 'Hybrid Underwater Submarine — Mk-I',
    client: 'Softgear Pvt. Ltd.',
    year: '2024 · 2025',
    icon: Waves,
    image: mk1Image,
    summary: 'Operational hybrid underwater drone for inspection and survey, with onboard computer-vision and acoustic telemetry.',
    stack: ['ROS', 'Edge AI', 'Acoustic telemetry', 'Sensor fusion'],
    metric: { label: 'depth class', value: '50 m' },
    glb: '/sub-mk1.glb',
  },
  {
    title: 'Underwater Submarine — Mk-II',
    client: 'Yantrikaran Innovations',
    year: '2025',
    icon: Waves,
    image: mk2Image,
    summary: 'Earlier-generation submarine platform — the precursor build that informed the current Mk-I refinements and ongoing payload research.',
    stack: ['ROS', 'Sensor fusion', 'Underwater telemetry'],
    metric: { label: 'depth class', value: '40 m' },
    glb: '/sub-mk2.glb',
  },
  {
    title: 'Underwater Submarine — Mk-III',
    client: 'Yantrikaran Innovations',
    year: '2026',
    icon: Waves,
    image: UNSPLASH('photo-1551244072-5d12893278ab'),
    summary: 'Next-generation platform with extended endurance, modular payload bay and improved hydrodynamics. Hardware in active development.',
    stack: ['Modular payload', 'Brushless thrusters', 'Edge AI', 'Cooperative SLAM'],
    metric: { label: 'target endurance', value: '6 h' },
    glb: '/sub-mk3.glb',
    inProgress: true,
  },
]

export const STACK_MARQUEE = [
  'React', 'Three.js', 'Mapbox GL', 'Google Earth Engine', 'Sentinel-2', 'YOLOv8',
  'PyTorch', 'ROS 2', 'Jetson Orin', 'PostGIS', 'TensorRT', 'OpenCV', 'CUDA', 'Edge AI',
]

export const ROBOTICS_CAPS = [
  { icon: Waves,  title: 'Underwater Platforms', text: 'Hybrid submarines and ROVs for inspection, survey and research, depth-rated for the 30-100 m operating envelope.' },
  { icon: Cpu,    title: 'Edge AI Perception',   text: 'Real-time vision and sensor-fusion stacks on Jetson Orin and RK3588 with custom CV pipelines.' },
  { icon: Radar,  title: 'Autonomous Navigation', text: 'SLAM, IMU + DVL + acoustic fusion, and waypoint missions with telemetry over LTE / acoustic mesh.' },
  { icon: Bot,    title: 'ROS-Based Stacks',     text: 'ROS 2 architectures for modular payloads, deterministic control loops, and rapid hardware iteration.' },
]

export const GIS_CAPS = [
  { icon: Satellite, title: 'Earth Observation',   text: 'Sentinel-2, Sentinel-1 SAR, Landsat and GEDI processing pipelines on Google Earth Engine and STAC.' },
  { icon: Layers,    title: 'Deep Classification', text: 'Land-use / land-cover, building footprint and crop classification with U-Net, YOLOv8 and Random Forest ensembles.' },
  { icon: Plane,     title: 'UAV Mapping',         text: 'Photogrammetric pipelines for orthomosaics, DSMs and 3D reconstruction with sub-decimetre accuracy.' },
  { icon: Brain,     title: 'Decision Systems',    text: 'AI + MCDA dashboards for property, energy, agriculture and defence — built for state-scale operators.' },
]
