// lib/googlePlaces.ts
import axios from 'axios';

export const getPlaceReviews = async (placeId: string) => {
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
