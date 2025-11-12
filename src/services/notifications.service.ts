import axios from 'axios';

interface NotificationData {
  name: string;
  email: string;
  phone: string;
  message?: string;
}

export async function sendNotification(data: NotificationData) {
  const url = new URL(`${import.meta.env.PUBLIC_API_URL}/v1/notification/public`);
  let id = localStorage.getItem('id');
  if(!id) {
    id = crypto.randomUUID();
    localStorage.setItem('id', id);
  }

  url.searchParams.set('id', id);
  const body = {
    name: data.name,
    email: data.email,
    phone: data.phone,
    message: data.message,
    client: 'La Casa del Bosque de Nubes',
  }
  try {
    const response = await axios.post(url.toString(), body, {
      headers: {
        'Content-Type': 'application/json',
        'public-api-key': import.meta.env.PUBLIC_API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    if(axios.isAxiosError(error) && error.response?.data?.code === 'RATE_LIMIT_EXCEEDED') {
      throw new Error('RATE_LIMIT_EXCEEDED');
    }

    throw error;
  }
}

