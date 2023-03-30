import useAsync from '../useAsync';
import useToken from '../useToken';

import * as ticketTypesApi from '../../services/ticketsApi';

export default function useTicketTypes() {
  const token = useToken();
  const {
    data: ticketTypes,
    loading: ticketTypesLoading,
    error: ticketTypesError,
  } = useAsync(() => ticketTypesApi.getTicketTypes(token));

  return {
    ticketTypes,
    ticketTypesLoading,
    ticketTypesError,
  };
}
