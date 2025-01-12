export interface TransportTime {
    dateTime: string; // ISO 8601 format
    timeDifference: number; // Minutes until departure
    realDateTime: string | null; // Actual departure time
    restriction: string; // Restrictions, if any
    codeNotes: string | null; // Additional notes
    destination: {
      id: number;
      name: string; // Destination name
    };
    accessible: boolean; // Whether accessible
    isCanceled: boolean; // Whether canceled
    isDisrupted: boolean; // Whether disrupted
    isTimeout: boolean; // Whether timed out
  }
  
  interface TransportStop {
    id: number;
    code: string; // Stop code
    name: string; // Stop name
    latitude: number;
    longitude: number;
    isDisrupted: boolean;
    isCancelled: boolean;
    localityName: string; // Locality name
    accessible: boolean; // Accessibility
    logicalId: number; // Logical identifier
  }
  
  interface TransportDirection {
    name: string; // Direction name
    id: number; // Direction ID
  }
  
  interface TransportLine {
    id: number;
    number: string; // Line number
    name: string; // Line name
    transportMode: string; // Mode of transport
    network: string; // Network name
    isDisrupted: boolean; // Disruption status
    color: string; // Line color (hex code)
  }
  
export interface LineSchedule {
    line: TransportLine;
    direction: TransportDirection;
    stop: TransportStop;
    distance: number | null; // Distance to stop, if available
    times: TransportTime[];
  }
  
export interface TransportData {
    transportMode: string; // Mode of transport (e.g., Tram, Bus)
    order: number; // Order in the transport list
    lines: LineSchedule[];
  }
  