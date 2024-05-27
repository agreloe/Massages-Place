import axios from 'axios';
import { NextResponse } from 'next/server';

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
const BASE_URL = 'https://maps.googleapis.com/maps/api/place/details/json';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const placeId = searchParams.get('placeId');

  if (!placeId) {
    return NextResponse.json({ error: 'Place ID is required' }, { status: 400 });
  }

  if (!API_KEY) {
    console.error('Google API key is missing');
    return NextResponse.json({ error: 'Google API key is missing' }, { status: 500 });
  }

  try {
    const response = await axios.get(BASE_URL, {
      params: {
        place_id: placeId,
        key: API_KEY,
        fields: 'reviews',  // Ensure 'reviews' is the correct field
      },
    });

    if (response.data.result && response.data.result.reviews) {
      return NextResponse.json(response.data.result.reviews, { status: 200 });
    } else {
      console.error('No reviews found in the response:', response.data);
      return NextResponse.json({ error: 'No reviews found' }, { status: 404 });
    }
  } catch (error) {
    console.error('Error fetching Google Reviews:');
    return NextResponse.json({ error: 'Failed to fetch reviews' }, { status: 500 });
  }
}
