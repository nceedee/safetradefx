import { uid } from "../../stores/stores";

export const useEarnedInterest = async (id) => {
	console.log(uid.id,id)
  try {
    const url = `https://tanstack-fetch-default-rtdb.firebaseio.com/investmentPlan/${uid.id}.json`	;
    
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    const data = await response.json();
    console.log('Investment Plan Data:', data);

    // Handle the data as needed
    return data;
  } catch (error) {
    console.error('Error fetching investment plan:', error);
  }
};