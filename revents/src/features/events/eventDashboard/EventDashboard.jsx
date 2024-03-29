import React from 'react';
import { Grid } from 'semantic-ui-react';
import EventList from './EventList';
import {useDispatch, useSelector} from 'react-redux';
import EventListItemPlaceholder from './EventListItemPlaceholder';
import EventFilters from './EventFilters';
import { listenToEventsFromFireStore } from '../../../app/firestore/firestoreService';
import { listenToEvents } from '../eventActions';
import useFirestoreCollection from '../../../app/hooks/useFirestoreCollection';
import { useState } from 'react';

export default function EventDashboard() {
    const dispatch = useDispatch();
    const {events} = useSelector(state=> state.event);
    const {loading} = useSelector(state=>state.async);
    const [predicate, setPredicate] = useState(new Map([
        ['startDate', new Date()],
        ['filter', 'all']
    ])
    );

    function handleSetPredicate(key, value) {
        setPredicate(new Map(predicate.set(key, value)));
    }

   useFirestoreCollection({
    query: () => listenToEventsFromFireStore(predicate),
    data: (events) => dispatch(listenToEvents(events)),
    deps: [dispatch, predicate]
   });




    
    return (
        <Grid>  
        <Grid.Column width={10}>
            {loading && 
            <>
            <EventListItemPlaceholder />
            <EventListItemPlaceholder />
            </>
            }
            <EventList events={events}  />
        </Grid.Column>
        <Grid.Column width={6}>
          <EventFilters predicate={predicate} setPredicate={handleSetPredicate} loading={loading} />
        </Grid.Column>
        </Grid> 
    )
}

