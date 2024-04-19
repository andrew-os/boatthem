import type { Schema, Attribute } from '@strapi/strapi';

export interface DepartsDeparts extends Schema.Component {
  collectionName: 'components_departs_departs';
  info: {
    displayName: 'Departs';
    icon: 'clock';
  };
  attributes: {
    Departs: Attribute.Time;
  };
}

export interface DepartsDepartures extends Schema.Component {
  collectionName: 'components_departs_departures';
  info: {
    displayName: 'Departures';
  };
  attributes: {
    Departs: Attribute.Time & Attribute.DefaultTo<'10:15'>;
    Returns: Attribute.Time;
  };
}

export interface DeparturesDeparts extends Schema.Component {
  collectionName: 'components_departures_departs';
  info: {
    displayName: 'Departs';
  };
  attributes: {
    Depart: Attribute.Time & Attribute.DefaultTo<'10:15'>;
    Returns: Attribute.Time;
  };
}

export interface ReturnsReturns extends Schema.Component {
  collectionName: 'components_returns_returns';
  info: {
    displayName: 'Returns';
    icon: 'clock';
    description: '';
  };
  attributes: {
    Time: Attribute.Time;
  };
}

export interface TimesDepartureTimes extends Schema.Component {
  collectionName: 'components_times_departure_times';
  info: {
    displayName: 'Departure times';
  };
  attributes: {
    Time: Attribute.Time & Attribute.DefaultTo<'10:15'>;
  };
}

export interface TimesReturnTimes extends Schema.Component {
  collectionName: 'components_times_return_times';
  info: {
    displayName: 'Return times';
    description: '';
  };
  attributes: {
    Time: Attribute.Time;
    ReturnQuay: Attribute.Enumeration<
      [
        'Church Quay',
        'Annikas Quay',
        'New Grimsby',
        'Carn Near',
        'Old Grimsby',
        'Lower Town',
        'Higher Town'
      ]
    >;
  };
}

export interface TimesTripTimes extends Schema.Component {
  collectionName: 'components_times_trip_times';
  info: {
    displayName: 'Trip times';
    icon: 'clock';
  };
  attributes: {
    Departs: Attribute.Time & Attribute.DefaultTo<'10:15'>;
    Returns: Attribute.Time;
  };
}

export interface TripsTrips extends Schema.Component {
  collectionName: 'components_trips_trips';
  info: {
    displayName: 'Trips';
    icon: 'clock';
    description: '';
  };
  attributes: {
    boats: Attribute.Relation<'trips.trips', 'oneToMany', 'api::boat.boat'>;
    routes: Attribute.Relation<'trips.trips', 'oneToMany', 'api::route.route'>;
    Departs: Attribute.Component<'times.departure-times', true>;
    Returns: Attribute.Component<'times.return-times', true>;
    Title: Attribute.String;
    Steps: Attribute.Enumeration<
      ['One', 'Two', 'Three', 'Four', 'Five', 'Old Quay']
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'departs.departs': DepartsDeparts;
      'departs.departures': DepartsDepartures;
      'departures.departs': DeparturesDeparts;
      'returns.returns': ReturnsReturns;
      'times.departure-times': TimesDepartureTimes;
      'times.return-times': TimesReturnTimes;
      'times.trip-times': TimesTripTimes;
      'trips.trips': TripsTrips;
    }
  }
}
