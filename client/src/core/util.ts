import {
  Wifi,
  Waves,
  Dumbbell,
  Car,
  PawPrint,
  Tv,
  Thermometer,
  Maximize,
  Home,
  Warehouse,
  Building,
  Castle,
  Trees,
  LucideIcon,
} from "lucide-react";


export const PropertyTypeIcons: Record<string, LucideIcon> = {
  House: Home,
  Tinyhouse: Warehouse,
  Apartment: Building,
  Villa: Castle,
  Townhouse: Home,
  Cottage: Trees,
};

export const AmenityIcons: Record<string, LucideIcon> = {
  WasherDryer: Waves,
  AirConditioning: Thermometer,
  Dishwasher: Waves,
  HighSpeedInternet: Wifi,
  HardwoodFloors: Home,
  WalkInClosets: Maximize,
  Microwave: Tv,
  Refrigerator: Thermometer,
  Pool: Waves,
  Gym: Dumbbell,
  Parking: Car,
  PetsAllowed: PawPrint,
  WiFi: Wifi,
};


export const SIDEBAR_HEIGHT = '40px'
export const VIEW_HEIGHT = `calc(100vh - ${SIDEBAR_HEIGHT})`
export const SIDEBAR_OPEN_WIDTH = '400px'
export const SIDEBAR_CLOSED_WIDTH = '0px'

export type FetchApi = {
  url: string
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  headers?: { [key: string]: string }
}

export const fetch_api = async <T = unknown>({ url, method = 'GET', headers = {} }: FetchApi) => {
  return fetch(url, {
    method,
    headers: {
      ...headers
    },
    credentials: 'include'
  })
    .then(async (res) => {
      if (!res.ok) throw new Error(await res.text());
      return await res.json() as T
    })
}