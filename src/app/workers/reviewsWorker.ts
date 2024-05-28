import axios from 'axios';

interface Message {
  type: string;
  payload?: any;
}

self.onmessage = async (event: MessageEvent<Message>) => {
  const message = event.data;
  if (message.type === 'FETCH_REVIEWS') {
    const reviews = await getPlaceReviews(message.payload.placeId);
    self.postMessage({ type: 'REVIEWS_RESULT', payload: reviews });
  }
};

const getPlaceReviews = async (placeId: string) => {
  try {
    const response = await axios.get(`/api/reviews`, {
      params: { placeId },
    });

    if (response.data.error) {
      console.error('Error fetching Google Reviews:', response.data.error);
      return [];
    }

    return response.data;
  } catch (error) {
    console.error('Error fetching Google Reviews:', error);
    return [];
  }
};
