export interface Coordinates {
  latitude: number;
  longitude: number;
}

export interface Address extends Coordinates {
  id: string;
  name: string;
  area: string;
  city: string;
  state: string;
  country: string;
  zipCode?: string;
  fullAddress: string;
}

export interface MarkerPosition {
  x: number;
  y: number;
}

export interface SelectedLocation {
  latitude: string;
  longitude: string;
  address: Address | null;
}

export interface GestureEvent {
  nativeEvent: {
    locationX: number;
    locationY: number;
  };
}

export interface PanGesture {
  dx: number;
  dy: number;
}
